(() => { "use strict"; var e = { n: o => { var n = o && o.__esModule ? () => o.default : () => o; return e.d(n, { a: n }), n }, d: (o, n) => { for (var c in n) e.o(n, c) && !e.o(o, c) && Object.defineProperty(o, c, { enumerable: !0, get: n[c] }) }, o: (e, o) => Object.prototype.hasOwnProperty.call(e, o) }; const o = e => 11 === e.length, n = e => 6 === e.length, c = (bootstrap, axios); var t = e.n(c); t().defaults.baseURL = "https://geek.itheima.net", t().interceptors.request.use((function (e) { const o = localStorage.getItem("token"); return o && (e.headers.Authorization = `Bearer ${o}`), e }), (function (e) { return Promise.reject(e) })), t().interceptors.response.use((function (e) { return e.data }), (function (e) { return console.dir(e), 401 === e?.response?.status && (alert("身份验证失败，请重新登录"), localStorage.clear(), location.href = "../login/index.html"), Promise.reject(e) })); const a = t(); function l(e, o) { const n = document.querySelector(".alert"); n.classList.add(e ? "alert-success" : "alert-danger"), n.innerHTML = o, n.classList.add("show"), setTimeout((() => { n.classList.remove(e ? "alert-success" : "alert-danger"), n.innerHTML = "", n.classList.remove("show") }), 2e3) } console.log(o("13900002020")), console.log(n("123123123123")); document.querySelector(".btn").addEventListener("click", (() => { const e = document.querySelector(".login-form [name=mobile]").value, c = document.querySelector(".login-form [name=code]").value; return o(e) ? n(c) ? void a({ url: "/v1_0/authorizations", method: "POST", data: { mobile: e, code: c } }).then((e => { l(!0, "登录成功"), localStorage.setItem("token", e.data.token), location.href = "../content/index.html" })).catch((e => { l(!1, e.response.data.message) })) : (l(!1, "验证码长度必须是6位"), void console.log("验证码长度必须是6位")) : (l(!1, "手机号长度必须是11位"), void console.log("手机号长度必须是11位")) })), console.log("观察页面是否有自动打包更新"), console.log = function () { }, console.log("开发模式下好用，生产模式下失效"), console.warn("123"), console.log(a) })()