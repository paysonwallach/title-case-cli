"use strict";
const command_1 = require("@oclif/command");
const title_case_1 = require("title-case");
class TitleCaseCli extends command_1.Command {
    async run() {
        this.parse(TitleCaseCli);
        this.log(title_case_1.titleCase(this.argv.length > 1 ? this.argv.join(" ") : this.argv[0]));
    }
}
TitleCaseCli.description = "Convert a given phrase to title case.";
TitleCaseCli.flags = {
    version: command_1.flags.version({ char: "v" }),
    help: command_1.flags.help({ char: "h" }),
};
TitleCaseCli.strict = false;
TitleCaseCli.args = [{ name: "phrase" }];
module.exports = TitleCaseCli;
