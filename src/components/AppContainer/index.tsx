import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import ToggleSwitch from "../ToggleSwitch";
import { MainContainer, ContentContainer, MenuContainer, Menu, FlexContainer, LanguageLabel } from "./styled";
import { AppSettingsContext } from "../../appSettings/AppSettingsContext";
import { THEME_DARK } from "../../appSettings/types";

interface IProps {
    children: React.ReactNode;
}

export default function AppContainer({ children }: IProps) {
    const { appSettingsState, appSettingsActions } = useContext(AppSettingsContext);
    const checkLanguage = (lang: string) => {
        return lang === appSettingsState.language ? "lang-active" : "";
    };

    const onClickLang = (lang: string) => {
        appSettingsActions.setLanguage(lang);
    };

    return (
        <MainContainer>
            <MenuContainer>
                <Menu>
                    <FlexContainer>
                        <span test-id="test-title" id="title">
                            PatagonianTest
                        </span>
                    </FlexContainer>
                    <FlexContainer>
                        <FlexContainer>
                            <span>
                                <FormattedMessage {...messages.darkMode} />
                            </span>
                            <ToggleSwitch checked={appSettingsState.theme === THEME_DARK} onChange={() => appSettingsActions.changeTheme()} />
                        </FlexContainer>
                        <div>
                            <LanguageLabel onClick={() => onClickLang("en")}>
                                <span className={checkLanguage("en")}>
                                    <FormattedMessage {...messages.english} />
                                </span>
                            </LanguageLabel>
                            <span> | </span>
                            <LanguageLabel onClick={() => onClickLang("es")}>
                                <span className={checkLanguage("es")}>
                                    <FormattedMessage {...messages.spanish} />
                                </span>
                            </LanguageLabel>
                        </div>
                    </FlexContainer>
                </Menu>
            </MenuContainer>
            <ContentContainer>{children}</ContentContainer>
        </MainContainer>
    );
}
