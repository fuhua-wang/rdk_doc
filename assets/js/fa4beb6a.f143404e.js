"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3896],{26421:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var s=n(74848),a=n(28453);const c={sidebar_position:2},t="3.1.2 USB\u6444\u50cf\u5934\u4f7f\u7528",d={id:"Basic_Application/Image/usb_camera",title:"3.1.2 USB\u6444\u50cf\u5934\u4f7f\u7528",description:"Video//www.bilibili.com/video/BV1rm4y1E73q/?p=18",source:"@site/docs/03_Basic_Application/01_Image/usb_camera.md",sourceDirName:"03_Basic_Application/01_Image",slug:"/Basic_Application/Image/usb_camera",permalink:"/rdk_doc/Basic_Application/Image/usb_camera",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/01_Image/usb_camera.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3.1.1 MIPI\u6444\u50cf\u5934\u4f7f\u7528",permalink:"/rdk_doc/Basic_Application/Image/mipi_camera"},next:{title:"3.2.1 RDK X3\u7cfb\u5217\u97f3\u9891\u677f\u4f7f\u7528\u6307\u5357",permalink:"/rdk_doc/Basic_Application/audio/audio_board_x3"}},o={},r=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u8fd0\u884c\u65b9\u5f0f",id:"\u8fd0\u884c\u65b9\u5f0f",level:2},{value:"\u9884\u671f\u6548\u679c",id:"\u9884\u671f\u6548\u679c",level:2}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"312-usb\u6444\u50cf\u5934\u4f7f\u7528",children:"3.1.2 USB\u6444\u50cf\u5934\u4f7f\u7528"}),"\n",(0,s.jsxs)(i.p,{children:["Video: ",(0,s.jsx)(i.a,{href:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=18",children:"https://www.bilibili.com/video/BV1rm4y1E73q/?p=18"})]}),"\n",(0,s.jsxs)(i.p,{children:["\u5f00\u53d1\u677f\u4e0a\u5b89\u88c5\u4e86 ",(0,s.jsx)(i.code,{children:"usb_camera_fcos.py"})," \u7a0b\u5e8f\u7528\u4e8e\u6d4b\u8bd5USB\u6444\u50cf\u5934\u7684\u6570\u636e\u901a\u8def\uff0c\u8be5\u793a\u4f8b\u4f1a\u5b9e\u65f6\u91c7\u96c6USB\u6444\u50cf\u5934\u7684\u56fe\u50cf\u6570\u636e\uff0c\u7136\u540e\u8fd0\u884c\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\uff0c\u6700\u540e\u628a\u56fe\u50cf\u6570\u636e\u548c\u68c0\u6d4b\u7ed3\u679c\u878d\u5408\u540e\u901a\u8fc7HDMI\u63a5\u53e3\u8f93\u51fa\u3002"]}),"\n",(0,s.jsx)(i.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["USB \u6444\u50cf\u5934\u63a5\u5165\u5230\u5f00\u53d1\u677f\u4e0a\uff0c\u786e\u8ba4\u751f\u6210 ",(0,s.jsx)(i.code,{children:"/dev/videoX"})," \u8bbe\u5907\u8282\u70b9\uff0c",(0,s.jsx)(i.code,{children:"X"})," \u4ee3\u8868\u6570\u5b57\uff0c\u4f8b\u5982 ",(0,s.jsx)(i.code,{children:"/dev/video0"})]}),"\n",(0,s.jsx)(i.li,{children:"\u901a\u8fc7 HDMI \u7ebf\u7f06\u8fde\u63a5\u5f00\u53d1\u677f\u548c\u663e\u793a\u5668"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u8fd0\u884c\u65b9\u5f0f",children:"\u8fd0\u884c\u65b9\u5f0f"}),"\n",(0,s.jsx)(i.p,{children:"\u6309\u7167\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u7a0b\u5e8f"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-shell",children:"sunrise@ubuntu:~$ cd /app/pydev_demo/02_usb_camera_sample/\nsunrise@ubuntu:/app/pydev_demo/02_usb_camera_sample$ sudo python3 ./usb_camera_fcos.py\n"})}),"\n",(0,s.jsx)(i.h2,{id:"\u9884\u671f\u6548\u679c",children:"\u9884\u671f\u6548\u679c"}),"\n",(0,s.jsxs)(i.p,{children:["\u7a0b\u5e8f\u6267\u884c\u540e\uff0c\u663e\u793a\u5668\u4f1a\u5b9e\u65f6\u663e\u793a\u6444\u50cf\u5934\u753b\u9762\u53ca\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\u7684\u7ed3\u679c(\u76ee\u6807\u7c7b\u578b\u3001\u7f6e\u4fe1\u5ea6)\uff0c\u5982\u4e0b\u6240\u793a\uff1a\n",(0,s.jsx)(i.img,{alt:"image-20220612110739490",src:n(39678).A+"",width:"960",height:"572"})]}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:["\u8be6\u7ec6\u4ee3\u7801\u5b9e\u73b0\u8bf4\u660e\u8bf7\u67e5\u9605",(0,s.jsx)(i.a,{href:"/rdk_doc/Algorithm_Application/pydev_dnn_demo/usb_camera",children:"\u57fa\u4e8eUSB\u6444\u50cf\u5934\u63a8\u7406"}),"\u7ae0\u8282\u3002"]})})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},39678:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-20220612110739490-766f1d688b4d3fe80d31b0db8a8e8df5.png"},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>d});var s=n(96540);const a={},c=s.createContext(a);function t(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);