import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage, FieldAttributes } from "formik";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";
import { FormIF } from "../../models/form.models";

function DatePicker(props: FormIF) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: FieldAttributes<any>) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: string) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default DatePicker;
