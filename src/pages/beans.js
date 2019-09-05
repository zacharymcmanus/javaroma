import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Menu from '../components/Home/Menu';

const BeansPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
            <BackgroundSection
                img={data.img.childImageSharp.fluid}
                title=""
                styleClass="about-background"
            />
            <Menu items={data.menu} />
        </Layout>
    );
};

export const query = graphql`
    {
        img: file(relativePath: { eq: "beans-background.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        menu: allContentfulCoffeeProduct {
            edges {
                node {
                    id
                    title
                    description {
                        description
                    }
                    price
                    category
                    image {
                        fixed(width: 50, height: 50) {
                            ...GatsbyContentfulFixed_tracedSVG
                        }
                    }
                }
            }
        }
    }
`;

export default BeansPage;
