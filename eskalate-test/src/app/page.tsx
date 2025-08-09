"use client";
import { useState } from "react";

import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";
import FoodModal from "../components/FoodModal";
import Header from "../components/Header";
import { useFoods } from "../hooks/useFoods";
import type { FoodItem } from "../services/foodService";

export default function Home() {
  const {
    foods,
    loading,
    searchTerm,
    setSearchTerm,
    createFood,
    updateFood,
    deleteFood,
  } = useFoods();

  const [showModal, setShowModal] = useState(false);
  const [currentFood, setCurrentFood] = useState<FoodItem | null>(null);
  const [deliveryType, setDeliveryType] = useState("Delivery");

  const handleSaveFood = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const foodData = Object.fromEntries(formData.entries());

    try {
      if (currentFood) {
        await updateFood(currentFood.id, foodData);
      } else {
        await createFood(foodData as unknown as Omit<FoodItem, "id">);
      }
      setShowModal(false);
      setCurrentFood(null);
    } catch (error) {
      console.error("Error saving food:", error);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header onAddMeal={() => setShowModal(true)} />

      {/* Hero Section */}
      <section className="bg-yellow-400 h-[60vh] flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-md mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Are you starving?</h1>
            <p className="text-lg mb-6">
              Within a few clicks, find meals that are accessible near you.
            </p>

            <div className="bg-white  rounded-md p-2">
              <div className="flex mb-6 ">
                <button
                  className={`px-4 py-2 rounded ${
                    deliveryType === "Delivery"
                      ? "bg-[#F172281A] text-[#F17228]"
                      : "bg-transparent"
                  }`}
                  onClick={() => setDeliveryType("Delivery")}
                  style={{ borderColor: "#FF9A0E" }}
                >
                  Delivery
                </button>
                <button
                  className={`px-4 py-2 rounded-r ${
                    deliveryType === "Pickup"
                      ? "bg-[#F172281A] text-[#F17228]"
                      : "bg-transparent"
                  }`}
                  onClick={() => setDeliveryType("Pickup")}
                  style={{ borderColor: "#FF9A0E" }}
                >
                  Pickup
                </button>
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="What do you like to eat today?"
                  className="w-full p-2 rounded-l "
                  style={{ backgroundColor: "#F5F5F5" }}
                />
                <button
                  className="px-4 py-2 rounded-r text-white whitespace-nowrap"
                  style={{
                    background: "linear-gradient(to right, #FF7A7A, #F65900)",
                    borderColor: "#FF9A0E",
                  }}
                >
                  Find Meal
                </button>
              </div>
            </div>
          </div>
          <div className="h-[60vh] flex flex-col justify-end border border-red-500">
            <div className="rounded-full w-80 h-80  mb-[-20px]">
            <img src="/img-base.png" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="container mx-auto px-4 my-8">
        <h2 className="text-3xl font-bold mb-6 text-black text-center">Featured Meals</h2>

        {loading ? (
          <p className="text-center py-8">Loading...</p>
        ) : foods.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            No food items available
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {foods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onEdit={() => {
                  setCurrentFood(food);
                  setShowModal(true);
                }}
                onDelete={deleteFood}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />

      <FoodModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setCurrentFood(null);
        }}
        onSave={handleSaveFood}
        food={currentFood}
      />
    </main>
  );
}
