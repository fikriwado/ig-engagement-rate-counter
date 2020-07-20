if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

const app = new Vue({
    el: '#app',
    data: {
        like: null,
        comment: null,
        save: null,
        reach: null,
        percent: null
    },
    computed: {
        realTimePercent: function () {
            let count = (this.like + this.comment + this.save) / this.reach * 100
            return this.percent = Math.round(count)
        }
    }
})