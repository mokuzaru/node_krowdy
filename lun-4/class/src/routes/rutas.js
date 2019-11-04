const express = require('express');
const krowdy = express.Router();

const tarea = require('../models/tarea');
/*
krowdy.get('/', (req,res) => {
  tarea.find(function(err,tarea) {
    console.log(tarea);
  });

  res.json({
    status: 'API funka!'
  });
});*/

krowdy.get('/', async (req,res) => {
  const tareas = await tarea.find();
  res.json(tareas);
});

krowdy.get('/:id', async (req,res) => {
  const tareas = tarea.findById(req.params.id);
  res.json(tareas);
});

krowdy.post('/', async (req,res) => {
  const {title, description} = req.body;
  const tareas = new tarea({
    title,
    description
  })
  await tareas.save();
  res.json({status: 'tarea guardada'});
  console.log(req.body);
});

krowdy.put('/:id', async(req,res) =>{
  const {title, description}= req.body;
  const newTarea = {title, description};
  await tarea.findByIdAndUpdate(req.params.id, newTarea);
  res.json({Status: 'Tarea actualizada'});
});

krowdy.delete('/:id', async (req,res) => {
  await tarea.findByIdAndRemove(req.params.id);
  res.json({status: 'Tarea Eliminada'});
})

module.exports = krowdy;
