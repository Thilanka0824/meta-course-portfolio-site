import React from "react";
import { Box, HStack, Link, Spacer } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
  { href: "https://github.com", icon: faGithub },
  { href: "https://linkedin.com", icon: faLinkedin },
];

const Header = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const hash = event.target.hash;
    document.querySelector(hash).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box as="header" bg="black" color="white" p={4}>
      <HStack spacing={8}>
        {socials.map((social, index) => (
          <Link key={index} href={social.href} isExternal>
            <FontAwesomeIcon icon={social.icon} size="2x" />
          </Link>
        ))}
      </HStack>
      <Spacer />
      <nav>
        <Link onClick={handleClick} href="#projects-section">
          Projects
        </Link>
        <Link onClick={handleClick} href="#contactme-section">
          Contact Me
        </Link>
      </nav>
    </Box>
  );
};

export default Header;
