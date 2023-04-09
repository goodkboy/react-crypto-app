import {Container, Heading, Table, TableContainer, Tbody, Th, Thead, Tr} from "@chakra-ui/react";
import CryptoItem from "./CryptoItem/CryptoItem.jsx";

const Crypto = ({cryptos}) => {
    return (
        <Container maxW='container.lg' mt={12} p={0}>
            <Heading fontSize='xl'>
                Cryptocurrency Prices by Market Cap
            </Heading>

            <TableContainer mt={6}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Coin</Th>
                            <Th isNumeric>Price</Th>
                            <Th isNumeric>24h</Th>
                            <Th isNumeric>24h Volume</Th>
                            <Th isNumeric>Mkt Cap</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        { cryptos.map((crypto, index) => <CryptoItem crypto={crypto} key={index} />) }
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Crypto;