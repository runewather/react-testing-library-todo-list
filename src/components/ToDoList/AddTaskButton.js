import { useState } from "react";
import { Dialog, Box, Fab } from "@material-ui/core";
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
  addIcon: {
    fontSize: "56px",
    color: theme.palette.yellow,
  },
}));

function AddTaskButton() {
  const classes = useStyles(theme);
  const [open, setOpen] = useState(false);

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
        open={open}
      ></Dialog>
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
