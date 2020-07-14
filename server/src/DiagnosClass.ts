import { Diagnostic } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

export interface Diagno {
    pattern: RegExp,
    code: string,
    diagnostic: Diagnostic,
    setRange(e: TextDocument, m: RegExpExecArray): void
}