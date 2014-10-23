---
categories: [project]
title:  "Moogle"
tags: [moogle, search engine, private data, full text search]
excerpt: "Moogle - My Own Google: the search engine for private data"
permalink: /moogle/index.html
comments: true
cssfile: "/assets/css/pages/projects/moogle.css"
ogimage: "/assets/img/projects/moogle-g.png"
---

<div class="initial-note">
<strong>TL;DR</strong> I am the author of Moogle.
Moogle is
<a href="http://en.wikipedia.org/wiki/Free_and_open-source_software">free and open-source</a>, 
<a href="https://github.com/nimiq/moogle">hosted on GitHub</a> and
a demo site will be available soon!
</div>

*You are searching for the sushi restaurant that a friend of yours recommended last month:
you type "sushi restaurant" in your smart phone and you get a tweet from John talking about
Tokyo Sushi. You also get a comment you wrote on Facebook, an SMS message sent to 
your brother and a bookmark in your browser, all about the same restaurant.
Now imagine that you can do this with your smart phone, laptop, tablet or smart TV.
Something so basic yet so far from the reality.*
This is **Moogle - My Own Google**, the search engine for private data.

<img src="{{ site.baseurl }}/assets/img/projects/moogle-g.png" alt="Moogle icon" class="right">

A few years ago all our *private data* were stored in *laptops* and *personal computers*: we used
to manage emails with client programs like [Mozilla Thunderbird](https://www.mozilla.org/en-US/thunderbird/)
and [Microsoft Outlook](http://en.wikipedia.org/wiki/Microsoft_Outlook), and to store
our documents and photos in *local folders*.

But today much of our private data are stored in the shared web-based infrastructure known
as "[the cloud](http://en.wikipedia.org/wiki/Cloud_storage)":
we use web based email services like [Google Gmail](https://mail.google.com/) and
[Yahoo Mail](https://mail.yahoo.com/); we store and share documents with services like
[Dropbox](https://www.dropbox.com), [Google Drive](https://drive.google.com) and
[Microsoft Skydrive](https://onedrive.live.com); we share photos and interact with our
friends in social networks like [Facebook](https://www.facebook.com), [Twitter](https://twitter.com)
and [Instagram](http://instagram.com); we communicate using messaging applications like
[Google Hangouts](http://www.google.com/hangouts/), [Facebook chat](https://www.facebook.com/sitetour/chat.php),
[Skype](www.skype.com), [SMS](en.wikipedia.org/wiki/Short_Message_Service), [Whatsapp](www.whatsapp.com);
we have bookmarks in our laptops, in our office desktops and in our mobile phones.

Statistics prove the *popularity* of these services: 1.5 million emails are sent per second,
112 emails per day by average corporate user; Dropbox reached 100 millions users in Nov 2012;
Facebook reaches 1 billion active users every month;
in 2009 1 billion Facebook chat messages and 10 billions Whatsapp messages were sent every day.

Having our personal data in the cloud is handy but there is a *drawback*: the *search* is
complicated because the information is *distributed* over several services.
When a user wants to search for an address and he doesn't remember if he read it in a file in
his laptop, in an email or in a Facebook post, he might waste much time in 
searching through different platforms. What he wants instead is a *single place* to query and
get results from the entire set of his *private information* distributed in the *cloud*.
This is **Moogle - My Own Google**.

*Moogle* is a *web application* which provides users with the ability to search against all
their distributed *private data* being them emails, documents, posts in social networks, SMS
and chat messages in mobile phones or bookmarks.
Furthermore Moogle performs [full-text search](http://en.wikipedia.org/wiki/Full_text_search).
This means that the *actual content* of documents is searched and not only those metadata
that describe resources. [Advanced text analysis](http://en.wikipedia.org/wiki/Text_mining) is
also performed while indexing data, with well-known techniques like
[stop-words](http://en.wikipedia.org/wiki/Stop_words) removal,
[lexical analysis](http://en.wikipedia.org/wiki/Lexical_analysis),
[stemming](http://en.wikipedia.org/wiki/Stemming), 
synonyms injections, etc. Notice that these features are not always available in the cloud:
Dropbox, Twitter and messaging applications in mobile phones f.i. just offer basic keyword-based
search.

*Moogle* is the result of a project I have been working on in the last years as my 
Master's degree thesis. The project together with a sketch of its business and marketing plans was
pitched in some venture capitals meetings in Washington DC and Amsterdam and it raised some interest.

The project was named M*oogle - My Own Google* because it is a highly suggestive name.
Yet it is just a *working name* used only in this initial phase.

Screenshots
===========

<figure>
    <a href="{{ site.baseurl }}/assets/img/projects/moogle/moogle-providers.png">
        <img src="{{ site.baseurl }}/assets/img/projects/moogle/moogle-providers.png">
    </a>
    <figcaption>Managing data providers</figcaption>
</figure>

<figure>
    <a href="{{ site.baseurl }}/assets/img/projects/moogle/moogle-search.png">
        <img src="{{ site.baseurl }}/assets/img/projects/moogle/moogle-search.png">
    </a>
    <figcaption>The main search page</figcaption>
</figure>

<figure>
    <a href="{{ site.baseurl }}/assets/img/projects/moogle/moogle-results.png">
        <img src="{{ site.baseurl }}/assets/img/projects/moogle/moogle-results.png">
    </a>
    <figcaption>Search results</figcaption>
</figure>



Resources
=========
*Moogle* is [hosted on GitHub](https://github.com/nimiq/moogle). A demo website will be available
soon! In the meantime you can read [my thesis (English)]({{ site.baseurl }}/assets/pdf/moogle/moogle-thesis.pdf)
and [some slides (Italian)]({{ site.baseurl }}/assets/pdf/moogle/moogle-slides.pdf).