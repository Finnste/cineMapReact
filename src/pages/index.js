import * as React from "react";
import Layout from '../components/Layout';

function Home() {
  const title = 'Welcome'


  return (
    <Layout>
      <section>
        <div className="content">
          <h1>{title}</h1>
        </div>
      </section>
    </Layout>
  )
}

export default Home;