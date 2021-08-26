import React, { useState } from "react";

import { useFormik } from "formik";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import AppContext from "../Context/AppContext";

export default function RegistrarMonitor() {
  const [monitoria, setMonitoria] = useState(AppContext);
  const [submitted, setSubmitted] = useState(false);
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
      console.log(values)

        AppContext.create("monitor", values)
        .then(response => {
          setMonitoria({
          });
          setSubmitted(true);
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
        
    },
  });


console.log(monitoria)





  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (<div className="container">
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
              autoComplete="carrer"
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
        <Grid item xs={12} sm={6}>
       
        <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
        endIcon={<SaveIcon />}
      >
        Continuar
      </Button>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />
        }
      >
        Cancelar
      </Button></Grid>
      </form>
    </React.Fragment></div>
  );
}
