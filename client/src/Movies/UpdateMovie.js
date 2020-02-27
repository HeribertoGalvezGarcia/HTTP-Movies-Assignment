import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouteMatch, useHistory } from 'react-router-dom';
import FormikMovieForm from "./MovieForm";

function UpdateMovie({updateMovie}) {
  const [movie, setMovie] = useState(null);
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  }, [match.params.id]);

  const handleSubmit = (newMovie) => {
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, {...movie, ...newMovie})
      .then(() => {
        updateMovie({...movie, ...newMovie});
        history.push('/');
      })
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <FormikMovieForm {...movie} handleSubmit={handleSubmit} />
}

export default UpdateMovie;
