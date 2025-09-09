const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let projects = [
  { id: 1, title: 'Demo Project', slug: 'demo', short_description: 'Описание проекта' }
];

let orders = [];

// публичное API
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/projects/:slug', (req, res) => {
  const project = projects.find(p => p.slug === req.params.slug);
  res.json(project);
});

// админ API
app.get('/api/admin/projects', (req, res) => res.json(projects));
app.post('/api/admin/projects', (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  projects.push(newProject);
  res.json(newProject);
});

app.get('/api/admin/orders', (req, res) => res.json(orders));

app.listen(3001, () => console.log('API running on http://localhost:3001'));
