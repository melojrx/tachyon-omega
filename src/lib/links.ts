import { siteConfig } from "../config/site";

export function getWhatsAppLink(message?: string): string {
    const text = message || siteConfig.whatsappMessage;
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedText}`;
}

export function getGoogleMapsLink(): string {
    return siteConfig.googleMapsUrl;
}

export function getInstagramLink(): string {
    return siteConfig.instagramUrl;
}
