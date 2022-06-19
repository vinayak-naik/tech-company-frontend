import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import TextError from "../../components/formComponents/TextError";
import { useLoginUserMutation } from "../../redux/api-query/usersApi";
import { LoginFormIF } from "../../models/user.model";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  const [loginUser] = useLoginUserMutation();
  const onSubmit = async (values: LoginFormIF) => {
    await loginUser(values);
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="p-4">
            <div className="m-4">
              <TextField
                type="text"
                id="email"
                label="Email"
                variant="outlined"
                {...formik.getFieldProps("email")}
              />
              <ErrorMessage component={TextError} name="email" />
            </div>
            <div className="m-4">
              <TextField
                type="text"
                id="password"
                label="password"
                variant="outlined"
                {...formik.getFieldProps("password")}
              />
              <ErrorMessage component={TextError} name="password" />
            </div>
            <div className="m-4">
              <Button color="primary" type="submit" variant="outlined">
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
