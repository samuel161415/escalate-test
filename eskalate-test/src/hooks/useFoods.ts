import { useState, useEffect, useCallback } from 'react';
import { FoodItem, getFoods, createFood, updateFood, deleteFood } from '../services/foodService';

export function useFoods() {
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFoods = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getFoods(searchTerm);
      console.log("data",data)
      setFoods(data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const handleCreateFood = async (foodData: Omit<FoodItem, 'id'>) => {
    const newFood = await createFood(foodData);
    setFoods(prev => [...prev, newFood]);
    return newFood;
  };

  const handleUpdateFood = async (id: number, foodData: Partial<FoodItem>) => {
    const updatedFood = await updateFood(id, foodData);
    setFoods(prev => prev.map(food => food.id === id ? updatedFood : food));
    return updatedFood;
  };

  const handleDeleteFood = async (id: number) => {
    await deleteFood(id);
    setFoods(prev => prev.filter(food => food.id !== id));
  };

  return {
    foods,
    loading,
    searchTerm,
    setSearchTerm,
    fetchFoods,
    createFood: handleCreateFood,
    updateFood: handleUpdateFood,
    deleteFood: handleDeleteFood
  };
}
