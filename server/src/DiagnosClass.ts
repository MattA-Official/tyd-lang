import { Diagnostic, TextDocument } from "vscode-languageserver";

export interface Diagno {
    pattern: RegExp,
    code: string,
    diagnostic: Diagnostic,
    setRange(e: TextDocument, m: RegExpExecArray): void
}