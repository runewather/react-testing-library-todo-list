import Box from "@material-ui/core/Box";
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
}));

function TaskList({
  tasks = [],
  finishTask = () => {},
  updateTask = () => {},
}) {
  const classes = useStyles(theme);
  const [taskEdit, setTaskEdit] = useState({});

  return (
    <Box className={classes.container}>
      {tasks.map((t, index) => (
        <Box
          className={classes.task}
          key={index}
          onClick={finishTask}
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
                  updateTask();
                }}
                data-testid="done-button"
              >
                <DoneIcon />
              </Box>
            </>
          ) : (
            <>
              <Box>{t.name}</Box>
              <Box
                className={classes.edit}
                onClick={() => {
                  setTaskEdit({ id: index, text: t.name });
                }}
                data-testid="edit-button"
              >
                <EditOutlinedIcon />
              </Box>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default TaskList;
