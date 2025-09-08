import lume from "lume/mod.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume();

site.use(
  googleFonts({
    fonts: {
      arimo:
        "https://fonts.google.com/share?selection.family=Arimo:ital,wght@0,400..700;1,400..700",
      hanken:
        "https://fonts.google.com/share?selection.family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900",
    },
  }),
);
site.use(lightningCSS());
site.add("/styles.css");
site.add("/index-styles.css");
site.add("index.html");

export default site;
