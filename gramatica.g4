grammar gramatica;

//Gramatica
programa: instruccionSimple* ;
instruccionSimple
    : sentenciaSwitch
    | sentenciaAsignacion
    | sentenciaOutput
    ;
sentenciaSwitch
    : SWITCH PARENIZQ ID PARENDER LLAVEABRE seccionCase* seccionDefault? LLAVECIERA
    ;
seccionCase
    : CASE constante DOSPUNTOS instruccionSimple*
    ;
seccionDefault
    : DEFAULT DOSPUNTOS instruccionSimple*
    ;
sentenciaAsignacion
    : ID ASSIGNMENT constante PUNTOYCOMA
    ;
sentenciaOutput
    : OUTPUT PARENIZQ TEXT PARENDER PUNTOYCOMA
    ;
constante
    : INT
    | TEXT
    ;


//TOKENS
//Palabras reservadas
SWITCH: 'switch';
CASE: 'case';
DEFAULT: 'default';
OUTPUT: 'output';

//simbolos, números y letras
PARENIZQ: '(';
PARENDER: ')';
LLAVEABRE: '{';
LLAVECIERA: '}';
DOSPUNTOS: ':';
PUNTOYCOMA: ';';
ASSIGNMENT: '=';
TEXT: '"'~["]* '"';
ID: [a-zA-Z] [a-zA-Z0-9_]*;
INT: [0-9]+; 
WS: [ \t\r\n]+ -> skip ;