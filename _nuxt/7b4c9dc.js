(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{344:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("2b55827e",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(77).default)("67355c8c",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n(344)},350:function(t,e,n){var o=n(76)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.header[data-v-5403e5ce]{\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.bio[data-v-5403e5ce] h1{\n  margin-top:1rem;\n  margin-bottom:1rem;\n  font-size:1.875rem;\n  line-height:2.25rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.bio[data-v-5403e5ce] h2{\n  margin-top:1rem;\n  margin-bottom:1rem;\n  font-size:1.5rem;\n  line-height:2rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.bio[data-v-5403e5ce] h3{\n  margin-top:1rem;\n  margin-bottom:1rem;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.bio[data-v-5403e5ce] h4, h5[data-v-5403e5ce]{\n  font-size:1.125rem;\n  line-height:1.75rem\n}\n.bio[data-v-5403e5ce] h4, h5[data-v-5403e5ce]{\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity))\n}\n.bio[data-v-5403e5ce] ul li{\n  margin-bottom:0.5rem;\n  margin-left:0.25rem;\n  list-style-position:inside;\n  border-left-width:4px;\n  border-style:solid;\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n  line-height:1.5rem;\n  text-indent:1rem\n}\n.bio[data-v-5403e5ce] ol li{\n  list-style-position:inside;\n  list-style-type:decimal\n}\n.bio[data-v-5403e5ce] a{\n  text-decoration:underline;\n  text-underline-offset:3px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},351:function(t,e,n){"use strict";n(345)},352:function(t,e,n){var o=n(76)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.name[data-v-f82cf6fa]{\n  --tw-text-opacity:1;\n  color:rgba(67, 56, 202, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},353:function(t,e,n){"use strict";n.r(e);var o=n(348),r={props:{bio:{required:!0,type:String}}},l=(n(349),n(63)),c={components:{Bio:Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"bio",domProps:{innerHTML:t._s(t.bio)}})}),[],!1,null,"5403e5ce",null).exports},props:{blok:{required:!0,validator:function(t){return null===t||Object.hasOwn(t,"links")&&Array.isArray(t.links)&&Object.hasOwn(t,"name")&&Object.hasOwn(t,"name_en")&&Object.hasOwn(t,"icon")&&Object.hasOwn(t,"bio")}}},setup:function(t){return{bio:o.marked.parse(t.blok.bio)}}},d=(n(351),Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}]},[n("div",{staticClass:"flex"},[n("div",{staticClass:"m-6"},[n("img",{staticClass:"rounded-full ring-2 ring-white",attrs:{src:t.blok.icon.filename,alt:"blok.icon.alt"}})]),t._v(" "),n("div",[n("div",{staticClass:"m-6"},[n("div",{staticClass:"name text-5xl font-bold tracking-wider"},[t._v("\n          "+t._s(t.blok.name_en)+"\n        ")]),t._v(" "),n("div",{staticClass:"name text-2xl font-medium tracking-wide"},[t._v("\n          "+t._s(t.blok.name)+"\n        ")])]),t._v(" "),n("div",{staticClass:"m-6"},t._l(t.blok.links,(function(t){return n("StoryblokComponent",{key:t._uid,attrs:{blok:t}})})),1)])]),t._v(" "),n("div",{staticClass:"m-16"},[n("bio",{attrs:{bio:t.bio}})],1)])}),[],!1,null,"f82cf6fa",null));e.default=d.exports}}]);