import CssBaseline from "@mui/material/CssBaseline";
import { FC } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
export const Styles: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};
