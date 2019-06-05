class Store {
  setCookie ( name,value,expire ) {
    var time = new Date()
    var exp = expire
    ? time.setDate(time.getDate() + expire )
    : +time
    document.cookie = `${name}=${value};expires=${new Date(exp).toGMTString()}`
  }
  getCookie ( name ) {
    var p = this.cookieJson()
    return p[name] || ''
  }
  rmCookie ( name ) {
    this.setCookie(name,'',-1)
  }
  cookieJson () {
    var p = {}
    var reg = /([^?&#=]+)=([^;]+)/g
    var cookie = document.cookie
    cookie.replace(reg, (_,a,b) => p[a] = b)
    return p
  }
}
var cookie = new Store()
export { cookie }
