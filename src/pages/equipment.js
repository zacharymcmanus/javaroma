import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Tools from '../components/Home/Tools';

const EquipmentPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
            <BackgroundSection
                img={data.img.childImageSharp.fluid}
                title=""
                styleClass="about-background"
            />
            <Tools />
        </Layout>
    );
};

export const query = graphql`
    {
        img: file(relativePath: { eq: "tools-background.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

export default EquipmentPage;
