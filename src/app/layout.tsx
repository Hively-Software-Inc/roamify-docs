import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '/styles/global.css'
import React from "react";

export const metadata = {
    metadataBase: new URL('https://docs.getroamify.com'),
    abstract: 'Best eSIM API for travel businesses. Roamify API is a robust platform that enables you to create a travel business at scale.',
    referrer: 'origin-when-cross-origin',
    twitter: {
        site: "@RoamifyHQ",
        creator: "@RoamifyHQ",
        title: 'eSIM API - Roamify',
        description: 'Best eSIM API for travel businesses. Roamify API is a robust platform that enables you to create a travel business at scale.',
        images: "https://docs.getroamify.com/logo.webp",
    },
    authors: [
        {
            name: 'eSIM API - Roamify',
            url: "https://www.getroamify.com",
        },
    ],
    robots: "follow, index",
    alternates: {
        canonical: "/",
    },
    keywords: [
        "eSIM API",
        "eSIM integration",
        "eSIM technology",
        "eSIM developer tools",
        "eSIM API documentation",
        "eSIM API solutions",
        "eSIM API provider",
        "eSIM API for developers",
        "eSIM API integration",
        "eSIM API platform",
        "eSIM API services",
        "eSIM API features",
        "eSIM API benefits",
        "eSIM API pricing",
        "eSIM API support",
        "eSIM API tutorial",
        "eSIM API examples",
        "eSIM API use cases",
        "eSIM API implementation",
        "eSIM API guide",
        "Roamify eSIM API",
        "Roamify eSIM API documentation",
    ],
    classification: "Travel eSIM API",
    category: "eSIM API",
    creator: "Roamify - eSIM Phone & Internet",
    publisher: "Roamify - eSIM Phone & Internet",
    title: 'eSIM API - Roamify',
    description: 'Best eSIM API for travel businesses. Roamify API is a robust platform that enables you to create a travel business at scale.',
    openGraph: {
        type: 'website',
        url: 'https://docs.getroamify.com',
        siteName: 'eSIM API - Roamify',
        images: 'https://docs.getroamify.com/logo.webp'
    }
}

const banner = <Banner storageKey="roamify-banner-key">
    🚀 Trusted by travel businesses worldwide - Roamify eSIM API
</Banner>

const navbar = <Navbar logo={<div style={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
}}><img src={"/logo.webp"} style={{
    width: '20px',
    height: '20px',
    marginRight: '10px'
}} alt={"logo"}/><span>eSIM API - Roamify</span></div>}
                       chatLink={'https://twitter.com/roamifyhq'}
                       chatIcon={<svg width="24" height="24" viewBox="0 0 248 204">
                           <path
                               fill="currentColor"
                               d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
                           />
                       </svg>}
                       projectLink={"https://github.com/Hively-Software-Inc/roamify-docs"}
/>

const footer = (
    <Footer className="flex-col items-center md:items-start">
        <span>© 2023 {' '}<a href="https://docs.getroamify.com" target="_blank">Roamify</a>.</span>
    </Footer>
)

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head
        >
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            darkMode={true}
            banner={banner}
            navbar={navbar}
            nextThemes={{
                defaultTheme: 'dark',
            }}
            pageMap={await getPageMap()}
            sidebar={{
                defaultMenuCollapseLevel: 1,
                toggleButton: true,
            }}
            navigation={{
                prev: true,
                next: true,
            }}
            docsRepositoryBase={"https://github.com/Hively-Software-Inc/roamify-docs"}
            footer={footer}
            toc={{
                backToTop: 'Back to top',
                title: 'On this page'
            }}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}