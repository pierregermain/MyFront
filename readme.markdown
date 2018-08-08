BAM - Frontend

# Intro

Hoy en día puedes hacer web sin crear directamente html. 
Es bueno saber cómo funciona el html / css.

## Back vs Front

Backend es todo lo que está en el servidor: En Drupal sería PHP y MySQL.
Frontend es lo que pasa en el Navegador Web: En Drupal sería HTML, CSS y JS.

En Drupal suele ser el Backend el encargado de crear el código usado en Frontend (HTML, CSS, JS)

Es por ello que ahora está de moda las API's para separar el Back y el Front.

Básicamente el Frontent se basa en HTML CSS y JS. Encima de eso luego aprendes sobre:
 - Diseño Responsivo
 - Accesibilidad
 - Performance
 
## Sobre el Curso

El cliente nos da un "mockup" y lo vamos a convertir en un Template (basado en HTML / CSS / JS).
Para ser un Frontend profesional es importante tener las herramientas que usa el diseñador (Photoshop por ejemplo)

## Consideraciones HTML

Ver `01-Simple-Html/*`

1. Todo estilo se puede sobreescribir: Hay dos opciones
 - ó cambias el markup
 - ó cambias el estilo. 
 
Si usas un *div* básicamente inicializas todos los estilos.

2. Hay que usar tags con significado: *Semantic HTML*: Es bueno para:
 - Navegadores
 - Screen Readers
 - Buscadores
 - Desarrolladores

No uses un tag equivocado: Si no es el tag correcto mejor usa un div. No selecciones un tag por el aspecto.
Busca en google los tipos de tags que hay si no sabes que tag usar.

3. En HTML todo es una caja
  
 - Recomiendo mirar desde el inspector el margin > border > padding.
 - Es bueno ver cada página cómo una combinación de cajas. 
 - Entender bien la aproximación al [Diseño Atómico](http://bradfrost.com/blog/post/atomic-web-design/)
   - *Átomos*: HTML Tags (Input, Button, H1, etc.) o elementos abstractos (color, fonts, animaciones)
   - *Moléculas*: Estructura formada por átomos. Sería un Form por ejemplo que combina Input - Label - Button
   - *Organismos*: Combinación de Moléculas. Podría ser regiones en los que metes Moléculas.
   - *Templates*: Combinación de Organismos (Regiones). Aquí se ve el diseño de la página sin contenido
   - *Páginas*: Son instancias de Templates en los que metemos contenido para ver el resultado final
   
   - El Resultado de aplicar este método se puede hacer usando [Patternlab-Php](https://github.com/pattern-lab/patternlab-php)
     - Hay un ejemplo en http://demo.patternlab.io/
     - Una manera de hacerlo sería usando [particle](https://github.com/phase2/particle) cómo theme.
   
      
## Pasos para pasar del Diseño al Frontend
   
1. Dibujar cajas
2. Definir tipografías de cada elemento / caja
3. No recomendamos imágenes con texto de forma provisional


## Consideraciones Frontend

Hay dos maneras de trabjar:

1) Sensible: Rapidez
2) Clean: Reducir technical debt

Normalmente empiezas "clean" y acabas haciendolo "sensible"

Hay que encontrar un equilibrio entre las dos maneras de trabajar.

## Definir Tipografía

### Font Properties

Hay que saber al elegir una font sobre las "css font properties". 
Propiedades de fonts en [w3schools](https://www.w3schools.com/css/css_font.asp)

Primer elegimos la *font-family*: Preferentemente una que no haya que bajarse de internet para ahorrar ancho de banda

 - Sans Serif (moderno, sin los picos) vs. Serif (con los picos, oldshool)
 Ej) font-family: sans-serif
 
Después elegimos la *font-style* (italic por ejemplo) y *font-size*.

Finalmente solemos aplicar la *font-weight*

Trucos:

 - Para el tamaño es imprescindible tener una herramienta para medir pixeles:
   - Windows: [Cropper](https://github.com/brhinescot/Cropper)
 - Si usas *font* puedes aplicar estilos y tamaños a la vez pero no se suele usar porque es complicado de mantener.
 
### Text Properties

Una vez definido las font properties nos pasamos a las text properties (para el color y el espaciado sobre todo)

Propiedades de texto en [w3schools](https://www.w3schools.com/csS/css_text.asp)

Propiedades a conocer: 
*color*, *text-align*, *text-decoration*, *text-transform*

Otras propiedades: 
*letter-spacing*, *line-height*, *word-spacing*, *text-shadow*

Propiedades avanzadas: 
*white-space*, *text-overflow*,  ...

Propiedades que no se suelen usar:
*text-indentation*, *direction*, ...

Trucos:

 - *color*:  
    - En una Font debes elegir el color que está más adentro (obscuro)
    - Imprescindible tener tu color picker 
      - [Sip](https://sipapp.io) en OSX
      - [Pick](https://kryogenix.org/code/pick/) en Linux  
 - *text-identation*: Hay que tener cuidado con este que nos puede dar problemas con margenes/paddings/text-align

### Headings

Al empezar a hacer FE, podemos empezar por los Headers. Habrá que ver que cosas son parte del Header y cuales no.

Si hay borders debajo del header lo aplicamos:

 - Aplicamos un *border*.
   - Lo más común es usar *border-style* con los valores *dotted*, *dashed* o *solid*
   - Muy común es usar:
      *border-top-style*
      *border-bottom-style*
      *border-right-style*
      *border-left-style*
      
   - Muchas veces tendrá sentido mejor usar en una sóla línea de código para definir el bordem-bottom que hacerlo por separado. Un ejemplo:
   
               // Border-Bottom
               border-bottom-style: solid;
               border-bottom-width: 1px;
               border-bottom-color: #DDDDDD;
               
               podría mejor definirse cómo
   
               // Border-Bottom
               border-bottom: solid 1px #DDDDDD;
 
 
Si necesitamos alinear podemos aplicar *text-align*.
 
Ahora habrá que fijarse en el padding para separar el Header con el border. 
Y a continuación el valor del margin-bottom para que el border esté a suficiente distancia con el siguiente elemento.

### Clases y Selectores

Ahora que ya tenemos nuestras variables para nuestro H2, nos damos cuenta que habrá otros H2 que van a ser diferentes en estilo.
Para dichos H2 podemos crear una clase caracteristica. Por ejemplo habrá borders que usen un color diferente.
Vamos a usar por ahora una clase llamada border_white para dicho caso.

Podemos usar varias clases en el markup separandolos con un espacio en blanco. Desde el CSS se accede a ellos con el punto.

* Clases: Son cómo tags para dar una categoria. Tipo Taxonomías en Drupal o Tags en Facebook. Lo complicado es saber usar un nombre adecuado.
* Selectores: Sirven para seleccionar desde CSS a elementos que quieras estilar. 
  Pueden ser clases (.border), id's (#name), elementos (h2), atributos. Podemos combinarlos.
  Al principio es muy dificil saber que selector necesitamos. Hay veces que hay que usar un Selector, y ya mas adelante tenemos que 
  cambiarlo ya que nos damos cuenta que no era el correcto.

[Listado de Selectores y manera de combinarlos](https://www.w3schools.com/cssref/css_selectors.asp)

Ej.)

Para seleccionar (usamos espacio)
```
<p class="border full"></p>
```

podemos usar (sin espacio)
```
.border.full{
}
```

## Secciones

Primero debemos Identificar Secciones en el diseño: Al hacer zoom out del diseño puedes ver más fácilmente las cajas del diseño.

Para hacer secciones en html usamos el tag `section` en vez del `div`

[Sections en mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

Importante: 
 - No se debe usar `section` para aplicar estilos: Para ello usaremos clases. Concretamente podemos usar "compound classes" tipo `section-name.class-name`
 - Se usa `section` para los Screen Readers, para generar un buen Outline
 
[Sobre Sections en HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines)
 
## Cálculo de Margin y Padding

Ver `13-margin-padding.html`
Ver `video t3.13`

 - El background sólo se aplica dentro del border (padding). No se aplica al margin
 - El margin nada mas dice el espacio que va a haber entre elementos
 - Para padding left y right esta fácil aplicarlo a la clase de la sección si no hay margenes definidos en los elementos interiores.
 - Calculo de Padding cuando hay un margin interior:
   - Necesitamos un padding-top de 54 pixeles (entre el Section y el H2)
   - Pero ya hay un margin-top definido en el H2 de unos 28px (es el valor por defecto en Chrome)
   - Por ello tenemos que aplicar 26px (28px + 26px = 54px)
 - Es importante saber que si Section no tiene un padding, no se va a ver el margin de los elementos interiores.
 - En cuanto aplicas un padding de 1px, elementos interiores de repente se van a ver con el margen aplicado.
 
## Padding Shorthand:

Normalmente el padding superior e inferior tienen el mismo valor. Si no lo tienen quizás sea porque el diseñador hizo algo mal.

Sobre Padding Shorthand:
Ej.)
```
padding-left: 121px;
padding-right: 121px;
padding-top: 26px;
padding-bottom: 26px;
```

equivale a:
```
padding: 26px 121px 26px 121px;
```

que equivale a:
```
padding: 26px 121px;
```         
            
## Siguientes conversiones: Más Headings

Ver `02-Slider-Heading/*`

Una vez realizado los Heading y los Selectores hay que ver que mas vamos a estilar.
Vemos que seguimos teniendo muchos Headers para ser pasados por Frontend. Seguimos por ese camino pues.
Para ir en orden vamos a empezar por los Headers superiores, hasta llegar hasta los de abajo

Volvemos a hacer lo mismo que en el primer paso: volvemos a hacer un screenshot del Header, y lo metemos dentro del markup temporalmente.
(va ser el Header del Slider)
Ahora desde el navegador jugamos con los estilos para ver que cambios hay que realizar.
Aplicamos text-align:left; text-transform:none y aplicamos el font-size correcto.
Para obtener el font-size deberíamos comparar letras grandes (Por ejmplo la "M" o la "L").
Una vez que tenemos el font-size aplicamos el font-weight: 200;
Para no caer en errores de font-weight aplicamos un background parecido al del diseño.
Y ya que esté correcto el color aplicamos el letter-spacing, si vemos que hay que ajustarlo todavia podemos bajarle un pixel a la font-size.

Eso nos da el siguiente estilazo:

```
text-align: left;
text-transform: none;
font-size: 39px;
font-weight: 500;
background-color: #525B5E;
color: white;
letter-spacing: 0;
```

## Búsqueda del nombre característicos para una clase

Ahora tenemos que pensar a ver donde aplicamos este estilo para ese Header del Slider
Por ahora vamos a poder acceder a dicho H2 con la clase `slider-heading`.
El background se lo aplicamos al wrapper del H2 que es la section con clase `slide` 
ya que no tendría sentido sólo aplicarlo al H2.

Además le aplicamos un poco de padding al `slide` de forma provisional.
Al aplicar el padding vemos que el H2 tenía estilos escondidos que tendremos que sobreesribir.

Por ejemplo al H2 hay que quitarle el borde inferior. Aplicamos lo siguiente a su clase:

```
border: none;
padding: initial;
margin: initial;
```

El *initial* lo que hace es aplicar los estilos por defecto (estilos del navegador web)
    

## Sobre clases por defecto

Quizás te das cuenta que no es tan buena idea darle estilos directamente a H2, sobre todo si no se va a usar en todo el sitio web.

## Selectores con Hijos (Compound Selector)

Ver `16-compound-selector.html`

En el caso de nuestros H2 dentro de las secciones, estos toman estilos dependiendo del padre.

Entonces para acceder a ellos desde el CSS podemos usar:
`.slide h2` y `.section h2`

Acceder de esta forma depende siempre de si el elemento al que accedes siempre va o no a tener ese estilo y si además se usa en otro lado.

### Selectores Hijos

`.slide h2` accede a todos los h2 dentro de .slide. Es decir accedería a todos estos h2:

```
<div class="slide>
   <h2> Si </h2>
   <div> 
     <h2> Si </h2>
   </div>
</div>
 ```
 
En cambio `.slide > h2` accede sólo a los h2 direcatemente hijos de .slide (pero no los nietos).    

```
<div class="slide>
   <h2> Si </h2>
   <div> 
     <h2> No </h2>
   </div>
</div>
 ```
 
Cuando puedas usa el Selector Hijo con ">" ya que es mas eficiente que el espacio en blanco

## Reglas CSS

1. Orden de Aplicación

 - El orden importa, no es lo mismo aplicar un color al H2 al principio del Css que al final. Siempre el último valor aplicado tiene más prioridad que al principio
 - Tiene más prioridad el estilo aplicado directamente al markup (con la propiedad style)que dentro de los css.
 
2. Especialización:

Ej.) El selector .section h2 tiene más poder que el selector h2 

En caso de empate entre Especialización y Orden de Aplicación siempre gana la Especialización

## Organización básica de CSS

Primero empezamos a definir selectores sueltos (globales) y vamos a ir especializando cada vez mas nuestros selectores

## Importar Css

Ya hemos visto que podemos usar CSS desde dentro del HTML de dos formas: Una desde el Head en el tag syle y otra directamente desde el markup.
Pero hay una tercera forma de usar CSS y es importandolo desde ficheros externos.

Para ello declaramos desde el head lo siguiente:

`<link href="css/styles.css" rel="stylesheet" type="text/css"/>`

Mas info sobre [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

## Modificación de CSS desde Navegadores

 - En Firefox vas a Inspect Element > Style Editor y le das al botón Save
 - En Chrome vamos a Inspeccionar > Sources . Ahi vamos a "arrastrar" nuestro workspace, Chrome te preguntará si estás seguro.
 
En ambos casos con Ctr + S podras guardar los cambios desde el propio navegador. Además en Chrome puedes modificar el HTML.


## Evitar tanto override

Hay varias formas:
 - una clase por cada tipo de estilo dentro del elemento o contenedor
 
## Hacer el CSS longterm

 - intentar no usar selectores de elementos (H2) para estilos.
 - mejor usar selectores de clases.
 - así si cambia la estructura del documento no se rompen los estilos.
 
 
## CSS Semántico con clases

Para usar por ejemplo una clase título dentro de un slide podriamos usar este nombre:

`slide_principal-title`

Para usar una clase para un título de una sección general usaríamos:

`section_hero-title`

Si te fijas el `dash "-"` nos separa elementos padre e hijo. 
En cambio `_` solamente es una especie de Camel Case en Css.

### Cambio de nuestro CSS a Semántico

Ver `18-semantic-classes`

Ya no usamos H2 para el estilo: Al cambiar el markup de H2 a H5 por ejemplo los estilos ya no se rompen

# Organización de CSS con SMACSS

Página oficial: [smacss: Scalable and Modular Architecture for CSS](https://smacss.com/)

Recomendación: Leer el libro oficial

Ya hemos visto ejemplos de clase_padre-clase_hijo


## Componentes (o Módulos) en CSS y HTML

 - En SMACSS los contenedores (cómo secciones) se llaman módulos (en otros sistemas los llaman componentes)
 - En Drupal vamos a llamar a dichos contenedores "componentes" para no usar la nomenclatura "módulo"
 - La idea es que un componente podamos reusarlo y que se pueda mover de un sitio a otro en la web para poder ser reusado

### Subcomponentes (ó Submódulos)

Ver `02-subcomponentes.html`

 - Son componentes iguales que otros pero que tienen alguna cosa diferente
 - SMACSS dice que debemos tomar el nombre característico y agregarle otro nombre característico
 
 EJ) componente_principal--clase_alternativa
 
 Con "--" hacemos la distinción de subcomponente
 
 
## Siguientes conversiones: Más Headings

Ahora vamos a fijarnos en el siguiente Heading a ser estilado. Vamos a decidirnos por un H3 dentro de una sección.
Volvemos a meter en nuestro markup una imagen del resultado.

Podemos ir editando directamente desde nuestro navegador, podemos ir copiando estilos que ya hemos usado anteriormente.

Nuestro Css va ser

```
.icon_box{
    background-color: #e8e8e8;
}
.icon_box-title{
    font-family: sans-serif;
    font-size: 26px;
    font-weight: 100;
    color: #7A7A7A;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

Una vez aplicado a un elemento creamos los demás elementos para replicar los estilos, 
pero realmente no hace falta replicarlos hasta tener un componente bien realizado.

## Line-height
 
Una vez que tengas tus headings estilados toca estilar los paragráfos (p).
Vamos a estilar el paragraph del slider.

Volvemos a dejar en nuestro markup un screenshot de lo que queremos conseguir (Heading y Paragraph).
Para un paragraph no suele ser común usar una clase de estilo, nada mas en casos especiales.

Cuando te pones a estilar un paragraph, mira a ver si en todo el diseño se cumple lo que vas a realizar.

En cuanto al line-height se define con porcentajes, pero es bueno con el pixel ruler ver si se ha aplicado bien (después de haber definido el font-size).

### Sobre Margins

Notas Iportantes sobre margenes:

 - El Margin se ve afectado con el line-height
 - Entre dos objetos se computa el margen mayor

## Más paragraphs

A esta altura conviene ver si se repiten colores. En tal caso usaremos el mismo color para todos los Headers + Paragraphs (por ahora copiando y pegando). Nos ponemos a estilar el primer paragraph

Una vez estilado el primer paragraph vamos con el siguiente paragraph dentro de otro componente.

El siguiente paragraph vemos que tiene un estilo totalmente diferente a los paragraphs normales, 
entonces le damos una clase y lo estilamos usando el selector ">".

Ya que tengamos estilado el paragraph estilamos los márgenes desde los títulos a los paragraphs.


## Trucos para estilar un anchor

Un Anchor tiene de especial que puede tener varios estados:

```
a:link
a:visited
a:hover
a:active
```

## Uso del mismo CSS para varios selectores

Para acceder a varias clases a la vez usamos la coma ","

Ejemplo: Acceder a varios estados del anchor dentro de la case testimony

```
.testimony > a,
.testimony > a:hover,
.testimony > a:visited,
.testimony > a:link,
.testimony > a:active,{
    color: #626262;
}
```

## Reducción de Repetición

En cuanto ves que están copiando muchas veces colores / margenes etc. date cuenta que deberías estar no repitiéndote.
Veremos que con SASS es fácil quitar repeticiones.

# Reseteando

Vemos en nuestro css que se repite muchas veces `font-family: sans serif`, entonces deberíamos cambiar el font-family por defecto de nuestro navegador.

```
body {
  font-family: sans-serif;
}
```

Por ejemplo para *font-weight* no podemos usar el método anterior ya que el propio navegador sobreescribe el valor del H3 dentro del Body.

## Selector Universal *

Para el *font-weight* podriamos usar el selector universal, pero tampoco es recomendable porque se sobreesribirían TODOS los elementos de la página.
Puede tener implicaciones por ejemplo en el rendimiento.


## Standard Color Palette

Vemos que estamos usando varios colores en nuestro proyecto. Vemos que los grises del paragraph y los headers son MUY parecidos.
Entonces muchas veces podemos asumir que el color usado en estos es el mismo (y que en realidad fue un error del diseñador que vamos a asumir).
Hacer eso hará nuestro código mucha más manejable en el futuro.

## Valores por defecto

No deberíamos usar el Selector Universal ya que el propio navegador aplica estilos por defecto que nos pueden ahorrar mucho trabajo en el futuro.
Es mejor poner por decto valores para el "body" y a continuación para otro elementos específicos.

```
body {
    font-family: sans-serif;
    color: #626262;
}
h2, h3 {
    font-weight: 100;
}
```
## Sobre tipografías genéricas

( ... TODO: t5.5 )

## CSS Reset

Hay varias herramientas para resetear css para hacerlo compatible multiplataforma.

Ej.) Eric Meyer's Reset CSS 2.0


### Universal Selector Reset

link: https://cssreset.com


```
* {
	margin: 0;
	padding: 0;
}
```

Eso hace que para todo navegador vamos a tener el mismo margin y padding. 
Eso significa que para cada elemento vamos a necesitar definir el padding y margin de forma manual.

### Eric Meyer's Reset

Link Código Fuente: https://meyerweb.com/eric/tools/css/reset/

Aplica a un montón de elementos el siguiente estilo:

```
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
```

A elementos de HTML 5 aplica `display:block` para que funcionen en navegadores antiguos.

Aplica un `line-height` por defecto al `body` ya que dicho valor cambia mucho entre uno y otro navegador.

Quita estilos a listas de tipo `ol` y `ul`.

También quita estilos a otros elementos.

## Pros y Contras de usar Resets

Pros: Eliminar CSS por defecto, no usar elementos por su estilo, compatibilidad entre navegadores
Cons: Necesitas conocer todas las propiedades css

## Normalize.css

Archivo Css que va ser interpretado por el navegador. 
Si vimos que los resets dejan todo a cero, el normalize lo que hace es solo modificar algunos estilos.
El archivo normalize siempre es mas grande que el de reset. El normalize da soporte a navegadores antiguos. Muchas empresas usan normalize.css

### Instalación de Normalize.css

`Ver 05-Normalize`

Necesitamos el normalize.css y simplemente lo importamos arriba del todo en nuestro html. Verás que ciertos márgenes que te creaba el navegador por defecto han desaparecido.
Habrá sentencias que ya no necesites aplicar, por ejemplo la font al body ahora se aplica al html.

## Package Manager

Es bueno usarlo para gestionar versiones / dependencias.
Usaremos "Bower" basado en "Node". Bower es un package Manager para Herramientas de Frontend.
 
### Instalación de Bower (ya no se debe usar)

https://bower.io/#install-bower

Se instala con npm (node package manager)

`npm install -g bower`

Alternativamente deberíamos mejor usar `webpack` https://webpack.js.org/

### Instalación de paquetes con bower

Ver `06-Bower`

Ejemplo:
`bower install normalize.css` para instalar última versión de normalize.css

Al ejecutarlo nos instala a parte de otros este fichero: `normalize/.bower.json`

En dicho fichero se encuentra la versión usada del paquete

### Sobre versiones

Ejemplo:
2.3.4
donde 2 es la versión (si cambia API)
donde 3 es el update (nuevas funciones, no cambia API)
donde 4 es el parche (solo deberia arreglar cosas)

### Creación del bower.json file

Ahí metemos las dependencias de nuestro proyecto. Para crearlo hacemos `bower init`, nos irá preguntando cosas para crear el fichero:

```
{
  name: '06-Bower-Test',
  authors: [
    'Pierre Germain'
  ],
  description: 'testing bower',
  private: true,
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ],
  dependencies: {
    'normalize.css': '^8.0.0'
  }
}
```

### Bower y versiones semánticas

https://github.com/npm/node-semver#x-ranges-12x-1x-12-

Sobre versiones: https://github.com/dbrock/semver-howto

```
"1.3.2" igual a 1.3.2

">=1.3.2" mayor o igual a 1.3.2
"<1.3.2" menor que 1.3.2

// * es nuestro joker
"1.3.*" Mayor o igual que 1.3.0, menor que 1.4.0

// ~ Permite al último digito especifiado aumentar
"~1.3.2" Mayor o igual que 1.3.2 y menor que 1.4.0
"~1.3" Mayor o igual que 1.3.0 y menor que 2.0.0

// ^ No permite cambiar de version mayor pero si de versión intermedia
"^1.3.2" Mayor o igual que 1.3.2 y menor que 2.0.0
"^0.3.2" Mayor o igual que 0.3.2 y menor que 0.4.0 (Al no ser que la versión mayor sea mayor que 0)

```

# Unidades CSS

## Relativo vs. Absoluto

Los pixeles son absolutos. Los relativos se basan sobre los absolutos. 
Es bueno usar medidas relativas cuando sabemos que estas van a cambiar si cambia la relacionada absoluta. 
Por ejemplo el line-height depende directamente del font-size, entonces es bueno usar porcentajes en en lineheight.

## Em's

Se calcula basado en el elemento padre. Un *em* equivale a 100%.

## Rem's

Se calcula basado sobre el tamaño del navegador.

Ejemplo: Cálculo de em's

Tamaño 100% = 14px
Si queremos 16px hacemos 16/14 = 1.14
Si queremos 12px hacemos 12/14 = 0.85 

Al ser medio complicadillo usar rem's se aconseja usar pixeles y que hay un proceso posterior que traduzca los pixeles en rem's

## Uniteless

Cuando sea posible es mejor usar uniteless numbers ya que dan menos errores al reordenar elementos en el markup.

Por ejemplo es mejor usar:
line-height: 1.1
que
line-height: 10%

# Compatibilidad de Navegadores

www.caniuse.com

Un porcentaje de un 90% para arriba es brutalmente bueno

## Polyfills

En JS podemos usar Polyfills para hacer compatible nuevas funcionalidades para navegadores antiguos.

Para CSS tenemos `Houdini`.

 - Sirve para tener acceso al engine del CSS, al engine de del navegador. Wow!
 
 
# Sass

Ayuda a usar lógica más avanzada que en CSS usando nombre de variables y eleminando repetición.

## Sass vs. Less

Sass es el más usado por ahora en el mundo de Drupal.

## Instalación

Hay varias formas de instalarlo. Recomendamos usar la instalación por terminal.

Info sobre instalación: http://sass-lang.com/install
En linux/nodejs hacemos `npm install -g sass`

## Sintaxis Scss

Para compilar:

`sass input.scss output.css`

Lo bueno de usar sintaxis scss es que es compatible al 100% con la sintaxis css.
Eso significa que podemos renombrar sin miedo un fichero css a scss.

Ver `06-Sass/*`

### Creación y uso de Variables

```
$gris-obscuro: #6D6D6D;
$gris-medio: #DADADA;
$gris-ligero: #e8e8e8;
$blanco: white;
```

luego para usarlo:

`color: $gris-obscuro;`

### Comentarios en Sass

```
// Comentario de una línea
/* Comentario 
 de dos líneas
 */
```

### Sass watch

Para compilado automático :)

`sass --watch input.scss:output.css`

TODO: Wrapping up ... 7.13

## Nesting vs. SMACSS

Con Sass podemos usar Nesting, que va un poco contra SMACSS, pero en muchos casos es preferible usar Nesting y a la hora de compilar se va a crear el SMACSS.

Ejemplo:
En Css teníamos
```
.section_hero--alt {
  background-color: $light-gray;
  padding: 26px 121px;
}
.section_hero--alt > .section_hero-title {
  border-bottom-color: $light-gray;
}
```
Ahora en Sass se convierte a
```
.section_hero--alt {
  background-color: $light-gray;
  padding: 26px 121px;
  > .section_hero-title {
  border-bottom-color: $light-gray;
}
```

## Componentes

Cada componente debe tener su propio fichero. 
Al principio de va dar huevo seguir eso, pero a largo plazo vas a ver que hacerlo así ganarás en mantenimiento del proyecto.


# Organización de Proyectos con Sass


## Uso del & en Sass con Smacss

El operador `&` en Sass nos permite usar SMACSS

Ejemplo:

En CSS:
```
.icon_box {
  background-color: #e8e8e8;
}
.icon_box-title {
  font-size: 26px;
}
```
En Sass:
```
.icon_box {
  background-color: #e8e8e8;
  &-title {
  font-size: 26px;
}
```
que nos genera el CSS correctamente anteponiendo el string `.icon_box` al `-title` tal cómo se había definido en el CSS.

## Eficiencia

Es bueno echarle un ojo al CSS que te genera Sass para ver si es eficiente y correcto (sobre todo al principio)

## Reducir repetición

Ejemplo: Anchor


En Css
```
.testimony-attribution > a,
.testimony-attribution > a:hover,
.testimony-attribution > a:visited,
.testimony-attribution > a:link,
.testimony-attribution > a:active {
  color: $dark-gray;
}
```

pasa a ser en Sass

```
.testimony {
 &-attribution {
 > a {
   color: $dark-gray;
   &:hover, &:visited, &:link, &:active {
    color: $dark-gray;
   }
 }
}
```

con la ventaja de poder ir metiendole mas css entremedias.

## Compilar directorios enteros

```
sass --watch sass:css
```

## Partials

Vamos a crear components

Ejemplo:

si tenemos la clase .section_hero-title {(...)} entonces creamos el fichero:
`section_hero-title.scss`

Si queremos que el fichero sea un partial (es decir que no sea compilado de forma automatica con el comando watch) entonces lo ponemos un underscore al principio:
`_section_hero-title.scss`
Eso hará que no sea compilado de forma automática sino que tenga que ser importando desde otro fichero scss.
Lo bueno de esto es que el fichero css compilado puede tener varios componentes a la vez. Cargar un solo fichero css desde el navegador es menos pesado que tener que cargar varios ficheros css a la vez.

Para importar un partials lo hacemos sin el underscore y sin la extención.

`@import "components/section_hero-title";`

## Organización de ficheros

 - Metemos en el fichero variables las variables (fonts, colores)
 - Metemos en el fichero base los elementos por defecto (h1, etc.
 - Usamos tantas componentes cómo sean necesarios
 
Una vez organizado el fichero styles.scss se nos puede quedar super minimalista:

```
@import "variables";
@import "base";

@import "components/section_hero-title";
(...)
```
 
## CSS Source Maps

Ayuda para inspeccionar css generado por sass.

## Sass Globbing: Importación automática de un directorio con componentes

Hay una extención llamada *Sass Globbing* que nos lo permite :)

Si lo instalas puedes importar componentes así:

`@import "components/*";`

## Instalar extensiones sass: Ejemplo de Sass Globbing
 
Ejemplo: Instalar la extención Sass Globbing.
Ver: https://github.com/chriseppstein/sass-globbing
Ver: `08-Sass/*`

Si te fijas para instalarlo hay que hacer:
`gem install sass-globbing`, en este caso `gem` es el manejador de ruby que ya deberías tener instalado.

Una vez instalado podemos ahora ejecutar
`sass -r sass-globbing --watch sass:css`
para hacer uso del sass-globbing

### Ojo con el uso del Sass Globbing

Ojo con usar Sass Globbing ya que ya no tendremos el poder de elegir el orden en el que se compilan nuestras fuentes. 
Pero si los componentes están bien realizados no debería importarte el orden.

## Ventajas y Desventajas de usar SASS

Ventajas: Poder usar Lógica, no tener que usar Repeticion, uso de Variables, libertad en tu Estructura

Desventajas: Dependencia del Software, Dependencias externas

## Más Info sobre Sass

[Guía Rápida de Sass](http://www.sass-lang.com/guide)
[Documentación de Sass](http://www.sass-lang.com/documentation/file.SASS_REFERENCE.html)

## Compass y Sass

Es importante saber que no hace falta usar compass para usar sass

# Mapa de Herramientas Frontend

```
Node (con NVM) -- para --> Bower (con Grunt/Gulp y sus plugins)
Ruby (con RVM) -- para --> Sass (con Sass Extensions (con Bundler)
```

donde NVM, RVM y Bundler se usan como manejador de versiones.


t9.1 v.156