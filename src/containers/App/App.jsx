import {Container} from "@chakra-ui/react";
import Header from "../../components/Header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import CryptoContainer from "../CryptoContainer/CryptoContainer.jsx";
import Home from "../../components/Home/Home.jsx";
import About from "../../components/About/About.jsx";
import CryptoItemInfoContainer from "../CryptoItemInfoContainer/CryptoItemInfoContainer.jsx";

const App = () => {

    return (
        <Container maxW='container.lg'>
            <Header/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cryptocurrencies' element={<CryptoContainer/>}/>
                <Route path='/cryptocurrencies/:id' element={<CryptoItemInfoContainer/>} />
            </Routes>
        </Container>
    )
}

export default App
