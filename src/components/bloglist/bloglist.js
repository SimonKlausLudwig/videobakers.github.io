import React from "react"
import BlockStrol from "../../elements/blogstrol";
import Seperator from "../../elements/seperator/seperator";
import CTA from "../../elements/cta/cta";
import Container from "../../elements/container/container";


const BlogListComponent = ({entries}) => {

    return <div>
        {entries
            .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
            .map((edge, i) => {
                var el = edge.node.frontmatter;
                return <div id={el.img}>

                    {i === 3 && <CTA/>}

                    {i === 3 && <Seperator/>}

                    <Container>
                        <BlockStrol
                            onClick={() => {
                                document.getElementById(edge.node.id).play();
                            }}
                            path={!el.video ? edge.node.frontmatter.path : '#' + el.img}
                            subtitle={edge.node.frontmatter.subtitle}
                            img={edge.node.frontmatter.img}
                            title={edge.node.frontmatter.title}>


                            {el.video ? <video id={edge.node.id} poster={require('./../../images/' + el.img)}
                                               style={{"width": "100%", "height": "auto"}} controls>
                                    <source src={require('./../../videos/' + el.video)} type="video/mp4"/>
                                </video>
                                : <img alt="blog thumbnail"
                                       src={require('./../../images/' + el.img)}/>}

                        </BlockStrol>
                    </Container>
                </div>;
            })}
    </div>
};

export default BlogListComponent;
