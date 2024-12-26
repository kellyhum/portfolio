import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                main: { value: "'Inter', serif" },
                accent: { value: "'Space Mono', serif" },
            },
            colors: {
                accent: { value: "#FBA600" },
            },
        },
    },
});

export default system;
