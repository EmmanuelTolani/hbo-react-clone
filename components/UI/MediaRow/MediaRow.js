import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../utilities";
``;
const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);
  // /disvcover/movie?with_genres=28&primary_release_year=2021
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=770162f1bd0b953990d3f8e5f3632668&language=en-US`
      )
      .then(function (response) {
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
        console.log("the movies");
        console.log(movies);
        // handle success
        console.log("Success Response for " + props.title);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log("Error Response for " + props.title);
        console.log(error);
      });
  }, []);
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index < digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} />;
        });
  };
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {showThumbnails()}
        {/* {loopComp(<Thumbnail />, 10)} */}
      </div>
    </div>
  );
};

const Thumbnail = (props) => {
  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/original${props.movieData.poster_path}`}
        alt=""
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};

export default MediaRow;
