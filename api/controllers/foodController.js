const foodService = require('../services/foodService');

exports.getAllFoods = (req, res) => {
  const { name } = req.query;
  const foods = foodService.getAllFoods(name);
  return res.json(foods);
};

exports.createFood = (req, res) => {
  const newFood = foodService.createFood(req.body);
  res.status(201).json(newFood);
};

exports.updateFood = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedFood = foodService.updateFood(id, req.body);
  
  if (!updatedFood) {
    return res.status(404).json({ error: 'Food not found' });
  }
  
  return res.json(updatedFood);
};

exports.deleteFood = (req, res) => {
  const id = parseInt(req.params.id);
  const success = foodService.deleteFood(id);
  
  if (!success) {
    return res.status(404).json({ error: 'Food not found' });
  }
  
  res.status(204).end();
};
