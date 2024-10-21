"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2635],{21522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=n(74848),r=n(28453);const s={sidebar_position:2},o="EMMC Related Testing",l={id:"Advanced_development/linux_development/hardware_unit_test/test_emmc",title:"EMMC Related Testing",description:"For EMMC, the main concerns are its stability and performance.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/hardware_unit_test/test_emmc.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_emmc",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_emmc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_emmc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Environment Reliability Testing (Fixed Frequency)",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_environment_reliability"},next:{title:"UART Pressure Test",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_uart"}},d={},a=[{value:"EMMC Stability Testing",id:"emmc-stability-testing",level:2},{value:"Testing Method",id:"testing-method",level:3},{value:"Testing Criteria",id:"testing-criteria",level:3},{value:"EMMC Performance Testing",id:"emmc-performance-testing",level:2},{value:"Testing Method",id:"testing-method-1",level:3},{value:"Testing Criteria",id:"testing-criteria-1",level:3}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"emmc-related-testing",children:"EMMC Related Testing"}),"\n",(0,i.jsx)(t.p,{children:"For EMMC, the main concerns are its stability and performance."}),"\n",(0,i.jsx)(t.h2,{id:"emmc-stability-testing",children:"EMMC Stability Testing"}),"\n",(0,i.jsx)(t.h3,{id:"testing-method",children:"Testing Method"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Use the open source tool "iozone" to perform file system read and write tests on EMMC.'}),"\n",(0,i.jsx)(t.li,{children:'Go to the "test_tools/02_emmc" folder and execute the script "sh emmc_stability_test.sh &" to perform file system read and write tests on EMMC.'}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"testing-criteria",children:"Testing Criteria"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"At high temperature (45\xb0), low temperature (-10\xb0), and room temperature, the program should run normally without any restart or hang situations."}),"\n",(0,i.jsx)(t.li,{children:'There should be no abnormal prints in the LOG file, such as "fail", "error", "timeout", etc.'}),"\n",(0,i.jsx)(t.li,{children:"The system should run stably for 48 hours."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"emmc-performance-testing",children:"EMMC Performance Testing"}),"\n",(0,i.jsx)(t.h3,{id:"testing-method-1",children:"Testing Method"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:'Use the open source tool "iozone" to test the read and write speeds of the EMMC file system.'}),"\n",(0,i.jsx)(t.li,{children:"Read limit: 172.8MB/s, Write limit: 35MB/s."}),"\n",(0,i.jsx)(t.li,{children:'Go to the "test_tools/02_emmc" folder and execute the script "sh emmc_performance_test.sh &".'}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"testing-criteria-1",children:"Testing Criteria"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"In a normal temperature environment, the program should run without any abnormal restart or hang situations."}),"\n",(0,i.jsx)(t.li,{children:'There should be no abnormal prints in the LOG file, such as "fail", "error", "timeout", etc.'}),"\n",(0,i.jsx)(t.li,{children:"Verify if the actual test read and write speeds meet the performance requirements."}),"\n",(0,i.jsx)(t.li,{children:"The system should run stably for 48 hours."}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);