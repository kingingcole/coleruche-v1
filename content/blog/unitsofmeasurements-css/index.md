---
title: Units of Measurements in CSS
date: "2019-05-26T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: Units of measurements used when styling HTML elements in CSS
published: false
altText: woman holding measuring tape leaning on table
---

_px and %, em and rem - they are not all the same_

Ever since I learnt and started styling pages with CSS, I have always felt confused regarding which unit to use for styling my paragraphs, headings, paddings and margins. This is common among (frontend) developers, as there are quite a lot of options out there to use - more options than I knew of till I started writing this!
I kept deferring learning the differences between these units, as I thought they did not really matter until [Kayla](https://twitter.com/_KaylaSween) created [a small quiz](https://twitter.com/_KaylaSween/status/1153799464340971525) on Twitter. And I failed it.


It was at this point that I decided to try and understand what they all are, and _document_ it as well.

###So what are they?
The units are categorized into ___Absolute___ and ___Relative___ lengths.
Let's take them one after the other.

###Absolute Lengths
These are length units that are fixed and appear as exactly that size. Absolute units are mostly discouraged to be used on screens, as 12px on a large screen might not look the same on an iPhone. They depend highly on the output medium, and hence should be _ideally_ be used when the output medium is known, or a particular screen size is targeted.
The absolute units are: `px`, `in`, `cm`, `pt`, `pc`, and `mm`. There might be others, but we will treat these ones for brevity sake.

- `px`: This defines a size in screen pixels. It equals one dot on the computer screen. A pixel is equal to 1/96th of an inch. [w3](https://w3.org) describes `px` as _the magic unit of CSS_. 
- `in`: This means inches. 1in equals 96px.
- `cm`: Centimeters. Equals 37.8px.
- `mm`: Milimeters. 1mm is same as 3.778px.
- `pc`, `pt`: Defines measurements in picas and points, respectively. 1pt equals 1/72 of an inch, while 1pc equals 12pt.

### Conclusion
Relative Lengths
These units define sizes and length relative to another length property. They are mostly preferred as they scale better across different mediums. They include `em`, `rem`, `%`, `ex`, `ch`, amongst others.

- `em`: Simply put, an `em` is the same as the current font size. As a default, modern browsers display fonts at 16px (12in), thus, a text styled at 1em is same as 16px For example, look at the style below:
```css
p {
	font-size: 2em
}
```
This sets the font size to 32px, i.e 2 * 16px.<br/>
`em` is scalable and are mobile-device-friendly.
- `rem`: Stands for '___r___oot ___em___'. This is the font size relative to the root element, which is the `html` tag. 

Consider the style below: 
```css
html {
	font-size: 62.5%;
}

body {
	font-size: 100%;
}

p {
	font-size: 1rem
}
```
The size of the `p` tag comes out as 62.5% (of 16px, which is 10px) and not 100% (16px) as it is relative to the `html` font size and not that of the body tag.
The `rem` unit is not widely used, and so you might not need to use it.
- `%`: Defines a size relative to the parent element.
- `ex` and `ch`: `ex` defines measurement relative to the font's x-height, which is the size of the font's lowercase 'x' while `ch` is relative to the font's width of the character '0' (zero).

### Conclusion
