//bootstrap 
import 'bootstrap/dist/css/bootstrap.css';

// custom typefaces
import "typeface-merriweather";
import "typeface-montserrat";


import "./src/styles/global.css";
require("prismjs/themes/prism-tomorrow.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require('prismjs/plugins/line-numbers/prism-line-numbers.min')

export const onClientEntry = async () => {  
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
