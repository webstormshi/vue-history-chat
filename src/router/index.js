import Vue from 'vue'
import Router from 'vue-router'

// PC 端聊天版本
import login from '@/views/login'
import chat from '@/views/chat'         // 聊天室
import channel from '@/views/channel'   // 频道列表
import choose from '@/views/choose'     // 选择频道

// 移动端聊天模版
import Index from '@/views/mobile/index'     // 聊天注册
import Message from '@/views/mobile/Message'
import FriendList from '@/views/mobile/FriendList'
import Interact from '@/views/mobile/Interact'
import Mine from '@/views/mobile/Mine'
import Usercard from '@/views/mobile/Usercard'

import mFriend from '@/views/mobile/friendcircle'     // 选择频道
import mLogin from '@/views/mobile/login'     // 选择频道
import mChat from '@/views/mobile/chat'         // 聊天室
import mChannel from '@/views/mobile/channel'   // 频道列表
import mChoose from '@/views/mobile/choose'     // 选择频道


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/message',
      children: [
        {
          path: '/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/friendlist',
          name: 'FriendList',
          component: FriendList
        },
        {
          path: '/interact',
          name: 'interact',
          component: Interact
        },
        {
          path: '/mine',
          name: 'Mine',
          component: Mine
        }
      ]
    },
    {
      path: '/mlogin',
      name: 'mLogin',
      component: mLogin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
        path: '/',
        name: 'channel',
        component: channel
      },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/choose',
      name: 'choose',
      component: choose
    },
    {
      path: '/mchat',
      name: 'mchat',
      component: mChat
    },
   
    {
      path: '/mchoose',
      name: 'mChoose',
      component: mChoose
    },
    {
      path: '/mfriend',
      name: 'mFriend',
      component: mFriend
    },
    {
      path: '/usercard',
      name: 'UserCard',
      component: Usercard
    }
  ]
})
