import React from "react"
import {graphql} from "gatsby"
import Layout from "../elements/layout";
import Header from "../elements/header/header";
import Container from "../elements/container/container";
import BlockAlternative from "../elements/blockalternative/blog";
import Content from "../elements/content/content";
import IllustrationBackgroundModern from "../background/background_3/backgroundmodern";
import Person from "../elements/person/contactblock";
import SEO from "../elements/seo";
import  "./style.css";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data;// data.markdownRemark holds our post data
    const {frontmatter, html} = markdownRemark;

    return <Layout>

        <SEO title={frontmatter.title}
             keywords={'Umsatz, Videomarketing'}
             metaDescription={frontmatter.subtitle}/>

        <Header title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                button={{href: '', text: 'Jetzt lesen'}}>


            {frontmatter.video && <Container padded>
                <video style={{'height': 'auto', 'width': '100%', 'margin-bottom': '40px'}} height="560" controls>
                    <source src={require("./../videos/" + frontmatter.video)} type="video/mp4"/>
                </video>
            </Container>}

        </Header>


        <IllustrationBackgroundModern>

            <Container>
                <Content>
                    <div className={"blogcontent"}>

                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{__html: html}}/>

                        <div className={"rightside"}>

                            <Person
                                person={require('./../' + frontmatter.author + '.json')}
                                style={{'margin-bottom': '40px'}}/>

                            <BlockAlternative id="adv" imgalt="icon showing video" style={{
                                'position': 'sticky',
                                'top': '20px'
                            }} title={"Bereit für Ihr eigenes Video?"}
                                              subtitle={"Wir erstellen Ihr perfektes Video und unterstützen Sie auch darüber hinaus.. Wir erstellen Ihr perfektes Video und unterstützen Sie auch darüber hinaus. "}
                                              />
                        </div>

                    </div>
                </Content>
            </Container>
        </IllustrationBackgroundModern>
    </Layout>;
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        subtitle
        title
        path
        title
        video
        author
      }
    }
  }
`