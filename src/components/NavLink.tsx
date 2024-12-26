import { Link } from "@chakra-ui/react";
import { NavLinkType } from "../types";

const NavLink = ({ text }: NavLinkType) => {
    return (
        <Link
            variant="plain"
            _hover={{
                color: "accent",
            }}
        >
            {text}
        </Link>
    );
};

export default NavLink;
