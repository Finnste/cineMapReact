import * as React from "react";
import Layout from "../components/Layout";

function Home() {
  const title = "About";

  return (
    <div className="App">
      <Layout>
        <div className="content">
          <h1>{title}</h1>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
