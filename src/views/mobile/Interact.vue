<template>
    <div class="interact">
        <header :style="{'backgroundImage': `url(https://wx4.sinaimg.cn/orj360/a3255108gy1g1wgndaltij20dw090aa5.jpg)`}">
            <h1>{{userinfo.userName}}</h1>
            <img :src="'static/headimg/' + userinfo.headimg" />
        </header>
        <ul class="menu">
            <li v-for="item in list">
                <img class="avatar" :src="item.avatar" />
                <div class="detail">
                    <h1>{{item.nickname}}</h1>
                    <p class="content">{{item.content}}</p>
                    <p class="desc">全文</p>
                    <div class="imgs-box">
                        <img v-for="img in item.imgs" :src="img" />
                    </div>
                    <p class="small">{{item.time}}</p>
                    <div class="comment">
                        <p class="thumbs">
                            <span v-for="thumb in item.thumbs ">{{thumb.name + ' '}}</span>
                            <span v-if="item.thumbs_total > item.thumbs.length">等{{item.thumbs_total}}人觉得很赞</span>
                            <span v-else>赞了你</span>
                        </p>
                        <p v-for="comment in item.comments" v-if="comment.fid === userinfo.uid">
                            <span class="thumbs">{{comment.from}}</span>回复
                            <span class="thumbs">{{comment.to + ': '}}</span>
                            {{comment.content}}
                        </p>
                        <p v-else>
                            <span class="thumbs">{{comment.from + ': '}}</span>
                            {{comment.content}}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Interact',
    data() {
        return {
            userinfo: {
                uid: 1,
                nickname: '四大名聊',
                avatar: 'http://wx.qlogo.cn/mmopen/049dFBmhic79TM8ia7jYnPYjdYgFicUN4CyyfoEicnpibQcYIgkPrCXs1mPKTNTHMuMB4aEDg7XIJTt0jD8Uh65hCuJGtKnOJKPe2/64'
            },
            list: [
                {
                    'avatar': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                    'nickname': '怒放的生命',
                    'content': '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演',
                    thumbs: [{ uid: 1, name: 'jaingix', }, { uid: 2, name: 'jaingix', }, { uid: 3, name: 'jaingix', }],
                    thumbs_total: 3,
                    time: '刚刚',
                    imgs: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2026315314,1997848504&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3635017255,2587566580&fm=26&gp=0.jpg'],
                    comments: [{ fid: 1, from: '用户1', to: '用户2', tid: 2, content: '我是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是你的演'}, { fid: 2, tid: 1, from: '用户1', content: '我是你的演我是你的演'}, { fid: 2, from: '用户2', tid: 1, content: '我是你的演我是你的演'}]
                },
                {
                    'avatar': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                    'nickname': '怒放的生命',
                    'content': '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演',
                    thumbs: [{ uid: '', name: 'jaingix', }, { uid: '', name: 'jaingix', }, { uid: '', name: 'jaingix', }],
                    thumbs_total: 15,
                    time: '3小时以前',
                    comments: [{ fid: 1, from: '用户1', to: '用户2', tid: 2, content: '我是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是你的演'}, { fid: 2, tid: 1, from: '用户1', content: '我是你的演我是你的演'}, { fid: 2, from: '用户2', tid: 1, content: '我是你的演我是你的演'}]
                },
                {
                    'avatar': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                    'nickname': '怒放的生命',
                    'content': '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演',
                    thumbs: [{ uid: '', name: 'jaingix', }, { uid: '', name: 'jaingix', }, { uid: '', name: 'jaingix', }],
                    thumbs_total: 15,
                    time: '2天以前',
                    comments: [{ fid: 1, from: '用户1', to: '用户2', tid: 2, content: '我是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是你的演'}, { fid: 2, tid: 1, from: '用户1', content: '我是你的演我是你的演'}, { fid: 2, from: '用户2', tid: 1, content: '我是你的演我是你的演'}]
                },
                {
                    'avatar': 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                    'nickname': '怒放的生命',
                    'content': '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演',
                    thumbs: [{ uid: '', name: 'jaingix', }, { uid: '', name: 'jaingix', }, { uid: '', name: 'jaingix', }],
                    thumbs_total: 15,
                    time: '刚刚',
                    imgs: ['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2026315314,1997848504&fm=26&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3635017255,2587566580&fm=26&gp=0.jpg'],
                    comments: [{ fid: 1, from: '用户1', to: '用户2', tid: 2, content: '我是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是是你的演我是你的演'}, { fid: 2, tid: 1, from: '用户1', content: '我是你的演我是你的演'}, { fid: 2, from: '用户2', tid: 1, content: '我是你的演我是你的演'}]
                }
            ]
        }
    },
    mounted() {
        if(sessionStorage.getItem('curUser')) {
            this.userinfo = JSON.parse(sessionStorage.getItem('curUser'));
        }
    }
}
</script>

<style>
.interact {
    height: 100vh;
    background: #f5f5f5;
    overflow: scroll;
}
.interact header {
    position: relative;
    height: 150px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}
.interact header img{
    width: 100px;
    height: 100px;
    background: #000;
    border-radius: 10px;
    position: absolute;
    bottom: -20px;
    right: 20px;
}
.interact header h1 {
    position: absolute;
    bottom: 0;
    right: 130px;
    color: #ffffff;
    padding-bottom: 10px;
    max-width: 200px;
    font-size: 16px;
}
.interact .menu {
    background: #fff;
    overflow: scroll;
    margin-bottom: 60px;
}
.interact .menu li {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    border-bottom: 1px solid #eee;
}
.interact .menu li .avatar {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #eee;
}
.interact .menu li .detail {
    margin-left: 10px;
}
.interact .menu li .detail .content {
    font-size: 14px;
}
.interact .menu li .detail h1 {
    font-weight: bold;
    font-size: 14px;
    color: #4e5a89;
    margin-bottom: 5px;
}
.interact .menu li .detail .desc {
    color: #4e5a89;
    margin: 3px;
    font-size: 14px;
    font-weight: 400;
}
.interact .menu li .detail .imgs-box img {
    width: 100px;
    margin: 5px;
}
.interact .menu li .detail .small {
    color: #999;
    font-size: 10px;
}
.interact .menu li .detail .comment {
    background: #eee;
    border-radius: 5px;
    padding: 8px;
    margin-top: 5px;
}
.interact .menu li .detail .thumbs {
    color: #4e5a89;
    font-weight: bold;
}
</style>
