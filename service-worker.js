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

var precacheConfig = [["D:/Hexo/public/2021/03/18/React的PubSub机制/index.html","cfa21e7b9620ae005f877cbe9c2cad75"],["D:/Hexo/public/2021/03/21/axios请求/index.html","41aa708240435535201cf0eabbe5b55e"],["D:/Hexo/public/2021/03/24/Vue与React组件的生命周期钩子/index.html","275323c66e56c8c9d231dd1d7c71a5ee"],["D:/Hexo/public/2021/03/29/Vue中computed和watch/index.html","adc1d6fb0e53b737c4cec45c574b0af0"],["D:/Hexo/public/2021/03/31/canvas画布/index.html","5699df60c5e2b7d0de9f2e3f5b00e316"],["D:/Hexo/public/2021/04/02/Redux状态管理工具/index.html","37c3593d73cbbc586773cf322f5db821"],["D:/Hexo/public/2021/04/11/Promise对象/index.html","4985a6b0f8878b1b01f2b92d00f78666"],["D:/Hexo/public/2021/04/16/HTML的常用布局方式/index.html","7c89c470a0a297a4d1f24bce54b305c1"],["D:/Hexo/public/2021/04/20/Vue组件的props/index.html","7401531f1f28cba445888b5ff0dd8b59"],["D:/Hexo/public/2021/05/27/Vue-Router页面刷新/index.html","f209a312aaad1ba904682556eb4f8ade"],["D:/Hexo/public/2021/06/01/React路由解析/index.html","66d7ba4de8b3baa8a0798ad559f9d5a0"],["D:/Hexo/public/2021/06/01/Redux/index.html","065d8febada3324b58e5712b805a900b"],["D:/Hexo/public/404.html","96cbe77e5aa2adc03c9d35d52c825aa0"],["D:/Hexo/public/archives/2021/03/index.html","15e8748e1188525fbcff78e312ede043"],["D:/Hexo/public/archives/2021/04/index.html","60d801ea1489113d5066d9f678e6e33b"],["D:/Hexo/public/archives/2021/05/index.html","418082c68ebbdebff52524fbbcaa0a48"],["D:/Hexo/public/archives/2021/06/index.html","3ccd679bb38b99274c7d475cd18821a3"],["D:/Hexo/public/archives/2021/index.html","db21e140675e883c3966b210381a565e"],["D:/Hexo/public/archives/2021/page/2/index.html","6b3e941ac6f7678314f5b01f5bbf2433"],["D:/Hexo/public/archives/index.html","34108af1c7dd8410da2cc20c60db8112"],["D:/Hexo/public/archives/page/2/index.html","99732394ff28df35f305dbfdb4e50a85"],["D:/Hexo/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/Hexo/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/Hexo/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/Hexo/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/Hexo/public/categories/HTML/index.html","16535fdbd0815070aa79fcd85b93cefc"],["D:/Hexo/public/categories/React/index.html","4c2a59323b659fb564267fa78b99d278"],["D:/Hexo/public/categories/index.html","d67565f9cf2d8f3ca8c24d5fbbfed615"],["D:/Hexo/public/categories/javascript/index.html","72344aaae53830ec1eba05e08ab42662"],["D:/Hexo/public/categories/框架/index.html","c797814da3c19b7abae9f652362aaa23"],["D:/Hexo/public/categories/状态管理/index.html","df7998bbc6c4dd1f01f5ce6e4a46b220"],["D:/Hexo/public/css/cur.css","d9bfcdadf5f976c011c8edaac1aded71"],["D:/Hexo/public/css/index.css","afbfaa1b0b427c92ad44474359188e28"],["D:/Hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Hexo/public/img/CalMonitor.png","426e84a7ff2adea3c9965b11069d58a0"],["D:/Hexo/public/img/PubSub.jpg","95e538ab12a7ff6a6cea063ef0b76ba4"],["D:/Hexo/public/img/React-router.jpg","3dcb525a18672a2cc0d422e4ac1e2123"],["D:/Hexo/public/img/Redux.jpg","f5efac75454fca78d8e21bacaa4addea"],["D:/Hexo/public/img/Redux.png","5b3e961054fca4d54064763429d5e4f1"],["D:/Hexo/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Hexo/public/img/axios.jpg","ab258057960a235bd5bd06245f456039"],["D:/Hexo/public/img/canvas.jpg","433f90334581e2149512666431845b40"],["D:/Hexo/public/img/com-props.png","0f91a6eb82e6da939bd50cc2ab37d40e"],["D:/Hexo/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Hexo/public/img/heard.gif","a7bf5374f877bde865c65ba92abf89b8"],["D:/Hexo/public/img/lifecycle-01.png","c7bfd289342941961506e8a3063bf621"],["D:/Hexo/public/img/lifecycle-02.jpg","2061793c8cf261f06e5b7c5e24c9e2a8"],["D:/Hexo/public/img/lifecycle.jpg","c7ccdfbbf052fc78995d956373e9b4df"],["D:/Hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Hexo/public/img/main.jpg","d5b2e51e3438fe0269e164cdede3cc94"],["D:/Hexo/public/img/mobile.jpg","124b7d323b494080e0fc1a063928d336"],["D:/Hexo/public/img/post/redux/action.png","7f9c9105b235d512bcc37215b2d36501"],["D:/Hexo/public/img/post/redux/error.png","61f7c89261d9792304ad3a8787fafee4"],["D:/Hexo/public/img/post/redux/filler.png","0ccd7bce508a3c63e5c4c30d650e204f"],["D:/Hexo/public/img/post/redux/react-redux.png","964d410301d5755516238b1c7e5d7c83"],["D:/Hexo/public/img/post/vue-props/01.png","96362ef23e18f12587d9fc81c09e4282"],["D:/Hexo/public/img/post/vue-props/02.png","1b6dc52321fee4317c4ff8e7f889bacc"],["D:/Hexo/public/img/post/vue-props/03.png","8b34cde1e730a6998fa7c4ac32c45094"],["D:/Hexo/public/img/post/vue-props/04.png","b6a86432c6a5244c894cc5b6573e018a"],["D:/Hexo/public/img/post/vue-props/05.png","60b0ca15b7d1f89f6bc078b32fd11650"],["D:/Hexo/public/img/post/vue-props/06.png","d5a2a7b20137d3e99112e55eeb8bf4c3"],["D:/Hexo/public/img/post/vue-props/07.png","8b6b3699c69aea6b31b0ddd6e59ec92c"],["D:/Hexo/public/img/post/vue-props/08.png","fe4546cf9c48086c0cb623970bc2064d"],["D:/Hexo/public/img/promise.png","5e6e4500a938e4658cfc1b8bf90c8b79"],["D:/Hexo/public/img/ref.gif","115c0b6a38ab88a3aaa515dd563cf32d"],["D:/Hexo/public/index.html","cd41b8947dccd95e4c2ec8fd7e74061a"],["D:/Hexo/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["D:/Hexo/public/js/mone.min.js","5e1398a4194af0774347d5f18a84f97c"],["D:/Hexo/public/js/sakura.js","731c84f0c175d3c29b9b60bd3d7a527b"],["D:/Hexo/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/Hexo/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/Hexo/public/js/tw_cn.js","c71318e978c08b7123db08410b79dec1"],["D:/Hexo/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/Hexo/public/link/index.html","476f484f6ac02b71f6971b4e8c081436"],["D:/Hexo/public/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["D:/Hexo/public/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["D:/Hexo/public/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["D:/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Hexo/public/movies/index.html","ce2ec7cead5a21d66a2460721d93e765"],["D:/Hexo/public/page/2/index.html","e7e5d219fb56253d109e28f89be58c71"],["D:/Hexo/public/tags/HTML/index.html","33d4e325263eaa2aed0cd59785b8f595"],["D:/Hexo/public/tags/Promise/index.html","c910cb475afc12da324bfb2ead348fb7"],["D:/Hexo/public/tags/PubSub/index.html","beb819df769544ce342d6e937fd9120d"],["D:/Hexo/public/tags/React/index.html","8d090415ae6f09e9940dff5cd8c33ae3"],["D:/Hexo/public/tags/Redux/index.html","e244ed39de3f4411a6a4f47f86aae65c"],["D:/Hexo/public/tags/Vue/index.html","844489536cde63fbaa7119676b43464a"],["D:/Hexo/public/tags/axios/index.html","0ffec591b41c8ee2fb0b5a917ff739c7"],["D:/Hexo/public/tags/index.html","6fecf1311373228e13dca97342aa232b"],["D:/Hexo/public/tags/标签/index.html","d063f2c8aadbc0990db1596de16d20e3"],["D:/Hexo/public/tags/状态管理/index.html","5d323a05ea9fb4a5872a83ed4b404c57"],["D:/Hexo/public/tags/组件通信/index.html","068e625d5843f4183c62310ff965cb4c"],["D:/Hexo/public/tags/网络请求/index.html","d351a710007831af050d015169dd201c"],["D:/Hexo/public/tags/路由链接/index.html","b29cec59deb66f5d41cbb62c14f0da59"]];
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







