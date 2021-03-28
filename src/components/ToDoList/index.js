import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ToDoListHeader from "./ToDoListHeader";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "350px",
    height: "500px",
    backgroundColor: theme.palette.beige,
    paddingTop: "24px",
    paddingBottom: "24px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
}));

function ToDoList() {
  const classes = useStyles(theme);

  return (
    <Box className={classes.container}>
      <ToDoListHeader />
    </Box>
  );
}

export default ToDoList;
