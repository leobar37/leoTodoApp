import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

export const BaseLayout: FC<{
  title: string;
}> = ({ title, children }) => {
  return (
    <Container
      sx={{
        height: "99vh",
        bgcolor: "whitesmoke",
      }}
    >
      <Typography pt={4} variant="h4" component={"h2"}>
        {title}
      </Typography>
      <Box
        sx={{
          w: "100%",
          mt: "50px",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
