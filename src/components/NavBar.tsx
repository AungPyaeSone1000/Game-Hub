import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ToggleColorMode></ToggleColorMode>
    </HStack>
  );
};
export default NavBar;
