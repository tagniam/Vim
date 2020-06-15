import * as vscode from 'vscode';

import * as node from '../node';

export class OnlyCommand extends node.CommandBase {
  protected _arguments: {};

  constructor(args: {}) {
    super();
    this._arguments = args;
  }

  get arguments(): {} {
    return this._arguments;
  }

  async execute(): Promise<void> {
    await Promise.all([
      vscode.commands.executeCommand('workbench.action.closeEditorsInOtherGroups'),
      vscode.commands.executeCommand('workbench.action.maximizeEditor'),
      vscode.commands.executeCommand('workbench.action.closePanel'),
    ]);
  }
}
