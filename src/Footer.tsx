import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white', color: 'black' }}>
      &copy; {new Date().getFullYear()} Mehul Gandhi
    </footer>
  );
};

export default Footer;