const fs = require('fs');
const glob = require("glob");

const frameworkModules = [
    'grid-react',
    'grid-angular',
    'grid-vue',
    'grid-polymer'
];

const modules = glob.sync("../../community-modules/*")
    .filter(module => !frameworkModules.includes(module.replace(`../../community-modules/`, '')))
    .filter(module => module.indexOf('grid-all-modules') === -1)
    .map(module => glob.sync(`${module}/src/*Module.ts`)[0])
    .map(module => module.replace('.ts', ''))
    .map(module => {
        // this relies on the module name within the module class to be the same as the filename
        const directory = module.substr(0, module.lastIndexOf('/src'));
        const filename = module.substr(module.lastIndexOf('/') + 1);
        const moduleName = filename.charAt(0).toUpperCase() + filename.slice(1);
        return {
            directory,
            moduleName
        }
    });

const moduleRequireLines = modules.map(module => `var ${module.moduleName} = require('${module.directory}');`);
const moduleRegisterLines = modules.filter(module => module.directory.indexOf('grid-core') === -1) // exclude core - we don't register core
    .map(module => `agGrid.ModuleRegistry.register(${module.moduleName}.${module.moduleName});`);

const css = glob.sync("./dist/styles/*.css")
    .filter(css => css.indexOf('.min.css') === -1)
    .map(css => `require('${css}');`);

const webpackBase = fs.readFileSync('./webpack-base.config.js', 'UTF-8').toString();

const webpackNoStyles = moduleRequireLines.join('\n').concat('\n')
    .concat(webpackBase)
    .concat(moduleRegisterLines.join('\n').concat('\n'))
fs.writeFileSync('./webpack-no-styles.js', webpackNoStyles);

const webpackStyles = webpackNoStyles.concat(css.join('\n'));
fs.writeFileSync('./webpack-with-styles.js', webpackStyles);
