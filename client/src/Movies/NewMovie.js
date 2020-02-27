import React from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import FormikMovieForm from "./MovieForm";

function NewMovie({addMovie}) {
  const history = useHistory();
  const handleSubmit = movie => {
    axios
      .post("http://localhost:5000/api/movies", {...movie, stars: []})
      .then(({data}) => {
        addMovie(data);
        history.push('/');
      });
  };

  return <FormikMovieForm handleSubmit={handleSubmit} />
}

export default NewMovie;
