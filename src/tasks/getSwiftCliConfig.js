import chalk from 'chalk';

/**
 * Check whether the given MERN config is valid or not
 * @param config
 * @returns {boolean}
 */
const validateSwiftCliConfig = config => {
    let valid = true;
    const requiredKeys = ['blueprints'];
    const requiredBlueprintKeys = ['name', 'description', 'usage', 'files'];
    const requiredFileKeys = ['blueprint-path', 'target-path'];

    if (!requiredKeys.every(c => c in config)) {
        return false;
    }

    config.blueprints.forEach(b => {
        if (!requiredBlueprintKeys.every(c => c in b)) {
            valid = false;
        } else {
            if (b.files) {
                b.files.forEach(file => {
                    if (!requiredFileKeys.every(c => c in file)) {
                        valid = false;
                    }
                });
            }
        }
    });

    return valid;
};

export default () => {
    try {
        const swiftCliConfig = require(`${process.cwd()}/swiftCli.json`);

        if (!validateSwiftCliConfig(swiftCliConfig)) {
            console.log(chalk.red('Your swiftCli config is invalid.'));
            process.exit(1);
        }

        return swiftCliConfig;
    } catch (e) {
        console.log(chalk.red('Make sure your are in root directory of your swiftCli boilerplate.'));
        return process.exit(1);
    }
};
