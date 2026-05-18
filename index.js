import fs from 'fs';
import antlr4 from 'antlr4';
import gramaticaLexer from './gramaticaLexer.js';
import gramaticaParser from './gramaticaParser.js';
import Interprete from './Interprete.js';
import Traductor from './traductor.js';

// 1. Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');

// 2. Crear el stream de caracteres
const chars = new antlr4.InputStream(input);

// 3. Lexer: convierte caracteres en tokens
const lexer = new gramaticaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// 4. Parser: construye el árbol sintáctico
const parser = new gramaticaParser(tokens);
parser.buildParseTrees = true;

// 5. Construir el árbol
const tree = parser.programa();


//Tabla de tokens y lexemas
console.log('\n--- Tabla de Lexemas y Tokens ---');
tokens.tokens.forEach(token => {
    // Ignoramos el token EOF para que la tabla quede más limpia
    if (token.type !== antlr4.Token.EOF) {
        // Obtenemos el nombre del token usando el diccionario del lexer
        const nombreToken = gramaticaLexer.symbolicNames[token.type] || "DESCONOCIDO";
        const lexema = token.text;
        // Imprimimos formateado
        console.log(`Token: ${nombreToken.padEnd(15)} | Lexema: ${lexema}`);
    }
});
console.log('');


// 6. Imprimir el árbol sintáctico
console.log('--- Árbol sintáctico ---');
console.log(tree.toStringTree(parser.ruleNames, parser));


console.log('\n--- Traducción a JavaScript ---');
const traductor = new Traductor();
const codigoJS = traductor.visit(tree);
console.log(codigoJS);


// Ejecución interprete
console.log('\n--- Ejecutando el programa ---');
const visitante = new Interprete();
visitante.visit(tree);
console.log('--- Fin del programa ---');