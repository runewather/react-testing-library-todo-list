import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import dayjs from "dayjs";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  date: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

function ToDoList() {
  const classes = useStyles();

  const today = dayjs();

  return (
    <Box className={classes.header}>
      <Box className={classes.date}>
        <Typography
          data-testid="day"
          variant="h3"
          style={{ fontWeight: "bold", color: "#FE6D73" }}
        >
          {today.format("DD")}
        </Typography>
        <Box display="flex" flexDirection="column" alignItems="center" ml={1}>
          <Typography
            data-testid="month"
            variant="body1"
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#227C9D",
            }}
          >
            {today.format("MMM")}
          </Typography>
          <Typography
            data-testid="year"
            variant="body1"
            style={{ color: "#227C9D" }}
          >
            {today.format("YYYY")}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          data-testid="weekday"
          variant="body1"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#227C9D",
          }}
        >
          {today.format("dddd")}
        </Typography>
      </Box>
    </Box>
  );
}

export default ToDoList;
