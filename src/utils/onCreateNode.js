module.exports = ({ actions, createNodeId, node }) => {
    const { createNode, createParentChildLink } = actions;
  
    // Create child searchable item node.
    const searchableItemNode = createSearchableItemNode(node);
  
    if (!searchableItemNode) {
      return;
    }
  
    // Create new ID value based on parent ID.
    searchableItemNode.id = createNodeId(`${node.id}__SearchableItem`);
  
    // Create Gatsby node.
    createNode(searchableItemNode);
  
    // Create parent/child link.
    createParentChildLink({ parent: node, child: searchableItemNode });
  };

  /**
 * Create SearchableItem node.
 * @param {Object} node
 */
function createSearchableItemNode(node) {
    const typeFieldData = getTypeSpecificFieldData(node);
  
    if (!typeFieldData) {
      return null;
    }
  
    const fieldData = {
      // System fields.
      type: node.internal.type,
  
      // Element fields.
      ...typeFieldData,
    };
  
    const searchableItemNode = {
      ...fieldData,
  
      parent: node.id,
      children: [],
      internal: {
        type: 'SearchableItem',
        contentDigest: JSON.stringify(fieldData)
      },
    };
  
    return searchableItemNode;
  }
  
  /**
   * Get searchable field data for specific types.
   * @param {Object} node
   */
  function getTypeSpecificFieldData(node) {
    switch (node.internal.type) {
      case 'bondDocs':
        return {
            body: node.body,
            pub: "bond",
            hero: "bond-hero.jpg",
            avatar: "bond-avatar.jpg",
            title: node.title,
            id: node.id,
            nid: node.nid,
            baseURL: node.baseURL,
            date: node.date,
            author: node.author,
            headnote: node.headnote,
            recipient: node.recipient,
            source: node.source,
            collection: node.collection
        };
     
  
      case 'thurmanDocs':
        return {
            body: node.body,
            pub: "thurman",
            hero: "thurman-hero.jpg",
            avatar: "thurman-avatar.jpg",
            title: node.title,
            id: node.id,
            nid: node.nid,
            baseURL: node.baseURL,
            date: node.date,
            author: node.author,
            headnote: node.headnote,
            recipient: node.recipient,
            source: node.source,
            collection: node.collection
        };
  
      default:
        return null;
    }
  }
 