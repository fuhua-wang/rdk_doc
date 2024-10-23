"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9226],{66148:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=s(74848),i=s(28453),t=s(93859),a=s(19365);const l={sidebar_position:3},c="1.3 \u5165\u95e8\u914d\u7f6e",o={id:"Quick_start/configuration_wizard",title:"1.3 \u5165\u95e8\u914d\u7f6e",description:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u7684\u5165\u95e8\u914d\u7f6e\u65b9\u5f0f\u4ec5\u652f\u6301\u5728 RDK X3 \u3001RDK X5 \u548c RDK X3 Module \u578b\u53f7\u7684\u5f00\u53d1\u677f\u4e0a\u4f7f\u7528\uff1b",source:"@site/docs/01_Quick_start/configuration_wizard.md",sourceDirName:"01_Quick_start",slug:"/Quick_start/configuration_wizard",permalink:"/rdk_doc/Quick_start/configuration_wizard",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/01_Quick_start/configuration_wizard.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1.2.3 RDK Ultra",permalink:"/rdk_doc/Quick_start/install_os/rdk_ultra"},next:{title:"1.4 \u8fdc\u7a0b\u767b\u5f55",permalink:"/rdk_doc/Quick_start/remote_login"}},d={},u=[{value:"\u8fde\u63a5Wi-Fi",id:"\u8fde\u63a5wi-fi",level:2},{value:"\u5f00\u542fSSH\u670d\u52a1",id:"\u5f00\u542fssh\u670d\u52a1",level:2},{value:"\u5f00\u542fVNC\u670d\u52a1",id:"\u5f00\u542fvnc\u670d\u52a1",level:2},{value:"\u8bbe\u7f6e\u767b\u5f55\u6a21\u5f0f",id:"\u8bbe\u7f6e\u767b\u5f55\u6a21\u5f0f",level:2},{value:"\u8bbe\u7f6e\u4e2d\u6587\u73af\u5883",id:"\u8bbe\u7f6e\u4e2d\u6587\u73af\u5883",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"13-\u5165\u95e8\u914d\u7f6e",children:"1.3 \u5165\u95e8\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u7684\u5165\u95e8\u914d\u7f6e\u65b9\u5f0f\u4ec5\u652f\u6301\u5728 RDK X3 \u3001RDK X5 \u548c RDK X3 Module \u578b\u53f7\u7684\u5f00\u53d1\u677f\u4e0a\u4f7f\u7528\uff1b"}),(0,r.jsxs)(n.p,{children:["\u7cfb\u7edf\u7248\u672c\u4e0d\u4f4e\u4e8e ",(0,r.jsx)(n.code,{children:"2.1.0"}),"\u3002"]})]}),"\n","\n",(0,r.jsx)(n.h2,{id:"\u8fde\u63a5wi-fi",children:"\u8fde\u63a5Wi-Fi"}),"\n",(0,r.jsxs)(t.A,{groupId:"rdk-type",children:[(0,r.jsxs)(a.A,{value:"desktop",label:"Desktop",children:[(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u83dc\u5355\u680f\u53f3\u4e0a\u89d2\u7684Wi-Fi\u7ba1\u7406\u5de5\u5177\u8fde\u63a5Wi-Fi\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u70b9\u51fb\u9700\u8981\u8fde\u63a5\u7684Wi-Fi\u540d\uff0c\u7136\u540e\u5728\u5f39\u51fa\u7684\u5bf9\u8bdd\u6846\u4e2d\u8f93\u5165Wi-Fi\u5bc6\u7801\u3002"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127111045649",src:s(80518).A+"",width:"428",height:"235"})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127111253803",src:s(7051).A+"",width:"496",height:"248"})})]}),(0,r.jsxs)(a.A,{value:"server",label:"Server",children:[(0,r.jsx)(n.p,{children:"\u4f7f\u7528srpi-config\u5de5\u5177\u8fde\u63a5Wi-Fi\u3002"}),(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"sudo srpi-config"})," \u547d\u4ee4\uff0c\u9009\u62e9 System Options -> Wireless LAN \uff0c\u6839\u636e\u63d0\u793a\u4f9d\u6b21\u8f93\u5165Wi-Fi\u540d\uff08",(0,r.jsx)(n.code,{children:"SSID"}),"\uff09 \u548c \u5bc6\u7801\uff08",(0,r.jsx)(n.code,{children:"passwd"}),"\uff09\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127112139204",src:s(79412).A+"",width:"760",height:"476"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f00\u542fssh\u670d\u52a1",children:"\u5f00\u542fSSH\u670d\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u524d\u7cfb\u7edf\u7248\u672c\u9ed8\u8ba4\u5f00\u542f SSH \u767b\u5f55\u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u672c\u65b9\u6cd5\u5f00\u3001\u5173 SSH \u670d\u52a1\u3002"}),"\n",(0,r.jsxs)(t.A,{groupId:"rdk-type",children:[(0,r.jsxs)(a.A,{value:"desktop",label:"Desktop",children:[(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u83dc\u5355\u680f\u627e\u5230",(0,r.jsx)(n.code,{children:"RDK Configuration"})," \u9879\uff0c\u70b9\u51fb\u6253\u5f00\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127112029088",src:s(13544).A+"",width:"311",height:"375"})}),(0,r.jsxs)(n.p,{children:["\u9009\u62e9 Interface Options -> SSH \u9879\uff0c\u6839\u636e\u63d0\u793a\u9009\u62e9\u4f7f\u80fd\u6216\u8005\u5173\u95ed ",(0,r.jsx)(n.code,{children:"SSH"})," \u670d\u52a1\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127115151834",src:s(6178).A+"",width:"759",height:"479"})})]}),(0,r.jsxs)(a.A,{value:"server",label:"Server",children:[(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"sudo srpi-config"}),"\u547d\u4ee4\u8fdb\u5165\u914d\u7f6e\u83dc\u5355\u3002\u9009\u62e9 Interface Options -> SSH \u9879\uff0c\u6839\u636e\u63d0\u793a\u9009\u62e9\u4f7f\u80fd\u6216\u8005\u5173\u95ed ",(0,r.jsx)(n.code,{children:"SSH"})," \u670d\u52a1\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127115009424",src:s(66703).A+"",width:"648",height:"372"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["SSH\u7684\u4f7f\u7528\u8bf7\u67e5\u770b ",(0,r.jsx)(n.a,{href:"./remote_login#ssh",children:"\u8fdc\u7a0b\u767b\u5f55 - SSH\u767b\u5f55"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5f00\u542fvnc\u670d\u52a1",children:"\u5f00\u542fVNC\u670d\u52a1"}),"\n",(0,r.jsx)(t.A,{groupId:"rdk-type",children:(0,r.jsxs)(a.A,{value:"desktop",label:"Desktop",children:[(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u83dc\u5355\u680f\u627e\u5230",(0,r.jsx)(n.code,{children:"RDK Configuration"})," \u9879\uff0c\u70b9\u51fb\u6253\u5f00\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127112029088",src:s(13544).A+"",width:"311",height:"375"})}),(0,r.jsxs)(n.p,{children:["\u9009\u62e9 Interface Options -> VNC \u9879\uff0c\u6839\u636e\u63d0\u793a\u9009\u62e9\u4f7f\u80fd\u6216\u8005\u5173\u95ed",(0,r.jsx)(n.code,{children:"VNC"})," \u670d\u52a1\u3002\u9009\u62e9\u4f7f\u80fd ",(0,r.jsx)(n.code,{children:"VNC"})," \u65f6\u9700\u8981\u8bbe\u7f6e\u767b\u5f55\u5bc6\u7801\uff0c\u5bc6\u7801\u5fc5\u987b\u662f\u4e00\u4e2a8\u4f4d\u957f\u5ea6\u7684\u7531\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127112202713",src:s(86090).A+"",width:"765",height:"478"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["VNC \u7684\u4f7f\u7528\u8bf7\u67e5\u770b ",(0,r.jsx)(n.a,{href:"./remote_login#vnc%E7%99%BB%E5%BD%95",children:"\u8fdc\u7a0b\u767b\u5f55 - VNC\u767b\u5f55"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u767b\u5f55\u6a21\u5f0f",children:"\u8bbe\u7f6e\u767b\u5f55\u6a21\u5f0f"}),"\n",(0,r.jsxs)(t.A,{groupId:"rdk-type",children:[(0,r.jsxs)(a.A,{value:"desktop",label:"Desktop",children:[(0,r.jsx)(n.p,{children:"\u684c\u9762\u56fe\u5f62\u5316\u7cfb\u7edf\uff0c\u652f\u6301\u56db\u79cd\u767b\u5f55\u6a21\u5f0f\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f00\u542f\u56fe\u5f62\u5316\u754c\u9762\uff0c\u81ea\u52a8\u767b\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"\u5f00\u542f\u56fe\u5f62\u5316\u754c\u9762\uff0c\u7528\u6237\u624b\u52a8\u767b\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"\u5b57\u7b26\u7ec8\u7aef\uff0c\u81ea\u52a8\u767b\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"\u5b57\u7b26\u7ec8\u7aef\uff0c\u7528\u6237\u624b\u52a8\u767b\u5f55"}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u83dc\u5355\u680f\u627e\u5230",(0,r.jsx)(n.code,{children:"RDK Configuration"})," \u9879\uff0c\u70b9\u51fb\u6253\u5f00\u3002\u9009\u62e9 System Options -> Boot / Auto Login \u9879\u8fdb\u5165\u5982\u4e0b\u914d\u7f6e\u9879\u3002\u6839\u636e\u9700\u6c42\u9009\u62e9\u5bf9\u5e94\u9879\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127112703844",src:s(56901).A+"",width:"758",height:"478"})}),(0,r.jsx)(n.p,{children:"\u91cd\u542f\u540e\u751f\u6548\u3002"})]}),(0,r.jsxs)(a.A,{value:"server",label:"Server",children:[(0,r.jsx)(n.p,{children:"\u684c\u9762\u56fe\u5f62\u5316\u7cfb\u7edf\uff0c\u652f\u6301\u56db\u79cd\u767b\u5f55\u6a21\u5f0f\uff1a"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u5b57\u7b26\u7ec8\u7aef\uff0c\u81ea\u52a8\u767b\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"\u5b57\u7b26\u7ec8\u7aef\uff0c\u7528\u6237\u624b\u52a8\u767b\u5f55"}),"\n"]}),(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"sudo srpi-config"}),"\u547d\u4ee4\u8fdb\u5165\u914d\u7f6e\u83dc\u5355\u3002\u9009\u62e9 System Options -> Boot / Auto Login \u9879\u8fdb\u5165\u5982\u4e0b\u914d\u7f6e\u9879\u3002\u6839\u636e\u9700\u6c42\u9009\u62e9\u5bf9\u5e94\u9879\u3002"]}),(0,r.jsx)(n.p,{children:"\u91cd\u542f\u540e\u751f\u6548\u3002"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u4e2d\u6587\u73af\u5883",children:"\u8bbe\u7f6e\u4e2d\u6587\u73af\u5883"}),"\n",(0,r.jsxs)(t.A,{groupId:"rdk-type",children:[(0,r.jsxs)(a.A,{value:"desktop",label:"Desktop",children:[(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u83dc\u5355\u680f\u627e\u5230",(0,r.jsx)(n.code,{children:"RDK Configuration"})," \u9879\uff0c\u70b9\u51fb\u6253\u5f00\u3002\u9009\u62e9 Localisation Options -> Locale \u9879\u8fdb\u5165\u5982\u4e0b\u914d\u7f6e\u3002"]}),(0,r.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\uff1a\u9009\u62e9\u9009\u62e9\u9700\u8981\u7528\u5230\u7684\u8bed\u8a00\u73af\u5883\uff08\u591a\u9009\uff09\uff0c\u4e00\u822c\u9009\u4e2d ",(0,r.jsx)(n.code,{children:"en_US.UTF-8 UTF-8"})," \u548c ",(0,r.jsx)(n.code,{children:"zh_CN.UTF-8 UTF-8"}),"\u4e24\u9879\u5373\u53ef\u3002\u56de\u8f66\u786e\u8ba4\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127113356503",src:s(78592).A+"",width:"648",height:"372"})}),(0,r.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6b65\uff1a\u9009\u62e9\u9ed8\u8ba4\u7684\u8bed\u8a00\u73af\u5883\uff0c\u4e2d\u6587\u73af\u5883\u9009\u62e9 ",(0,r.jsx)(n.code,{children:"zh_CN.UTF-8 UTF-8"})," \u5373\u53ef\u3002\u56de\u8f66\u786e\u8ba4\u540e\u9700\u8981\u7b49\u5f85\u4e00\u4f1a\u5b8c\u6210\u914d\u7f6e\u3002"]}),(0,r.jsxs)(n.p,{children:["\u7b2c\u4e09\u6b65\uff1a\u91cd\u542f\u5f00\u53d1\u677f\uff0c\u4f7f\u6700\u65b0\u914d\u7f6e\u751f\u6548\u3002",(0,r.jsx)(n.code,{children:"sudo reboot"})]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u5f00\u673a\u4f1a\u63d0\u793a\uff1a\u8981\u4e0d\u8981\u66f4\u65b0home\u76ee\u5f55\u4e0b\u7684\u51e0\u4e2a\u5e38\u7528\u6587\u4ef6\u5939\u7684\u540d\u79f0\u3002\n\u5efa\u8bae\u9009\u62e9 ",(0,r.jsx)(n.code,{children:"Don't ask me again"})," ",(0,r.jsx)(n.code,{children:"Keep Old Name"}),"\uff0c \u8fd9\u6837\u53ef\u4ee5\u4fdd\u6301\u7528\u6237\u5de5\u4f5c\u76ee\u5f55\u4e0b\u7684 ",(0,r.jsx)(n.code,{children:"Desktop  Documents  Downloads"})," \u7b49\u76ee\u5f55\u540d\u4e0d\u968f\u8bed\u8a00\u73af\u5883\u53d1\u751f\u53d8\u5316\u3002"]})})]}),(0,r.jsxs)(a.A,{value:"server",label:"Server",children:[(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"sudo srpi-config"}),"\u547d\u4ee4\u8fdb\u5165\u914d\u7f6e\u83dc\u5355\u3002\u9009\u62e9 Localisation Options -> Locale \u9879\u8fdb\u5165\u5982\u4e0b\u914d\u7f6e\u3002"]}),(0,r.jsxs)(n.p,{children:["\u7b2c\u4e00\u6b65\uff1a\u9009\u62e9\u9009\u62e9\u9700\u8981\u7528\u5230\u7684\u8bed\u8a00\u73af\u5883\uff08\u591a\u9009\uff09\uff0c\u4e00\u822c\u9009\u4e2d ",(0,r.jsx)(n.code,{children:"en_US.UTF-8 UTF-8"})," \u548c ",(0,r.jsx)(n.code,{children:"zh_CN.UTF-8 UTF-8"}),"\u4e24\u9879\u5373\u53ef\u3002\u56de\u8f66\u786e\u8ba4\u8fdb\u5165\u4e0b\u4e00\u6b65\u3002"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"image-20231127113356503",src:s(78592).A+"",width:"648",height:"372"})}),(0,r.jsxs)(n.p,{children:["\u7b2c\u4e8c\u6b65\uff1a\u9009\u62e9\u9ed8\u8ba4\u7684\u8bed\u8a00\u73af\u5883\uff0c\u4e2d\u6587\u73af\u5883\u9009\u62e9 ",(0,r.jsx)(n.code,{children:"zh_CN.UTF-8 UTF-8"})," \u5373\u53ef\u3002\u56de\u8f66\u786e\u8ba4\u540e\u9700\u8981\u7b49\u5f85\u4e00\u4f1a\u5b8c\u6210\u914d\u7f6e\u3002"]}),(0,r.jsxs)(n.p,{children:["\u7b2c\u4e09\u6b65\uff1a\u91cd\u542f\u5f00\u53d1\u677f\uff0c\u4f7f\u6700\u65b0\u914d\u7f6e\u751f\u6548\u3002",(0,r.jsx)(n.code,{children:"sudo reboot"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var r=s(34164);const i={tabItem:"tabItem_Ymn6"};var t=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:s,children:n})}},93859:(e,n,s)=>{s.d(n,{A:()=>A});var r=s(96540),i=s(34164),t=s(86641),a=s(56347),l=s(205),c=s(38874),o=s(24035),d=s(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:i}}=e;return{value:n,label:s,attributes:r,default:i}}))}(s);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const i=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[o,u]=x({queryString:s,groupId:i}),[j,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(s);return[i,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),m=(()=>{const e=o??j;return p({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=s(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),i=l[s].value;i!==r&&(o(n),a(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...t,className:(0,i.A)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(n))}},80518:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127111045649-680a709174096312a93ce4f798d6208b.png"},7051:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127111253803-917c4d846518b4f3f98b38b78fd88592.png"},13544:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127112029088-de8eb3008367783b86778e6fa220149e.png"},79412:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127112139204-4f89d75ccd08ba64605e0846cfdbe9a8.png"},86090:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127112202713-a573b2d7c823047a1195778708efb429.png"},56901:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127112703844-752d6410419d206ff79789c6c7bb8f09.png"},78592:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127113356503-84cfd7544064c0badadbe03215265fe3.png"},66703:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127115009424-f921898776bdce7669c501bd593eb963.png"},6178:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/image-20231127115151834-fc390d0f21d7794f86586cbcee6f2ab4.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);