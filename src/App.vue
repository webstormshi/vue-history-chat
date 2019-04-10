<template>
  <div id="app" class="box-width">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
	  this.$router.push('/');
	}
}
</script>

<style>
	html{
	color:#000;
	background:#efefef;
	}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,footer,article,aside,header,section,nav,figure,figcaption,hgroup{
		margin:0;
		padding:0;
	}table{
		border-collapse:collapse;
		border-spacing:0;
	}fieldset,img{
		border:0;
	}address,caption,cite,code,dfn,em,strong,th,var{
		font-style:normal;
		font-weight:normal;
	}ol,ul{
		list-style:none;
	}caption,th{
		text-align:left;
	}h1,h2,h3,h4,h5,h6{
		font-size:100%;
		font-weight:normal;
	}q:before,q:after{
		content:'';
	}abbr,acronym{
		border:0;
		font-variant:normal;
	}sup{
		vertical-align:text-top;
	}sub{
		vertical-align:text-bottom;
	}input,textarea,select{
		font-family:inherit;
		font-size:inherit;
		font-weight:inherit;
		*font-size:100%;
	}legend{
		color:#000;
	}
	
	html,body {
		width: 100%;
		height: 100%;
		font-family: "微软雅黑";
	}
	#app {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		position: relative;
		overflow: hidden;
	}
	img {
		width: 100%;
	}
	@media screen and (min-width: 768px) {
		.box-width{
			max-width: 750px;
			margin: 0 auto;
		}
		.m-container-max {
			width:750px;
			margin: 0 auto
		}
	}
</style>
