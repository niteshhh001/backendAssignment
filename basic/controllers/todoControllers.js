import todos from "../models/todoModel";

const createTodo = (req, res) => {
    const {title}= req.body;
    if(!title){
        return res.status(400).json({error:'Title is required'});

    }
    const newTodo={
        id: todos.length+1,
        title,
        completed: false
    }
    todos.push(newTodo);
    res.status(201).json({message:'Todo created successfully', todo: newTodo});

    const getTodos=(req,res)=>{
        res.json(todos);
    }

    const updateTodo=(req,res)=>{
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json({ message: 'Todo updated', todo });
    }
    const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  const removed = todos.splice(index, 1);
  res.json({ message: 'Todo deleted', todo: removed[0] });
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};

}