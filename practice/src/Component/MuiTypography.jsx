import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      <Typography
        variant="h1"
        style={{ textDecoration: "underline", color: "#EF4444" }}
      >
        H1 Heading
      </Typography>

      <h1 style={{ textDecoration: "underline", color: "#EF4444" }}>
        h1 heading
      </h1>

      <Typography variant="h2">H2 Heading</Typography>

      <Typography variant="h3">H3 Heading</Typography>

      <Typography variant="h4">H4 Heading</Typography>

      <Typography variant="h5">H5 Heading</Typography>

      <Typography variant="h6">H6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>

      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit id alias,
        minima, quos earum eos illum consequatur eligendi modi quae ad iste
        asperiores impedit quod nostrum? Maxime ducimus est voluptatum suscipit
        perferendis eum eveniet.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, vel?
        Optio, tenetur magnam commodi vitae quidem debitis laudantium omnis in
        cumque! Corporis quo officiis mollitia, eos quas laborum culpa cumque,
        voluptas nobis excepturi at? 2
      </Typography>
    </>
  );
};

export default MuiTypography;
