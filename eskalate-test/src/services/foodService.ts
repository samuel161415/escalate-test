export interface FoodItem {
  id: number;
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
const API_URL = `${API_BASE_URL}/api/foods`;

export const getFoods = async (name = ''): Promise<FoodItem[]> => {
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
