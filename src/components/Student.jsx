import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function StudentLogin() {
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Box
          sx={{
            mt: 5,
            backgroundColor: "#e9f0ea",
            p: 2,
            borderRadius: 2,
            width: "25rem",
          }}
        >
          <Typography sx={{fontWeight:'600'}}>Student Login</Typography>
          <TextField
            sx={{ m: 1, width: "85%" }}
            label="User Name"
            variant="outlined"
          />{" "}
          <br />
          <TextField
            sx={{ m: 1, width: "85%" }}
            type="password"
            label="Password"
            variant="outlined"
          />
          <Button variant="contained" sx={{ mt: 1.5 }}>
            Login
          </Button>
        </Box>
        <br />
        <Link to="/">Back to Home</Link> <br />
        <br />
        <Link to="/adminlogin">Admin Login</Link>
      </Container>
     
    </>
  );
}

export default StudentLogin;