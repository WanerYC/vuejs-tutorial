(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{55:function(t,a,s){t.exports=s.p+"assets/img/todomvc-component.a6b47bb9.png"},73:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"组件基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件基础")]),n("blockquote",[n("p",[t._v("组件基础：")]),n("ul",[n("li",[t._v("了解组件的概念")]),n("li",[t._v("掌握组件的定义")]),n("li",[t._v("了解组件的组织方式")]),n("li",[t._v("掌握组件通信")])])]),n("p",[t._v("组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。")]),n("p",[n("img",{attrs:{src:"https://cn.vuejs.org/images/components.png",alt:"Component Tree"}})]),n("h2",{attrs:{id:"通过-element-感受组件的威力"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过-element-感受组件的威力","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过 Element 感受组件的威力")]),n("p",[t._v("Element 是基于 Vue 开发的一个知名的第三方组件库，它能帮助我们更加快速的构建应用。")]),n("blockquote",[n("p",[n("a",{attrs:{href:"http://element-cn.eleme.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element 官网")])])]),n("p",[t._v("安装：")]),n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" i element-ui\n")])]),n("p",[t._v("Hello World:")]),n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 引入样式 --\x3e")]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/element-ui/lib/theme-chalk/index.css"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("visible = true"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按钮"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-dialog")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v(":visible.sync")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("visible"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Hello world"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("欢迎使用 Element"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-dialog")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 先引入 Vue --\x3e")]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue/dist/vue.js"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}}),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 引入组件库 --\x3e")]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/element-ui/lib/index.js"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}}),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      data"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" visible"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  ")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),n("hr"),n("h2",{attrs:{id:"使用组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用组件")]),n("p",[t._v("组件的定义方式分为两种，全局定义和局部定义：")]),n("ul",[n("li",[t._v("全局组件定义在全局，在任意组件中都可以直接使用")]),n("li",[t._v("局部组件定义在组件内部，只能在当前组件使用")]),n("li",[t._v("建议把通用的组件定义在全局，把不通用的组件定义在局部")])]),n("h3",{attrs:{id:"全局注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局注册")]),n("p",[t._v("注册：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.component('my-component', {\n  template: '<div>A custom component!</div>'\n});\n\n// 创建根实例\nnew Vue({\n  el: '#example'\n});\n")])]),n("p",[t._v("在模板中使用组件：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div id="example">\n  <my-component></my-component>\n</div>\n')])]),n("p",[t._v("渲染结果：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div id="example">\n  <div>A custom component!</div>\n</div>\n')])]),n("h3",{attrs:{id:"局部注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#局部注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 局部注册")]),n("p",[t._v("你不必把每个组件都注册到全局。你可以通过某个 Vue 实例/组件的实例选项 "),n("code",[t._v("components")]),t._v(" 注册仅在其作用域中可用的组件：")]),n("p",[t._v("注册：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("new Vue({\n  // ...\n  components: {\n    // <my-component> 将只在父组件模板中可用\n    'my-component': {\n      template: '<div>A custom component!</div>'\n    }\n  }\n});\n")])]),n("p",[t._v("使用：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div id="example">\n  <div>A custom component!</div>\n</div>\n')])]),n("hr"),n("h3",{attrs:{id:"组件的模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件的模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件的模板")]),n("ul",[n("li",[t._v("DOM 模板")]),n("li",[t._v("字符串模板")]),n("li",[t._v(".vue 单文件组件中的 "),n("code",[t._v("template")]),t._v(" 模板")])]),n("h3",{attrs:{id:"组件的-data-必须是函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件的-data-必须是函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件的 "),n("code",[t._v("data")]),t._v(" 必须是函数")]),n("p",[t._v("构造 Vue 实例时传入的各种选项大多数都可以在组件里使用。只有一个例外：data 必须是函数。")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.component('simple-counter', {\n  template: '<button v-on:click=\"counter += 1\">{{ counter }}</button>',\n  data: function () {\n    return { counter: 0 }\n  }\n});\n\nnew Vue({\n  el: '#example-2'\n});\n")])]),n("h3",{attrs:{id:"组件的作用域是独立的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件的作用域是独立的","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件的作用域是独立的")]),n("ul",[n("li",[t._v("组件无法访问外部作用域成员")]),n("li",[t._v("外部作用域也无法访问组件内部成员")])]),n("h3",{attrs:{id:"组件组合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件组合","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件组合")]),n("p",[t._v("组件设计初衷就是要配合使用的，最常见的就是形成父子组件的关系：组件 A 在它的模板中使用了组件 B。它们之间必然需要相互通信：父组件可能要给子组件下发数据，子组件则可能要将它内部发生的事情告知父组件。然而，通过一个良好定义的接口来尽可能将父子组件解耦也是很重要的。这保证了每个组件的代码可以在相对隔离的环境中书写和理解，从而提高了其可维护性和复用性。\n在 Vue 中，父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。看看它们是怎么工作的。")]),n("p",[n("img",{attrs:{src:"https://cn.vuejs.org/images/props-events.png",alt:"prop 向下传递，事件向上传递"}})]),n("hr"),n("h2",{attrs:{id:"组件化构建-todomvc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件化构建-todomvc","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件化构建 TodoMVC")]),n("p",[n("img",{attrs:{src:s(55),alt:"todomvc-component.png"}})]),n("hr"),n("h2",{attrs:{id:"组件通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件通信","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件通信")]),n("p",[n("img",{attrs:{src:"http://angular.circle.ink/docs/media/891636a0-af23-11e7-b111-4d6e630f480d.png",alt:""}})]),n("p",[t._v("在树形结构里面，组件之间有几种典型的关系：父子关系、兄弟关系、没有直接关系。")]),n("p",[t._v("相应地，组件之间有以下几种典型的通讯方案：")]),n("ul",[n("li",[n("p",[t._v("直接的父子关系")])]),n("li",[n("p",[t._v("直接的父子关系")])]),n("li",[n("p",[t._v("没有直接关系")])]),n("li",[n("p",[t._v("利用 cookie 和 localstorage 进行通讯。")])]),n("li",[n("p",[t._v("利用 session 进行通讯。")])]),n("li",[n("p",[t._v("父传子 Props Down")])]),n("li",[n("p",[t._v("子通知父亲 Events Up")])]),n("li",[n("p",[t._v("通过 ref 父亲直接访问子组件")]),n("ul",[n("li",[t._v("给子组件起个 ref")]),n("li",[t._v("然后在父组件中通过 "),n("code",[t._v("this.$refs.子组件ref名")])])])]),n("li",[n("p",[t._v("子组件可以在内部通过 "),n("code",[t._v("this.$parent")]),t._v(" 直接访问父组件")])]),n("li",[n("p",[t._v("非父子关系")]),n("ul",[n("li",[t._v("事件通信 Events Bus")])])])]),n("h2",{attrs:{id:"父子组件通信：props-down"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父子组件通信：props-down","aria-hidden":"true"}},[t._v("#")]),t._v(" 父子组件通信：Props Down")]),n("p",[n("strong",[t._v("1. 在父组件中通过子组件标签属性传递数据")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<child message="hello!"></child>\n')])]),n("p",[n("strong",[t._v("2. 在子组件显式地用 "),n("code",[t._v("props")]),t._v(" 选项声明它预期的数据并使用")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.component('child', {\n  // 声明 props\n  props: ['message'],\n  // 就像 data 一样，prop 也可以在模板中使用\n  // 同样也可以在 vm 实例中通过 this.message 来使用\n  template: '<span>{{ message }}</span>'\n});\n")])]),n("h3",{attrs:{id:"camelcase-vs-kebab-case"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#camelcase-vs-kebab-case","aria-hidden":"true"}},[t._v("#")]),t._v(" camelCase vs. kebab-case")]),n("p",[t._v("HTML 特性是不区分大小写的。所以，当使用的不是字符串模板时，camelCase (驼峰式命名) 的 prop 需要转换为相对应的 kebab-case (短横线分隔式命名)。")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.component('child', {\n  // 在 JavaScript 中使用 camelCase\n  props: ['myMessage'],\n  template: '<span>{{ myMessage }}</span>'\n});\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\x3c!-- 在 HTML 中使用 kebab-case --\x3e\n<child my-message="hello!"></child>\n')])]),n("p",[t._v("如果你使用字符串模板，则没有这些限制。")]),n("h3",{attrs:{id:"动态-prop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#动态-prop","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态 Prop")]),n("p",[t._v("与绑定到任何普通的 HTML 特性相类似，我们可以用 "),n("code",[t._v("v-bind")]),t._v(" 来动态地将 "),n("code",[t._v("prop")]),t._v(" 绑定到父组件的数据。每当父组件的数据变化时，该变化也会传导给子组件：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div>\n  <input v-model="parentMsg">\n  <br>\n  <child v-bind:my-message="parentMsg"></child>\n</div>\n')])]),n("p",[t._v("你也可以使用 v-bind 的缩写语法：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<child :my-message="parentMsg"></child>\n')])]),n("h3",{attrs:{id:"字面量语法-vs-动态语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字面量语法-vs-动态语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 字面量语法 vs 动态语法")]),n("p",[t._v("初学者常犯的一个错误是使用字面量语法传递数值：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\x3c!-- 传递了一个字符串 "1" --\x3e\n<comp some-prop="1"></comp>\n')])]),n("p",[t._v('因为它是一个字面量 prop，它的值是字符串 "1" 而不是一个数值。如果想传递一个真正的 JavaScript 数值，则需要使用 v-bind，从而让它的值被当作 JavaScript 表达式计算：')]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\x3c!-- 传递真正的数值 --\x3e\n<comp v-bind:some-prop="1"></comp>\n')])]),n("h3",{attrs:{id:"单向数据流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流","aria-hidden":"true"}},[t._v("#")]),t._v(" 单向数据流")]),n("p",[t._v("Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。")]),n("p",[t._v("另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。")]),n("p",[t._v("在两种情况下，我们很容易忍不住想去修改 prop 中数据：")]),n("ol",[n("li",[t._v("Prop 作为初始值传入后，子组件想把它当作局部数据来用")]),n("li",[t._v("Prop 作为原始数据传入，由子组件处理成其它数据输出")])]),n("p",[t._v("对这两种情况，正确的应对方式是：")]),n("p",[n("strong",[t._v("1. 定义一个局部变量，并用 prop 的值初始化它：")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("props: ['initialCounter'],\ndata: function () {\n  return { counter: this.initialCounter }\n}\n")])]),n("p",[n("strong",[t._v("2. 定义一个计算属性，处理 prop 的值并返回：")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// ...\nprops: ['size'],\ncomputed: {\n  normalizedSize: function () {\n    return this.size.trim().toLowerCase()\n  }\n},\n")])]),n("p",[t._v("!> 注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。")]),n("h3",{attrs:{id:"prop-验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prop-验证","aria-hidden":"true"}},[t._v("#")]),t._v(" Prop 验证")]),n("p",[t._v("我们可以为组件的 prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告。这对于开发给他人使用的组件非常有用。\n要指定验证规则，需要用对象的形式来定义 prop，而不能用字符串数组：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.component('example', {\n  props: {\n    // 基础类型检测 (`null` 指允许任何类型)\n    propA: Number,\n    // 可能是多种类型\n    propB: [String, Number],\n    // 必传且是字符串\n    propC: {\n      type: String,\n      required: true\n    },\n    // 数值且有默认值\n    propD: {\n      type: Number,\n      default: 100\n    },\n    // 数组/对象的默认值应当由一个工厂函数返回\n    propE: {\n      type: Object,\n      default: function () {\n        return { message: 'hello' }\n      }\n    },\n    // 自定义验证函数\n    propF: {\n      validator: function (value) {\n        return value > 10\n      }\n    }\n  }\n});\n")])]),n("p",[n("code",[t._v("type")]),t._v(" 可以是下面原生构造器：")]),n("ul",[n("li",[t._v("String")]),n("li",[t._v("Number")]),n("li",[t._v("Boolean")]),n("li",[t._v("Function")]),n("li",[t._v("Object")]),n("li",[t._v("Array")]),n("li",[t._v("Symbol")])]),n("p",[t._v("type 也可以是一个自定义构造器函数，使用 instanceof 检测。")]),n("p",[t._v("当 prop 验证失败，Vue 会抛出警告 (如果使用的是开发版本)。\n注意 prop 会在组件实例创建之前进行校验，所以在 default 或 validator 函数里，诸如 data、computed 或 methods 等实例属性还无法使用。")]),n("hr"),n("h2",{attrs:{id:"父子组件通信：events-up"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#父子组件通信：events-up","aria-hidden":"true"}},[t._v("#")]),t._v(" 父子组件通信：Events Up")]),n("p",[t._v("我们知道，父组件使用 prop 传递数据给子组件。但子组件怎么跟父组件通信呢？这个时候 Vue 的自定义事件系统就派得上用场了。")]),n("p",[n("strong",[t._v("1. 在子组件中调用 "),n("code",[t._v("$emit()")]),t._v(" 方法发布一个事件")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("Vue.component('button-counter', {\n  template: '<button v-on:click=\"incrementCounter\">{{ counter }}</button>',\n  data: function () {\n    return {\n      counter: 0\n    }\n  },\n  methods: {\n    incrementCounter: function () {\n      this.counter += 1\n      // 发布一个名字叫 increment 的事件\n      this.$emit('increment')\n    }\n  },\n});\n")])]),n("p",[n("strong",[t._v("2. 在父组件中提供一个子组件内部发布的事件处理函数")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("new Vue({\n  el: '#counter-event-example',\n  data: {\n    total: 0\n  },\n  methods: {\n    incrementTotal: function () {\n      this.total += 1\n    }\n  }\n});\n")])]),n("p",[n("strong",[t._v("3. 在使用子组件的模板的标签上订阅子组件内部发布的事件")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<div id="counter-event-example">\n  <p>{{ total }}</p>\n  \x3c!-- \n    订阅子组件内部发布的 increment 事件\n    当子组件内部 $commit(\'increment\') 发布的时候，就会调用到父组件中的 incrementTotal 方法\n  --\x3e\n  <button-counter v-on:increment="incrementTotal"></button-counter>\n</div>\n')])]),n("h3",{attrs:{id:"给组件绑定原生事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给组件绑定原生事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 给组件绑定原生事件")]),n("p",[t._v("有时候，你可能想在某个组件的根元素上监听一个原生事件。可以使用 "),n("code",[t._v("v-on")]),t._v(" 的修饰符 "),n("code",[t._v(".native")]),t._v("。例如：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<my-component v-on:click.native="doTheThing"></my-component>\n')])]),n("h3",{attrs:{id:"sync-修饰符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sync-修饰符","aria-hidden":"true"}},[t._v("#")]),n("code",[t._v(".sync")]),t._v(" 修饰符")]),n("p",[t._v("在一些情况下，我们可能会需要对一个 prop 进行“双向绑定”。\n就是当一个子组件改变了一个带 .sync 的 prop 的值时，这个变化也会同步到父组件中所绑定的值。")]),n("p",[t._v("在使用子组件的时候加上 "),n("code",[t._v(".sync")]),t._v(" 修饰符：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<comp :foo.sync="bar"></comp>\n')])]),n("p",[t._v("在子组件内部更新 "),n("code",[t._v("foo")]),t._v(" 的值时，显示的触发一个更新事件：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("this.$emit('update:foo', newValue);\n")])]),n("hr"),n("h2",{attrs:{id:"非父子组件通信：event-bus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非父子组件通信：event-bus","aria-hidden":"true"}},[t._v("#")]),t._v(" 非父子组件通信：Event Bus")]),n("p",[t._v("有时候，非父子关系的两个组件之间也需要通信。在简单的场景下，可以使用一个空的 Vue 实例作为事件总线：")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var bus = new Vue();\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 触发组件 A 中的事件\nbus.$emit('id-selected', 1);\n")])]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 在组件 B 创建的钩子中监听事件\nbus.$on('id-selected', function (id) {\n  // ...\n});\n")])]),n("hr"),n("h2",{attrs:{id:"专业组件通信大杀器：vuex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#专业组件通信大杀器：vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 专业组件通信大杀器：Vuex")]),n("p",[t._v("在复杂的情况下，我们应该考虑使用专门的 "),n("a",{attrs:{href:"https://vuex.vuejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态管理模式")]),t._v("。")]),n("hr"),n("h2",{attrs:{id:"使用插槽分发内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用插槽分发内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用插槽分发内容")]),n("hr"),n("h2",{attrs:{id:"组件其它"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#组件其它","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件其它")])])}],e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=r.exports}}]);