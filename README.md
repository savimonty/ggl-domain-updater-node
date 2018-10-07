# ggl-domain-updater-node
Created this simple tool in NodeJS to update my google domain using a cron job.

## Preperation

This has been tested on Ubuntu 18.04 Server

Make sure you have nodejs installed. Follow https://nodejs.org/en/download/ for details.

Follow instructions at https://support.google.com/domains/answer/6147083?hl=en for details of how to setup dyndns for a host with your Google domain.

Clone this repository

`$ git clone https://github.com/savimonty/ggl-domain-updater-node.git`


CD into the cloned repository

``

Rename the .env_example to .env

`$ mv .env_example .env`


Edit the fields in the .env file

`$ nano .env`


Install dependencies from package.json

`$ npm install`


Test your installation and config (.env)

`$ node index.js`

If all works well you should see something like so:

`
error: null
statusCode: 200
body: good xx.xx.xx.xx
`
