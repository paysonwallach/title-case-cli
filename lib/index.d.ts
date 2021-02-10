import { Command } from "@oclif/command";
declare class TitleCaseCli extends Command {
    static description: string;
    static flags: {
        version: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    static strict: boolean;
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
export = TitleCaseCli;
