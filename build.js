var rollup = require('rollup');

rollup.rollup({
    entry: 'src/main.js'
}).then(function (bundler) {

    var bundle = bundler.generate({
        format: 'cjs'
    });

    console.log(bundle.code);

});
