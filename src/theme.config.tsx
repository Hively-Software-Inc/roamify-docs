import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    }}><img src={"/logo.webp"} style={{
        width: '20px',
        height: '20px',
        marginRight: '10px'
    }} alt={"logo"}/><span>
        eSIM API - Roamify
    </span></div>,
    project: {
        link: 'https://docs.getroamify.com',
    },
    docsRepositoryBase: 'https://github.com/hivelydev/roamify-docs',
    chat: {
        link: 'https://twitter.com/roamifyhq',
        icon: (
            <svg width="24" height="24" viewBox="0 0 248 204">
                <path
                    fill="currentColor"
                    d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
                />
            </svg>
        )
    },
    darkMode: true,
    nextThemes: {
        defaultTheme: 'dark',
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
    },
    head: (
        <>
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:title" content={"eSIM API - Roamify"}/>
            <meta
                property="og:description"
                content={"Best eSIM API for travel businesses. Roamify API is a robust platform that enables you to create a travel business at scale."}
            />
            <meta property="og:url" content="https://docs.getroamify.com"/>
            <meta property="og:site_name" content="eSIM API - Roamify"/>
            <meta
                property="description"
                content={"Best eSIM API for travel businesses. Roamify API is a robust platform that enables you to create a travel business at scale."}
            />
            <title>
                eSIM API - Roamify
            </title>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content="@roamifyhq"/>
        </>
    ),
    footer: {
        content: (
            <span>
        © 2023 {' '}
                <a href="https://docs.getroamify.com" target="_blank">
          Roamify
        </a>
        .
      </span>
        )
    },
    components: {
        h1: props => (
            <h1
                className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100"
                {...props}
            />
        ),
    }
}

export default config
