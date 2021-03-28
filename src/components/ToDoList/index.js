import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import TaskList from "./TaskList";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "350px",
    height: "500px",
    backgroundColor: theme.palette.beige,
    paddingTop: "24px",
    paddingBottom: "2px",
    paddingLeft: "24px",
    paddingRight: "24px",
  },
}));

function ToDoList() {
  const classes = useStyles(theme);

  const testTasks = ["Learn React", "Learn React Tests", "Learn MaterialUI"];

  return (
    <Box className={classes.container}>
      <Header />
      <Box mt={3}>
        <TaskList tasks={testTasks} />
      </Box>
    </Box>
  );
}

export default ToDoList;
