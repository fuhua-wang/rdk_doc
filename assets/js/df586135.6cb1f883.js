"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2561],{39348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(74848),d=t(28453);const r={sidebar_position:5},i="USB\u9a71\u52a8\u6027\u80fd\u6d4b\u8bd5",l={id:"Advanced_development/linux_development/hardware_unit_test/test_usb",title:"USB\u9a71\u52a8\u6027\u80fd\u6d4b\u8bd5",description:"\u6d4b\u8bd5\u65b9\u6cd5",source:"@site/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_usb.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_usb",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_usb",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_usb.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SPI\u538b\u529b\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_spi"},next:{title:"\u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_ethernet"}},o={},c=[{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:2},{value:"\u5f00\u53d1\u677f\u4fa7",id:"\u5f00\u53d1\u677f\u4fa7",level:3},{value:"PC\u4fa7",id:"pc\u4fa7",level:3},{value:"\u6d4b\u8bd5\u6807\u51c6",id:"\u6d4b\u8bd5\u6807\u51c6",level:2}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usb\u9a71\u52a8\u6027\u80fd\u6d4b\u8bd5",children:"USB\u9a71\u52a8\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,s.jsx)(n.h2,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.h3,{id:"\u5f00\u53d1\u677f\u4fa7",children:"\u5f00\u53d1\u677f\u4fa7"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4f7f\u7528",(0,s.jsx)(n.code,{children:"CrystalDiskMark"}),"\u8fdb\u884c\u6d4b\u8bd5\uff08\u8f6f\u4ef6\u5305\u5728",(0,s.jsx)(n.code,{children:"09-usb_test"}),"\u76ee\u5f55\u4e0b\uff09\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u5f00\u53d1\u677f\u8f93\u5165\u4e0b\u9762\u547d\u4ee4:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"service adbd stop\ncd /tmp\ndd if=/dev/zero of=/tmp/700M.img bs=1M count=700\nlosetup -f /tmp/700M.img\nlosetup -a \nmodprobe g_mass_storage file=/dev/loop0 removable=1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"pc\u4fa7",children:"PC\u4fa7"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"PC\u7aef\u4f1a\u51fa\u73b0\u65b0\u78c1\u76d8\u8bbe\u5907\u7684\u63d0\u9192\uff0c\u5c06\u5176\u683c\u5f0f\u5316\u4e3aFAT32\u683c\u5f0f\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["PC\u6253\u5f00",(0,s.jsx)(n.code,{children:"CrystalDiskMark"}),"\uff0c\u9009\u62e9\u521a\u6302\u8f7d\u7684X3\u8bbe\u5907\uff0c\u70b9\u51fb",(0,s.jsx)(n.code,{children:"All"}),"\u5f00\u59cb\u6d4b\u8bd5\uff0c\u82e5\u51fa\u73b0\u7a7a\u95f4\u4e0d\u8db3\u7684\u63d0\u793a\uff0c\u5219\u8c03\u6574\u6d4b\u8bd5\u6587\u4ef6\u5927\u5c0f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u6d4b\u8bd5\u5b8c\u6210\u4e4b\u540e\uff0c\u524d\u4e24\u9879",(0,s.jsx)(n.code,{children:"SEQ1M*"}),"\u8868\u793a\u987a\u5e8f\u8bfb\u5199\u901f\u5ea6\uff0c\u540e\u9762\u4e24\u9879",(0,s.jsx)(n.code,{children:"RND4K*"}),"\u8868\u793a4k\u5c0f\u6587\u4ef6\u968f\u673a\u8bfb\u5199\u901f\u5ea6\u3002\n",(0,s.jsx)(n.img,{alt:"10_usb_benchmark",src:t(29809).A+"",width:"486",height:"349"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u56fe\u7247\u4e2d\u7684\u901f\u5ea6\u4ec5\u4f9b\u53c2\u8003"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6d4b\u8bd5\u6807\u51c6",children:"\u6d4b\u8bd5\u6807\u51c6"}),"\n",(0,s.jsxs)(n.p,{children:["\u6d4b\u8bd5\u7ed3\u679c\u53d6CrystalDiskMark SEQ1MQ8T1\u8bfb\u5199\u6570\u636e",(0,s.jsx)(n.br,{}),"\n","USB 2.0 : \u8bfb\u5199\u8d85\u8fc7",(0,s.jsx)(n.strong,{children:"40"}),"MB/s",(0,s.jsx)(n.br,{}),"\n","USB 3.0 : \u8bfb\u5199\u8d85\u8fc7",(0,s.jsx)(n.strong,{children:"370"}),"MB/s"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},29809:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/10_usb_benchmark-7795ae46c1b6cb904e72aff843c084ba.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const d={},r=s.createContext(d);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);