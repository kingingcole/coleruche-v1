---
title: My Top Plugins for a GatsbyJS Powered Blog
date: "2019-08-10T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: A look into what I think are my best plugins for a blog site created with GatsbyJS and Markdown
published: true
altText: numerous books open on a board
---

For some time, I did not quite get the idea of static page generators, especially Gatsby JS. It was until I decided to give it a try and I discovered how amazing technology it is! Gatsby JS, amongst all other super things, is used to create a stunning and blazing fast blog, which can use varying data sources like Contentful CMS, WordPress or plain old Markdown. For the latter, it's simply easy to set up and use.<br/>
_This awesome blog was built with Gatsby and Markdown._


Now, while this won't be a tutorial to set up Gatsby with Markdown, I'll be showing you some awesome plugins I have come across so far, and I use them in my Gatsby blog site. Some of these plugins help in UI, UX, SEO, others help in integration with useful services, which otherwise would have been pretty difficult (or maybe not) to set up.

>These plugins are not entirely _top_ per se - there are more important plugins that comes with a Gatsby starter, but these are my favorite extras to add.

In no particular order, let's get started:

### gatsby-plugin-mailchimp
What is a blog without subscribers, right? This plugin makes it ridiculously easy to link up your [Mailchimp](https://mailchimp.com/) account with your Gatsby blog to enable you to subscribe email addresses to your Mailchimp list.
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
Gatsby JS sites are blazing fast, that is the idea of static site generators. They load pages on click in less than a second. But if you have built, or visited a site built with Gatsby, you will agree with me this is not always the case.<br/>Sometimes, and for some reason, they delay a bit in loading pages. Most times there is no indicator to show the user that the page is loading, which they might perceive as an error and might end up continuously clicking on links, or might just leave entirely.  This is where `gatsby-plugin-nprogress` comes in.

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
This plugin adds syntax highlighting to code blocks in your markdown files using [PrismJS](https://prismjs.com/). This makes your code snippets, samples, and blocks aesthetically pleasing.

To use, `yarn add gatsby-transformer-remark gatsby-remark-prismjs prismjs`. This installs all the required modules, including the official PrismJS library. For customization options and how to use, visit [their page](gatsby-transformer-remark gatsby-remark-prismjs prismjs).

###gatsby-plugin-disqus
This helps you link your [Disqus](https://disqus.com/) account to your blog. It enables you to activate comments and reactions to your blog pages. Thus, it allows interaction between you and your audience. From here, you can get feedback and see what your readers think and feel about your works and writing.<br/>
For usage and instructions, visit [here](https://www.gatsbyjs.org/packages/gatsby-plugin-disqus/).
 
###gatsby-plugin-robots-txt
This is a gatsby plugin that automatically creates robots.txt for your site. According to [Neil Patel](https://neilpatel.com/blog/robots-txt/), _"The robots.txt file, also known as the robots exclusion protocol or standard, is a text file that tells web robots (most often search engines) which pages on your site to crawl."_ Having a `robots.txt` file is good for SEO as it tells the search engine (e.g Googlebots) instructions on how to crawl your site. To add this to your site, run `yarn add gatsby-plugin-robots-txt` and for the simplest implementation, add the code below to your project's `gatsby-config.js`:
```js
plugins: ['gatsby-plugin-robots-txt']
```
For additional configurations, visit the [plugin page](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/?=gatsby-plugin-robots-txt)

###gatsby-plugin-manifest
Gatsby plugin which adds a `manifest.webmanifest` to make sites progressive web apps. This plugin comes with features that turn your app to a [progressive web app](https://www.google.com/url?sa=t&source=web&rct=j&url=https://developers.google.com/web/progressive-web-apps/&ved=2ahUKEwj_vruhuvTjAhUJShUIHSdHC_cQFjAhegQIBBAC&usg=AOvVaw0dIOwy-hAgSXFNdlBrXXwO) - automatic icon generation, favicon support and caching, all taken care of. It is recommended to use this plugin together with [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/?=gatsby-plugin-offline) for best results. To use, run `yarn add gatsby-plugin-offline gatsby-plugin-manifest`.
Open your config file and paste below:
```js
plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline'
  ],
```
Make sure to replace necessary lines with your own details.

###gatsby-plugin-google-analytics

This is used to add [google analytics](https://www.google.com/url?sa=t&source=web&rct=j&url=https://analytics.google.com/analytics/web/&ved=2ahUKEwjoq6CRj_jjAhVPSxUIHaH9CB0QFjAAegQIBRAB&usg=AOvVaw095EntAfOjiijSk290zWyQ) to your blog. This helps you get useful information about your visitors like demographics, device information, pages and stuff like that. It helps in knowing which pages are most visited, which country represents most of your visitors, which devices s are most used by your visitors and so, helps you to make better content targeted at your particular choice of audience. To use, run `yarn add gatsby-plugin-google-analytics` and then add the code below to your `plugins`:
```js
{
  resolve: `gatsby-plugin-google-analytics`,
    options: {
       trackingId: `YOUR-TRACKING-ID`,
},
```
For more options and configurations, visit the [plugin page](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)


###gatsby-plugin-sitemap
This plugin generates a sitemap for your site. Sitemaps are _highly_ [recommended for SEO purposes](https://www.seeme-media.com/what-is-a-sitemap/). And it will do you a lot of good to add a plugin for it. To get started, install the plugin by running `yarn add gatsby-plugin-sitemap` and then add the following line of code to your Gatsby config:
```javascript
plugins: [`gatsby-plugin-sitemap`]
```
The line above is the minimum configuration needed and the generates sitemap will include all of your site's pages by default. If for some reason, you don't want this behavior and need to exclude some pages, visit [this page](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/?=) for additional configurations.

> NOTE: This plugin only generates output when running in `production` mode! To test your sitemap, run: `gatsby build && gatsby serve`

<br/>

The plugins above are just a very itsy-bitsy of the over 1000 supported plugins in the [Gatsby library](https://www.gatsbyjs.org/plugins/?=), but they're just the few I have worked with and loved. Some of these plugins come bundled in some starters and you may not need to install them yourselves.

I'll be very glad to get feedback on some of these plugins and to know which extra plugins you love. Please tell us in the comment section.

