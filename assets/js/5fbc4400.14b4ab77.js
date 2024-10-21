"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1859],{86913:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var d=r(74848),t=r(28453);const a={sidebar_position:4},o="\u6444\u50cf\u5934\u4f7f\u7528",c={id:"Advanced_development/hardware_development/rdk_ultra/camera",title:"\u6444\u50cf\u5934\u4f7f\u7528",description:"RDK Ultra\u5f00\u53d1\u5957\u4ef6\u63d0\u4f9bCAM0\u3001CAM2\u4e24\u8def15pin MIPI CSI\u63a5\u53e3\uff0c\u53ef\u4ee5\u652f\u6301\u5957\u4ef6\u81ea\u5e26\u7684imx219\u6444\u50cf\u5934\u63a5\u5165\u3002\u6444\u50cf\u5934\u6392\u7ebf\u63a5\u5165\u65f6\uff0c\u9700\u4fdd\u6301\u84dd\u9762\u671d\u4e0a\u3002\u6b64\u5916\u793a\u4f8b\u7a0b\u5e8f\u4e2d\u5df2\u5b9e\u73b0\u6444\u50cf\u5934\u81ea\u52a8\u63a2\u6d4b\uff0c\u56e0\u6b64\u7528\u6237\u65e0\u9700\u5173\u5fc3CAM\u63a5\u53e3\u8ddf\u6444\u50cf\u5934\u7684\u5bf9\u5e94\u5173\u7cfb\u3002",source:"@site/docs/07_Advanced_development/01_hardware_development/rdk_ultra/camera.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_ultra",slug:"/Advanced_development/hardware_development/rdk_ultra/camera",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_ultra/camera",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/01_hardware_development/rdk_ultra/camera.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u70e7\u5f55",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_ultra/system"},next:{title:"\u786c\u4ef6\u8d44\u6599",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x5/hardware"}},s={},i=[];function l(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u6444\u50cf\u5934\u4f7f\u7528",children:"\u6444\u50cf\u5934\u4f7f\u7528"}),"\n",(0,d.jsxs)(n.p,{children:["RDK Ultra\u5f00\u53d1\u5957\u4ef6\u63d0\u4f9b",(0,d.jsx)(n.code,{children:"CAM0"}),"\u3001",(0,d.jsx)(n.code,{children:"CAM2"}),"\u4e24\u8def15pin MIPI CSI\u63a5\u53e3\uff0c\u53ef\u4ee5\u652f\u6301\u5957\u4ef6\u81ea\u5e26\u7684imx219\u6444\u50cf\u5934\u63a5\u5165\u3002\u6444\u50cf\u5934\u6392\u7ebf\u63a5\u5165\u65f6\uff0c\u9700\u4fdd\u6301\u84dd\u9762\u671d\u4e0a\u3002\u6b64\u5916\u793a\u4f8b\u7a0b\u5e8f\u4e2d\u5df2\u5b9e\u73b0\u6444\u50cf\u5934\u81ea\u52a8\u63a2\u6d4b\uff0c\u56e0\u6b64\u7528\u6237\u65e0\u9700\u5173\u5fc3CAM\u63a5\u53e3\u8ddf\u6444\u50cf\u5934\u7684\u5bf9\u5e94\u5173\u7cfb\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f00\u53d1\u677f\u4e0a\u5b89\u88c5\u4e86",(0,d.jsx)(n.code,{children:"mipi_camera.py"}),"\u7a0b\u5e8f\u7528\u4e8e\u6d4b\u8bd5MIPI\u6444\u50cf\u5934\u7684\u6570\u636e\u901a\u8def\uff0c\u8be5\u793a\u4f8b\u4f1a\u5b9e\u65f6\u91c7\u96c6MIPI\u6444\u50cf\u5934\u7684\u56fe\u50cf\u6570\u636e\uff0c\u7136\u540e\u8fd0\u884c\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\uff0c\u6700\u540e\u628a\u56fe\u50cf\u6570\u636e\u548c\u68c0\u6d4b\u7ed3\u679c\u878d\u5408\u540e\u901a\u8fc7HDMI\u63a5\u53e3\u8f93\u51fa\u3002"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u8fd0\u884c\u65b9\u5f0f\uff1a\u6309\u7167\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u7a0b\u5e8f"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"sunrise@ubuntu:~$ cd /app/pydev_demo/03_mipi_camera_sample/\nsunrise@ubuntu:/app/pydev_demo/03_mipi_camera_sample$ sudo python3 ./mipi_camera.py \n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u9884\u671f\u6548\u679c\uff1a\u7a0b\u5e8f\u6267\u884c\u540e\uff0c\u663e\u793a\u5668\u4f1a\u5b9e\u65f6\u663e\u793a\u6444\u50cf\u5934\u753b\u9762\u53ca\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\u7684\u7ed3\u679c(\u76ee\u6807\u7c7b\u578b\u3001\u7f6e\u4fe1\u5ea6)\u3002"}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var d=r(96540);const t={},a=d.createContext(t);function o(e){const n=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);