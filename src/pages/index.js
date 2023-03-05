import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";
import Layout from "@/components/Layout";
import Skils from "@/components/Skils";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <Introduction />
      <AboutMe />
      <Skils />
    </Layout>
  );
}
