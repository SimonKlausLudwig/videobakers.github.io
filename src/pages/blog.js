import React from "react"

import Layout from "../elements/layout"
import Header from "../elements/header/header";
import {graphql} from "gatsby";
import BlogListComponent from "../components/bloglist/bloglist";
import SEO from "../elements/seo";


const StepsPage = ({
                       data: {
                           allMarkdownRemark: {edges},
                       },
                   }) => {

    var curBlog = edges.filter(edge => edge.node.frontmatter.path === '/blog/umsatz-steigern-mit-videos')[0];
    return <Layout>


        <SEO title="Aktuelle Projekte, Blogs und mehr"
             metaDescription={"Der Videobakers Blog hälts mit aktuellem Wissen in den Bereichen Video, Marketing und Social Media immer auf dem Laufenden. Werden Sie mit uns erfolgreicher!. Jetzt lesen"}/>
        <Header title={curBlog.node.frontmatter.title}
                subtitle={curBlog.node.frontmatter.subtitle}
                button={{href: curBlog.node.frontmatter.path, text: 'Jetzt lesen'}}>

            <BlogListComponent
                entries={edges.filter(edge => edge.node.frontmatter.path !== '/blog/umsatz-steigern-mit-videos')}/>
        </Header>
    </Layout>;
};

export default StepsPage


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            subtitle
            img
            path
            title
            author
            video
          }
        }
      }
    }
  }
`;
