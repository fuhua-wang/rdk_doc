"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5211],{32116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453);const i={sidebar_position:4},d="SPI Pressure Test",o={id:"Advanced_development/linux_development/hardware_unit_test/test_spi",title:"SPI Pressure Test",description:"Testing Method",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/hardware_unit_test/test_spi.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_spi",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_spi",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_spi.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"UART Pressure Test",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_uart"},next:{title:"USB Driver Performance Test",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_usb"}},c={},l=[{value:"Testing Method",id:"testing-method",level:2},{value:"Testing Criteria",id:"testing-criteria",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"spi-pressure-test",children:"SPI Pressure Test"}),"\n",(0,s.jsx)(t.h2,{id:"testing-method",children:"Testing Method"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Enter the ",(0,s.jsx)(t.code,{children:"test_tools/07_spi_test"})," directory."]}),"\n",(0,s.jsxs)(t.li,{children:["The testing script is divided into ",(0,s.jsx)(t.code,{children:"master"})," and ",(0,s.jsx)(t.code,{children:"salve"})," modes. Run the corresponding script based on the mode configured in the SPI driver."]}),"\n",(0,s.jsxs)(t.li,{children:["Two RDK X3 development boards can be used: one configured as ",(0,s.jsx)(t.code,{children:"master"})," mode and the other as ",(0,s.jsx)(t.code,{children:"salve"})," mode. The configuration process can refer to the ",(0,s.jsx)(t.a,{href:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_spi_dev",children:"SPI Debugging Guide"}),". First, execute the master-side testing script: ",(0,s.jsx)(t.code,{children:"sh spitest_master.sh &"}),", then execute the salve-side testing script: ",(0,s.jsx)(t.code,{children:"sh spitest_salve.sh &"}),". The time interval between the two script executions should be as short as possible."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"testing-criteria",children:"Testing Criteria"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"At high temperature (45\xb0), low temperature (-10\xb0), and room temperature, the program should execute normally without any restart or hang-up issues."}),"\n",(0,s.jsxs)(t.li,{children:["The LOG should not have any abnormal prints such as ",(0,s.jsx)(t.code,{children:"fail"}),", ",(0,s.jsx)(t.code,{children:"error"}),", ",(0,s.jsx)(t.code,{children:"timeout"}),", etc."]}),"\n",(0,s.jsx)(t.li,{children:"The program should be able to run stably for 48 hours."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);