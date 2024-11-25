"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[222],{32814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(74848),d=i(28453);const r={sidebar_position:1},s="7.2.1 \u5f00\u53d1\u73af\u5883\u642d\u5efa\u53ca\u7f16\u8bd1\u8bf4\u660e",l={id:"Advanced_development/linux_development/environment_build",title:"7.2.1 \u5f00\u53d1\u73af\u5883\u642d\u5efa\u53ca\u7f16\u8bd1\u8bf4\u660e",description:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4ea4\u53c9\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u7684\u8981\u6c42\u53ca\u642d\u5efa\uff0c\u6e90\u7801\u4e0b\u8f7d\u548c\u7cfb\u7edf\u955c\u50cf\u7684\u7f16\u8bd1\u65b9\u6cd5\u8bf4\u660e\u3002",source:"@site/docs/07_Advanced_development/02_linux_development/environment_build.md",sourceDirName:"07_Advanced_development/02_linux_development",slug:"/Advanced_development/linux_development/environment_build",permalink:"/rdk_doc/Advanced_development/linux_development/environment_build",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/environment_build.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"7.2. Linux\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/linux_development"},next:{title:"7.2.2 RDK X3\u9a71\u52a8\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/"}},o={},c=[{value:"\u4ea4\u53c9\u7f16\u8bd1\u5f00\u53d1\u73af\u5883",id:"\u4ea4\u53c9\u7f16\u8bd1\u5f00\u53d1\u73af\u5883",level:2},{value:"RDK OS \u5f00\u53d1\u6307\u5357",id:"rdk-os-\u5f00\u53d1\u6307\u5357",level:2},{value:"\u5f00\u53d1 RDK X3",id:"\u5f00\u53d1-rdk-x3",level:3},{value:"\u5f00\u53d1 RDK X5",id:"\u5f00\u53d1-rdk-x5",level:3}];function h(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"721-\u5f00\u53d1\u73af\u5883\u642d\u5efa\u53ca\u7f16\u8bd1\u8bf4\u660e",children:"7.2.1 \u5f00\u53d1\u73af\u5883\u642d\u5efa\u53ca\u7f16\u8bd1\u8bf4\u660e"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u4ea4\u53c9\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u7684\u8981\u6c42\u53ca\u642d\u5efa\uff0c\u6e90\u7801\u4e0b\u8f7d\u548c\u7cfb\u7edf\u955c\u50cf\u7684\u7f16\u8bd1\u65b9\u6cd5\u8bf4\u660e\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4ea4\u53c9\u7f16\u8bd1\u5f00\u53d1\u73af\u5883",children:"\u4ea4\u53c9\u7f16\u8bd1\u5f00\u53d1\u73af\u5883"}),"\n",(0,t.jsx)(n.p,{children:"\u4ea4\u53c9\u7f16\u8bd1\u662f\u4e00\u79cd\u5728\u4e3b\u673a\u4e0a\u5f00\u53d1\u548c\u6784\u5efa\u8f6f\u4ef6\u7684\u65b9\u6cd5\uff0c\u6784\u5efa\u7684\u8f6f\u4ef6\u968f\u540e\u88ab\u90e8\u7f72\u5230\u5f00\u53d1\u677f\u4e0a\u8fd0\u884c\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u4e3b\u673a\u7279\u70b9"}),"\uff1a\u4e3b\u673a\u901a\u5e38\u5177\u5907\u66f4\u9ad8\u7684\u6027\u80fd\u548c\u66f4\u5927\u7684\u5185\u5b58\u5bb9\u91cf\uff0c\u53ef\u663e\u8457\u52a0\u901f\u4ee3\u7801\u6784\u5efa\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5de5\u5177\u652f\u6301"}),"\uff1a\u4e3b\u673a\u53ef\u4ee5\u5b89\u88c5\u66f4\u591a\u7684\u5f00\u53d1\u5de5\u5177\uff0c\u4ece\u800c\u63d0\u5347\u5f00\u53d1\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ea4\u53c9\u7f16\u8bd1\u73af\u5883\u7684\u642d\u5efa\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u6b65\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u4ea4\u53c9\u7f16\u8bd1\u73af\u5883\u7684\u6574\u4f53\u6846\u67b6\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220329140159441",src:i(82648).A+"",width:"976",height:"560"})}),"\n",(0,t.jsx)(n.h2,{id:"rdk-os-\u5f00\u53d1\u6307\u5357",children:"RDK OS \u5f00\u53d1\u6307\u5357"}),"\n",(0,t.jsx)(n.h3,{id:"\u5f00\u53d1-rdk-x3",children:"\u5f00\u53d1 RDK X3"}),"\n",(0,t.jsxs)(n.p,{children:["RDK X3 \u7684\u76f8\u5173\u6e90\u7801\u6258\u7ba1\u5728 GitHub \u7684 ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/rdk-gen",children:"rdk-gen \u4ed3\u5e93"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\uff1a\u4ed3\u5e93\u4e2d\u7684 ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/rdk-gen/blob/main/README.md",children:"README"})," \u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u6307\u5357\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7cfb\u7edf\u7f16\u8bd1\u65b9\u6cd5"}),"\uff1a\u5305\u62ec\u642d\u5efa\u5f00\u53d1\u73af\u5883\u3001\u6784\u5efa\u7cfb\u7edf\u955c\u50cf\u3001\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe\u914d\u7f6e\u3001\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\u4ee5\u53ca\u5e38\u89c1\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5f00\u53d1-rdk-x5",children:"\u5f00\u53d1 RDK X5"}),"\n",(0,t.jsxs)(n.p,{children:["RDK X5 \u7684\u76f8\u5173\u6e90\u7801\u6258\u7ba1\u5728 GitHub \u7684 ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/x5-rdk-gen",children:"x5-rdk-gen \u4ed3\u5e93"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\uff1a\u4ed3\u5e93\u4e2d\u7684 ",(0,t.jsx)(n.a,{href:"https://github.com/D-Robotics/x5-rdk-gen/blob/main/README.md",children:"README"})," \u63d0\u4f9b\u4e86\u4ece\u73af\u5883\u5b89\u88c5\u5230\u6e90\u7801\u7f16\u8bd1\u7684\u5b8c\u6574\u8bf4\u660e\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\u7cfb\u7edf\u7f16\u8bd1\u65b9\u6cd5"}),"\uff1a\u5305\u62ec\u642d\u5efa\u5f00\u53d1\u73af\u5883\u3001\u6784\u5efa\u7cfb\u7edf\u955c\u50cf\u3001\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe\u914d\u7f6e\u3001\u8f6f\u4ef6\u5f00\u53d1\u65b9\u6cd5\u4ee5\u53ca\u5e38\u89c1\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6cd5\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\uff0c\u60a8\u53ef\u4ee5\u5b8c\u6210 RDK OS \u7cfb\u7edf\u7684\u5f00\u53d1\u548c\u7f16\u8bd1\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u8003\u5bf9\u5e94\u7684 GitHub \u4ed3\u5e93\u8bf4\u660e\u6587\u4ef6\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},82648:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20220329140159441-9e45a309ac47ad503fcc2b37f97e6492.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const d={},r=t.createContext(d);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);