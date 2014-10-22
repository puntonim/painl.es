---
categories: [project]
title:  "Promptastic"
tags: [promptastic, shell, bash, powerline, powerline-shell]
excerpt: "Promptastic: a flavored prompt for Bash shell"
permalink: /promptastic/index.html
comments: true
cssfile: "/assets/css/pages/projects/promptastic.css"
ogimage: "/assets/img/projects/promptastic-g.png"
---

<div class="initial-note">
<strong>TL;DR</strong> I am the author of 
<a href="https://github.com/nimiq/promptastic">Promptastic</a>.
</div>

*Promptastic* is a flavored *prompt* for [Bash shell](http://en.wikipedia.org/wiki/Bash_(Unix_shell))
which provides info about the *running system* and *environment* in a fancy *colored* output.
It works under *Mac OS X* and *Linux*.

<img src="{{ site.baseurl }}/assets/img/projects/promptastic-g.png" alt="Promptastic icon" class="right">

*Promptastic* is heavily inspired by [Powerline](https://github.com/Lokaltog/powerline) 
and [Powerline-shell](https://github.com/milkbikis/powerline-shell/)
which I have been using for a long time and realized that the former is complicated to install,
slightly bloated and more suitable for
[Vi](http://en.wikipedia.org/wiki/Vi) users, while the latter is unmaintained and a bit buggy.

Features
========
<img src="{{ site.baseurl }}/assets/img/projects/promptastic/promptastic.png" alt="Promptastic screenshot" class="screenshot">

- shows the name of the logged user, the host name, the current directory path and the time;
- provides a feedback if the current directory is read-only or is not a valid path;
- warns if the last command exited with a failure code;
- displays the number of active jobs;
- reveals the name of the active Python [virtualenv](https://github.com/pypa/virtualenv)
environment;
- presents details about the current Git branch and the status of the staging area and commit;
- adds a special label in case of SSH connection;
- any feature can be enabled/disabled via a config file;
- colored output: there are a bunch of themes to choose from and new themes can be easily created;
- simple and automatic [installation procedure](https://github.com/nimiq/promptastic/blob/master/INSTALL.md);
- written in Python.

More details and screenshot in [Info.md](https://github.com/nimiq/promptastic/blob/master/Info.md).
*Promptastic* is [FOSS](http://en.wikipedia.org/wiki/Free_and_open-source_software) and its codebase
is [hosted on GitHub](https://github.com/nimiq/promptastic).
