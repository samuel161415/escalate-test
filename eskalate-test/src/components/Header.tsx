import React from 'react';

export interface HeaderProps {
  onAddMeal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddMeal }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md max-h-[65px]">
      <div className="text-xl h-[30px] font-bold text-black"><img src="/Logo.png" className='w-full h-full object-contain' /></div>
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
