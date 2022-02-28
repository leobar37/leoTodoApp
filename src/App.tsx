import { TodoPage } from "@leo/app/features/todo";
import { useConfig } from "@leo/enviroment";
import { Box, Container, Link as MaterialLink, Stack } from "@mui/material";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Styles } from "./styles";
import { NavBar } from "@leo/app/shared";
const App = () => {
  return (
    <Styles>
      <div>
        <Router>
          <div>
            <Container maxWidth="lg">
              <NavBar />
            </Container>
            <Box
              sx={{
                bgcolor: "gainsboro",
                width: "100vw",
              }}
            >
              <Routes>
                <Route path="/todos" element={<TodoPage />} />
              </Routes>
            </Box>
          </div>
        </Router>
      </div>
    </Styles>
  );
};

export default App;
