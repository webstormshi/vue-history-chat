<template>
    <div class='channel_box'>
        <div class="top_bar">
            <div class="name">请选择频道</div>
            <v-close></v-close>
        </div>
        <ul class="channel-list">
            <li v-for="item in 20">
                <img src="static/headimg/headimg01.jpg" />
                <div class="channel-info">
                    <h1>我是三大白骨精</h1>
                    <h2>这里是在线频道的基本介绍，大家了解里是在线频道的基本介绍，大家了解以下就好。</h2>
                    <p><span>参与: 230人</span><span>围观: 2329人</span></p>
                    <h3>
                        <a @click="handleClick('/choose')">前去围观</a>
                        <a @click="handleLink('/chat')">参与对话</a>
                    </h3>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import close from '@/components/close.vue'
export default {
    components: {
        'v-close' : close
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
    width: 800px;
    height: 650px;
    background: #f5f5f5;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    overflow-y: scroll;
    box-shadow: 0 0 10px 0px #999;
}
.channel_box .top_bar {
    width: 100%;
    height: 45px;
    position: sticky;
    top: 0;
    background: #f5f5f5;
}
.channel_box .top_bar .name {
    float: left;
    font-size: 20px;
    line-height: 45px;
    margin-left: 26px;
    color: #4a4a4a;
}
.channel_box .channel-list {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.channel_box .channel-list li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 330px;
    padding: 10px;
    margin-bottom: 30px;
    box-shadow: 0 0 3px 0px #999;
    transition: transform 0.5s;
}
.channel_box .channel-list li img {
    width: 100px;
    height: 100px;
}
.channel_box .channel-list li .channel-info {
    margin-left: 10px;
}
.channel_box .channel-list li .channel-info h1 {
    font-size: 20px;
    color: #333;
}
.channel_box .channel-list li .channel-info h2 {
    font-size: 12px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.channel_box .channel-list li .channel-info p {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
.channel_box .channel-list li:hover {
    transform: scale(1.1);
}
.channel_box .channel-list li .channel-info h3 a{
    display: inline-block;
    margin-right: 30px;
    font-size: 12px;
    padding: 0 10px;
    border-radius: 3px;
    color: #fff;
    background: #1AAD19;
}
.channel_box .channel-list li .channel-info h3 a:hover {
    background: #179B16;
    cursor: pointer;
}
</style>
