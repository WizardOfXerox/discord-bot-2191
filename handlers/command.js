const { readdirSync } = require("fs");
const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const gradient = require('gradient-string');
const figlet = require('figlet');

//const ascii = require("ascii-table");
var { AsciiTable3, AlignmentEnum } = require('ascii-table3');

// Create a new Ascii table
//let table = new ascii("Commands");
//table.setHeading(" Command ", " Load status ");

module.exports = client => {
    let table = new AsciiTable3(`Commands`)
    // Read every commands subfolder
    readdirSync("./commands/").forEach(dir => {
      // Filter so we only have .js command files
      const commands = readdirSync(`./commands/${dir}/`).filter(file =>
        file.endsWith(".js")
                                                               );
      // Loop over the commands, and add all of them to a collection
      // If there's no name found, prevent it from returning an error,
      // By using a cross in the table we made.
      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`);

        if (pull.name) {
          client.commands.set(pull.name, pull);
          //table.addRow(file, "✅");
          table.setHeading('Command', 'Load Status')
            table.setStyle(`ascii-girder`)
                table.addRowMatrix([
                  [chalk.yellowBright(file), chalk.greenBright("Enabled ✔")]
                ]);
        } else {
          table.setHeading('Command', 'Load Status')
            table.setStyle(`ascii-girder`)
              table.addRowMatrix([
                [chalk.yellowBright(file), chalk.red("Disabled ✖")]
              ]);
          continue;
        }
        // If there's an aliases key, read the aliases.
        if (pull.aliases && Array.isArray(pull.aliases))
          pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
      }
    })
    // Log the table
  //console.log(gradient.pastel(table.toString()));
  console.log(chalk.blueBright(table.toString()));
}
