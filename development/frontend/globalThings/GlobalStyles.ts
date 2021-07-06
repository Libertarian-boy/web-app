import { CSSProperties } from "react";

export const preloader: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgb(123, 238, 199)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

export const preloaderConteiner = {
    display: "flex",
    width: "60%",
    height: "80px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent"
};

export const preloaderConteinerCircles = {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    backgroundColor: "rgb(255, 255, 255)"
};

/* Стили для title */

export const titleStyle = {
    margin: "249px 0 0 0",
    width: 765,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const titleStyleH2 = {
    margin: 0,
    color: '#60606e',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 30,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    textTransform: 'uppercase',
};

export const titleStyleH2Block = {
    margin: "-19px 0 0 2.5px",
    width: 72,
    height: 21,
    backgroundColor: '#7beec7',
};

export const titleStyleP = {
    margin: "29px 0 0 0",
    color: '#60606e',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
};

/* Стили для глобального Headers */

export function headerStyles(backgroundUrl: string): CSSProperties {
    const header: CSSProperties = {
        gridArea: "header",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transform: "translate(-20px, -20px)",
        opacity: 0,
        backgroundAttachment: "scroll",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundColor: "#adadad"
    };
    return header;
}

export const header_forward = {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(233, 232, 232, .5)"
};

export const header_foraward__top = {
    margin: "43px 0 0 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "87.8%"
};

export const h1_title = {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    lineHeight: "18px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
};

export const header_button = {
    height: "15px",
    width: "31px",
    display: "flex",
    position: "relative",
    cursor: "pointer"
};

export const header_button__line = {
    position: "absolute",
    height: "1px",
    backgroundColor: "#60606e",
    left: "0",
    transition: ".25s linear"
};

export const header_button__line1 = {
    width: "31px",
    top: 0
};

export const header_button__line2 = {
    width: "15px",
    top: "7px"
};

export const header_button__line3 = {
    width: "23px",
    top: "14px"
};

export const header_forward__main = {
    margin: "209px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const h2 = {
    margin: 0,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "36px",
    lineHeight: "36px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
};

export const p = {
    margin: "28px 0 0 0",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    lineHeight: "14px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#60606e"
};

export const HeaderHeadList = {
    display: "inline-flex",
    alignItems: "center",
    padding: 0,
    margin: 0,
    listStyleType: "none",
    transform: "scaleX(0)",
    transformOrigin: "right center"
};

export const HeaderHeadListItems = {
    margin: "0 0 0 18px",
};

export const HeaderHeadListItemsA = {
    textDecoration: "none",
    color: '#60606e',
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    textTransform: 'uppercase'
};

/* Стили для глобального PreFooter */

export const mainPrefooterStyles = {
    margin: "149px 0 0 0",
    width: "100%",
    height: "330px",
    backgroundColor: "#7beec7",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
};

export const mainPrefooterTextStyle = {
    margin: "50px 0 0 82px"
};

export const youThink = {
    margin: 0,
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 30,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "48px",
    textAlign: 'left',
    textTransform: 'uppercase',
};

export const shape11 = {
    margin: "29px 0 0 0",
    width: 165,
    height: 49,
    backgroundColor: '#ffffff',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: '#7beec7',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    textAlign: 'center',
    textTransform: 'uppercase',
    border: "none",
    cursor: "pointer",
    transition: ".35s ease-out"
} as const;

export const mainPrefooterFormStyle = {
    margin: "50px 79px 0 0",
    backgroundColor: '#ffffff',
    padding: "20px 26px 18px 20px"
};

export const mainPrefooterFormTextStyle = {
    margin: "0 0 0 6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
};

export const stayInformed = {
    margin: 0,
    width: 350,
    color: '#60606e',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 24,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "36px",
    textAlign: 'left',
    textTransform: 'uppercase',
};

export const loremIpsumStyle = {
    margin: 0,
    width: 475,
    color: '#999999',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "24px",
    textAlign: 'left',
};

export const form = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "29px 0 0 0",
    width: 510,
    height: 50,
    border: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
};

export const formInput: CSSProperties = {
    height: "100%",
    width: "74%",
    padding: "0 0 0 19px",
    color: '#cdcdcd',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 12,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "48px",
    textAlign: 'left',
    textTransform: 'uppercase',
    border: "none"
};

export const formButton: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "26%",
    backgroundColor: '#7beec7',
    border: "none",
    color: '#ffffff',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "48px",
    textAlign: 'center',
    textTransform: 'uppercase',
    outline: "none",
    transition: ".35s ease-out",
    cursor: "pointer"
};

/* Стили для глобального Footer */

export const footerStyle = {
    gridArea: "footer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    transform: "translate(-20px, -20px)",
    opacity: 0
};

export const footerUlStyles = {
    margin: "50px 0 0 84px",
    padding: 0,
    width: 573,
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between"
};

export const homeAbout: CSSProperties = {
    color: '#9a9a9a',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    textTransform: 'uppercase',
    textDecoration: "none",
    transition: ".3s linear"
};

export const footerTextStyle = {
    margin: "50px 82px 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start"
};

export const createdBy = {
    margin: 0,
    color: '#9a9a9a',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    fontWeight: 400,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
    textTransform: 'uppercase',
};

export const footerTextUl = {
    margin: "29px 0 0 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "175px",
    padding: 0,
    listStyleType: "none",
    alignSelf: "flex-end"
};

export const logoStyle: CSSProperties = {
    transition: ".3s ease-in",
    transitionProperty: "color",
    fontFamily: "Ionicons",
    fontSize: "18px",
    fontWeight: 400,
    textTransform: "uppercase",
    color: "#999999",
    display: "flex"
};

/* Стили для загрузчика файлов и изображений */

export const downloader = {
    position: "fixed",
    width: "100%",
    bottom: "-100%",
    right: 0,
    left: 0,
    backgroundColor: "#7beec7",
    zIndex: 900,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    transition: "bottom .4s ease-in"
};

export const downloader_inf = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    listStyleType: "none",
    padding: "35px 0 35px 0",
    margin: 0,
    width: "70%"
};

export const downloader_inf__li: CSSProperties = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    lineHeight: "48px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#ffffff",
    textAlign: "center"
};

export const downloader_buttons: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "30%"
};

export const downloader_button = {
    width: "140px",
    height: "50px",
    backgroundColor: "#7beec7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "14px",
    lineHeight: "48px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#ffffff",
    outline: "none",
    border: "none",
    boxShadow: "0 0 0 3.5px #ffffff",
    cursor: "pointer",
    transition: ".45s ease-out",
    userSelect: "none"
};

/* Мобильные стили */

export const headerMobileTabletComputerNormalScreen: CSSProperties = {
    backgroundPosition: "center"
};

export const HeaderHeadListMobileAndTablet = {
    display: "none"
};

export const MobileVersionNavStyle: CSSProperties = {
    margin: "0",
    opacity: "0",
    transform: "translateY(-10px)",
    padding: 0,
    listStyleType: "none",
    height: "0px",
    width: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    willChange: "transform, opacity, height"
};

export const MobileNavVersionLiStyle = {
    width: "100%",
    margin: "25px 0 0 0",
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 0px 3px #7beec7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: ".2s ease-in",
    transform: "translateX(-15px)",
    opacity: "0"
};

export const MobileNavVersionLiNavLinkStyle: CSSProperties = {
    color: '#60606e',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "48px",
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: "none",
    width: "100%"
};

export const MobileNavVersionLiNavLinkActiveStyle: CSSProperties = {
    color: '#7beec7',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: "48px",
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: "none"
};

export const header_forward__mainMobile = {
    margin: "109px 0 109px 0"
};

export const mainPrefooterStylesMobile = {
    margin: "50px 0 0 0",
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const mainPrefooterTextStyleMobile = {
    margin: "25px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const youThinkMobile = {
    textAlign: "center"
};

export const mainPrefooterFormStyleMobile = {
    margin: "50px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgb(123, 238, 199)"
};

export const mainPrefooterFormTextStyleMobile = {
    margin: 0,
    alignItems: "center",
    justifyContent: "flex-start"
};

export const stayInformedMobile = {
    textAlign: "center",
    width: "70%"
};

export const loremIpsumStyleMobile = {
    width: "80%",
    textAlign: "center"
};

export const formMobile = {
    width: "82%",
    margin: "29px 0 29px 0"
};

export const footerStyleMobile = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const footerUlStylesMobile = {
    width: "100%",
    margin: "35px 0 0 0",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const footerTextStyleMobile = {
    margin: "35px 0 15px 0",
    alignItems: "center",
};

export const createdByMobile = {
    textAlign: "center"
};

export const footerTextUlMobile = {
    alignSelf: "center"
};

export const downloaderMobile = {
    flexDirection: "column"
};

export const downloader_infMobile = {
    flexDirection: "column"
};

export const downloader_inf__liMobileAndLargeAndMedium: CSSProperties = {
    borderBottom: "2px solid #ffffff",
    borderRadius: "1px"
}

export const downloader_buttonsMobile: CSSProperties = {
    width: "100%",
    justifyContent: "space-around"
};

export const downloader_buttonMobile = {
    margin: "0 0 35px 0"
};

/* Стили для компьютеров и ноутбуков со средними экранами */

export const HeaderHeadListItemsANormalScreen = {
    fontSize: "16px"
};

export const header_forward__mainNormalScreen = {
    margin: "159px 0 0 0"
};

export const mainPrefooterStylesMedium = {
    margin: "70px 0 0 0",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "auto"
};

export const mainPrefooterTextStyleMedium = {
    margin: "50px 0 0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const youThinkMedium = {
    fontSize: "20px"
};

export const mainPrefooterFormStyleMedium = {
    margin: "50px 0 50px 0"
};

export const formMedium = {
    width: "100%"
};

export const downloader_buttonMedium: CSSProperties = {
    width: "40%"
};

/* Стили для планшетов */

export const header_forward__mainTablet = {
    margin: "110px 0 110px 0"
};

export const mainPrefooterStylesTablet = {
    margin: "70px 0 0 0",
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
};

export const mainPrefooterTextStyleTablet = {
    margin: "50px 0px 0px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const youThinkTablet = {
    textAlign: "center"
};

export const mainPrefooterFormStyleTablet = {
    margin: "50px 0 0 0",
    padding: "0px",
    backgroundColor: "rgb(123, 238, 199)"
};

export const mainPrefooterFormTextStyleTablet = {
    margin: "0px",
    alignItems: "center"
};

export const stayInformedTablet = {
    textAlign: "center"
};

export const loremIpsumStyleTablet = {
    textAlign: "center"
};

export const formTablet = {
    width: "100%",
    margin: "29px 0 29px 0"
};

export const footerStyleTablet = {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
};

export const footerUlStylesTablet = {
    margin: "50px 0px 0px 0px",
    width: "95%"
};

export const footerTextStyleTablet = {
    alignItems: "center",
    margin: "50px 0 35px 0"
};

export const footerTextUlTablet = {
    alignSelf: "center"
};

export const downloader_buttonsTablet: CSSProperties = {
    flexWrap: "wrap",
    rowGap: "15px",
    margin: "15px 0 15px"
};

export const downloader_buttonTablet = {
    width: "140px"
}