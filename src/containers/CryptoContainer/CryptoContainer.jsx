import Crypto from "../../components/Crypto/Crypto.jsx";
import {getCryptos} from "../../api/api.js";
import {Alert, AlertDescription, AlertIcon, AlertTitle, Button, Center, Spinner} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

const CryptoContainer = () => {
    const [page, setPage] = useState(1);

    const {status, data: cryptos, error} = useQuery({
        queryKey: ['cryptos', page],
        queryFn: () => getCryptos(page),
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
            <Crypto cryptos={cryptos}/>
            <Center my={5} gap={2}>
                <Button onClick={() => setPage(prev => prev - 1)} size='sm'>Prev</Button>
                <Button onClick={() => setPage(prev => prev + 1)} size='sm'>Next</Button>
            </Center>
        </>
    )
}

export default CryptoContainer;