// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "./src/styles/global.css"
require("prismjs/themes/prism-tomorrow.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
require('prismjs/plugins/line-numbers/prism-line-numbers.min')

export const onClientEntry = () => {  
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}