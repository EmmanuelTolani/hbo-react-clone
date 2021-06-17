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
      <FeaturedMedia />
      <LazyLoad
        offset={-680}
        placeholder={<Placeholders title="Popular Movies" type="large-v" />}
      >
        <MediaRow
          title="Popular Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="New Series" type="small-h" />}
      >
        <MediaRow
          title="New Series"
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
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  );
}
