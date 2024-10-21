"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1521],{93080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(74848),r=t(28453),s=t(93859),l=t(19365);const a={sidebar_position:2},d="\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b",i={id:"Robot_development/boxs/function/hand_lmk_detection",title:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/hand_lmk_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hand_lmk_detection",permalink:"/rdk_doc/Robot_development/boxs/function/hand_lmk_detection",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/03_boxs/function/hand_lmk_detection.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4eba\u4f53\u68c0\u6d4b\u548c\u8ddf\u8e2a",permalink:"/rdk_doc/Robot_development/boxs/function/mono2d_body_detection"},next:{title:"\u624b\u52bf\u8bc6\u522b",permalink:"/rdk_doc/Robot_development/boxs/function/hand_gesture_detection"}},c={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b",children:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b"}),"\n","\n",(0,o.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,o.jsx)(n.p,{children:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\u7b97\u6cd5\u793a\u4f8b\u8ba2\u9605\u56fe\u7247\u548c\u5305\u542b\u4eba\u624b\u6846\u4fe1\u606f\u7684\u667a\u80fdmsg\uff0c\u5229\u7528BPU\u8fdb\u884c\u7b97\u6cd5\u63a8\u7406\uff0c\u53d1\u5e03\u5305\u542b\u4eba\u624b\u5173\u952e\u70b9\u4fe1\u606f\u7684\u7b97\u6cd5msg\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4eba\u624b\u5173\u952e\u70b9\u7d22\u5f15\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(81151).A+"",width:"589",height:"882"})}),"\n",(0,o.jsx)(n.p,{children:"\u4ee3\u7801\u4ed3\u5e93\uff1a"}),"\n",(0,o.jsxs)(n.p,{children:["(",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/hand_lmk_detection",children:"https://github.com/D-Robotics/hand_lmk_detection"}),")"]}),"\n",(0,o.jsxs)(n.p,{children:["(",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/mono2d_body_detection",children:"https://github.com/D-Robotics/mono2d_body_detection"}),")"]}),"\n",(0,o.jsx)(n.p,{children:"\u5e94\u7528\u573a\u666f\uff1a\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\u7b97\u6cd5\u4e3b\u8981\u7528\u4e8e\u6355\u6349\u4eba\u624b\u90e8\u7684\u9aa8\u9abc\u5173\u952e\u70b9\uff0c\u53ef\u5b9e\u73b0\u81ea\u5b9a\u4e49\u624b\u52bf\u8bc6\u522b\u7b49\u529f\u80fd\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e\u667a\u80fd\u5bb6\u5c45\u3001\u865a\u62df\u73b0\u5b9e\u3001\u6e38\u620f\u5a31\u4e50\u7b49\u9886\u57df\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,o.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,o.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,o.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(n.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RDK Ultra"}),(0,o.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,o.jsx)(n.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,o.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u786e\u8ba4PC\u673a\u80fd\u591f\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeRDK\u3002"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,o.jsx)(n.p,{children:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b(hand_lmk_detection)package\u8ba2\u9605sensor package\u53d1\u5e03\u7684\u56fe\u7247\u4ee5\u53ca\u4eba\u4f53\u68c0\u6d4b\u548c\u8ddf\u8e2apackage\u53d1\u5e03\u7684\u4eba\u624b\u6846\u68c0\u6d4b\u7ed3\u679c\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u53d1\u5e03\u7b97\u6cd5msg\uff0c\u901a\u8fc7websocket package\u5b9e\u73b0\u5728PC\u7aef\u6d4f\u89c8\u5668\u4e0a\u6e32\u67d3\u663e\u793a\u53d1\u5e03\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,o.jsxs)(s.A,{groupId:"tros-distro",children:[(0,o.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(l.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_lmk_detection hand_lmk_detection.launch.py\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,o.jsxs)(s.A,{groupId:"tros-distro",children:[(0,o.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(l.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_lmk_detection hand_lmk_detection.launch.py\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,o.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[hand_lmk_detection-4] [WARN] [1660269063.553205182] [hand_lmk_det]: input fps: 31.43, out fps: 31.47\n[hand_lmk_detection-4] [WARN] [1660269064.579457516] [hand_lmk_det]: input fps: 30.21, out fps: 30.21\n[hand_lmk_detection-4] [WARN] [1660269065.612579058] [hand_lmk_det]: input fps: 30.01, out fps: 30.01\n[hand_lmk_detection-4] [WARN] [1660269066.612778892] [hand_lmk_det]: input fps: 30.00, out fps: 30.00\n[hand_lmk_detection-4] [WARN] [1660269067.646101309] [hand_lmk_det]: input fps: 30.01, out fps: 30.01\n[hand_lmk_detection-4] [WARN] [1660269068.679036184] [hand_lmk_det]: input fps: 30.04, out fps: 30.04\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u7a0b\u5e8f\u8fd0\u884c\u6210\u529f\uff0c\u63a8\u7406\u65f6\u7b97\u6cd5\u8f93\u5165\u548c\u8f93\u51fa\u5e27\u7387\u4e3a30fps\uff0c\u6bcf\u79d2\u949f\u5237\u65b0\u4e00\u6b21\u7edf\u8ba1\u5e27\u7387\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,o.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09\uff1a"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(87320).A+"",width:"1920",height:"907"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var o=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,l),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>k});var o=t(96540),r=t(34164),s=t(86641),l=t(56347),a=t(205),d=t(38874),i=t(24035),c=t(82993);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,d]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[i,u]=m({queryString:t,groupId:r}),[b,_]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=i??b;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),_(e)}),[u,_,s]),tabValues:s}}var _=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=d.indexOf(n),r=a[t].value;r!==o&&(i(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function k(e){const n=(0,_.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},81151:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/hand_lmk_index-f3cfbe06d83eeb05ae4e01ad1fc5214d.jpeg"},87320:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/hand_render-fc882e9c0f3ac9bfa80758e805d5697d.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);