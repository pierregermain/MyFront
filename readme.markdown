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

Ahora que ya tenemos nuestras variables para nuestro H2, nos damos cuenta que habrá otros H2 (son selectores)que van a ser diferentes en estilo.
Para dichos H2 podemos crear una clase caracteristica. Por ejemplo habrá borders que usen un color diferente.
Vamos a usar por ahora una clase llamada border_with_background para dicho caso.

En nuestro Markup definimos Selectores, y en el CSS definimos las variables para nuestro selectores y clases.
Podemos usar varias clases en el markup separandolos con un espacio en blanco.

* Clases: Son cómo tags para dar una categoria. Tipo Taxonomías en Drupal o Tags en Facebook.
* Selectores: Sirven para seleccionar desde CSS a elementos que quieras estilar. Pueden ser clases, id's, elementos, atributos, etc.

https://www.w3schools.com/cssref/css_selectors.asp

Para seleccionar

```
<p class="border full"></p>
```

podemos usar:

```
.border.full{
}
```



t3.9 v47



















