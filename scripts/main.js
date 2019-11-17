// debería ver aparecer el cuadro de mensaje cuando hace clic en el botón.
/* Quizás te estés preguntando por qué no hemos incluido los paréntesis después del nombre de la función.
Esto se debe a que no queremos llamar a la función inmediatamente, solo después de hacer clic en el botón.
Si intentas cambiar la línea a y al guardar y volver a cargar, verás que aparece el cuadro de mensaje sin hacer clic en el botón.
Los paréntesis en este contexto a veces se denominan "operador de invocación de función".
Solo los utiliza cuando desea ejecutar la función inmediatamente en el ámbito actual.
Del mismo modo, el código dentro de la función anónima no se ejecuta inmediatamente, ya que está dentro del alcance de la función.
*/
var btn = document.querySelector('button');
btn.onclick = function() { // antes btn.onclick = displayMessage;
  displayMessage('Woo, this is a different message'); //Si queremos especificar parámetros dentro de paréntesis para la función a la que estamos llamando, no podemos llamarla directamente, necesitamos colocarla dentro de una función anónima para que no esté en el ámbito inmediato y, por lo tanto, no se llame de inmediato. Ahora no se llamará hasta que se haga clic en el botón.

};

function displayMessage(msgText, msgType) { // tengamos en cuenta que primero llamamos a la funcion sin parametros para invocar el mismo mensaje siempre
/* La primera línea usa una función DOM API llamada document.querySelector()para seleccionar el <html>elemento y almacenar
una referencia a él en una variable llamada html, para que podamos hacer las cosas más adelante;
*/
  var html = document.querySelector('html');
/* La siguiente sección usa otra función DOM API llamada document.createElement()para crear un <div>elemento y almacenar una
referencia a él en una variable llamada panel. Este elemento será el contenedor externo de nuestro cuadro de mensaje.
*/
  var panel = document.createElement('div');
/* Luego usamos otra función DOM API llamada Element.setAttribute()para establecer un classatributo
en nuestro panel con un valor de msgBox. Esto es para facilitar el estilo del elemento:
si observa el CSS en la página, verá que estamos utilizando un .msgBoxselector de clase para diseñar el cuadro de mensaje y su contenido.
*/
  panel.setAttribute('class', 'msgBox');
/*Finalmente, llamamos a una función DOM llamada Node.appendChild()a la htmlvariable que almacenamos anteriormente,
que anida un elemento dentro del otro como un elemento secundario. Especificamos el panel <div>como el hijo que queremos agregar dentro
del <html>elemento. Necesitamos hacer esto, ya que el elemento que creamos no solo aparecerá en la página por sí solo,
debemos especificar dónde colocarlo.
*/
  html.appendChild(panel);
/*Las dos secciones siguientes hacen uso de la misma createElement()y de appendChild()las funciones
que ya hemos visto para crear dos nuevos elementos - una <p>y una <button>- e insertarlos en la página como los niños del panel <div>.
Utilizamos su Node.textContentpropiedad, que representa el contenido de texto de un elemento, para insertar un mensaje dentro del párrafo
y una 'x' dentro del botón. Este botón será lo que se debe hacer clic / activar cuando el usuario quiera cerrar el cuadro de mensaje.
*/

  var msg = document.createElement('p');
  msg.textContent = msgText; // al principio probamos con un mesanje predeterminado. luego elegimosque texto colocar
  panel.appendChild(msg);

  var closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);
/*Finalmente, usamos un GlobalEventHandlers.onclickcontrolador de eventos para que, cuando se hace clic en el botón,
se ejecute algún código para eliminar todo el panel de la página, para cerrar el cuadro de mensaje.
*/
/*Brevemente, el onclickcontrolador es una propiedad disponible en el botón (o, de hecho, cualquier elemento de la página) que se puede
establecer en una función para especificar qué código ejecutar cuando se hace clic en el botón. Aprenderá mucho más sobre esto en nuestro
artículo sobre eventos posteriores. Estamos haciendo que el onclickcontrolador sea igual a una función anónima, que contiene el código para
ejecutar cuando se hace clic en el botón. La línea dentro de la función usa la función Node.removeChild()DOM API para especificar que deseamos
eliminar un elemento secundario específico del elemento HTML, en este caso el panel <div>.
*/
  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }

}
// Básicamente, todo este bloque de código genera un bloque de HTML que se ve así, y lo inserta en la página:
/*
<p>This is a message box</p>
<button>x</button>
</div>
*/
