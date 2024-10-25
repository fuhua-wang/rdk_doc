"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6840],{24504:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});var r=o(74848),d=o(28453);const s={sidebar_position:1},i="nohup",t={id:"Appendix/linux-command-manual/cmd_nohup",title:"nohup",description:"nohup \u82f1\u6587\u5168\u79f0 no hang up\uff08\u4e0d\u6302\u8d77\uff09\uff0c\u7528\u4e8e\u5728\u7cfb\u7edf\u540e\u53f0\u4e0d\u6302\u65ad\u5730\u8fd0\u884c\u547d\u4ee4\uff0c\u9000\u51fa\u7ec8\u7aef\u4e0d\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u7684\u8fd0\u884c\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_nohup.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_nohup",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_nohup",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/09_Appendix/linux-command-manual/cmd_nohup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"netstat",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_netstat"},next:{title:"ps",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_ps"}},c={},l=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"nohup",children:"nohup"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"nohup"})," \u82f1\u6587\u5168\u79f0 no hang up\uff08\u4e0d\u6302\u8d77\uff09\uff0c\u7528\u4e8e\u5728\u7cfb\u7edf\u540e\u53f0\u4e0d\u6302\u65ad\u5730\u8fd0\u884c\u547d\u4ee4\uff0c\u9000\u51fa\u7ec8\u7aef\u4e0d\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u7684\u8fd0\u884c\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff08\u975e\u91cd\u5b9a\u5411\u65f6\uff09\uff0c\u4f1a\u8f93\u51fa\u4e00\u4e2a\u540d\u53eb nohup.out \u7684\u6587\u4ef6\u5230\u5f53\u524d\u76ee\u5f55\u4e0b\u3002\u5982\u679c\u5f53\u524d\u76ee\u5f55\u7684 nohup.out \u6587\u4ef6\u4e0d\u53ef\u5199\uff0c\u8f93\u51fa\u91cd\u5b9a\u5411\u5230",(0,r.jsx)(e.code,{children:"$HOME/nohup.out"}),"\u6587\u4ef6\u4e2d\u3002\u5982\u679c\u6ca1\u6709\u6587\u4ef6\u80fd\u521b\u5efa\u6216\u6253\u5f00\u4ee5\u7528\u4e8e\u8ffd\u52a0\uff0c\u90a3\u4e48 command \u53c2\u6570\u6307\u5b9a\u7684\u547d\u4ee4\u4e0d\u53ef\u8c03\u7528\u3002\u5982\u679c\u6807\u51c6\u9519\u8bef\u662f\u4e00\u4e2a\u7ec8\u7aef\uff0c\u90a3\u4e48\u628a\u6307\u5b9a\u7684\u547d\u4ee4\u5199\u7ed9\u6807\u51c6\u9519\u8bef\u7684\u6240\u6709\u8f93\u51fa\u4f5c\u4e3a\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u76f8\u540c\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"nohup COMMAND [ARG]... [\u3000& ]\nnohup OPTION\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"COMMAND"}),"\uff1a\u8981\u6267\u884c\u7684\u547d\u4ee4\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ARG"}),"\uff1a\u4e00\u4e9b\u53c2\u6570\uff0c\u53ef\u4ee5\u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"&"}),"\uff1a\u8ba9\u547d\u4ee4\u5728\u540e\u53f0\u6267\u884c\uff0c\u7ec8\u7aef\u9000\u51fa\u540e\u547d\u4ee4\u4ecd\u65e7\u6267\u884c\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"--help"}),"\uff1a\u663e\u793a\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:" --version"}),"\uff1a\u663e\u793a\u7248\u672c\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u547d\u4ee4\u5728\u540e\u53f0\u6267\u884c root \u76ee\u5f55\u4e0b\u7684 runoob.sh \u811a\u672c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"nohup /root/runoob.sh &\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u8981\u505c\u6b62\u8fd0\u884c\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u627e\u5230 nohup \u8fd0\u884c\u811a\u672c\u5230 PID\uff0c\u7136\u540e\u4f7f\u7528 kill \u547d\u4ee4\u6765\u5220\u9664"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'ps -aux | grep "runoob.sh" \n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4ee5\u4e0b\u547d\u4ee4\u5728\u540e\u53f0\u6267\u884c root \u76ee\u5f55\u4e0b\u7684 runoob.sh \u811a\u672c\uff0c\u5e76\u91cd\u5b9a\u5411\u8f93\u5165\u5230 runoob.log \u6587\u4ef6\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"nohup /root/runoob.sh > runoob.log 2>&1 &\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"2>&1"})," \u89e3\u91ca\uff1a"]}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u6807\u51c6\u9519\u8bef 2 \u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa &1 \uff0c\u6807\u51c6\u8f93\u51fa &1 \u518d\u88ab\u91cd\u5b9a\u5411\u8f93\u5165\u5230 runoob.log \u6587\u4ef6\u4e2d\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"0 \u2013 stdin (standard input\uff0c\u6807\u51c6\u8f93\u5165)"}),"\n",(0,r.jsx)(e.li,{children:"1 \u2013 stdout (standard output\uff0c\u6807\u51c6\u8f93\u51fa)"}),"\n",(0,r.jsx)(e.li,{children:"2 \u2013 stderr (standard error\uff0c\u6807\u51c6\u9519\u8bef\u8f93\u51fa)"}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>t});var r=o(96540);const d={},s=r.createContext(d);function i(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);