import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div style={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  }}><img src={"./logo.webp"} style={{
    width: '20px',
    height: '20px',
    marginRight: '10px'
  }}/><span>Roamify Docs</span></div>,
  project: {
    link: 'https://docs.getroamify.com',
  },
  docsRepositoryBase: 'https://github.com/hivelydev/roamify-docs',
  footer: {
    text: '© 2023 by Roamify',
  },
}

export default config
