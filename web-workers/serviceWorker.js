var CACHE_NAME = 'service-worker-cache-v1'
var ulrArr = [
    'https://a-guerrero.github.io/web-workers/index.html',
    'https://a-guerrero.github.io/web-workers/css/main.css',
    'https://a-guerrero.github.io/web-workers/assets/webmvp8_512kb.mp4',
    'https://a-guerrero.github.io/web-workers/assets/302H.jpg',
    'https://a-guerrero.github.io/web-workers/assets/305H.jpg'
]

console.log(ulrArr)

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cached', cache)
                return cache.addAll(ulrArr)
            })
    )
})
