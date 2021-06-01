/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Hexo/public/2021/03/18/React的PubSub机制/index.html","fe94437808dea09f4b572ca35c8f8a3c"],["D:/Hexo/public/2021/03/21/axios请求/index.html","fb023c2c503917323ec224aed95f26bf"],["D:/Hexo/public/2021/03/24/Vue与React组件的生命周期钩子/index.html","80acac273d86bfaff382c4494db283b6"],["D:/Hexo/public/2021/03/29/Vue中computed和watch/index.html","a4c1fededa8dc309200ab78ab04edc00"],["D:/Hexo/public/2021/03/31/canvas画布/index.html","084fcb525f03149066423756d6ce76ed"],["D:/Hexo/public/2021/04/02/Redux状态管理工具/index.html","bf2765839f9177af0d89c5c5c0bb0d3b"],["D:/Hexo/public/2021/04/11/Promise对象/index.html","2833dedfbecaaf8bba5cb0c5bd0b5b4f"],["D:/Hexo/public/2021/04/16/HTML的常用布局方式/index.html","8d4c3edbf1c46740c6226f2fcd4d19d2"],["D:/Hexo/public/2021/04/20/Vue组件的props/index.html","c730a44a3bb3596437e994f8f294e5d9"],["D:/Hexo/public/2021/05/27/Vue-Router页面刷新/index.html","22bc2ceeab1b7a65750e6ae22492659d"],["D:/Hexo/public/2021/06/01/React路由解析/index.html","383880040f38a82daf225405abad27c2"],["D:/Hexo/public/2021/06/01/Redux/index.html","14c4ea32fe1d3d663169f9e5b81c9c9e"],["D:/Hexo/public/404.html","bd2dc8c7144a9b0e07573586728b9406"],["D:/Hexo/public/archives/2021/03/index.html","24405469759c8af7adfd7516963b2fbc"],["D:/Hexo/public/archives/2021/04/index.html","fbedf8cc3fe7f2ade897a9e750bb48a1"],["D:/Hexo/public/archives/2021/05/index.html","f385982a2824dc8add572127222d1214"],["D:/Hexo/public/archives/2021/06/index.html","7b7759d15c0cc84f2256224c1f5cbb2b"],["D:/Hexo/public/archives/2021/index.html","a14f1604990be2218983dd33679c135b"],["D:/Hexo/public/archives/2021/page/2/index.html","e9fb5288c8abe6389da9d378e5589276"],["D:/Hexo/public/archives/index.html","4fd1dc454cb92817633c7783e6a2d6dd"],["D:/Hexo/public/archives/page/2/index.html","29f7e62cd47c55e073a68e7634473de4"],["D:/Hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/Hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/Hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/Hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/Hexo/public/categories/HTML/index.html","7e7dd71236ee307e426279b2139adbcb"],["D:/Hexo/public/categories/React/index.html","e4be5e752ee8fbecd50e89ba2c6339fa"],["D:/Hexo/public/categories/index.html","0f7b4c28c55859eeb167c26b41bbe99e"],["D:/Hexo/public/categories/javascript/index.html","4ea47bb987e6d484e686d2e2987a80c9"],["D:/Hexo/public/categories/框架/index.html","6f50924625274b26b908f42f52e60acd"],["D:/Hexo/public/categories/状态管理/index.html","5d83f8325fde7acb64767908cba1c0e1"],["D:/Hexo/public/css/cur.css","d9bfcdadf5f976c011c8edaac1aded71"],["D:/Hexo/public/css/index.css","afbfaa1b0b427c92ad44474359188e28"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/CalMonitor.png","426e84a7ff2adea3c9965b11069d58a0"],["D:/Hexo/public/img/PubSub.jpg","95e538ab12a7ff6a6cea063ef0b76ba4"],["D:/Hexo/public/img/React-router.jpg","3dcb525a18672a2cc0d422e4ac1e2123"],["D:/Hexo/public/img/Redux.jpg","f5efac75454fca78d8e21bacaa4addea"],["D:/Hexo/public/img/Redux.png","5b3e961054fca4d54064763429d5e4f1"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/axios.jpg","ab258057960a235bd5bd06245f456039"],["D:/Hexo/public/img/canvas.jpg","433f90334581e2149512666431845b40"],["D:/Hexo/public/img/com-props.png","0f91a6eb82e6da939bd50cc2ab37d40e"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/heard.gif","a7bf5374f877bde865c65ba92abf89b8"],["D:/Hexo/public/img/lifecycle-01.png","c7bfd289342941961506e8a3063bf621"],["D:/Hexo/public/img/lifecycle-02.jpg","2061793c8cf261f06e5b7c5e24c9e2a8"],["D:/Hexo/public/img/lifecycle.jpg","c7ccdfbbf052fc78995d956373e9b4df"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/img/main.jpg","d5b2e51e3438fe0269e164cdede3cc94"],["D:/Hexo/public/img/mobile.jpg","124b7d323b494080e0fc1a063928d336"],["D:/Hexo/public/img/post/vue-props/01.png","96362ef23e18f12587d9fc81c09e4282"],["D:/Hexo/public/img/post/vue-props/02.png","1b6dc52321fee4317c4ff8e7f889bacc"],["D:/Hexo/public/img/post/vue-props/03.png","8b34cde1e730a6998fa7c4ac32c45094"],["D:/Hexo/public/img/post/vue-props/04.png","b6a86432c6a5244c894cc5b6573e018a"],["D:/Hexo/public/img/post/vue-props/05.png","60b0ca15b7d1f89f6bc078b32fd11650"],["D:/Hexo/public/img/post/vue-props/06.png","d5a2a7b20137d3e99112e55eeb8bf4c3"],["D:/Hexo/public/img/post/vue-props/07.png","8b6b3699c69aea6b31b0ddd6e59ec92c"],["D:/Hexo/public/img/post/vue-props/08.png","fe4546cf9c48086c0cb623970bc2064d"],["D:/Hexo/public/img/promise.png","5e6e4500a938e4658cfc1b8bf90c8b79"],["D:/Hexo/public/img/ref.gif","115c0b6a38ab88a3aaa515dd563cf32d"],["D:/Hexo/public/index.html","91b104d76b8dc63fe48ad5823bbfe108"],["D:/Hexo/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["D:/Hexo/public/js/mone.min.js","5e1398a4194af0774347d5f18a84f97c"],["D:/Hexo/public/js/sakura.js","731c84f0c175d3c29b9b60bd3d7a527b"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","c71318e978c08b7123db08410b79dec1"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/link/index.html","ad270892b24211b2020f91b14ddc8594"],["D:/Hexo/public/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["D:/Hexo/public/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["D:/Hexo/public/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["D:/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Hexo/public/movies/index.html","8190da0001f1b0a831f06eda86c4699b"],["D:/Hexo/public/page/2/index.html","1c8383e4f451ad867a73912b71bcbeba"],["D:/Hexo/public/tags/HTML/index.html","5b7b2bb8041c9eedda4229fba188f74b"],["D:/Hexo/public/tags/Promise/index.html","9dac75aa42cbd20a3f028b30ad2d0dca"],["D:/Hexo/public/tags/PubSub/index.html","ae94a82e97e91f4b11e8f252221c8110"],["D:/Hexo/public/tags/React/index.html","8a2b63854491005f7891e36779d93d8d"],["D:/Hexo/public/tags/Redux/index.html","f04d59066d78e481330777d00a4423ac"],["D:/Hexo/public/tags/Vue/index.html","342ac79ff83dbe141ef5687a0776ab16"],["D:/Hexo/public/tags/axios/index.html","e8def1e8cee4a72ca2cc0a1c7c2c9c88"],["D:/Hexo/public/tags/index.html","ff744aa04dcb04b20ca22958f4474378"],["D:/Hexo/public/tags/标签/index.html","569b13819afac26828955960a8ceb651"],["D:/Hexo/public/tags/状态管理/index.html","3d2a79fe1896295bf7d4aa0fc9b4c208"],["D:/Hexo/public/tags/组件通信/index.html","c324b3f52ca0dab209295fa868c061e2"],["D:/Hexo/public/tags/网络请求/index.html","641c417642c143bae43c98a01da5ee38"],["D:/Hexo/public/tags/路由链接/index.html","23902791e1a91e5084b5080d1b1c7a1f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







