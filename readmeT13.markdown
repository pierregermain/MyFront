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

t13 v13
