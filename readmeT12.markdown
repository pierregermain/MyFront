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
 
 
### Caracteristicas

Si abres algunos ficheros css puedes ver al principio el @font-face { (...) }. 
Ahí está definido el nombre de la nueva font y la ruta a la font.
Se supone que no tenemos que saber de eso al no ser que vayamos a crear una nueva font.


## Sobre Shame.css o Temp.scss

 - Por ahora para probar la font vamos a crear un fichero shame.css
 - Hay gente que usa ese fichero para los hacks más asquerosos.
 - Yo no recomiendo hacerlo ya que al final siempre se va a quedar ahí.
 - Yo siento que es mejor meter el código en cuestión en el componente correcto.

Para probar @font-face podemos meterlo en nuestro fichero sass temp.scss

### Uso de Font Awesome desde Local

La manera más fácil de probar Fontawesome es bajando los siguientes ficheros:
 - Por un lado dejas en /css/all.css el fichero all.css de los webfont(puedes cambiarle el nombre si quieres)
 - Por otro lado dejas en /webfonts los ficheros font (ficheros *eot, *svg, *woff, etc.)
 - Finalmente desde del <head> referencias el fichero all.css usando `<link rel="stylesheet" href="css/all.css">`



Para usar un icono se puede hacer de varias formas. Por ejmplo para una bomba:

https://fontawesome.com/icons/bomb?style=solid



v.198


### Instalación de una Font

Puedes usar el CDN o bajarte los ficheros tu mismo.


TODO:
(creamos el fichero play, copiamos @font-face, lo metemos el play)

 
t12.16


TODO: CODE
T.19 - Acc