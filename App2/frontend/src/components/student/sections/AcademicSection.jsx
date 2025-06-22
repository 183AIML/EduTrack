import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const semesters = ["1", "2", "3", "4", "5", "6"];
const years = ["1", "2", "3"];
const religions = ["Hindu", "Muslim", "Christian", "Other"];
const categories = ["Gen", "SC", "ST", "Cat-1", "2A", "2B", "3A", "3B"];
const admissionYears = ["2023", "2024", "2025"];
const admissionTypes = [
  "Regular",
  "Repeater",
  "Lateral Entry-PUC",
  "Lateral Entry-ITI",
];
const eduBoards = ["SSLC", "CBSE", "ICSE", "OPEN"];

const AcademicSection = ({ formData, handleChange, fieldErrors }) => (
  <>
    <TextField
      label="Department"
      name="department"
      value={formData.department}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      <MenuItem value="Computer Science & Engineering">
        Computer Science & Engineering
      </MenuItem>
    </TextField>
    <TextField
      label="Semester"
      name="semester"
      value={formData.semester}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {semesters.map((s) => (
        <MenuItem key={s} value={s}>
          {s}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Year"
      name="year"
      value={formData.year}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {years.map((y) => (
        <MenuItem key={y} value={y}>
          {y}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Religion"
      name="religion"
      value={formData.religion}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {religions.map((r) => (
        <MenuItem key={r} value={r}>
          {r}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Category"
      name="category"
      value={formData.category}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {categories.map((c) => (
        <MenuItem key={c} value={c}>
          {c}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Caste"
      name="caste"
      value={formData.caste}
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
      error={!!fieldErrors.caste}
      helperText={fieldErrors.caste}
    />
    <TextField
      label="SSLC Marks"
      name="sslcMarks"
      value={formData.sslcMarks}
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
      error={!!fieldErrors.sslcMarks}
      helperText={fieldErrors.sslcMarks}
    />
    <TextField
      label="Registration Number"
      name="regNumber"
      value={formData.regNumber}
      onChange={handleChange}
      fullWidth
      margin="normal"
      error={!!fieldErrors.regNumber}
      helperText={fieldErrors.regNumber}
    />
    <TextField
      label="Admission Year"
      name="admissionYear"
      value={formData.admissionYear}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {admissionYears.map((a) => (
        <MenuItem key={a} value={a}>
          {a}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="SSP ID"
      name="sspId"
      value={formData.sspId}
      onChange={handleChange}
      fullWidth
      margin="normal"
      error={!!fieldErrors.sspId}
      helperText={fieldErrors.sspId}
    />
    <TextField
      label="NSP ID"
      name="nspId"
      value={formData.nspId}
      onChange={handleChange}
      fullWidth
      margin="normal"
      error={!!fieldErrors.nspId}
      helperText={fieldErrors.nspId}
    />
    <TextField
      label="APAAR ID"
      name="apaarId"
      value={formData.apaarId}
      onChange={handleChange}
      fullWidth
      margin="normal"
      error={!!fieldErrors.apaarId}
      helperText={fieldErrors.apaarId}
    />
    <TextField
      label="Admission Type"
      name="admissionType"
      value={formData.admissionType}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {admissionTypes.map((t) => (
        <MenuItem key={t} value={t}>
          {t}
        </MenuItem>
      ))}
    </TextField>
    <TextField
      label="Education Board"
      name="eduBoard"
      value={formData.eduBoard}
      select
      onChange={handleChange}
      required
      fullWidth
      margin="normal"
    >
      {eduBoards.map((b) => (
        <MenuItem key={b} value={b}>
          {b}
        </MenuItem>
      ))}
    </TextField>
  </>
);

export default AcademicSection;
