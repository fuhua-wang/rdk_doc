"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7188],{18964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const d={sidebar_position:3},i="UART Pressure Test",o={id:"Advanced_development/linux_development/hardware_unit_test/test_uart",title:"UART Pressure Test",description:"Test Methods",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/hardware_unit_test/test_uart.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_uart",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_uart",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_uart.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EMMC Related Testing",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_emmc"},next:{title:"SPI Pressure Test",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_spi"}},a={},l=[{value:"Test Methods",id:"test-methods",level:2},{value:"Test Criteria",id:"test-criteria",level:2},{value:"Appendix",id:"appendix",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"uart-pressure-test",children:"UART Pressure Test"}),"\n",(0,r.jsx)(t.h2,{id:"test-methods",children:"Test Methods"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Enable the ",(0,r.jsx)(t.code,{children:"uart1"})," and ",(0,r.jsx)(t.code,{children:"uart2"})," nodes on the image (both sending and receiving), and short the ",(0,r.jsx)(t.code,{children:"TX"})," and ",(0,r.jsx)(t.code,{children:"RX"})," pins of ",(0,r.jsx)(t.code,{children:"uart1"})," with the ",(0,r.jsx)(t.code,{children:"RX"})," and ",(0,r.jsx)(t.code,{children:"TX"})," pins of ",(0,r.jsx)(t.code,{children:"uart2"})," on the hardware."]}),"\n",(0,r.jsxs)(t.li,{children:["Execute the test scripts: ",(0,r.jsx)(t.code,{children:"sh uart1test.sh &"}),", ",(0,r.jsx)(t.code,{children:"sh uart2test.sh &"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"test-criteria",children:"Test Criteria"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"At high temperature (45\xb0C), low temperature (-10\xb0C), and normal temperature, the program should run normally without restart or hanging."}),"\n",(0,r.jsxs)(t.li,{children:["There should be no abnormal prints in the LOG such as ",(0,r.jsx)(t.code,{children:"fail"}),", ",(0,r.jsx)(t.code,{children:"error"}),", or ",(0,r.jsx)(t.code,{children:"timeout"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"The program should run stably for 48 hours."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"appendix",children:"Appendix"}),"\n",(0,r.jsx)(t.p,{children:"The test source code and compilation can refer to the [UART Driver Debugging Guide]."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);