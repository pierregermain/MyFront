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
 
Después elegimos la *font-style* y *font-size*.

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
 - No se debe usar `section` para aplicar estilos
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

Una vez realizado los Heading y los Selectores hay que ver que mas vamos a estilar.
Vemos que seguimos teniendo muchos Headers para ser pasados por Frontend. Seguimos por ese camino pues.
Para ir en orden vamos a empezar por los Headers superiores, hasta llegar hasta los de abajo

Volvemos a hacer lo mismo que en el primer paso: volvemos a hacer un screenshot del Header, y lo metemos dentro del markup temporalmente.
Ahora desde el navegador jugamos con los estilos para ver que cambios hay que realizar.
Aplicamos text-align:left; text-transform:none y aplicamos el font-size correcto.
Para obtener el font-size deberíamos comparar letras grandes (Por ejmplo la "M" o la "L").
Una vez que tenemos el font-size aplicamos el font-weight: 200;
Para no caer en errores de font-weight aplicamos un background parecido al del diseño.
Y ya que esté correcto el color aplicamos el letter-spacing, si vemos que hay que ajustarlo todavia podemos bajarle un pixel a la font-size.


TODO: Aplicar estilos yo mismo (V55)

            
 
t3.18 v56



TODO: 49























