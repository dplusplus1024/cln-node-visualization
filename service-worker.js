const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), r = [
  e + "/_app/immutable/entry/app.223e1ced.js",
  e + "/_app/immutable/chunks/0.7ae19a4b.js",
  e + "/_app/immutable/chunks/1.e703942e.js",
  e + "/_app/immutable/chunks/2.913ccfaf.js",
  e + "/_app/immutable/chunks/browser.c59dbb97.js",
  e + "/_app/immutable/chunks/index.81f98b68.js",
  e + "/_app/immutable/chunks/index.d94afa4f.js",
  e + "/_app/immutable/chunks/preload-helper.41c905a7.js",
  e + "/_app/immutable/chunks/singletons.dcd3a1cf.js",
  e + "/_app/immutable/entry/start.e0c519ca.js",
  e + "/_app/immutable/entry/error.svelte.78d8b9fb.js",
  e + "/_app/immutable/chunks/socket-wrapper.d571d777.js",
  e + "/_app/immutable/assets/_layout.669ae266.css",
  e + "/_app/immutable/entry/_layout.svelte.96aa2bea.js",
  e + "/_app/immutable/assets/_page.0ba86120.css",
  e + "/_app/immutable/entry/_page.svelte.ee0fe2b8.js"
], l = [
  e + "/favicon.png",
  e + "/manifest.webmanifest",
  e + "/smui-dark.css",
  e + "/smui.css"
], m = "1701314737854", i = self, p = `cache-${m}`, u = [
  ...r,
  // the app itself
  ...l
  // everything in `static`
];
i.addEventListener("install", (a) => {
  async function s() {
    await (await caches.open(p)).addAll(u);
  }
  a.waitUntil(s());
});
i.addEventListener("activate", (a) => {
  async function s() {
    for (const t of await caches.keys())
      t !== p && await caches.delete(t);
  }
  a.waitUntil(s());
});
i.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || !a.request.url.startsWith("http"))
    return;
  async function s() {
    const t = new URL(a.request.url), c = await caches.open(p);
    if (u.includes(t.pathname))
      return c.match(a.request);
    try {
      const n = await fetch(a.request);
      return n.status === 200 && c.put(a.request, n.clone()), n;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(s());
});
