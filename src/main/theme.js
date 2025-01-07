const breakpoints = {
    breakpoint: {
        tabletMax: "991px",
        mobileMax: "767px",
    }
};

const colorName = {
    mercury: "#E5E5E5",
    white: "#FFFFFF",
    slateGray: "#6E7E91",
    whiteLilac: "#FBFBFE",
    doveGray: "#6E6E6E",
    mineShaft: "#252525",
    scienceBlue: "#0366D6",
    iron: "#D1D5DA4D",
    iron10: "#D1D5DA1A",
    dodgerBlue: "#2188FF",
    dodgerBlue79: "#2189ffc9",
    darkGrey: "#363636B8",
    darkBlue: "#0366D680",
    lightBlue: "#0366D633",
    transparentBlue: "#0367d833",
    tranparentDarkBlue: "#2189ff44",
};

const boxShadow = {
    shadow: "0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305",
    button: {
        lightHover: " -2px -2px 0px 0px #8CC2FF, 2px 2px 0px 0px #8CC2FF, -2px 2px 0px 0px #8CC2FF, 2px -2px 0px 0px #8CC2FF",
        lightActive: " 0px 2px 0px 0px #14462033 inset",
        darkHover: "-2px -2px 0px 0px #6D93BE, 2px 2px 0px 0px #6D93BE, -2px 2px 0px 0px #6D93BE, 2px -2px 0px 0px #6D93BE",
        darkActive: "0px 2px 0px 0px #14462033 inset",
    }
};

export const lightTheme = {
    ...breakpoints,
    background: {
        main: colorName.whiteLilac,
        section: colorName.white,
    },
    themeButton: {
        background: colorName.mercury,
        border: colorName.slateGray,
    },
    text: {
        paragraph: colorName.slateGray,
        header: colorName.mineShaft,
    },
    sun: {
        background: colorName.slateGray,
    },
    button: {
        background: colorName.scienceBlue,
        border: colorName.iron,
        text: colorName.white,
        hoverShadow: boxShadow.button.lightHover,
        activeShadow: boxShadow.button.lightActive,
        activeBorder: colorName.iron,
        hoverBorder: colorName.iron,
    },
    portfolio: {
        border: colorName.iron,
        background: colorName.white,
        hover: colorName.lightBlue,
        header: colorName.scienceBlue,
        description: colorName.slateGray,
        linkTitle: colorName.slateGray,
        underline: colorName.transparentBlue,
        link: colorName.scienceBlue,
    },
    shadow: boxShadow.shadow,
    divider: colorName.iron,
    icon: colorName.scienceBlue,
    linkHover: colorName.scienceBlue,
};

export const darkTheme = {
    ...breakpoints,
    background: {
        main: colorName.mineShaft,
        section: colorName.darkGrey,
    },
    themeButton: {
        background: colorName.doveGray,
        border: colorName.white,
    },
    text: {
        paragraph: colorName.white,
        header: colorName.white,
    },
    sun: {
        background: colorName.white,
    },
    button: {
        background: colorName.dodgerBlue,
        border: colorName.iron10,
        text: colorName.white,
        hoverShadow: boxShadow.button.darkHover,
        activeShadow: boxShadow.button.darkActive,
        activeBorder: colorName.iron,
        hoverBorder: colorName.iron,
    },
    portfolio: {
        border: colorName.iron10,
        background: colorName.darkGrey,
        hover: colorName.darkBlue,
        header: colorName.white,
        description: colorName.white,
        linkTitle: colorName.white,
        underline: colorName.tranparentDarkBlue,
        link: colorName.dodgerBlue79,
        linkHover: colorName.dodgerBlue,
    },
    shadow: boxShadow.shadow,
    divider: colorName.iron10,
    email: colorName.dodgerBlue,
    icon: colorName.dodgerBlue,
};