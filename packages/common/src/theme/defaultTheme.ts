const palette_internal = {
  primary: {
    main: "#012169",
    dark: "#001a54",
    darker: "#024ab6",
    light: "#013AB9",
    lighter: "#87b6fd",
    contrast: "#ffffff",
  },

  secondary: {
    lighter: "#FFC15E",
    light: "#FFC15E",
    main: "#FEAD54",
    dark: "#FF8600",
    darker: "FF8600",
    contrast: "#000000",
  },
  secondary_temp: {
    main: "#000000",
    dark: "#333333",
    darker: "#1A1A1A",
    light: "#4D4D4D",
    lighter: "#666666",
    contrast: "#ffffff",
  },
  tertiary: {
    main: "#FFDE00",
    dark: "#D8BC00",
    darker: "#D8BC00",
    light: "#FFE850",
    lighter: "#FFE850",
    contrast: "#ffffff",
  },
  white: {
    light: "#FFFFFF",
    lighter: "#FFFFFF",
    main: "#FFFFFF",
    dark: "#E6E6E6",
    darker: "#CCCCCC",
    contrast: "black",
  },

  black: {
    light: "#FFFFFF",
    lighter: "#FFFFFF",
    main: "black",
    dark: "#E6E6E6",
    darker: "#CCCCCC",
    contrast: "white",
  },

  gray: {
    lighter: "#E6E6E6",
    light: "#E6E6E6",
    main: "#CCCCCC",
    dark: "#707070",
    darker: "#B3B3B3",
  },

  dark: {
    lighter: "#555E6A",
    light: "#555E6A",
    main: "#32373E",
    dark: "#22272E",
    darker: "#22272E",
    contrast: "#D9D9D9",
  },
  accent: {
    salmon: "#EF7674",
    cyan: "#00BFB2",
    red: "#DE1A1A",
    purple: "#631D76",
    vanilla: "#F4E8C1",
    blue: "#007AB1",
  },
};
const fonts_internal = {
  main: "PT Sans",
  secondary: "Open Sans",
  weight: {
    book: 400,
    medium: 500,
    bold: 700,
  },
  sizes: {
    smallText: "14px",
    regularText: "16px",
    largeText: "25px",
  },
};

const accessibility = {
  boxWidth: "2px",
  boxColor: "black",
};

const layout = {
  mobile: {
    min: 0,
    max: 425,
  },
  tablet: {
    min: 426,
    max: 768,
  },
  desktop: {
    min: 769,
    max: Infinity,
  },
};

function getTheme(palette, fonts) {
  return {
    header: {
      backgroundColor: palette.primary.main,
      backgroundColorHover: palette.primary.main,
      backgroundColorActive: palette.primary.dark,
      color: palette.primary.contrast,
      font: fonts.secondary,
      fontWeight: fonts.weight.medium,
      fontSize: fonts.sizes.smallText,
    },
    list: {
      backgroundColor: palette.white.main,
      backgroundColorHover: palette.gray.lighter,
      backgroundColorFocus: palette.gray.light,
      color: palette.white.contrast,
      font: fonts.main,
      fontWeight: fonts.weight.medium,
      fontSize: fonts.sizes.smallText,
    },
    headerBanner: {
      font: fonts.secondary,
      fontWeight: fonts.weight.bold,
      fontSize: fonts.sizes.largeText,
      backgroundColor: palette.white.main,
      color: palette.white.contrast,
    },
    input: {
      font: fonts.main,
      fontWeight: fonts.weight.medium,
      fontSize: fonts.sizes.smallText,
      backgroundColor: palette.white.main,
      color: palette.white.contrast,
    },
    button: {
      backgroundColor: palette.primary.main,
      backgroundColorHover: palette.primary.dark,
      colorFocusOutline: palette.gray.darker,
      color: palette.primary.contrast,
      disabledBackgroundColor: "",
      disabledColor: "",
    },
    card: {
      backgroundColor: palette.white.main,
      borderColor: palette.gray.main,
    },

    typography: {
      color: palette.white.contrast,
    },
  };
}
const dayTheme = {
  palette: palette_internal,
  fonts: fonts_internal,
  accessibility,
  layout,
  ...getTheme(palette_internal, fonts_internal),
};

console.log("dayTheme", dayTheme);
export default dayTheme;
