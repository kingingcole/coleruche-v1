---
title: Crossposting To Medium and DEV
date: "2019-12-15T22:40:32.169Z"
featuredImage: "./featured-image.jpg"
type: post
description: An easy method to seamlessly cross-post your articles from your blog to Medium and Dev.to
published: true
altText: open locker in the wall filled with books
---

It is not a new thing to see programmers sharing their ideas and what they have learnt in the form of blog posts and articles. In fact, it has become a norm and a kind of best practice to own a technical blog where you publish stuff on or to publish on other hosted platforms like Medium and DEV.

[Medium](https://medium.com) is a blogging platform, a form of _social journalism_ where people of all writing experiences can write and publish articles on. While some developers [have advised switching to DEV](https://dev.to/devteam/medium-was-never-meant-to-be-a-part-of-the-developer-ecosystem-25a0), it would still be a nice thing to post on Medium.

On the other hand, [DEV](https://dev.to) is a platform specifically built for developers to share ideas and grow. 

With these two _powerful_ platforms, it's highly advised and recommended that articles should be cross-posted to at least these two platforms. With that comes the issue of syncing articles across the two platforms and your own personal blog. The "obvious" solution to this is copy-pasting from one source to the other. This has so many disadvantages - strenuous, time-wasting, error-prone, e.t.c.

The ideal thing to do here is to find a way to sync and automatically update contents on the other platforms (secondary mediums) when content is added/changed in one medium (primary medium).

For this article, our custom blog (in this case, Gatsby) will be our primary medium, while Medium and DEV will be our secondary mediums.

>If at this point, "mediums" sounds like incorrect English, don't worry, I (and few other people) thought so. But it is [good English](https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.thoughtco.com/media-medium-and-mediums-1689581&ved=2ahUKEwjx_bPRlJTkAhWnUhUIHeTwAaEQFjACegQIDxAJ&usg=AOvVaw0m4UmqIG2eE8etmCNImn36).

The idea now is to post on our Gatsby site and get it to automatically update contents, saved as drafts, on our Medium and DEV accounts. Thereby, we'll need to only make a few changes to the drafts to get it to display well as we wish. For this, we'll be using [rss](https://www.google.com/url?sa=t&source=web&rct=j&url=https://en.m.wikipedia.org/wiki/RSS&ved=2ahUKEwi73uvflZTkAhWZSBUIHTyGBS0QmhMwDHoECAsQBA&usg=AOvVaw0WbOFtq1fycUIvflxz5eeN) feed to pull content from our Gatsby site. To get started, install [gatsby-plugin-feed](https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.gatsbyjs.org/packages/gatsby-plugin-feed/&ved=2ahUKEwiIyKX4lZTkAhUuVBUIHbx0BjoQFjAAegQIBhAC&usg=AOvVaw0gsBypv8Vfk4rU5gp8F8OI). This plugin helps with automatic rss generation for our site. Follow the link to see how to set it up with minimal configurations.
>This feed comes in-built in some starters, so you may not need to install it. But still, check it out.

When you're done setting it up, start up your development server (you might need to delete the `public/` and `.cache/` folders before starting the server) and go to `<your-localhost-url>/rss.xml` to confirm everything works well. Push the code to production and navigate to `<your-production-url>/rss.xml`. Please copy the full path to this RSS page as we'll be needing it shortly.

Now, things are set up well in our primary medium/source, over to the secondary mediums. We'll start with DEV, as it is quite easy to set up.

Navigate to [DEV.to](https://dev.to) and sign up/login to your account. Navigate to your account settings by clicking on your profile picture at the top right corner and clicking on `Settings` from the pop-up menu. Or alternatively, you can directly navigate to [dev.to/settings](https://dev.to/settings). In your settings page, click on the `Publishing from RSS` link or [go there directly](https://dev.to/settings/publishing-from-rss).
After a few scrolls, you should see an input field with the label "RSS feed URL". Here paste the RSS URL that you initially copied and make sure that the next two select boxes are checked. Then click on the Save button. After this, DEV should automatically fetch your feeds from the RSS link you submitted. The feeds should appear as drafts in your [dashboard](https://dev.to/dashboard).
You can then choose to edit them or publish directly if they're all good to you.

Now, over to integration with Medium.
Start by going off to [Zapier](https://zapier.com) and sign up/login. If you just created a new account, for the sake of this tutorial, skip the onboarding process and all and get to your dashboard. Once in your [dashboard](https://zapier.com/app/dashboard), you should see a ***What apps do you want to connect today?*** section there with 'connect this app' and 'with this app' input fields, similar to the image below:
![zapier dashboard](pic1.jpg)
> You can skip the following procedure up to the Editing The Zap section by clicking [here](https://zapier.com/app/editor?referrer=member-home-make-a-zap-redesign&create=true&template__0__selected_api=RSSAPI&template__0__type_of=read&template__0__action=new_feed&template__1__selected_api=MediumCLIAPI@1.0.0&template__1__type_of=write&template__1__action=post&template__0__title=Create%20story%20in%20Medium%20when%20new%20item%20in%20feed%20in%20RSS%20by%20Zapier)

In the 'connect this app' field, type in 'RSS' and select ***RSS by Zapier*** from the search results.
In the 'with this app' field, type in and select ***Medium***.

When both fields have been selected, two new `select` input types _pop up_ from the blues - 'Select a Trigger' and 'Select an Action'. For the first one, choose ***New Item in Feed*** from the dropdown and for the second, select ***Create Story***. In all, you should get something similar to the image below:
![selected apps and actions](pic2.jpg)
If so, click on the ***Use Zap*** button.

***Editing the Zap***
