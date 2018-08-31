![LunchFinder](https://raw.githubusercontent.com/mdcarter/lunchfinder.io/master/public/logo.png) 

[![CircleCI](https://circleci.com/gh/mdcarter/lunchfinder.io.svg?style=shield)](https://circleci.com/gh/mdcarter/lunchfinder.io)
[![CodeFactor](https://www.codefactor.io/repository/github/mdcarter/lunchfinder.io/badge)](https://www.codefactor.io/repository/github/mdcarter/lunchfinder.io)
[![Coverage Status](https://coveralls.io/repos/github/mdcarter/lunchfinder.io/badge.svg?branch=master)](https://coveralls.io/github/mdcarter/lunchfinder.io?branch=master)
[![devDependencies Status](https://david-dm.org/mdcarter/lunchfinder.io/dev-status.svg)](https://david-dm.org/mdcarter/lunchfinder.io?type=dev)

# Lunchfinder
> « Where do we eat today ? »

Lunchfinder is a simple application that helps you choose quickly a restaurant to eat around your location.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
yarn start
```

## Developing

### Built With
This is build using create-react-app by facebook, and it use React, Reflux and the Foursquare/Swarm API

### Prerequisites
Having node, and nodemon installed on the system.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/mdcarter/lunchfinder.io
cd lunchfinder.io/
yarn
```

Once the dependencies are installed, you can start the app using this command :

```shell
yarn start
```

This will also open a browser pointing to the correct url.

### Building

If you need to build the project to be able to host is somewhere, use this command:

```shell
yarn build
```
A "build" folder will be created, containing everything that needs to be hosted.

### Deploying / Publishing

Once you have "now" installed and configured on your machine, just use this command to deploy the app online:

```shell
yarn deploy
```

## Tests

The tests are located in the "tests" folder. Run the tests using this command:

```shell
yarn test
```

## Api Reference

The app use the Foursquare API, you can check the documentation [on this page](https://developer.foursquare.com/docs).
