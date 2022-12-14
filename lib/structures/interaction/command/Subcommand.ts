import { BaseSlashCommandContext } from "../../context";
import { Command, CommandOptions } from "./Command";

export abstract class Subcommand<C extends Command = Command> {
    public constructor(public readonly command: C, public readonly options: SubcommandOptions) { }

    public abstract run(context: BaseSlashCommandContext): Promise<void>;
}

export type SubcommandOptions = Omit<CommandOptions, "channel" | "contextMenuType" | "enableInDms">;
