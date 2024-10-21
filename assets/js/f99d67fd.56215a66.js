"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8520],{41016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=t(74848),o=t(28453);const i={sidebar_position:1},r="5.1.1 \u73af\u5883\u51c6\u5907",d={id:"Robot_development/quick_start/preparation",title:"5.1.1 \u73af\u5883\u51c6\u5907",description:"TogetheROS.Bot\u652f\u6301\u5728RDK\u548cX86\u5e73\u53f0\u7684Ubuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u4e0a\u5b89\u88c5\u3002\u4f7f\u7528Ubuntu\u7cfb\u7edf\u901a\u8fc7DEB\u5305\u5b89\u88c5\u7684\u65b9\u5f0f\u7b80\u5355\u5feb\u6377\uff0c\u5efa\u8bae\u521d\u671f\u4f53\u9a8c\u7684\u7528\u6237\u5c3d\u91cf\u91c7\u7528\u8be5\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u3002",source:"@site/docs/05_Robot_development/01_quick_start/preparation.md",sourceDirName:"05_Robot_development/01_quick_start",slug:"/Robot_development/quick_start/preparation",permalink:"/rdk_doc/Robot_development/quick_start/preparation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/01_quick_start/preparation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TogetheROS.Bot \u7b80\u4ecb",permalink:"/rdk_doc/Robot_development/tros"},next:{title:"5.1.2 apt\u5b89\u88c5\u4e0e\u5347\u7ea7",permalink:"/rdk_doc/Robot_development/quick_start/install_tros"}},c={},a=[{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:2},{value:"\u7cfb\u7edf\u5b89\u88c5",id:"\u7cfb\u7edf\u5b89\u88c5",level:3},{value:"\u7cfb\u7edf\u914d\u7f6e",id:"\u7cfb\u7edf\u914d\u7f6e",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"511-\u73af\u5883\u51c6\u5907",children:"5.1.1 \u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsx)(n.p,{children:"TogetheROS.Bot\u652f\u6301\u5728RDK\u548cX86\u5e73\u53f0\u7684Ubuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u4e0a\u5b89\u88c5\u3002\u4f7f\u7528Ubuntu\u7cfb\u7edf\u901a\u8fc7DEB\u5305\u5b89\u88c5\u7684\u65b9\u5f0f\u7b80\u5355\u5feb\u6377\uff0c\u5efa\u8bae\u521d\u671f\u4f53\u9a8c\u7684\u7528\u6237\u5c3d\u91cf\u91c7\u7528\u8be5\u65b9\u5f0f\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u5206\u522b\u4ecb\u7ecdRDK\u548cX86\u5e73\u53f0\u73af\u5883\u51c6\u5907\u8be6\u60c5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,s.jsx)(n.h3,{id:"\u7cfb\u7edf\u5b89\u88c5",children:"\u7cfb\u7edf\u5b89\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5b89\u88c5tros.b\u4e4b\u524d\uff0c\u5efa\u8bae\u7528\u6237\u5c06RDK\u7cfb\u7edf\u955c\u50cf\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\uff0cUbuntu 20.04/Ubuntu 22.04\u955c\u50cf\u70e7\u5f55\u65b9\u6cd5\uff1a",(0,s.jsx)(n.a,{href:"/install_os/",children:"Ubuntu\u955c\u50cf\u70e7\u5f55\u65b9\u6cd5"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u955c\u50cf\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,s.jsx)(n.code,{children:"sudo apt update"}),"\u548c",(0,s.jsx)(n.code,{children:"sudo apt upgrade"}),"\u5b8c\u6210\u5347\u7ea7\u3002"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u5982\u679c\u60a8\u5b89\u88c5\u7684\u662f1.x\u7248\u672c\u7cfb\u7edf\uff0c\u9700\u8981\u5c06\u7cfb\u7edf\u5347\u7ea7\u52302.x\u7248\u672c\u3002"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["\u7cfb\u7edf\u7248\u672c\u53f7\u67e5\u770b\u65b9\u6cd5\u4ee5\u53ca\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u67e5\u770b",(0,s.jsx)(n.a,{href:"/rdk_doc/FAQ/applications_and_examples",children:"FAQs"}),"\u3002"]})}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u7cfb\u7edf\u914d\u7f6e",children:"\u7cfb\u7edf\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u955c\u50cf\u6210\u529f\u70e7\u5199\u540e\uff0c\u9700\u8981\u914d\u7f6eRDK IP\u5730\u5740\uff0c\u65b9\u4fbf\u65e5\u5e38\u4f7f\u7528\u3002\u767b\u5f55\u7528\u6237\u540d\uff1aroot \u5bc6\u7801\uff1aroot\u3002"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"})}),(0,s.jsxs)(n.p,{children:["\u4e3a\u65b9\u4fbf\u540e\u7eed\u987a\u5229\u5b89\u88c5\u548c\u4f7f\u7528tros.b\uff0c\u8bf7\u4f7f\u7528",(0,s.jsx)(n.strong,{children:"root"}),"\u8d26\u6237\u8fdb\u884c\u767b\u5f55\u3002"]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f53\u9a8c\u548c\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u7ecf\u5e38\u9700\u8981\u4f7f\u7528scp/ssh\u7b49\u547d\u4ee4\u901a\u8fc7IP\u5730\u5740\u8bbf\u95eeRDK\uff0c\u56e0\u6b64\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528\u52a8\u6001\u914d\u7f6e\uff0c\u53c2\u8003",(0,s.jsx)(n.a,{href:"/rdk_doc/System_configuration/network_blueteeth",children:"\u7f51\u7edc\u914d\u7f6e"})]}),"\n",(0,s.jsx)(n.p,{children:"\u5c1d\u8bd5ping\u767e\u5ea6\u670d\u52a1\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# ping www.baidu.com\nPING www.a.shifen.com (180.101.49.11) 56(84) bytes of data.\n64 bytes from 180.101.49.11 (180.101.49.11): icmp_seq=1 ttl=52 time=4.10 ms\n64 bytes from 180.101.49.11 (180.101.49.11): icmp_seq=2 ttl=52 time=4.34 ms\n64 bytes from 180.101.49.11 (180.101.49.11): icmp_seq=3 ttl=52 time=4.28 ms\n64 bytes from 180.101.49.11 (180.101.49.11): icmp_seq=4 ttl=52 time=4.21 ms\n64 bytes from 180.101.49.11 (180.101.49.11): icmp_seq=5 ttl=52 time=4.19 ms\n64 bytes from 180.101.49.11 (180.101.49.11): icmp_seq=6 ttl=52 time=4.98 ms\n^C\n--- www.a.shifen.com ping statistics ---\n6 packets transmitted, 6 received, 0% packet loss, time 5008ms\nrtt min/avg/max/mdev = 4.100/4.348/4.978/0.291 ms\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"ping\u547d\u4ee4\u6b63\u5e38\u8fd4\u56de\u8bf4\u660e\u4e92\u8054\u7f51\u8bbf\u95ee\u4ee5\u53caDNS\u914d\u7f6e\u5747\u6b63\u786e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5347\u7ea7\u7cfb\u7edf\u955c\u50cf\u4ee5\u53ca\u6e90\u4fe1\u606f",(0,s.jsx)(n.code,{children:"sudo apt update"})," ",(0,s.jsx)(n.code,{children:"sudo apt upgrade"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6d4b\u8bd5ssh\uff0c",(0,s.jsx)(n.code,{children:"ssh root@RDK IP\u5730\u5740"})," \u8fd9\u91ccRDK IP\u5730\u5740\u4e3a10.64.61.228\uff0c\u56e0\u6b64\u8f93\u5165",(0,s.jsx)(n.code,{children:"ssh root@10.64.61.228"}),"\uff0c\u7b2c\u4e00\u6b21ssh\u767b\u9646\u4f1a\u6709\u5982\u4e0b\u63d0\u793a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:" ssh root@10.64.61.241\nThe authenticity of host '10.64.61.241 (10.64.61.241)' can't be established.\nECDSA key fingerprint is SHA256:5NQuzIkfNYZftPkxrzCugbQs5Gy5CEC5U3Nhtu+sJs8.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8f93\u5165",(0,s.jsx)(n.code,{children:"yes"}),"\u56de\u8f66\uff0c\u8f93\u5165\u5bc6\u7801\uff1aroot\uff0c\u5373\u53ef\u6b63\u5e38\u8bbf\u95eeRDK"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotnetcli",children:"ssh root@10.64.61.241\nThe authenticity of host '10.64.61.241 (10.64.61.241)' can't be established.\nECDSA key fingerprint is SHA256:5NQuzIkfNYZftPkxrzCugbQs5Gy5CEC5U3Nhtu+sJs8.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '10.64.61.241' (ECDSA) to the list of known hosts.\nroot@10.64.61.241's password:\nPermission denied, please try again.\nroot@10.64.61.241's password:\nWelcome to Ubuntu 20.04.4 LTS (GNU/Linux 4.14.87 aarch64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\nLast login: Sat Apr  2 05:57:05 2022 from 10.64.37.219\nroot@ubuntu:~#\n"})}),"\n",(0,s.jsx)(n.h2,{id:"x86\u5e73\u53f0",children:"X86\u5e73\u53f0"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528X86\u5e73\u53f0\u7269\u7406\u673a\u5b89\u88c5Ubuntu 20.04 64\u4f4d\u7cfb\u7edf\uff0c\u5e76\u914d\u7f6e\u597d\u7f51\u7edc\u73af\u5883\u3002\u4e5f\u53ef\u4f7f\u7528\u865a\u62df\u673a\u5b89\u88c5\u6216docker\uff0c\u4f46\u662f\u8fd0\u884c\u6548\u7387\u53ef\u80fd\u4f1a\u8f83\u4f4e\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);