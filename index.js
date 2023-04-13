const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");

import React from "react";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  res.json({ message: "Heartbeat: OK" });
});

app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json({
    data: products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price - product.rebate,
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
