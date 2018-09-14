# Accessibility (T19)

Superguide

# Superguide
https://www.accessibility-developer-guide.com

 - Tu HTML usado debe tener significado semántico. Cuando no hay significado semántico tendrás que usar los textos "alt"
 - Las personas que más sufren con la web son los ciegos, pero también hay personas con otras discapacitades:
   - los que no ven colores, los que no pueden usar un ratón, etc.
   
## Estandares

 - En USA se debe cumplir *Section 508*: Se debe cumplir para las web's oficiales
 - En otro países cómo Australia, Canada, Francia se debe cumplir *WCAG*

## Audiencia

 - Si eres capaz de hacer una web accessible tendrás más audiencia (por lo visto uno de cada cinco persona tiene alguna discapacidad)
 
## Cumplir WCAG

 - La manera más fácil de cumplir WCAG es el [Quickreference](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0)
 - Por ejemplo para 1.1 Textos Alternativos:
   - Te dan una definición (1.1)
   - A continuación te explican lo que es contenido sin texto (1.1.1)
   - A continuación te dan técnicas para cumplir dicho requisito (lo mejor es darle al link "understanding")
   - Al final del todo te dan Fallos que no cumplen 1.1.1
   - Cada técnica y fallo tiene un código
   - Es bueno conocer todos los Fallos y Soluciones que dan.
 
## Keyboard
- [Quickreference](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
- Con la tecla *TAB* pasamos de un elemento a otro. Cada elemento debe mostrar bien si está en el foco.
- Cada elemento debe poder seleccionarse con *TAB*. 
- Es muy común que falle con filtros (por usar display:none el input real) y sliders 

### Radio Buttons

 - Si el input estaba hidden es mejor poner el input a position absolute y moverlo left hacia el infinito.


### Saltar Bloques (WCAG 2.4.1 Bypass Blocks)

 - Hay veces que por ejemplo al presionar TAB nos pasa por un montón de subelementos entonces llegar al footer usando TAB puede ser una tarea demasiado larga.
 
 - La forma más sencilla de hacerlo es justo al comenzar el body poner lo siguiente:
 
```
<a href="main"> Navigate to main content

(...)

<div class="slidehow"  id="main>
```

Ahora al seleccionar el link podremos presionar SPACE para navergar el contenido principal

Cuando tenga :focus lo mostraremos

### Chrome Accessibility Developer Tools

 - Añade ADT Properties Tab en Chrome (será integrado en la Tab Audit)
 - Dale a Run y te dirá las cosas que están bien/mal
 
#### Alternativas a ADT

https://developers.google.com/web/tools/lighthouse/#devtools
https://developers.google.com/web/updates/2018/01/devtools#a11y
https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US


## Search Form

 - No olvides usar un label para
   - Tipo de búsqueda (en caso de existir). Normalmente sería un <label> para el <select>.
   - El Input (la frase a ser buscada)
   - Tendrás que esconder dichos labels con display none
 
## Forms

 - Hay que usar labels para cada <input>, <select>, <textarea>, etc.
 - Habrá labels que si quieres mostar y otros no.
 - Para esconder labels sería ideal usar SMACS con la propiedad *label.is-hidden*.

## Contraste

 - Ahora cuando nos de el Chrome Tool un error de contraste podemos seleccionar el elemento desde el inspector.
 - Habrá una nueva pestaña con herramientas de accesibilidad.
 - ADT puede darte el contraste más cercano a ser usado
 
## Audits en Firefox

 - La herramienta que se puede usar en firefox es [Ainspector](https://ainspector.github.io/)
 - Tendrás que instalar firefox ETC para hacerlo funcionar.
 - Se puede usar para web's mas institucionales que obligan a usar ARIA
 - Resultados:
   - V
   - MC : Manual Change
    
## ARIA

 - Añade info para Screenreaders
 
 
### ARIA Must Have

https://www.w3.org/TR/aria-in-html/#recommendation-table

 - Hay que definir al menos un <main> con role='main'
 - Hay que definir al menos una navegación con role='navegation'
 - Hay que definir role='banner' al Header
 - Hay que definir el footer cómo role='contentinfo'
 
 - Use Aria Labels for each Aria Role
 
## Language

- You need to define which language is your page

<html lang=en>

## Buttons

 - They need to have a text. We can hide it with overflow hidden and other css tricks
 

## Labels

 - Hay que esconderlos con absolute position y left -999px ya que sino los screen readers no los muestran.
 - Para ellos es bueno definir una nueva clase
 
## Agrupado de Elementos en Formularios
 - Al agrupar elementos en un <form> debemos usar <fieldset> con su <lengend>
 
 
## Widgets

 - Deben usar elementos ARIA
 - Muchas veces para arreglar los problemas tendrás que ponerte en contacto con el desarrollador tercero.


## Herramientas que me molan

Deque Axe Tool: Tool para Firefox, Chrome y Cmd:
https://www.deque.com/axe/
https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US

Google Lighthouse. Directo desde el Inspector
https://developers.google.com/web/updates/2018/01/devtools#a11y
https://developers.google.com/web/tools/lighthouse/#devtools

Google Lighthouse Original
https://chrome.google.com/webstore/detail/wcag-accessibility-audit/kpfleokokmllclahndmochhenmhncoej

Screen Reader - Solo windows
https://www.nvaccess.org/download/
