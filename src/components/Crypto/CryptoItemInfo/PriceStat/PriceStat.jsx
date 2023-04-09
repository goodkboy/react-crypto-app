import {Box, Card, CardBody, CardHeader, Heading, StackDivider, Text, VStack} from "@chakra-ui/react";

const PriceStat = ({ crypto }) => {
    return (
        <Card>
            <CardHeader>
                <Heading fontSize={20}>{crypto.symbol.toUpperCase()} Price Statistics</Heading>
            </CardHeader>

            <CardBody>
                <VStack divider={<StackDivider borderColor='gray.600' />}>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>{crypto.name} Price</Text>
                        <Text as='b' fontSize='14px'>${crypto.market_data.current_price.usd.toLocaleString('en-US')}</Text>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>24h Low/24h High</Text>
                        <Text as='b' fontSize='14px'>
                            ${crypto.market_data.low_24h.usd.toLocaleString('en-US')} /
                            ${crypto.market_data.high_24h.usd.toLocaleString('en-US')}
                        </Text>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>Trading Volume</Text>
                        <Text as='b' fontSize='14px'>${crypto.market_data.total_volume.usd.toLocaleString('en-US')}</Text>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>Market Cap Rank</Text>
                        <Text as='b' fontSize='14px'>#{crypto.market_cap_rank}</Text>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>Market Cap</Text>
                        <Text as='b' fontSize='14px'>${crypto.market_data.market_cap.usd.toLocaleString('en-US')}</Text>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>All-Time High</Text>
                        <Text as='b' fontSize='14px'>${crypto.market_data.ath.usd.toLocaleString('en-US')}</Text>
                    </Box>
                    <Box w='100%' display='flex' justifyContent='space-between'>
                        <Text fontSize='14px' color='gray.400'>All-Time Low</Text>
                        <Text as='b' fontSize='14px'>${crypto.market_data.atl.usd.toLocaleString('en-US')}</Text>
                    </Box>
                </VStack>
            </CardBody>
        </Card>
    )
}

export default PriceStat;