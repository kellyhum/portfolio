import Nav from "./components/Nav";
import Project from "./components/Project";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import AvatarImg from "./assets/card.jpg";

import { ProjectInterface } from "./types";

import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
    Flex,
    Box,
    Separator,
    Link,
    VStack,
    Text,
} from "@chakra-ui/react";
import { Avatar } from "../src/components/ui/avatar";
import StyledHeading from "./components/StyledHeading";

const projects: ProjectInterface[] = [
    // array of cards
    {
        tag: "project",
        title: "Project Title",
        desc: "project 1",
    },
    {
        tag: "side hobby",
        title: "Project Title",
        desc: "testing no image",
    },
    {
        tag: "side hobby",
        title: "Project Title",
        desc: "testing no image",
    },
    {
        tag: "side hobby",
        title: "Project Title",
        desc: "testing no image",
    },
];

const items = [
    { value: "a", title: "First Item", text: "blah" },
    { value: "b", title: "Second Item", text: "blah blah" },
    { value: "c", title: "Third Item", text: "blah blah blah" },
];

export default function App() {
    return (
        <Box
            px="10"
            h="100%"
            height="100vh"
            width="100vw"
            fontFamily="mainFont"
            fontSize="bodySize"
        >
            <Nav />

            <Box pt={10} id="about">
                <StyledHeading title="Kelly Hum" />
                <Text>
                    2nd year Computer Science student, aspiring keyboard wizard,
                    and software engineer
                </Text>

                <Flex gap="2" mt="4">
                    <Link
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={25} />
                    </Link>

                    <Link
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={25} />
                    </Link>
                </Flex>
            </Box>

            <Box my={20} id="projects">
                <StyledHeading title="Projects" />
                <Flex gap="5">
                    {projects.map((project) => (
                        <Project
                            tag={project.tag}
                            title={project.title}
                            desc={project.desc}
                        />
                    ))}
                </Flex>
            </Box>

            <Box my={20} id="experience">
                <StyledHeading title="Experience" />
                <AccordionRoot collapsible>
                    {items.map((item) => (
                        <AccordionItem value={item.value} mb={2}>
                            <AccordionItemTrigger cursor="pointer">
                                <Avatar shape="square" src={AvatarImg} />
                                <VStack gap={1}>
                                    <Text
                                        textAlign="left"
                                        fontSize="subHeadingSize"
                                    >
                                        {item.title}
                                    </Text>
                                    <Text
                                        fontSize="smallestSize"
                                        color="fg.muted"
                                    >
                                        Year/date here
                                    </Text>
                                </VStack>
                            </AccordionItemTrigger>

                            <AccordionItemContent fontSize="bodySize">
                                {item.text}
                            </AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </Box>

            <Box pb={8}>
                <Flex align="center">
                    <Box flexBasis="15%">Kelly Hum, 2025</Box>
                    <Separator flexBasis="auto"></Separator>
                </Flex>
            </Box>
        </Box>
    );
}
