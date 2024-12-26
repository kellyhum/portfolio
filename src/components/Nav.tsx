import { Box, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Nav = () => {
    return (
        <Box>
            <Flex
                fontFamily="accentFont"
                gap="2"
                justify="flex-end"
                textTransform="uppercase"
                pt="4"
            >
                <NavLink text="About" hrefLink="#about" />
                <NavLink text="Projects" hrefLink="#projects" />
                <NavLink text="Experience" hrefLink="#experience" />
            </Flex>
        </Box>
    );
};

export default Nav;
