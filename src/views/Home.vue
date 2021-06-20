<template>
    <div class="chatroom">
        <div class="content">
            <div class="item">
                <div class="ip">192.168.1.1</div>
                <div class="text">黑森林50</div>
            </div>
            <div class="item">
                <div class="ip">{{ ip }}</div>
                <div class="text">黑森林50</div>
            </div>
        </div>
        <div class="sent">
            <div class="match"></div>
            <button @click="post">post</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            ip: null,
        }
    },
    created() {
        fetch('http://ip-api.com/json/?fields=status,country,city,lat,lon,isp,query')
            .then((response) => response.json())
            .then((data) => {
                this.ip = data.query
            })
    },
    methods: {
        post() {
        },
    },
    components: {
    },
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    padding: 15px;
    // justify-content: center;
    .ip {

    }
}
</style>
