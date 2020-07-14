import { DiagnosticSeverity, Position} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";

import { Diagno } from "./DiagnosClass";
import { lb, ls, rb, rs } from './bulk/brackets';
import { idc, nsc, nsq } from "./bulk/strings";
import { ics } from './bulk/class-stars';

const list: Diagno[] = [
    nsq, 
    nsc,
    idc,
    lb,
    ls,
    rb,
    rs,
    ics,
];

module.exports = list;