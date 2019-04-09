<template>
    <div class="usercard">
        <header>
            <img :src="userinfo.avatar" />
            <div class="userinfo">
                <h1>{{userinfo.nickname}}</h1>
                <p class="place">地区：{{userinfo.place}}</p>
                <a class="wxno">微信号：{{userinfo.nickname}}</a>
            </div>
        </header>
        <ul class="menu">
            <li v-for="item in menus">
                <img :src="item.avatar" />
                <p>{{item.name}}</p>
                <span>{{item.desc}}</span>
            </li>
        </ul>
        <a class="ucard-btn" @click="handleChat">发消息</a>
        <a class="ucard-btn">音视频通话</a>
    </div>
</template>

<script>
export default {
    name: 'Mine',
    data() {
        return {
            userinfo: {
                uid: 1,
                nickname: '怒放的生命',
                wxno: 'sy1446631745',
                place: '江西 九江',
                avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                userbg: 'https://wx4.sinaimg.cn/orj360/a3255108gy1g1wgndaltij20dw090aa5.jpg'
            },
            menus: [
                {
                    icon: 'static/icon/message_icon.png',
                    name: '西游记',
                    desc: '孙悟空',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '三国演义',
                    desc: '曹操',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '水浒传',
                    desc: '宋江',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '红楼梦',
                    desc: '贾宝玉',
                    avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
                }
            ]
        }
    },
    methods: {
        handleChat() {
            this.$router.replace({ name: 'mchat' });
        }
    }
}
</script>

<style>
.usercard header {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 25px;
}
.usercard header img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: #000;
}
.usercard header .userinfo {
    margin-left: 10px;
    flex: 1;
}
.usercard header .userinfo h1 {
    font-size: 18px;
}
.usercard header .userinfo .wxno, .place {
    position: relative;
    display: block;
    color: #666;
    font-size: 14px;
    font-weight: 300;
    text-decoration: none;
}
.usercard header .userinfo a::after {
    position: absolute;
    right: 0;
    top: 4px;
    content: '';
    width: 8px;
    height: 8px;
    border-top: 1px solid #aaa;
    border-right: 1px solid #aaa;
    transform: rotate(45deg);
}
.usercard .menu {
    border-top: 10px solid #f5f5f5;
    background: #fff;
    border-bottom: 10px solid #f5f5f5;
}
.usercard .menu li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}
.usercard .menu li+li {
    border-top: 1px solid #eee;
}
.usercard .menu li img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.usercard .menu li p {
    flex: 1;
    font-size: 16px;
    font-weight: 400;
    color: #333;
}
.usercard .menu li span {
    color: #999;
    font-weight: 300;
    padding-right: 10px;
    position: relative;
}
.usercard .menu li span::after {
    position: absolute;
    right: 0;
    top: 4px;
    content: '';
    width: 8px;
    height: 8px;
    border-top: 1px solid #aaa;
    border-right: 1px solid #aaa;
    transform: rotate(45deg);
}
.usercard .ucard-btn {
    width: 100%;
    height: 40px;
    display: block;
    background: #fff;
    border-top: 1px solid #eee;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #4e5a89;
}
</style>
