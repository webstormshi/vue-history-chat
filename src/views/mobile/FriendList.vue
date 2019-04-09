<template>
    <div class="friend-container">
        <ul class="friendlist">
            <h2>公众号</h2>
            <li v-for="item in official" @click="handleOfficial(item.uid)">
                <img :src="item.avatar" />
                <p>{{item.name}}</p>
            </li>
        </ul>
        <ul class="friendlist">
             <h2>西游记</h2>
            <li v-for="item in friendlist" @click="handleFriend(item.uid)">
                <img :src="item.avatar" />
                <p>{{item.nickname}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'FriendList',
    data() {
        return {
            official: [
                {
                    icon: 'static/icon/message_icon.png',
                    name: '西游记',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '三国演义',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '水浒传',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '红楼梦',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '平台公众号(官方)'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '西游记服务中心'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    name: '问题答疑'
                }
            ],
            friendlist: [
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    nickname: '我是谁'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    nickname: '我是谁'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    nickname: '我是谁'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    nickname: '我是谁'
                },
                {
                    uid: 1234,
                    avatar: 'https://yt-adp.ws.126.net/luping/300250_ahnz_20190402.jpg',
                    nickname: '我是谁'
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
    padding-bottom: 100px;
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
    height: 40px;
    margin-right: 10px;
}
.friendlist li p {
    font-size: 16px;
    font-weight: 300;
    color: #333;
}
</style>
