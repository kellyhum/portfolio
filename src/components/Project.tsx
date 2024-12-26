import { Card, Image, Text } from "@chakra-ui/react";
import ProjectImg from "../assets/card.jpg";

import { ProjectInterface } from "../types";

export default function Project({ tag, title, desc }: ProjectInterface) {
    return (
        <Card.Root maxW="sm" overflow="hidden">
            <Image src={ProjectImg} />
            <Card.Body gap="2">
                <Text fontFamily="mono" textTransform="uppercase">
                    {tag}
                </Text>
                <Card.Title>{title}</Card.Title>
                <Card.Description>{desc}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
