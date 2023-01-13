import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState } from "react"
import { InstantSearch, SearchBox, Hits, Stats, RefinementList, Pagination} from "react-instantsearch-dom"
import "./search.css"
import useClickOutside from "./use-click-outside"



export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, searchKey);
  const Hit = ( {hit}) => <div><a href={`/documents/${hit.pub}/${hit.nid}`}><h6>{hit.title}</h6></a></div>

  
  useClickOutside(rootRef, () => setFocus(false))

  return (
  
      <div ref={rootRef} className="py-8">
        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
          routing={true}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} classname="w-full"/>
        <div className="py-12 grid grid-cols-4">
            <section>
                <div className="py-6">
            <h5>Author</h5><RefinementList attribute="author"/>
            </div>
            <div className="py-6">
            <h5>Collection</h5><RefinementList attribute="collection"/>
           
            </div>
                </section>
            <section className="col-span-3">
                <div><Stats/></div>
            <div><Hits hitComponent={Hit}/></div>
            </section>
            
        </div>
        <Pagination className="inline py-6"/>
        </InstantSearch>
      </div>
  
  )
}