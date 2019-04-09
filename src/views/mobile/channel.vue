<template>
    <div class='channel_box'>
        <header>古今穿越大乐透</header>
        <ul>
            <li v-for="item in 10">
                <img src="static/headimg/headimg01.jpg" />
                <div class="channel-info">
                    <h1>我是三大白骨精</h1>
                    <h2>这里是在线频道的基本介绍，大家了解以下就好。</h2>
                    <p><span>参与: 230人</span><span>围观: 2329人</span></p>
                    <h3>
                        <a @click="handleClick('/mchoose')">前去围观</a>
                        <a @click="handleLink('/mchat')">参与对话</a>
                    </h3>
                </div>
            </li>
        </ul>
        <p class="bottomLine">这是我的底线～</p>
    </div>
</template>

<script>
import close from '@/components/close.vue'
export default {
    name: 'mChannel',
    components: {
        'v-close' : close
    },
    mounted() {
        document.title = '请选择频道';
    },
    methods: {
        handleLink(url) {
            this.$router.push(url);
        }
    }
}
</script>

<style>
.channel_box {
    max-height: 100vh;
    overflow-y: scroll;
    background: #eee;
}
header {
    padding: 15px 0;
    text-align: center;
    font-size: 18px;
    background: #fff;
    border: 1px solid #eee;
}
ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: transform 0.5s;
    background: #fff;
}
.channel_box ul li+li {
    border-top: .3125rem /* 5/16 */ solid #eee;
}
.channel_box ul li img {
    width: 3.125rem /* 50/16 */;
    height: 3.125rem /* 50/16 */;
}
.channel_box ul li .channel-info {
    margin-left: 10px;
}
.channel_box ul li .channel-info h1 {
    font-size: 20px;
    color: #333;
}
.channel_box ul li .channel-info h2 {
    font-size: 12px;
    color: #999;
}
ul li .channel-info p {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
.channel_box ul li .channel-info h3 a{
    display: inline-block;
    margin-right: 30px;
    margin-top: 5px;
    font-size: 12px;
    padding: 3px 10px;
    border-radius: 3px;
    color: #fff;
    background: #1AAD19;
}
.channel_box ul li .channel-info h3 a:hover {
    background: #179B16;
    cursor: pointer;
}
.bottomLine {
    background: #eee;
    padding: 20px;
    text-align: center;
    color: #999;
}
</style>
