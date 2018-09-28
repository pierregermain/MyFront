# Icon Fonts (T12)

Ver `12-Icon-Fonts`

 - Una vez que ya tenemos toda nuestra font configurada en la web nos disponemos a estilizar los iconos.
 
 ## Ventajas de Icon Fonts
 
  - Escalan muy bien
  - Fácil de trabajar con ellos
  - Puedes cambiar el color
  - Nada mas hace falta descargarlo una vez
  
## Font Awesome

 - El icon Font mas famoso es "Font Awesome"
 - Hay varias versiones de Font Awesome. Dentre de la Free Version tenemos para varios Lenguajes (por ejemplo Sass)
 - Se puede instalar usando `npm install --save-dev @fortawesome/fontawesome-free`
    - Te va a generar `package-lock.json` y la carpeta `node_modules/*`
 - Manual para [referenciar](https://fontawesome.com/how-to-use/on-the-web/using-with/sass) desde Sass.
 - En cuanto a lo que se habrá bajado con npm:
   - Los Fonts estarán en `/node_modules/@fortawesome/fontawesome-free/webfonts`
   - Los Css estarán en `node_modules/@fortawesome/fontawesome-free/css`
 
 

v.194




## Sobre Shame.css

 - Hay gente que usa ese fichero para los hacks más asquerosos.
 - Yo no recomiendo hacerlo ya que al final siempre se va a quedar ahí.
 - Yo siento que es mejor meter el código en cuestión en el componente correcto.




### Instalación de una Font

Puedes usar el CDN o bajarte los ficheros tu mismo.

En los ficheros css podemos encontrar la línea @font-face que nos indica con que nombre referenciar el Font desde CSS

Vemos que @font-face nos dice que los ficheros están en ../fonts ... por lo tanto instalamos en el root las fonts en /fonts/

TODO:
(creamos el fichero play, copiamos @font-face, lo metemos el play)

 
t12.16


TODO: CODE
T.19 - Acc