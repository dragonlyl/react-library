import babel from 'rollup-plugin-babel';

export default {
    input: './src/index.js',
    output:  {
        file: './lib/bundle.js',
        format: 'cjs'
        // format: 'es'
    },
    // 不加 会报 Unresolved dependencies 未解决的依赖关系 (因为代码里有外部依赖)
    external: [ 'react' ], // tells Rollup 'I know what I'm doing here'
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}