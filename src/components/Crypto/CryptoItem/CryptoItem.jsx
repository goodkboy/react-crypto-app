import {Badge, Image, Td, Text, Tr} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const CryptoItem = ({ crypto }) => {

    let toStr = String(crypto.market_cap_change_percentage_24h);

    const sliceNum = (num, to = 5 ) => String(num).slice(0, to);

    return (
        <Tr _hover={{ background: 'gray.700' }}>
            <Td>{ crypto.market_cap_rank }</Td>
            <Td display='flex' gap={2} alignItems='center'>
                <Image boxSize='20px' src={ crypto.image } alt={ crypto.name } />
                <Link to={'/cryptocurrencies/' + crypto.id} >{ crypto.name }</Link>
                <Badge fontSize='11px' sx={{ textTransform: 'uppercase' }}>
                    { crypto.symbol }
                </Badge>
            </Td>
            <Td isNumeric>
                ${ crypto.current_price.toLocaleString('en-US') }
            </Td>
            <Td isNumeric sx={ toStr.includes('-') ? { color: '#e15241' } : { color: '#92c950' } }>
                { sliceNum(crypto.market_cap_change_percentage_24h) }%
            </Td>
            <Td isNumeric>
                ${ crypto.total_volume.toLocaleString('en-US') }
            </Td>
            <Td isNumeric>
                ${ crypto.market_cap.toLocaleString('en-US') }
            </Td>
        </Tr>
    )
}

export default CryptoItem;