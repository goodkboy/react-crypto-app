import {Badge, Box, Heading, Image, Text} from "@chakra-ui/react";
import {TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";
import BasicInfoData from "./BasicInfoData.jsx";
import {sliceNum} from "../../../../helperFunctions/sliceNum.js";
import {defineColor} from "../../../../helperFunctions/defineColor.js";

const BasicInfo = ({marketData, rank, image, name, symbol}) => {
    const marketDataStorage = [
        {
            name: 'Market Cap',
            data: marketData.market_cap.usd
        },
        {
            name: '24 Hour Trading Vol',
            data: marketData.market_cap_change_24h
        },
        {
            name: 'Fully Diluted Valuation',
            data: marketData.fully_diluted_valuation.usd
        },
        {
            name: 'Circulating Supply',
            data: marketData.circulating_supply
        },
        {
            name: 'Total Supply',
            data: marketData.total_supply
        },
        {
            name: 'Max Supply',
            data: marketData.max_supply ? marketData.max_supply : <p>∞</p>
        }
    ]

    const cardStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 3,
        mt: 4,
        w: '100%'
    }

    return (
        <Box>
            <Badge fontSize='xs' colorScheme='green'>Rank #{rank}</Badge>
            <Heading display='flex' alignItems='center' gap={1} fontSize='xl' mt={2}>
                <Image boxSize='28px' src={image.thumb}/>
                {name}
                <Badge fontSize='md' ml={1}>{symbol}</Badge>
            </Heading>

            <Heading display='flex' alignItems='center' fontSize='3xl' mt={2}>
                ${marketData.current_price.usd.toLocaleString('en-US')}
                {
                    String(marketData.price_change_percentage_24h)
                        .includes('-')
                        ? <TriangleDownIcon boxSize={4} ml={2} sx={defineColor(marketData.price_change_percentage_24h)}/>
                        : <TriangleUpIcon boxSize={4} ml={2} sx={defineColor(marketData.price_change_percentage_24h)}/>
                }
                <Text as='samp' fontSize='xl' sx={defineColor(marketData.price_change_percentage_24h)} >
                    {sliceNum(marketData.price_change_percentage_24h)}%
                </Text>
            </Heading>

            <Box sx={cardStyles}>
                {
                    marketDataStorage.map((item, index) => {
                        return <BasicInfoData key={index} name={item.name} data={item.data}/>
                    })
                }
            </Box>
        </Box>
    )
}

export default BasicInfo;