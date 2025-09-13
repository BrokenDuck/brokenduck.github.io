---
title: My second page
---

![[Swiss in CSS](https://swissincss.com/) recreates some of the most famous Swiss Style posters.](/images/swissincss.png)

If you got here, you were probably interested in the design behind the website...

As you probably noticed it composed of two different parts: the hompage and the
rest.

The whole thing was built using [lume](https://lume.land/), which makes the
process of building a static generated website quite painless. It built with
[Deno](https://deno.com/)[^1], supports a lot of different template engines and
has plenty of plugins to help you with different parts of building a website.

## Homepage

The idea for the homepage started with me going down the rabbit hole about the
[International Typographic Style](en.wikipedia.org/wiki/International_Typographic_Style)[^2]
(sometimes also called
[Swiss International Style](https://www.aboutswitzerland.eda.admin.ch/en/swiss-style-forever-the-story-of-a-graphic-design-tradition)).

Taking its roots in the late Bauhaus ideals and applying them to graphical
design, Swiss style starting aims for a constructive and minimalist approach to
graphical design, culminating in the design of the
[Helvetica font](https://en.wikipedia.org/wiki/Helvetica) (used in official US
tax documents and the New-York subway) and the book
[Grid Systems in Graphic Design](https://www.niggli.ch/produkt/grid-systems-in-graphic-design/).

Some common elements of International Typographic Style are visible in the hompage of
this website:

- *The Font*: I decided to use the excelent [Suisse Int'l](https://www.swisstypefaces.com/fonts/suisse/#suisse-intl) by Suisse Typefaces. A modern sans-serif font designed in Switzerland seemed perfect for my project. Its so good that it was selected as the main typeface for the [Swiss passport](https://www.swisstypefaces.com/read/swiss-passport/).
- *The Layout*: Of course, it had to be a grid layout. Luckily, `display: grid` also happens to be on of the most powerful CSS features, and everything flows naturally from it. I wanted to rely on the grid as much as possible, which is why the headings have the exact same appearance as the text and why the lists are not styled.

![The swiss passport has a sans serif font and a grid layout](/images/swisspassport.webp)

## The Rest

One day, I stumbled upon [LOW←TECH MAGAZINE](https://solar.lowtechmagazine.com/)[^3] and I could identify myself with their low-carbon approach to web design. I decided used their [CSS Stylesheet](https://github.com/lowtechmag/solar_v2/blob/dec6a7018acb69d98d37ecd9bff9337aeb3fafb5/assets/css/style.css) for the rest of the website as a tribute.d

![The inspiring LOW←TECH MAGAZINE (Running out of power :open_mouth:)](/images/lowtechmagazine.png)

Following the [W3C sustainability guidelines](https://w3c.github.io/sustainableweb-wsg/), here are some notable things about making this website sustainable:

- *Static website*: the website is composed of pure HTML and CSS files, build and served on the server. All the file are minimized as much as possible.
- *Default typeface*: a default typeface is used, available in every browser. Removes the need to load an external font.

Although nothing is perfect, this is my humble attempt at reducing my carbon emission whilst still having a presence on the internet.

[^1]: Deno removes all the hassle of typescript build systems, is super fast and
    has built-in tooling. For a non-js dev, its a savior to avoid having to
    learn unnecessarily compilated node.js stuff.

[^2]: A US citizen will recognize the Helvetica font from their tax documents or from
    the New York/Washington subway.

[^3]: If the link doesn't work, then there is probably bad weather in Spain. The website is powered by solar energy.
