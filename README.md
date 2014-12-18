# Calendar-kata

![calendar image](http://i67.photobucket.com/albums/h309/jimmay5469/39bfc4a3-ae1c-4aef-89eb-e46165fec97f.png)

## Instructions

The goal of this kata is to produce the calendar control above using ember and ember-cli.

You could clone this repo and get started right away but I think there is some value in learning how to setup ember-cli using the setup instructions below.

Once you finish the setup instructions below you are on your own.  I would recommend working on `Helpful Periods` first and then moving on to the `Date Range` input text boxes.

## Setup

Getting started
* `npm install -g ember-cli`
* `npm install -g bower`
* `npm install -g phantomjs`
* `ember new calendar-kata`

Installing dependencies
* Moment.js ([ember-cli-moment](https://www.npmjs.com/package/ember-cli-moment))
	* `npm install --save-dev ember-cli-moment`
	* add `"moment"` to the `predef` section of `.jshintrc`
* [jquery-date-range-picker](https://github.com/longbill/jquery-date-range-picker)
	* place `.js` and `.css` in vendor folder
	* copy `Brocfile.js` code

Creating calendar component
* `ember generate component date-range-picker`
* copy `app/components/date-range-picker.js` code
* copy `app/templates/components/date-range-picker.hbs` code
* copy `app/templates/application.hbs` code

Running site
* `ember server`
* visit `http://localhost:4200`


# Ember CLI stuff

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


