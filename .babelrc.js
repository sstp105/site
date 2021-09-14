module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        fileName: false,
        displayName: true,
        ssr: false
      }
    ],
    'macros',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './'
        }
      }
    ]
  ]
}
