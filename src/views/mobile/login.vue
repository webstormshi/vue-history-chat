<template>
  <div>
  	<div class="login_box">
  		<div class="choose_head">
  			<div class="headimg">
  				<img :src="'static/headimg/'+headimgArr[current_head]"/>
  			</div>
  		</div>
  		<div class="btn_group">
			<form @submit="login">
				<input type="text" class="btn" name="" id="" v-model="login_name" placeholder="你的名字" maxlength="8"/>
				<div class="login_btn btn" @click="login">登录</div>
			</form>
  		</div>
  	</div>
  </div>
</template>

<script>
	
export default {
  name: 'login',
  data () {
    return {
      login_name:'',
      current_head:0,
      headimgArr:[
      	'headimg01.jpg',
      	'headimg02.jpg',
      	'headimg03.jpg',
      	'headimg04.jpg',
      	'headimg05.jpg',
      	'headimg06.jpg',
      	'headimg07.jpg',
      	'headimg08.jpg',
      	'headimg09.jpg',
      	'headimg10.jpg'
      ]
    }
  },
	mounted: function(){
		document.title = "微信登录";
		this.current_head=Math.floor(Math.random()*this.headimgArr.length);
	},
  methods: {
  	change_head(lr){
  		if(lr==1){
  			this.current_head++;
				if(this.current_head>=this.headimgArr.length){
					this.current_head=0;
				}
  		}else{
  			if(this.current_head<=0){
					this.current_head=this.headimgArr.length;
				}
  			this.current_head--;
  		}
  	},
  	login(){
  		var _this=this;
  		if(_this.login_name==''){
  			_this.login_name='路人'+(100000+ Math.floor(Math.random()*899999));
  		}
  		socket.emit('login',_this.login_name);
  		socket.on('loginYZCG',function(loginInfo){
  			if(loginInfo.status==1){
  				var userinfo={userName:_this.login_name, headimg:_this.headimgArr[_this.current_head]};
		  		sessionStorage.setItem("curUser", JSON.stringify(userinfo));
		  		//登陆后立即发送用户信息去服务端
					socket.emit('message', {type:'onlinelist',username:userinfo.userName,userhead:userinfo.headimg,usermsg:{body:'',time:''}});
		  		_this.$router.push({ name: 'Message', params: userinfo});
  			}
  		});
  		socket.on('loginYZSB',function(loginInfo){
				_this.login_name='';
				alert(loginInfo.info);
				window.location.reload(true);
  		});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login_box {
		background: #f5f5f5;
		height: 100vh;
	}
	.choose_head {
		width: 100%;
		height: 114px;
		position: relative;
		padding-top: 100px;
	}
	.choose_head .headimg {
		width: 114px;
		height: 114px;
		margin: 0 auto;
		background: #999;
	}
	.choose_head .to {
		position: absolute;
		top: 36px;
		font-size: 32px;
		font-weight: bold;
		color: #1aad19;
		cursor: pointer;
	}
	.choose_head .to_left {
		left: 30px;
	}
	.choose_head .to_right {
		right: 30px;
	}
	.btn_group {
		width: 262px;
		height: 124px;
		margin: 0 auto;
		margin-top: 50px;
	}
	.btn_group .btn {
		width: 100%;
		height: 50px;
		text-align: center;
		border-radius: 5px;
		font-size: 16px;
	}
	.btn_group input {
		outline: none;
		border: 1px solid #e1e1e1;
		color: #878787;
		box-sizing: border-box;
	}
	.btn_group .login_btn {
		margin-top: 24px;
		background: #1aad19;
		line-height: 50px;
		color: #fff;
		cursor: pointer;
	}
</style>
