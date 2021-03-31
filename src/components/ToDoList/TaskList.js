import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/Done";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    height: "325px",
    overflowY: "auto",
    overflowX: "hidden",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    scrollBehavior: "smooth",
  },
  task: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    cursor: "pointer",
  },
  edit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    borderRadius: "50%",
    borderColor: theme.palette.red,
    border: "3px solid",
  },
  iconContainers: {
    display: "flex",
    flexDirection: "row",
  },
}));

function TaskList({
  tasks = [],
  toggleTask = () => {},
  updateTask = () => {},
  deleteTask = () => {},
}) {
  const classes = useStyles(theme);
  const [taskEdit, setTaskEdit] = useState({});

  return (
    <Box className={classes.container}>
      {tasks.length === 0 && (
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Click the button below to add a new task
        </Typography>
      )}
      {tasks.length > 0 &&
        tasks.map((t, index) => (
          <Box
            className={classes.task}
            key={`${JSON.stringify(t)}${index}`}
            data-testid="task-item"
          >
            {taskEdit.id === index ? (
              <>
                <TextField
                  value={taskEdit.text}
                  onChange={(e) => {
                    setTaskEdit({ ...taskEdit, text: e.target.value });
                  }}
                  data-testid="edit-input"
                  id="outlined-basic"
                  variant="outlined"
                />
                <Box
                  className={classes.edit}
                  onClick={() => {
                    setTaskEdit({});
                    updateTask(index, taskEdit.text);
                  }}
                  data-testid="done-button"
                >
                  <DoneIcon />
                </Box>
              </>
            ) : (
              <>
                <Box
                  data-testid="task-name"
                  onClick={() => {
                    toggleTask(index);
                  }}
                  style={{
                    textDecoration: t.done ? "line-through" : "none",
                    userSelect: "none",
                  }}
                >
                  {t.name}
                </Box>
                <Box className={classes.iconContainers}>
                  <Box
                    className={classes.edit}
                    onClick={() => {
                      deleteTask(index);
                    }}
                    data-testid={`${t.name}-delete-btn`}
                  >
                    <DeleteIcon />
                  </Box>
                  <Box
                    ml={1}
                    className={classes.edit}
                    onClick={() => {
                      setTaskEdit({ id: index, text: t.name });
                    }}
                    data-testid="edit-button"
                  >
                    <EditOutlinedIcon />
                  </Box>
                </Box>
              </>
            )}
          </Box>
        ))}
    </Box>
  );
}

export default TaskList;
