import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [accepttc, setAccepttc] = useState(false);

  const [skills, setSkills] = useState([]);

  console.log("tc", accepttc);
  console.log(skills);

  const handleChecked = (e) => {
    setAccepttc(e.target.checked);
  };

  const handleSkills = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <>
      <Box>
        <Box>
          <FormControlLabel
            label="I accpet terms and condition"
            control={<Checkbox checked={accepttc} onChange={handleChecked} />}
          />
        </Box>

        <Box>
          <FormControl>
            <FormLabel>Select Your Skills</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    value="HTML"
                    checked={skills.includes("HTML")}
                    onChange={handleSkills}
                  />
                }
              />
              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    value="CSS"
                    checked={skills.includes("CSS")}
                    onChange={handleSkills}
                  />
                }
              />
              <FormControlLabel
                label="JS"
                control={
                  <Checkbox
                    value="JS"
                    checked={skills.includes("JS")}
                    onChange={handleSkills}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default MuiCheckbox;
