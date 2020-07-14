import { DiagnosticSeverity, Position} from "vscode-languageserver"
import { TextDocument } from "vscode-languageserver-textdocument"

const ics = {
    pattern:  /(?!(\*abstract|\*handle|\*source|\*noinherit))(\*[a-zA-Z]*)/g,
    code: "TyD-idc",
    diagnostic: {
        severity: DiagnosticSeverity.Error,
        range: {
            start: Position.create(0,0),
            end: Position.create(0,0)
        },
        message: "Invalid inheritance type, can only be: *abstract, *handle, *source or *noinherit"
    },
    setRange(e: TextDocument, m: RegExpExecArray) {
        this.diagnostic.message = m[0].trim() + " is a invalid inheritance type, can only be: *abstract, *handle, *source or *noinherit"
        this.diagnostic.range.start = e.positionAt(m.index),
        this.diagnostic.range.end = e.positionAt(m.index + m[0].length)
    }
}

const e = {
    ics: ics,
}

export = e;