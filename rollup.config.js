import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const dist = 'dist'
const bundle = 'bundle'

const producton = !process.env.ROLLUP_WATCH

export default {
    input: 'src/index.js',
    output: [
        {
            file: `${dist}/${bundle}.cjs.js`,
            format: 'cjs'
        },
        {
            file: `${dist}/${bundle}.esm.js`,
            format: 'esm'
        },
        {
            name: 'ScrollEffects',
            file: `${dist}/${bundle}.umd.js`,
            globals: {
                react: 'React',
            },
            format: 'umd'
        },
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        producton && terser()
    ]
}
