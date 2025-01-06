import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import countryCityData from "./src/Pages/BlogPage/CoutriesStates.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static pages
  const staticPages = [
    {
      url: "https://quickui.co/",
      priority: "1.0",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://quickui.co/register",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://quickui.co/login",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://quickui.co/pricing",
      priority: "0.7",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://quickui.co/blog",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://quickui.co/free-tool",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://quickui.co/free-tool/background-text-color-generator",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
  ];

  staticPages.forEach((page) => {
    sitemap += `<url><loc>${page.url}</loc><lastmod>${page.lastmod}</lastmod><changefreq>monthly</changefreq><priority>${page.priority}</priority></url>\n`;
  });

  // Blog pages with specific URLs
  const blogPosts = [
    "build-great-landing-page",
    "common-mistakes-landing-pages",
    "role-of-typography-landing-page-success",
    "using-color-psychology-landing-page-design",
    "designing-landing-pages-for-different-audiences",
    "top-tools-for-landing-page-design-and-analytics",
    "understanding-the-funnel-where-landing-pages-fit-in",
    "benefits-of-using-video-on-landing-pages",
  ];

  blogPosts.forEach((slug) => {
    sitemap += `<url><loc>https://quickui.co/blog/article/${slug}</loc><lastmod>2024-10-23T00:00:00+00:00</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>\n`;
  });

  // Dynamic blog URLs from countryCityData
  Object.entries(countryCityData).forEach(([country, cities]) => {
    cities.forEach((city) => {
      sitemap += `<url><loc>https://quickui.co/blog/article/${encodeURIComponent(
        country
      )}/${encodeURIComponent(
        city
      )}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>\n`;
    });
  });

  sitemap += "</urlset>";

  const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);
  console.log("Sitemap generated at public/sitemap.xml");
}

generateSitemap();
