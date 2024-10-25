"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5377],{13383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=t(74848),r=t(28453),s=t(93859),a=t(19365);const l={sidebar_position:1},c="3.3.1 \u7ba1\u811a\u5b9a\u4e49\u4e0e\u5e94\u7528",o={id:"Basic_Application/03_40pin_user_guide/40pin_define",title:"3.3.1 \u7ba1\u811a\u5b9a\u4e49\u4e0e\u5e94\u7528",description:"\u5f00\u53d1\u677f\u4e0a\u7684 40PIN \u529f\u80fd\u7ba1\u811a\uff0c\u63a5\u53e3\u5b9a\u4e49\u8bf7\u67e5\u770b\u672c\u7ae0\u8282\u3002",source:"@site/docs/03_Basic_Application/03_40pin_user_guide/40pin_define.md",sourceDirName:"03_Basic_Application/03_40pin_user_guide",slug:"/Basic_Application/03_40pin_user_guide/40pin_define",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/40pin_define",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/03_40pin_user_guide/40pin_define.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.2.3 RDK X5 \u7cfb\u5217\u97f3\u9891\u4f7f\u7528\u6307\u5357",permalink:"/rdk_doc/Basic_Application/audio/audio_board_x5"},next:{title:"3.3.2 GPIO\u5e94\u7528",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/gpio"}},u={},d=[{value:"\u7ba1\u811a\u590d\u7528\u5173\u7cfb\u914d\u7f6e",id:"\u7ba1\u811a\u590d\u7528\u5173\u7cfb\u914d\u7f6e",level:2},{value:"40PIN \u7ba1\u811a\u5b9a\u4e49",id:"40pin_define",level:2},{value:"GPIO \u8bfb\u5199\u64cd\u4f5c\u793a\u4f8b",id:"gpio-\u8bfb\u5199\u64cd\u4f5c\u793a\u4f8b",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u8fd0\u884c\u65b9\u5f0f",id:"\u8fd0\u884c\u65b9\u5f0f",level:2},{value:"\u9884\u671f\u6548\u679c",id:"\u9884\u671f\u6548\u679c",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"331-\u7ba1\u811a\u5b9a\u4e49\u4e0e\u5e94\u7528",children:"3.3.1 \u7ba1\u811a\u5b9a\u4e49\u4e0e\u5e94\u7528"}),"\n","\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u677f\u4e0a\u7684 40PIN \u529f\u80fd\u7ba1\u811a\uff0c\u63a5\u53e3\u5b9a\u4e49\u8bf7\u67e5\u770b\u672c\u7ae0\u8282\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7ba1\u811a\u590d\u7528\u5173\u7cfb\u914d\u7f6e",children:"\u7ba1\u811a\u590d\u7528\u5173\u7cfb\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["40PIN \u7684\u7ba1\u811a\u4f1a\u6309\u7167\u672c\u7ae0\u8282\u6240\u793a\uff0c\u9ed8\u8ba4\u4f7f\u80fd UART\u3001SPI\u3001I2C\u3001I2S \u7b49\u4e13\u7528\u529f\u80fd\uff0c\u5982\u9700\u5c06\u7279\u5b9a\u7ba1\u811a\u914d\u7f6e\u6210 GPIO \u529f\u80fd\uff0c\u9700\u8981\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"srpi-config"})," \u914d\u7f6e\u5de5\u5177\u8fdb\u884c\u914d\u7f6e\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6ce8\u610f\uff0c",(0,i.jsx)(n.code,{children:"srpi-config"})," \u7a0b\u5e8f\u9700\u8981\u5728",(0,i.jsx)(n.strong,{children:"\u5168\u5c4f\u547d\u4ee4\u884c\u7a97\u53e3"}),"\u4e2d\u8fd0\u884c\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sudo srpi-config\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220511173307239",src:t(88003).A+"",width:"648",height:"368"})}),"\n",(0,i.jsxs)(n.p,{children:["\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"3 Interface Options"})," -> ",(0,i.jsx)(n.code,{children:"I3 Peripheral bus config"})," \u8fdb\u5230\u5982\u4e0b\u603b\u7ebf\u914d\u7f6e\u754c\u9762"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20240817195940261",src:t(86148).A+"",width:"648",height:"368"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"okay"}),"\u914d\u7f6e\u5bf9\u5e94\u7ba1\u811a\u4e3a\u4e13\u7528\u529f\u80fd\uff0c",(0,i.jsx)(n.code,{children:"disabled"})," \u5173\u95ed\u8be5\u7ba1\u811a\u7684\u4e13\u7528\u529f\u80fd\uff0c\u53ef\u4ee5\u7528\u4f5c GPIO \uff0c\u914d\u7f6e ",(0,i.jsx)(n.strong,{children:"\u91cd\u542f"})," \u540e\u751f\u6548\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u952e\u76d8\u4e0a\u3001\u4e0b\u952e\u9009\u62e9\u529f\u80fd\u9879\uff0c \u56de\u8f66\u952e\u5f00\u5173\u529f\u80fd"}),"\n",(0,i.jsx)(n.li,{children:"\u952e\u76d8\u5de6\u3001\u53f3\u952e\u9009\u62e9  Select \u548c Exit \uff0c\u56de\u8f66\u952e\u786e\u8ba4"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"40pin_define",children:"40PIN \u7ba1\u811a\u5b9a\u4e49"}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u677f\u63d0\u4f9b40PIN\u6807\u51c6\u63a5\u53e3\uff0c\u65b9\u4fbf\u7528\u6237\u8fdb\u884c\u5916\u56f4\u6269\u5c55\uff0c\u5176\u4e2d\u6570\u5b57IO\u91c7\u75283.3V\u7535\u5e73\u8bbe\u8ba1\u300240PIN\u63a5\u53e3\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(s.A,{groupId:"rdk-type",children:[(0,i.jsxs)(a.A,{value:"x3",label:"RDK X3",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220828203147852",src:t(92395).A+"",width:"1391",height:"767"})}),(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677f40PIN\u63a5\u53e3\u4f4d\u7f6e\u63d0\u4f9b\u4e86\u4e1d\u5370\u7f51\u8868\uff0c\u65b9\u4fbf\u7528\u6237\u5bf9\u7167\u64cd\u4f5c\uff0cPIN1\u3001PIN40\u4f4d\u7f6e\u5982\u4e0b\uff1a\n",(0,i.jsx)(n.img,{alt:"image-20220828203207798",src:t(36035).A+"",width:"611",height:"423"})]})]}),(0,i.jsx)(a.A,{value:"x3md",label:"RDK X3 Module",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230510155124570",src:t(59904).A+"",width:"2475",height:"792"})})}),(0,i.jsx)(a.A,{value:"ultra",label:"RDK Ultra",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230510155124570",src:t(23420).A+"",width:"1908",height:"1032"})})}),(0,i.jsx)(a.A,{value:"rdkx5",label:"RDK X5",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20230510155124570",src:t(6425).A+"",width:"1806",height:"506"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"gpio-\u8bfb\u5199\u64cd\u4f5c\u793a\u4f8b",children:"GPIO \u8bfb\u5199\u64cd\u4f5c\u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["Video: ",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=16",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=16"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5f00\u53d1\u677f ",(0,i.jsx)(n.code,{children:"/app/40pin_samples/"})," \u76ee\u5f55\u4e0b\uff0c\u9884\u7f6e\u4e86\u591a\u79cd40PIN\u7ba1\u811a\u7684\u529f\u80fd\u6d4b\u8bd5\u4ee3\u7801\uff0c\u5305\u62ecgpio\u7684\u8f93\u5165/\u8f93\u51fa\u6d4b\u8bd5\u3001PWM\u3001I2C\u3001SPI\u3001UART\u7b49\u6d4b\u8bd5\u3002\u6240\u6709\u6d4b\u8bd5\u7a0b\u5e8f\u5747\u4f7f\u7528python\u8bed\u8a00\u7f16\u5199\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u4ee5\u67e5\u9605\u672c\u7ae0\u8282\u5176\u4ed6\u6a21\u5757\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5",(0,i.jsx)(n.code,{children:"/app/40pin_samples/button_led.py"}),"\u4e3a\u4f8b\uff0c\u8be5\u7a0b\u5e8f\u914d\u7f6e",(0,i.jsx)(n.code,{children:"37"}),"\u53f7\u7ba1\u811a\u4e3a\u8f93\u5165\uff0c\u914d\u7f6e",(0,i.jsx)(n.code,{children:"36"}),"\u53f7\u7ba1\u811a\u914d\u7f6e\u4e3a\u8f93\u51fa\uff0c\u5e76\u6839\u636e",(0,i.jsx)(n.code,{children:"37"}),"\u53f7\u7ba1\u811a\u7684\u8f93\u5165\u72b6\u6001\u6765\u63a7\u5236",(0,i.jsx)(n.code,{children:"36"}),"\u53f7\u7ba1\u811a\u7684\u8f93\u51fa\u72b6\u6001\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u675c\u90a6\u7ebf\u8fde\u63a5 ",(0,i.jsx)(n.code,{children:"37"}),"\u53f7\u7ba1\u811a\u5230 3.3v or GND\uff0c\u4ee5\u63a7\u5236\u5176\u9ad8\u4f4e\u7535\u5e73\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8fd0\u884c\u65b9\u5f0f",children:"\u8fd0\u884c\u65b9\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["\u6267\u884c ",(0,i.jsx)(n.code,{children:"button_led.py"})," \u7a0b\u5e8f\uff0c\u4ee5\u542f\u52a8 GPIO \u8bfb\u5199\u7a0b\u5e8f"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sunrise@ubuntu:~$ cd /app/40pin_samples/\nsunrise@ubuntu:/app/40pin_samples$ sudo python3 ./button_led.py\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9884\u671f\u6548\u679c",children:"\u9884\u671f\u6548\u679c"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7\u63a7\u5236",(0,i.jsx)(n.code,{children:"37"}),"\u53f7\u7ba1\u811a\u7684\u9ad8\u4f4e\u7535\u5e73\uff0c\u53ef\u4ee5\u6539\u53d8 ",(0,i.jsx)(n.code,{children:"36"}),"\u53f7\u7ba1\u811a\u7684\u8f93\u51fa\u7535\u5e73\u503c\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sunrise@ubuntu:/app/40pin_samples$ sudo python3 ./button_led.py\nStarting demo now! Press CTRL+C to exit\nOutputting 0 to Pin 36\nOutputting 1 to Pin 36\nOutputting 0 to Pin 36\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>I});var i=t(96540),r=t(34164),s=t(86641),a=t(56347),l=t(205),c=t(38874),o=t(24035),u=t(82993);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[a,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[o,d]=m({queryString:t,groupId:r}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=o??b;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==i&&(o(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,x.jsx)(_,{...e,children:d(e.children)},String(n))}},88003:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220511173307239-d7276a7323353449727270e37faba200.png"},92395:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220828203147852-201c4eb31f1a6c8aedd146acb8f2f5e9.png"},36035:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20220828203207798-9e792acf3c684284753b743f8e6205af.png"},59904:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20230510155124570-b12a883adbc66f9b8291891f569921ea.png"},23420:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20230830194924570-e4bc5edda2b16227691ecc3208710e72.png"},86148:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20240817195940261-f58a8a032f807e495b355b80e839a6af.png"},6425:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-20240902-234214-4b8b75ee1e7e5ae600382a0a275b96ed.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);