(function(t){function e(e){for(var o,a,s=e[0],c=e[1],l=e[2],g=0,d=[];g<s.length;g++)a=s[g],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={detail:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([1,"chunk-vendors"]),n()})({1:function(t,e,n){t.exports=n("d97a")},"201a":function(t,e,n){"use strict";var o=n("cebe"),r=n.n(o);const i="http://www.meitu360.com";e["a"]={listCategories:function(){return new Promise((t,e)=>{const n=`${i}/wp-json/wp/v2/categories`;r.a.get(n,{}).then(e=>{t(e.data)}).catch(t=>{console.log(t);const n={title:t.message,msg:JSON.stringify(t)};e(n)})})},listPosts:function(t){return new Promise((e,n)=>{const o=`${i}/wp-json/wp/v2/posts`;(parseInt(t)<2||isNaN(t))&&(t=null),r.a.get(o,{params:{page:t}}).then(t=>{e(t.data)}).catch(t=>{console.log(t);const e={title:t.message,msg:JSON.stringify(t)};n(e)})})}}},"377d":function(t,e,n){"use strict";var o=n("acee"),r=n.n(o);r.a},8479:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{style:"background-image: url("+t.backgroundImage+");",attrs:{id:"popFlow"}},[n("div",{staticClass:"start_logo",style:"background: url("+t.logo+") center no-repeat;background-size: 101px 31px;",attrs:{id:"start-logo"}}),n("div",{staticClass:"btn_arr",attrs:{id:"btn-arr"}},[n("a",{staticClass:"btn",attrs:{id:"openUrl",href:"javascript:;"},on:{click:function(e){return t.openActionUrl(t.actionUrl)}}},[t._v(" "+t._s(t.actionText)+" ")]),n("a",{staticClass:"btn",staticStyle:{background:"#fff",color:"#E42112"},attrs:{id:"skipCover",href:"javascript:;"},on:{click:t.skipCover}},[t._v("跳过")])])]):t._e()},r=[],i={name:"PopFlow",props:{actionText:String,actionUrl:{type:String,default:"http://www.missfood.net"},actionTime:{type:String,default:"2019"}},data(){return{show:!1,backgroundImage:"http://attachments.gfan.net.cn/forum/201702/02/112344tqd6stqz26w2d1s2.jpg.thumb.jpg",logo:"http://liulei1947.gitee.io/cd2/static/js/static/img/logo_white_web.6c49adf4.png"}},mounted(){this.checkPopFlow()},methods:{checkPopFlow:function(){this.getCookie("actionTime")!==this.actionTime&&(this.show=!0,this.$emit("showComponents",!1))},skipCover:function(){console.log("skipCover"),this.show=!1,this.setCookie("actionTime",this.actionTime),this.$emit("showComponents",!0)},openActionUrl:function(t){this.setCookie("actionTime",this.actionTime),window.location=t},setCookie:function(t,e,n){const o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);const r="expires="+o.toUTCString();document.cookie=t+"="+e+";"+r+";path=/"},getCookie:function(t){const e=t+"=",n=document.cookie.split(";");for(var o=0;o<n.length;o++){var r=n[o];while(" "===r.charAt(0))r=r.substring(1);if(0===r.indexOf(e))return r.substring(e.length,r.length)}return""}}},a=i,s=(n("377d"),n("2877")),c=Object(s["a"])(a,o,r,!1,null,"265e933c",null);e["a"]=c.exports},"8bbf":function(t,e){t.exports=Vue},acee:function(t,e,n){},ca00:function(t,e,n){"use strict";e["a"]={getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},dateFormat:function(t){console.log(t);const e=new Date(t),n=e.getFullYear(),o=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0"+e.getDate():e.getDate(),i=e.getHours()<10?"0"+e.getHours():e.getHours(),a=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+"-"+o+"-"+r+" "+i+":"+a+":"+s}}},cebe:function(t,e){t.exports=axios},d97a:function(t,e,n){"use strict";n.r(e);var o=n("8bbf"),r=n.n(o),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MainNav"),n("HeaderCard",{attrs:{"show-big-header":!0,headerCardBgPicUrl:t.randomPicUrl}}),t.showLoading?n("Loading"):t._e(),t._l(t.pageData.list,(function(e,o){return[o%2>10?n("TextItem",{key:e.id,attrs:{title:e.title.rendered,description:e.excerpt.rendered,url:e.link,"icon-url":t.getImageSrcFromHtml(e.content.rendered),time:e.date,origin:t.getCatName(e.categories)}}):o%2===0?n("VideoCard",{key:e.id,attrs:{"pic-url":t.getPicUrlFromImages(t.extractImgSrcByReg(e.content.rendered).weibo),tips:"云图索引",url:"javascript:;",origin:t.getCatName(e.categories),description:e.excerpt.rendered,time:new Date(e.date).getTime(),title:e.title.rendered},nativeOn:{click:function(n){t.showImages(t.extractImgSrcByReg(e.content.rendered).weibo)}}}):n("ImageItem",{key:e.id,attrs:{title:e.title.rendered,description:e.excerpt.rendered,url:"javascript:;",time:e.date,"pic-url":t.extractImgSrcByReg(e.content.rendered).weibo[1],"icon-url":t.picUrl,tags:[{title:"浏览图片",url:"javascript:;"},{title:"阅读原文",url:""+e.link}],origin:t.getCatName(e.categories)},nativeOn:{click:function(n){t.showImages(t.extractImgSrcByReg(e.content.rendered).weibo)}}})]})),n("BigImageItem"),t.show?n("RelatedSearch",{attrs:{suggests:t.suggests}}):t._e(),n("Footer"),n("PopFlow",{attrs:{"action-text":"立即观看","action-time":"20191231"}})],2)},a=[],s=n("201a"),c=n("cebe"),l=n.n(c),u=n("f2e8"),g=n.n(u);const d=n("b383"),p="http://search.pet2.net/search/ajax";var h={searchByKey:function(t,e){return new Promise((n,o)=>{(parseInt(e)<2||isNaN(e))&&(e=null),l.a.get(p,{params:{keyword:t,page:e}}).then(t=>{n(t.data)}).catch(t=>{console.log(t);const e={title:t.message,msg:JSON.stringify(t)};o(e)})})},suggestByKey:function(t){return new Promise((e,n)=>{const o={key:t,if:"mobile",platform:31,ppuid:""},r=`https://suggest.video.iqiyi.com/?${d.encode(o)}`;g()(r,{},(function(t,o){if(t)return n(t);console.log(o),e(o)}))})},searchVideoByKey:function(t){return new Promise((e,n)=>{const o={wd:t,cb:"callback",_:(new Date).getTime()},r=`http://video.pet2.net/api.php?${d.encode(o)}`;let i=function(t,o){if(t)return n(t);console.log(o),e(o)};g()(r,{name:"callback"},i)})}},m=n("8479"),f={name:"app",data(){return{randomPicUrl:this.defPicUrl,show:!0,showLoading:!0,suggests:[],pageData:{list:[],totalCount:""},url:"http://www.baidu.com",icon:"https://cambrian-images.cdn.bcebos.com/ea7e0c7af4673ed4cd13dc1c2b27c1eb_1562913917952.jpeg",origin:"普罗米修斯",picUrl:"https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=2361035773,1969704004&fm=203&key=query&mola=new&crop=v1",defPicUrl:"https://pic.pet2.net/v1/smartcrop/375/333?src=http://image1.xyzs.com/upload/c0/28/1445562457614046/20151025/144571427625600_0.jpg"}},components:{PopFlow:m["a"]},mounted(){s["a"].listCategories().then(t=>{this.$store.commit("updateCats",t)}).then(t=>{let e=this.$utils.getUrlKey("word");null===e&&(e="");let n=this.$utils.getUrlKey("page");this.loadData(e,n)}),this.getSuggests()},computed:{},methods:{loadData(t,e){this.showLoading=!0,s["a"].listPosts(e).then(t=>{this.pageData.list=t,this.showLoading=!1}).catch(t=>{this.showLoading=!1,this.erorrData={show:!0,data:t}})},getCatName(t){if(this.$store.state.cats.length<1)return"";if(void 0===t)return"";const e=this.$store.state.cats;for(let n=0;n<e.length;n++)if(t[0]===e[n].id)return e[n].name;return""},isValidUrl:function(t){var e=new RegExp;return e.compile("[a-zA-z]+://[^\\s]*"),!!e.test(t)},getImageSrcFromHtml(t){var e=/<img.*?(?:>|\/>)/gi,n=/src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i,o=t.match(e);if(null===o)return this.defPicUrl;for(var r=0;r<o.length;r++){var i=o[r].match(n);if(this.isValidUrl(i[1]))return i[1]}},getSuggests(){let t=this.$utils.getUrlKey("word");null!==t&&""!==t&&void 0!==t&&h.suggestByKey(t).then(t=>{console.log(t),this.suggests=t.data}).catch(t=>{console.log(t)})},extractImgSrcByReg:function(t){t=t.replace(/wp-content/g,"http://cdn.meitu360.com/wp-content"),t=t.replace(/\\/g,"");const e=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|-)+)/g;let n=t.match(e);var o={weibo:[],wechat:[],mt:[]};return n.forEach(t=>{t.indexOf("sinaimg.")>0?o.weibo.push(t):t.indexOf("qpic.")>0?o.wechat.push(t):o.mt.push(t)}),console.log(o),o},getPicUrlFromImages:function(t){return t[Math.floor(Math.random()*t.length)]},showImages:function(t){const e=document.querySelectorAll(".pswp")[0];var n=t.map(t=>{return{src:t,w:100,h:100}});const o={index:0};var r=function(t){return new Promise(e=>{var n=new Image;n.src=t;let o={};n.complete?(o.width=n.width,o.height=n.height,e(o)):n.onload=function(){o.width=n.width,o.height=n.height,e(o)}})},i=new PhotoSwipe(e,PhotoSwipeUI_Default,n,o);i.listen("imageLoadComplete",(function(t,e){r(e.src).then(t=>{e.w=t.width,e.h=t.height,i.invalidateCurrItems(),i.updateSize(!0)})})),i.init()}}},w=f,b=n("2877"),v=Object(b["a"])(w,i,a,!1,null,null,null),y=v.exports,C=n("756c"),k=n.n(C),x=(n("98af"),n("ca00")),S=n("2f62");r.a.use(S["a"]);var P=new S["a"].Store({state:{count:0,cats:[],headerCardConfig:{}},getters:{},mutations:{updateHeaderCardConfig(t,e){t.headerCardConfig=e},updateCats(t,e){t.cats=e},increment(t,e){t.count+=e.step},decrement:t=>t.count--}});r.a.config.productionTip=!1,r.a.use(k.a),r.a.prototype.$utils=x["a"],r.a.filter("dateFormat",x["a"].dateFormat),new r.a({render:t=>t(y),store:P}).$mount("#app")}});