import React from 'react';

export interface HeaderProps {
  onAddMeal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddMeal }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md border border-red-500 max-h-[74px]">
      <div className="text-xl font-bold">Food App</div>
      <button 
        onClick={onAddMeal}
        className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        style={{ borderColor: '#FF9A0E' }}
      >
        Add Meal
      </button>
    </header>
  );
};

export default Header;
