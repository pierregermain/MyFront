# Responsive Images and Breakpoint

 - For Logo it is okey to use PNG-24 with alpha layer. The problem of using images is the zooming in, you will see the ugly pixels. 

## Solution of using images

 1. Only use lowres images and don't care for high end desktop devices [logo.png].
 2. Use a High Density image (200% of the original image) [logo@2x.png] setting an image size. This will have 4x the size of the original image, so be careful using this approach.
 3. Retina.js
 4. Mediaqueries
 5. Svg Icons for vector files (perfect for logos)

## Retina.js

*retina.js* is an open source script that makes it easy to serve high-resolution images to devices with retina displays 

The script is inserted at the end of your index.html just before the body tag ends.

You can install retina.js with yarn

After that just import it with

```
<script type="text/javascript" src="node_modules/retina.js/src/retina.js"></script> 
```

### Avoid 404 Errors with Retina.js (data-at2x attribute)

Just use *data-at2x* attribute to say which is your 2x version

```
<img src="images/logo.png" data-at2x="images/logo@2x.png" alt="Company Logo">
```

### Problem of using Retina.js (srcset attribute)

It will download 2 versions of images for desktop users

We can use the *srcset* attribute to let the browser decide which image to use. We just tell the browser what kind of images we have (600w will tell that the image is 600px wide, and 1200w will tell that the image is 1200px wide)

```
<img src="images/logo.png" srcset="images/logo.png 600w images/logo@2x.png 1200w" alt="Company Logo">
```

If you need to give support IE 11 you can use a polyfill (picturefill)

# Media Queries

We can define when to use one or an other version of our image.
We can use media queries in css directly.
We can also define css to use from within the *sizes* attribute like so:

## Breakpoints from the index.html

Ex.) tell to use 100% width in mobile and 300px width on desktop
```
<image src="logo.png" srcset="(...) sizes="(max-width:500px 100%, (min-width:501px) 300px">

```

# Breakpoints and Sass

In Css you can not use mediaqueries inside of classes, but in Sass you can using the *breakpoint-sass* extension

We use *Bundler* to install this extension using our Gemfile
But we use *Compass* to use this extension

# Compass

We could install (in our project) compass with bundler using our Gemfile.
We can also install compass globally using `sudo gem install compass`

We use the *config.rb* file for our project

We can generate one using `compass create fed`

Once created copy the config.rb file to your root directory and remove the other files that have been generated.

We could enable sass globbing adding the dependency to our *config.rb*

```
compass watch
```

## Adding sass-globbing to compass

 - We add the `require` to the config.rb file
 - We add the `import` to the styles sass file
