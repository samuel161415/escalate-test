import React from 'react';
import { FoodItem } from '../services/foodService';

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (e: React.FormEvent) => void;
  food?: FoodItem;
}

const FoodModal: React.FC<FoodModalProps> = ({ isOpen, onClose, onSave, food }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {food ? 'Edit Food' : 'Add Food'}
        </h2>
        <form onSubmit={onSave}>
          <div className="mb-4">
            <label className="block mb-1">Food Name</label>
            <input
              type="text"
              name="food_name"
              defaultValue={food?.food_name}
              className="w-full p-2 rounded"
              style={{ backgroundColor: '#F5F5F5' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Rating (1-5)</label>
            <input
              type="number"
              name="food_rating"
              defaultValue={food?.food_rating}
              min="1"
              max="5"
              className="w-full p-2 rounded"
              style={{ backgroundColor: '#F5F5F5' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Food Image URL</label>
            <input
              type="text"
              name="food_image"
              defaultValue={food?.food_image}
              className="w-full p-2 rounded"
              style={{ backgroundColor: '#F5F5F5' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Restaurant Name</label>
            <input
              type="text"
              name="restaurant_name"
              defaultValue={food?.restaurant_name}
              className="w-full p-2 rounded"
              style={{ backgroundColor: '#F5F5F5' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Restaurant Logo URL</label>
            <input
              type="text"
              name="restaurant_logo"
              defaultValue={food?.restaurant_logo}
              className="w-full p-2 rounded"
              style={{ backgroundColor: '#F5F5F5' }}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Restaurant Status</label>
            <select
              name="restaurant_status"
              defaultValue={food?.restaurant_status}
              className="w-full p-2 rounded"
              style={{ backgroundColor: '#F5F5F5' }}
              required
            >
              <option value="Open Now">Open Now</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
              style={{ borderColor: '#FF9A0E' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              style={{ borderColor: '#FF9A0E' }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodModal;
