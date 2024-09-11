import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import { Publication } from '@/types';

const app = express();
const port = process.env.PORT || 3001;

// Middleware
// app.use(cors());
app.use(bodyParser.json());

// In-memory storage for publications
let publications: Publication[] = [];

// GET all publications
app.get('/api/publications', (req, res) => {
  res.json(publications);
});

// GET a single publication
app.get('/api/publications/:id', (req, res) => {
  const publication = publications.find(p => p.id === parseInt(req.params.id));
  if (!publication) return res.status(404).send('Publication not found');
  res.json(publication);
});

// POST a new publication
app.post('/api/publications', (req, res) => {
  const publication: Publication = {
    id: publications.length + 1,
    ...req.body
  };
  publications.push(publication);
  res.status(201).json(publication);
});

// PUT (update) a publication
app.put('/api/publications/:id', (req, res) => {
  const index = publications.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Publication not found');
  
  publications[index] = { ...publications[index], ...req.body };
  res.json(publications[index]);
});

// DELETE a publication
app.delete('/api/publications/:id', (req, res) => {
  const index = publications.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Publication not found');
  
  publications.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
