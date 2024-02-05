import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(null);

  console.log(value);

  const handleRating = (e, newRating) => {
    setValue(newRating);
  };

  return (
    <>
      <Stack spacing={2}>
        <Rating value={value} onChange={handleRating} precision={0.5} />
      </Stack>
    </>
  );
};

export default MuiRating;
