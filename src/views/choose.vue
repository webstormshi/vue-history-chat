<template>
    <div class="modal">
        <div class="modal_box">
            <div class="top_bar">
                <div class="name">选择你在《西游记》中的角色</div>
                <v-close></v-close>
            </div>
            <ul>
                <li v-for="item in 20" @click="handleSelect">
                    <img src='static/headimg/headimg03.jpg' />
                    <h2>孙悟空</h2>
                </li>
            </ul>
            <div class="action-box">
                <a class="cancel" @click="handleCancel">取消</a>
                <a class="confirm" @click="handleConfirm">确定</a>
            </div>
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
.modal_box {
    width: 630px;
    height: 500px;
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
.modal .top_bar {
    width: 100%;
    height: 45px;
    position: sticky;
    top: 0;
    background: #f5f5f5;
}
.modal .top_bar .name {
    float: left;
    font-size: 20px;
    line-height: 45px;
    margin-left: 26px;
    color: #4a4a4a;
}
.modal  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    box-sizing: border-box;
    max-height: 400px;
    overflow: scroll;
    padding-bottom: 20px;
}
.modal ul li {
    margin: 10px;
    text-align: center;
    box-shadow: 0 0 3px 0px #999;
    padding: 10px;
    transition: transform 0.3s;
    box-sizing: border-box;
}
.modal ul li:hover {
    transform: scale(1.1) translate(0);
    border: 1px solid #1AAD19;
}
.modal ul li:visited {
    border: 1px solid #1AAD19;
}
.modal ul li h2 {
    font-size: 14px;
    color: #333;
}
.modal ul li img{
    width: 80px;
    height: 80px;
}
.modal .action-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
}
.modal .action-box a {
    display: inline-block;
    width: 100px;
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