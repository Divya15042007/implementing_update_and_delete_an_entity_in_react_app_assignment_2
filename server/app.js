const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = [
  { id: 1, name: "Component A" },
  { id: 2, name: "Component B" },
  { id: 3, name: "Component C" },
];

// Get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Delete an item
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  items.splice(itemIndex, 1);
  res.status(200).json({ message: "Item deleted successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
