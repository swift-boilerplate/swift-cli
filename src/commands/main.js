import program from 'commander';
import pjson from '../../package.json';

program
    .version(pjson.version)
    .option('-v, --version', 'check version')
    .description('Initialize a SWIFT-Boilerplate powered project')
    .command('init [name]', 'Initialize a SWIFT-Boilerplate project.')
    .command('list', 'List SWIFT-Boilerplate variants')
    .command('search [term]', 'Search for SWIFT-Boilerplate variant')
    .command('info [term]', 'View details of a SWIFT-Boilerplate variant')
    .parse(process.argv);

if (!program.args.length) {
    program.help();
}
