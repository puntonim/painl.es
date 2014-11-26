---
categories: [project]
title:  "Docker-PostgreSQL"
tags: [docker, postgresql]
excerpt: "Docker-PostgreSQL: a Docker container for PostgreSQL with special features"
permalink: /docker-postgresql/index.html
comments: true
cssfile: "/assets/css/pages/projects/docker-postgresql.css"
ogimage: "/assets/img/projects/docker-g.png"
---

<div class="initial-note">
<strong>TL;DR</strong> I am the author of Docker-PostgreSQL.
Docker-PostgreSQL is
<a href="http://en.wikipedia.org/wiki/Free_and_open-source_software">free and open-source</a>,
available in <a href="https://registry.hub.docker.com/u/nimiq/postgresql93/">Docker Hub Registry</a> and
<a href="https://github.com/nimiq/docker-postgresql93">hosted on
GitHub<i class="fa fa-github fa-lg" style="vertical-align: baseline; margin-left: .3rem;"></i></a>
</div>

A [Docker](https://www.docker.com/) container for [PostgreSQL](http://www.postgresql.org/)
with *special features*. Available for pulling from
[Docker Hub Registry](https://registry.hub.docker.com/u/nimiq/postgresql93/).

<img src="{{ site.baseurl }}/assets/img/projects/docker-g.png" alt="Docker-PostgreSQL icon" class="right">

[Docker](https://www.docker.com/)
builds a delivery container for the modern app. It is
"*a tool that can package an application and its dependencies in a virtual container that can
run on any Linux server. This helps enable flexibility and portability on where the application
can run, whether on premise, public cloud, private cloud, bare metal, etc*".
*Docker* took [virtualization](http://en.wikipedia.org/wiki/Hardware_virtualization) one step
further. Despite being a very recent technology, it is already [very popular](https://www.docker.com/resources/usecases/). 

[Baseimage-docker](https://github.com/phusion/baseimage-docker) by [Phusion](http://www.phusion.nl/)
is a special *Docker* image, based on [Ubuntu](http://www.ubuntu.com/), with some optimizations
that makes it a great base to build custom *Docker images*. "*Ubuntu is not designed to be run
inside Docker. Its init system, Upstart, assumes that it's running on either real hardware or
virtualized hardware, but not inside a Docker container. But inside a container you don't want a
full system anyway, you want a minimal system. But configuring that minimal system for use within
a container has many strange corner cases that are hard to get right if you are not intimately
familiar with the Unix system model. This can cause a lot of strange problems. Baseimage-docker
gets everything right*".

[Docker-PostgreSQL](https://github.com/nimiq/docker-postgresql93)
ships a full [PostgreSQL 9.3](http://www.postgresql.org/) server inside a *Docker container*
using *baseimage-docker*. All you have to do is pulling
Docker-PostgreSQL from [Docker Hub Registry](https://registry.hub.docker.com/u/nimiq/postgresql93/)
and run it!

    $ docker run nimiq/postgresql

Now enjoy your new *PostgreSQL* server.
For more info and examples visit [README](https://github.com/nimiq/docker-postgresql93/blob/master/README.md).


Features
========
- Based on [Ubuntu 14.04](http://www.ubuntu.com/) and [phusion/baseimage-docker](https://github.com/phusion/baseimage-docker)
- [PostgreSQL 9.3](http://www.postgresql.org/)
- Automatically create your PostgreSQL *superuser* with the given *password*
- Integrated [SSH server](http://en.wikipedia.org/wiki/Secure_Shell)
- Add your *public key* to the container's SSH server for an easy access
- Expose to the host the *ports* 22 (SSH) and 5432 (PostgreSQL)
- Share PostgreSQL *data directory* and *log files* with the host and other Docker containers
- Available in [Docker Hub Registry](https://registry.hub.docker.com/u/nimiq/postgresql93)

Find more info in the codebase 
[hosted at GitHub](https://github.com/nimiq/docker-postgresql93/)!


Key Technologies
================
Key technologies used in *Docker-PostgreSQL93*:

- Docker
- PostgreSQL
- Bash shell scripting, Linux, Ubuntu, runit
- Baseimage-Docker
- Git, GitHub