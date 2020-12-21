import copy from 'rollup-plugin-copy'

module.exports = {
    input: 'src/server.js',
    output: {
      file: 'dist/app.js',
      format: 'cjs'
    },
    plugins: [
        copy({
          targets: [
            { src: 'src/index.html', dest: 'dist/public' },
            { src: 'src/css/**/*', dest: 'dist/public/css' },
            { src: 'src/img/**/*', dest: 'dist/public/img' }
          ]
        })
      ]
  };