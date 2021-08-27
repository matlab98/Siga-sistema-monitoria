import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../Context/AppContext";

const RegistrarMonitoria = () => {
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
      subject: "",
      monitor: "",
      date: "",
      classroom: "",
    },
    validate,
    onSubmit: (values) => {
      AppContext.create("monitoria", values)
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

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <div className="container">
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
            startIcon={<DeleteIcon />}
          >
            Cancelar
          </Button>
        </form>
      </React.Fragment>
    </div>
  );
};

export default RegistrarMonitoria;
