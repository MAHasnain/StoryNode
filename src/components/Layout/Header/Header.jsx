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
        <NavbarLink
          href="/"
          className="block py-2 px-3 text-xl rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
        >
          Home
        </NavbarLink>
        <NavbarLink
          className="block py-2 px-3 text-xl rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          href="/about"
        >
          About
        </NavbarLink>
        <NavbarLink
          className="block py-2 px-3 text-xl rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          href="/all-stories"
        >
          Stories
        </NavbarLink>
        <NavbarLink
          className="block py-2 px-3 text-xl rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
          href="/contact"
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
