import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-6 text-center text-medium text-sm">
        <p>&copy; {new Date().getFullYear()} Darpan Jiyani. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;