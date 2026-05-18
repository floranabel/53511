import gramaticaVisitor from './gramaticaVisitor.js';

class Traductor extends gramaticaVisitor {
    constructor() {
        super();
        this.variables = new Set(); // Para saber qué variables declarar
    }

    visitPrograma(ctx) {
        const instrucciones = ctx.instruccionSimple().map(inst => this.visit(inst)).join('\n');
        const declaraciones = [...this.variables].map(v => `let ${v};`).join('\n');
        return declaraciones + (declaraciones ? '\n\n' : '') + instrucciones;
    }

    visitSentenciaAsignacion(ctx) {
        const id = ctx.ID().getText();
        this.variables.add(id); // Registramos la variable
        const constante = ctx.constante().getText();
        return `${id} = ${constante};`;
    }

    visitSentenciaOutput(ctx) {
        // En JavaScript el output se traduce como console.log()
        const texto = ctx.TEXT().getText(); 
        return `console.log(${texto});`;
    }

    visitSentenciaSwitch(ctx) {
        const id = ctx.ID().getText();
        let resultado = `switch (${id}) {\n`;
        const casos = ctx.seccionCase();
        casos.forEach(caso => {
            const valor = caso.constante().getText();
            const insts = caso.instruccionSimple().map(inst => "    " + this.visit(inst)).join('\n');
            resultado += `  case ${valor}:\n${insts}\n    break;\n`;
        });
        if (ctx.seccionDefault()) {
            const insts = ctx.seccionDefault().instruccionSimple().map(inst => "    " + this.visit(inst)).join('\n');
            resultado += `  default:\n${insts}\n    break;\n`;
        }
        resultado += `}`;
        return resultado;
    }
}

export default Traductor;