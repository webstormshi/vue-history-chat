<template>
    <div class="mine">
        <header>
            <img :src="'static/headimg/' + userInfo.headimg" />
            <div class="userinfo">
                <h1>{{userInfo.userName}}</h1>
                <p>当前角色：{{userinfo.actor}}【{{userinfo.play}}】</p>
                <a>微信号：{{userinfo.nickname}}</a>
            </div>
        </header>
        <h2 class="label">我的角色</h2>
        <ul class="m-menu">
            <li v-for="item in menus">
                <img :src="item.avatar" />
                <p>{{item.name}}</p>
                <span class="name">{{item.desc}}</span>
            </li>
        </ul>
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
                play: '西游记',
                actor: '孙悟空',
                avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
                userbg: 'https://wx4.sinaimg.cn/orj360/a3255108gy1g1wgndaltij20dw090aa5.jpg'
            },
            userInfo: {},
            menus: [
                {
                    icon: 'static/icon/message_icon.png',
                    name: '西游记',
                    desc: '孙悟空',
                    avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=623015082,1391146871&fm=26&gp=0.jpg'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '三国演义',
                    desc: '诸葛亮',
                    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2043799418,1609484514&fm=26&gp=0.jpg'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '水浒传',
                    desc: '请选择角色',
                    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555085768524&di=1421aeaedbbac4271debb3bbbeda1157&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2F0csa5mEAebX0anSZ4kMpSDP8axfMJzANm91HFjnDty1uo1527672925658transferflag.png'
                },
                {
                    icon: 'static/icon/message_icon.png',
                    name: '红楼梦',
                    desc: '请选择角色',
                    avatar: 'http://img4.imgtn.bdimg.com/it/u=2428265785,4258666747&fm=26&gp=0.jpg'
                }
            ]
        }
    },
    mounted() {
        if(sessionStorage.getItem('curUser')) {
            this.userInfo = JSON.parse(sessionStorage.getItem('curUser'));
        }
    }
}
</script>

<style>
.mine header {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 25px;
}
.mine header img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: #000;
}
.mine header .userinfo {
    margin-left: 10px;
    flex: 1;
}
.mine header .userinfo h1 {
    font-size: 18px;
}
.mine header .userinfo a, 
.mine header .userinfo p {
    position: relative;
    display: block;
    margin-top: 5px;
    color: #666;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
}
.mine .label {
    font-size: 12px;
    background: #f5f5f5;
    color: #666;
    padding: 10px;
    font-weight: 300;
}
.mine header .userinfo a::after {
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
.mine .m-menu {
    background: #fff;
}
.mine .m-menu li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
}
.mine .m-menu li+li {
    border-top: 1px solid #eee;
}
.mine .m-menu li img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.mine .m-menu li p {
    flex: 1;
    font-size: 16px;
    font-weight: 400;
    color: #333;
}
.mine .m-menu li span {
    color: #666;
    padding-right: 10px;
    position: relative;
}
.mine .m-menu li span::after {
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
.mine .copy-right {
    margin-top: 170px;
    text-align: center;
    color: #999;
    font-size: 10px;
}
</style>
