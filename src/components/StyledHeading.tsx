import { Heading } from "@chakra-ui/react";
import { StyledHeadingType } from "../types";

const StyledHeading = ({ title }: StyledHeadingType) => {
    return (
        <Heading mb={2} fontSize="headingSize">
            {title}
        </Heading>
    );
};

export default StyledHeading;
