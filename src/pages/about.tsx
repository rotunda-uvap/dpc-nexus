// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="About the DPC" />
    <h1>About the Digital Publishing Collaborative</h1>
    <section className="pb-4"> <p className="py-2">Content coming.</p></section>
   
    {/* <p className="p-2">Content coming ({props.path})</p> */}
 
  </Layout>
)

export default SecondPage
