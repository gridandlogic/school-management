import { SchoolDataProvider } from "../components/SchoolDataProvider";
import Head from "next/head";
import "../styles/globals.css";

export default function GridAndLogicApp({ Component, pageProps }) {
  return <SchoolDataProvider><Head><title>Grid &amp; Logic · School Management</title><meta name="description" content="Grid & Logic school management workspace" /><meta name="theme-color" content="#101b2d" /><link rel="icon" href="/grid-logic-badge.png" /></Head><Component {...pageProps} /></SchoolDataProvider>;
}
