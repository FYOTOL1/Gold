import React from "react";
import Layout from "../components/Layout/Layout";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";

export default function HomePage() {
  return (
    <>
      <div className="Container">
        <Layout>
          <Section1 />
          <Section2 />
        </Layout>
      </div>
    </>
  );
}
