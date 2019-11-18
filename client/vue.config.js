const path = require('path')
const argv = require('optimist').argv
let config = {}
let command = argv['_'][0]

switch(command) {
    case 'build':
        config = {
            publicPath: '/static/gen',
            assetsDir: './',
            outputDir: '../server/static/gen',
            pages: {
                app: {
                    entry: 'src/main.js',
                    template: 'public/index.html',
                    filename: 
                        path.resolve(
                                '../server/templates/gen', 'index.html'),
                    title: 'Index'
                }
            }
        }
}
module.exports = config
