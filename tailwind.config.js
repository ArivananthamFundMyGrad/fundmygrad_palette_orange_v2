/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EC8B5E",
        "tab-color": "#F9FCFF",
        "light-color": "#EBF3FF",
        "border-color": "#595959",
        "button-text": "#2F2F2F",
        "grey-bg": "#F0F0F0",
        "tab-border-color": "#8FAEFF",
        "footer-color": "#5B749C",
        "about-text-color":"#363840",
        "subtext":"#333333",
        "onboarding-text":"#1F2633",
        'tab-background':"#F6F6FF",
        "secondary-color":"#178F51"
      },
      borderRadius: {
        lg: "10px",
      },
      padding:{
        pad74:"74px"
      },
      fontFamily: {
        gola: ["Golos Text", "sans-serif"],
      },
      fontSize: {
        size28: "28px",
        size56: "56px",
        size32:"32px"
      },
      screens: {
        mobile: { min: "320px", max: "767px" },
        tablet: { min: "768px", max: "1023px" },
        desktop: { min: "1024px"},
        tabanddesk: { min: "768px"},
      },
      lineHeight: {
        lineheight67: "67px",
      },
      width: {
        width95: "90%",
        custom996 : "996px",
        custom600:"600px"
      },
      maxWidth:{
        custom600:"600px",
        custom120:"120px",
        custom460:"500px",
        custom1300:"1300px",
        custom1500:"1500px"
      },
      minWidth:{
        custom600:"600px",
        custom350:"350px"
      },
      blur: {
        blur150: '150px',
      },
      height:{
        h90:"90%"
      }
    },
  },
  plugins: [],
};
