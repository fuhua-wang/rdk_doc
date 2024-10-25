"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6806],{62826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var r=n(74848),s=n(28453);const d={sidebar_position:1},i="hrut_boardid",l={id:"Appendix/rdk-command-manual/cmd_hrut_boardid",title:"hrut_boardid",description:"The hrut_boardid command is used to retrieve the board ID of the current development board (different development boards have different IDs).",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/rdk-command-manual/cmd_hrut_boardid.md",sourceDirName:"09_Appendix/rdk-command-manual",slug:"/Appendix/rdk-command-manual/cmd_hrut_boardid",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_hrut_boardid",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/09_Appendix/rdk-command-manual/cmd_hrut_boardid.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"devmem",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_devmem"},next:{title:"hrut_boardid \uff08RDK X5\uff09",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_hrut_boardid_rdkx5"}},x={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Board ID definitions",id:"board-id-definitions",level:2}];function c(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"hrut_boardid",children:"hrut_boardid"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"hrut_boardid"})," command is used to retrieve the board ID of the current development board (different development boards have different IDs)."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u26a0\ufe0f The board ID will affect the hardware initialization during startup, so please set it carefully."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Usage:  hrut_boardid [OPTIONS] <Values>\nExample:\n       hrut_boardid g\nOptions:\n       g   get board id(veeprom)\n       s   set board id(veeprom)\n       G   get board id(bootinfo)\n       S   set board id(bootinfo)\n       c   clear board id(veeprom)\n       C   clear board id(bootinfo)\n       h   display this help text\n\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"g:"})," Get the board ID from ",(0,r.jsx)(t.code,{children:"veeprom"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"s:"})," Set the board ID in ",(0,r.jsx)(t.code,{children:"veeprom"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"G:"})," Get the board ID from ",(0,r.jsx)(t.code,{children:"bootinfo"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"S:"})," Set the board ID in ",(0,r.jsx)(t.code,{children:"bootinfo"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"c:"})," Clear the board ID configuration in ",(0,r.jsx)(t.code,{children:"veeprom"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"C:"})," Clear the board ID configuration in ",(0,r.jsx)(t.code,{children:"bootinfo"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"h:"})," Display help information."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"board-id-definitions",children:"Board ID definitions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"}}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Meaning"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Length"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Value Range"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"auto detect"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DDR self-detection feature"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["1bit",(0,r.jsx)("br",{}),"[31]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x1: do not use LPDDR4 auto detection feature"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"model"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DDR manufacturer information"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["3bit",(0,r.jsx)("br",{}),"[30:28]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x1: hynix",(0,r.jsx)("br",{}),"0x2: micron",(0,r.jsx)("br",{}),"0x3: samsung"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"ddr_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DDR type"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["4bit",(0,r.jsx)("br",{}),"[27:24]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x1: LPDDR4",(0,r.jsx)("br",{}),"0x2: LPDDR4X",(0,r.jsx)("br",{}),"0x3: DDR4",(0,r.jsx)("br",{}),"0x4: DDR3L"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"frequency"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DDR frequency"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["4bit",(0,r.jsx)("br",{}),"[23:20]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x1: 667",(0,r.jsx)("br",{}),"0x2: 1600",(0,r.jsx)("br",{}),"0x3: 2133",(0,r.jsx)("br",{}),"0x4: 2666",(0,r.jsx)("br",{}),"0x5: 3200",(0,r.jsx)("br",{}),"0x6: 3733",(0,r.jsx)("br",{}),"0x7: 4266",(0,r.jsx)("br",{}),"0x8: 1866",(0,r.jsx)("br",{}),"0x9: 2400",(0,r.jsx)("br",{}),"0xa: 100",(0,r.jsx)("br",{}),"0xb: 3600"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"capacity"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"DDR capacity"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["4bit",(0,r.jsx)("br",{}),"[19:16]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x1: 1GB",(0,r.jsx)("br",{}),"0x2: 2GB",(0,r.jsx)("br",{}),"0x4: 4GB"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"ecc"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["4bit",(0,r.jsx)("br",{}),"[15:12]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: default ECC config",(0,r.jsx)("br",{}),"0x1: inline ECC all",(0,r.jsx)("br",{}),"0x2: inline ECC option1",(0,r.jsx)("br",{}),"0x3: inline ECC option2"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"som_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"SOM type"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["4bit",(0,r.jsx)("br",{}),"[11:8]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x3: sdb v3",(0,r.jsx)("br",{}),"0x4: sdb v4",(0,r.jsx)("br",{}),"0x5: RDK X3 v1",(0,r.jsx)("br",{}),"0x6: RDK X3 v1.2",(0,r.jsx)("br",{}),"0x8: RDK X3 v2",(0,r.jsx)("br",{}),"0xb: RDK Module",(0,r.jsx)("br",{}),"0xF: X3E"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"DFS EN"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Dynamic Frequency Scaling (DFS) enable bit"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["1bit",(0,r.jsx)("br",{}),"[7]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["1: enable DFS feature",(0,r.jsx)("br",{}),"0: disable DFS feature"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"alternative"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Alternative parameter"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["3bit",(0,r.jsx)("br",{}),"[6:4]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: default configuration",(0,r.jsx)("br",{}),"0x1: configuration 1"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.strong,{children:"base_board_type"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Board Type"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["4bit",(0,r.jsx)("br",{}),"[3:0]"]}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["0x0: auto detection",(0,r.jsx)("br",{}),"0x1: X3 DVB",(0,r.jsx)("br",{}),"0x4: X3 SDB",(0,r.jsx)("br",{}),"0x5: customer board"]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"The definitions of each field are as follows:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"model:"})," hynix and micron, samsung"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ddr_type:"})," LPDDR4, LPDDR4X, DDR4, DDR3L"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"frequency:"})," 667, 1600, 2133, 2666, 3200, 3733, 4266"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"capacity:"})," 1G, 2G, 4G"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"som_type:"})," sdb v3, sdb v4, RDK X3 v1, RDK X3 v1.2, RDK X3 v2, RDK Module, X3E"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"base_board_type:"})," x3dvb, X3 SDB, customer_board"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);