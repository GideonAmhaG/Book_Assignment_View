import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#335C6E", // Steel Blue as primary color
    },
    secondary: {
      main: "#FABD33", // Yellow as secondary color
    },
    text: {
      primary: "#1a2027",
    },
    background: {
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Mulish", sans-serif',
  },
});

const cardStyles = {
  backgroundColor: theme.palette.background.paper,
  padding: "16px",
  borderRadius: 4,
};

const buttonStyles = {
  marginTop: "8px",
  marginRight: "8px",
};

const searchBarStyles = {
  backgroundColor: "white",
  borderRadius: 2,
  "& .MuiInputBase-root": {
    marginBottom: "8px",
  },
};

export { theme, cardStyles, buttonStyles, searchBarStyles };
