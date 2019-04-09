<template>
	<div class="mchat-box">
		<p class="mchat-loadingmore">加载更多</p>
		<ul clas='mchat-box'>
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
		<div class="foot">
			<img src="static/icon/audio_icon.png" />
			<div class="input" contenteditable="true"></div>
			<img src="static/icon/face_icon.png" />
			<!-- <img src="static/icon/add_icon.png" /> -->
			<a class="send-btn">发送</a>
		</div>
	</div>	
</template>

<script>
export default {
	name: 'mchat',
	data() {
		return {
			chat_msg: [
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
	}
}
</script>

<style>
.mchat-box {
	/* border: 1px solid red; */
	background: #ededed;
	min-height: 100vh;
}
.mchat-loadingmore {
	text-align: center;
	padding: 10px 0;
	color: cornflowerblue;
}
.mchat-box li {
	display: flex;
	padding: 10px;
}
.mchat-box li img {
	width: 40px;
	height: 40px;
	border-radius: 3px;
	border: 1px solid #ddd;
	margin-right: 10px;
}
.mchat-box li .item-info {
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
.mchat-box li .item-info p {
	max-width: 200px;
	padding: 5px;
	background: #fff;
	border-radius: 3px;
	position: relative;
}
.mchat-box li.right {
	justify-content: flex-end;
}
.mchat-box li.right img {
	margin-right: 0;
	margin-left: 10px;
}
.mchat-box li.right .item-info p {
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
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
.foot img {
	width: 20px;
	height: 20px;
	padding: 0 5px;
	margin: 10px 0;
}
.foot .input {
	flex: 1;
	margin: 5px;
	outline: none;
	padding: 5px 10px;
	background: #fff;
	max-height: 100px;
	overflow: scroll;
	border-radius: 4px;
}
.foot .send-btn {
	background: #1AAD19;
	color: #fff;
	margin: 5px 10px 5px 0;
	padding: 5px 10px;
	border-radius: 4px;
}
</style>
