export default function Basics() {
  return (
    <article>
      <h2>Lo más básico</h2>

      <p>
        Javascript es un lenguaje de programación interpretado, de alto nivel y
        multiparadigma ideal para programar aplicaciones web en el lado del
        cliente e incluso en el servidor gracias a la existencia de Node.js. Los
        navegadores modernos integran un intérprete de Javascript, es decir, lo
        entienden sin realizar ninguna configuración adicional.
      </p>

      <section>
        <h3>Dónde se escribe el código</h3>

        <p>
          La forma más sencilla para comenzar con Javascript es crear una
          carpeta con un index.html en su interior al que se le vincula un
          fichero main.js. Para hacer esto se introduce en la cabecera del
          documento HTML (en el <code>head</code>) la siguiente línea de código:
        </p>

        <figure>
          <pre>
            <code>
              &lt;!DOCTYPE html&gt; &lt;html lang="es"&gt; &lt;head&gt; &lt;meta
              charset="utf-8" /&gt; &lt;meta name="viewport"
              content="width=device-width, initial-scale=1" /&gt;
              <strong>&lt;script defer src="main.js"&gt;&lt;/script&gt;</strong>
              &lt;title&gt;Solid App&lt;/title&gt; &lt;/head&gt; &lt;body&gt;
              &lt;/body&gt; &lt;/html&gt;
            </code>
          </pre>
          <figcaption>
            <strong>Figura 1.</strong> Incluyendo Javascript a un archivo HTML.
          </figcaption>
        </figure>

        <p>
          Para ampliar información sobre el uso de la etiqueta script puede
          visitar:{" "}
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
          >
            The Script element - HTML: HyperText Markup Language | MDN
          </a>
          .
        </p>

        <p>
          De esta forma el código fuente en el fichero main.js funcionará con
          nuestra web. Se utiliza la extensión Live server de VS Code para dar
          los primeros pasos con este lenguaje. Puede probar a escribir en su
          main.js <code>console.log(“Hola mundo!”);</code>, guardar los cambios
          e iniciar el live server: verá en la consola una entrada con{" "}
          <code>Hola mundo!</code> (F12 para desplegar las herramientas de
          desarrollo, ahí busque la consola).
        </p>

        <figure>
          <img
            src="src/assets/images/holamundoenconsola.png"
            alt="Hola mundo desde la consola del navegador"
          />
          <figcaption>
            <strong>Figura 2.</strong> Hola mundo desde la consola del
            navegador.
          </figcaption>
        </figure>
      </section>

      <section>
        <h3>Variables en Javascript</h3>

        <p>
          Javascript es un lenguaje con un tipado débil y dinámico. Esto
          significa que, a diferencia de Java o C#, en Javascript no tenemos un
          tipo de variable distinto para cada primitivo (no tenemos{" "}
          <code>int</code>, <code>bool</code>, <code>char</code>,{" "}
          <code>string</code>, etc ...). Estos tipos existen pero Javascript los
          induce por nosotros, además, no nos pone ningún impedimento si hacemos
          que una variable que tuviera un número, pase más tarde a guardar un
          string o viceversa.
        </p>

        <p>
          Debido a todo esto en Javascript las variables se declaran utilizando
          solo 3 palabras reservadas, a saber: <code>var</code>,{" "}
          <code>let</code> y <code>const</code>. Por ejemplo:
        </p>

        <figure>
          <pre>
            <code>
              var unNumero = 0; let otroNumero = 1; const tercerNumero = 2;
              //Sin embargo puedo asignar un tipo de dato distinto más tarde
              unNumero = "ola"; otroNumero = "k ase";
            </code>
          </pre>
          <figcaption>
            <strong>Figura 3.</strong> Ejemplo de variables en Javascript.
          </figcaption>
        </figure>

        <p>
          Actualmente el uso de var no está recomendado, se utiliza let cuando
          se pretende cambiar el valor de lo que se guarda en la variable o
          const si el valor es de solo lectura. Para ampliar conocimientos sobre
          las variables en Javascript puede visitar:
        </p>

        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
              target="_blank"
            >
              var - JavaScript | MDN
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"
              target="_blank"
            >
              let - JavaScript | MDN
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
              target="_blank"
            >
              const - JavaScript | MDN
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>Operadores en Javascript</h3>

        <p>
          Los operadores básicos en Javascript son muy similares a los de todos
          los lenguajes relacionados con C (como C# o Java).
        </p>

        <ul>
          <li>
            Los operadores aritméticos son <code>+</code>, <code>-</code>,{" "}
            <code>/</code>, <code>*</code>, <code>%</code>.
          </li>
          <li>
            Los operadores relacionales son <code>&lt;</code>, <code>&gt;</code>
            , <code>&lt;=</code>, <code>&gt;=</code>
          </li>
          <li>
            Los operadores de igualdad son <code>===</code> y <code>!==</code>.
          </li>
          <li>
            Los operadores lógicos binarios son <code>&amp;&amp;</code> y{" "}
            <code>||</code>.
          </li>
        </ul>
      </section>

      <section>
        <h3>Estructuras de control en Javascript</h3>

        <p>
          Se puede indicar al lenguaje que ejecute ciertas instrucciones si se
          cumple una condición y que repita unas instrucciones de distintas
          formas. Para probar estas características del lenguaje se sigue
          utilizando la instrucción <code>console.log()</code> mostrada
          previamente.
        </p>

        <p>
          La estructura es tan similar a las que se usan en C# que me limito a
          poner ejemplos:
        </p>

        <section>
          <h4>Condicionales</h4>

          <figure>
            <pre>
              <code>
                const test = 3; if (test % 2 === 0) &lbrace; console.log("Test
                es par."); &rbrace; else &lbrace; console.log("Test es impar.");
                &rbrace;
              </code>
            </pre>

            <figcaption>
              <strong>Figura 4.</strong> Ejemplo de bloque <code>if</code> /{" "}
              <code>else</code>.
            </figcaption>
          </figure>

          <figure>
            <pre>
              <code>
                const nota = 7.5; if (nota &lt; 5) &lbrace;
                console.log("Suspenso."); &rbrace; else if (nota &lt; 6)
                &lbrace; console.log("Suficiente."); &rbrace; else if (nota &lt;
                7) &lbrace; console.log("Bien."); &rbrace; else if (nota &lt; 8)
                &lbrace; console.log("Notable."); &rbrace; else &lbrace;
                console.log("Sobresaliente.") &rbrace; //Escribe en consola
                Notable.
              </code>
            </pre>

            <figcaption>
              <strong>Figura 5.</strong> Ejemplo de bloque <code>else if</code>.
            </figcaption>
          </figure>
        </section>

        <section>
          <h4>Bucles</h4>

          <figure>
            <pre>
              <code>
                let num = 255; let resultado = 0; while (num &gt; 1) &lbracket;
                num /= 10; resultado++; &rbracket; console.log("255 tiene " +
                resultado + " cifras"); //Escribe en consola: 255 tiene 3
                cifras.
              </code>
            </pre>

            <figcaption>
              <strong>Figura 6.</strong> Ejemplo de bucle indefinido (
              <code>while</code>).
            </figcaption>
          </figure>

          <figure>
            <pre>
              <code>
                const max = 100; for (let i = 0; i &lt; max; i++) &lbracket; if
                (i % 3 === 0) console.log(i); &rbracket; //Escribe en consola
                los múltiplos de 3 desde 0 hasta 100.
              </code>
            </pre>

            <figcaption>
              <strong>Figura 7.</strong> Ejemplo de bucle definido (
              <code>for</code>).
            </figcaption>
          </figure>
        </section>

        <section>
          <h4>Funciones</h4>

          <p>
            Las funciones en Javascript se declaran con la palabra reservada
            function. En Javascript no se especifica el tipo de retorno de la
            función, tampoco se necesita indicar el tipo de los argumentos.
          </p>

          <figure>
            <pre>
              <code>
                function metrosAKm ( metros ) &lbracket; return metros / 1000;
                &rbracket; const ejemplo = metrosAKm(2000); console.log("2000
                metros son " + ejemplo + " km".) //Escribe en consola: 2000
                metros son 2 km.
              </code>
            </pre>

            <figcaption>
              <strong>Figura 8.</strong> Ejemplo de función. Función{" "}
              <em>metrosAKm</em> que recibe un número (metros) y devuelve su
              conversión a kilómetros.
            </figcaption>
          </figure>

          <p>
            La función así declarada sigue existiendo después de ejecutarse.
            Puede probar a introducir en la consola <code>metrosAKm(1500)</code>{" "}
            y obtendrá un registro con el resultado.
          </p>

          <p>
            Las funciones pueden ser más complicadas, por ejemplo, se puede
            realizar en Javascript un algoritmo para calcular el número de
            cifras de un número entero:
          </p>

          <figure>
            <pre>
              <code>
                function numeroCifras ( numero ) &lbracket; let resultado = 0;
                if (numero === 0) &lbracket; resultado++; &rbracket; else
                &lbracket; numero = Math.abs(numero); while (numero &gt; 1)
                &lbracket; numero /= 10; resultado++; &rbracket; &rbracket;
                return resultado; &rbracket;
              </code>
            </pre>

            <figcaption>
              <strong>Figura 9.</strong> Función <em>numeroCifras</em>, que
              recibe un número entero y devuelve el número de cifras que tiene.
            </figcaption>
          </figure>
        </section>
      </section>
    </article>
  );
}
