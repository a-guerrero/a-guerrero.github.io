var CACHE_NAME = 'service-worker-cache-v1'
var ulrArr = [
    'css/main.css',
    'assets/webmvp8_512kb.mp4',
    'assets/302H.jpg',
    'assets/305H.jpg'
]

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cached')
                return cache.addAll(ulrArr)
            })
    )
})
