import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { FormIF } from "../../models/form.models";

function Input(props: FormIF) {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-5">
      <label className="flex font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="block w-96 py-2 px-3 text-sm leading-normal text-red bg-white bg-none rounded border-red-500 border-2"
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
