# codecov.io

[![Build Status][travis-image]][travis-url] [![codecov.io](https://codecov.io/github/cainus/codecov.io/coverage.svg?branch=master)](https://codecov.io/github/cainus/codecov.io?branch=master)

[Codecov.io](https://codecov.io/) support for node.js.  Get the great coverage reporting of codecov.io and add a cool coverage button ( like the one above ) to your README.

## Installation:
Add the latest version of `codecov.io` to your package.json:
```
npm install codecov.io --save
```

## Usage:

This script ( `bin/codecov.io.js` ) can take standard input from any tool that emits the lcov, gcov or standardized json data format and send it to codecov.io to report your code coverage there.

Once your app is instrumented for coverage, and building, you need to pipe the lcov output to `./node_modules/codecov.io/bin/codecov.io.js`.

This library currently supports the following CI companies: [Travis CI](https://travis-ci.org/), [Appveyor](https://appveyor.com/), [CircleCI](https://circleci.com/), [Codeship](https://codeship.io/), [Drone](https://drone.io/), [Jenkins](http://jenkins-ci.org/), [Shippable](https://shippable.com/), [Semaphore](https://semaphoreapp.com/), [Wercker](https://wercker.com/)


### [Istanbul](https://github.com/gotwarlost/istanbul)

**With Mocha:**

```sh
istanbul cover ./node_modules/mocha/bin/_mocha -- -R spec && cat ./coverage/coverage.json | ./node_modules/codecov.io/bin/codecov.io.js
```

**With Jasmine:**

```sh
istanbul cover jasmine-node --captureExceptions spec/ && cat ./coverage/coverage.json | ./node_modules/codecov.io/bin/codecov.io.js
```

[travis-image]: https://travis-ci.org/cainus/codecov.io.svg?branch=master
[travis-url]: https://travis-ci.org/cainus/codecov.io


## Contributing

I generally don't accept pull requests that are untested, or break the build, because I'd like to keep the quality high (this is a coverage tool afterall!).

I also don't care for "soft-versioning" or "optimistic versioning" (dependencies that have ^, x, > in them, or anything other than numbers and dots).  There have been too many problems with bad semantic versioning in dependencies, and I'd rather have a solid library than a bleeding edge one.
