---
title: Building an E-commerce store with Gatsby and Shopify
date: "2019-11-14T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: This tutorial covers an in-depth guide on how to set up a static PWA ecommerce site with Gatsby and Shopify with automatic rebuild when products are updated, added or deleted.
published: true
altText: open shop sign
---

Have you ever visited a site to shop for your favourite item and got so frustrated over the many redirects and loadings - and the unnecessary waste of time that comes with it. Or have you been faced with a challenge of building out a online store but could not just find a way to get started - and done - with it? This tutorial is just for you.

With the relative ease that comes with using Gatsby, and the amazing _love_ that comes from its community ever since I started using it, I decided to find out what other [amazing things that come. with it](https://www.storyblok.com/tp/3-reasons-why-you-should-consider-gatsby-js-for-your-next-project). It then hit me, _"could Gatsby be used to build out an online store as a static site?"._  At first, it seemed most unlikely, as I thought of the highly dynamic functionality that comes with e-commerce stores and could not possibly imagine how Gatsby could generate static pages for them.<br/> But then, hey, we live in a time where there is Gatsby and [Netlify](https://netlify.com). _Anything_ can be done on the web these days.

I then started to do a little digging to see what I could come up with.  I saw a few articles on it, but they were mostly using not-so-popular technology or providers. I needed something quick and fast. Something that did not require me reading a big ass documentation in order to get things started.

I also came across this [article from the Gatsby docs](https://www.gatsbyjs.org/tutorial/ecommerce-tutorial/), but I still felt it was a bit limiting as it was an integration with Stripe, which is not totally supported in all countries, at least not Nigeria. I needed a solution that supported many payment providers and methods and I could only think of one. Shopify.

A few _digs_ later I discovered an awesome Gatsby starter for e-commerce stores powered by Gatsby and Shopify. The joy! The starter already hast taken out the stressful parts of it all. No need to reinvent the wheel here and all it needs is a tweak here and there and some redesign to suit your taste. You can check out the starter [here on Gatsby](https://www.gatsbyjs.org/docs/building-an-ecommerce-site-with-shopify/) or directy get to the [source code](https://github.com/AlexanderProd/gatsby-shopify-starter) on Github. 


Two issues are likely to arise when creating ___static___ online shops. First, dynamic product inventory. Your product availability should change in accordance to your inventory in the Shopify store. You wouldn't want your products to appear as available, because Gatsby has already _statically_ built out the listing page, when in reality you are out of stock. For this issue, the starter I mentioned above has it all sorted out. According to their README, 
>"The Shopify product inventory is being checked in realtime, therefore no rebuilding and redeploy is needed when a product goes out of stock. This avoids problems where products could still be available even though they're out of stock due to redeploy delay."

Secondly, as the pages would be all pre-built by Gatsby, what happens when we change the details of a product, add a new product or delete an existing product? Would we have to log back to Netlify to trigger a build each time? Nope! For this issue, we also have a workaround for it.

Without much ado, let's begin. <br/>

###Shopify setup
First, you would need to log into your [Shopify](https://shopify.com/) account or [create one](https://www.shopify.com/signup) if you do not have already. While logged in, create a new store and give it whatever name you wish. You will need this name, plus a Storefront access token which you will get soon. <br/> With the store created, go on to add a few products to the store. Gatsby's graphql would throw an error during build if there are no products in the store.

Next, we have to get a storefront token. For this, navigate to the __Apps__ section of your store and continue to __Manage private apps__. Create a new private app, with any name under “Private app name” and leave the default permissions as __Read access__ under Admin API. Enable the Shopify Storefront API by checking the box that says “Allow this app to access your storefront data using Storefront API”. Make sure to also grant access to read product and customer tags by checking their corresponding boxes. Then, copy the storefront access token that will be provided to you. This is not a secret and could be put in any publicly available JavaScript file.

###Gatsby setup
To start up the project, in the command line, run:
```
gatsby new gatsby-shopify-starter https://github.com/AlexanderProd/gatsby-shopify-starter
```
This will take some time to start the project and install dependencies. Once done, open up the project folder in your favourite editor and open the `.env.development` and the `.env.production` files and change the default values of `SHOP_NAME` and `SHOPIFY_ACCESS_TOKEN` to your own store name and access token, respectively. That is about all you need to do for the setup. You can test this out by running `gatsby develop`. Please for this, you should be connected to the internet for Gatsby to fetch the product and build the product pages. When all is done, you should have a new ecommerce store running on your localhost. You can go ahead and make relevant changes to the project as suits your designs and use case. All done then deploy to Netlify. 

###Handling automatic build
With the store deployed to Netlify, we then have to set up an automatic build on Netlify each time we make product changes on the Shopify store.<br/>
To do this, we need to set up Netlify's build hooks, which is a URL that continuoulsy listens for `POST` requests and triggers a build automatically when such requests hit the URL. For this, go the the app's Settings > Build & deploy > Build hooks and Add build hook. Put in a hook name and select a branch from git which the build should run with, ideally `master`. Hit Save. Upon save, a new hook URL endpoint will be displayed. Copy that and head over back to the Shopify store. Move to Settings > Notifications > Webhooks > Create webhook. For the event, choose __Product creation__, leave format as JSON and paste the URL from the Netlify build hook and hit Save webhook. Do this again two more times for __Product deletion__ and __Product update__ and any other event you feel may be necessary for a rebuild, while using the same URL from Netlify. 
<br/>
And that is it, as you add/update/delete products, Netlify rebuilds the site in a few minutes to reflect changes.

> For more stuff, like adding payment or delivery options, please do that in the Shopify dashboard. The Gatsby "front-end" just displays the info and preferences from the Shopify dashboard "back-end".

_Extra stuff:_ Seeing you do not need the Shopify online store sales channel (as the Gatsby app serves the purpose), you can safely remove it as a sales channel. This makes you (or your client) avoid the $29 monthly charges on the Basic Shopify plan and instead, subscribe to the $9 monthly Shopify Lite plan.

PS: If you need someone to set up a store for you, you can [hire me](mailto:emeruchecole9@gmail.coom). 
