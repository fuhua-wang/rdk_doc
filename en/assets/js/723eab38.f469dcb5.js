"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3408],{9280:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var o=d(74848),i=d(28453);const t={sidebar_position:1},r="dmesg",s={id:"Appendix/linux-command-manual/cmd_dmesg",title:"dmesg",description:"The dmesg command is used to view or control the kernel ring buffer.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_dmesg.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_dmesg",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dmesg",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/09_Appendix/linux-command-manual/cmd_dmesg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"apt",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_apt"},next:{title:"dpkg-deb",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dpkg-deb"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Option Explanation",id:"option-explanation",level:2},{value:"Common Commands",id:"common-commands",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"dmesg",children:"dmesg"}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"dmesg"})," command is used to view or control the kernel ring buffer."]}),"\n",(0,o.jsxs)(e.p,{children:["The kernel stores the kernel boot logs in the ring buffer. If you didn't have time to view the information during boot-up, you can use ",(0,o.jsx)(e.code,{children:"dmesg"})," to view it."]}),"\n",(0,o.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"dmesg [options]\n\ndmesg -C / dmesg --clear\ndmesg -c / dmesg --read-clear [options]\n"})}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsx)(e.h2,{id:"option-explanation",children:"Option Explanation"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"-c, --read-clear: Display the information and then clear the contents of the ring buffer."}),"\n",(0,o.jsx)(e.li,{children:"-C, --clear: Clear the contents of the ring buffer."}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Display all kernel log content in the ring buffer"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"dmesg\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Save the kernel log to a file"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"dmesg > kernel.log\n"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Clear the cached logs; useful for reducing log content when debugging drivers"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"dmesg -C\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>r,x:()=>s});var o=d(96540);const i={},t=o.createContext(i);function r(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);