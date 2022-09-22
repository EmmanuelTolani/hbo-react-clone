import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../../components/HBOProvider.js";
import { Router, useRouter } from "next/router";
import MainLayout from "../../components/Layouts/MainLayout";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import AuthCheck from "../../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholders from "../../components/UI/PlaceHolders/Placeholders";
import GenreNav from "../../components/UI/GenreNav/GenreNav.js";
import axios from "axios";
import { shuffleArray } from "../../components/utilities.js";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();
  const showRandomMedia = () => {
    let thumbType;
    return props.genresData.map((item) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0];
      return (
        <LazyLoad
          offset={-200}
          placeholder={
            <Placeholders title={item.name} type={thumbType} key={item.id} />
          }
        >
          <MediaRow
            title={item.name}
            type={thumbType}
            mediaType="movie"
            endpoint={`discover/${props.query.mediaType}?with_genres=${item.id}&sort_by=popularity.desc&primary_release_year=2021`}
          />
        </LazyLoad>
      );
    });
  };
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={
          props.query.mediaType === "movie"
            ? props.featuredData.title
            : props.featuredData.name
        }
        location="In theaters and on HBO MAX. Streaming throught May 26."
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type="single"
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      {showRandomMedia()}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=770162f1bd0b953990d3f8e5f3632668&language=en-US`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&api_key=770162f1bd0b953990d3f8e5f3632668&language=en-US`
    );
    // console.log("Genres Data");
    // console.log(genresData.data);
  } catch (error) {
    // console.log(error);
    // console.log(error);
  }
  // console.log(genresData);
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    }, // will be passed to the page component as props
  };
}
