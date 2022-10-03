La web puede visitarse desplegada en el siguiente link: https://guileless-kataifi-7075de.netlify.app/


Para este proyecto se necesitaba crear una aplicación web que consumiera datos de la API de 'pokeapi.co' y tuviera cuatro vistas con distintas funcionalidades, creada con React funcional, además debía utilizar SASS para los estilos, debounce para el input de búsqueda y un template de formulario.

La estructura de la página es el estandar "Header-Main-Footer", en el Header tenemos un navbar con tres links a las distintas vistas.

En la vista "Home" encontramos un listado de todos los pokemons, representados en tarjetas y con su nombre, si pinchamos en alguno de ellos nos llevará a la cuarta vista, la vista detalle del pokemon seleccionado.


![Home](https://user-images.githubusercontent.com/103537170/193199589-41772df1-b42d-4127-8cb7-1fdd671d5937.png)

La siguiente vista es la de creación de un pokemon, en ella se encuentra un formulario de registro en el que se piden unos datos, el formulario tiene una validación concreta que se pedía en el proyecto y está implementado con React Hook Form, si introducimos correctamente los datos, al hacer una nueva búsqueda nos aparecerá el pokemon creado junto a los demás.


![Formulario](https://user-images.githubusercontent.com/103537170/193199921-6a6dcf7c-80e3-49d3-9dfe-cda0ca50bdca.png)


La última vista del navbar es la de búsqueda de pokemon, esta es una vista simple con un input de búsqueda, que lleva implementado un debouncer, cuando el usuario para de escribir, a los 1,5 segundos se lanza la búsqueda a la API y se recoge el pokemon buscado, si no existe, se lanzará un modal de error avisando de ello


![buscar](https://user-images.githubusercontent.com/103537170/193200250-30530679-2c61-4bb7-812f-16c95d98509a.png)


![buscar 2](https://user-images.githubusercontent.com/103537170/193200618-1c919deb-ab10-47ce-b12c-e6c527eb4c1e.png)


Por último tenemos la vista detalle, a la que se accede o bien a través de la Home pinchando en una tarjeta de pokemon, o bien a través del link incluido en la tarjeta del pokemon buscado con el buscador, en esta vista se ofrecen distintos datos consumidos de la API así como una imagen en buena calidad del mismo.


![detalle](https://user-images.githubusercontent.com/103537170/193200710-6b661c49-c2eb-4480-a9e6-81736fdd8157.png)

Con este proyecto he profundizado en el tratamiento de datos a una API, asentado los conocimientos de React funcional así como el manejo de estilos con SASS y he utilizado herramientas como el debounce o un hook externo para el formulario y el fetch.

