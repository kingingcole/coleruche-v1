---
title: Adding Bootstrap CDN link to Gatsby
date: "2019-05-26T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: We wil take a look into how to set up a Gatsby JS site to use Twitter Bootstrap's CDN
published: true
altText: brown leather boots
---

This post is intended to help out developers who love using Gatsby JS and Twitter Bootstrap and would absolutely love to use them together in one project - _lovely!_
One issue you might come across would be how to link them both up. For this you have two options: you can use supported packages like [React Bootstrap](https://react-bootstrap.netlify.com/) or [reactstrap](https://reactstrap.github.io/); or you can include in CDN links to your app.

While the first option is quite great, I feel it is a bit too of an overkill to use, especially if what you need from Bootstrap is just the juicy CSS. non-jQuery part and functionality like the grid system or typography.  If so, we will go with the second option. This sounds easy, till you discover that Gatsby apps created with the [starters](https://www.gatsbyjs.org/starters/) have no `index.html` file like in normal React apps made with `create-react-app`, or any other front end project.

Now where do we include our CDN links? There is no `html` file, hence no `head` tag. This is where the purpose of this article comes into play.

Again, we have two options - _hey! Life's full of options._<br/>Gatsby projects come with a `seo.js` file which can be found in `src/components`. This component uses [React Helmet](https://github.com/nfl/react-helmet) to function. This makes it easy for us to just make changes to the `html` file that will be produced when gatsby bundles our app. We can include the CDN link by so doing:
```es6
<Helmet>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
</Helmet>
```
This is relatively easy to do and should work well. I used this before, till I

A look into the project structure created for us when we bootstrap an app with a Gatsby starter should show a file in root folder called `gatsby-browser.js`.
According to the Gatsby website, "This file is where Gatsby expects to find any usage of the Gatsby browser APIs (if any). These allow customization/extension of default Gatsby settings affecting the browser."
What this means (to me), is that we can call APIs and import _stuff_ that affects the browser, like our styles and custom JavaScript scripts. This sounds like a good enough point to introduce our CDN,
