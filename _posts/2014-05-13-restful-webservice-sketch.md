---
layout: post
title: "NeuroStars RESTful Webservice Sketch"
excerpt: "RESTful Webservice"
tags: [gsoc, neurostars, biostar, rest, webservice, api]
---

Building a [RESTful Webservice](http://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services)
will probably be my first activity for [NeuroStars]({{ site.baseurl }}/neurostars/) during
[GSoC2014]({% post_url 2014-04-21-gsoc2014 %}): 
it is a good opportunity for me to get an overview of the codebase.

Some work have already been done in
[BioStar v1.0](https://github.com/ialbert/biostar-central/tree/v1.0)
and that could be the starting point.

<div class="table_of_contents">
  <ul>
    <li class="title">Table of Contents</li>
    <li><a href="#api-in-biostar-1">API In Biostar 1</a>
      <ul>
        <li><a href="#traffic">1. Traffic</a>
          <ul>
            <li><a href="#url">Url</a></li>
            <li><a href="#response">Response</a></li>
            <li><a href="#description">Description</a></li>
            <li><a href="#possible-improvements">Possible Improvements</a></li>
          </ul>
        </li>
        <li><a href="#user-details">2. User Details</a>
          <ul>
            <li><a href="#url-1">Url</a></li>
            <li><a href="#response-1">Response</a></li>
            <li><a href="#description-1">Description</a></li>
          </ul>
        </li>
        <li><a href="#post-details">3. Post Details</a>
          <ul>
            <li><a href="#url-2">Url</a></li>
            <li><a href="#response-2">Response</a></li>
            <li><a href="#description-2">Description</a></li>
          </ul>
        </li>
        <li><a href="#statistics">4. Statistics</a>
          <ul>
            <li><a href="#url-3">Url</a></li>
            <li><a href="#response-3">Response</a></li>
            <li><a href="#description-3">Description</a></li>
            <li><a href="#possible-improvements-1">Possible Improvements</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="last"><a href="#api-in-biostar-2">API In Biostar 2</a>
      <ul>
        <li><a href="#ideas">Ideas</a>
          <ul>
            <li><a href="#a-questions-endpoint">a. Questions Endpoint</a></li>
            <li><a href="#b-answers-endpoint">b. Answers Endpoint</a></li>
            <li><a href="#c-comments-endpoint">c. Comments Endpoint</a></li>
            <li><a href="#d-search-endpoint">d. Search Endpoint</a></li>
            <li><a href="#e-users-endpoint">e. Users Endpoint</a></li>
            <li><a href="#f-authentication">f. Authentication</a></li>
            <li><a href="#g-versioning">g. Versioning</a></li>
            <li><a href="#h-semantic-backend">h. Semantic backend</a></li>
          </ul>
        </li>
        <li><a href="#notes">Notes</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#bibliography">Bibliography</a></li>
      </ul>
    </li>
  </ul>
</div>

# API In Biostar 1

A simple API was built for [BioStar v1.0](https://github.com/ialbert/biostar-central/blob/biostar1/main/server/api.py).
The available methods are:

## 1. Traffic

### Url
`GET api/traffic`

### Response
{% highlight json %}
{
    "date": "Tue May 13 08:55:32 2014", 
    "timestamp": 1399992932.0, 
    "traffic": 512
}
{% endhighlight %}

### Description
Number of post views over the last 60 min filtered by unique IPs.

### Possible Improvements
- Clearly state the units of measurement.  
We could f.i. change the field `"traffic"` to `"post_views_last_60_min"`.
- Add minutes parameter: `GET api/traffic?min=5`.
This returns the number of post views over the last 5 min filtered by unique IPs.
- Improve the counting algorithm.  
Users part of the same network infrastructure (like a office or a university) might share the same public IP, so the number provided might be underestimated.  
We could improve this algorithm by counting post visits of unique logged users plus post visits of anonymous users filtered by unique IPs.


## 2. User Details

### Url
`GET api/user/<id>`

### Response
{% highlight json %}
{
    "date_joined": "2013-12-13", 
    "id": 2, 
    "joined_days_ago": 151, 
    "last_visited": "2013-12-17", 
    "name": "John Doe", 
    "vote_count": 156
}
{% endhighlight %}

### Description
General info about a user.


## 3. Post Details

### Url
`GET api/post/<id>`

### Response
{% highlight json %}
{
    "answer_count": 0, 
    "author": "John Doe", 
    "author_id": 1, 
    "creation_date": "2013-12-16", 
    "id": 2, 
    "lastedit_date": "2013-12-16", 
    "parent_id": 1, 
    "rank": 5626.6076326, 
    "root_id": 1, 
    "score": 0, 
    "title": "C: How to cook Pizza?", 
    "type": "Comment", 
    "type_id": 3, 
    "xhtml": "<p>Wood fired oven is best!</p>\n"
}
{% endhighlight %}

### Description
General info about a post.


## 4. Statistics

### Url
`GET api/stats/<days>`

### Response
{% highlight json %}
{
    "answers": 70, 
    "comments": 53, 
    "date": "2014-05-03", 
    "days_ago": 10, 
    "questions": 30, 
    "timestamp": 1399179600.0, 
    "toplevel": 43, 
    "users": 103, 
    "votes": 215, 
    "x_new_posts": [2], 
    "x_new_users": [3], 
    "x_new_votes": [4]
}
{% endhighlight %}

### Description
Website statistics from day-0 until `<days>` days ago. 

### Possible Improvements
- Clearly state the date interval.   
In the response we could use the fields `date_from` (day-0) and `date_until`.
- The code is currently broken.   
The cause is a name clash between the variable `json` and the module `json`.
- `<days>` might be not user friendly.   
*Istvan* pointed out that counting backwards from the current day seems to be simple to use,
as it answers questions like: "What was posted ten days ago?". But this makes life harder for
people who want to mine our system periodically. He suggests to count forward from day-0.  
I guess we could accept 3 mutually exclusive parameters:
    
    - `until` to provide stats from day-0 until `until`;
    - `days_ago` to provide stats from day-0 until `days_ago` days ago;
    - `days_from_zero` to provide stats from day-0 until day-0 + `days_from_zero`.  

- Cached files could grow indefinitely.   
I like the idea of caching statistics in json files, but we have to consider that those files
could grow indefinitely. We must monitor this, f.i. we could set a threshold of N files and when
reached, delete the file with the oldest modification timestamp.
We might simply ignore this point as it is a matter of one small text file per day.
As *Istvan* suggests we could also generate these files every day (it's a matter of 1 file
per day) and serve them as static files.

# API In BioStar 2

[BioStar v2](https://github.com/ialbert/biostar-central/) has no API so far. 
Porting Biostar v1 API to Biostar v2 should be not too hard but my impression is that the code
requires some love before being ported. A solid design is also required if we plan to create a
exhaustive set of API methods.

## Ideas

Apart from the possible improvements I've already mentioned above, we could consider some of the followings.

### a. Questions Endpoint
- Get the most recent questions (filtering by id, date, tags, author, popularity, unanswered
status, votes, bookmarks);
- Create/edit a question;
- Delete a question I have authored;
- Vote/bookmark a question.

### b. Answers Endpoint
- Get the most recent answers (filtering by id, question, date, author, votes, bookmarks);
- Create/edit a answer;
- Delete a answer I have authored;
- Vote/bookmark a answer;
- Accept/refuse answers for the author of the question.

### c. Comments Endpoint
- Get the most recent comments (filtering by id, question, answers, date, author, votes);
- Create/edit a comment;
- Vote a comment.

### d. Search Endpoint
- Search for posts (questions, answers, comments) meeting certain criteria;
- Search for similar questions.

### e. Users Endpoint
- Get users list;
- Get user profile;
- Get posts (questions, answers, comments) authored by a user ordered by date or popularity
(votes, views, answers).

### f. Authentication
Some of those methods require authentication, by meaning f.i. that only authenticated users could
post a question.

### g. Versioning
I suggest we first introduce a small set of methods and then gradually extend it. This requires
us to use version numbers like:
`api.biostars.org/1.0/answers`

### h. Semantic backend
*Satrajit* has a plan to build a semantic backend for Biostar. This would let BioStar interact
with external websites: f.i. we could provide any website with a button "ask this in Biostar" to
automatically post a new question. This semantic backend would work together with the API, we
should keep this in mind!


## Notes

Building such API is a major benefit for our project since it gives developers the ability to
create new user interfaces like mobile applications.

We must take inspiration from the very well designed
[StackOverflow API](http://api.stackexchange.com/docs/).

## Tools
[Django REST Framework](http://www.django-rest-framework.org/)

## Bibliography
[REST in Practice](http://shop.oreilly.com/product/9780596805838.do)