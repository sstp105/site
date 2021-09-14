module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        fileName: false,
        displayName: true,
        ssr: true
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
