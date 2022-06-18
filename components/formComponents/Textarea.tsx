import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormIF } from "../../models/form.models";

function Textarea(props: FormIF) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
