import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import TextError from "../../components/formComponents/TextError";
import { AddBlogFormIF } from "../../models/form.models";

import { useAddBlogMutation } from "../../redux/api-query/blogsApi";

const initialValues = {
  title: "",
  tag: "",
  imageUrl: "",
  description: "",
};

// const [updateBlog] = useUpdateBlogMutation();
// const [deleteBlog] = useDeleteBlogMutation();

// const addHandler = async () => {
//   await addBlog(Blog);
// };
// const updateHandler = async () => {
//   await updateBlog(BlogUpdate);
// };
// const deleteHandler = async () => {
//   await deleteBlog(Blog.id);
// };

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  tag: Yup.string().required("Required"),
  imageUrl: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

function AddBlogForm() {
  const [addBlog] = useAddBlogMutation();
  const onSubmit = async (values: AddBlogFormIF) => {
    console.log("Form data", values);
    await addBlog(values);
  };

  return (
    <>
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
                  id="title"
                  label="title"
                  variant="outlined"
                  {...formik.getFieldProps("title")}
                />
                <ErrorMessage component={TextError} name="title" />
              </div>
              <div className="m-4">
                <TextField
                  type="text"
                  id="tag"
                  label="tag"
                  variant="outlined"
                  {...formik.getFieldProps("tag")}
                />
                <ErrorMessage component={TextError} name="tag" />
              </div>
              <div className="m-4">
                <TextField
                  type="text"
                  id="imageUrl"
                  label="imageUrl"
                  variant="outlined"
                  {...formik.getFieldProps("imageUrl")}
                />
                <ErrorMessage component={TextError} name="imageUrl" />
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
    </>
  );
}

export default AddBlogForm;
