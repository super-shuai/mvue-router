export function createRoute(record, location) {
    let res = [];

    // /about /about/a
    if (record) {
        while (record) {
            res.unshift(record)
            record = record.parent;
        }
    }
    return {
        ...location,
        matched: res
    }
}

export default class History {
    constructor(router) {
        this.router = router;
        this.current = crateRoute(null, {
            path: '/'
        })
    }
    // 根据
    transitionTo(location, cb) { // 默认会先执行一次
        console.log(location); // match
        cb && cb(); // cb调用后hash 值变化会再次调用transitionTo
    }
}