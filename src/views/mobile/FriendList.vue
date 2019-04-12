<template>
    <div class="friend-container">
        <ul class="friendlist">
            <h2>群组</h2>
            <li v-for="item in official" @click="handleOfficial(item.uid)">
                <div class="img" :style="{'backgroundImage': `url(${item.avatar})`}"></div>
                <p>{{item.name}}</p>
            </li>
        </ul>
        <ul class="friendlist">
             <h2>联系人</h2>
            <li v-for="item in friendlist" @click="handleFriend(item.uid)">
                <img :src="item.avatar" />
                <p>{{item.nickname}}</p>
            </li>
        </ul>
        <p class="bott"></p>
    </div>
</template>

<script>
export default {
    name: 'FriendList',
    data() {
        return {
            official: [
                {
                    uid: 1234,
                    avatar: 'http://wx.qlogo.cn/mmopen/049dFBmhic79TM8ia7jYnPYjdYgFicUN4CyyfoEicnpibQcYIgkPrCXs1mPKTNTHMuMB4aEDg7XIJTt0jD8Uh65hCuJGtKnOJKPe2/64',
                    name: '四大名聊服务中心'
                },
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
                // {
                //     uid: 1234,
                //     avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                //     name: '西游记服务中心'
                // },
                // {
                //     uid: 1234,
                //     avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                //     name: '问题答疑'
                // }
            ],
            friendlist: [
                {
                    uid: 1234,
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=204391464,3096764385&fm=26&gp=0.jpg',
                    nickname: '唐三藏'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4185229060,775093299&fm=26&gp=0.jpg',
                    nickname: '玉皇大帝'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2068609933,4245974815&fm=26&gp=0.jpg',
                    nickname: '武松'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=814637187,1113658363&fm=26&gp=0.jpg',
                    nickname: '宋江'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1169047691,2844822524&fm=26&gp=0.jpg',
                    nickname: '孙二娘'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1159254676,1525325602&fm=26&gp=0.jpg',
                    nickname: '曹操'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=555186926,3916698536&fm=26&gp=0.jpg',
                    nickname: '司马懿'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2901031044,1002633677&fm=26&gp=0.jpg',
                    nickname: '诸葛亮'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3955799079,286223547&fm=26&gp=0.jpg',
                    nickname: '林黛玉'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=831064150,4258984097&fm=26&gp=0.jpg',
                    nickname: '嬴政'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=74310314,3084939342&fm=26&gp=0.jpg',
                    nickname: '武则天'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2728200332,220121127&fm=26&gp=0.jpg',
                    nickname: '乾隆'
                },
                {
                    uid: 1234,
                    avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2798077573,2037168519&fm=26&gp=0.jpg',
                    nickname: '溥仪'
                }
            ]
        }
    },
    methods: {
        handleOfficial(uid) {
            this.$router.push({ name: 'mchat' });
        },
        handleFriend(uid) {
            this.$router.push({ name: 'UserCard' });
        }
    }
}
</script>

<style>
.friend-container {
    height: 100vh;
    overflow: scroll;
}
.friend-container .bott {
    margin-bottom: 100px;
}
.friendlist {
    background: #fff;
}
.friendlist h2 {
    font-size: 12px;
    background: #f5f5f5;
    color: #666;
    padding: 10px;
    font-weight: 300;
}
.friendlist li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
}
.friendlist li + li {
    border-top: 1px solid #eee;
}
.friendlist li img {
    width: 40px;
    width: 40px;
    margin-right: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.friendlist li p {
    font-size: 16px;
    font-weight: 300;
    color: #333;
}
</style>
