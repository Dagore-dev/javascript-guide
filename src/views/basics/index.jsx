export default function Basics () {
    return(
        <article>
            <h2>Lo más básico</h2>

            <p>
                Javascript es un lenguaje de programación interpretado, de alto nivel y multiparadigma ideal para programar aplicaciones web en el lado del cliente e incluso en el servidor gracias a la existencia de Node.js. Los navegadores modernos integran un intérprete de Javascript, es decir, lo entienden sin realizar ninguna configuración adicional.
            </p>

            <section>
                <h3>Dónde se escribe el código</h3>

                <p>
                    La forma más sencilla para comenzar con Javascript es crear una carpeta con un index.html en su interior al que se le vincula un fichero main.js. Para hacer esto se introduce en la cabecera del documento HTML (en el head) la siguiente línea de código:
                </p>

                <figure>
                    <code>
                        <pre>&lt;!DOCTYPE html&gt;</pre>
                        <pre>&lt;html lang="es"&gt;</pre>
                        <pre>&lt;head&gt;</pre>
                        <pre>   &lt;meta charset="utf-8" /&gt;</pre>
                        <pre>   &lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;</pre>
                        <strong>
                            <pre>   &lt;script defer src="main.js"&gt;&lt;/script&gt;</pre>
                        </strong>
                        <pre>   &lt;title&gt;Solid App&lt;/title&gt;</pre>
                        <pre>&lt;/head&gt;</pre>
                        <pre>&lt;body&gt;</pre>
                        <pre>&lt;/body&gt;</pre>
                        <pre>&lt;/html&gt;</pre>
                    </code>
                    <figcaption><strong>Figura 1.</strong> Incluyendo Javascript a un archivo HTML.</figcaption>
                </figure>

                <p>
                    Para ampliar información sobre el uso de la etiqueta script puede visitar: <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script">The Script element - HTML: HyperText Markup Language | MDN</a>.
                </p>

                <p>
                    De esta forma el código fuente en el fichero main.js funcionará con nuestra web. Se utiliza la extensión Live server de VS Code para dar los primeros pasos con este lenguaje. Puede probar a escribir en su main.js <code>console.log(“Hola mundo!”);</code>, guardar los cambios e iniciar el live server: verá en la consola una entrada con <code>Hola mundo!</code> (F12 para desplegar las herramientas de desarrollo, ahí busque la consola).
                </p>

                <figure>
                    <img src="src/assets/images/holamundoenconsola.png" alt="Hola mundo desde la consola del navegador" />
                    <figcaption><strong>Figura 2.</strong> Hola mundo desde la consola del navegador.</figcaption>
                </figure>
            </section>
        </article>
    );
}