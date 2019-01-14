# Responsive Layout (T16 and T17)

Please Note that the source code should be viewed in the T19 folder.

It's nice if we can focus on *MOBILE-FIRST* sites so that our site is usuable for all decvices.

When using *MOBILE-FIRST* you will use media queries with *min-width* instead of *max-width*.

## Approaches of Responsive Layout

1. Set breakpoints for:
 - phone
 - tablet
 - desktop

This is the perfect solution when you have 3 mockups

2. Expand/Shrink the browser until it looks ugly.
We will see this solution

## Footer: Example Desktop-First! to Mobile-First!

We create group div wrappers needed for the layout and float the groups.

When doing desktop-first the problem is that the mobile version of the website will process more css

For example:
```

&-social_nav {
  float:right;
  @include breakpoint(max-width $breakpoint) {
    float: none;
    text-align: center;
    margin-bottom: 20px;
  }
}
```
will only be executed on the mobile version of the site

So we would need to rewrite our code to be mobile first.
The last code would look like this:

```

&-social_nav {
  text-align: center;
  margin-bottom: 20px;
  @include breakpoint($breakpoint) {
    float:right;
    text-align: left;
    margin-bottom: 0;
  }
}
```

## Fixed Width Section

We add a new placeholder variable in the layout.scss file.
All placeholder layout variables will begin with `l`.
When less that 1000px width we will have a full width, after that a fixed one;

```
%l-full_width {
  margin: 25px 20px;
  width: auto;
  @include breakpoint(1000px) { 
    margin-left: auto;
    margin-right: auto;
    width: 960px;
  }
}
```

Now to use this placeholder just extend it where needed.

## Featured Boxes

First we set the padding of all the container. We look if an other container has the same padding already set.

We should use *box-sizing:border-box* for the box and display:inline-block.

For Section-Icons in the boxes we can use position:absolute in case that the boxes are always of the same size.

After that we adjust the margins.

```
.icon_box-wrapper {
  text-align: center;
}
.icon_box {
  $padding: 22;
  $size: 223;

  display:inline-block;
  text-align: left;
  margin: <adjust as needed>;

  width: px2rem($size);
  height: px2rem($psize);
  padding: px2rem($padding);
  box-sizing: border-box;

  &-icon {
    $width: 100;
    positon:absolute;
    margin-top: px2rem($width/2 + $padding)*-1);
    margin-left: px2rem($size/2 - $padding - $width/2)
  }
}
```

We will need a breakpoint so that our boxes layout good when in mobile (Less than 1000px). What we do is create a wrapper around our boxes:

```
.icon_box-wrapper {
  margin-left: auto;
  margin-right: auto;
  max-width: 612px;
  @include breakpoint(1000px) {
    width: auto;
    max-width: none;
  }
}
```


## Make Vertical Slider Responsive

Create a breakpoint and change the width of the wrapper for mobile.

```
.slideshow {
  $break_big: 1070px;
  $break_small: 670px;

  width: auto;

  @include breakpoint ($break_small) {
    width: 515px; // single item width
  }
  
  @include breakpoint ($break_big) {
    width: 970px //max width 
  }

  .arrows {
    display: none;
     @include breakpoint ($break_small) {
       right: -50px;
       display: block;
     }
  }
}

```

## Make Horizontal Slider Full Width

```
.slideshow {
  width: auto;
  box-sizing: border:box;
  overflow: hidden;
  border: 0;
  border-radius: 0;
}
``` 

## Marke Vertical Slider Full Width

```
.slideshow {
  width: auto;
  margin: 0;
}
```

## Make Borders of Sections smaller

We just need to adjust the width and add some margin =)


```
.section {
  border: <adjust as needed>;
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
  @include breakpoint ($max_width) {
    width: $max_width;
    margin-left: auto;
    margin-rgith: auto;
    }
}
```

## Make a Contact Form Reponsive

```
.contact_form{
  $full_width: 530px;
  width: auto;
  @include breakpoint($full_width) {
    width: px2rem(472);
  }
}
```

### Make an Input Responsive

Just create an wrapper arround every input and set the following style.

```
.radio_wrapper {
  display: inline-block;
}
```

## Style Header for Desktop

We have a header with the following elements:

```
LOGO                  ACCOUNT   SEARCH
NAV                         TELEPHONE
```

```
.site_header{
  
  &-top {
    @extend %l-full_width;
    overflow: auto;
    padding: <adjust>;
  }

  &-bottom {
    padding: <adjust>;
    overflow: auto;
  }
  &-bottom_inner {
    @extend %l-full_width;
  }

  &-top_right {
    float: right;
    padding-top: <adjust>;
  }

  &-logo {
    float: left;
  }

  &-account { 
    // only one line can be adjusted like this
    display: inline-block;
    line-height: px2rem(29);
    margin-right: <adjust>;
  }

  &-nav {
    float: left;
  }

  &-phone {
    float: right;
  }
}
```

## Style Header for Mobile

Usually the order of the Header Elements would be:

 - Logo
 - Account Block
 - Navigation
 - Phone Number (remove from header on mobile)

We add the following styles (this will need to be modified to be mobile-first!)

 ```
 .site-header {
   $mobile-break: 670px;
   &-top_right {
     @include_breakpoint(max-width $mobile-break) {
       float:none;
       width: <adjust>;
       margin-left: auto;
       margin-right: auto;
       text-align: center;
     }
   }
   &-logo {
     @include_breakpoint(max-width $mobile-break) {
       width: <adjust>;
       float: none;
       margin-bottom: <adjust>;
       margin-left: auto;
       margin-right: auto;
       display:block;
     }
     @include_breakpoint(max-width 490px) {
       width: 100%;
     }
   }
   &-phone {
     @include breakpoint(max-width $mobile-break) {
       float: none;
       width: <adjust to rem>;
       text-align: center;
       display: block;
       margin-left: auto;
       margin-right: auto;
     }
   }
}

```

## Add extra padding for mobile

Don't forget that !!!
Do it with rems!

## Viewport Metatag

With the [viewport](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) metatag you can adjust how your page will be viewed on mobile devices.

### Viewport Example

```
<meta name="viewport" content="width=device-width, user-scalable=no">
```

## Show Mediaqueries

You can [show mediaqueries](https://www.youtube.com/watch?v=dPU5xGty0tE) in Chrome Dev Tools by checking "Show Mediaqueries" in the Device Toolbar.


T17
V11
