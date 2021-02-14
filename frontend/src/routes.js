import Vue from "vue"
import VueRouter from "vue-router"
import { store } from "./store"

Vue.use(VueRouter)
Vue.use(store)

const onlyAuthUser = function usercheck (to, from, next){
    if (store.state.isLogin === false) {
        alert('로그인이 필요한 페이지입니다.')
        router.push({ name: 'Login'});
    } else {
        next();
    }
}

const LoginUser = function LoginUserCheck (to, from, next) {
    if (store.state.isLogin === true) {
        alert('로그인이 되어있는 상태입니다.')
        next({ path: '/main'})
    } else {
        next();
    }
}

const routes = [
    {
        path : '/',
        name : 'Login',
        beforeEnter: LoginUser,
        component: () => import('@/views/user/Login.vue')
    },
    {
        path : '/passwordsearch',
        name : 'PasswordSearch',
        // beforeEnter: LoginUser,
        component: () => import('@/views/user/PasswordSearch')
    },
    {
        path : '/passwordchange',
        name : 'PasswordChange',
        // beforeEnter: LoginUser,
        component: () => import('@/views/user/PasswordChange')
    },
    {
        path : '/main',
        name : 'Main',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/main/Main')
    },
    {
        path : '/makemeeting',
        name : 'MakeMeeting',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/makemeeting/MakeMeeting'),
        props: true
    },
    {   
        path: '/signup',
        name: 'Signup',
        component: () => import('@/views/user/Signup'),
    },
    {   
        path: '/mypage',
        name: 'MyPage',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/user/MyPage.vue')
    },
    {
        path: '/kakaocallback',
        name: 'KakaoCallback',
        component: () => import('@/views/user/KakaoCallback')
    },
    { 
        path: '/meetingroom/:id', 
        name: 'MeetingRoom',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/meetingroom/MeetingRoom'),
        props: true
    },
    { 
        path: '/updatemeetingroom/:id', 
        name: 'UpdateMeetingRoom',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/updatemeeting/UpdateMeetingRoom'),
        props: true
    },
    { 
        path: '/alarm', 
        name: 'Alarm',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/alarm/Alarm'),
    },
    {
        path: '/image/upload',
        name: 'Upload',
        component: () => import('@/components/file/Upload'),
    },
    {
        path: '/mycalendar',
        name: 'MyCalendar',
        component: () => import('@/views/calendar/MyCalendar')
    },
    { 
        path: '/SearchMeetingRoom/:search', 
        name: 'SearchMeetingRoom',
        beforeEnter: onlyAuthUser,
        component: () => import('@/views/main/SearchMeetingRoom'),
        props: true
    },    
    { 
        path: '/nlp', 
        name: 'NLP',
        component: () => import('@/views/NLP'),
    },
  ]
  
  const router = new VueRouter({
    base: process.env.BASE_URL,
    // mode: 'history',
    routes
    
  })

export default router
