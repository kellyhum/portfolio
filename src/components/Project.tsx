import { Card, Image, Text, Link } from "@chakra-ui/react";
import { ProjectInterface } from "../types";

export default function Project({ title, desc, link, img }: ProjectInterface) {
    return (
        <Card.Root
            maxW="sm"
            overflow="hidden"
            _hover={{ boxShadow: "0 0 8px 0 rgba(255, 255, 255, 0.25)" }}
        >
            <Image src={img} maxH={375} />
            <Card.Body gap="2">
                <Text
                    fontFamily="mono"
                    textTransform="uppercase"
                    fontSize="smallestSize"
                >
                    Project
                </Text>
                <Card.Title fontSize="subHeadingSize">
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{
                            color: "#FBA600",
                        }}
                    >
                        {title}
                    </Link>
                </Card.Title>
                <Card.Description fontSize="bodySize">{desc}</Card.Description>
            </Card.Body>
        </Card.Root>
    );
}
