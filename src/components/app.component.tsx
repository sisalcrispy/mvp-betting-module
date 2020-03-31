import React from 'react';
import Sisal from "sisal-mvp-betting-library";
import context from "../context/context/context";
import Bet from "./Bet/bet.component";
import {BrowserRouter} from "react-router-dom";
import '../../node_modules/sisal-mvp-betting-library/dist/styles/main.scss';

const {ContextProvider} = Sisal.Store();
const {LanguagePack} = Sisal.Translations();

const App = (props: any) => {
    console.log(props);
    return (
        <LanguagePack languagePack={'module'}>
            <ContextProvider context={context}>
                <BrowserRouter>
                    <Bet />
                </BrowserRouter>
            </ContextProvider>
        </LanguagePack>
    );
};

export default App;
