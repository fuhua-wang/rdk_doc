"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9767],{24519:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>t,contentTitle:()=>l,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=n(74848),r=n(28453);const s={sidebar_position:2},l="\u63a5\u53e3\u8bf4\u660e",c={id:"Advanced_development/hardware_development/rdk_x3_module/interface",title:"\u63a5\u53e3\u8bf4\u660e",description:"\u672c\u7ae0\u8282\u4ecb\u7ecdRDK X3 Module\u5b98\u65b9\u8f7d\u677f\u7684\u63a5\u53e3\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u8f7d\u677f\u63d0\u4f9b\u4e86\u4ee5\u592a\u7f51\u53e3\u3001USB\u3001HDMI\u3001MIPI CSI\u3001MIPI DSI\u300140PIN\u7b49\u591a\u79cd\u5916\u56f4\u63a5\u53e3\uff0c\u65b9\u4fbf\u7528\u6237\u5bf9RDK X3 Module\u8fdb\u884c\u529f\u80fd\u9a8c\u8bc1\u3001\u5f00\u53d1\u6d4b\u8bd5\u7b49\u5de5\u4f5c\u3002",source:"@site/docs/07_Advanced_development/01_hardware_development/rdk_x3_module/interface.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x3_module",slug:"/Advanced_development/hardware_development/rdk_x3_module/interface",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x3_module/interface",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/01_hardware_development/rdk_x3_module/interface.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u786c\u4ef6\u8d44\u6599",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x3_module/hardware"},next:{title:"\u7cfb\u7edf\u70e7\u5f55",permalink:"/rdk_doc/Advanced_development/hardware_development/rdk_x3_module/system"}},t={},h=[{value:"\u6838\u5fc3\u6a21\u7ec4\u63a5\u53e3",id:"\u6838\u5fc3\u6a21\u7ec4\u63a5\u53e3",level:2},{value:"\u7535\u6e90\u63a5\u53e3",id:"\u7535\u6e90\u63a5\u53e3",level:2},{value:"HDMI\u63a5\u53e3",id:"hdmi\u63a5\u53e3",level:2},{value:"MIPI CSI\u63a5\u53e3",id:"mipi-csi\u63a5\u53e3",level:2},{value:"MIPI DSI\u63a5\u53e3",id:"mipi-dsi\u63a5\u53e3",level:2},{value:"USB\u63a5\u53e3",id:"usb\u63a5\u53e3",level:2},{value:"Micro SD\u5361\u63a5\u53e3",id:"micro-sd\u5361\u63a5\u53e3",level:2},{value:"\u8c03\u8bd5\u63a5\u53e3",id:"debug_uart",level:2},{value:"\u529f\u80fd\u63a7\u5236\u63a5\u53e3",id:"\u529f\u80fd\u63a7\u5236\u63a5\u53e3",level:2},{value:"IO\u7535\u5e73\u5207\u6362\u63a5\u53e3",id:"io\u7535\u5e73\u5207\u6362\u63a5\u53e3",level:2},{value:"40pin header\u63a5\u53e3",id:"40pin-header\u63a5\u53e3",level:2}];function x(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.h1,{id:"\u63a5\u53e3\u8bf4\u660e",children:"\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,i.jsx)(d.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecdRDK X3 Module\u5b98\u65b9\u8f7d\u677f\u7684\u63a5\u53e3\u529f\u80fd\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u8f7d\u677f\u63d0\u4f9b\u4e86\u4ee5\u592a\u7f51\u53e3\u3001USB\u3001HDMI\u3001MIPI CSI\u3001MIPI DSI\u300140PIN\u7b49\u591a\u79cd\u5916\u56f4\u63a5\u53e3\uff0c\u65b9\u4fbf\u7528\u6237\u5bf9RDK X3 Module\u8fdb\u884c\u529f\u80fd\u9a8c\u8bc1\u3001\u5f00\u53d1\u6d4b\u8bd5\u7b49\u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63a5\u53e3\u5e03\u5c40\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{alt:"image-carrier-board1",src:n(45259).A+"",width:"656",height:"522"})}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u5e8f\u53f7"}),(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u529f\u80fd"}),(0,i.jsx)(d.th,{children:"\u5e8f\u53f7"}),(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u529f\u80fd"}),(0,i.jsx)(d.th,{children:"\u5e8f\u53f7"}),(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u529f\u80fd"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"\u7535\u6e90\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"7"}),(0,i.jsx)(d.td,{children:"Micro USB2.0 Device\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"13"}),(0,i.jsx)(d.td,{children:"\u529f\u80fd\u63a7\u5236IO header"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"HDMI\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"8"}),(0,i.jsx)(d.td,{children:"\u5de5\u4f5c\u6307\u793a\u706f"}),(0,i.jsx)(d.td,{children:"14"}),(0,i.jsx)(d.td,{children:"IO\u7535\u5e73\u9009\u62e9header"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"USB3.0 Host\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"9"}),(0,i.jsx)(d.td,{children:"40pin header"}),(0,i.jsx)(d.td,{children:"15"}),(0,i.jsx)(d.td,{children:"debug\u53e3\uff0cUSB\u8f6c\u4e32\u53e3"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"4"}),(0,i.jsx)(d.td,{children:"RTC\u7535\u6c60\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"MIPI DSI\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"16"}),(0,i.jsx)(d.td,{children:"CAM2\u63a5\u53e3\uff0c2lane"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"\u98ce\u6247\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"CAM1\u63a5\u53e3\uff0c4lane"}),(0,i.jsx)(d.td,{children:"17"}),(0,i.jsx)(d.td,{children:"CAM0\u63a5\u53e3\uff0c2lane"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"6"}),(0,i.jsx)(d.td,{children:"\u5343\u5146\u4ee5\u592a\u7f51\u53e3"}),(0,i.jsx)(d.td,{children:"12"}),(0,i.jsx)(d.td,{children:"\u6838\u5fc3\u6a21\u7ec4\u63a5\u53e3"}),(0,i.jsx)(d.td,{children:"18"}),(0,i.jsx)(d.td,{children:"Micro SD\u5361\u63a5\u53e3\uff08\u80cc\u9762\uff09"})]})]})]}),"\n",(0,i.jsx)(d.h2,{id:"\u6838\u5fc3\u6a21\u7ec4\u63a5\u53e3",children:"\u6838\u5fc3\u6a21\u7ec4\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u7ec4200pin\u677f\u677f\u8fde\u63a5\u5668\uff0c\u7528\u4e8e\u6838\u5fc3\u6a21\u7ec4\u7684\u5b89\u88c5\u3002\u5b89\u88c5\u65f6\u9700\u8981\u9996\u5148\u786e\u8ba4\u6b63\u786e\u7684\u65b9\u5411\u548c\u5b9a\u4f4d\uff0c\u907f\u514d\u5bf9\u6838\u5fc3\u6a21\u7ec4\u3001\u8f7d\u677f\u7684\u8fde\u63a5\u5668\u9020\u6210\u635f\u4f24\u3002"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{alt:"image-x3-md-setup",src:n(96076).A+"",width:"642",height:"530"})}),"\n",(0,i.jsx)(d.p,{children:"\u6a21\u7ec4\u5b89\u88c5\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(d.ol,{children:["\n",(0,i.jsx)(d.li,{children:"\u5bf9\u7167\u6838\u5fc3\u6a21\u7ec4\u4e0a\u4e3b\u82af\u7247\u3001DDR\u3001Wi-Fi\u6a21\u7ec4\u4e0e\u8f7d\u677f\u4e09\u4e2a\u4e1d\u5370\u7684\u5de6\u53f3\u987a\u5e8f\uff0c\u786e\u8ba4\u5b89\u88c5\u65b9\u5411\u6b63\u786e\u3002"}),"\n",(0,i.jsx)(d.li,{children:"\u5c06\u6838\u5fc3\u6a21\u7ec4\u653e\u4e8e\u8f7d\u677f\u6b63\u4e0a\u65b9\uff0c\u5e76\u786e\u8ba4\u5468\u56f4\u56db\u4e2a\u5b9a\u4f4d\u5b54\u4f4d\u7f6e\u5bf9\u9f50\u3002"}),"\n",(0,i.jsx)(d.li,{children:"\u4ece\u6838\u5fc3\u6a21\u7ec4\u4e2d\u5fc3\u5411\u4e0b\u6309\u538b\uff0c\u5f53\u6a21\u7ec4\u53d1\u51fa\u5494\u54d2\u7684\u58f0\u54cd\u540e\uff0c\u8868\u793a\u5b89\u88c5\u5230\u4f4d\u3002"}),"\n"]}),"\n",(0,i.jsx)(d.h2,{id:"\u7535\u6e90\u63a5\u53e3",children:"\u7535\u6e90\u63a5\u53e3"}),"\n",(0,i.jsxs)(d.p,{children:["RDK X3 Module\u8f7d\u677f\u901a\u8fc7DC\u63a5\u53e3\u4f9b\u7535\uff0c\u63a8\u8350\u4f7f\u7528\u8ba4\u8bc1\u914d\u4ef6\u6e05\u5355\u4e2d\u63a8\u8350\u7684",(0,i.jsx)(d.strong,{children:"12V/2A"}),"\u9002\u914d\u5668\u3002\u63a5\u5165\u7535\u6e90\u540e\uff0c\u5982\u7ea2\u8272\u7535\u6e90\u6307\u793a\u706f\u6b63\u5e38\u70b9\u4eae\uff08\u63a5\u53e38\uff09\uff0c\u8bf4\u660e\u8bbe\u5907\u4f9b\u7535\u6b63\u5e38\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"hdmi\u63a5\u53e3",children:"HDMI\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u8defHDMI\u663e\u793a\u63a5\u53e3\uff08\u63a5\u53e32\uff09\uff0c\u6700\u9ad8\u652f\u63011080P\u5206\u8fa8\u7387\u3002\u5f00\u53d1\u677f\u901a\u8fc7HDMI\u63a5\u53e3\u5728\u663e\u793a\u5668\u8f93\u51faUbuntu\u7cfb\u7edf\u684c\u9762(Ubuntu Server\u7248\u672c\u663e\u793alogo\u56fe\u6807)\u3002\u6b64\u5916\uff0cHDMI\u63a5\u53e3\u8fd8\u652f\u6301\u5b9e\u65f6\u663e\u793a\u6444\u50cf\u5934\u3001\u7f51\u7edc\u6d41\u753b\u9762\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u76ee\u524dHDMI\u63a5\u53e3\u652f\u6301\u7684\u663e\u793a\u5206\u8fa8\u7387\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsx)(d.li,{children:"1920x1080"}),"\n",(0,i.jsx)(d.li,{children:"1280x720"}),"\n",(0,i.jsx)(d.li,{children:"1024x600"}),"\n",(0,i.jsx)(d.li,{children:"800x480"}),"\n"]}),"\n",(0,i.jsx)(d.h2,{id:"mipi-csi\u63a5\u53e3",children:"MIPI CSI\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9bCAM 0/1/2\u4e09\u7ec4MIPI CSI\u63a5\u53e3\uff0c\u53ef\u4ee5\u6ee1\u8db33\u8defCamera\u6a21\u7ec4\u7684\u540c\u65f6\u63a5\u5165\uff0c\u6ee1\u8db3\u4e0d\u540c\u7528\u6237\u7684\u4f7f\u7528\u9700\u6c42\uff0c\u5177\u4f53\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(d.ol,{children:["\n",(0,i.jsx)(d.li,{children:"CAM 0/2\uff08\u63a5\u53e316/17\uff09\uff0c\u91c7\u752815pin FPC\u8fde\u63a5\u5668\uff0c\u53ef\u76f4\u63a5\u63a5\u5165\u6811\u8393\u6d3eOV5647\u3001IMX219\u3001IMX477\u7b49\u591a\u79cdCamera\u6a21\u7ec4\u3002"}),"\n",(0,i.jsx)(d.li,{children:"CAM 1\uff08\u63a5\u53e311\uff09\uff0c\u91c7\u752824pin FPC\u8fde\u63a5\u5668\uff0c\u652f\u6301F37\u3001GC4663\u3001IMX415\u7b49\u591a\u79cdCamera\u6a21\u7ec4\u3002"}),"\n"]}),"\n",(0,i.jsx)(d.p,{children:"\u6444\u50cf\u5934\u6a21\u7ec4\u7684\u57fa\u7840\u89c4\u683c\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u5e8f\u53f7"}),(0,i.jsx)(d.th,{children:"Sensor"}),(0,i.jsx)(d.th,{children:"\u5206\u8fa8\u7387"}),(0,i.jsx)(d.th,{children:"FOV"}),(0,i.jsx)(d.th,{children:"I2C \u8bbe\u5907\u5730\u5740"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"GC4663"}),(0,i.jsx)(d.td,{children:"400W"}),(0,i.jsx)(d.td,{children:"H:104 V:70 D:113"}),(0,i.jsx)(d.td,{children:"0x29"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"JXF37"}),(0,i.jsx)(d.td,{children:"200W"}),(0,i.jsx)(d.td,{children:"H:62  V:37 D:68"}),(0,i.jsx)(d.td,{children:"0x40"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"IMX219"}),(0,i.jsx)(d.td,{children:"800W"}),(0,i.jsx)(d.td,{children:"H:62  V:37 D:68"}),(0,i.jsx)(d.td,{children:"0x10"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"4"}),(0,i.jsx)(d.td,{children:"IMX477"}),(0,i.jsx)(d.td,{children:"1200W"}),(0,i.jsx)(d.td,{children:"H:62  V:37 D:68"}),(0,i.jsx)(d.td,{children:"0x1a"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"OV5647"}),(0,i.jsx)(d.td,{children:"500W"}),(0,i.jsx)(d.td,{children:"H:62  V:37 D:68"}),(0,i.jsx)(d.td,{children:"0x36"})]})]})]}),"\n",(0,i.jsxs)(d.p,{children:["\u4e0a\u8ff0Camera\u6a21\u7ec4\u7684\u8d2d\u4e70\u65b9\u5f0f\u53ef\u53c2\u8003",(0,i.jsx)(d.a,{href:"/rdk_doc/Advanced_development/hardware_development/rdk_x3_module/accessory",children:"\u8d2d\u4e70\u94fe\u63a5"}),"\u3002"]}),"\n",(0,i.jsx)(d.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,i.jsx)(d.p,{children:"\u91cd\u8981\u63d0\u793a\uff1a\u4e25\u7981\u5728\u5f00\u53d1\u677f\u672a\u65ad\u7535\u7684\u60c5\u51b5\u4e0b\u63d2\u62d4\u6444\u50cf\u5934\uff0c\u5426\u5219\u975e\u5e38\u5bb9\u6613\u70e7\u574f\u6444\u50cf\u5934\u6a21\u7ec4\u3002"})}),"\n",(0,i.jsx)(d.h2,{id:"mipi-dsi\u63a5\u53e3",children:"MIPI DSI\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u8defMIPI DSI\u63a5\u53e3\uff08\u63a5\u53e310\uff09\uff0c\u53ef\u4ee5\u7528\u4e8eLCD\u663e\u793a\u5c4f\u7b49\u63a5\u5165\u3002\u63a5\u53e3\u91c7\u752815pin FPC\u8fde\u63a5\u5668\uff0c\u53ef\u76f4\u63a5\u63a5\u5165\u6811\u8393\u6d3e\u591a\u6b3eLCD\u663e\u793a\u5c4f\u3002"}),"\n",(0,i.jsxs)(d.p,{children:["\u5bf9\u4e8eMIPI DSI\u63a5\u53e3\u7684\u8be6\u7ec6\u4f7f\u7528\u65b9\u6cd5\uff0c\u53ef\u53c2\u8003",(0,i.jsx)(d.a,{href:"/rdk_doc/Advanced_development/hardware_development/rdk_x3_module/display",children:"MIPI DSI\u663e\u793a\u5c4f\u4f7f\u7528"}),"\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"usb\u63a5\u53e3",children:"USB\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3\u6838\u5fc3\u6a21\u7ec4\u53ea\u652f\u6301\u4e00\u8defUSB3.0\u63a5\u53e3\uff0c\u56e0\u6b64\u8f7d\u677f\u901a\u8fc7\u5916\u56f4\u7535\u8def\u53caUSB HUB\u6269\u5c55\uff0c\u5b9e\u73b0\u4e864\u8defUSB3.0 Host\u63a5\u53e3\u548c1\u8defMicro USB2.0 Device\u63a5\u53e3\uff0c\u6ee1\u8db3\u7528\u6237\u5bf9USB\u63a5\u53e3\u7684\u591a\u6837\u9700\u6c42\uff0c\u63a5\u53e3\u63cf\u8ff0\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u7c7b\u578b"}),(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u5e8f\u53f7"}),(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u6570\u91cf"}),(0,i.jsx)(d.th,{children:"\u63a5\u53e3\u63cf\u8ff0"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"USB3.0 Type A Host"}),(0,i.jsx)(d.td,{children:"\u63a5\u53e33"}),(0,i.jsx)(d.td,{children:"4\u8def"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8eUSB\u5916\u8bbe\u63a5\u5165"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"Micro USB2.0 Device"}),(0,i.jsx)(d.td,{children:"\u63a5\u53e37"}),(0,i.jsx)(d.td,{children:"1\u8def"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8eadb\u8c03\u8bd5\u3001fastboot\u70e7\u5f55"})]})]})]}),"\n",(0,i.jsxs)(d.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,i.jsx)(d.p,{children:"USB\u4e3b\u4ece\u6a21\u5f0f\u5207\u6362\u5b8c\u5168\u7531\u786c\u4ef6\u7535\u8def\u5b9e\u73b0\uff0c\u7528\u6237\u53ea\u9700\u6309\u7167\u4e0a\u8868\u7684\u903b\u8f91\u8fde\u63a5\u8bbe\u5907\u5373\u53ef\u3002"}),(0,i.jsx)(d.p,{children:"\u5f00\u53d1\u677fUSB Host\u3001Device\u529f\u80fd\u4e92\u65a5\uff0cDevice\u63a5\u53e3\u63a5\u5165\u8bbe\u5907\u540e\uff0cHost\u63a5\u53e3\u4f1a\u81ea\u52a8\u5931\u6548\u3002"})]}),"\n",(0,i.jsx)(d.h2,{id:"micro-sd\u5361\u63a5\u53e3",children:"Micro SD\u5361\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u8defMicro SD\u5b58\u50a8\u5361\u63a5\u53e3\uff08\u63a5\u53e318\uff09\u3002\u63a8\u8350\u4f7f\u7528\u81f3\u5c118GB\u5bb9\u91cf\u7684\u5b58\u50a8\u5361\uff0c\u4ee5\u4fbf\u6ee1\u8db3Ubuntu\u64cd\u4f5c\u7cfb\u7edf\u53ca\u76f8\u5173\u529f\u80fd\u5305\u7684\u5b89\u88c5\u8981\u6c42\u3002"}),"\n",(0,i.jsx)(d.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,i.jsx)(d.p,{children:"\u5f00\u53d1\u677f\u4f7f\u7528\u4e2d\u7981\u6b62\u70ed\u63d2\u62d4TF\u5b58\u50a8\u5361\uff0c\u5426\u5219\u4f1a\u9020\u6210\u7cfb\u7edf\u8fd0\u884c\u5f02\u5e38\uff0c\u751a\u81f3\u9020\u6210\u5b58\u50a8\u5361\u6587\u4ef6\u7cfb\u7edf\u635f\u574f\u3002"})}),"\n",(0,i.jsx)(d.h2,{id:"debug_uart",children:"\u8c03\u8bd5\u63a5\u53e3"}),"\n",(0,i.jsxs)(d.p,{children:["RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u8def\u8c03\u8bd5\uff08\u63a5\u53e315\uff09\uff0c\u786c\u4ef6\u4e0a\u901a\u8fc7",(0,i.jsx)(d.code,{children:"CH340"}),"\u82af\u7247\u5c06\u6838\u5fc3\u6a21\u7ec4\u8c03\u8bd5\u4e32\u53e3\u8f6c\u6362\u4e3aUSB\u63a5\u53e3\uff0c\u7528\u6237\u53ef\u4f7f\u7528\u8be5\u63a5\u53e3\u8fdb\u884c\u5404\u79cd\u8c03\u8bd5\u5de5\u4f5c\u3002\u7535\u8111\u4e32\u53e3\u5de5\u5177\u7684\u53c2\u6570\u9700\u6309\u5982\u4e0b\u65b9\u5f0f\u914d\u7f6e\uff1a"]}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsx)(d.li,{children:"\u6ce2\u7279\u7387\uff08Baud rate\uff09\uff1a921600"}),"\n",(0,i.jsx)(d.li,{children:"\u6570\u636e\u4f4d\uff08Data bits\uff09\uff1a8"}),"\n",(0,i.jsx)(d.li,{children:"\u5947\u5076\u6821\u9a8c\uff08Parity\uff09\uff1aNone"}),"\n",(0,i.jsx)(d.li,{children:"\u505c\u6b62\u4f4d\uff08Stop bits\uff09\uff1a1"}),"\n",(0,i.jsx)(d.li,{children:"\u6d41\u63a7\uff08Flow Control\uff09\uff1a\u65e0"}),"\n"]}),"\n",(0,i.jsxs)(d.p,{children:["\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7b2c\u4e00\u6b21\u4f7f\u7528\u8be5\u63a5\u53e3\u65f6\u9700\u8981\u5728\u7535\u8111\u4e0a\u5b89\u88c5CH340\u9a71\u52a8\uff0c\u7528\u6237\u53ef\u641c\u7d22",(0,i.jsx)(d.code,{children:"CH340\u4e32\u53e3\u9a71\u52a8"}),"\u5173\u952e\u5b57\u8fdb\u884c\u4e0b\u8f7d\u3001\u5b89\u88c5\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u529f\u80fd\u63a7\u5236\u63a5\u53e3",children:"\u529f\u80fd\u63a7\u5236\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u7ec4\u63a7\u5236IO\u63a5\u53e3\uff08\u63a5\u53e313\uff09\uff0c\u7528\u6237\u4f7f\u7528\u8df3\u7ebf\u5e3d\u77ed\u63a5\u76f8\u5e94\u7ba1\u811a\uff0c\u53ef\u5b9e\u73b0\u5bf9\u6838\u5fc3\u6a21\u7ec4\u591a\u79cd\u529f\u80fd\u6a21\u5f0f\u7684\u63a7\u5236\uff0c\u7ba1\u811a\u529f\u80fd\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u7ba1\u811a\u53f7"}),(0,i.jsx)(d.th,{children:"\u7ba1\u811a\u540d\u79f0"}),(0,i.jsx)(d.th,{children:"\u529f\u80fd\u63cf\u8ff0"}),(0,i.jsx)(d.th,{children:"\u4f7f\u7528\u65b9\u5f0f"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"BOOT"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8e\u63a7\u5236fastboot\u70e7\u5f55\u6a21\u5f0f\u7684\u8fdb\u5165"}),(0,i.jsx)(d.td,{children:"\u8df3\u7ebf\u5e3d\u63a5\u5730\u540e\uff0c\u91cd\u65b0\u4e0a\u7535"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"GL_EN"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8e\u5173\u95ed\u6838\u5fc3\u677f\u8f93\u5165\u7535\u6e90"}),(0,i.jsx)(d.td,{children:"\u8df3\u7ebf\u5e3d\u63a5\u5730\u540e\uff0c\u6838\u5fc3\u677f\u65ad\u7535"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"R_PG"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8e\u6307\u793a\u6838\u5fc3\u677f\u5de5\u4f5c\u72b6\u6001"}),(0,i.jsx)(d.td,{children:"\u9ad8\u7535\u5e73\u4ee3\u8868\u6838\u5fc3\u677f\u5de5\u4f5c\u6b63\u5e38"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"4"}),(0,i.jsx)(d.td,{children:"W_EN"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8e\u5173\u95edWi-Fi\u529f\u80fd"}),(0,i.jsx)(d.td,{children:"\u8df3\u7ebf\u5e3d\u63a5\u5730\u540eWi-Fi\u5173\u95ed\uff0c\u91cd\u542f\u7cfb\u7edf\u6062\u590d"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"BT_EN"}),(0,i.jsx)(d.td,{children:"\u7528\u4e8e\u5173\u95ed\u84dd\u7259\u529f\u80fd"}),(0,i.jsx)(d.td,{children:"\u8df3\u7ebf\u5e3d\u63a5\u5730\u540e\u84dd\u7259\u5173\u95ed\uff0c\u91cd\u542f\u7cfb\u7edf\u6062\u590d"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"6"}),(0,i.jsx)(d.td,{children:"RXD2"}),(0,i.jsx)(d.td,{children:"\u4e32\u53e3UART2\u63a5\u6536\u4fe1\u53f7"}),(0,i.jsx)(d.td,{children:"\u4e32\u53e3UART2\u63a5\u6536\u4fe1\u53f7"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"7"}),(0,i.jsx)(d.td,{children:"TXD2"}),(0,i.jsx)(d.td,{children:"\u4e32\u53e3UART2\u53d1\u9001\u4fe1\u53f7"}),(0,i.jsx)(d.td,{children:"\u4e32\u53e3UART2\u63a5\u6536\u4fe1\u53f7"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"8"}),(0,i.jsx)(d.td,{children:"GND"}),(0,i.jsx)(d.td,{children:"GDN"}),(0,i.jsx)(d.td,{children:"GND"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u6b64\u5916\uff0c\u4e3a\u65b9\u4fbf\u7528\u6237\u67e5\u8be2\uff0c\u4e0a\u8ff0\u7ba1\u811a\u5b9a\u4e49\u5728\u8f7d\u677f\u4e1d\u5370\u4e5f\u6709\u4f53\u73b0\u3002"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{alt:"image-carrier-board-control-pin1",src:n(69153).A+"",width:"567",height:"367"})}),"\n",(0,i.jsx)(d.h2,{id:"io\u7535\u5e73\u5207\u6362\u63a5\u53e3",children:"IO\u7535\u5e73\u5207\u6362\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9bIO\u7535\u5e73\u5207\u6362\u529f\u80fd\uff0c\u7528\u4e8e\u63a7\u523640pin header\u7535\u5e73\u6a21\u5f0f\uff0c\u652f\u63011.8V\u30013.3V\u4e24\u79cd\u7535\u5e73\u3002\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u63a5\u53e3\u4fe1\u53f7\u4ece\u4e0a\u5f80\u4e0b\u5206\u522b\u4e3a3.3V\u3001VREF\u30011.8V\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{alt:"image-x3-md-vref",src:n(82010).A+"",width:"566",height:"370"})}),"\n",(0,i.jsxs)(d.p,{children:["\u9700\u8981\u8bf4\u660e\u7684\u662f\uff0c",(0,i.jsx)(d.strong,{children:"\u8be5\u63a5\u53e3\u4e0d\u80fd\u60ac\u7a7a\uff0c\u5426\u5219\u6838\u5fc3\u6a21\u7ec4\u4f1a\u56e0\u4f9b\u7535\u5f02\u5e38\u65e0\u6cd5\u5f00\u673a"}),"\u3002"]}),"\n",(0,i.jsxs)(d.admonition,{title:"\u5f53\u9700\u8981\u5207\u6362\u7535\u5e73\u65f6\uff0c\u8bf7\u4e25\u683c\u6309\u7167\u4e0b\u8ff0\u6b65\u9aa4\u8fdb\u884c\u3002",type:"caution",children:[(0,i.jsx)(d.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRDK X3 Module\u6838\u5fc3\u6a21\u7ec4\u56fa\u4ef6\u3001\u8f7d\u677f\u7535\u5e73\u914d\u7f6e\u4e3a3.3V\uff0c\u5982\u9700\u8981\u5207\u6362IO\u7535\u5e73\u65f6\uff0c\u9700\u8981\u6309\u5982\u4e0b\u6b65\u9aa4\u8fdb\u884c\uff1a"}),(0,i.jsxs)(d.ol,{children:["\n",(0,i.jsxs)(d.li,{children:["\u4e0b\u8f7d\u652f\u63011.8V\u7535\u5e73\u914d\u7f6e\u7684\u542f\u52a8\u56fa\u4ef6\uff0c",(0,i.jsx)(d.a,{href:"https://archive.d-robotics.cc/downloads/miniboot",children:"\u56fa\u4ef6\u4e0b\u8f7d\u5730\u5740"}),"\u3002"]}),"\n",(0,i.jsxs)(d.li,{children:["\u4f7f\u7528\u5b98\u65b9\u70e7\u5f55\u5de5\u5177",(0,i.jsx)(d.code,{children:"hbupdate"}),"\uff0c\u66f4\u65b0\u6838\u5fc3\u677f\u542f\u52a8\u56fa\u4ef6\uff0c\u5177\u4f53\u65b9\u6cd5\u8bf7\u53c2\u8003",(0,i.jsx)(d.a,{href:"../../../01_Quick_start/install_os.md",children:"\u955c\u50cf\u70e7\u5f55"}),"\u3002"]}),"\n",(0,i.jsxs)(d.li,{children:["\u8bbe\u5907\u65ad\u7535\uff0c\u4f7f\u7528\u8df3\u7ebf\u5e3d\u5c06",(0,i.jsx)(d.code,{children:"vref"}),"\u3001",(0,i.jsx)(d.code,{children:"1.8V"}),"\u4fe1\u53f7\u77ed\u63a5\u540e\u91cd\u65b0\u4e0a\u7535\u3002"]}),"\n"]})]}),"\n",(0,i.jsx)(d.h2,{id:"40pin-header\u63a5\u53e3",children:"40pin header\u63a5\u53e3"}),"\n",(0,i.jsx)(d.p,{children:"RDK X3 Module\u8f7d\u677f\u63d0\u4f9b\u4e00\u7ec440pin header\u63a5\u53e3\uff08\u63a5\u53e39\uff09\uff0c\u63a5\u53e3\u4fe1\u53f7\u7535\u5e73\u7531IO\u7535\u5e73\u5207\u6362header\u6307\u5b9a\uff08\u63a5\u53e314\uff09\uff0c\u652f\u63011.8V\u30013.3V\u4e24\u79cd\u6a21\u5f0f\u3002\u7ba1\u811a\u5b9a\u4e49\u517c\u5bb9\u6811\u8393\u6d3e\u7b49\u4ea7\u54c1\uff0c\u8be6\u7ec6\u7ba1\u811a\u5b9a\u4e49\u3001\u590d\u7528\u5173\u7cfb\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{alt:"image-40pin-header",src:n(28538).A+"",width:"2367",height:"765"})}),"\n",(0,i.jsx)(d.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,i.jsxs)(d.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRDK X3 Module\u6838\u5fc3\u6a21\u7ec4\u56fa\u4ef6\u3001\u8f7d\u677f\u7535\u5e73\u914d\u7f6e\u4e3a3.3V\uff0c\u5982\u9700\u8981\u5207\u6362IO\u7535\u5e73\u65f6\uff0c\u8bf7\u53c2\u8003",(0,i.jsx)(d.a,{href:"#io%E7%94%B5%E5%B9%B3%E5%88%87%E6%8D%A2%E6%8E%A5%E5%8F%A3",children:"IO\u7535\u5e73\u9009\u62e9header\u63a5\u53e3"}),"\u3002"]})})]})}function j(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28538:(e,d,n)=>{n.d(d,{A:()=>i});const i=n.p+"assets/images/image-40pin-header-1fe67af2c1bc5d45766d03b8fd16fcdf.png"},69153:(e,d,n)=>{n.d(d,{A:()=>i});const i=n.p+"assets/images/image-carrier-board-control-pin1-268b6ed5b36ec79630769a5f21057280.png"},45259:(e,d,n)=>{n.d(d,{A:()=>i});const i=n.p+"assets/images/image-carrier-board1-4d9b05894e6573a3a34cff41fb0574d8.png"},96076:(e,d,n)=>{n.d(d,{A:()=>i});const i=n.p+"assets/images/image-x3-md-setup-81f4f70540be00051cacbc69eaef6edf.png"},82010:(e,d,n)=>{n.d(d,{A:()=>i});const i=n.p+"assets/images/image-x3-md-vref-8566bcc3c1a861a79de578d7a1f4520b.png"},28453:(e,d,n)=>{n.d(d,{R:()=>l,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function l(e){const d=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:d},e.children)}}}]);