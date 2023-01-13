import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
/* import MetadataBox from "../components/MetadataBox"*/
import Body from "../components/field/Body" 

const DocPage = ({ data }) => {
  const doc = data.searchableItem
//   const images = data.nodeDocuments.field_image_url
  return (
    <Layout>
      <div className="float-right"> <Link to={'/'}>Back to search</Link></div>
       <h1 className="md:text-4xl border-bottom border-gray-50 font-display tracking-wide">{ doc.title }</h1>
      <article>
      {doc.body ? <div className="pb-4 text-base font-normal tracking-wide text-stone-600"><Body content={doc.body}/></div> : ""}

      </article>
            <Link to={'/'}>Back to search</Link>
    
    </Layout>
  )
}

export default DocPage

export const query = graphql`
  query($did: String) {
    searchableItem(nid: { eq: $did }) {
      nid
      title
      body
    } 
  }
    

`