import { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import TaskList from "./TaskList";
import AddButton from "./AddTaskButton";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "380px",
    height: "500px",
    backgroundColor: theme.palette.beige,
    paddingTop: "24px",
    paddingBottom: "2px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  addButton: {
    position: "absolute",
    left: "50%",
    bottom: "-35px",
    transform: "translateX(-50%)",
  },
}));

function ToDoList() {
  const classes = useStyles(theme);

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { name: task, done: false }]);
  };

  const updateTask = (id, taskName) => {
    const arr = tasks;
    arr[id] = { name: taskName, done: arr[id].done };
    setTasks([...arr]);
  };

  const deleteTask = (id) => {
    const arr = tasks;
    arr.splice(id, 1);
    setTasks([...arr]);
  };

  const toggleTask = (id) => {
    const arr = tasks;
    arr[id] = { name: arr[id].name, done: !arr[id].done };
    setTasks([...arr]);
  };

  return (
    <Box className={classes.container}>
      <Header />
      <Box mt={3}>
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </Box>
      <Box className={classes.addButton}>
        <AddButton addTask={addTask} />
      </Box>
    </Box>
  );
}

export default ToDoList;
