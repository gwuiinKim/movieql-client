import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAIL } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAIL} variables={{ movieId }}>
    {({ loading, error, data }) => {
      if (loading) return "loading";
      if (error) return "error";
      return (
        <>
          {data.movie.title}
          {data.movie.medium_cover_image}
          {data.movie.rating}

          {data.movie.description_intro}
        </>
      );
    }}
  </Query>
);
export default Detail;
