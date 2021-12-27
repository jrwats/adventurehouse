import React from 'react';
import { Link } from 'gatsby';
import Badge from './Badge';
import { Flex } from 'rebass';

const Header = () => {
  return (
    <Flex px={2} color="white" bg="#38a" opacity="70%" alignItems="center">
      <Badge width={1 / 5} px={2}>
        <Link to="/about">About</Link>
      </Badge>
      <Badge width={1 / 5} px={2}>
        <Link to="/info">House Info</Link>
      </Badge>
      <Badge width={1 / 5} px={2}>
        <Link to="/contact">Contact</Link>
      </Badge>
      <Badge width={1 / 5} px={2}>
        <Link to="/gallery">Gallery</Link>
      </Badge>
      <Badge width={1 / 5} px={2}>
        <Link to="/activities">Activities</Link>
      </Badge>
    </Flex>
  );
};

export default Header;
