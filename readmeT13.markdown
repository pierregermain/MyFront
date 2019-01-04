# Forms

 - Search with Google for [Html Forms](https://www.google.com/search?q=html+forms) for a first impression howto make a form with html.

Basic Points:

 - understand `<input>` is a void element
 - understand the method attribute:
   GET (Data send is visible in the browser)
   ```
   <form action="/action_page.php" method="get">
   ```
  
   vs. POST (Data send is only visible on server side)
   ```
   <form action="/action_page.php" method="post"> 
   ``` 
   
## Style a Submit Button

If we have already a `button` class applied to links we could apply it to our <input>. Usually it makes sense to use the same style for <input> and links if they represent a button.

## Style a Comments Box

We will use `box-sizing: border-box;` to allign the easy way the width with the other elements.

## Style a Select Box

 - Hard to style for multiplatform.
 - It's easier to use radio buttons.
 - The easiest way is to use a 3rd library.

### 3rd Party Libraries for replacing a select box

 - We will use [selectize.js](http://selectize.github.io/selectize.js/)
 - We will install it with our package manager (bower)
 - We test it inserting the script at the beginning of our index.html


### JS Polyfill

 - To fill gaps of browser support for new features.

For example if you need to have *placeholder* function on all browsers, first you will search *can i use placeholder* to see if there is support. If there is NOT support you will need to search *placeholder polyfill*.

Usually you will need to install this polyfill with your package manager (*bower install placeholders*)

You will need to add this polyfill at the end of your `<body>` of your index.html

## Using Extend for elements

It is okey to use extend if you think that it is possible that you will not use that classes in the future.

Example with a nice convention for naming the extends

```(css)
%contact_form---gray_input_box {
    background-color: $light-gray;
}
%contact_form---gray_input_box {
    color: $dark-gray;
}
.my-gray-input {
    @extend %contact_form---gray_input_input;
    @extend %contact_form---gray_input_box;
}
```

## Using Display Block

It is okey to change the display to `display:block` to the elements of the Form so that it is easier to manage the margins.

## Radio Buttons

You have to use <label> using the `for` attribute with <input> of `type="radio" with the `id` attribute

### Customize a Radio Button

We style the <label> and hide the <input>

To select the input that has been selected we use

```
input[type="radio"]:checked + label i {
  &:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f058";
  }
}

```

## Search Form

- With Frontend Frameworks like Bootstrap a Search Form is easy to style. 
- We will use *selectize.js*.
- Usually we will use some of the following:

```
vertical-align: top;
display: inline-block; 
font-size: 0;
float: right;
box-sizing: border-box;

```

If we want an icon on the submit button we will need to use <button>


### Fontastic

If you really need an custom icon for the search box just use one from fontastic. [T13 - V57](https://buildamodule.com/collection/front-end-development#viewing)
