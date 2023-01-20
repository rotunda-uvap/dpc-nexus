const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allSearchableItem {
            edges {
                node {
                  id
                  nid
                  pub
                  hero
                  avatar
                }
            }
          }
        

      }
      
    `
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }
      
        const docs = result.data.allSearchableItem.edges
        docs.forEach(({ node }) => {
          createPage({
            path: `/documents/${node.pub}/${node.nid}`,
            component: path.resolve(`./src/templates/document-page.js`),
            context: {
              id: node.id,
              did: node.nid,
              heroimg: node.hero,
              avatarimg: node.avatar
            },
          })
        })

       
    
      })
      
    }