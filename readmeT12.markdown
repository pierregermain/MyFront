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

Para probarlo nada mas usa por ejemplo `<i class="fas fa-phone"></i>`. 
- Lo malo de usarlo así es que debes importar todo el framework de la font.
- Pero hacerlo así nos da mucho poder de hacer todo desde el markup.
- Ejemplos: https://fontawesome.com/v4.7.0/examples/


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

## Sobre Frameworks (Bootstrap y Awesome)

 - `Awesome` y `Boostrap` funcionan muy bien conjuntamente
 
 - PROS:
   - Rapido para crear prototipos
   - Consistencia
   - Bonito
   
 - CONS:
   - Mucho CSS no necesario
   - Mucha customización si hay que seguir un diseño
   - Semántica: Muchas clases que no sirven para la Accesibilidad (por ejemplo el <i> tag no lo entiende el Screen Reader)
   
 - Expertos no deberían usar Bootstrap ni Awesome ni otros frameworks similares.
 
Básicamente si sólo vas a usar algunas partes del framework entonces no merece la pena importar todo el framework entero.

## Yarn en vez de Bower

En vez de usar Bower deberíamos usar Yarn.

Primero instalamos Yarn tal cómo viene explicado en la web oficial.

Una vez que tengamos instalado Yarn instalamos los paquetes con Yarn (Mirar doc. oficial)

En nuestro caso que estamos usando normalize.css y font awesome haríámos

```
yarn add normalize.css
yarn add --dev @fortawesome/fontawesome-free
```

Esto nos hace los siguiente:
 - baja los paquetes al directorio `node_modules`
 - crea el fichero `yarn.lock`
 - crea el fichero `package.json`


### Uso minimalista de Font Awesome

Si sólo necesitas algunos iconitos de Font Awesome puedes importar de la siguiente forma Font Awesome desde tu `styles.scss`
 
```
@import "../node_modules/fontawesome/scss/variables";
@import "../node_modules/fontawesome/scss/mixins";
@import "../node_modules/fontawesome/scss/core";
@import "../node_modules/fontawesome/scss/icons";
```

Eso haría que uses menos código css compilado.

## Cons de usar Font Awesome

Lo malo de usar Font Awesome es que vamos a tener un montón de iconitos que no necesitamos

Ahora mismo podemos bajar desde la propia web de fontawesome el svg del iconito que necesitamos.

Lo suyo es que hagamos nuestra `propia` font usando por ejemplo `Fontastic`, servicio online para hacer tu propia font


# [Fontastic](http://fontastic.me/)

PROS:
 - Sirve para crear fuentes de iconos personalizables.
   - Ahorramos espacio!
   
CONS:
 - Tienes que gestionar tu font
 - Tienes que gestionar tu css

MANUAL:

 - Una vez online le das a "New Font"
   - Desde "Customize" tenemos la opción de usar iconos de Font Awesome
   - Una vez seleccionado los iconos que necesitemos le damos a "Publish" y Download
 - Es posible hacer upload de nuestras Fonts dandole a "Import Icons"


# [Symbolset](https://symbolset.com/)

 - Convierte automáticamente texto a iconos (usando tecnología de ligaduras)
 - Podría ser muy bueno para Screen Readers (pero no creo que funcione con multilang)
 - OJO: Al user ligaduras no puedes usarlo con Fontastic
 
# Búsqueda de Buenas Fonts

Simplemente busca "free web fonts". Recomendamos:

 - [fontsquirre](https://www.fontsquirrel.com/)
   - Puedes buscar por tags y tipo de fonts
   - Te dice en que dipositivo se puede usar
   - Bajas la Font y luego le das a "generate"
   - Eso te genera el css con el `@font-face` necesario
   - VENTAJA: Instalamos la font en local
 - [Google Fonts](https://fonts.google.com/)
  - Buscamos la font (por ejemplo Roboto)
  - Le damos a "Add" y "Use" seleccionando los weights (cuanto más selecciones mas pesado será la font)
  - Nos genera el <link> externo a meter en el head del html
  - VENTAJA: No necesitamos gestionar la font
  
  
 



t12 v.34
