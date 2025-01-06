import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, toggleMode } from "./themeSlice";
import { ReactComponent as SunLight } from "../../images/sunLight.svg";
import { ReactComponent as SunDark } from "../../images/sunDark.svg";
import { Wrapper, Button, Slide, Caption } from "./styled";

export const ToggleTheme = () => {
    const darkMode = useSelector(selectDarkMode);
    const dispatch = useDispatch();

    const icon = darkMode ? <SunDark /> : <SunLight />;
    const modeText = darkMode ? "ON" : "OFF";

    return (
        <Wrapper>
            <Caption>DARK MODE {modeText}</Caption>
            <Button onClick={() => dispatch(toggleMode())}>
                <Slide $round $move={darkMode}></Slide>
                <Slide $sun $move={darkMode}>
                    {icon}
                </Slide>
            </Button>
        </Wrapper>
    );
};
