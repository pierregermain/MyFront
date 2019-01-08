# Responsive Images and Breakpoint

 - For Logo it is okey to use PNG-24 with alpha layer. The problem of using images is the zooming in, you will see the ugly pixels. 

## Solution of using images

 1. Only use lowres images and don't care for high end desktop devices [logo.png].
 2. Use a High Density image (200% of the original image) [logo@2x.png] setting an image size. This will have 4x the size of the original image, so be careful using this approach.

## Retina.js

*retina.js* is an open source script that makes it easy to serve high-resolution images to devices with retina displays 

The script is inserted at the end of your index.html


TODO: Intall Retina.js (bower ??)

T14v07
