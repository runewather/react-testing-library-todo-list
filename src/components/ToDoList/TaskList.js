import Box from "@material-ui/core/Box";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/Done";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "325px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  task: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
  },
  edit: {
    cursor: "pointer",
  },
}));

function TaskList({ tasks = [] }) {
  const classes = useStyles(theme);
  const [taskEdit, setTaskEdit] = useState({});

  return (
    <Box className={classes.container}>
      {tasks.map((t, index) => (
        <Box className={classes.task} key={index} data-testid="task-item">
          {taskEdit.id === index ? (
            <TextField
              value={taskEdit.text}
              data-testid="edit-input"
              id="outlined-basic"
              variant="outlined"
            />
          ) : (
            <Box>{t}</Box>
          )}
          <Box
            className={classes.edit}
            onClick={() => {
              setTaskEdit({ id: index, text: t });
            }}
            data-testid="edit-button"
          >
            {taskEdit.id === index ? <DoneIcon /> : <EditOutlinedIcon />}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TaskList;
