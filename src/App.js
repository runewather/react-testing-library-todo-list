import Box from "@material-ui/core/Box";
import ToDoList from "./components/ToDoList/index";

function App() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ToDoList />
    </Box>
  );
}

export default App;
