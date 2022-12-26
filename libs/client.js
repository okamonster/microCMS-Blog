import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "okamonster-blog",
  apiKey: process.env.API_KEY,
});
