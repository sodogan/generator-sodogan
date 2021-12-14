"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");

const msg = yosay(`Welcome to the first-class generator!`);

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(msg);

    const prompts = [
      {
        type: "input",
        name: "GREET",
        message: "Would you like to greet me?",
        default: "sodogan",
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      console.log(props);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(__dirname + "/templates/template.txt"),
      this.destinationPath(`output.txt`),
      this.props
    );
  }
};
