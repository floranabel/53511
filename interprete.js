import gramaticaVisitor from './gramaticaVisitor.js';

class Interprete extends gramaticaVisitor {
    constructor() {
        super();
        // Esta es la "memoria" donde guardaremos las variables (como 'variable = 10')
        this.memoria = {}; 
    }

    // 1. Iniciar el programa
    visitPrograma(ctx) {
        ctx.instruccionSimple().forEach(inst => this.visit(inst));
        return null;
    }

    // 2. Ejecutar las asignaciones
    visitSentenciaAsignacion(ctx) {
        const nombreVariable = ctx.ID().getText();
        const valorVariable = ctx.constante().getText();
        this.memoria[nombreVariable] = valorVariable; // Guardamos en memoria
    }

    // 3. Ejecutar los outputs (imprimir en pantalla)
    visitSentenciaOutput(ctx) {
        // Obtenemos el texto y le quitamos las comillas dobles del principio y final
        const texto = ctx.TEXT().getText().replace(/"/g, ''); 
        console.log(">> " + texto);
    }

    // 4. Ejecutar el Switch
    visitSentenciaSwitch(ctx) {
        const nombreVariable = ctx.ID().getText();
        const valorVariable = this.memoria[nombreVariable]; // Buscamos cuánto vale la variable
        let entroEnCase = false;

        // Revisar cada 'case'
        const casos = ctx.seccionCase();
        for (let i = 0; i < casos.length; i++) {
            const caso = casos[i];
            const valorCaso = caso.constante().getText();

            // Si el valor coincide, ejecutamos las instrucciones de ese case
            if (valorVariable === valorCaso) {
                caso.instruccionSimple().forEach(inst => this.visit(inst));
                entroEnCase = true;
                break; // Salimos del switch
            }
        }

        // Si no entró en ningún case, revisamos si hay un 'default'
        if (!entroEnCase && ctx.seccionDefault()) {
            ctx.seccionDefault().instruccionSimple().forEach(inst => this.visit(inst));
        }
    }
}

export default Interprete;