class FoodService {
  constructor() {
    this.foods = [
      {
        id: 1,
        food_name: "Salmon Steak",
        food_rating: 4,
        food_image: "https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg",
        restaurant_name: "Seafood Haven",
        restaurant_logo: "https://example.com/logo1.png",
        restaurant_status: "Open Now",
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        food_name: "Vegetable Pizza",
        food_rating: 5,
        food_image: "https://example.com/pizza.jpg",
        restaurant_name: "Pizza Palace",
        restaurant_logo: "https://example.com/logo2.png",
        restaurant_status: "Open Now",
        created_at: new Date().toISOString()
      }
    ];
    this.currentId = 3;
  }

  getAllFoods(name) {
    if (name) {
      return this.foods.filter(food => 
        food.food_name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return this.foods;
  }

  createFood(foodData) {
    const newFood = {
      id: this.currentId++,
      ...foodData,
      created_at: new Date().toISOString()
    };
    this.foods.push(newFood);
    return newFood;
  }

  updateFood(id, foodData) {
    const index = this.foods.findIndex(food => food.id === id);
    if (index === -1) return null;
    
    this.foods[index] = { ...this.foods[index], ...foodData };
    return this.foods[index];
  }

  deleteFood(id) {
    const index = this.foods.findIndex(food => food.id === id);
    if (index === -1) return false;
    
    this.foods.splice(index, 1);
    return true;
  }
}

module.exports = new FoodService();
