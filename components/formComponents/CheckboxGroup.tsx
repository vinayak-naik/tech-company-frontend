import React from "react";
import { Field, ErrorMessage, FieldAttributes } from "formik";
import TextError from "./TextError";
import { FormIF } from "../../models/form.models";

function CheckboxGroup(props: FormIF) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      {options && (
        <Field name={name}>
          {({ field }: FieldAttributes<any>) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              );
            });
          }}
        </Field>
      )}
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CheckboxGroup;
