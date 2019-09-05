import React from 'react';
import Tool from './Tool';
import Title from '../Globals/Title';
import { StaticQuery, graphql } from 'gatsby';

const getTools = graphql`
    {
        products: allContentfulEquipmentProduct {
            edges {
                node {
                    id
                    title
                    price
                    image {
                        fluid(maxHeight: 426) {
                            src
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`;

export default function Tools() {
    return (
        <StaticQuery
            query={getTools}
            render={data => {
                return (
                    <section className="py-5">
                        <div className="container">
                            <Title title="Shop Brewing Tools" />
                            <div className="row">
                                {data.products.edges.map(
                                    ({ node: product }) => {
                                        return (
                                            <Tool
                                                key={product.id}
                                                product={product}
                                            />
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </section>
                );
            }}
        />
    );
}
