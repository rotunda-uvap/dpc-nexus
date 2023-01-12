import React from "react"
import Search from "../components/search/index"
import "../components/search/search.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Proof of Concept Federated Search from Drupal</h1>
    <Search />
  </Layout>
)

export default IndexPage
