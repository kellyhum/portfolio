import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                mainFont: { value: "'Inter', serif" },
                accentFont: { value: "'Space Mono', serif" },
            },
            fontSizes: {
                headingSize: { value: "2em" },
                subHeadingSize: { value: "1.2em" },
                bodySize: { value: "1em" },
                smallestSize: { value: "0.8em" },
            },
        },
    },
});

export default system;
