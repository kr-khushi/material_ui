import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <>
      <Box width="300px" m={6}>
        <Card elevation={4}>
          <CardMedia
            component="img"
            height="200px"
            width="200px"
            image="https://images.unsplash.com/photo-1706065992255-03946424cf9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardContent>
            <Typography component="div" variant="h4">
              React JS
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus numquam mollitia perferendis provident dolorem fugit
              obcaecati ut, ad fuga beatae explicabo quod earum suscipit impedit
              quaerat dolorum asperiores accusantium totam odio corrupti quas
              natus?
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default MuiCard;
