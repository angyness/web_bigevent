$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007' + options.url
        // 需要访问权限
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
        options.complete = function(res) {
            if (res.responseJSON.status === 1 && res.responseJSON.message === '身份证失败！') {
                localStorage.removeItem('token')
                location.href = './login.html'
            }
        }
    }

}
})