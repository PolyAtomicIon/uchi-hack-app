if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise((async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},i=(i,n)=>{Promise.all(i.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(i)};self.define=(i,s,r)=>{n[i]||(n[i]=Promise.resolve().then((()=>{let n={};const l={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return n;case"module":return l;default:return e(i)}}))).then((e=>{const i=r(...e);return n.default||(n.default=i),n}))})))}}define("./service-worker.js",["./workbox-a244db4c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quiz-battle"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/482.9de28057.css",revision:null},{url:"css/493.c637f37b.css",revision:null},{url:"css/app.31d6cfe0.css",revision:null},{url:"css/vendor.e6484f60.css",revision:null},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.a7d6a198.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4c7c4ea2.woff2",revision:null},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"1db3ac0c40dfccf2fcf96afd41338402"},{url:"js/104.6de49fae.js",revision:null},{url:"js/193.c77df993.js",revision:null},{url:"js/234.b206b4a6.js",revision:null},{url:"js/482.f10a3fae.js",revision:null},{url:"js/493.8f22f19f.js",revision:null},{url:"js/547.93ff5257.js",revision:null},{url:"js/78.715e8ebf.js",revision:null},{url:"js/app.a559f3fa.js",revision:null},{url:"js/vendor.6e765988.js",revision:null},{url:"manifest.json",revision:"f67e2a907a3097bfa6c5228ec3f4d47b"},{url:"sprites/map_castleTileBlue.png",revision:"6182cfa92f9721cf3e83877cc08f0323"},{url:"sprites/map_castleTileRed.png",revision:"9ad25be1782117f755770fb61abe2a4b"},{url:"sprites/map_clearTile.png",revision:"d9b6377cf3d3b5a9e1b81dbd101a3c18"},{url:"sprites/map_houseTileBlue.png",revision:"d5b9a6ddc41ce4e1e3e340458715d697"},{url:"sprites/map_houseTileRed.png",revision:"b4eb6041e5ffc0b495d8518b26f61b49"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));