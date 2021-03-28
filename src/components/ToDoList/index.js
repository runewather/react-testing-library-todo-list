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

  const testTasks = [
    { name: "Learn React", status: "todo" },
    { name: "Learn React Tests", status: "todo" },
    { name: "Learn MaterialUI", status: "todo" },
    { name: "Learn React", status: "todo" },
    { name: "Learn React Tests", status: "todo" },
    { name: "Learn MaterialUI", status: "todo" },
    { name: "Learn React", status: "todo" },
    { name: "Learn React Tests", status: "todo" },
    { name: "Learn MaterialUI", status: "todo" },
  ];

  return (
    <Box className={classes.container}>
      <Header />
      <Box mt={3}>
        <TaskList tasks={testTasks} />
      </Box>
      <Box className={classes.addButton}>
        <AddButton />
      </Box>
    </Box>
  );
}

export default ToDoList;
