const escapeStringRegexp = require("escape-string-regexp")

const pagePath = `search`
const indexName = `alldocs`

const docQuery = `{
  allSearchableItem {
    edges {
      node {
        author
        body
        date
        headnote
        id
        nid
        baseURL
        source
        title
        recipient
        collection
      }
    }
  }
      
}`

function docToAlgoliaRecord({ node: { id, title, author, body, date, headnote, nid, baseURL, source, recipient, collection } }) {
  return {
    objectID: id,
    title, 
    author,
    body, 
    date,
    headnote,
    nid,
    baseURL, 
    source,
    collection,
    recipient
  }
}

const queries = [
  {
    query: docQuery,
    transformer: ({ data }) => data.allSearchableItem.edges.map(docToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`body:20`], searchableAttributes: ['title', 'body', 'headnote', 'author'], attributesForFaceting:['collection', 'author'], typoTolerance: 'min', minWordSizefor1Typo:5 },
  },
]

module.exports = queries