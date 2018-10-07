require('dotenv').config()

const request = require('request');

const GOOGLE_DYNDNS_USERNAME = process.env.GOOGLE_DYNDNS_USERNAME;
const GOOGLE_DYNDNS_PASSWORD = process.env.GOOGLE_DYNDNS_PASSWORD;
const GOOGLE_FQDN = process.env.GOOGLE_DYNDNS_FQDN;

const googleDomainAuth = Buffer.from(GOOGLE_DYNDNS_USERNAME + ":" + GOOGLE_DYNDNS_PASSWORD).toString('base64');

function updateGoogleDomains() {

    var form = {
        hostname: GOOGLE_FQDN
    };

    request.post({
        headers: {
            "Authorization": "Basic " + googleDomainAuth,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: "https://domains.google.com/nic/update",
        form: form
      }, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
      });
}

updateGoogleDomains();