---
layout: post
title: "Embed Tweets in NeuroStars Posts"
excerpt: "NeuroStars: embed tweets in posts"
tags: [gsoc, neurostars, biostar, tweet, embed]
---

[BioStar](https://github.com/ialbert/biostar-central/) and [NeuroStars]({{ site.baseurl }}/neurostars/)
provide a cool feature related to post editing: users can easily add links to other *posts*
and *users* and embed snippets of code from *Gist* and videos from *YouTube*.

Today, during my [GSoC2014](https://developers.google.com/open-source/soc/?csw=1), I
implemented the support for tweets from *Twitter*. This feature will be soon deployed to live.

Some screenshot from our preview website:

<figure>
    <a href="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/1.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/1.png">
    </a>
    <figcaption>The FAQ page explains how to embed items.</figcaption>
</figure>

<figure>
    <a href="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/2.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/2.png">
    </a>
    <figcaption>A post with several embedded items and links.</figcaption>
</figure>

<figure class="half">
    <a href="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/3.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/3.png">
    </a>
    <a href="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/4.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-16-embed-tweets/4.png">
    </a>
    <figcaption>The source code of the post in the previous image.</figcaption>
</figure>