export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL || "http://localhost:3000/api",
  url: process.env.STRAPI_URL || "http://localhost:3000/",
})
