// Generated from c:/Users/Florencia Anabel/OneDrive/Desktop/SySL/gramatica.G4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
import gramaticaVisitor from './gramaticaVisitor.js';

const serializedATN = [4,1,15,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,1,1,1,1,1,3,1,
26,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,2,3,2,40,8,
2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,1,4,1,4,5,4,56,
8,4,10,4,12,4,59,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,
1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,2,0,12,12,14,14,72,0,19,1,0,0,0,2,25,1,
0,0,0,4,27,1,0,0,0,6,43,1,0,0,0,8,52,1,0,0,0,10,60,1,0,0,0,12,65,1,0,0,0,
14,71,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,0,0,0,19,
20,1,0,0,0,20,1,1,0,0,0,21,19,1,0,0,0,22,26,3,4,2,0,23,26,3,10,5,0,24,26,
3,12,6,0,25,22,1,0,0,0,25,23,1,0,0,0,25,24,1,0,0,0,26,3,1,0,0,0,27,28,5,
1,0,0,28,29,5,5,0,0,29,30,5,13,0,0,30,31,5,6,0,0,31,35,5,7,0,0,32,34,3,6,
3,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,39,1,0,0,
0,37,35,1,0,0,0,38,40,3,8,4,0,39,38,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,
41,42,5,8,0,0,42,5,1,0,0,0,43,44,5,2,0,0,44,45,3,14,7,0,45,49,5,9,0,0,46,
48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,7,
1,0,0,0,51,49,1,0,0,0,52,53,5,3,0,0,53,57,5,9,0,0,54,56,3,2,1,0,55,54,1,
0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,9,1,0,0,0,59,57,1,0,0,
0,60,61,5,13,0,0,61,62,5,11,0,0,62,63,3,14,7,0,63,64,5,10,0,0,64,11,1,0,
0,0,65,66,5,4,0,0,66,67,5,5,0,0,67,68,5,12,0,0,68,69,5,6,0,0,69,70,5,10,
0,0,70,13,1,0,0,0,71,72,7,0,0,0,72,15,1,0,0,0,6,19,25,35,39,49,57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.G4";
    static literalNames = [ null, "'switch'", "'case'", "'default'", "'output'", 
                            "'('", "')'", "'{'", "'}'", "':'", "';'", "'='" ];
    static symbolicNames = [ null, "SWITCH", "CASE", "DEFAULT", "OUTPUT", 
                             "PARENIZQ", "PARENDER", "LLAVEABRE", "LLAVECIERA", 
                             "DOSPUNTOS", "PUNTOYCOMA", "ASSIGNMENT", "TEXT", 
                             "ID", "INT", "WS" ];
    static ruleNames = [ "programa", "instruccionSimple", "sentenciaSwitch", 
                         "seccionCase", "seccionDefault", "sentenciaAsignacion", 
                         "sentenciaOutput", "constante" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramaticaParser.ruleNames;
        this.literalNames = gramaticaParser.literalNames;
        this.symbolicNames = gramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramaticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0)) {
	            this.state = 16;
	            this.instruccionSimple();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccionSimple() {
	    let localctx = new InstruccionSimpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramaticaParser.RULE_instruccionSimple);
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.sentenciaSwitch();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.sentenciaAsignacion();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 24;
	            this.sentenciaOutput();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentenciaSwitch() {
	    let localctx = new SentenciaSwitchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramaticaParser.RULE_sentenciaSwitch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(gramaticaParser.SWITCH);
	        this.state = 28;
	        this.match(gramaticaParser.PARENIZQ);
	        this.state = 29;
	        this.match(gramaticaParser.ID);
	        this.state = 30;
	        this.match(gramaticaParser.PARENDER);
	        this.state = 31;
	        this.match(gramaticaParser.LLAVEABRE);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 32;
	            this.seccionCase();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 38;
	            this.seccionDefault();
	        }

	        this.state = 41;
	        this.match(gramaticaParser.LLAVECIERA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seccionCase() {
	    let localctx = new SeccionCaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramaticaParser.RULE_seccionCase);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(gramaticaParser.CASE);
	        this.state = 44;
	        this.constante();
	        this.state = 45;
	        this.match(gramaticaParser.DOSPUNTOS);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0)) {
	            this.state = 46;
	            this.instruccionSimple();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seccionDefault() {
	    let localctx = new SeccionDefaultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramaticaParser.RULE_seccionDefault);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(gramaticaParser.DEFAULT);
	        this.state = 53;
	        this.match(gramaticaParser.DOSPUNTOS);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0)) {
	            this.state = 54;
	            this.instruccionSimple();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentenciaAsignacion() {
	    let localctx = new SentenciaAsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramaticaParser.RULE_sentenciaAsignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(gramaticaParser.ID);
	        this.state = 61;
	        this.match(gramaticaParser.ASSIGNMENT);
	        this.state = 62;
	        this.constante();
	        this.state = 63;
	        this.match(gramaticaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentenciaOutput() {
	    let localctx = new SentenciaOutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramaticaParser.RULE_sentenciaOutput);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(gramaticaParser.OUTPUT);
	        this.state = 66;
	        this.match(gramaticaParser.PARENIZQ);
	        this.state = 67;
	        this.match(gramaticaParser.TEXT);
	        this.state = 68;
	        this.match(gramaticaParser.PARENDER);
	        this.state = 69;
	        this.match(gramaticaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gramaticaParser.RULE_constante);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

gramaticaParser.EOF = antlr4.Token.EOF;
gramaticaParser.SWITCH = 1;
gramaticaParser.CASE = 2;
gramaticaParser.DEFAULT = 3;
gramaticaParser.OUTPUT = 4;
gramaticaParser.PARENIZQ = 5;
gramaticaParser.PARENDER = 6;
gramaticaParser.LLAVEABRE = 7;
gramaticaParser.LLAVECIERA = 8;
gramaticaParser.DOSPUNTOS = 9;
gramaticaParser.PUNTOYCOMA = 10;
gramaticaParser.ASSIGNMENT = 11;
gramaticaParser.TEXT = 12;
gramaticaParser.ID = 13;
gramaticaParser.INT = 14;
gramaticaParser.WS = 15;

gramaticaParser.RULE_programa = 0;
gramaticaParser.RULE_instruccionSimple = 1;
gramaticaParser.RULE_sentenciaSwitch = 2;
gramaticaParser.RULE_seccionCase = 3;
gramaticaParser.RULE_seccionDefault = 4;
gramaticaParser.RULE_sentenciaAsignacion = 5;
gramaticaParser.RULE_sentenciaOutput = 6;
gramaticaParser.RULE_constante = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_programa;
    }

	instruccionSimple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionSimpleContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionSimpleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionSimpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_instruccionSimple;
    }

	sentenciaSwitch() {
	    return this.getTypedRuleContext(SentenciaSwitchContext,0);
	};

	sentenciaAsignacion() {
	    return this.getTypedRuleContext(SentenciaAsignacionContext,0);
	};

	sentenciaOutput() {
	    return this.getTypedRuleContext(SentenciaOutputContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterInstruccionSimple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitInstruccionSimple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitInstruccionSimple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaSwitchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_sentenciaSwitch;
    }

	SWITCH() {
	    return this.getToken(gramaticaParser.SWITCH, 0);
	};

	PARENIZQ() {
	    return this.getToken(gramaticaParser.PARENIZQ, 0);
	};

	ID() {
	    return this.getToken(gramaticaParser.ID, 0);
	};

	PARENDER() {
	    return this.getToken(gramaticaParser.PARENDER, 0);
	};

	LLAVEABRE() {
	    return this.getToken(gramaticaParser.LLAVEABRE, 0);
	};

	LLAVECIERA() {
	    return this.getToken(gramaticaParser.LLAVECIERA, 0);
	};

	seccionCase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionCaseContext);
	    } else {
	        return this.getTypedRuleContext(SeccionCaseContext,i);
	    }
	};

	seccionDefault() {
	    return this.getTypedRuleContext(SeccionDefaultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSentenciaSwitch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSentenciaSwitch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSentenciaSwitch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionCaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_seccionCase;
    }

	CASE() {
	    return this.getToken(gramaticaParser.CASE, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DOSPUNTOS() {
	    return this.getToken(gramaticaParser.DOSPUNTOS, 0);
	};

	instruccionSimple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionSimpleContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionSimpleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSeccionCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSeccionCase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSeccionCase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionDefaultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_seccionDefault;
    }

	DEFAULT() {
	    return this.getToken(gramaticaParser.DEFAULT, 0);
	};

	DOSPUNTOS() {
	    return this.getToken(gramaticaParser.DOSPUNTOS, 0);
	};

	instruccionSimple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionSimpleContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionSimpleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSeccionDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSeccionDefault(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSeccionDefault(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaAsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_sentenciaAsignacion;
    }

	ID() {
	    return this.getToken(gramaticaParser.ID, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(gramaticaParser.ASSIGNMENT, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(gramaticaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSentenciaAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSentenciaAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSentenciaAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaOutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_sentenciaOutput;
    }

	OUTPUT() {
	    return this.getToken(gramaticaParser.OUTPUT, 0);
	};

	PARENIZQ() {
	    return this.getToken(gramaticaParser.PARENIZQ, 0);
	};

	TEXT() {
	    return this.getToken(gramaticaParser.TEXT, 0);
	};

	PARENDER() {
	    return this.getToken(gramaticaParser.PARENDER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(gramaticaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSentenciaOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSentenciaOutput(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSentenciaOutput(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_constante;
    }

	INT() {
	    return this.getToken(gramaticaParser.INT, 0);
	};

	TEXT() {
	    return this.getToken(gramaticaParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




gramaticaParser.ProgramaContext = ProgramaContext; 
gramaticaParser.InstruccionSimpleContext = InstruccionSimpleContext; 
gramaticaParser.SentenciaSwitchContext = SentenciaSwitchContext; 
gramaticaParser.SeccionCaseContext = SeccionCaseContext; 
gramaticaParser.SeccionDefaultContext = SeccionDefaultContext; 
gramaticaParser.SentenciaAsignacionContext = SentenciaAsignacionContext; 
gramaticaParser.SentenciaOutputContext = SentenciaOutputContext; 
gramaticaParser.ConstanteContext = ConstanteContext; 
