import {Box, Center, Text,} from "@chakra-ui/react";
import {sliceNum} from "../../../../helperFunctions/sliceNum.js";

const Stat = ({marketData}) => {
    const marketDataStorage = [];

    marketData && marketDataStorage.push(
        marketData.price_change_percentage_1h_in_currency.usd,
        marketData.price_change_percentage_24h,
        marketData.price_change_percentage_7d,
        marketData.price_change_percentage_14d,
        marketData.price_change_percentage_30d,
        marketData.price_change_percentage_1y
    )

    const textStyles = {
        py: 2,
        border: '1px',
        borderColor: 'gray.600',
        borderRadius: 2,
        w: '100%',
    }

    const defineColor = (item) => {
        return String(item).includes('-')
            ? {
                ...textStyles,
                color: '#e15241',
              }
            : {
                ...textStyles,
                color: '#92c950',
              }
    }

    return (
        <Box bg='gray.700' border='1px' borderColor='gray.600' borderRadius={4}>
            <Center fontSize='14px' color='gray.400' textAlign='center'>
                <Text sx={textStyles}>1h</Text>
                <Text sx={textStyles}>24h</Text>
                <Text sx={textStyles}>7d</Text>
                <Text sx={textStyles}>14d</Text>
                <Text sx={textStyles}>30d</Text>
                <Text sx={textStyles}>1y</Text>
            </Center>
            <Center fontSize='13px' color='gray.400' textAlign='center'>
                {marketDataStorage.map((item, index) => {
                    return <Text key={index} sx={defineColor(item)}>{ sliceNum(item) }%</Text>
                })}
            </Center>
        </Box>
    )
}

export default Stat;