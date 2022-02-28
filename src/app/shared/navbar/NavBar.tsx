import { useConfig } from "@leo/enviroment";
import { Link as MaterialLink, Stack } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
export type NavBarProps = {};
export const NavBar: FC<NavBarProps> = ({}) => {
  const { config } = useConfig();

  return (
    <Stack
      component="nav"
      direction="row"
      spacing={3}
      bgcolor={"green"}
      paddingX={"50px"}
      paddingY={"20px"}
    >
      {config.links.map((item) => (
        <Link to={item.route} key={item.name}>
          <MaterialLink
            component="span"
            sx={{
              color: "white",
            }}
            underline="hover"
          >
            {item.name}
          </MaterialLink>
        </Link>
      ))}
    </Stack>
  );
};
