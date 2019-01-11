# Styling Sliders

Please Note that the source code should be taken from the T19.

There are great libraries to help implement sliders: We will have a look at Flexslider.

## Flexslider

[Flexslider](https://woocommerce.com/flexslider/)

We add Flexslider with yarn to our project. We will have installed the needed files at

```
node_modules/flexslider/
node_modules/jquery/
```

Now we add the flexslider script to our index.html file

### Position of Arrows

Understand position absolute vs. relative vs. fixed

### Styling

It's better to style your own markup, not the one provided by the library.

### About Vertical aligning

It's more difficult than horizontal positioning

[6 methods for vertical centering with CSS](https://vanseodesign.com/css/vertical-centering/)

#### Flexbox

Today we can use Flexbox (*display:flex*) to align elements


#### HTML Tables

Sometimes it is okey to use tables to vertical align. We can also use *display:table* and *display:table-cell* to have our div's displayed as tables.


#### Transform

We can use the transform function to align vertically

```
.container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```

### Arrows

They are font icons, so we can use our own changing the font used on them.

We saw howto add fontawesome to div's in previous lessons.
We can use text-shadow then to five some shadows to the arrows.

To center the arrows you can use negative margin

### Control Navigation Bullets for paging

we use *bottom* to center the contol navigation


# Vertical Column Content

 We would use floats, widths and margins.
 Also we would need to use clear and overlow and display inline-block.

 When you layout you should first do it from the browser.

# About Absolute Sizes

Have a look at changing your font size to 20px, maybe you need to change to pixel some margins or pixels!!!

For layouts you should pixels, but for fontsizes you will use relative sizes.

# Vertical Sliders

Once your layout is okey, you can insert an slider library

# Position Arrows in Flexslider

Just use the left/right attribute. 
Note the hoover state.
