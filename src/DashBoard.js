import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import reuse_image from "./images/aggiereuse_fe_Lugo1.jpeg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/zhxu33/Aggie-Reuse-Inventory"
      >
        Github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#2f4170",
      darker: "#053e85",
    },
    secondary: {
      main: "#2f4170",
      contrastText: "#ffffff",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#fff",
    },
  },
});

export default function Dashboard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Input");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Aggie Reuse Inventory
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        style={{
          backgroundImage: `url(${reuse_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Hero unit */}
        <Box
          sx={{
            height: "80vh",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container maxWidth="m">
            <Typography
              pt={10}
              component="h1"
              variant="h2"
              align="center"
              color="#FFD700"
              gutterBottom
              fontWeight={"bold"}
            >
              Aggie Reuse Inventory
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                sx={{
                  maxWidth: "100px",
                  maxHeight: "50px",
                  minWidth: "100px",
                  minHeight: "50px",
                  fontSize: "20px",
                  mt: 10,
                }}
                onClick={handleClick}
              >
                start
              </Button>
              {/* <Button variant="outlined">sign in</Button> */}
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 6,
          position: "fixed",
          bottom: 0,
          width: "100vw",
        }}
        component="footer"
      >
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Presented by: James, Ray
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
