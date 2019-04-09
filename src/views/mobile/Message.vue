<template>
    <div class="message">
        <ul class="msglist" v-if="msgList.length > 0">
            <li v-for="item in msgList" @click="handleClick(item.groupid)">
                <div class="avatar-box">
                    <span class="red-dot" v-if="item.news_count > 1">{{item.news_count}}</span>
                    <img :src="item.avatar" />
                </div>
                <div class="msginfo">
                    <div class="title">
                        <h1>{{item.name}}</h1>
                        <h3>{{item.time}}</h3>
                    </div>
                    <p>{{'[' + item.publisher + ']:' + item.latest_news}}</p>
                </div>
            </li>
            <p v-if="msgList.length > 10" class="bottomline">这是我的底线～</p>
        </ul>
        <p v-else>
            暂无任何消息
        </p>
    </div>
</template>

<script>
export default {
    name: 'message',
    data() {
        return {
            msgList: [
                {
                    groupid: 123578,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '奥特曼家族群',
                    latest_news: '赛文在打在打在打在打怪兽，大家去支援下～',
                    time: '昨天3:15',
                    publisher: '迪迦',
                    news_count: '99+'
                },
                {
                    groupid: 12458,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '奥特曼家族群',
                    latest_news: '赛文在打怪兽，大家去支援下～',
                    publisher: '迪迦',
                    time: '昨天3:15',
                    news_count: 9
                },
                {
                    groupid: 134578,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '奥特曼家族群',
                    latest_news: '赛文在打怪兽，大家去支援下～',
                    publisher: '迪迦',
                    time: '昨天3:15',
                    news_count: '99+'
                },
                {
                    groupid: 1345578,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '奥特曼家族群',
                    latest_news: '赛文在打怪兽，大家去支援下～',
                    publisher: '迪迦',
                    time: '昨天3:15',
                    news_count: '99+'
                },
                {
                    groupid: 123534,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '奥特曼家族群',
                    latest_news: '赛文在打怪兽，大家去支援下～',
                    publisher: '迪迦',
                    time: '昨天3:15',
                    news_count: 20
                }
            ]
        }
    },
    methods: {
        handleClick(groupid) {
            this.$router.push({ name: 'mchat' });
        }
    }
}
</script>

<style>
.message .msglist{
    /* border: 1px solid red; */
    background: #fff;
    margin-bottom: 50px;
}
.message .msglist .bottomline {
    text-align: center;
    color: #999;
    padding: 10px;
    background: #f5f5f5;
}
.message .msglist li {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 15px;
}
.message .msglist li+li {
    border-top: 1px solid #eee;
}
.message .msglist li .avatar-box {
    position: relative;
}
.message .msglist li .red-dot {
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    border-radius: 50%;
    color: #fff;
    padding: 3px;
    font-size: 20px;
    text-align: center;
    width: 30px;
    height: 30px;
    transform: translate(50%, -50%) scale(0.5);
}
.message .msglist li img{
    width: 50px;
    height: 50px;
}
.message .msglist li .msginfo {
    flex: 1;
    margin-left: 10px;
    padding-top: 5px;
}
.message .msglist li .msginfo .title {
    display: flex;
    justify-content: space-between;
}
.message .msglist li .msginfo .title h1 {
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.message .msglist li .msginfo p {
    font-size: 12px;
    color: #999;
    font-weight: 300;
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.message .msglist li h3 {
    color: #a1a1a1;
    font-size: 12px;
}
</style>
