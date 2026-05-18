README 39568_19
Florencia Sosa 53511

Analizador desarrollado con ANTLR4 y JavaScript para la materia Sintaxis y Semántica de los Lenguajes

	Descripción:

El proyecto es un analizador para un sub-lenguaje de JavaScript utilizando ANTLR4. Realizado es Visual Studio Code, usando las tecnologías de JavaScript, Node,js y ANTLR.

El analizador realiza:

- Análisis léxico
- Análisis sintáctico
- Generación de tabla lexema-token
- Construcción del árbol sintáctico (no de forma grafica)

Funcionalidades del Proyecto

	1) Análisis Léxico
Reconocimiento de tokens definidos en la gramática:

ID (Identificadores de variables)
INT (Números enteros)
TEXT (Cadenas de texto entre comillas dobles)
SWITCH (Palabra reservada switch)
CASE (Palabra reservada case)
DEFAULT (Palabra reservada default)
OUTPUT (Palabra reservada output)

Símbolos estructurales: 
ASSIGNMENT (=), 
PUNTOYCOMA (;), 
DOSPUNTOS (:), paréntesis y llaves.

	2) Análisis Sintáctico
Validación y reconocimiento de las estructuras del lenguaje diseñado (Asignaciones, Outputs y estructuras de control Switch-Case).

Ejemplo de entrada válido (input.txt):
variable = 10;
output("Iniciando programa");

switch (variable) {
    case 10:
        output("La variable es diez");
    default:
        output("Valor no reconocido");
}

	3) Tabla de Lexemas y Árbol Sintáctico

Se puede visualizar en la consola:
Tabla de Lexemas y Tokens: Listado detallado que mapea cada palabra o símbolo detectado con su componente léxico correspondiente.
Árbol Sintáctico Concreto: Representación jerárquica de la estructura del código en formato texto plano estructurado (toStringTree).

	4) Traducción e Interpretación (Patrón Visitor)
Mediante la implementación de clases basadas en el Visitor generado por ANTLR, el proyecto realiza dos tareas independientes sobre el árbol:
Traductor (traductor.js): Recorre el árbol y genera el código fuente equivalente en JavaScript puro y limpio (añadiendo declaraciones de variables automáticas y sentencias break;).
Intérprete (interprete.js): Ejecuta la lógica directamente en tiempo de ejecución de manera interactiva (gestiona el almacenamiento en memoria y muestra las salidas).

Estructura del Proyecto
La estructura física de la carpeta de trabajo SysL contiene los siguientes archivos
SysL/
├── .antlr/
├── node_modules/
├── antlr-4.13.2-complete.jar
├── gramatica.g4
├── index.js
├── interprete.js
├── traductor.js
├── input.txt
├── ejemplo_correcto_1.txt
├── ejemplo_correcto_2.txt
├── ejemplo_error_lexico.txt
├── ejemplo_error_sintactico.txt
├── package-lock.json
├── package.json
└── README.md


Ejecución del Sistema
1) Compilar la gramática (Generar Lexer, Parser y Visitor)Para traducir las reglas del archivo .g4 a módulos nativos de JavaScript, se ejecuta el script de compilación mapeado en el package.json

(Internamente ejecuta de manera automatizada: java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -no-listener gramatica.g4)

2) Ejecutar el pipeline de análisis y ejecuciónPara procesar el archivo input.txt a través de todas las fases (Tokens $\rightarrow$ Árbol $\rightarrow$ Traducción $\rightarrow$ Ejecución), se inicia el programa principal

Ejemplo de Salida Real en Consola

Tabla de Lexemas y Tokens
Token: ID              | Lexema: variable
Token: ASSIGNMENT      | Lexema: =
Token: INT             | Lexema: 10
Token: PUNTOYCOMA      | Lexema: ;
Token: OUTPUT          | Lexema: output

Árbol sintáctico
(programa (instruccionSimple (sentenciaAsignacion variable = (constante 10) ;)) ...)

Traducción a JavaScript
let variable;

variable = 10;
console.log("Iniciando programa");
switch (variable) {
  case 10:
    console.log("La variable es diez");
    break;
  default:
    console.log("Valor no reconocido");
    break;
}

Ejecutando el programa
>> Iniciando programa
>> La variable es diez
--- Fin del programa ---