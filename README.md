# Roburst Network 2.0

This is the marketing website of Roburst Network, based on Jekyll. Browse through a [live demo](https://roburst.network).
This is made by The Roburst Network team.

## Features

* Pre-built pages
* Pre-styled components
* Blog with pagination
* Post category pages
* Disqus comments for posts
* Configurable footer
* RSS/Atom feed
* SEO tags
* Google Analytics

## Setup

1. Add your site and author details in `_config.yml`.
2. Add your Google Analytics and Disqus keys to `_config.yml`.
3. Get a workflow going to see your site's output.

## Develop

Roburst.network was built with [Jekyll](http://jekyllrb.com/) version 3.3.1, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

### Posts

* Add, update or remove a post in the *Posts* collection.
* Documentation pages are organised in the navigation by category, with URLs based on the path inside the `_docs` folder.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Navigation

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Set in the *Includes* / *Footer* section.
