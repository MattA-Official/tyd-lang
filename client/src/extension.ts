import { readdirSync } from 'fs';
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext, languages, TextDocument, Position, CancellationToken, CompletionContext, CompletionItem, SnippetString, MarkdownString, CompletionItemKind, commands } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient';

let client: LanguageClient;

export interface commandImport {
	name: string,
	execute(context: ExtensionContext, client: LanguageClient): any,
}

export function activate(context: ExtensionContext) {
	//#region Language Server
	let serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};
	let clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'tyd' }, {scheme: 'file', language:'ttyd'}],
		synchronize: {
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	};
	client = new LanguageClient(
		'tyd-lang-server',
		'TyD Language Server',
		serverOptions,
		clientOptions
	);
	client.start();
	//#endregion
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}