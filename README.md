# PoC - branching & versioning @ B2C Sales

See [this jira ticket](https://jira.pax.ch/browse/SWE-25703) for more context.

I'm using technologies which I'm more familiar with instead of angular or nx. But this doesn't matter, as this PoC puts the focus on other more specific things.

## Project configuration

This repository is a [`turbo`](https://turbo.build/) monorepo has two apps and few packages to share config files for `eslint` and `typescript`. The idea is to create one project for documentation and one for experimenting. A monorepo allows for both to be in the same place, making the context easier to understand.

### Apps

#### docs

[`docs`](https://github.com/paxch/poc_branching-versioning-strategy/tree/main/apps/docs) is a [`nextra`](https://nextra.site/) is a documentation tool using built with [`Next.js`](https://nextjs.org/), which allows you to quickly and easily set up a beautiful documentation site. Entries are written either in Markdown or [`MDX`](https://mdxjs.com/).

On it the research will be documented. This allows for experimenting with branching, without complicating things with the documentation.

#### web

[`web`](https://github.com/paxch/poc_branching-versioning-strategy/tree/main/apps/web) is a scaffolded [`Next.js`](https://nextjs.org/) application. It's used as a basic playground to test out branching and versioning strategies.
