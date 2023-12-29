const { Router } = require("express");
const toDoModel = require("./toDo");
const router = Router();

router.get("/get", async function (req, res) {
  const user = await toDoModel.find();
  res.send(user);
});
router.post("/save", async function (req, res) {
  try {
    const toDo = req.body;
    const todo = await toDoModel.create(toDo);
    res.status(201).send(todo); // Sending a 201 status for successful creation
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.put("/update/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const toDo = req.body;
    const updateTodo = await toDoModel.findByIdAndUpdate(id, toDo);
    res.status(201).send("updated successfully..."); // Sending a 201 status for successful creation
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).send("Internal Server Error");
  }
});
router.delete("/delete/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const deletedTodo = await toDoModel.findByIdAndDelete(id);
    res.status(201).send("deleted "); // Sending a 201 status for successful creation
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
