// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = (props: PageProps) => (
  <Layout>
    <SEO title="About the DPC" />
    <h1>About the Digital Publishing Collaborative</h1>
    <section> <p className="py-2">Material coming soon. </p></section>

    <section className="pb-4"> <p className="py-2">Currently, this site populates published documents from two projects in the Digtial Publishing Collaborative: The Julian Bond Papers Project and Howard Thurman Papers Project. </p></section>
   
    {/* <p className="p-2">Content coming ({props.path})</p> */}
 
  </Layout>
)

export default AboutPage
