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

While the first option is quite great, I feel it is a bit too of an overkill to use, especially if what you need from Bootstrap is just the juicy CSS. non-jQuery part and functionality like the grid system or typography.  If so, we will go with the second option. This sounds easy, till you discover that Gatsby apps created with the [starters](https://www.gatsbyjs.org/starters/) have no `index.html` file like in normal React apps made with `create-react-app`

