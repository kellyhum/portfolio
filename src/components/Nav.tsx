import { Box, Link, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Nav = () => {
    return (
        <Box>
            <Flex
                fontFamily="accent"
                gap="2"
                justify="flex-end"
                textTransform="uppercase"
                pt="4"
            >
                <NavLink text="About" />
                <NavLink text="Projects" />
                <NavLink text="Experience" />
            </Flex>
        </Box>
    );
};

export default Nav;
