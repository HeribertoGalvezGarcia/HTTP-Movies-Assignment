import React from "react";
import {withFormik, Form, Field} from "formik";

function MovieForm() {
  return (
    <Form className='save-wrapper'>
      <div className="movie-card">
        <Field type="text" name="title" />
        <div className="movie-director">
          Director: <Field type="text" name="director" />
        </div>
        <div className="movie-metascore">
          Metascore: <Field type="number" name="metascore" />
        </div>
        <input type="submit" value="Submit!" />
      </div>
    </Form>
  );
}

const FormikMovieForm = withFormik({
  mapPropsToValues: ({title = '', director = '', metascore = ''}) => ({title, director, metascore}),
  handleSubmit(values, {setSubmitting, props: {handleSubmit}}) {
    setSubmitting(false);
    handleSubmit(values);
  }
})(MovieForm);

export default FormikMovieForm;
