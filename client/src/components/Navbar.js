import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";

export default function Navbar() {
  const theme = useTheme();
  return (    
      <Box
        width={"100%"}
        backgroundColor = {theme.palette.background.alt}
        p="1rem 6%"
        textAlign={"center"}
        sx={{ boxShadow: 3, mb: 2}}
      >
        <Typography variant="h1" color={"primary"} fontWeight="bold">
          AI GPT3 Clone
        </Typography>
        <Link href="/register" p={1}>
          Sign Up
        </Link>
        <Link href="/login" p={1}>
          Sign In
        </Link>
        <h1>Nav Menu</h1>
      </Box>
  );
}
