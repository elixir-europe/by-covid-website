/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 const { createFilePath } = require("gatsby-source-filesystem")
 exports.onCreateNode = ({ node, actions, getNode }) => {
   const { createNodeField } = actions
   // you only want to operate on `Mdx` nodes. If you had content from a
   // remote CMS you could also check to see if the parent node was a
   // `File` node here
   if (node.internal.type === "Mdx") {
     const value = createFilePath({ node, getNode })
     if(node.frontmatter.postType === 'News')
     {
      if(node.frontmatter.redirect === 'Yes')
      {
       createNodeField({
         // Name of the field you are adding
         name: "slug",
         // Individual MDX node
         node,
         // Generated value based on filepath with "blog" prefix. you
         // don't need a separating "/" before the value because
         // createFilePath returns a path with the leading "/".
         value: `/news-events${value}`,
       })
      }
      else{
        createNodeField({
          // Name of the field you are adding
          name: "slug",
          // Individual MDX node
          node,
          // Generated value based on filepath with "blog" prefix. you
          // don't need a separating "/" before the value because
          // createFilePath returns a path with the leading "/".
          value: `/news${value}`,
        })
      }
     }
     else if(node.frontmatter.postType === 'Event'){
       if(node.frontmatter.redirect === 'Yes')
       {
        createNodeField({
          // Name of the field you are adding
          name: "slug",
          // Individual MDX node
          node,
          // Generated value based on filepath with "blog" prefix. you
          // don't need a separating "/" before the value because
          // createFilePath returns a path with the leading "/".
          value: `/news-events${value}`,
        })
       }
       else{
        createNodeField({
          // Name of the field you are adding
          name: "slug",
          // Individual MDX node
          node,
          // Generated value based on filepath with "blog" prefix. you
          // don't need a separating "/" before the value because
          // createFilePath returns a path with the leading "/".
          value: `/events${value}`,
        })
       }

     }
     else if(node.frontmatter.postType === 'Usecase') {
      createNodeField({
        // Name of the field you are adding
        name: "slug",
        // Individual MDX node
        node,
        // Generated value based on filepath with "blog" prefix. you
        // don't need a separating "/" before the value because
        // createFilePath returns a path with the leading "/".
        value: `/usecases${value}`,
      })
     }
     else{
      createNodeField({
        // Name of the field you are adding
        name: "slug",
        // Individual MDX node
        node,
        // Generated value based on filepath with "blog" prefix. you
        // don't need a separating "/" before the value because
        // createFilePath returns a path with the leading "/".
        value: `/usecases-fr${value}`,
      })
     }
   }
 }

 const path = require("path")
 exports.createPages = async ({ graphql, actions, reporter }) => {
   // Destructure the createPage function from the actions object
   const { createPage } = actions
   const result = await graphql(`
     query {
       allMdx(filter: {frontmatter: {class: {eq: "post"}}}) {
         edges {
           node {
             id
             fields {
               slug
             }
             frontmatter {
              postType 
              redirect            
            }
           }
         }
       }
     }
   `)
   if (result.errors) {
     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
   }
   // Create blog post pages.
   const posts = result.data.allMdx.edges
   // you'll call `createPage` for each result
   posts.forEach(({ node }, index) => {
     //console.log(node.frontmatter.postType)
     if(node.frontmatter.postType === 'Usecase'){
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/usecases-layout.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
     }
     else  if(node.frontmatter.postType === 'UsecaseFr'){
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/usecases-layout-fr.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
     }
     else  if(node.frontmatter.postType === 'News'){
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/news-layout.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
     }
     else  if(node.frontmatter.postType === 'Event'){
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/events-layout.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
     }
     else{
      createPage({
        // This is the slug you created before
        // (or `node.frontmatter.slug`)
        path: node.fields.slug,
        // This component will wrap our MDX content
        component: path.resolve(`./src/components/posts-layout.js`),
        // You can use the values in this context in
        // our page layout component
        context: { id: node.id },
      })
     }
   })
 }
