---
title: My Top 5 Plugins for a GatsbyJS Powered Blog
date: "2019-08-07T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: A look into what I think are my best plugins for a blog site created with GatsbyJS and Markdown
published: false
altText: numerous books open on a board
---

For sometime, I did not quite get the idea of static page generators, especially Gatsby JS. It was until I decided to give it a try and I discovered how amazing a technology it is! Gatsby JS, amongst all other super things, is used to create a stunning and blazingly fast blog, which can use varying data sources like Contentful CMS, WordPress or plain old Markdown.
For the later, it's simply easy to set up and use.<br/>
_This awesome blog was built with Gatsby and Markdown._

Now, while this won't be a tutorial to set up Gatsby with Markdown, I'll be showing you some awesome plugins I have come across so far, and I use in my Gatsby blog site.
Some of these plugins help in UI, UX, others help in integration with useful but services, which otherwise would have been pretty difficult (or maybe not) to set up.

>Some of these plugins were designed to work with Markdown. But most of them work with Gatsby sites with data sources from anywhere.

In no particular order, let's get started:

### gatsby-plugin-mailchimp
What is a blog without subscribers, right? This plugin makes it ridiculously easy to link up your [Mailchimp](https://mailchimp.com/) account with yor Gatsby blog to enable you subscribe emails to your Mailchimp list.
<br/>To set it up is as easy as running `yarn add gatsby-plugin-mailchimp` to install the package and adding to below snippet to your `gatsby-config.js`  file:
```js
{
  resolve: "gatsby-plugin-mailchimp",
  options: {
    endpoint: // add your MC list endpoint here; see instructions below
  },
},
```
For more information, visit the page [here](https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/).

###gatsby-plugin-nprogress
Gatsby JS sites are blazing fast, that is the idea of static site generators. They load pages on click in less than a second. But if you have built, or visited a site built with Gatsby, you will agree with me this is not always the case.<br/>Sometimes, and for some reasons, they delay a bit in loading pages. Most times there is no indicator to show the user that the page is loading, which they might perceive as an error and might end up continously clicking on links, or might just leave entirely.  This is where `gatsby-plugin-nprogress` comes in.

According to the gatsby plugin library, it _"automatically shows the nprogress indicator when a page is delayed in loading (which Gatsby considers as one second after clicking on a link)."_

To set up, `yarn add gatsby-plugin-nprogress` and add the line below to `gatsby-config.js` file:
```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: false,
    },
  },
]
```
<br/>

###gatsby-remark-prismjs
This plugin adds syntax highlighting to code blocks in your markdown files using [PrismJS](https://prismjs.com/). This makes your code snippets, samples, and blocks aestetically pleasing.

To use, `yarn add gatsby-transformer-remark gatsby-remark-prismjs prismjs`. This installs all the required modules, including the official PrismJS library. For customization options and how to use, visit [their page](gatsby-transformer-remark gatsby-remark-prismjs prismjs).

###gatsby-plugin-disqus
This helps you link your [Disqus](https://disqus.com/) account to yor blog. It enables you activate comments and reactions to your blog pages. Thus, it allows interaction between you and your audience. From here, you can get feedbacks and see what your readers think and feel about your works and writing.<br/>
For usage and instructions, visit [here](https://www.gatsbyjs.org/packages/gatsby-plugin-disqus/).
 
 
