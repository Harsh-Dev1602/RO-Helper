
import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
const BASE_URL = "https://rohelper.com/"; // Replace with your actual domain

// Define your pages
const pages = [
  { url: "/", changefreq: "home", priority: 1.0 },
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });

  pages.forEach((page) => {
    sitemapStream.write(page);
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);

  writeFileSync("./public/sitemap.xml", sitemap.toString());
  console.log("✅ Sitemap generated successfully!");
})();
