"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4655],{8059:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(74848),o=n(28453);const s={sidebar_position:1},r="3.3.1 Pin Configuration and Definition",a={id:"Basic_Application/03_40pin_user_guide/40pin_define",title:"3.3.1 Pin Configuration and Definition",description:"For the 40-pin on the development board, please refer to the 40-Pin GPIO Definition section for interface definitions.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/03_40pin_user_guide/40pin_define.md",sourceDirName:"03_Basic_Application/03_40pin_user_guide",slug:"/Basic_Application/03_40pin_user_guide/40pin_define",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/40pin_define",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/03_40pin_user_guide/40pin_define.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.2.3 RDK X5 \u7cfb\u5217\u97f3\u9891\u4f7f\u7528\u6307\u5357",permalink:"/rdk_doc/en/Basic_Application/audio/audio_board_x5"},next:{title:"3.3.2 Using GPIO",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/gpio"}},d={},c=[{value:"Pin Multiplexing Configuration",id:"pin-multiplexing-configuration",level:2},{value:"40-Pin Definition",id:"40pin_define",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"331-pin-configuration-and-definition",children:"3.3.1 Pin Configuration and Definition"}),"\n",(0,t.jsxs)(i.p,{children:["For the 40-pin on the development board, please refer to the ",(0,t.jsx)(i.a,{href:"./40pin_define",children:"40-Pin GPIO Definition"})," section for interface definitions."]}),"\n",(0,t.jsx)(i.h2,{id:"pin-multiplexing-configuration",children:"Pin Multiplexing Configuration"}),"\n",(0,t.jsxs)(i.p,{children:["The 40-pin are enabled with default configurations for UART, SPI, I2C, I2S, and other dedicated functions as shown in the ",(0,t.jsx)(i.a,{href:"#40pin_define",children:"40-Pin GPIO Definition"}),". If you want to configure specific pins as GPIO, you need to use the ",(0,t.jsx)(i.code,{children:"srpi-config"})," graphical configuration tool."]}),"\n",(0,t.jsxs)(i.p,{children:["Note that the ",(0,t.jsx)(i.code,{children:"srpi-config"})," program needs to run in a ",(0,t.jsx)(i.strong,{children:"full-screen command-line window"}),". Perform the following steps:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"sudo srpi-config\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-20220511173307239",src:n(88003).A+"",width:"648",height:"368"})}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"okay"})," configuration corresponds to dedicated pins, while the ",(0,t.jsx)(i.code,{children:"disabled"})," configuration corresponds to GPIO mode. The configuration takes effect after restarting."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Select the desired function using the up and down arrow keys, and press Enter to toggle the function ON or OFF."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Select Select and Exit with the left and right keys on the keyboard, and confirm with the enter key"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"40pin_define",children:"40-Pin Definition"}),"\n",(0,t.jsxs)(i.p,{children:["The development board provides a 40-pin standard interface for convenient peripheral expansion. The digital I/Os use a 3.3V voltage level. The pin definitions for the 40-pin interface are as follows:\n",(0,t.jsx)(i.img,{alt:"image-20220828203147852",src:n(92395).A+"",width:"1391",height:"767"})]}),"\n",(0,t.jsx)(i.p,{children:"The development board has silk screen markings on the 40-pin interface to facilitate operation. The locations of PIN1 and PIN40 are as follows:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-20220828203207798",src:n(80475).A+"",width:"1280",height:"909"})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"The RDK X3 Module provides the 40-pin GPIOs and their definitions as follows:"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-20230510155124570",src:n(59904).A+"",width:"2475",height:"792"})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"The RDK Ultra provides the 40-pin GPIOs and their definitions as follows:"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"image-20230510155124570",src:n(23420).A+"",width:"1908",height:"1032"})})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},88003:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-20220511173307239-d7276a7323353449727270e37faba200.png"},92395:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-20220828203147852-201c4eb31f1a6c8aedd146acb8f2f5e9.png"},80475:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-20220828203207798-e44476acea26d3e99da2f1da6ea5d6aa.jpg"},59904:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-20230510155124570-b12a883adbc66f9b8291891f569921ea.png"},23420:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/image-20230830194924570-e4bc5edda2b16227691ecc3208710e72.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);