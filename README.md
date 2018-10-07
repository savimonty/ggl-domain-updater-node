# ggl-domain-updater-node
Created this simple tool in NodeJS to update my google domain using a cron job.

## Preperation

This has been tested on Ubuntu 18.04 Server

Make sure you have nodejs installed. Follow https://nodejs.org/en/download/ for details.

Follow instructions at https://support.google.com/domains/answer/6147083?hl=en for details of how to setup dyndns for a host with your Google domain.

Clone this repository

```
$ git clone https://github.com/savimonty/ggl-domain-updater-node.git
```


CD into the cloned repository

```
$ cd ggl-domain-updater-node
```

Rename the .env_example to .env

```
$ mv .env_example .env
```


Edit the fields in the .env file

```
$ nano .env
```


Install dependencies from package.json

```
$ npm install
```


Test your installation and config (.env)

```
$ node index.js
```

If all works well you should see something like so:

```
error: null
statusCode: 200
body: good 1.2.3.4
```
All Responses are explained at the URL above for Google Domains DynDNS API.


## Cron job in Ubuntu to run this every day at 1am

To get the path for node`
```
$ which node
/usr/bin/node
```

Edit the crontab
```
$ crontab -e # this might ask you to choose an editor if you're using this for the first time
```

To edit crontab with a particular user you can specify which user the command should run with
```
$ crontab -u <username>
```

Add a new entry as so
```
0 1 * * * /usr/bin/node <PATH_TO_index.js_FILE>
```

For every 6 hours?
```
0 0,6,12,18 * * * /usr/bin/node <PATH_TO_index.js_FILE>
```
Save the file and exit. You're good to go.

For more details on using crontab: https://help.ubuntu.com/community/CronHowto

