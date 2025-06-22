import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import HomeIcon from "@mui/icons-material/Home";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const AddressSection = ({ formData, handleChange, fieldErrors }) => (
  <>
    <TextField
      label="Address Line"
      name="address"
      value={formData.address}
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HomeIcon />
          </InputAdornment>
        ),
      }}
      error={!!fieldErrors.address}
      helperText={fieldErrors.address}
    />
    <div className="form-row">
      <TextField
        label="Pincode"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
        required
        margin="normal"
        error={!!fieldErrors.pincode}
        helperText={fieldErrors.pincode}
        className="half-width"
      />
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationCityIcon />
            </InputAdornment>
          ),
        }}
        error={!!fieldErrors.city}
        helperText={fieldErrors.city}
        className="half-width"
      />
    </div>
    <div className="form-row">
      <TextField
        label="District"
        name="district"
        value={formData.district}
        onChange={handleChange}
        required
        margin="normal"
        error={!!fieldErrors.district}
        helperText={fieldErrors.district}
        className="half-width"
      />
      <TextField
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        required
        margin="normal"
        error={!!fieldErrors.state}
        helperText={fieldErrors.state}
        className="half-width"
      />
    </div>
  </>
);

export default AddressSection;
