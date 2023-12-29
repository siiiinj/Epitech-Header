import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('epiheader.insertHeader', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const name = await vscode.window.showInputBox({
                prompt: 'Enter the project name:'
            });

            const description = await vscode.window.showInputBox({
                prompt: 'Enter file description:'
            });

            if (name !== undefined && description !== undefined) {
                const header = `/*
** EPITECH PROJECT, 2024
** ${name}
** File description:
** ${description}
*/`;
                editor.edit(editBuilder => {
                    editBuilder.insert(new vscode.Position(0, 0), header);
                });
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
