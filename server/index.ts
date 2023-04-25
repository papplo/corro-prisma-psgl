// Note that this file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562

import express from 'express'
import compression from 'compression'
import { renderPage } from 'vite-plugin-ssr/server'
import { root } from './root.js'
import * as Prisma from '@prisma/client'

const isProduction = process.env.NODE_ENV === 'production'
const prisma = new Prisma.PrismaClient();

startServer()

async function startServer() {
  const app = express()

  app.use(compression())

  if (isProduction) {
    const sirv = (await import('sirv')).default
    app.use(sirv(`${root}/dist/client`))
  } else {
    const vite = await import('vite')
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true }
      })
    ).middlewares
    app.use(viteDevMiddleware)
  }


  app.get("/api/products", async (req, res) => {
    const products = await prisma.product.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        images: true,
      },
    });

    res.json({
      data: products.map((product) => ({
        id: product.id,
        name: product.name,
        price: `${(product.price - product.rebate)} CLP`,
        image: `${product.images?.[0]?.src}?w=700&h=400&q=80`,
      })),
    });
  });

  app.get("/api/products/:id", async (req, res) => {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id.toString(),
      },
      include: {
        images: true,
      },
    });
    res.json({
      data: {...product, price: `${(product?.price - product?.rebate)} CLP`},
    });
  });

  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()
    const { body, statusCode, contentType, earlyHints } = httpResponse
    if (res.writeEarlyHints) res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) })
    res.status(statusCode).type(contentType).send(body)
  })


  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
