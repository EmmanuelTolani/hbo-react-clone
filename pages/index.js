import Head from "next/head";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider.js";
import Login from "../components/UI/Login/Login";
import { Router, useRouter } from "next/router";
export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push("/create");
    }
  }, []);
  return (
    <div>
      <Login />
    </div>
  );
}
