import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { I18nProvider } from "./i18n";
import AppSettingsProvider from "./appSettings/AppSettingsContext";
import StyledThemeProvider from "./theme/themeProvider";
import PostContextProvider from "./store/contexts/PostContext";
import CommentContextProvider from "./store/contexts/CommentContext";
import GlobalStyled from "./globalStyled";
import LoadingDualRing from "./components/LoadingDualRing";
import Home from "./pages/Home";
import AppContainer from "./components/AppContainer";

interface IContextProviders {
    children: React.ReactNode;
}

const ContextProviders = ({ children }: IContextProviders) => {
    return (
        <AppSettingsProvider>
            <I18nProvider>
                <StyledThemeProvider>
                    <PostContextProvider>
                        <CommentContextProvider>{children}</CommentContextProvider>
                    </PostContextProvider>
                </StyledThemeProvider>
            </I18nProvider>
        </AppSettingsProvider>
    );
};

function App() {
    return (
        <ContextProviders>
            <Suspense fallback={<LoadingDualRing />}>
                <BrowserRouter>
                    <AppContainer>
                        <Switch>
                            <Route exact path="/" component={Home} />
                        </Switch>
                        <GlobalStyled />
                    </AppContainer>
                </BrowserRouter>
            </Suspense>
        </ContextProviders>
    );
}

export default App;
