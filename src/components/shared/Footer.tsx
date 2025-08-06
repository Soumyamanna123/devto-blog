// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 text-center text-sm text-gray-500 mt-8">
      © {new Date().getFullYear()} Soumya’s DEV.to Blog. All rights reserved.
    </footer>
  );
};

export default Footer;
