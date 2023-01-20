import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Body from "../components/field/Body" 
import Date from "../components/field/Date"
import Headnote from "../components/field/Headnote"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const DocPage = ({ data }) => {
  const doc = data.searchableItem
  const image = getImage(data.jumbo)
  const avatar = getImage(data.av)

 // const images = data.nodeDocuments.field_image_url
//   const images = data.nodeDocuments.field_image_url



  return (
    <Layout>
      {/* <div className="float-right"> <Link to={'/'}>Back to search</Link></div> */}

<h1 className="font-bold text-3xl my-6">{doc.title}</h1>
<div class="flex items-center m-6">
     <GatsbyImage image={avatar} alt={data.pub} className="rounded-full mr-2 h-14"/>
  
      <div className="pl-4"><a href={doc.baseURL}> View on the {doc.collection} </a></div>
    </div>
      <section className="mb-32 text-gray-800 flex flex-col md:flex-row">
     
      {/* <GatsbyImage image={image} alt={data.jumbo.name} /> */}

    <article>
      
    <div>
    {doc.headnote ? <div className="text-gray-500 mb-6"><Headnote content={doc.headnote}/></div> : ""}
      </div>
    {doc.body ? <div className="text-gray-600 mb-6"><Body content={doc.body}/></div> : ""}
    </article>
    <aside className="px-6 flex flex-col gap-4  divide-y divide-blue-200 ">
    {doc.date ? <div className="flex flex-col gap-2 pt-2"><span className="font-bold">Date:</span><Date content={doc.date}/></div> : ""}
    {doc.collection ? <div className="flex flex-col gap-2 pt-2"><span className="font-bold">Collection:</span>{doc.collection}</div> : ""}
      {doc.source ? <div className="flex flex-col gap-2 pt-2"><span className="font-bold">Source:</span>{doc.source}</div> : ""}
    </aside>
  </section>
    
            <Link to={'/'}>Back to search</Link>
    
    </Layout>
  )
}

export default DocPage

export const query = graphql`
  query($did: String, $heroimg: String, $avatarimg: String) {
    searchableItem(nid: { eq: $did }) {
      nid
      title
      headnote
      body
      collection
      date
      source
      pub
      hero
      baseURL
    },
    jumbo: file(extension: {eq: "jpg"}, relativePath: {eq: $heroimg}) {
      name
      relativePath
      childImageSharp {
        gatsbyImageData
      }
    },
    av: file(extension: {eq: "jpg"}, relativePath: {eq: $avatarimg}) {
      name
      relativePath
      childImageSharp {
        gatsbyImageData
      }
    }
    
  }
    

`