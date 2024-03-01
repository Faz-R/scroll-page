import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const TemplatePage = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default TemplatePage;
