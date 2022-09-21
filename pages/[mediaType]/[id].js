import Head from "next/head";
import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layouts/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import Placeholders from "../../components/UI/PlaceHolders/Placeholders";

export default function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false);
  console.log(props);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=770162f1bd0b953990d3f8e5f3632668&language=en-US`
  //     )
  //     .then(function (response) {
  //       setMediaData(response.data);
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log("Error Response for ");
  //       console.log(error);
  //     });
  // }, [mediaData]);
  // console.log(router.query);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/original${props.mediaData.backdrop_path}`}
        title={
          props.query.mediaType === "movie"
            ? props.mediaData.title
            : props.mediaData.name
        }
        location="In theaters and on HBO MAX. Streaming throught May 26."
        linkUrl="/movies/id"
        type="single"
        mediaType={props.query.mediaType}
        mediaId={props.query.id}
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Popular Movies" type="small-v" />}
      >
        <MediaRow
          updateData={props.query.id}
          title="Similar To This"
          type="small-v"
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === "movie" ? "movie" : "tv"}/${
            props.query.id
          }/similar?`}
        />
      </LazyLoad>
      <CastInfo
        mediaId={props.query.id}
        mediaType={props.query.mediaType}
        updateData={props.query.id}
      />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;
  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=770162f1bd0b953990d3f8e5f3632668&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: { mediaData: mediaData.data, query: context.query }, // will be passed to the page component as props
  };
}
