import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Numer',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:5000/data',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./server.js'],
};

const swaggerSpec = swaggerJsDoc(options);

const app = express(); 
const prisma = new PrismaClient();


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors()); 
app.use(bodyParser.json()); 

app.get("/", (req, res) => {
    res.send("hello");
});


app.get('/data', async (req, res) => {
    try {
        const data = await prisma.numertable.findMany(); 
        res.send(data);
    } catch (err) {
        res.status(500).send("error");
    }
});

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Get all data
 *     responses:
 *       200:
 *         description: A list of data
 */

app.post('/data', async (req, res) => {
    const { Solution, Equation, Result } = req.body;
    try {
        const data = await prisma.numertable.create({ 
            data: {
                Solution,
                Equation,
                Result
            },
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});

/**
 * @swagger
 * /data:
 *   post:
 *     summary: Create new data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Solution:
 *                 type: string
 *               Equation:
 *                 type: string
 *               Result:
 *                 type: string
 *     responses:
 *       200:
 *         description: The created data
 */

app.post('/data', async (req, res) => {
    const { Solution, Equation, Result,a,b,n } = req.body;
    try {
        const data = await prisma.integration.create({ 
            data: {
                Solution,
                Equation,
                Result,
                a,
                b,
                n
            },
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Database error' });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
