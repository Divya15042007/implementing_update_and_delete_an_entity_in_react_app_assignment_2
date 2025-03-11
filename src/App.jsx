import React, { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

const API_URI = "http://localhost:5000/items"; // Change if needed

function App() {
  const [items, setItems] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  // Delete item function
  const deleteItem = async (id) => {
    try {
      const res = await fetch(`${API_URI}/${id}`, { method: "DELETE" });

      if (res.ok) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Remove from UI
      } else {
        console.error("Failed to delete item");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return <ItemList items={items} onDelete={deleteItem} />;
}

export default App;
