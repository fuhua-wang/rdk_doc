"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5145],{99424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var d=n(74848),r=n(28453);const s={sidebar_position:3},i="UART\u538b\u529b\u6d4b\u8bd5",o={id:"Advanced_development/linux_development/hardware_unit_test/test_uart",title:"UART\u538b\u529b\u6d4b\u8bd5",description:"\u6d4b\u8bd5\u65b9\u6cd5",source:"@site/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_uart.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_uart",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_uart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_uart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EMMC\u76f8\u5173\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_emmc"},next:{title:"SPI\u538b\u529b\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_spi"}},c={},l=[{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:2},{value:"\u6d4b\u8bd5\u6807\u51c6",id:"\u6d4b\u8bd5\u6807\u51c6",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"uart\u538b\u529b\u6d4b\u8bd5",children:"UART\u538b\u529b\u6d4b\u8bd5"}),"\n",(0,d.jsx)(t.h2,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,d.jsxs)(t.ol,{children:["\n",(0,d.jsxs)(t.li,{children:["\u955c\u50cf\u8981\u6253\u5f00",(0,d.jsx)(t.code,{children:"uart1"}),"\u548c",(0,d.jsx)(t.code,{children:"uart2"}),"\u8282\u70b9\uff08\u53cc\u53d1\u53cc\u6536\uff09\uff0c\u786c\u4ef6\u4e0a\u5c06",(0,d.jsx)(t.code,{children:"uart1"}),"\u7684",(0,d.jsx)(t.code,{children:"TX"}),"\u3001",(0,d.jsx)(t.code,{children:"RX"}),"\u4e0e",(0,d.jsx)(t.code,{children:"uart2"}),"\u7684",(0,d.jsx)(t.code,{children:"RX"}),"\u3001",(0,d.jsx)(t.code,{children:"TX"}),"\u77ed\u63a5\u3002"]}),"\n",(0,d.jsxs)(t.li,{children:["\u6267\u884c\u6d4b\u8bd5\u811a\u672c\uff1a",(0,d.jsx)(t.code,{children:"sh uart1test.sh &"}),"\u3001",(0,d.jsx)(t.code,{children:"sh uart2test.sh &"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"\u6d4b\u8bd5\u6807\u51c6",children:"\u6d4b\u8bd5\u6807\u51c6"}),"\n",(0,d.jsxs)(t.ol,{children:["\n",(0,d.jsx)(t.li,{children:"\u9ad8\u6e29\uff1a45\xb0\u3001\u4f4e\u6e29\uff1a-10\xb0\u3001\u5e38\u6e29\u4e0b\uff0c\u7a0b\u5e8f\u6b63\u5e38\u6267\u884c\uff0c\u4e0d\u4f1a\u51fa\u73b0\u91cd\u542f\u6302\u6b7b\u7684\u60c5\u51b5\u3002"}),"\n",(0,d.jsxs)(t.li,{children:["LOG\u4e2d\u6ca1\u6709",(0,d.jsx)(t.code,{children:"fail"}),"\u3001",(0,d.jsx)(t.code,{children:"error"}),"\u3001",(0,d.jsx)(t.code,{children:"timeout"}),"\u7b49\u5f02\u5e38\u6253\u5370\u3002"]}),"\n",(0,d.jsx)(t.li,{children:"\u80fd\u7a33\u5b9a\u8fd0\u884c48\u5c0f\u65f6\u3002"}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"\u9644\u5f55",children:"\u9644\u5f55"}),"\n",(0,d.jsx)(t.p,{children:"\u6d4b\u8bd5\u6e90\u7801\u4ee5\u53ca\u7f16\u8bd1\u53ef\u4ee5\u53c2\u8003[UART\u9a71\u52a8\u8c03\u8bd5\u6307\u5357]("})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var d=n(96540);const r={},s=d.createContext(r);function i(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);