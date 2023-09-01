import { AppBar, IconButton, Toolbar, } from "@mui/material";
import { React } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
// import { createMuiTheme } from "@material-ui/core/styles";  
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Navbar = () => {

  const customTheme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#ffffff',
        darker: '#053e85',
      },
      secondary: {
        main: "#2f4170",
        contrastText: "#ffffff",
      },
      neutral: {
        main: '#ffffff',
        contrastText: '#fff',
      },
    },
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleAdd = () => {
    navigate("/Input");
  };

  const handleAccess = () => {
    navigate("/Access");
  };

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position='sticky' color={"secondary"}>
        <Toolbar >
          {/* variant="dense */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ThemeProvider theme={customTheme}>
            <Button 
            variant="text" color="neutral" onClick={handleClick}
            style={{
              fontSize: "16px"
            }}>
              Home
            </Button>
            <Button onClick={handleAdd}> Add </Button>
            <Button onClick={handleAccess}> Access</Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
