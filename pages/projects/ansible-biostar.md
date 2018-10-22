---
categories: [project]
title:  "Ansible-Biostar"
tags: [biostar, ansible]
excerpt: "Ansible-Biostar: Ansible playbook to automatize the deployment of BioStar-based projects using Docker containers"
permalink: /ansible-biostar/index.html
comments: true
cssfile: "/assets/css/pages/projects/ansible-biostar.css"
ogimage: "/assets/img/projects/ansible-g.png"
---

<div class="initial-note">
<strong>TL;DR</strong> I am the author of Ansible-Biostar.
Ansible-Biostar is
<a href="http://en.wikipedia.org/wiki/Free_and_open-source_software">free and open-source</a>, 
available in <a href="https://galaxy.ansible.com/list#/roles/1057">Ansible Galaxy</a> and
<a href="https://github.com/puntonim/ansible-biostar">hosted on 
GitHub<i class="fa fa-github fa-lg" style="vertical-align: baseline; margin-left: .3rem;"></i></a>
</div>

An [Ansible](http://www.ansible.com/) playbook to automatize the deployment of
[BioStar](https://github.com/ialbert/biostar-central/) based projects
using [Docker](https://www.docker.com/) containers.

<img src="{{ site.baseurl }}/assets/img/projects/ansible-g.png" alt="Ansible-Biostar icon" class="right">

*Ansible-Biostar* can currently deploy to [Amazon Elastic Compute Cloud](http://aws.amazon.com/ec2/)
and [Google Compute Engine](https://cloud.google.com/compute/) - still experimental! - machines.
It is the main tool used to deploy
[NeuroStars]({{ site.baseurl }}/neurostars/)
and other [BioStar](https://github.com/ialbert/biostar-central/) based projects.

Features
========
- Deploy to [Amazon Elastic Compute Cloud](http://aws.amazon.com/ec2/)
and [Google Compute Engine](https://cloud.google.com/compute/) - still experimental!
- Configure the *virtual firewall* via [Amazon EC2 Security Groups](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html)
- Add your *public key* to the new machine's SSH server for an easy access
- Ship a [PostgreSQL 9.3 server inside a Docker container]({{ site.baseurl }}/docker-postgresql/)
- Ship a [BioStar](https://github.com/ialbert/biostar-central/) based website with
[Nginx](http://nginx.org/) as reverse proxy server, 
[Waitress](http://waitress.readthedocs.org/en/latest/) as webserver
- Easy to [configure](https://github.com/puntonim/ansible-biostar/blob/master/README.md)
- Available in [Ansible Galaxy](https://galaxy.ansible.com/list#/roles/1057)

Find more info in the codebase 
[hosted at GitHub](https://github.com/puntonim/ansible-biostar)!

Key Technologies
================
Key technologies used in *Ansible-Biostar*:

- Ansible
- Docker
- Linux, Ubuntu, Apt
- Amazon Web Services (AWS), Amazon Elastic Compute Cloud (EC2), Google Cloud Platform, Google Compute Engine (GCE)
- Python, Pip, Nginx, Waitress, Whitenoise
- BioStar, PostgreSQL
- Git, GitHub