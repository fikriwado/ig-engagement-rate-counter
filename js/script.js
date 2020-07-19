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