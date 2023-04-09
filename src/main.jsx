import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App/App.jsx'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./chakra-ui/theme.js";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
