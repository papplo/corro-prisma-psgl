const express = require('express');
const app = express();
const port = 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
    res.json({ message: 'Heartbeat: OK' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

