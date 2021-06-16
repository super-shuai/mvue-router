import History from './base'
export default class BrowserHistory extends History {
    constructor(router){
        super(router);
    }
    getCurrentLocation(){
        return window.location.pathname
    }
    setupListener(){
        // 监听popstate实现 进行路由跳转
        window.addEventListener('popstate',()=>{
            // 监听路径变化(浏览器的前进后退可以监控到) 进行跳转
            this.transitionTo(this.getCurrentLocation());
        })
    }
    push(location){
        // 跳转时采用的就是h5的api了 ,这里的切换不会调用postate
        this.transitionTo(location,()=>{
            window.history.pushState({},null,location);
        }); // 可以去匹配视图
    }
}
