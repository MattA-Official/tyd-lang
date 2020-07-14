import { DiagnosticSeverity, Position, TextDocument } from "vscode-languageserver";
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
const ncs = {
    ignore: false,
    pattern:  /'.*?'/g,
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
        if (m[0].includes("\\;")) this.ignore = true;
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
// /\".*?[;].*?\"
const list: Diagno[] = [nsq];

module.exports = list;