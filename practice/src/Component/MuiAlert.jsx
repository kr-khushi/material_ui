import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <>
      <Stack spacing={4} direction="column">
        <Alert severity="error">This is an error alert</Alert>
        <Alert severity="warning">This is a warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="success">This is a success alert</Alert>

        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is a warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is a success alert
        </Alert>

        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("Close Alert")}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<Check fontSize="inherit" />}
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert
        </Alert>
      </Stack>
    </>
  );
};

export default MuiAlert;
