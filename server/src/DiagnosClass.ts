import { Diagnostic, TextDocument } from "vscode-languageserver";

export interface Diagno {
    ignore?: boolean,
    pattern: RegExp,
    code: string,
    diagnostic: Diagnostic,
    setRange(e: TextDocument, m: RegExpExecArray): void
}