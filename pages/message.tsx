import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import TextError from "../components/formComponents/TextError";
import { AddMessageFormIF } from "../models/message.model";
import { useAddmessageMutation } from "../redux/api-query/messageApi";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  phone: Yup.string().required("Required"),
  service: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function ContactUsForm() {
  const [addMessage] = useAddmessageMutation();
  const onSubmit = async (values: AddMessageFormIF) => {
    console.log("Form data", values);
    await addMessage(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="p-4" method="post">
            <div className="m-4">
              <TextField
                type="text"
                id="name"
                label="name"
                variant="outlined"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage component={TextError} name="name" />
            </div>
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
                id="phone"
                label="phone"
                variant="outlined"
                {...formik.getFieldProps("phone")}
              />
              <ErrorMessage component={TextError} name="phone" />
            </div>
            <div className="m-4">
              <FormControl className="w-60">
                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="phone"
                  label="phone"
                  variant="outlined"
                  name="service"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.service}
                >
                  <MenuItem value="web-dev">Web Development</MenuItem>
                  <MenuItem value="web-design">Web Design</MenuItem>
                  <MenuItem value="dev-ops">Dev Ops</MenuItem>
                </Select>
              </FormControl>
              <ErrorMessage component={TextError} name="service" />
            </div>
            <div className="m-4">
              <TextField
                type="text"
                id="description"
                label="description"
                variant="outlined"
                {...formik.getFieldProps("description")}
              />
              <ErrorMessage component={TextError} name="description" />
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

export default ContactUsForm;
