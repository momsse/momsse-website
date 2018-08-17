# momsse.github.io

[![CircleCI](https://circleci.com/gh/momsse/momsse-website/tree/master.svg?style=shield)](https://circleci.com/gh/momsse/momsse-website/tree/master)

### Getting started

Run gastby dev server:

    yarn develop

Run storybook:

    yarn storybook

### Deploying

#### With momsse.github.io:

    yarn deploy

#### Using `dokku`:

Setup:

    dokku apps:create APP
    dokku config:set APP NPM_CONFIG_PRODUCTION=false
    dokku domains:add APP www.domain.tld
    dokku domains:add APP domain.tld
    dokku letsencrypt APP
    dokku letsencrypt:cron-job --add APP

Deploy:

    git push dokku master
