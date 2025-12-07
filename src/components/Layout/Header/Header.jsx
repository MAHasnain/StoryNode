import React from "react";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Header() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          StoryNode
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Login</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/all-stories">Stories</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
