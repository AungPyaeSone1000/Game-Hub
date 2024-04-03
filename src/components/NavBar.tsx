import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleColorMode from "./ToggleColorMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ToggleColorMode></ToggleColorMode>
    </HStack>
  );
};
export default NavBar;
