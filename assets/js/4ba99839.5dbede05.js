"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3396],{22347:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>m,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=d(74848),s=d(28453);const i={sidebar_position:1},m="devmem",c={id:"Appendix/rdk-command-manual/cmd_devmem",title:"devmem",description:"devmem \u662f busybox \u4e2d\u7684\u4e00\u4e2a\u547d\u4ee4\u3002\u53ef\u4ee5\u8bfb\u5199\u786c\u4ef6\u5bc4\u5b58\u5668\u7684\u503c\uff0c\u901a\u8fc7 mmap \u51fd\u6570\u5bf9 /dev/mem \u9a71\u52a8\u4e2d\u7684 mmap \u65b9\u6cd5\u7684\u4f7f\u7528\uff0c\u6620\u5c04\u4e86\u8bbe\u5907\u7684\u5185\u5b58\u5230\u7528\u6237\u7a7a\u95f4\uff0c\u5b9e\u73b0\u5bf9\u8fd9\u4e9b\u7269\u7406\u5730\u5740\u7684\u8bfb\u5199\u64cd\u4f5c\u3002",source:"@site/docs/09_Appendix/rdk-command-manual/cmd_devmem.md",sourceDirName:"09_Appendix/rdk-command-manual",slug:"/Appendix/rdk-command-manual/cmd_devmem",permalink:"/rdk_doc/Appendix/rdk-command-manual/cmd_devmem",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/rdk-command-manual/cmd_devmem.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"9. \u9644\u5f55",permalink:"/rdk_doc/Appendix"},next:{title:"hrut_boardid \uff08RDK X3\uff09",permalink:"/rdk_doc/Appendix/rdk-command-manual/cmd_hrut_boardid"}},t={},o=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"devmem",children:"devmem"}),"\n",(0,r.jsx)(n.p,{children:"devmem \u662f busybox \u4e2d\u7684\u4e00\u4e2a\u547d\u4ee4\u3002\u53ef\u4ee5\u8bfb\u5199\u786c\u4ef6\u5bc4\u5b58\u5668\u7684\u503c\uff0c\u901a\u8fc7 mmap \u51fd\u6570\u5bf9 /dev/mem \u9a71\u52a8\u4e2d\u7684 mmap \u65b9\u6cd5\u7684\u4f7f\u7528\uff0c\u6620\u5c04\u4e86\u8bbe\u5907\u7684\u5185\u5b58\u5230\u7528\u6237\u7a7a\u95f4\uff0c\u5b9e\u73b0\u5bf9\u8fd9\u4e9b\u7269\u7406\u5730\u5740\u7684\u8bfb\u5199\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"devmem ADDRESS [WIDTH [VALUE]]\n  \n  Read/write from physical address\n\n        ADDRESS Address to act upon\n        WIDTH   Width (8/16/...)\n        VALUE   Data to be written\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ADDRESS\uff1a"})," \u8981\u6267\u884c\u64cd\u4f5c\u7684\u7269\u7406\u5730\u5740\u3002\u8fd9\u662f\u4e00\u4e2a\u5fc5\u9700\u53c2\u6570\uff0c\u7528\u4e8e\u6307\u5b9a\u8981\u8bfb\u53d6\u6216\u5199\u5165\u7684\u5730\u5740\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"WIDTH\uff1a"})," \u53ef\u9009\u53c2\u6570\uff0c\u8868\u793a\u6570\u636e\u7684\u4f4d\u5bbd\u3002\u53ef\u4ee5\u6307\u5b9a\u4e3a8\u300116\u300132\uff0c\u7528\u4e8e\u6307\u5b9a\u8bfb\u53d6\u6216\u5199\u5165\u7684\u6570\u636e\u4f4d\u5bbd\u3002\u5982\u679c\u672a\u63d0\u4f9b\u6b64\u53c2\u6570\uff0c\u9ed8\u8ba4\u4e3a32\u4f4d\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"VALUE\uff1a"})," \u53ef\u9009\u53c2\u6570\uff0c\u8868\u793a\u8981\u5199\u5165\u7684\u6570\u636e\u503c\u3002\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.code,{children:"WIDTH"})," \u53c2\u6570\uff0c",(0,r.jsx)(n.code,{children:"VALUE"})," \u5e94\u8be5\u4e0e\u6307\u5b9a\u4f4d\u5bbd\u76f8\u5339\u914d\u3002\u5982\u679c\u4e0d\u63d0\u4f9b ",(0,r.jsx)(n.code,{children:"VALUE"}),"\uff0c\u5219\u547d\u4ee4\u5c06\u6267\u884c\u8bfb\u53d6\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bfb\u5bc4\u5b58\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\u8bfb32\u4f4d: devmem 0xa600307c 32\n\u8bfb16\u4f4d: devmem 0xa600307c 16\n\u8bfb8\u4f4d: devmem 0xa600307c 8\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5199\u5bc4\u5b58\u5668"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"\u519932\u4f4d: devmem 0xa6003078 32 0x1000100\n\u519916\u4f4d: devmem 0xa6003078 16 0x1234\n\u51998\u4f4d: devmem 0xa6003078 8 0x12\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>m,x:()=>c});var r=d(96540);const s={},i=r.createContext(s);function m(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:m(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);