"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7463],{21979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>_,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(74848),s=t(28453),o=t(93859),d=t(19365);const i={sidebar_position:3},c="\u624b\u52bf\u8bc6\u522b",l={id:"Robot_development/boxs/function/hand_gesture_detection",title:"\u624b\u52bf\u8bc6\u522b",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/hand_gesture_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hand_gesture_detection",permalink:"/rdk_doc/Robot_development/boxs/function/hand_gesture_detection",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hand_gesture_detection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/boxs/function/hand_lmk_detection"},next:{title:"\u5355\u76ee3D\u5ba4\u5185\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/boxs/function/mono3d_indoor_detection"}},a={},h=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u624b\u52bf\u8bc6\u522b",children:"\u624b\u52bf\u8bc6\u522b"}),"\n","\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u793a\u4f8b\u8ba2\u9605\u5305\u542b\u4eba\u624b\u6846\u3001\u4eba\u624b\u5173\u952e\u70b9\u4fe1\u606f\u7684\u7b97\u6cd5msg\uff0c\u5229\u7528BPU\u8fdb\u884c\u63a8\u7406\uff0c\u53d1\u5e03\u5305\u542b\u624b\u52bf\u4fe1\u606f\u7684\u667a\u80fd\u7ed3\u679cmsg\u3002"}),"\n",(0,r.jsx)(n.p,{children:'\u7b97\u6cd5\u652f\u6301\u7684\u624b\u52bf\u8bc6\u522b\u7c7b\u522b\uff0c\u4ee5\u53ca\u624b\u52bf\u7c7b\u522b\u5728\u7b97\u6cd5msg\uff08Attribute\u6210\u5458\uff0ctype\u4e3a"gesture"\uff09\u4e2d\u5bf9\u5e94\u7684\u6570\u503c\u5982\u4e0b\uff1a'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u9759\u6001\u624b\u52bf"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u624b\u52bf"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(n.th,{children:"\u6570\u503c"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ThumbUp"}),(0,r.jsx)(n.td,{children:"\u7ad6\u8d77\u5927\u62c7\u6307"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Victory"}),(0,r.jsx)(n.td,{children:"\u201cV\u201d\u624b\u52bf"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mute"}),(0,r.jsx)(n.td,{children:"\u201c\u5618\u201d\u624b\u52bf"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Palm"}),(0,r.jsx)(n.td,{children:"\u624b\u638c"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Okay"}),(0,r.jsx)(n.td,{children:"OK\u624b\u52bf"}),(0,r.jsx)(n.td,{children:"11"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ThumbLeft"}),(0,r.jsx)(n.td,{children:"\u5927\u62c7\u6307\u5411\u5de6"}),(0,r.jsx)(n.td,{children:"12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ThumbRight"}),(0,r.jsx)(n.td,{children:"\u5927\u62c7\u6307\u5411\u53f3"}),(0,r.jsx)(n.td,{children:"13"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Awesome"}),(0,r.jsx)(n.td,{children:"666\u624b\u52bf"}),(0,r.jsx)(n.td,{children:"14"})]})]})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u52a8\u6001\u624b\u52bf"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u624b\u52bf"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(n.th,{children:"\u6570\u503c"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PinchMove"}),(0,r.jsx)(n.td,{children:"\u4e09\u6307\u634f\u5408\u62d6\u52a8"}),(0,r.jsx)(n.td,{children:"15"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PinchRotateAntiClockwise"}),(0,r.jsx)(n.td,{children:"\u4e09\u6307\u634f\u5408\u9006\u65f6\u9488\u753b\u5708"}),(0,r.jsx)(n.td,{children:"16"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PinchRotateClockwise"}),(0,r.jsx)(n.td,{children:"\u4e09\u6307\u634f\u5408\u987a\u65f6\u9488\u753b\u5708"}),(0,r.jsx)(n.td,{children:"17"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u7801\u4ed3\u5e93\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/hand_lmk_detection",children:"https://github.com/D-Robotics/hand_lmk_detection"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/hand_gesture_detection",children:"https://github.com/D-Robotics/hand_gesture_detection"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["(",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/mono2d_body_detection",children:"https://github.com/D-Robotics/mono2d_body_detection"}),")"]}),"\n",(0,r.jsx)(n.p,{children:"\u5e94\u7528\u573a\u666f\uff1a\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u96c6\u6210\u4e86\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\uff0c\u624b\u52bf\u5206\u6790\u7b49\u6280\u672f\uff0c\u4f7f\u5f97\u8ba1\u7b97\u673a\u80fd\u591f\u5c06\u4eba\u7684\u624b\u52bf\u89e3\u8bfb\u4e3a\u5bf9\u5e94\u6307\u4ee4\uff0c\u53ef\u5b9e\u73b0\u624b\u52bf\u63a7\u5236\u4ee5\u53ca\u624b\u8bed\u7ffb\u8bd1\u7b49\u529f\u80fd\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e\u667a\u80fd\u5bb6\u5c45\uff0c\u667a\u80fd\u5ea7\u8231\u3001\u667a\u80fd\u7a7f\u6234\u8bbe\u5907\u7b49\u9886\u57df\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c0f\u8f66\u624b\u52bf\u63a7\u5236\u6848\u4f8b\uff1a",(0,r.jsx)(n.a,{href:"/rdk_doc/Robot_development/apps/car_gesture_control",children:"\u5c0f\u8f66\u624b\u52bf\u63a7\u5236"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u57fa\u4e8e\u624b\u52bf\u8bc6\u522b\u4ee5\u53ca\u4eba\u4f53\u59ff\u6001\u5206\u6790\u5b9e\u73b0\u6e38\u620f\u4eba\u7269\u63a7\u5236\u6848\u4f8b\uff1a",(0,r.jsx)(n.a,{href:"https://developer.d-robotics.cc/forumDetail/112555512834430487",children:"\u73a9\u8f6cX3\u6d3e\uff0c\u5065\u8eab\u6e38\u620f\u4e24\u4e0d\u8bef"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,r.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,r.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X5"}),(0,r.jsx)(n.td,{children:"Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK Ultra"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,r.jsx)(n.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u786e\u8ba4PC\u673a\u80fd\u591f\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeRDK\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u624b\u52bf\u8bc6\u522b(hand_gesture_detection)package\u8ba2\u9605\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4bpackage\u53d1\u5e03\u7684\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\u7ed3\u679c\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u53d1\u5e03\u7b97\u6cd5msg\uff0c\u901a\u8fc7websocket package\u5b9e\u73b0\u5728PC\u7aef\u6d4f\u89c8\u5668\u4e0a\u6e32\u67d3\u663e\u793a\u53d1\u5e03\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(d.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(d.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(d.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(d.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4f7f\u7528\u672c\u5730\u56de\u704c\u56fe\u7247"})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u4ec5",(0,r.jsx)(n.code,{children:"TROS Humble 2.3.1"}),"\u4ee5\u53ca\u540e\u7eed\u7248\u672c\u652f\u6301\u6b64\u529f\u80fd\u3002"]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TROS"}),"\u7248\u672c\u53d1\u5e03\u8bb0\u5f55\uff1a",(0,r.jsx)(n.a,{href:"/rdk_doc/Robot_development/quick_start/changelog",children:"\u70b9\u51fb\u8df3\u8f6c"}),"\uff0c\u7248\u672c\u67e5\u770b\u65b9\u6cd5\uff1a",(0,r.jsx)(n.a,{href:"/rdk_doc/Robot_development/quick_start/install_tros",children:"\u70b9\u51fb\u8df3\u8f6c"}),"\u3002"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# \u914d\u7f6e\u672c\u5730\u56de\u704c\u56fe\u7247\nexport CAM_TYPE=fb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py publish_image_source:=config/person_face_hand.jpg publish_image_format:=jpg publish_output_image_w:=960 publish_output_image_h:=544 publish_fps:=30\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["launch\u811a\u672c\u9ed8\u8ba4\u542f\u52a8\u9759\u6001\u624b\u52bf\u8bc6\u522b\uff0c\u5bf9\u4e8e",(0,r.jsx)(n.code,{children:"TROS Humble"}),"\u7248\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"is_dynamic_gesture"}),"\u53c2\u6570\u6307\u5b9a\u542f\u52a8\u52a8\u6001\u624b\u52bf\u8bc6\u522b\uff1a",(0,r.jsx)(n.code,{children:"ros2 launch hand_gesture_detection hand_gesture_detection.launch.py is_dynamic_gesture:=True"}),"\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"[hand_gesture_detection-5] [C][32711][08-12][09:39:39:575][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11\n[hand_gesture_detection-5] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)\n[hand_gesture_detection-5] [WARN] [1660268379.611419981] [hand gesture det node]: input_idx: 0, tensorType = 8, tensorLayout = 0\n[hand_gesture_detection-5] [WARN] [1660268379.619313022] [hand gesture det node]: Create subscription with topic_name: /hobot_hand_lmk_detection\n[hand_gesture_detection-5] [WARN] [1660268379.629207314] [hand gesture det node]: ai_msg_pub_topic_name: /hobot_hand_gesture_detection\n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[hand_gesture_detection-5] [WARN] [1660268381.026173815] [hand_gesture_det]: Sub smart fps 31.16\n[hand_gesture_detection-5] [WARN] [1660268381.206196565] [hand_gesture_det]: Pub smart fps 30.17\n[hand_gesture_detection-5] [WARN] [1660268382.054034899] [hand_gesture_det]: Sub smart fps 30.19\n[hand_gesture_detection-5] [WARN] [1660268382.234087357] [hand_gesture_det]: Pub smart fps 30.19\n[hand_gesture_detection-5] [WARN] [1660268383.055988982] [hand_gesture_det]: Sub smart fps 29.97\n[hand_gesture_detection-5] [WARN] [1660268383.235230316] [hand_gesture_det]: Pub smart fps 30.00\n[hand_gesture_detection-5] [WARN] [1660268384.087152150] [hand_gesture_det]: Sub smart fps 30.10\n[hand_gesture_detection-5] [WARN] [1660268384.256141566] [hand_gesture_det]: Pub smart fps 30.39\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u7a0b\u5e8f\u8fd0\u884c\u6210\u529f\uff0c\u63a8\u7406\u65f6\u7b97\u6cd5\u8f93\u5165\u548c\u8f93\u51fa\u5e27\u7387\u4e3a30fps\uff0c\u6bcf\u79d2\u949f\u5237\u65b0\u4e00\u6b21\u7edf\u8ba1\u5e27\u7387\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u8ba2\u9605\u5230\u7684\u7b97\u6cd5msg\u4e2d\u6709\u4e00\u4e2ahand\uff08\u5305\u542b\u4eba\u624b\u6846\u548c\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\u7ed3\u679c\uff09\uff0c\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u8f93\u51fa\u7684\u624b\u52bf\u5206\u7c7b\u7ed3\u679c\u662f\u201cPalm\u201d\u624b\u52bf\uff08\u5206\u7c7b\u7ed3\u679c\u4e3a5\uff09\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,r.jsx)(n.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09\uff1a"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(52747).A+"",width:"1646",height:"837"})})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>d});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function d(e){let{children:n,hidden:t,className:d}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,d),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(34164),o=t(86641),d=t(56347),i=t(205),c=t(38874),l=t(24035),a=t(82993);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function _(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,d.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=u(e),[d,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,h]=p({queryString:t,groupId:s}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,a.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),m=(()=>{const e=l??b;return _({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!_({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,o]),tabValues:o}}var x=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:d,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),a=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(l(n),d(s))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:a,...o,className:(0,s.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,j.jsx)(v,{...e,children:h(e.children)},String(n))}},52747:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/gesture_render-c49be7fd01b7b89913b1df5a45daccda.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);