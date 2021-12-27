import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Thumbnail = ({ ...props }) => (
  <GatsbyImage style={{ width: '200px', height: '200px' }} {...props} />
);

Thumbnail.propTypes = {};

export default Thumbnail;
