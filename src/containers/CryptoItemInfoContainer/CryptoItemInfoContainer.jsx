import LinkBack from "../../components/Crypto/CryptoItemInfo/LinkBack/LinkBack.jsx";
import {Alert, AlertDescription, AlertIcon, AlertTitle, Center, Grid, Spinner, Stack} from "@chakra-ui/react";
import BasicInfo from "../../components/Crypto/CryptoItemInfo/BasicInfo/BasicInfo.jsx";
import Stat from "../../components/Crypto/CryptoItemInfo/Stat/Stat.jsx";
import About from "../../components/Crypto/CryptoItemInfo/About/About.jsx";
import Links from "../../components/Crypto/CryptoItemInfo/Links/Links.jsx";
import PriceStat from "../../components/Crypto/CryptoItemInfo/PriceStat/PriceStat.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getCrypto} from "../../api/api.js";

const CryptoItemInfoContainer = () => {
    const { id } = useParams();

    const { status, data: crypto, error } = useQuery({
        queryKey: ['crypto'],
        queryFn: () => getCrypto(id),
        enabled: true
    })

    if (status === 'loading') {
        return (
            <Center>
                <Spinner mt='200px' size='xl'/>
            </Center>
        )
    }

    if (status === 'error') {
        return (
            <Alert mt='20px' status='error'>
                <AlertIcon/>
                <AlertTitle>Oops, something went wrong: </AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
            </Alert>
        )
    }

    return (
        <>
            <LinkBack id={id} />

            <Grid my={20} templateColumns='2fr 1.2fr' gap={8}>
                <Stack spacing={8}>
                    <BasicInfo marketData={crypto.market_data}
                               rank={crypto.market_cap_rank}
                               image={crypto.image}
                               name={crypto.name}
                               symbol={crypto.symbol}/>
                    <Stat marketData={crypto.market_data} />
                    <About name={crypto.name} description={crypto.description}/>
                </Stack>
                <Stack spacing={8}>
                    <Links links={crypto.links} name={crypto.name} />
                    <PriceStat crypto={crypto} />
                </Stack>
            </Grid>
        </>
    )
}

export default CryptoItemInfoContainer;