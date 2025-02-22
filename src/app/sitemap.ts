import {MetadataRoute} from "next";

const getGeneralSitemap = () => {
    const mapping = [
        'esims/overview',
        'esims/countries',
        'esims/packages',
        'esims/orders',
        'esims/esims',
        'esims/compatible-devices',
        'esims/balance',
        'gift-cards/create-gift-card',
        'gift-cards/get-gift-card',
        'gift-cards/revoke-gift-card',
        'gift-cards/update-gift-card',
        'gift-cards/overview',
        'about',
        'authentication',
        'health',
    ];
    return mapping.map((doc) => ({
        url: `https://docs.getroamify.com/${doc}/`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.5,
    }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const generalPages = getGeneralSitemap();

    return [...generalPages];
}
