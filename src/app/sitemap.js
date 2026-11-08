const SITE_URL = "https://rocioalonso.com";

const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/obras", changeFrequency: "monthly", priority: 0.9 },
  { path: "/academia", changeFrequency: "monthly", priority: 0.9 },
  { path: "/expos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sobre-mi", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contacto", changeFrequency: "yearly", priority: 0.5 },
];

export default function sitemap() {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
