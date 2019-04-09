<template>
    <ul class="mtabs" id="tabs">
        <li class="mtab" v-if="$route.path !== tab.url" v-for="(tab, index) in tabs">
            <router-link :to="tab.url">
                <img :src="tab.icon" />
                <p>{{tab.label}}</p>
            </router-link>
        </li>
        <li class="mtab select" v-else>
            <a href="javascript:;void(0)">
                <img :src="tab.icon_" />
                <p>{{tab.label}}</p>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Tabs',
    mounted() {
        this.setTitle();
    },
    updated() {
        this.setTitle();
    },
    methods: {
        setTitle() {
            var name = this.tabs.filter(item => item.url === this.$route.path)[0].name;
            document.title = name;
        }
    },
    data() {
        return {
            select: 1,
            tabs: [
                {
                    id: 1,
                    label: '消息',
                    name: '消息列表',
                    url: '/message',
                    icon: 'static/icon/message_icon.png',
                    icon_: 'static/icon/message_icon_.png'
                },
                {
                    id: 2,
                    label: '通讯录',
                    name: '通讯录',
                    url: '/friendlist',
                    icon: 'static/icon/friend_icon.png',
                    icon_: 'static/icon/friend_icon_.png'
                },
                {
                    id: 3,
                    label: '互动',
                    name: '好友互动',
                    url: "/interact",
                    icon: 'static/icon/dync_icon.png',
                    icon_: 'static/icon/dync_icon_.png'
                },
                {
                    id: 4,
                    label: '我的',
                    name: '我的主页',
                    url: '/mine',
                    icon: 'static/icon/mine_icon.png',
                    icon_: 'static/icon/mine_icon_.png'
                }
            ]
        }
    }
}
</script>

<style>
#tabs {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px 0;
    border-top: 1px solid #eee;
    background: #fff;
}
#tabs .mtab {
    text-align: center;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
#tabs .mtab a {
    text-decoration: none;
    color: #080808;
}
#tabs .mtab img {
    width: 24px;
    height: 24px;
}
.select p {
    color: #1ea214;
}
</style>
