import {NavLink} from "react-router-dom";
import {HStack, Link} from "@chakra-ui/react";

const Nav = () => {
    return (
        <HStack>
            <Link as={NavLink} to='/home'>Home</Link>
            <Link as={NavLink} to='/about'>About</Link>
            <Link as={NavLink} to='/cryptocurrencies'>Cryptocurrencies</Link>
        </HStack>
    )
}

export default Nav;