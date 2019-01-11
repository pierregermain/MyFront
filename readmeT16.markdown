# Responsive Layout

Please Note that the source code should be taken from the T19.

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
  margin;

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





T16
V31
