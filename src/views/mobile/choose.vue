<template>
    <div class="modal">
        <header>扮演角色：<span>孙悟空</span></header>
        <ul>
            <li v-for="item in 30" @click="handleSelect">
                <img src='static/headimg/headimg03.jpg' />
                <h2>孙悟空</h2>
            </li>
        </ul>
        <div class="action-box">
            <a class="cancel" @click="handleCancel">取消</a>
            <a class="confirm" @click="handleConfirm">确定</a>
        </div>
    </div>
</template>

<script>
import close from '@/components/close.vue'
export default {
    name: 'choose',
    components: {
		'v-close' : close
    },
    methods: {
        handleSelect(e) {
            console.log('event', e);
        },
        handleCancel() {
            history.go(-1);
        },
        handleConfirm() {
            this.$router.push('/chat', { params: { id: 1 }});
        }
    }
}
</script>

<style>
.modal {
    background: #f5f5f5;
    max-height: 100vh;
    overflow: scroll;
}
.modal header {
    background: #fff;
    padding: 10px 10px;
    font-size: 16px;
    color: #666;
}
.modal header span {
    color: #1AAD19;
}
.modal ul {
    display: flex;
    flex-wrap: wrap;
}
.modal ul li {
    margin: 5px;
    text-align: center;
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.modal ul li h2 {
    font-size: 12px;
    color: #333;
}
.modal ul li img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    margin-bottom: 10px;
}
.modal .action-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    position: sticky;
    bottom: 0;
    left: 0;
    background: #fff;
}
.modal .action-box a {
    display: inline-block;
    width: 150px;
    height: 30px;
    border: 1px solid #1AAD19;
    color: #1AAD19;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
    font-size: 14px;
}
.modal .action-box .confirm {
    color: #fff;
    background: #1AAD19;
}
</style>