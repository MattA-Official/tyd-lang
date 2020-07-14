import { DiagnosticSeverity, Position } from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"
import { Diagno } from "../DiagnosClass"

const ls: Diagno = {
    pattern:  /"*?[^\\]\[.*?"/g,
    code: "TyD-els",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Square Bracket not escaped."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const rs: Diagno = {
    pattern:  /"*?[^\\]\].*?"/g,
    code: "TyD-ers",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Square Bracket not escaped."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const lb: Diagno = {
    pattern:  /"*?[^\\]{.*?"/g,
    code: "TyD-elb",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Brace (Curly Bracket) not escaped."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const rightbracket: Diagno = {
    pattern:  /"*?[^\\]}.*?"/g,
    code: "TyD-erb",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Brace (Curly Bracket) not escaped."
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}
const bracketExport = {
    rb: rightbracket,
    lb: lb,
    ls: ls,
    rs: rs
}

export = bracketExport;

