import supabase from "../config/supabase.js";

// 🟢 1️⃣ Get all ideas
export const getIdeas = async (req, res) => {
  const { data, error } = await supabase.from("ideas").select("*");
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// 🟢 2️⃣ Create a new idea
export const createIdea = async (req, res) => {
  const { title, description, user_id } = req.body; // Get data from request body
  const { data, error } = await supabase.from("ideas").insert([{ title, description, user_id }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// 🟢 3️⃣ Delete an idea
export const deleteIdea = async (req, res) => {
  const { id } = req.params; // Get idea ID from request
  const { error } = await supabase.from("ideas").delete().eq("id", id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Idea deleted successfully" });
};
