---
categories: [project]
title:  "NeuroStars"
tags: [neurostars, biostar]
excerpt: "NeuroStars: a questions and answers website for the neuroinformatics community"
permalink: /neurostars/index.html
comments: true
cssfile: "/assets/css/pages/projects/neurostars.css"
ogimage: "/assets/img/projects/neurostars-g.png"
---

<div class="initial-note">
<strong>TL;DR</strong> I am one of the
<a href="https://github.com/ialbert/biostar-central/commits?author=nimiq">main contributors</a>
of <a href="https://github.com/ialbert/biostar-central">BioStar</a>, the engine which powers
<a href="http://neurostars.org/">NeuroStars</a>. I am also one of the two system administrators
of <a href="http://neurostars.org/">neurostars.org</a>. NeuroStars is
<a href="https://github.com/nimiq/biostar-central">hosted on
GitHub<i class="fa fa-github fa-lg" style="vertical-align: baseline; margin-left: .3rem;"></i></a>
</div>

[NeuroStars](http://neurostars.org/) is a questions and answers website for the
*neuroinformatics* community. 

<img src="{{ site.baseurl }}/assets/img/projects/neurostars-g.png" alt="NeuroStars icon" class="right">

The project was started after a few 
[unfruitful attempts](http://meta.cogsci.stackexchange.com/questions/271/neuroinformatics-and-cognitive-sciences)
in [StackExchange's Area51](http://area51.stackexchange.com/proposals/38069/neuroinformatics/)
to build a website part of the
[Stack Exchange Network](http://en.wikipedia.org/wiki/Stack_Exchange_Network)
focused on neuroscience.
The need to tailor *NeuroStars* to a specific scientific community entailed the use of a truly
open source, customizable and extensible solution: [BioStar](https://github.com/ialbert/biostar-central).

*BioStar* is *"a simple, generic, flexible and extensible Q&A framework [...] developed by
scientists and for scientists"*. It is the engine that powers some science oriented Q&A website:
[Biostars Bioinformatics Q&A](https://www.biostars.org),
[Galaxy User support](https://biostar.usegalaxy.org),
[Bioconductor User support](https://support.bioconductor.org),
[Metabolomics Q&A](http://www.metastars.org) and
[Neurostars](http://www.neurostars.org).

*NeuroStars* is supported by the
[International Neuroinformatics Coordinating Facility (INCF)](http://www.incf.org/)
and administered by [Roman](https://github.com/brainstorm).
*BioStar* is authored by [Istvan](https://github.com/ialbert) and 
[I am one of the main contributors](https://github.com/ialbert/biostar-central/commits?author=nimiq).

Check out a [webinar](https://www.youtube.com/watch?v=veVD1olyaW4) by
[Dr. Satrajit Ghosh](https://github.com/satra)
from the Massachusetts Institute of Technology.

Technologies
============
*NeuroStars* is powered by the [BioStar](https://github.com/ialbert/biostar-central) framework.

A **basic deployment** of *BioStar* includes the following software stack:

- [Python](https://www.python.org/): the main programming language;
- [Django](https://www.djangoproject.com/): the web framework component;
- a DBMS like [PostgreSQL](http://www.postgresql.org/);
- [Whoosh](https://pypi.python.org/pypi/Whoosh/): the light-weight full-text search engine;
- a webserver like [Nginx](http://nginx.org/), [Gunicorn](http://gunicorn.org/),
[Waitress](http://waitress.readthedocs.org/en/latest/) or others;
- a bunch of [Django libraries](https://github.com/ialbert/biostar-central/blob/master/conf/requirements/base.txt)
for different purposes.

For **high performance installations**, the following optional software is highly suggested:

- [Celery](http://www.celeryproject.org/): the distributed task queue to manage asynchronous
operations like email processing, news fetching, etc;
- [Redis](http://redis.io/): for caching;
- [Elasticsearch](http://www.elasticsearch.org/): the full-text search engine.

The **current deployment of *NeuroStars*** at [neurostars.org](http://neurostars.org) was designed
by myself and is now administered by [Roman](https://github.com/brainstorm) and myself. It is
made of the following stack (apart from the software listed in the basic deployment above):

- [Amazon Web Services](http://aws.amazon.com/): the cloud infrastructure;
- [Ansible](http://www.ansible.com/) for automated deployment;
- my [Ansible-Biostar]({{ site.baseurl }}/ansible-biostar/) playbook to automatize the deployment of BioStar-based projects
using Docker containers;
- [Docker](https://www.docker.com/): to deploy applications inside software containers;
- my [Docker-PostgreSQL]({{ site.baseurl }}/docker-postgresql/) container which deploys
[PostgreSQL9.3](http://www.postgresql.org/) inside a Docker container;
- [Nginx](http://nginx.org/) as reverse proxy server;
- [Waitress](http://waitress.readthedocs.org/en/latest/): the webserver;
- [Postfix](http://www.postfix.org/) as email server.


My main contributions
=====================
*BioStar* is authored by [Istvan](https://github.com/ialbert) and 
[I am one of the main contributors](https://github.com/ialbert/biostar-central/commits?author=nimiq).
Most of my contributions happened during the [Google Summer of Code]({% post_url 2014-04-21-gsoc2014 %}) program.

List of my main contributions:

- [Ansible-Biostar]({{ site.baseurl }}/ansible-biostar/) playbook to automatize the deployment
inside [Docker](https://www.docker.com/) containers;
- designed a [basic RESTful webservice]({% post_url 2014-05-13-restful-webservice-sketch %});
currently [working on a more feature-rich version](https://github.com/nimiq/biostar-central/commits/api)
based on [Django REST Framework](http://www.django-rest-framework.org/);
- [multi-tag filtering](https://github.com/INCF/biostar-central/pull/31);
- [automated testing with Travis-CI]({% post_url 2014-07-10-travis-ci %});
- [login using ORCID as social provider]({% post_url 2014-07-22-integration-with-orcid %}),
feature implemented by [extending Django-allauth]({% post_url 2014-08-07-django-allauth-orcid %});
- [embed tweets in posts]({% post_url 2014-08-16-embed-tweets %});
- currently [working on continuous delivery](https://github.com/nimiq/biostar-central/commit/1771aa8614d82a3faf9467c9c1c60cd62555af05) based on GitHub Webhooks.


Codebase
========
- *NeuroStars* repository: <https://github.com/INCF/biostar-central>
- *BioStar* repository: <https://github.com/ialbert/biostar-central>
- My forked repository, deployed to [neurostars.org](http://neurostars.org/): <https://github.com/nimiq/biostar-central>