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
 - Por un lado dejas en /css/all.css el fichero all.css (puedes cambiarle el nombre si quieres)
 - Por otro lado dejas en /webfonts los ficheros font (ficheros *eot, *svg, *woff, etc.)
 - Finalmente desde del <head> referencias el fichero all.css usando `<link rel="stylesheet" href="css/all.css">`

Para probarlo nada mas usa por ejemplo `<i class="fas fa-phone"></i>`
También se puede usar código hexadecimal tipo `&#xf1e2` (En realidad el icono sería `f1e2`)

Ahora puedes cambiar el tamaño y el color usando propiedades de font (text-shadow por ejemplo)

## Figuras en CSS - Creando un círculo con iconitos dentro

Hay veces que vas a tener que hacer figuras manualmente usando css ya que no encuentras o no merece la pena usar un Icon-Font para ello.

Ej.)

```
display:inline-block;
border-radius: 4em;
background-color: purple;
text-align: center; // en caso de usar icon fonts dentro del círculo
width: 40px;
```

## Añadir contenido con Css

Es posible añadir contenido mediante CSS usando :before y :after

En el caso de los iconos se haría de la siguiente forma (usando Unicode) (no me ha funcionado)

```
&:before{
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f095";
}
```

t12 v.19
