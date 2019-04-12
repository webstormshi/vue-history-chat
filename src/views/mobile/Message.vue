<template>
    <div class="message">
        <ul class="msglist" v-if="msgList.length > 0">
            <li v-for="item in msgList" @click="handleClick(item.groupid)">
                <div class="avatar-box">
                    <span class="red-dot" v-if="item.news_count > 1 || item.news_count === '99+'">{{item.news_count}}</span>
                    <div class="img" :style="{'backgroundImage': `url(${item.avatar})`}"></div>
                </div>
                <div class="msginfo">
                    <div class="title">
                        <h1>{{item.name}}</h1>
                        <h3>{{item.time}}</h3>
                    </div>
                    <p>{{'【' + item.publisher + '】:' + item.latest_news}}</p>
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
                    groupid: 123534,
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2193918262,74109347&fm=26&gp=0.jpg',
                    name: '上下五千年皇帝俱乐部',
                    latest_news: '卧槽,我大秦帝国已经有421代皇帝了吗？',
                    publisher: '嬴政',
                    time: '公元前209年某一天',
                    news_count: 20
                },
                {
                    groupid: 123578,
                    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=623015082,1391146871&fm=26&gp=0.jpg',
                    name: '唐僧肉妖怪信息通报群',
                    latest_news: '太上老君，快去请如来佛祖～',
                    time: '昨天12:00',
                    publisher: '玉皇大帝',
                    news_count: 66
                },
                {
                    groupid: 134578,
                    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2043799418,1609484514&fm=26&gp=0.jpg',
                    name: '三国争霸大赛',
                    latest_news: '今天没管住嘴，又骂死了一个，以后注意～',
                    publisher: '诸葛亮',
                    time: '昨天3:15',
                    news_count: '99+'
                },
                {
                    groupid: 12458,
                    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555085768524&di=1421aeaedbbac4271debb3bbbeda1157&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2F0csa5mEAebX0anSZ4kMpSDP8axfMJzANm91HFjnDty1uo1527672925658transferflag.png',
                    name: '梁山好汉英雄汇',
                    latest_news: '皇帝要招安了，兄弟们快来开会～',
                    publisher: '宋江',
                    time: '昨天13:15',
                    news_count: 9
                },
                {
                    groupid: 1345578,
                    avatar: 'http://img4.imgtn.bdimg.com/it/u=2428265785,4258666747&fm=26&gp=0.jpg',
                    name: '红楼梦美女帅哥交友',
                    latest_news: '刚看到个很俊的男人，糟了，是心动的感觉～',
                    publisher: '林黛玉',
                    time: '今天22:15',
                    news_count: '99+'
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
.message .msglist li .img {
    width: 50px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
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
    width: 280px;
}
.message .msglist li h3 {
    color: #a1a1a1;
    font-size: 12px;
}
</style>
