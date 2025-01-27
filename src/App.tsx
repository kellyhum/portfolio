import Nav from "./components/Nav";
import Project from "./components/Project";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import nwplus from "./assets/nwPlusLogo.png";
import utg from "./assets/utg.jpeg";
import testProjImg1 from "./assets/card.jpg";
import testProjImg2 from "./assets/card2.jpg";
import testProjImg3 from "./assets/card3.jpg";

import { ExperienceInterface, ProjectInterface } from "./types";

import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
    Flex,
    Box,
    Separator,
    Link,
    Text,
} from "@chakra-ui/react";
import { Avatar } from "../src/components/ui/avatar";
import StyledHeading from "./components/StyledHeading";

const projects: ProjectInterface[] = [
    // array of cards
    {
        title: "Pokedash",
        desc: "A Pokémon dashboard to track cards, values, and recommendations",
        link: "https://github.com/kellyhum/pokedashboard",
        img: testProjImg3,
    },
    {
        title: "Syntaxer",
        desc: "A grammar checker for paragraphs written in Chinese",
        link: "https://github.com/kellyhum/syntaxer",
        img: testProjImg2,
    },
    {
        title: "QuizLingo",
        desc: "A platform to generate Duolingo-style quizzes for language learning",
        link: "https://github.com/kellyhum/quizlingo",
        img: testProjImg1,
    },
];

const experiences: ExperienceInterface[] = [
    {
        value: "a",
        title: "Engagement Coordinator",
        text: "Planning the retreats and internal socials that nwPlus is known for! Also supporting some of Western Canada's largest hackathons",
        org: "nwPlus UBC",
        link: "http://nwplus.io/",
        img: nwplus,
        date: "May 2024 - Present",
    },
    {
        value: "b",
        title: "Coding Instructor",
        text: "Teaching students how to code via games and projects ",
        org: "Under the GUI Academy",
        link: "http://nwplus.io/",
        img: utg,
        date: "January 2023 - Present",
    },
];

export default function App() {
    return (
        <Box
            px="20"
            py="5"
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
                    2nd year Computer Science student curious about software
                    engineering and AI safety
                </Text>
                <Text mt={2}>
                    When I'm not doing any of the above, I'll be reading,
                    playing Catan, or collecting Pokémon cards
                </Text>

                <Flex gap="2" mt="4">
                    <Link
                        href="https://www.linkedin.com/in/kellyhum/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={25} />
                    </Link>

                    <Link
                        href="http://github.com/kellyhum"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={25} />
                    </Link>
                </Flex>
            </Box>

            <Box my={20} id="projects">
                <StyledHeading title="Projects" />
                <Flex gap="5" mdDown={{ flexWrap: "wrap" }}>
                    {projects.map((project) => (
                        <Project
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                            img={project.img}
                        />
                    ))}
                </Flex>
            </Box>

            <Box my={20} id="experience">
                <StyledHeading title="Experience" />
                <AccordionRoot collapsible>
                    {experiences.map((item) => (
                        <AccordionItem value={item.value} mb={2}>
                            <AccordionItemTrigger cursor="pointer">
                                <Avatar
                                    shape="square"
                                    src={item.img}
                                    p={0}
                                    m={0}
                                />
                                <Flex w="100%" justifyContent="space-between">
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        gap={1}
                                    >
                                        <Text
                                            textAlign="left"
                                            fontSize="subHeadingSize"
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            textAlign="left"
                                            // fontSize="smallestSize"
                                        >
                                            <Link
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                color="fg.muted"
                                                _hover={{
                                                    color: "#FBA600",
                                                }}
                                            >
                                                {item.org}
                                            </Link>
                                        </Text>
                                    </Box>

                                    <Box>{item.date}</Box>
                                </Flex>
                            </AccordionItemTrigger>

                            <AccordionItemContent
                                fontSize="bodySize"
                                marginLeft={51}
                                marginBottom={30}
                            >
                                {item.text}
                            </AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </Box>

            <Box pb={8}>
                <Flex align="center">
                    <Box flexBasis="15%">Kelly Hum, 2025 </Box>
                    <Separator flexBasis="auto"></Separator>
                </Flex>
            </Box>
        </Box>
    );
}
