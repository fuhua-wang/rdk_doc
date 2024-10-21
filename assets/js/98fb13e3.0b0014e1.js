"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6968],{45756:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>i});var c=r(74848),o=r(28453);const d={sidebar_position:7},l="CPU\u6027\u80fd\u6d4b\u8bd5",t={id:"Advanced_development/linux_development/hardware_unit_test/test_cpu",title:"CPU\u6027\u80fd\u6d4b\u8bd5",description:"\u6d4b\u8bd5\u8bf4\u660e",source:"@site/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_cpu.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_cpu",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_cpu",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_cpu.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_ethernet"},next:{title:"7.2.4 \u5185\u6838\u5934\u6587\u4ef6",permalink:"/rdk_doc/Advanced_development/linux_development/kernel_headers"}},s={},i=[{value:"\u6d4b\u8bd5\u8bf4\u660e",id:"\u6d4b\u8bd5\u8bf4\u660e",level:2},{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:2},{value:"\u6d4b\u8bd5\u6307\u6807",id:"\u6d4b\u8bd5\u6307\u6807",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"cpu\u6027\u80fd\u6d4b\u8bd5",children:"CPU\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,c.jsx)(n.h2,{id:"\u6d4b\u8bd5\u8bf4\u660e",children:"\u6d4b\u8bd5\u8bf4\u660e"}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6d4b\u8bd5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"Coremark"}),"\u5de5\u5177\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6e90\u7801\u548c\u7f16\u8bd1\u597d\u7684\u8f6f\u4ef6\u653e\u5728",(0,c.jsx)(n.code,{children:"10-cpu_performace"}),"\u76ee\u5f55\u4e0b\u3002\nCoreMark\u662f\u4e00\u9879\u57fa\u51c6\u6d4b\u8bd5\u7a0b\u5e8f\uff0c\u5176\u4e3b\u8981\u76ee\u6807\u662f\u6d4b\u8bd5\u5904\u7406\u5668\u6838\u5fc3\u6027\u80fd\uff0cCoreMark\u6807\u51c6\u7684\u6d4b\u8bd5\u65b9\u6cd5\u5c31\u662f\u5728\u67d0\u914d\u7f6e\u53c2\u6570\u7ec4\u5408\u4e0b\u5355\u4f4d\u65f6\u95f4\u5185\u8dd1\u4e86\u591a\u5c11\u6b21CoreMark\u7a0b\u5e8f\uff0c\n\u4e1a\u754c\u7684\u5206\u6570\u5448\u73b0\u4e3a ",(0,c.jsx)(n.code,{children:"Coremark"})," / ",(0,c.jsx)(n.code,{children:"CPU clock Mhz"})," / ",(0,c.jsx)(n.code,{children:"Core num"}),"\uff0c\u5373 ",(0,c.jsx)(n.code,{children:"coremark\u6bcf\u79d2\u8dd1\u7684\u6b21\u6570"})," / ",(0,c.jsx)(n.code,{children:"cpu\u65f6\u949f\u9891\u7387"})," / ",(0,c.jsx)(n.code,{children:"cpu\u7684\u6838\u6570"}),"\uff0c\u6700\u7ec8\u5f97\u5230\u4e00\u4e2a\u8bc4\u5206\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u89e3\u538b",(0,c.jsx)(n.code,{children:"coremark-main.zip"}),"\uff0c\u5e76\u8fdb\u5165",(0,c.jsx)(n.code,{children:"coremark-main"}),"\u6587\u4ef6\u5939"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6267\u884c",(0,c.jsx)(n.code,{children:"./coremark_single 0x0 0x0 0x66 0 7 1 2000 > ./run1.log"}),"\uff0c\u7b49\u5f85\u7a0b\u5e8f\u6267\u884c\u5b8c\u6bd5;\u6267\u884c",(0,c.jsx)(n.code,{children:"./coremark_multi 0x0 0x0 0x66 0 7 1 2000 > ./run2.log"}),"\uff0c\u7b49\u5f85\u7a0b\u5e8f\u6267\u884c\u5b8c\u6bd5\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u67e5\u770b",(0,c.jsx)(n.code,{children:"run1.log"}),"\u91cc\u9762\u7684",(0,c.jsx)(n.strong,{children:"\u5355\u6838"}),"\u6d4b\u8bd5\u6210\u7ee9\uff0c\u53c2\u8003\u5982\u4e0b\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-yaml",children:"2K performance run parameters for coremark.\nCoreMark Size    : 666\nTotal ticks      : 20830\nTotal time (secs): 20.830000\nIterations/Sec   : 5280.844935\nIterations       : 110000\nCompiler version : GCC6.5.0\nCompiler flags   :  -O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1  -lrt\nMemory location  : Please put data memory location here\n                        (e.g. code in flash, data on heap etc)\nseedcrc          : 0xe9f5\n[0]crclist       : 0xe714\n[0]crcmatrix     : 0x1fd7\n[0]crcstate      : 0x8e3a\n[0]crcfinal      : 0x33ff\nCorrect operation validated. See README.md for run and reporting rules.\nCoreMark 1.0 : 5280.844935 / GCC6.5.0  -O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1  -lrt / Heap\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6ce8\u610f\u5230",(0,c.jsx)(n.code,{children:"Iterations/Sec"}),"\u8fd9\u680f\uff0c\u8868\u793a\u6bcf\u79d2\u949f\u8fed\u4ee3\u591a\u5c11\u6b21\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u4e0a\u9762\u516c\u5f0f\u7684",(0,c.jsx)(n.code,{children:"coremark"}),"\u5206\u6570\u3002",(0,c.jsx)(n.br,{}),"\n","\u6839\u636e\u516c\u5f0f\uff0c\u8fd9\u9897x3\u7684\u5355\u6838\u5206\u6570\u4e3a",(0,c.jsx)(n.code,{children:"5280.844935"}),"/",(0,c.jsx)(n.code,{children:"1200"}),"\uff08\u9ed8\u8ba4\u9891\u7387\uff09/",(0,c.jsx)(n.code,{children:"1"})," = ",(0,c.jsx)(n.code,{children:"4.400"}),"\u3002\u5c5e\u4e8e\u6b63\u5e38\u8303\u56f4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"./run2.log"}),"\u91cc\u9762\u4fdd\u5b58\u7740",(0,c.jsx)(n.strong,{children:"\u591a\u6838\u5fc3"}),"\u7684\u6210\u7ee9\uff0c\u8ba1\u7b97\u591a\u6838\u5206\u6570\u548c\u5355\u6838\u5206\u6570\u7c7b\u4f3c\uff0c\u6b64\u5904\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6d4b\u8bd5\u6307\u6807",children:"\u6d4b\u8bd5\u6307\u6807"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5355\u6838\u5206\u6570 X > 4.2"}),"\n",(0,c.jsx)(n.li,{children:"\u56db\u6838\u5206\u6570 X > 4.2"}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u9644\u5f55",children:"\u9644\u5f55"}),"\n",(0,c.jsxs)(n.p,{children:["\u4ea4\u53c9\u7f16\u8bd1",(0,c.jsx)(n.code,{children:"coremark"}),"\u6d41\u7a0b\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u8fdb\u5165",(0,c.jsx)(n.code,{children:"coremark-main"}),"\u76ee\u5f55\uff0c\u5c06",(0,c.jsx)(n.code,{children:"aarch64/core_portme.mak"}),"\u4e2d\u7684",(0,c.jsx)(n.code,{children:"CC"}),"\u7f16\u8bd1\u5668\u8def\u5f84\u6362\u6210\u81ea\u5df1\u7684\u7528\u4e8e\u4ea4\u53c9\u7f16\u8bd1\u7684",(0,c.jsx)(n.code,{children:"gcc"}),"\u8def\u5f84\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u6267\u884c",(0,c.jsx)(n.code,{children:'make PORT_DIR=aarch64 XCFLAGS="-O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1" REBUILD=1 run1.log'}),"\u7f16\u8bd1",(0,c.jsx)(n.strong,{children:"\u5355\u6838"}),"\u6d4b\u8bd5\u7a0b\u5e8f\uff1b\u6267\u884c",(0,c.jsx)(n.code,{children:'make PORT_DIR=aarch64 XCFLAGS="-O3 -funroll-all-loops -static --param max-inline-insns-auto=550 -DPERFORMANCE_RUN=1 -DMULTITHREAD=4  -DUSE_PTHREAD -pthread" REBUILD=1 run1.log'}),"\u7f16\u8bd1\u751f\u6210",(0,c.jsx)(n.strong,{children:"4\u6838"}),"\u6d4b\u8bd5\u7a0b\u5e8f\uff0c\u5176\u4e2d",(0,c.jsx)(n.code,{children:"-DMULTITHREAD="}),"\u53c2\u6570\u7528\u4e8e\u63a7\u5236\u751f\u6210\u51e0\u6838\u5fc3\u7684\u6d4b\u8bd5\u7a0b\u5e8f\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var c=r(96540);const o={},d=c.createContext(o);function l(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);