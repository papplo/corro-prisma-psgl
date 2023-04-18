import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "../src/App";
import { PrismaClient } from "@prisma/client";
import { Spinner } from "../src/components/Spinner";

const PORT = 3000;

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  const AppTempBody = ReactDOMServer.renderToString(<Spinner />);
  fs.readFile(path.resolve("./public/default.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${AppTempBody}</div>`)
    );
  });
});

app.get("/shop", async (req, res) => {
  const products = await prisma.product.findMany();
  const AppBody = ReactDOMServer.renderToString(<App productData={products} />);

  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${AppBody}</div>`)
    );
  });
});

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/products", async (req, res) => {
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

app.get("/products/:id", async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.id.toString(),
    },
  });
  res.json({
    data: product,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
