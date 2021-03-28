import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    blue: "#227C9D",
    green: "#17C3B2",
    yellow: "#FFCB77",
    beige: "#FEF9EF",
    red: "#FE6D73",
  },
  typography: {
    fontFamily: `'Montserrat', Raleway, Arial`,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
          width: "100%",
          fontFamily: `'Montserrat'`,
        },
        body: {
          height: "100%",
          width: "100%",
          backgroundColor: "#FFCB77",
          "& #root": {
            height: "100%",
          },
        },
      },
    },
  },
});
