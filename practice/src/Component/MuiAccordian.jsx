import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const MuiAccordian = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, et soluta? Ipsam quasi amet, quod aperiam quo iure
          enim in, fuga perspiciatis tempore, a veritatis! Repellat velit non
          asperiores tenetur quis excepturi officiis? Exercitationem?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, et soluta? Ipsam quasi amet, quod aperiam quo iure
          enim in, fuga perspiciatis tempore, a veritatis! Repellat velit non
          asperiores tenetur quis excepturi officiis? Exercitationem?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus, et soluta? Ipsam quasi amet, quod aperiam quo iure
          enim in, fuga perspiciatis tempore, a veritatis! Repellat velit non
          asperiores tenetur quis excepturi officiis? Exercitationem?
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordian;
