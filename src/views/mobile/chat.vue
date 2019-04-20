<template>
	<div class="mchat-box">
		<p class="mchat-loadingmore">加载更多</p>
		<ul>
			<li class="left" v-for="item in chat_msg" v-if="item.fid == 0">
				<img :src="item.avatar" />
				<div class="item-info">
					<h1>{{item.name}}</h1>
					<p class="angle">{{item.content}}</p>
				</div>
			</li>
			<li v-else class="right">
				<div class="item-info">
					<h1>{{item.name}}</h1>
					<p class="angle">{{item.content}}</p>
				</div>
				<img :src="item.avatar" />
			</li>
		</ul>
		<div class="foot box-width">
			<img src="static/icon/audio_icon.png" />
			<div class="input" contenteditable="true">{{myMsg}}</div>
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
			chat_msg: [
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				},
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演'
				},
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				},
				{
					fid: '1',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				},
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演'
				},
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				},
				{
					fid: '1',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				},
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演我是你的演'
				},
				{
					fid: '0',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				},
				{
					fid: '1',
					tid: '2',
					name: 'nishishu',
					avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
					content: '我是你的演'
				}
			]
		}
	},
	mounted() {
		document.title = `世纪大混战群(${this.chat_msg.length})`;
		//监听回车
		var _this = this;
		document.onkeyup = function (e) {
			var code = e.charCode || e.keyCode; 
			if (code == 13) {  
			_this.send_msg();
			}  
		}
	},
	methods: {
		send_msg(){
			console.log(this.myMsg);
			var _this=this;
			if(this.myMsg.replace(/\s+/g,"")==""){
				if(this.sendEmptyFlag==0){
					this.sendEmptyFlag=1;
						var sendEmptyTimer=setTimeout(function(){
						_this.sendEmptyFlag=0;
						clearTimeout(sendEmptyTimer);
					},2500);
				};
				return;
			}
			var clearMsg=this.myMsg;
			clearMsg=clearMsg.replace(new RegExp('<','gm'),'&lt')
			
			var myInformation = {
				type:'msg',
			username:this.myName,
			userhead:this.myHead,
			usermsg:{body:clearMsg,time:'0:00'}
			};
			if(this.currentChat!=0){
				myInformation.type='single_msg';
				myInformation.to=this.chat_title;
			}
			if(this.myMsg){
				//this.msg_list.push(myInformation);
				// 发送本机的消息
			socket.emit('message', myInformation);
			this.myMsg='';
			}
		}
	}
}
</script>

<style>
.mchat-box {
	/* border: 1px solid red; */
	background: #ededed;
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
