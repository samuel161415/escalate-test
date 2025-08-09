export interface FoodItem {
  id: number;
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
}

const API_URL = 'http://localhost:3002/api/foods';

export const getFoods = async (name = ''): Promise<FoodItem[]> => {
    console.log("I am called")
  const url = name ? `${API_URL}?name=${name}` : API_URL;
  const response = await fetch(url);
  return response.json();
};

export const createFood = async (foodData: Omit<FoodItem, 'id'>): Promise<FoodItem> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(foodData)
  });
  console.log("what is the response",response)
  return response.json();
};

export const updateFood = async (id: number, foodData: Partial<FoodItem>): Promise<FoodItem> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(foodData)
  });
  return response.json();
};

export const deleteFood = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
