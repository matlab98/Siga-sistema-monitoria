import React from "react";

import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import validator from "validator";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function RegistrarMonitor() {
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
      email: "",
      name: "",
      lastname: "",
      acaProgram: "",
      semester: "",
      cedula: "",
      contacto: ""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 7));
    },
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registrar monitor
      </Typography>
      <form className="form form-login" onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="cedula"
              name="cedula"
              label="Cédula"
              fullWidth
              autoComplete="code"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cedula}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              label="Nombre(s)"
              fullWidth
              autoComplete="given-name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastname"
              name="lastname"
              label="Apellidos"
              fullWidth
              autoComplete="family-name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Correo electrónico"
              fullWidth
              autoComplete="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="acaProgram"
              name="acaProgram"
              label="Programa acádemico"
              fullWidth
              autoComplete="programa"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.acaProgram}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="semester"
              name="semester"
              label="Semestre"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.semester}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="contacto"
              name="contacto"
              label="Contacto"
              fullWidth
              autoComplete="shipping country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contacto}
            />
          </Grid>
        </Grid>
        <button type="submit" class="btn btn-primary">Continuar</button>
        <button type="" class="btn btn-danger">Cancelar</button>
      </form>
    </React.Fragment>
  );
}

/**
 * import { ResponsiveTimeRange } from "@nivo/calendar";
 * const MyResponsiveTimeRange = ({ data  }) => (
    <ResponsiveTimeRange
        data={data}
        from="2018-04-01"
        to="2018-08-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
        margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                justify: false,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left',
                translateX: -85,
                translateY: -240,
                symbolSize: 20
            }
        ]}
    />
)
 */
