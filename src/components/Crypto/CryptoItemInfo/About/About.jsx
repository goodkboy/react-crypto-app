import {Box, Heading, Text} from "@chakra-ui/react";

const About = ({ name, description }) => {
    return (
        <Box>
            <Heading fontSize={20}>What is {name}?</Heading>
            <Text color='gray.400' mt={2}>
                {description.en}
            </Text>
        </Box>
    )
}

export default About;