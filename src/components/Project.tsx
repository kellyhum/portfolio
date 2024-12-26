import { Card, Image, Text } from "@chakra-ui/react";
import ProjectImg from "../assets/card.jpg";

import { ProjectInterface } from "../types";

export default function Project({ tag, title, desc }: ProjectInterface) {
    return (
        <Card.Root
            maxW="sm"
            overflow="hidden"
            _hover={{ boxShadow: "0 0 8px 0 rgba(255, 255, 255, 0.25)" }}
        >
            <Image src={ProjectImg} />
            <Card.Body gap="2">
                <Text
                    fontFamily="mono"
                    textTransform="uppercase"
                    fontSize="smallestSize"
                >
                    {tag}
                </Text>
                <Card.Title fontSize="subHeadingSize">{title}</Card.Title>
                <Card.Description fontSize="bodySize">{desc}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
