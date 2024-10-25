"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[212],{72303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var d=t(74848),r=t(28453);const i={sidebar_position:1},a="devmem",s={id:"Appendix/rdk-command-manual/cmd_devmem",title:"devmem",description:"devmem is a command in busybox. It can read and write the values of hardware registers by using the mmap function on the mmap method of the /dev/mem driver, which maps the device's memory to the user space and enables read and write operations on these physical addresses.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/rdk-command-manual/cmd_devmem.md",sourceDirName:"09_Appendix/rdk-command-manual",slug:"/Appendix/rdk-command-manual/cmd_devmem",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_devmem",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/09_Appendix/rdk-command-manual/cmd_devmem.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"9. \u9644\u5f55",permalink:"/rdk_doc/en/Appendix"},next:{title:"hrut_boardid",permalink:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_hrut_boardid"}},o={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Common Commands",id:"common-commands",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"devmem",children:"devmem"}),"\n",(0,d.jsx)(n.p,{children:"devmem is a command in busybox. It can read and write the values of hardware registers by using the mmap function on the mmap method of the /dev/mem driver, which maps the device's memory to the user space and enables read and write operations on these physical addresses."}),"\n",(0,d.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"devmem ADDRESS [WIDTH [VALUE]]\n  \n  Read/write from physical address\n\n        ADDRESS Address to act upon\n        WIDTH   Width (8/16/...)\n        VALUE   Data to be written\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ADDRESS:"})," The physical address to perform the operation on. This is a required parameter used to specify the address to read from or write to."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"WIDTH:"})," Optional parameter that indicates the width of the data. It can be specified as 8, 16, or 32 to specify the width of the data to be read or written. If this parameter is not provided, the default width is 32 bits."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"VALUE:"})," Optional parameter that represents the data value to be written. If the ",(0,d.jsx)(n.code,{children:"WIDTH"})," parameter is provided, the ",(0,d.jsx)(n.code,{children:"VALUE"})," should match the specified width. If ",(0,d.jsx)(n.code,{children:"VALUE"})," is not provided, the command will perform a read operation."]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Read register"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"Read 32-bit: devmem 0xa600307c 32\nRead 16-bit: devmem 0xa600307c 16\nRead 8-bit: devmem 0xa600307c 8\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Write register"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"Write 32-bit: devmem 0xa6003078 32 0x1000100\nWrite 16-bit: devmem 0xa6003078 16 0x1234\nWrite 8-bit: devmem 0xa6003078 8 0x12\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var d=t(96540);const r={},i=d.createContext(r);function a(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);