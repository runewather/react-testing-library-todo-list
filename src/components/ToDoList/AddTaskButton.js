import { useState } from "react";
import { Dialog, Button, Box, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "96px",
    height: "96px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.red,
    borderRadius: "50%",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },
  addIcon: {
    fontSize: "56px",
    color: theme.palette.yellow,
  },
}));

function AddTaskButton({ addTask = () => {} }) {
  const classes = useStyles(theme);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleAddTask = () => {
    addTask(value);
    setValue("");
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        data-testid="add-modal"
        disableBackdropClick={false}
        open={open}
      >
        <Box className={classes.modal}>
          <Typography variant="h6">Task name:</Typography>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-testid="modal-input"
            variant="outlined"
          />
          <Box className={classes.buttons}>
            <Button
              onClick={handleAddTask}
              data-testid="modal-add-button"
              variant="outlined"
            >
              Add
            </Button>
            <Box ml={2}>
              <Button
                data-testid="close-button"
                onClick={handleClose}
                variant="outlined"
              >
                Close
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
      <Box
        className={classes.button}
        aria-label="add"
        data-testid="add-button"
        onClick={handleOpen}
      >
        <AddIcon className={classes.addIcon} />
      </Box>
    </Box>
  );
}

export default AddTaskButton;
