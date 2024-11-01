import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.jsx',
  defaultShowCopyCode: true,
  codeHighlight: true,
  latex: true,
  search: {
    codeblocks: true
  }
})

export default withNextra({
  reactStrictMode: true
})
