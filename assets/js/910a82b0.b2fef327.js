"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6160],{72791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),s=t(28453);const i={sidebar_position:5},c="2.5 \u5f00\u673a\u81ea\u542f\u52a8\u914d\u7f6e",o={id:"System_configuration/self_start",title:"2.5 \u5f00\u673a\u81ea\u542f\u52a8\u914d\u7f6e",description:"Video//www.bilibili.com/video/BV1rm4y1E73q/?p=15",source:"@site/docs/02_System_configuration/05.self_start.md",sourceDirName:"02_System_configuration",slug:"/System_configuration/self_start",permalink:"/rdk_doc/System_configuration/self_start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_System_configuration/05.self_start.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"2.4 Thermal\u548cCPU\u9891\u7387\u7ba1\u7406",permalink:"/rdk_doc/System_configuration/frequency_management"},next:{title:"3 \u57fa\u7840\u5e94\u7528\u5f00\u53d1",permalink:"/rdk_doc/Basic_Application"}},a={},d=[{value:"\u8bbe\u7f6e\u81ea\u542f\u52a8Service",id:"\u8bbe\u7f6e\u81ea\u542f\u52a8service",level:2},{value:"\u6dfb\u52a0\u5230rc.local\u670d\u52a1",id:"\u6dfb\u52a0\u5230rclocal\u670d\u52a1",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"25-\u5f00\u673a\u81ea\u542f\u52a8\u914d\u7f6e",children:"2.5 \u5f00\u673a\u81ea\u542f\u52a8\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["Video: ",(0,r.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=15",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=15"})]}),"\n",(0,r.jsx)(n.p,{children:"Ubuntu\u7cfb\u7edf\u6dfb\u52a0\u81ea\u542f\u52a8\u7a0b\u5e8f\u7684\u65b9\u5f0f\u6709\u591a\u79cd\u65b9\u6cd5\uff0c\u672c\u7ae0\u8282\u63d0\u4f9b\u4e24\u79cd\u65b9\u6cd5\u4f5c\u4e3a\u53c2\u8003\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8bbe\u7f6e\u81ea\u542f\u52a8service",children:"\u8bbe\u7f6e\u81ea\u542f\u52a8Service"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u542f\u52a8\u811a\u672c"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u4efb\u4f55\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5728",(0,r.jsx)(n.code,{children:"/etc/init.d"}),"\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u542f\u52a8\u811a\u672c\uff0c\u5047\u8bbe\u547d\u540d\u4e3a",(0,r.jsx)(n.code,{children:"your_script_name"}),"\uff0c\u4ee5\u4e0b\u662f\u793a\u4f8b\u811a\u672c\u7684\u53c2\u8003\u5185\u5bb9\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\n### BEGIN INIT INFO\n# Provides:          your_service_name\n# Required-Start:    $all\n# Required-Stop:     \n# Default-Start:     2 3 4 5\n# Default-Stop:      0 1 6\n# Short-Description: Start your_service_name at boot time\n# Description:       Enable service provided by your_service_name\n### END INIT INFO\n\n/path/to/your/program &\n\nexit 0\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8bbe\u7f6e\u542f\u52a8\u811a\u672c\u5177\u6709\u53ef\u6267\u884c\u6743\u9650"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo chmod +x /etc/init.d/your_script_name\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528update-rc.d\u547d\u4ee4\u5c06\u811a\u672c\u6dfb\u52a0\u5230\u7cfb\u7edf\u7684\u542f\u52a8\u9879\u4e2d"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo update-rc.d your_script_name defaults\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528systemctl\u547d\u4ee4\u542f\u7528\u81ea\u542f\u52a8"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo systemctl enable your_script_name\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u91cd\u542f\u5f00\u53d1\u677f\u9a8c\u8bc1\u81ea\u542f\u52a8\u670d\u52a1\u7a0b\u5e8f\u662f\u5426\u8fd0\u884c\u6b63\u5e38"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"root@ubuntu:~# systemctl status your_script_name.service \n\u25cf your_script_name.service - LSB: Start your_service_name at boot time\n    Loaded: loaded (/etc/init.d/your_script_name; generated)\n    Active: active (exited) since Wed 2023-04-19 15:01:12 CST; 57s ago\n    Docs: man:systemd-sysv-generator(8)\n    Process: 2768 ExecStart=/etc/init.d/your_script_name start (code=exited, status=0/SUCCESS)\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6dfb\u52a0\u5230rclocal\u670d\u52a1",children:"\u6dfb\u52a0\u5230rc.local\u670d\u52a1"}),"\n",(0,r.jsx)(n.p,{children:"rc.local\u662f\u4e00\u4e2a\u7cfb\u7edf\u670d\u52a1\uff0c\u7528\u4e8e\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u81ea\u52a8\u6267\u884c\u4e00\u4e9b\u811a\u672c\u6216\u547d\u4ee4\u3002\u8fd9\u4e2a\u670d\u52a1\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u4f1a\u88ab\u81ea\u52a8\u8c03\u7528\uff0c\u5e76\u5728\u7cfb\u7edf\u542f\u52a8\u5b8c\u6210\u540e\u6267\u884c\u4e00\u4e9b\u7528\u6237\u6307\u5b9a\u7684\u811a\u672c\u6216\u547d\u4ee4\uff0c\u4ee5\u4fbf\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u6216\u64cd\u4f5c\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u65e9\u671f\u7684Linux\u53d1\u884c\u7248\u4e2d\uff0crc.local\u662f\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b\u4e2d\u9ed8\u8ba4\u8fd0\u884c\u7684\u6700\u540e\u4e00\u4e2a\u670d\u52a1\u3002\u968f\u7740systemd\u7684\u666e\u53ca\uff0crc.local\u88ab\u89c6\u4e3a\u9057\u7559\u7684\u7cfb\u7edf\u670d\u52a1\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u5728",(0,r.jsx)(n.code,{children:"sudo vim /etc/rc.local"}),"\u6587\u4ef6\u672b\u5c3e\u6dfb\u52a0\u542f\u52a8\u547d\u4ee4\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash -e\n#\n# rc.local\n#re\n# This script is executed at the end of each multiuser runlevel.\n# Make sure that the script will "exit 0" on success or any other\n# value on error.\n#\n# In order to enable or disable this script just change the execution\n# bits.\n#\n# By default this script does nothing.\n\n# Insert what you need\n\nexit 0\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);