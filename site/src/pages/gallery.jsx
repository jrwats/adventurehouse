import React from 'react';
import { shape, any, arrayOf } from 'prop-types';
import { graphql } from 'gatsby';
import { Box } from 'rebass';
import Header from '../components/Header';
import Thumbnail from '../components/Thumbnail';
import { getImage } from 'gatsby-plugin-image';

export const thumbFluid = graphql`
  fragment thumbFluid on File {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        width: 200
        placeholder: BLURRED
        formats: [AUTO, WEBP, JPG]
      )
    }
  }
`;

export const query = graphql`
  query {
    allFile(
      filter: { relativePath: { regex: "/pics/.*jpg/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          ...thumbFluid
        }
      }
    }
  }
`;

const Gallery = ({ data }) => {
  return (
    <div>
      <Header />
      <Box
        className="imgs"
        sx={{
          display: 'grid',
          gridGap: 3, // theme.space[3]
          gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
        }}
      >
        {data.allFile.edges.map((data) => (
          <Thumbnail
            key={data.node.id}
            width={200}
            alt=""
            image={getImage(data.node)}
          />
        ))}
      </Box>
    </div>
  );
};

Gallery.propTypes = {
  data: shape({
    allFile: shape({
      edges: arrayOf(any),
    }),
  }),
};

export default Gallery;
