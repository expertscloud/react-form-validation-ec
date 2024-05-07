import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "react-international-phone/style.css";
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { PhoneInput } from "react-international-phone";

const RegisterationForm = () => {
  const [text, setText] = useState(null);
  const [phone, setPhone] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleForm = async (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    phoneNumber: Yup.string().required("Phone Number is required").min(10),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleForm(values);
    },
  });

  const handleReset = () => {
    formik.resetForm();
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            bgcolor: "#ffffff",
            marginTop: { xs: 4, sm: 8 },
            padding: { xs: 3, sm: 6 },
            borderRadius: 6,
            position: "relative",
          }}>
          <Typography variant="h3"> Form</Typography>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ color: "black", fontWeight: "450", mb: 1 }}>
                First Name:
              </Typography>
              <TextField
                fullWidth
                id="first-name"
                name="firstName"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ color: "black", fontWeight: "450", mb: 1 }}>
                Last Name:
              </Typography>
              <TextField
                fullWidth
                id="last-name"
                name="lastName"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ color: "black", fontWeight: "450", mb: 1 }}>
                Email:
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Box sx={{ mt: 2, ml: 2 }}>
              <Typography sx={{ color: "black", fontWeight: "450", mb: 1 }}>
                Status:
              </Typography>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                row>
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="primary" />}
                  label="Other"
                />
              </RadioGroup>
              {formik.touched.gender && formik.errors.gender && (
                <Typography sx={{ color: "red" }}>
                  {formik.errors.gender}
                </Typography>
              )}
            </Box>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ color: "black", fontWeight: "450", mb: 1 }}>
                Mobile Number
              </Typography>
              <PhoneInput
                defaultCountry="ua"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  formik.setFieldValue("phoneNumber", phone);
                }}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <Typography sx={{ color: "red" }}>
                  {formik.errors.phoneNumber}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography sx={{ color: "black", fontWeight: "450", mb: 1 }}>
                About
              </Typography>

              <textarea
                value={text}
                onChange={handleChange}
                placeholder="Tell us About yourselves"
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "8px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  resize: "vertical",
                }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <Button
            variant="outlined"
            onClick={handleReset}
            size="large"
            sx={{ mr: 2, bgcolor: "white", color: "black", border: "white" }}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<CheckIcon />}
            color="primary">
            Add
          </Button>
        </Box>
      </form>
    </>
  );
};

export default RegisterationForm;
