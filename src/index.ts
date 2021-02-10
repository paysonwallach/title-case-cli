import { Command, flags } from "@oclif/command";
import { titleCase } from "title-case";

class TitleCaseCli extends Command {
  static description = "Convert a given phrase to title case.";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
  };

  static strict = false;

  static args = [{ name: "phrase" }];

  async run() {
    this.parse(TitleCaseCli);
    this.log(
      titleCase(this.argv.length > 1 ? this.argv.join(" ") : this.argv[0])
    );
  }
}

export = TitleCaseCli;
