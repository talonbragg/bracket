var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should make a cli', function() {

            var package = require("/../package.json");

            const init = () => {
                console.log("Thanks for using bracket, a flexible command line tool. For more infor mation on commands, type $ bracket -h or --help in your cmd session. If you already know how to use bracket, carry on! :)" + space(1));
            }

            const h = () => {
                console.log("Initialize bracket:");
                console.log("   Go to your directory and type $ bracket init");
                console.log("Usage:");
                console.log("   bracket [command] [quantity]");
                console.log("Commands:");
                console.log("   -h, --help\tGives you this amazing help section");
                console.log("   -v, --version\tPrints the version of bracket you currently have");
                console.log("   -li, --license\tDisplays out beautiful license");
                console.log("   -c, --contribute\tContribute to our beautiful tool plz");
                exit();
            }

            const help = () => {
                console.log("Initialize bracket:");
                console.log("   Go to your directory and type $ bracket init");
                console.log("Usage:");
                console.log("   bracket [command] [quantity]");
                console.log("Commands:");
                console.log("   -h, --help\tGives you this amazing help section");
                console.log("   -v, --version\tPrints the version of bracket you currently have");
                console.log("   -li, --license\tDisplays out beautiful license");
                console.log("   -c, --contribute\tContribute to our beautiful tool plz");
                exit();
            }

            const l = () => {
                console.log("bracket is relased under the MIT license.");
                console.log("Put license here...");
                exit();
            }

            const license = () => {
                console.log("bracket is relased under the MIT license. You can check it out on GitHub.");
                console.log("Put license here...");
                exit();
            }

            const c = () => {
                console.log("You can contribute to bracket in two ways:");
                console.log("   1. GitHub, bracket is availible for free on GitHub at https://github.com/talonbragg/bracket");
                console.log("   2. Support us on Paypal ;)");
                exit();
            }

            const contribute = () => {
                console.log("You can contribute to bracket in two ways:");
                console.log("   1. GitHub, bracket is availible for free on GitHub at https://github.com/talonbragg/bracket");
                console.log("   2. Support us on Paypal ;)");
                exit();
            }

            const v = () => {
                console.log(package.version);
                exit();
            }

            const version = () => {
                console.log(package.version);
                exit();
            }

        });
    });
});
