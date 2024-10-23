"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3408],{9280:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=d(74848),o=d(28453);const r={sidebar_position:1},t="dmesg",s={id:"Appendix/linux-command-manual/cmd_dmesg",title:"dmesg",description:"The dmesg command is used to view or control the kernel ring buffer.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_dmesg.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_dmesg",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dmesg",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_dmesg.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"apt",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_apt"},next:{title:"dpkg-deb",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_dpkg-deb"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Option Explanation",id:"option-explanation",level:2},{value:"Common Commands",id:"common-commands",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dmesg",children:"dmesg"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"dmesg"})," command is used to view or control the kernel ring buffer."]}),"\n",(0,i.jsxs)(n.p,{children:["The kernel stores the kernel boot logs in the ring buffer. If you didn't have time to view the information during boot-up, you can use ",(0,i.jsx)(n.code,{children:"dmesg"})," to view it."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dmesg [options]\n\ndmesg -C / dmesg --clear\ndmesg -c / dmesg --read-clear [options]\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"option-explanation",children:"Option Explanation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"-c, --read-clear: Display the information and then clear the contents of the ring buffer."}),"\n",(0,i.jsx)(n.li,{children:"-C, --clear: Clear the contents of the ring buffer."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Display all kernel log content in the ring buffer"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dmesg\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Save the kernel log to a file"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dmesg > kernel.log\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Clear the cached logs; useful for reducing log content when debugging drivers"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dmesg -C\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>s});var i=d(96540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);