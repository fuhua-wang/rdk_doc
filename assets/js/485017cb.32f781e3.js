"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1771],{82893:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var c=s(74848),i=s(28453);const d={sidebar_position:1},t="netstat",l={id:"Appendix/linux-command-manual/cmd_netstat",title:"netstat",description:"netstat\u547d\u4ee4 \u7528\u6765\u6253\u5370Linux\u4e2d\u7f51\u7edc\u7cfb\u7edf\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u53ef\u8ba9\u4f60\u5f97\u77e5\u6574\u4e2a\u7cfb\u7edf\u7684\u7f51\u7edc\u60c5\u51b5\u3002",source:"@site/docs/09_Appendix/linux-command-manual/cmd_netstat.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_netstat",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_netstat",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/09_Appendix/linux-command-manual/cmd_netstat.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"mount",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_mount"},next:{title:"nohup",permalink:"/rdk_doc/Appendix/linux-command-manual/cmd_nohup"}},r={},o=[{value:"\u8bed\u6cd5\u8bf4\u660e",id:"\u8bed\u6cd5\u8bf4\u660e",level:2},{value:"\u9009\u9879\u8bf4\u660e",id:"\u9009\u9879\u8bf4\u660e",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2}];function x(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"netstat",children:"netstat"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.strong,{children:"netstat\u547d\u4ee4"})," \u7528\u6765\u6253\u5370Linux\u4e2d\u7f51\u7edc\u7cfb\u7edf\u7684\u72b6\u6001\u4fe1\u606f\uff0c\u53ef\u8ba9\u4f60\u5f97\u77e5\u6574\u4e2a\u7cfb\u7edf\u7684\u7f51\u7edc\u60c5\u51b5\u3002"]}),"\n",(0,c.jsx)(e.h2,{id:"\u8bed\u6cd5\u8bf4\u660e",children:"\u8bed\u6cd5\u8bf4\u660e"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat [-vWeenNcCF] [<Af>] -r         \nnetstat {-V|--version|-h|--help}\nnetstat [-vWnNcaeol] [<Socket> ...]\nnetstat { [-vWeenNac] -i | [-cnNe] -M | -s [-6tuw] }\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u9009\u9879\u8bf4\u660e",children:"\u9009\u9879\u8bf4\u660e"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-A"}),"\uff1a \u5217\u51fa\u8be5\u7f51\u7edc\u7c7b\u578b\u8fde\u7ebf\u4e2d\u7684\u76f8\u5173\u5730\u5740\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-r, --route"}),"\uff1a\u663e\u793a\u8def\u7531\u8868\uff0c\u5217\u51fa\u7cfb\u7edf\u7684\u8def\u7531\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-i, --interfaces"}),"\uff1a\u663e\u793a\u7f51\u7edc\u63a5\u53e3\u4fe1\u606f\uff0c\u5305\u62ec\u63a5\u53e3\u540d\u79f0\u3001IP \u5730\u5740\u548c\u5176\u4ed6\u76f8\u5173\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-g, --groups"}),"\uff1a\u663e\u793a\u7ec4\u64ad\u7ec4\u6210\u5458\u4fe1\u606f\uff0c\u5305\u62ec\u54ea\u4e9b\u7f51\u7edc\u7ec4\u6210\u5458\u5728\u7ec4\u64ad\u7ec4\u4e2d\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-s, --statistics"}),"\uff1a\u663e\u793a\u7f51\u7edc\u7edf\u8ba1\u4fe1\u606f\uff0c\u7c7b\u4f3c\u4e8e SNMP\uff08Simple Network Management Protocol\uff09\uff0c\u63d0\u4f9b\u6709\u5173\u7f51\u7edc\u6d3b\u52a8\u7684\u8be6\u7ec6\u7edf\u8ba1\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-M, --masquerade"}),"\uff1a\u663e\u793a\u4f2a\u88c5\uff08masquerade\uff09\u8fde\u63a5\u4fe1\u606f\uff0c\u901a\u5e38\u7528\u4e8e Network Address Translation (NAT) \u7f51\u7edc\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-v, --verbose"}),"\uff1a\u663e\u793a\u8be6\u7ec6\u4fe1\u606f\uff0c\u63d0\u4f9b\u66f4\u591a\u7684\u4fe1\u606f\u4ee5\u5e2e\u52a9\u8bca\u65ad\u7f51\u7edc\u95ee\u9898\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-W, --wide"}),"\uff1a\u4e0d\u622a\u65ad IP \u5730\u5740\uff0c\u4ee5\u663e\u793a\u5b8c\u6574\u7684 IP \u5730\u5740\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-n, --numeric"}),"\uff1a\u4e0d\u89e3\u6790\u4e3b\u673a\u540d\u6216\u7aef\u53e3\u540d\uff0c\u4ee5\u663e\u793a\u6570\u5b57\u683c\u5f0f\u7684 IP \u5730\u5740\u3001\u7aef\u53e3\u53f7\u548c\u7528\u6237\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"--numeric-hosts"}),"\uff1a\u4e0d\u89e3\u6790\u4e3b\u673a\u540d\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"--numeric-ports"}),"\uff1a\u4e0d\u89e3\u6790\u7aef\u53e3\u540d\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"--numeric-users"}),"\uff1a\u4e0d\u89e3\u6790\u7528\u6237\u540d\u79f0\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-N, --symbolic"}),"\uff1a\u89e3\u6790\u786c\u4ef6\u540d\uff0c\u663e\u793a\u786c\u4ef6\u8bbe\u5907\u7684\u7b26\u53f7\u540d\u79f0\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-e, --extend"}),"\uff1a\u663e\u793a\u9644\u52a0\u4fe1\u606f\u3002\u4f7f\u7528\u6b64\u9009\u9879\u4e24\u6b21\u4ee5\u83b7\u53d6\u6700\u5927\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-p, --programs"}),"\uff1a\u663e\u793a PID\uff08\u8fdb\u7a0b\u6807\u8bc6\u7b26\uff09\u548c\u7a0b\u5e8f\u540d\u79f0\uff0c\u4ee5\u663e\u793a\u4e0e\u5957\u63a5\u5b57\u76f8\u5173\u7684\u8fdb\u7a0b\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-o, --timers"}),"\uff1a\u663e\u793a\u8ba1\u65f6\u5668\u4fe1\u606f\uff0c\u5305\u62ec\u5957\u63a5\u5b57\u7684\u8ba1\u65f6\u5668\u72b6\u6001\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-c, --continuous"}),"\uff1a\u4f7f ",(0,c.jsx)(e.code,{children:"netstat"})," \u6301\u7eed\u6253\u5370\u6240\u9009\u4fe1\u606f\uff0c\u6bcf\u79d2\u4e00\u6b21\uff0c\u4ee5\u8fdb\u884c\u8fde\u7eed\u76d1\u63a7\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-l, --listening"}),"\uff1a\u53ea\u663e\u793a\u6b63\u5728\u76d1\u542c\u7684\u670d\u52a1\u5668\u5957\u63a5\u5b57\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-a, --all"}),"\uff1a\u663e\u793a\u6240\u6709\u5957\u63a5\u5b57\uff0c\u5305\u62ec\u5df2\u8fde\u63a5\u548c\u672a\u8fde\u63a5\u7684\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-F, --fib"}),"\uff1a\u663e\u793a\u8f6c\u53d1\u4fe1\u606f\u8868\uff08FIB\uff09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-C, --cache"}),"\uff1a\u663e\u793a\u8def\u7531\u7f13\u5b58\uff0c\u800c\u4e0d\u662f\u8f6c\u53d1\u4fe1\u606f\u8868\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-Z, --context"}),"\uff1a\u663e\u793a SELinux \u5b89\u5168\u4e0a\u4e0b\u6587\uff0c\u7528\u4e8e\u663e\u793a\u5957\u63a5\u5b57\u7684 SELinux \u5b89\u5168\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-v, --verbose"}),"\uff1a\u542f\u7528\u8be6\u7ec6\u8f93\u51fa\uff0c\u5411\u7528\u6237\u63d0\u4f9b\u6709\u5173\u6b63\u5728\u8fdb\u884c\u7684\u64cd\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\u3002\u7279\u522b\u662f\u5728\u5904\u7406\u672a\u914d\u7f6e\u7684\u5730\u5740\u65cf\u65f6\uff0c\u63d0\u4f9b\u4e00\u4e9b\u6709\u7528\u7684\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-o, --timers"}),"\uff1a\u5305\u62ec\u4e0e\u7f51\u7edc\u8ba1\u65f6\u5668\u76f8\u5173\u7684\u4fe1\u606f\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-p, --program"}),"\uff1a\u663e\u793a\u6bcf\u4e2a\u5957\u63a5\u5b57\u6240\u5c5e\u7684\u7a0b\u5e8f\u7684 PID \u548c\u540d\u79f0\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-l, --listening"}),"\uff1a\u4ec5\u663e\u793a\u6b63\u5728\u76d1\u542c\u7684\u5957\u63a5\u5b57\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u88ab\u7701\u7565\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-a, --all"}),"\uff1a\u663e\u793a\u76d1\u542c\u548c\u975e\u76d1\u542c\u7684\u5957\u63a5\u5b57\u3002\u5728\u4f7f\u7528 ",(0,c.jsx)(e.code,{children:"--interfaces"})," \u9009\u9879\u65f6\uff0c\u663e\u793a\u672a\u542f\u7528\u7684\u63a5\u53e3\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-F"}),"\uff1a\u4ece FIB \u6253\u5370\u8def\u7531\u4fe1\u606f\uff08\u9ed8\u8ba4\uff09\u3002"]}),"\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"-C"}),"\uff1a\u4ece\u8def\u7531\u7f13\u5b58\u4e2d\u6253\u5370\u8def\u7531\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u8be6\u7ec6\u7684\u7f51\u7edc\u72b6\u51b5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -a\t   #\u5217\u51fa\u6240\u6709\u7aef\u53e3\nnetstat -at    #\u5217\u51fa\u6240\u6709tcp\u7aef\u53e3\nnetstat -au    #\u5217\u51fa\u6240\u6709udp\u7aef\u53e3   \n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u5f53\u524d\u6237\u7c4dUDP\u8fde\u63a5\u72b6\u51b5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -nu\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793aUDP\u7aef\u53e3\u53f7\u7684\u4f7f\u7528\u60c5\u51b5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -apu\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u7f51\u5361\u5217\u8868"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -i\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u7ec4\u64ad\u7ec4\u7684\u5173\u7cfb"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -g\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u7f51\u7edc\u7edf\u8ba1\u4fe1\u606f"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -s   \u663e\u793a\u6240\u6709\u7aef\u53e3\u7684\u7edf\u8ba1\u4fe1\u606f\nnetstat -st   \u663e\u793aTCP\u7aef\u53e3\u7684\u7edf\u8ba1\u4fe1\u606f\nnetstat -su   \u663e\u793aUDP\u7aef\u53e3\u7684\u7edf\u8ba1\u4fe1\u606f\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u76d1\u542c\u7684\u5957\u63a5\u53e3"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -l        #\u53ea\u663e\u793a\u76d1\u542c\u7aef\u53e3\nnetstat -lt       #\u53ea\u5217\u51fa\u6240\u6709\u76d1\u542c tcp \u7aef\u53e3\nnetstat -lu       #\u53ea\u5217\u51fa\u6240\u6709\u76d1\u542c udp \u7aef\u53e3\nnetstat -lx       #\u53ea\u5217\u51fa\u6240\u6709\u76d1\u542c UNIX \u7aef\u53e3\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5728netstat\u8f93\u51fa\u4e2d\u663e\u793a PID \u548c\u8fdb\u7a0b\u540d\u79f0"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -pt\n"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"netstat -p"}),"\u53ef\u4ee5\u4e0e\u5176\u5b83\u5f00\u5173\u4e00\u8d77\u4f7f\u7528\uff0c\u5c31\u53ef\u4ee5\u6dfb\u52a0\u201cPID/\u8fdb\u7a0b\u540d\u79f0\u201d\u5230netstat\u8f93\u51fa\u4e2d\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u6301\u7eed\u8f93\u51fanetstat\u4fe1\u606f"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"netstat -c   #\u6bcf\u9694\u4e00\u79d2\u8f93\u51fa\u7f51\u7edc\u4fe1\u606f\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u663e\u793a\u6838\u5fc3\u8def\u7531\u4fe1\u606f"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"netstat -r\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u4f7f\u7528",(0,c.jsx)(e.code,{children:"netstat -rn"}),"\u663e\u793a\u6570\u5b57\u683c\u5f0f\uff0c\u4e0d\u67e5\u8be2\u4e3b\u673a\u540d\u79f0\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u627e\u51fa\u7a0b\u5e8f\u8fd0\u884c\u7684\u7aef\u53e3"}),"\n",(0,c.jsx)(e.p,{children:"\u5e76\u4e0d\u662f\u6240\u6709\u7684\u8fdb\u7a0b\u90fd\u80fd\u627e\u5230\uff0c\u6ca1\u6709\u6743\u9650\u7684\u4f1a\u4e0d\u663e\u793a\uff0c\u4f7f\u7528 root \u6743\u9650\u67e5\u770b\u6240\u6709\u7684\u4fe1\u606f\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"netstat -ap | grep ssh\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u627e\u51fa\u8fd0\u884c\u5728\u6307\u5b9a\u7aef\u53e3\u7684\u8fdb\u7a0b"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-shell",children:"netstat -an | grep ':80'\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u901a\u8fc7\u7aef\u53e3\u627e\u8fdb\u7a0bID"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"netstat -anp|grep 8081 | grep LISTEN|awk '{printf $7}'|cut -d/ -f1\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(x,{...n})}):x(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var c=s(96540);const i={},d=c.createContext(i);function t(n){const e=c.useContext(d);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),c.createElement(d.Provider,{value:e},n.children)}}}]);