import React from 'react';
import { FoodItem } from '../services/foodService';

interface FoodCardProps {
  food: FoodItem;
  onEdit: (food: FoodItem) => void;
  onDelete: (id: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <div className="h-48 bg-gray-200">
        {food.food_image ? (
          <img src={food.food_image} alt={food.food_name} className="w-full h-full object-cover" />
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold restaurant-name">{food.restaurant_name}</h3>
          <div className="flex space-x-2">
            <span>⭐</span>
            <span className="restaurant-rating">{food.food_rating}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-2">{food.food_name}</p>
        <div className="flex justify-between">
          <button 
            className="text-blue-500 hover:underline"
            onClick={() => onEdit(food)}
            style={{ borderColor: '#FF9A0E' }}
          >
            Edit
          </button>
          <button 
            className="text-red-500 hover:underline"
            onClick={() => onDelete(food.id)}
            style={{ borderColor: '#FF9A0E' }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
