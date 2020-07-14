import { DiagnosticSeverity, Position} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

import { Diagno } from "./DiagnosClass";

const nsq = {
    pattern:  /'.*?'/g,
    code: "TyD-nsq",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "TyD does not have support for single quotation marks, this will throw an error when a software tries to parse the TyD file."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const nsc = {
    pattern:  /".*?((?!\\;);).*?"/g,
    code: "TyD-ncs",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Semi-colon not escaped in string."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const nsb = {
    pattern:  /"(.*?((?!\\\[)\[).*?)|(.*?((?!\\\])\]).*?)"/g,
    code: "TyD-nsb",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Square bracket(s) not escaped in string."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const ncb = {
    pattern:  /"(.*?((?!\\\{){).*?)|(.*?((?!\\\})}).*?)"/g,
    code: "TyD-ncb",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Curly bracket(s) not escaped in string."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const idc = {
    pattern:  /".*?((?!\\\#)#).*?"/g,
    code: "TyD-idc",
    diagnostic: {
        severity: DiagnosticSeverity.Warning,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Incidental Comment?"
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const ibs = {
    pattern:  /".*?((?!\\\\)\\[\S]).*?"/g,
    code: "TyD-idc",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Invalid escape character. If you wanted the \"\\\" character by itself, use \"\\\\\" instead.",
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const list: Diagno[] = [
    nsq, 
    nsc,
    nsb,
    ncb,
    ibs,
    idc
];

module.exports = list;