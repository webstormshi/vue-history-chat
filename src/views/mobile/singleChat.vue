<template>
	<div class="mchat-box" id="msgbox">
		<audio id="biu" src="static/biu.wav"></audio>
		<!-- <p class="mchat-loadingmore">加载更多</p> -->
		<ul>
			<li class="right" v-for="item in msg_list" v-if="item.username == userInfo.userName">
				<div class="item-info">
					<h1>{{item.username}}</h1>
					<p class="angle">{{item.usermsg.body}}</p>
				</div>
				<img :src="'static/headimg/' + item.userhead" />
			</li>
			<li v-else class="left">
				<img :src="'static/headimg/' + item.userhead" />
				<div class="item-info">
					<h1>{{item.username}}</h1>
					<p class="angle">{{item.usermsg.body}}</p>
				</div>
			</li>
		</ul>
		<div class="foot box-width">
			<img src="static/icon/audio_icon.png" />
			<div 
				class="input" 
				contenteditable="true" 
				@input="handleInput"
				@keydown.enter.prevent="send_msg"
				ref="input"
			>{{myMsg}}</div>
			<img src="static/icon/face_icon.png" />
			<!-- <img src="static/icon/add_icon.png" /> -->
			<a class="send-btn" @click="send_msg">发送</a>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'mchat',
	data() {
		return {
			myMsg: '',
			box: {},
			chat_title: '名小聊',
			userInfo: {},
			msg_list: [
				{
					fid: '0',
					tid: '2',
					username: 'nishishu',
					userhead: 'headimg05.jpg',
					usermsg: {
						body: '今天天气好哈哈～',
						time: '6:30'
					}
				},
				{
					fid: '0',
					tid: '2',
					username: 'nishishu',
					userhead: 'headimg02.jpg',
					usermsg: {
						body: '出来玩吧😄😄😂',
						time: '7:50'
					}
				}
			]
		}
	},
	mounted() {
		console.log('username', this.$route);
		var box = document.getElementById('msgbox');
		var biu=document.getElementById('biu');
		this.scrollheight = box.scrollHeight;
		this.userInfo = this.$route.params; 
		document.title = this.chat_title;
		//监听回车
		var _this = this;
		document.onkeyup = function (e) {
			var code = e.charCode || e.keyCode; 
			if (code == 13) {  
			_this.send_msg();
			}  
		}
		socket.on('message', function (information) {
			var info = information;
			if(info.type && info.type == "single_msg") {
				_this.msg_list.push(information);
				biu.play();
				var box = document.getElementById('msgbox');
				// setTimeout(() => {
				// 	if(this.scrollheight !== box.scrollHeight) {
				// 		box.scrollTop=box.scrollHeight;
				// 	}
				// 	this.scrollheight = box.scrollHeight;
				// }, 0);
			}
		})
	},
	methods: {
		handleInput(e) {
			this.myMsg = e.target.innerText;
		},
		send_msg(e) {
			if(!this.myMsg) {
				// alert('输入的内容不能为空!');
				return;
			}
			// clearMsg=clearMsg.replace(new RegExp('<','gm'),'&lt')
			var cureentTime = new Date().toLocaleTimeString().slice(2);
			var myInformation = {
				type:'msg',
				username: this.userInfo.userName,
				userhead: this.userInfo.headimg,
				usermsg:{ body:this.myMsg,time: cureentTime },
				type: 'single_msg',
				to: this.chat_title
			};
			if(this.myMsg){
				// 发送本机的消息
				socket.emit('message', myInformation);
				this.myMsg='';
				this.$refs.input.innerHTML = '';
				var box = document.getElementById('msgbox');
				setTimeout(() => {
					if(this.scrollheight !== box.scrollHeight) {
						box.scrollTop=box.scrollHeight;
					}
					this.scrollheight = box.scrollHeight;
				}, 0);
			}
		}
	}
}
</script>

<style>
.mchat-box {
	/* border: 1px solid red; */
	background: #ededed;
	height: 100vh;
	box-sizing: border-box;
	overflow: scroll;
}
.mchat-loadingmore {
	text-align: center;
	padding: 10px 0;
	color: cornflowerblue;
}
.mchat-box ul {
	min-height: 100vh;
}
.mchat-box ul li {
	display: flex;
	padding: 10px;
}
.mchat-box ul li img {
	width: 40px;
	height: 40px;
	border-radius: 3px;
	border: 1px solid #ddd;
	margin-right: 10px;
}
.mchat-box ul li .item-info {
	/* border: 1px solid red; */
	/* margin-left: 10px; */
}
.left .angle::before {
	position: absolute;
	left: -4px;
	top: 10px;
	content: '';
	width: 8px;
	height: 8px;
	transform: rotate(45deg);
	background: #fff;
}
.mchat-box ul li .item-info p {
	max-width: 200px;
	padding: 5px;
	background: #fff;
	border-radius: 3px;
	position: relative;
}
.mchat-box ul li.right {
	justify-content: flex-end;
	text-align: right;
}
.mchat-box ul li.right img {
	margin-right: 0;
	margin-left: 10px;
}
.mchat-box ul li.right .item-info p {
	background: #92e648;
	color: #000;
}
.right .angle::after {
	position: absolute;
	right: -4px;
	top: 10px;
	content: '';
	width: 8px;
	height: 8px;
	transform: rotate(45deg);
	background: #92e648;
}
.foot {
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background: #fff;
}
.foot img {
	width: 30px;
	height: 30px;
	padding: 0 5px;
	margin: 10px 0;
}
.foot .input {
	flex: 1;
	margin: 5px;
	outline: none;
	padding: 10px 10px;
	background: #fff;
	max-height: 100px;
	overflow: scroll;
	border-radius: 4px;
}
.foot .send-btn {
	background: #1AAD19;
	color: #fff;
	margin: 5px 10px 5px 0;
	padding: 10px 10px;
	border-radius: 4px;
}
</style>
