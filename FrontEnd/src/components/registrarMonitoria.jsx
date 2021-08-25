import React from "react";

import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import validator from "validator";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const RegistrarMonitoria = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Correo electrónico inválido";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      subject: "",
      monitor: "",
      date: "",
      classroom: ""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registrar monitoría
      </Typography>
      <form className="form form-login" onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="subject"
              name="subject"
              label="Asignatura"
              fullWidth
              autoComplete="code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="monitor"
              name="monitor"
              label="Monitor asignado"
              fullWidth
              autoComplete="given-name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.monitor}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="classroom"
              name="classroom"
              label="Salón designado"
              fullWidth
              autoComplete="family-name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.classroom}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="date"
              name="date"
              label="Fecha"
              fullWidth
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
          </Grid>
        </Grid>
        <button type="submit" class="btn btn-primary">Continuar</button>
        <button type="" class="btn btn-danger">Cancelar</button>
      </form>
    </React.Fragment>
  );
}