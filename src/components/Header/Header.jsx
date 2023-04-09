import {Box, Heading, HStack} from "@chakra-ui/react";
import ThemeButton from "../../chakra-ui/ThemeButton/ThemeButton.jsx";
import Nav from "../Nav/Nav.jsx";

const Header = () => {

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' py={5}>
            <Heading fontSize='2xl'>CoinBase</Heading>

            <Box display='flex' gap={10}>
                <Nav />
                <ThemeButton />
            </Box>
        </Box>
    );
}

export default Header;