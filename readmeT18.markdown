# Optimize Front End Performance and Add Automation


## Chrome Network Tab

Tipps:

- *Disable Cache* from the Network Tab for real results.
- Enable 3G emulation


- Your page should load in 1 to 2 seconds.

- Have a look at the following values:
 - Total KB transferred
 - Number of requests

## Example of one request:

 - DNS Lookup (Get IP Address)
 - Initial Connection (get to our server)
 - Waiting TTFB: Time To get First Byte of the server (Similar size to Initial Connection if there are no processings to do)
 - Content Download: When TTFB ends the download is ready and begins.

By default Chrome opens 6 or 7 connections at a time. That's why after downloading the index.html it download 6 or 7 files at a time.

Once we have *DOMContentLoaded* (blue line) our JS's will begin to process the DOM. Once finished we are in the *Load* state (Red line). After the Red Line usually JS's are processing and/or downloading files. After that we are in the *Finished* state.

## About RTT

https://www.incapsula.com/cdn-guide/glossary/round-trip-time-rtt.html


## Optimize Files

We can optimize:
 - Size of files
 - Number of files

That's why we should *minifize* our files.

With Grunt and Gulp (Can have parallel processes) we can automate these optimizations concatenating and reducing the size of the files.

## Concatenate Files

With the terminal we could do a process / script to concatenate all JS files and then minimize the resulting file.

This would reduce the size of the JS's from 293KB to 85KB


## Grunt

 - We should install Grunt with npm.
 - Grunt has nice plugins that can be installded with npm.

### Install Grunt in a project

 - It will look for a `package.json` file

To install grunt in our project just run

```
npm install grunt --save-dev
```

This will add grunt to our package.json file (in devDependencies)

### Install the grunt concatenation plugin

https://github.com/gruntjs/grunt-contrib-concat

## Using and configuring Grunt

We use the `Gruntfile.js` to configure our grunt process.

We would add to the Gruntfile every file needed.


## Running our tasks

just run `grunt` from the cli.

# Minify Files with Grunt 

## Minify CSS using Grunt

 - it removes comments and white spaces

https://github.com/gruntjs/grunt-contrib-cssmin


## Minify JS using Grunt

https://github.com/gruntjs/grunt-contrib-uglify

To install just

```
npm install grunt-contrib-uglify --save-dev
```


T18
V40
