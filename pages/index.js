import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider.js";
import Login from "../components/UI/Login/Login";
import { Router, useRouter } from "next/router";
import MainLayout from "../components/Layouts/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import AuthCheck from "../components/AuthCheck";
import LazyLoad from "react-lazyload";
import Placeholders from "../components/UI/PlaceHolders/Placeholders";
export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {}, []);
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16&mute=1&playlist=NYH2sLid0Zc"
        title="Mortal Kombat"
        location="In theaters and on HBO MAX. Streaming throught May 26."
        linkUrl="/movie/460465"
        type="front"
        mediaType={"movie"}
        mediaId={460465}
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Popular Movies" type="large-v" />}
      >
        <MediaRow
          title="Popular Movies"
          type="large-v"
          mediaType="movie"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="New Series" type="small-h" />}
      >
        <MediaRow
          title="New Series"
          mediaType="series"
          type="large-h"
          endpoint="discover/tv?primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Horror" type="large-v" />}
      >
        <MediaRow
          title="Horror"
          type="small-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Cartoons & Anime " type="large-v" />}
      >
        <MediaRow
          title="Cartoons & Anime "
          type="large-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Romance" type="large-h" />}
      >
        <MediaRow
          title="Romance"
          type="large-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=10749&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Sci-fi" type="small-v" />}
      >
        <MediaRow
          title="Sci-fi"
          type="small-v"
          mediaType="movie"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
