import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PhoneIcon from "@mui/icons-material/Phone";

const ParentDetailsSection = ({ formData, handleChange, fieldErrors }) => (
  <>
    <TextField
      label="Father's Name"
      name="fatherName"
      value={formData.fatherName}
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
      error={!!fieldErrors.fatherName}
      helperText={fieldErrors.fatherName}
    />
    <TextField
      label="Mother's Name"
      name="motherName"
      value={formData.motherName}
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
      error={!!fieldErrors.motherName}
      helperText={fieldErrors.motherName}
    />
    <TextField
      label="Parent's Mobile Number"
      name="parentMobile"
      value={formData.parentMobile}
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PhoneIcon />
          </InputAdornment>
        ),
      }}
      error={!!fieldErrors.parentMobile}
      helperText={fieldErrors.parentMobile}
    />
  </>
);

export default ParentDetailsSection;
