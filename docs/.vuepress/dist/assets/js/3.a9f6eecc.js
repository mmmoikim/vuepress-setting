(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(e,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress 공식 사이트"),s("OutboundLink")],1)])])]),e._v(" "),e._m(1)]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vuepress-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-setting","aria-hidden":"true"}},[this._v("#")]),this._v(" VUEPRESS-SETTING")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("vuepress 설치")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("npm install -D vuepress\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("디렉토리 셋팅")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("├─ docs\n│  ├─ README.md\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("package.json 런 스트립트 추가")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("config.js 셋팅")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("module.exports = {\n    title: 'Hello VuePress',\n    description: 'Just playing around',\n    base: '/<리파지토리 이름>/'\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("deploy.sh 만들기")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("#!/usr/bin/env sh\n\n# abort on errors\nset -e\n\n# build\nnpm run docs:build\n\n# navigate into the build output directory\ncd docs/.vuepress/dist\n\n# if you are deploying to a custom domain\n# echo 'www.example.com' > CNAME\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# if you are deploying to https://<USERNAME>.github.io\n# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master\n\n# if you are deploying to https://<USERNAME>.github.io/<REPO>\n# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n\ncd -\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"docs-dev-빌드시-typeerror-res-getheader-is-not-a-function-에러"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docs-dev-빌드시-typeerror-res-getheader-is-not-a-function-에러","aria-hidden":"true"}},[this._v("#")]),this._v(" docs:dev 빌드시 TypeError: res.getHeader is not a function 에러")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("npm install webpack-dev-middleware@3.6.0 설치")])])}],!1,null,null,null);t.default=r.exports}}]);