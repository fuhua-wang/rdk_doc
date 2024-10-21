"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3226],{85515:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=n(74848),l=n(28453);const s={sidebar_position:4},d="5.5.4 \u6027\u80fd\u706b\u7130\u56fe",a={id:"Robot_development/tros_dev/flame_graph",title:"5.5.4 \u6027\u80fd\u706b\u7130\u56fe",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/05_tros_dev/flame_graph.md",sourceDirName:"05_Robot_development/05_tros_dev",slug:"/Robot_development/tros_dev/flame_graph",permalink:"/rdk_doc/Robot_development/tros_dev/flame_graph",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/05_tros_dev/flame_graph.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"5.5.3 breakpad\u4f7f\u7528",permalink:"/rdk_doc/Robot_development/tros_dev/breakpad"},next:{title:"5.5.5 \u5783\u573e\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/tros_dev/mono2d_trash_detection"}},i={},o=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"554-\u6027\u80fd\u706b\u7130\u56fe",children:"5.5.4 \u6027\u80fd\u706b\u7130\u56fe"}),"\n",(0,t.jsx)(r.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsx)(r.p,{children:"\u706b\u7130\u56fe\u662f\u7528\u56fe\u5f62\u5316\u7684\u65b9\u5f0f\u6765\u5c55\u73b0perf\u7b49\u5de5\u5177\u91c7\u96c6\u7684\u6027\u80fd\u6570\u636e\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u7edf\u8ba1\u548c\u5206\u6790\uff0c\u65b9\u4fbf\u627e\u51fa\u6027\u80fd\u70ed\u70b9\u3002"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"http-bw",src:n(53404).A+"",title:"flame graph",width:"1240",height:"329"})}),"\n",(0,t.jsx)(r.p,{children:"\u706b\u7130\u56fe\u4e2d\u7684\u6bcf\u4e00\u4e2a\u65b9\u6846\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u65b9\u6846\u7684\u957f\u5ea6\uff0c\u4ee3\u8868\u4e86\u5b83\u7684\u6267\u884c\u65f6\u95f4\uff0c\u6240\u4ee5\u8d8a\u5bbd\u7684\u51fd\u6570\uff0c\u6267\u884c\u8d8a\u4e45\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u706b\u7130\u56fe\u7684\u697c\u5c42\u6bcf\u9ad8\u4e00\u5c42\uff0c\u5c31\u662f\u66f4\u6df1\u4e00\u7ea7\u7684\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u6700\u9876\u5c42\u7684\u51fd\u6570\uff0c\u662f\u53f6\u5b50\u51fd\u6570\u3002"}),"\n",(0,t.jsxs)(r.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a (",(0,t.jsx)(r.a,{href:"https://github.com/brendangregg/FlameGraph.git",children:"https://github.com/brendangregg/FlameGraph.git"}),")"]}),"\n",(0,t.jsx)(r.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u5e73\u53f0"}),(0,t.jsx)(r.th,{children:"\u8fd0\u884c\u65b9\u5f0f"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,t.jsx)(r.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RDK Ultra"}),(0,t.jsx)(r.td,{children:"Ubuntu 20.04 (Foxy)"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,t.jsx)(r.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"flamegraph\u5de5\u5177\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff0c\u7b2c\u4e00\u90e8\u5206\u662f\u53ef\u6267\u884c\u7a0b\u5e8fperf\u3002perf\u662f\u4e00\u6b3e\u8fdb\u884c\u8f6f\u4ef6\u6027\u80fd\u5206\u6790\u7684\u5de5\u5177\uff0c\u7528\u4e8e\u7edf\u8ba1\u5e76\u8f93\u51fa\u7cfb\u7edf\u6216\u67d0\u4e00\u8fdb\u7a0b\u5185\u7684\u51fd\u6570\u8c03\u7528\u60c5\u51b5\u3002perf\u5de5\u5177RDK\u7684\u64cd\u4f5c\u7cfb\u7edf\u5df2\u7ecf\u81ea\u5e26\u4e86\uff0c\u6240\u4ee5\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002"}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"flamegraph\u5de5\u5177\u7684\u7b2c\u4e8c\u90e8\u5206\u662f\u89e3\u6790perf\u6587\u672c\u7684\u811a\u672c\uff0c\u811a\u672c\u7528\u4e8e\u89e3\u6790perf\u7edf\u8ba1\u7684\u6587\u672c\u6570\u636e\uff0c\u751f\u6210SVG\u683c\u5f0f\u7684\u51fd\u6570\u8c03\u7528\u706b\u7130\u56fe\uff0c\u65b9\u4fbf\u89c2\u5bdf\u548c\u5206\u6790\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528perf record\u5de5\u5177\u91c7\u6837RDK\u7cfb\u7edf\u5185\u7684\u51fd\u6570\u8c03\u7528\u60c5\u51b5\uff0c\u751f\u6210perf.data\u6587\u4ef6"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"root@ubuntu:~# perf record -F 99 -a -g -- sleep 60\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528perf script \u89e3\u6790perf.data\u6587\u4ef6\u751f\u6210out.perf"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"root@ubuntu:~# perf script > out.perf\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["\u5728PC\u6216\u8005RDK\u4e0a `git clone ",(0,t.jsx)(r.a,{href:"https://github.com/brendangregg/FlameGraph.git)%EF%BC%8C%E8%BF%9B%E5%85%A5flamegraph%E7%9B%AE%E5%BD%95%EF%BC%8C%E6%8A%8A%E7%AC%AC2%E6%AD%A5%E7%94%9F%E6%88%90%E7%9A%84out.perf%E6%8B%B7%E8%B4%9D%E5%88%B0flamegraph%E7%9B%AE%E5%BD%95%E5%86%85%E3%80%82%E4%BD%BF%E7%94%A8flamegraph%E5%B7%A5%E5%85%B7%E5%8C%85%E5%86%85%E7%9A%84stackcollapse-perf.pl",children:"https://github.com/brendangregg/FlameGraph.git)\uff0c\u8fdb\u5165flamegraph\u76ee\u5f55\uff0c\u628a\u7b2c2\u6b65\u751f\u6210\u7684out.perf\u62f7\u8d1d\u5230flamegraph\u76ee\u5f55\u5185\u3002\u4f7f\u7528flamegraph\u5de5\u5177\u5305\u5185\u7684stackcollapse-perf.pl"})," \u5bf9out.perf \u53cd\u6298\u53e0\u751f\u6210out.folded"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"./stackcollapse-perf.pl out.perf > out.folded\n"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"\u4f7f\u7528flamegraph.pl \u751f\u6210svg\u706b\u7130\u56fe"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-shell",children:"./flamegraph.pl out.folded > flame.svg\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u5176\u4e2d1\uff0c2\u6b65\u9aa4\u5728RDK\u4e0a\u5b8c\u6210\uff0c3\uff0c4\u6b65\u9aa4\u5728PC\u6216\u8005RDK\u4e0a\u5b8c\u6210\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,t.jsx)(r.p,{children:"\u7ecf\u8fc7\u524d\u4e00\u8282\u7684\u4f7f\u7528\u6d41\u7a0b\uff0c\u8bb0\u5f55\u4e0b\u6765RDK\u7684\u7cfb\u7edf\u5185\u7684\u51fd\u6570\u8c03\u7528\u5982\u4e0b\u56fe\u6240\u793a"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(43619).A+"",width:"1234",height:"334"})})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},43619:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/flame_graph_result-701f7f64f53ad379ed182b94b50351ec.png"},53404:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/flamegraph-4d4601bd4f67031ec67d145273a3442a.png"},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>a});var t=n(96540);const l={},s=t.createContext(l);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);