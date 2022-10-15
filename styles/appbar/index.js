import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: "10px",
  justifyContent: "space-between",
  padding: "0 20px",
  alignItems: "center",
  "@media (max-width:430px)": {
    paddingTop: "10px",
  },
}));

// brand name

export const AppbarBrand = styled(Typography)(() => ({
  fontWeight: "normal",
  fontSize: "1.6rem",
  fontFamily: "Rubik Wet Paint, cursive",
  cursor: "pointer",
  "@media (max-width:430px)": {
    fontSize: "1.3rem",
  },
}));

// list items div for the appbar
export const AppbarList = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "30%",
  "@media (max-width: 430px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "15px",
    width: "200px",
    paddingRight: "20px",
    marginTop: "30px",
  },
}));

// list items
export const AppbarListItem = styled(Typography)(() => ({
  fontWeight: "600",
  listStyle: "none",
  cursor: "pointer",
  fontFamily: "Open Sans, sans-serif",
  width: "30%",
  "@media (max-width: 430px)": {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
}));
