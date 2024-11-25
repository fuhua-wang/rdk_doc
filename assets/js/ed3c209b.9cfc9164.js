"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8313],{79211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var d=t(74848),r=t(28453);const i={sidebar_position:6},s="\u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5",c={id:"Advanced_development/linux_development/hardware_unit_test/test_ethernet",title:"\u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5",description:"\u6d4b\u8bd5\u8bf4\u660e",source:"@site/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_ethernet.md",sourceDirName:"07_Advanced_development/02_linux_development/hardware_unit_test",slug:"/Advanced_development/linux_development/hardware_unit_test/test_ethernet",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_ethernet",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/hardware_unit_test/test_ethernet.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"USB\u9a71\u52a8\u6027\u80fd\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_usb"},next:{title:"CPU\u6027\u80fd\u6d4b\u8bd5",permalink:"/rdk_doc/Advanced_development/linux_development/hardware_unit_test/test_cpu"}},l={},o=[{value:"\u6d4b\u8bd5\u8bf4\u660e",id:"\u6d4b\u8bd5\u8bf4\u660e",level:2},{value:"\u6d4b\u8bd5\u65b9\u6cd5",id:"\u6d4b\u8bd5\u65b9\u6cd5",level:2},{value:"PC\u4fa7",id:"pc\u4fa7",level:3},{value:"\u5f00\u53d1\u677f\u4fa7",id:"\u5f00\u53d1\u677f\u4fa7",level:3},{value:"iperf3\u5e38\u7528\u53c2\u6570",id:"iperf3\u5e38\u7528\u53c2\u6570",level:3},{value:"\u6d4b\u8bd5\u6807\u51c6",id:"\u6d4b\u8bd5\u6807\u51c6",level:2}];function p(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5",children:"\u7f51\u7edc\u6027\u80fd\u6d4b\u8bd5"}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u8bf4\u660e",children:"\u6d4b\u8bd5\u8bf4\u660e"}),"\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,d.jsx)(n.code,{children:"iperf3"})," \u5de5\u5177\u8fdb\u884c\u6d4b\u8bd5\uff08sdk\u6e90\u7801\u5305\u5df2\u81ea\u5e26\u8be5\u5de5\u5177\uff09\u3002",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.code,{children:"iperf3"})," \u662f\u4e00\u4e2a ",(0,d.jsx)(n.code,{children:"TCP"}),"\u3001",(0,d.jsx)(n.code,{children:"UDP"})," \u548c ",(0,d.jsx)(n.code,{children:"SCTP"})," \u7f51\u7edc\u5e26\u5bbd\u6d4b\u91cf\u5de5\u5177\u3002\u662f\u7528\u4e8e\u4e3b\u52a8\u6d4b\u91cfIP\u7f51\u7edc\u4e0a\u53ef\u8fbe\u5230\u7684\u6700\u5927\u5e26\u5bbd\u7684\u5de5\u5177\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u65b9\u6cd5",children:"\u6d4b\u8bd5\u65b9\u6cd5"}),"\n",(0,d.jsx)(n.p,{children:"\u9996\u5148\u786e\u5b9a\u597d\u5f00\u53d1\u677f\u548cPC\u80fd\u4e92\u76f8ping\u901a\uff0c\u624d\u80fd\u8fdb\u884c\u4e0b\u4e00\u6b65\u6d4b\u8bd5\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"pc\u4fa7",children:"PC\u4fa7"}),"\n",(0,d.jsxs)(n.p,{children:["PC\u7aef\u505a\u670d\u52a1\u7aef\uff0c\u6267\u884c",(0,d.jsx)(n.code,{children:"iperf3 -s -f m"})," \u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5f00\u53d1\u677f\u4fa7",children:"\u5f00\u53d1\u677f\u4fa7"}),"\n",(0,d.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u505a\u5ba2\u6237\u7aef\uff0c\u6267\u884c",(0,d.jsx)(n.code,{children:"iperf3 -c 192.168.1.1 -f m -i 1 -t 60"})," \u8fdb\u884c\u7f51\u7edc\u6d4b\u8bd5\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"iperf3\u5e38\u7528\u53c2\u6570",children:"iperf3\u5e38\u7528\u53c2\u6570"}),"\n",(0,d.jsxs)(n.p,{children:["\u5bf9\u4e8e\u670d\u52a1\u7aef\uff0c",(0,d.jsx)(n.code,{children:"iperf3"}),"\u5e38\u89c1\u914d\u7f6e\u53c2\u6570\u5982\u4e0b:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"-s       \u8868\u793a\u670d\u52a1\u5668\u7aef\uff1b\n-p port  \u5b9a\u4e49\u7aef\u53e3\u53f7\uff1b\n-i sec   \u8bbe\u7f6e\u6bcf\u6b21\u62a5\u544a\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a\u975e\u96f6\u503c\uff0c\u5c31\u4f1a\u6309\u7167\u6b64\u65f6\u95f4\u95f4\u9694\u8f93\u51fa\u6d4b\u8bd5\u62a5\u544a\uff0c\u9ed8\u8ba4\u503c\u4e3a\u96f6\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5ba2\u6237\u7aef\uff0c",(0,d.jsx)(n.code,{children:"iperf3"})," \u5e38\u89c1\u914d\u7f6e\u53c2\u6570\u5982\u4e0b:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"-c ip   \u8868\u793a\u670d\u52a1\u5668\u7684IP\u5730\u5740\uff1b\n-p port \u8868\u793a\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7\uff1b\n-t sec  \u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u4f20\u8f93\u6d4b\u8bd5\u7684\u6301\u7eed\u65f6\u95f4,Iperf\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u5185\uff0c\u91cd\u590d\u7684\u53d1\u9001\u6307\u5b9a\u957f\u5ea6\u7684\u6570\u636e\u5305\uff0c\u9ed8\u8ba4\u662f10\u79d2\u949f.\n-i sec  \u8bbe\u7f6e\u6bcf\u6b21\u62a5\u544a\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a\u975e\u96f6\u503c\uff0c\u5c31\u4f1a\u6309\u7167\u6b64\u65f6\u95f4\u95f4\u9694\u8f93\u51fa\u6d4b\u8bd5\u62a5\u544a\uff0c\u9ed8\u8ba4\u503c\u4e3a\u96f6\uff1b\n-w size \u8bbe\u7f6e\u5957\u63a5\u5b57\u7f13\u51b2\u533a\u4e3a\u6307\u5b9a\u5927\u5c0f\uff0c\u5bf9\u4e8eTCP\u65b9\u5f0f\uff0c\u6b64\u8bbe\u7f6e\u4e3aTCP\u7a97\u53e3\u5927\u5c0f\uff0c\u5bf9\u4e8eUDP\u65b9\u5f0f\uff0c\u6b64\u8bbe\u7f6e\u4e3a\u63a5\u53d7UDP\u6570\u636e\u5305\u7684\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u9650\u5236\u53ef\u4ee5\u63a5\u53d7\u6570\u636e\u5305\u7684\u6700\u5927\u503c.\n--logfile    \u53c2\u6570\u53ef\u4ee5\u5c06\u8f93\u51fa\u7684\u6d4b\u8bd5\u7ed3\u679c\u50a8\u5b58\u81f3\u6587\u4ef6\u4e2d.\n-J  \u6765\u8f93\u51faJSON\u683c\u5f0f\u6d4b\u8bd5\u7ed3\u679c.\n-R  \u53cd\u5411\u4f20\u8f93,\u7f3a\u7701iperf3\u4f7f\u7528\u4e0a\u4f20\u6a21\u5f0f\uff1aClient\u8d1f\u8d23\u53d1\u9001\u6570\u636e\uff0cServer\u8d1f\u8d23\u63a5\u6536\uff1b\u5982\u679c\u9700\u8981\u6d4b\u8bd5\u4e0b\u8f7d\u901f\u5ea6\uff0c\u5219\u5728Client\u4fa7\u4f7f\u7528-R\u53c2\u6570\u5373\u53ef.\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u6d4b\u8bd5\u6807\u51c6",children:"\u6d4b\u8bd5\u6807\u51c6"}),"\n",(0,d.jsxs)(n.p,{children:["\u63a5\u6536\u5e26\u5bbd\uff1a",(0,d.jsx)(n.strong,{children:"870Mbits/sec"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u53d1\u9001\u5e26\u5bbd\uff1a",(0,d.jsx)(n.strong,{children:"940Mbits/sec"})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var d=t(96540);const r={},i=d.createContext(r);function s(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);