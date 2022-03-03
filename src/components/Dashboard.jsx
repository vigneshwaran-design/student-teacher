import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="box">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guvi
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Box sx={{ boxShadow: 3, borderRadius: 1, my: 1, p: 3 }}>
          <Typography>XYZ Organization</Typography>
          <Typography>India</Typography>
          <Typography sx={{ my: 2 }}>
            Learning is the <br /> "KEY to SUCCESS"
          </Typography>
          <Button sx={{ m: 1 }}>CONTACT US</Button>
        </Box>
      </div>
      <div>
        <Box sx={{ mt: 3 }}>
          <Link to="/adminlogin" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ m: 2, underline: "none" }}>
              ADMIN LOGIN
            </Button>
          </Link>
          <Link to="/studentlogin" style={{ textDecoration: "none" }}>
            <Button variant="contained">STUDENT LOGIN</Button>
          </Link>
        </Box>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>React JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Node JS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data.
Node.js can add, delete, modify data in your database.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Angular</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
      <div className="footer">
        <Box
          className="footer-sub"
          sx={{
            backgroundColor: "primary.dark",
            p: 4,
            mx: "auto",
            borderRadius: 1,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography sx={{ mx: 1 }}>CONTACT US</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography sx={{ mx: 1 }}>ABOUT US</Typography>
            </Link>
            <Link to="/branch" style={{ textDecoration: "none" }}>
              <Typography sx={{ mx: 1 }}>BRANCHES</Typography>
            </Link>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;