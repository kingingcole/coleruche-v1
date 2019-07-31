---
title: Units of Measurements in CSS
date: "2019-07-31T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: Units of measurements used when styling HTML elements in CSS
published: true
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

> "There is another reason to avoid absolute units for other uses other than print: You look at different screens from different distances. 1cm on a desktop screen looks small. But the same on a mobile phone directly in front of your eyes looks big. It's better to use relative units, such as ___em___, instead."
>
> -- _w3.org_

The absolute units are: ___px___, ___in___, ___cm___, ___pt___, ___pc___, and ___mm___. There might be others, but we will treat these ones for brevity sake.

- ___px___: This defines a size in screen pixels. It equals one dot on the computer screen. A pixel is equal to 1/96th of an inch. [W3](https://w3.org) describes ___px___ as _the magic unit of CSS_. 
- ___in___: This means inches. 1in equals 96px.
- ___cm___: Centimeters. Equals 37.8px.
- ___mm___: Milimeters. 1mm is same as 3.778px.
- ___pc___, ___pt___: Defines measurements in picas and points, respectively. 1pt equals 1/72 of an inch, while 1pc equals 12pt.

###Relative Lengths
These units define sizes and length relative to another length property. They are mostly preferred as they scale better across different mediums. They include ___em___, ___rem___, ___%___, ___ex___, ___ch___, amongst others.

- ___em___: Simply put, an ___em___ is the same as the current font size. As a default, modern browsers display fonts at 16px (12in), thus, a text styled at 1em is same as 16px For example, look at the style below:
```css
p {
	font-size: 2em
}
```
This sets the font size to 32px, i.e 2 * 16px.<br/>
___em___ is scalable and are mobile-device-friendly.
- ___rem___: Stands for '___r___oot ___em___'. This is the font size relative to the root element, which is the `html` tag.<br/>
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
- ___%___: Defines a size relative to the parent element.
- ___ex___ and ___ch___: ___ex___ defines measurement relative to the font's x-height, which is the size of the font's lowercase 'x' while ___ch___ is relative to the font's width of the character '0' (zero).



### Conclusion

Really, the choice of what unit to use is left for you to choose, but most people use (and recommend) ___em___ and ___px___.

> "I tend to use ___px___ for borders, and ___rems___ for most everything else -- because it makes it easy to keep things consistent and make layout tweaks without a lot of effort."
>
>-- [Brian Vaughn](https://twitter.com/brian_d_vaughn)

JavaScript Joe and JavaScript Joel both seem to be fans of px. 

> "When it comes to font sizes, I traditionally use something like [TypographyJS](https://kyleamatthews.github.io/typography.js/) because it basically sets up a system for me. <br/>
>However, I try to stick to measurements in multiples of 4px (e.g 4px, 8px, 12px, 16px etc) when I use px. This way things feel "uniform".
>
>-- [JavaScriptJoe](https://twitter.com/jsjoeio)

<br/>

> "I typically only use px. That could be my bias as when I started, px was the only thing absolutely available. Now I leave it up to the designers to tell me what the style is."
>
>-- [JavaScriptJoel](https://twitter.com/joelnet)

<br/>

This is what a Twitter user, Florin, has to say:

>"I use px mostly. Not very good with others."
>
>-- [Florin Pop](https://twitter.com/florinpop1705)


Now, whatever method you choose to use, it is recommended to use at least 16px (1em) for body text and em as the go-to unit. This ensures the font size is relative to the default font size, which is the size the reader can comfortably read. It also ensures the size scales well on different screen sizes and density. Although we can choose to ignore this, as modern browsers and devices provide tools to increase font size and display, it would not hurt to design with a11y in mind.

As was rightly pointed out by [Brent Clark](https://twitter.com/Brent_m_Clark), using `em` also comes with it's own issues: it is relative to the size of the parent, which in turn depends on other parent(s). For example, consider the code below:

```html
<!-- HTML -->
<body>
    <p class='outer-p'> 
        Outer paragraph
        <p class='nested-p'> Nested paragraph</p>
    </p>
</body>

<!-- CSS -->
<style>
    body{font-size: 16px}
    .outer-p{font-size: 2em}
    .nested-p{font-size: 1.5em}
</style>
```

From the above code, we need the `outer-p` paragraph to be 2em, and rightly it will be 32px, as it will be x2 of the immediate parent, the body, which was already set to 16px.<br/>
Now, if wanted to set our `nested-p` paragraph to 1.5em and expect it to come out as 24px (i.e 1.5 * 16px), we'll be disappointed as the size comes out as 48px. This behaviour is because `em` is relative to whatever size the parent has. In this case, `nested-p` is a child of `outer-p`, which already has a size of 32px. This explains why it comes out as 48px, I.e 1.5 * 32px.<br/>
This behavior of `em` should be put into consideration when using it.

In order to avoid unwanted outcomes that might be associated with `em`, I believe that was why the `rem` was introduced. With this, just set the default style on the `html` directly and then use `rem` as your CSS unit, this way you're sure they all refer to the `html` tag style size and not on their parent's sizes.

For example, using the same code above, to get the desired sizes for `outer-p` and `nested-p`, which are 32px and 24px respectively, we'll _refactor_ to this:


```html
<!-- HTML -->
<body>
    <p class='outer-p'> 
        Outer paragraph
        <p class='nested-p'> Nested paragraph</p>
    </p>
</body>

<!-- CSS -->
<style>
    html{font-size: 16px}
    .outer-p{font-size: 2rem}
    .nested-p{font-size: 1.5rem}
</style>
```

By doing so, the font sizes are now all relative to the root style, in this case `html`.

As for me, I will _try_ to stick to this little snippet I found:
```css
body {
	font-size: 62.5% /* sets default font size to 10px i.e 62.5% of 16px */
}
p {
	font-size: 1.4em  /* 14px */
}
```

As I earlier mentioned, use whatever makes you comfortable. And do not sweat it if you don't really get the hang of it, I still don't get most of it.

_If 1.4em results to 14px, why not then just use 14px instead?_

<br/>

