const config = {
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
    content: (
        <span>
        © {new Date().getFullYear()} ©{' '}
          <a href="https://docs.getroamify.com" target="_blank">
          Roamify
        </a>
        .
      </span>
    )
  }
}

export default config
