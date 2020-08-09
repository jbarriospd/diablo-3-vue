# Instala las dependencias del proyecto
npm install
# Ejecuta el entorno de desarrollo
npm run serve
# Compila y construye para producción
npm run build
# Ejecuta los test unitarios
npm run test:unit
# Ejecuta los test end-2-end
npm run test:e2e
# Linting y corrección de archivos
npm run lint
## ¿Porque no utilizar el modo historia?
Puedes usarlo o puedes no usarlo. para mí es más cómodo no usarlo ya que no requiere de ninguna configuración adicional en el servidor. Lo único que haces al no usarlo es dejar que el hashtag # aparezca en la url de tu aplicación. Como no supone ninguna molestia, yo personalmente lo prefiero así. Si por estética prefieres tener la URL limpia, puedes usarlo pero en el servidor en el que lo vayas a desplegar vas a tener que hacer una configuración extra.
## Los formularios de HTML tienen 3 tipos de encoding:
- application/x-www-form-urlencoded (valor por defecto)
- multipart/form-data (este es el que hemos usado)
- text/plain (no deberías usar este nunca)
## Iniciando con vuex
Existen varias formas de hacer esto (guardar el token). Vamos a aprender a llamar a una acción (dispatch) de Vuex desde la instancia principal de Vue, que aunque no es la mejor forma de hacerlo, a efectos prácticos es muy efectivo.
Estaremos usando namespaces, para que nos sea más fácil gestionar el estado en caso de que nuestro proyecto crezca, por lo tanto, más escalable.
## Ulitizar o no un action
Hay un caso de uso en el que es requerido usar las actions: cuando quieres ejecutar código asíncrono.
Si no necesitas asynchronous code, mejor evita el paso de crear una action.
Yo por norma general, intento llamar a la mutación directamente. Si requiero algo de código asíncrono, entonces es obligatorio usar una acción. Pero puedes llamar a la “action” y luego llamar a la mutación, aunque es un poco absurdo si no te aporta nada.
## Como saber que debo dividir mi componente en otro mas pequeño
Pues cuanto más pequeño sea tu componente mejor, pues luego, cuando tengas que testear tu componente es más sencillo.
Hay varios “indicadores” para saber cuando un componente debería ser divido en algo más pequeño. El indicador que casi nunca falla es este: “Si en alguna parte de la aplicación no puedes usar una computed property y te ves obligado a usar un method porque necesitas pasarle parámetros, entonces necesitas un componente más pequeño”. Obviamente esto no aplica a botones o acciones que necesitan de un método. Durante el curso no pude atomizar al máximo todos los componentes porque se hacía muy pesado para escribir (y por tanto para leer), y en muchos casos no se han llegado a crear componentes pequeños. Pero desde mi experiencia, cuanto más pequeños mejor. De todas formas, lo iras viendo con la experiencia. Tampoco se trata de que cada etiqueta HTML la metas en un componente 😅. Hay que ser prácticos, pero por norma general, cuanto más sencillo el componente, mejor.