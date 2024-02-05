import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

const MuiButton = () => {
  const [format, setFormat] = useState([null]);

  console.log(format);

  const hanldeFormat = (event, updatedFormat) => {
    setFormat(updatedFormat);
  };

  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button
            variant="contained"
            href="https://tailwindcss.com/docs/guides/vite"
          >
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <IconButton aria-label="send" color="error" size="small">
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2} direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="success"
            aria-label="alignment button group"
          >
            <Button onClick={() => alert("Left Button Clicked!!")}>Left</Button>
            <Button>Center</Button>
            <Button>RIght</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            size="medium"
            aria-label="text-formatting"
            color="secondary"
            orientation="vertical"
            exclusive //only select one
            value={format}
            onChange={hanldeFormat}
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButton;
