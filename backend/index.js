const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];
let id = 1;

app.get('/health', (req, res) => res.send('OK'));

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
  const task = { id: id++, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === taskId);
  if (index !== -1) {
    tasks[index] = { id: taskId, ...req.body };
    res.json(tasks[index]);
  } else {
    res.status(404).send('Task not found');
  }
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
