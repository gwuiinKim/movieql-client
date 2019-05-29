import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAIL = gql`
  # 이 부분은 apollo에 해당하는 부분
  query getMovieDetails($movieId: Int!) {
    #  이 부분은 server
    movie(id: $movieId) {
      title
      medium_cover_image
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      id
      medium_cover_image
      title
      rating
    }
  }
`;
