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

t13 v7
