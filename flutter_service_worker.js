'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ae12e2a587896f31c49321032f043606",
"assets/AssetManifest.bin.json": "9bdf0fa7c9b92b8ce48024f66d8091bb",
"assets/AssetManifest.json": "9c25a51ba08e7a53f8a274aee6abc24e",
"assets/assets/icons/close-solid.png": "0f44cbaee6f222248698d73ce9614ace",
"assets/assets/icons/delete.png": "15899a9b887964a064ca6ed45cf7a537",
"assets/assets/icons/fillRadio.png": "7ee8bf662e3a536192de4c39cd9dd4a8",
"assets/assets/icons/gg_add.png": "71158d28be5f83525d42b03f6a8d0da8",
"assets/assets/icons/language.png": "a74a3925a17772bb56032c2d1e9e1dcc",
"assets/assets/icons/login.png": "a7e6b0302c956991617b527837b2d2b0",
"assets/assets/icons/map.png": "5ea58c533ddc7b7238f0dfe214da76e4",
"assets/assets/icons/notFillRadio.png": "171e0795c25127bbb32c44977e74574f",
"assets/assets/icons/rememberMe.png": "1ee9f36cd3d14627264f5a1046c5ef22",
"assets/assets/icons/seen.png": "a39806ac3aaa45f84884e5da319d5799",
"assets/assets/icons/sure.png": "d04fd7e2b36b03b80b0701b6fcc7d19b",
"assets/assets/icons/switch.png": "0da97b01b19d8c53bbdbe0a83970a955",
"assets/assets/icons/unSeen.png": "2e7aa35c6f2f9bb55063070dee1e0c4d",
"assets/assets/icons/upload.png": "62e240451cc95e378d8d3873fc81378b",
"assets/assets/icons/view.png": "1f60a143c9b3d59439805052dd248510",
"assets/assets/icons/voice.png": "d0fb577438f032b251ced2bc9ddc3f87",
"assets/assets/icons/wel.png": "1f7b8a56e4c170ea7b6d772dc3bd4387",
"assets/assets/images/allResidence.png": "17f1a233a62d4181b71841f68dcb25b5",
"assets/assets/images/armchair.png": "f8c67952000bf27a07a6e0daee81eb4b",
"assets/assets/images/beach.png": "06ddf55d8ebd29cd9335ac09e27c721b",
"assets/assets/images/building.png": "8d414e6727c34dae1c6ae44d91dfd2d7",
"assets/assets/images/cabin.png": "93c8584bc0b1580df317c4b02d2ab161",
"assets/assets/images/city.png": "8a4cd2ff18a5abc181296f3e876fcb57",
"assets/assets/images/ehgaz-Logo.png": "7a5570549de17cc284c931e832857322",
"assets/assets/images/graph.png": "2b26ecd743c8696dbd8e9b72a4f9aa64",
"assets/assets/images/hotel.png": "98b69bcb1ba63c3d5eb47849ef5873ed",
"assets/assets/images/placeImage.png": "1ac1384c76ba60954b4c6b0ece44922c",
"assets/assets/images/price.png": "855f271bb426d21cc3f8cea9bcb7e493",
"assets/assets/images/testImage.png": "0d7dbc26b903ee6b9039fa6d8243b4c6",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/fonts/MaterialIcons-Regular.otf": "a5610307999ad1fe95710dd5382958b4",
"assets/lib/core/lang/ar.json": "e1943418424fa0770f3e1db5c5d12d5b",
"assets/lib/core/lang/en.json": "914d6ffc3b317413569b61d62fc12e13",
"assets/NOTICES": "85016adab58e311e47a62c5c257137ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa4db73ef3c21fb4d69755baa829d6e1",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "1360856e28c7faf1e1f7cf7fdac4a513",
"firebase-messaging-sw.js": "c4a8091cbbf7733b62f4e23cea9d3a5d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "b5cbee670081cc037f0935fe15bad7cd",
"icons/Icon-512.png": "208ef4e1457a9c68ed1c78f3eb673f77",
"icons/Icon-maskable-192.png": "b5cbee670081cc037f0935fe15bad7cd",
"icons/Icon-maskable-512.png": "208ef4e1457a9c68ed1c78f3eb673f77",
"index.html": "f389159669d7fe2218d4a6a39b9f0201",
"/": "f389159669d7fe2218d4a6a39b9f0201",
"main.dart.js": "c55c0b11acd633ccbcfd2f93cb2cfe74",
"manifest.json": "e064ce9663ec44d140cbf5ed925d0b13",
"version.json": "4a33b43bf5e278124407f888fd8a4eb9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
