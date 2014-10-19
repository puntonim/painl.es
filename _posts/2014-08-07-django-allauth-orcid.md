---
layout: post
title: "Adding ORCID Provider to django-allauth"
excerpt: "Adding ORCID OAuth provider to django-allauth for social login"
tags: [gsoc, neurostars, biostar, orcid, oauth, django-allauth]
---

In a [previous post]({% post_url 2014-07-22-integration-with-orcid %}) I have been talking
about the integration of [ORCID](http://orcid.org/) in [NeuroStars]({{ site.baseurl }}/neurostars/)
during [GSoC2014](https://developers.google.com/open-source/soc/?csw=1).
In particular we would like to provide two new features:

- Signup/login using a ORCID account (via OAuth);
- Import data from a ORCID profile to a NeuroStars profile.

[django-allauth](https://github.com/pennersr/django-allauth) is a Django library, built on top of
[requests-oauthlib](https://github.com/requests/requests-oauthlib), which provides Django projects
with similar features and works with
[many providers](http://django-allauth.readthedocs.org/en/latest/providers.html) like Amazon,
Facebook, GitHub, Twitter, Google, LinkedIn, etc.

We decided to contribute to the *django-allauth* project and add support for the ORCID provider.

The OAuth flow implemented by ORCID is standard and the architecture of code in django-allauth is quite easy to understand, even though not documented: so I just had to write [a few lines of code](https://github.com/pennersr/django-allauth/tree/master/allauth/socialaccount/providers/orcid) to extend some base classes and the result was just great. My contribution was merged into the master branch quite quickly.

We have then used the updated *django-allauth* library to integrate ORCID as social login provider
in *NeuroStars* with the following scenario:

- a user wants to signup in *NeuroStars* using her ORCID account; she clicks on a "Signup with ORCID" link;
- the OAuth flow begins and the user is redirected to Orcid.org to a page where she is asked to
authorize *NeuroStars* to access her ORCID profile info;
- the user confirms and she is redirected back to *NeuroStars* to a page which asks if she wants
to use her ORCID bio as her *NeuroStars* profile info;
- the user might choose to ignore the question or confirm; if she confirms she is redirected to
her profile page.

Some screenshots:

<figure>
    <a href="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/1.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/1.png">
    </a>
    <figcaption>Adding the ORCID social login provider.</figcaption>
</figure>

<figure>
    <a href="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/2.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/2.png">
    </a>
    <figcaption>Authorizing Biostars (or NeuroStars) to access the ORCID profile info.</figcaption>
</figure>

<figure>
    <a href="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/3.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/3.png">
    </a>
    <figcaption>Asking to import ORCID profile info to NeuroStars.</figcaption>
</figure>

<figure>
    <a href="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/4.png">
        <img src="{{ site.baseurl }}/assets/img/2014-08-07-django-allauth-orcid/4.png">
    </a>
    <figcaption>The user profile after having imported the profile info.</figcaption>
</figure>