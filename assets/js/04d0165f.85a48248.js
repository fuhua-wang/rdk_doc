"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7463],{21979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(74848),o=n(28453),s=n(93859),d=n(19365);const i={sidebar_position:3},c="\u624b\u52bf\u8bc6\u522b",l={id:"Robot_development/boxs/function/hand_gesture_detection",title:"\u624b\u52bf\u8bc6\u522b",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/hand_gesture_detection.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hand_gesture_detection",permalink:"/rdk_doc/Robot_development/boxs/function/hand_gesture_detection",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hand_gesture_detection.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/boxs/function/hand_lmk_detection"},next:{title:"\u5355\u76ee3D\u5ba4\u5185\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/boxs/function/mono3d_indoor_detection"}},a={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u624b\u52bf\u8bc6\u522b",children:"\u624b\u52bf\u8bc6\u522b"}),"\n","\n",(0,r.jsx)(t.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,r.jsx)(t.p,{children:"\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u793a\u4f8b\u8ba2\u9605\u5305\u542b\u4eba\u624b\u6846\u3001\u4eba\u624b\u5173\u952e\u70b9\u4fe1\u606f\u7684\u7b97\u6cd5msg\uff0c\u5229\u7528BPU\u8fdb\u884c\u63a8\u7406\uff0c\u53d1\u5e03\u5305\u542b\u624b\u52bf\u4fe1\u606f\u7684\u667a\u80fd\u7ed3\u679cmsg\u3002"}),"\n",(0,r.jsx)(t.p,{children:'\u7b97\u6cd5\u652f\u6301\u7684\u624b\u52bf\u8bc6\u522b\u7c7b\u522b\uff0c\u4ee5\u53ca\u624b\u52bf\u7c7b\u522b\u5728\u7b97\u6cd5msg\uff08Attribute\u6210\u5458\uff0ctype\u4e3a"gesture"\uff09\u4e2d\u5bf9\u5e94\u7684\u6570\u503c\u5982\u4e0b\uff1a'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u624b\u52bf"}),(0,r.jsx)(t.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(t.th,{children:"\u6570\u503c"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ThumbUp"}),(0,r.jsx)(t.td,{children:"\u7ad6\u8d77\u5927\u62c7\u6307"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Victory"}),(0,r.jsx)(t.td,{children:"\u201cV\u201d\u624b\u52bf"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Mute"}),(0,r.jsx)(t.td,{children:"\u201c\u5618\u201d\u624b\u52bf"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Palm"}),(0,r.jsx)(t.td,{children:"\u624b\u638c"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Okay"}),(0,r.jsx)(t.td,{children:"OK\u624b\u52bf"}),(0,r.jsx)(t.td,{children:"11"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ThumbLeft"}),(0,r.jsx)(t.td,{children:"\u5927\u62c7\u6307\u5411\u5de6"}),(0,r.jsx)(t.td,{children:"12"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ThumbRight"}),(0,r.jsx)(t.td,{children:"\u5927\u62c7\u6307\u5411\u53f3"}),(0,r.jsx)(t.td,{children:"13"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Awesome"}),(0,r.jsx)(t.td,{children:"666\u624b\u52bf"}),(0,r.jsx)(t.td,{children:"14"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"\u4ee3\u7801\u4ed3\u5e93\uff1a"}),"\n",(0,r.jsxs)(t.p,{children:["(",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/hand_lmk_detection",children:"https://github.com/D-Robotics/hand_lmk_detection"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["(",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/hand_gesture_detection",children:"https://github.com/D-Robotics/hand_gesture_detection"}),")"]}),"\n",(0,r.jsxs)(t.p,{children:["(",(0,r.jsx)(t.a,{href:"https://github.com/D-Robotics/mono2d_body_detection",children:"https://github.com/D-Robotics/mono2d_body_detection"}),")"]}),"\n",(0,r.jsx)(t.p,{children:"\u5e94\u7528\u573a\u666f\uff1a\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u96c6\u6210\u4e86\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\uff0c\u624b\u52bf\u5206\u6790\u7b49\u6280\u672f\uff0c\u4f7f\u5f97\u8ba1\u7b97\u673a\u80fd\u591f\u5c06\u4eba\u7684\u624b\u52bf\u89e3\u8bfb\u4e3a\u5bf9\u5e94\u6307\u4ee4\uff0c\u53ef\u5b9e\u73b0\u624b\u52bf\u63a7\u5236\u4ee5\u53ca\u624b\u8bed\u7ffb\u8bd1\u7b49\u529f\u80fd\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e\u667a\u80fd\u5bb6\u5c45\uff0c\u667a\u80fd\u5ea7\u8231\u3001\u667a\u80fd\u7a7f\u6234\u8bbe\u5907\u7b49\u9886\u57df\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u5c0f\u8f66\u624b\u52bf\u63a7\u5236\u6848\u4f8b\uff1a",(0,r.jsx)(t.a,{href:"/rdk_doc/Robot_development/apps/car_gesture_control",children:"\u5c0f\u8f66\u624b\u52bf\u63a7\u5236"})]}),"\n",(0,r.jsxs)(t.p,{children:["\u57fa\u4e8e\u624b\u52bf\u8bc6\u522b\u4ee5\u53ca\u4eba\u4f53\u59ff\u6001\u5206\u6790\u5b9e\u73b0\u6e38\u620f\u4eba\u7269\u63a7\u5236\u6848\u4f8b\uff1a",(0,r.jsx)(t.a,{href:"https://developer.d-robotics.cc/forumDetail/112555512834430487",children:"\u73a9\u8f6cX3\u6d3e\uff0c\u5065\u8eab\u6e38\u620f\u4e24\u4e0d\u8bef"})]}),"\n",(0,r.jsx)(t.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\u5e73\u53f0"}),(0,r.jsx)(t.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,r.jsx)(t.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RDK X3, RDK X3 Module"}),(0,r.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(t.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RDK X5"}),(0,r.jsx)(t.td,{children:"Ubuntu 22.04 (Humble)"}),(0,r.jsx)(t.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RDK Ultra"}),(0,r.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,r.jsx)(t.td,{children:"\u542f\u52a8MIPI/USB\u6444\u50cf\u5934\uff0c\u5e76\u901a\u8fc7Web\u5c55\u793a\u63a8\u7406\u6e32\u67d3\u7ed3\u679c"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(t.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"RDK\u5df2\u5b89\u88c5MIPI\u6216\u8005USB\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"\u786e\u8ba4PC\u673a\u80fd\u591f\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeRDK\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,r.jsx)(t.p,{children:"\u624b\u52bf\u8bc6\u522b(hand_gesture_detection)package\u8ba2\u9605\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4bpackage\u53d1\u5e03\u7684\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\u7ed3\u679c\uff0c\u7ecf\u8fc7\u63a8\u7406\u540e\u53d1\u5e03\u7b97\u6cd5msg\uff0c\u901a\u8fc7websocket package\u5b9e\u73b0\u5728PC\u7aef\u6d4f\u89c8\u5668\u4e0a\u6e32\u67d3\u663e\u793a\u53d1\u5e03\u7684\u56fe\u7247\u548c\u5bf9\u5e94\u7684\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u4f7f\u7528MIPI\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,r.jsxs)(s.A,{groupId:"tros-distro",children:[(0,r.jsx)(d.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(d.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# \u914d\u7f6eMIPI\u6444\u50cf\u5934\nexport CAM_TYPE=mipi\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u4f7f\u7528USB\u6444\u50cf\u5934\u53d1\u5e03\u56fe\u7247"})}),"\n",(0,r.jsxs)(s.A,{groupId:"tros-distro",children:[(0,r.jsx)(d.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(d.A,{value:"humble",label:"Humble",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"# \u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3002\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono2d_body_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_lmk_detection/config/ .\ncp -r /opt/tros/${TROS_DISTRO}/lib/hand_gesture_detection/config/ .\n\n# \u914d\u7f6eUSB\u6444\u50cf\u5934\nexport CAM_TYPE=usb\n\n# \u542f\u52a8launch\u6587\u4ef6\nros2 launch hand_gesture_detection hand_gesture_detection.launch.py\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,r.jsx)(t.p,{children:"\u5728\u8fd0\u884c\u7ec8\u7aef\u8f93\u51fa\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"[hand_gesture_detection-5] [C][32711][08-12][09:39:39:575][configuration.cpp:49][EasyDNN]EasyDNN version: 0.4.11\n[hand_gesture_detection-5] [DNN] Runtime version = 1.9.7_(3.14.5 HBRT)\n[hand_gesture_detection-5] [WARN] [1660268379.611419981] [hand gesture det node]: input_idx: 0, tensorType = 8, tensorLayout = 0\n[hand_gesture_detection-5] [WARN] [1660268379.619313022] [hand gesture det node]: Create subscription with topic_name: /hobot_hand_lmk_detection\n[hand_gesture_detection-5] [WARN] [1660268379.629207314] [hand gesture det node]: ai_msg_pub_topic_name: /hobot_hand_gesture_detection\n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_euclid_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (MOTMethod.cpp:39): MOTMethod::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[mono2d_body_detection-3] (IOU2.cpp:34): IOU2 Mot::Init config/iou2_method_param.json\n[mono2d_body_detection-3] \n[hand_gesture_detection-5] [WARN] [1660268381.026173815] [hand_gesture_det]: Sub smart fps 31.16\n[hand_gesture_detection-5] [WARN] [1660268381.206196565] [hand_gesture_det]: Pub smart fps 30.17\n[hand_gesture_detection-5] [WARN] [1660268382.054034899] [hand_gesture_det]: Sub smart fps 30.19\n[hand_gesture_detection-5] [WARN] [1660268382.234087357] [hand_gesture_det]: Pub smart fps 30.19\n[hand_gesture_detection-5] [WARN] [1660268383.055988982] [hand_gesture_det]: Sub smart fps 29.97\n[hand_gesture_detection-5] [WARN] [1660268383.235230316] [hand_gesture_det]: Pub smart fps 30.00\n[hand_gesture_detection-5] [WARN] [1660268384.087152150] [hand_gesture_det]: Sub smart fps 30.10\n[hand_gesture_detection-5] [WARN] [1660268384.256141566] [hand_gesture_det]: Pub smart fps 30.39\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u7a0b\u5e8f\u8fd0\u884c\u6210\u529f\uff0c\u63a8\u7406\u65f6\u7b97\u6cd5\u8f93\u5165\u548c\u8f93\u51fa\u5e27\u7387\u4e3a30fps\uff0c\u6bcf\u79d2\u949f\u5237\u65b0\u4e00\u6b21\u7edf\u8ba1\u5e27\u7387\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u8f93\u51falog\u663e\u793a\uff0c\u8ba2\u9605\u5230\u7684\u7b97\u6cd5msg\u4e2d\u6709\u4e00\u4e2ahand\uff08\u5305\u542b\u4eba\u624b\u6846\u548c\u4eba\u624b\u5173\u952e\u70b9\u68c0\u6d4b\u7ed3\u679c\uff09\uff0c\u624b\u52bf\u8bc6\u522b\u7b97\u6cd5\u8f93\u51fa\u7684\u624b\u52bf\u5206\u7c7b\u7ed3\u679c\u662f\u201cPalm\u201d\u624b\u52bf\uff08\u5206\u7c7b\u7ed3\u679c\u4e3a5\uff09\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728PC\u7aef\u7684\u6d4f\u89c8\u5668\u8f93\u5165",(0,r.jsx)(t.a,{href:"http://IP:8000",children:"http://IP:8000"})," \u5373\u53ef\u67e5\u770b\u56fe\u50cf\u548c\u7b97\u6cd5\u6e32\u67d3\u6548\u679c\uff08IP\u4e3aRDK\u7684IP\u5730\u5740\uff09\uff1a"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(52747).A+"",width:"1646",height:"837"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function d(e){let{children:t,hidden:n,className:d}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,d),hidden:n,children:t})}},93859:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),o=n(34164),s=n(86641),d=n(56347),i=n(205),c=n(38874),l=n(24035),a=n(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function _(e){let{queryString:t=!1,groupId:n}=e;const o=(0,d.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[d,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,u]=_({queryString:n,groupId:o}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,a.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),x=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:d,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),a=e=>{const t=e.currentTarget,n=c.indexOf(t),o=i[n].value;o!==r&&(l(t),d(o))},u=e=>{let t=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:a,...s,className:(0,o.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=b(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...t,...e}),(0,j.jsx)(f,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},52747:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/gesture_render-c49be7fd01b7b89913b1df5a45daccda.jpeg"},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);