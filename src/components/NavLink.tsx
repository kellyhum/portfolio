import { Link } from "@chakra-ui/react";
import { NavLinkType } from "../types";

const NavLink = ({ text, hrefLink }: NavLinkType) => {
    return (
        <Link
            variant="plain"
            _hover={{
                color: "#FBA600",
            }}
            href={hrefLink}
        >
            {text}
        </Link>
    );
};

export default NavLink;
