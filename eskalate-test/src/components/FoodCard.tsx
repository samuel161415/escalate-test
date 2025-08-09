import React, { useState } from "react";
import { FoodItem } from "../services/foodService";

interface FoodCardProps {
  food: FoodItem;
  onEdit: (food: FoodItem) => void;
  onDelete: (id: number) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onEdit, onDelete }) => {
  const [showOptions, setShowOptions] = useState(false);
  
  return (
    <div className="border rounded-lg  shadow-md bg-white">
      <div className="h-48 bg-gray-200">
        {food.food_image ? (
          <img
            src={food.food_image}
            alt={food.food_name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="w-10 h-10 rounded-md">
            <img src={food.restaurant_logo} className="w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-black restaurant-name font-bold">
              {food.restaurant_name}
            </h3>
            <div className="flex space-x-2">
              <span>⭐</span>
              <span className="restaurant-rating">{food.food_rating}</span>
            </div>
          </div>
          <div className="relative">
          <button 
            className="h-10 w-10 flex items-center justify-center"
            onClick={() => setShowOptions(!showOptions)}
          >
            <img src="/More.png" alt="More options" />
          </button>
          {showOptions && (
            <div className="z-50 absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <button 
                className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                onClick={() => {
                  onEdit(food);
                  setShowOptions(false);
                }}
              >
                Edit
              </button>
              <button 
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                onClick={() => {
                  onDelete(food.id);
                  setShowOptions(false);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-gray-700 mb-2 px-4">{food.food_name}</p>
      </div>
    </div>
  );
};

export default FoodCard;
