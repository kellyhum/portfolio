import Nav from "./components/Nav";
import Project from "./components/Project";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import nwplus from "./assets/nwPlusLogo.png";
import utg from "./assets/utg.jpeg";
import ubc from "./assets/ubc.png";
import algaecal from "./assets/algaecal.jpeg";
import testProjImg1 from "./assets/card.jpg";
import testProjImg2 from "./assets/card2.jpg";
import testProjImg3 from "./assets/card3.jpg";
import testProjImg4 from "./assets/card4.jpg";

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
        title: "PokéCard Tracker",
        desc: "A Pokémon dashboard to track cards, values, and recommendations",
        link: "https://github.com/kellyhum/pokedashboard",
        img: testProjImg3,
    },
    {
        title: "Sentence Streak",
        desc: "A langauge learning word game to support Chinese language learning",
        link: "https://github.com/kellyhum/sentence-streak",
        img: testProjImg2,
    },
    {
        title: "PokéDB",
        desc: "A Pokédex battling app, with a store and Gyms (no link available)",
        link: "",
        img: testProjImg1,
    },
    {
        title: "Quote Blaster",
        desc: "A word blasting game - in Java",
        link: "https://github.com/kellyhum/quote-blaster",
        img: testProjImg4,
    },
];

const experiences: ExperienceInterface[] = [
    {
        value: "ab",
        title: "Frontend Software Developer Intern",
        text: "Developing React components, revamping websites, and learning about vitamins",
        org: "AlgaeCal",
        link: "https://www.algaecal.com/",
        img: algaecal,
        date: "May 2025 - Present",
    },
    {
        value: "a",
        title: "Engagement Co-Director",
        text: "Planning the retreats and internal socials that nwPlus is known for! Also supporting some of Western Canada's largest hackathons. Engagement Coordinator from May 2024 - May 2025",
        org: "nwPlus UBC",
        link: "http://nwplus.io/",
        img: nwplus,
        date: "May 2024 - Present",
    },
    {
        value: "b",
        title: "Coding Instructor",
        text: "Teaching students how to code via games and projects",
        org: "Under the GUI Academy",
        link: "https://utgacademy.com/",
        img: utg,
        date: "January 2023 - Present",
    },
    {
        value: "bc",
        title: "Undergraduate Research Assistant",
        text: "Data analysis and website updates for an ophthalmology lab",
        org: "UBC",
        link: "https://vision.ubc.ca/",
        img: ubc,
        date: "August 2024 - Present",
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
                    3rd year Computer Science student curious about
                    cybersecurity and software engineering
                </Text>
                <Text mt={2}>
                    When I'm not doing any of the above, I'll be reading,
                    playing board games, or learning the guitar
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
                                        <Text textAlign="left">
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
