"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6113],{23584:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=s(74848),l=s(28453),t=s(93859),o=s(19365);const c={sidebar_position:3},a="5.2.3 \u56fe\u50cf\u7f16\u89e3\u7801",i={id:"Robot_development/quick_demo/hobot_codec",title:"5.2.3 \u56fe\u50cf\u7f16\u89e3\u7801",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/02_quick_demo/hobot_codec.md",sourceDirName:"05_Robot_development/02_quick_demo",slug:"/Robot_development/quick_demo/hobot_codec",permalink:"/rdk_doc/Robot_development/quick_demo/hobot_codec",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/02_quick_demo/hobot_codec.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5.2.2 \u6570\u636e\u5c55\u793a",permalink:"/rdk_doc/Robot_development/quick_demo/demo_render"},next:{title:"5.2.4 \u56fe\u50cf\u5904\u7406\u52a0\u901f",permalink:"/rdk_doc/Robot_development/quick_demo/demo_cv"}},d={},u=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0-1",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"523-\u56fe\u50cf\u7f16\u89e3\u7801",children:"5.2.3 \u56fe\u50cf\u7f16\u89e3\u7801"}),"\n","\n",(0,r.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"\u56fe\u50cf\u7f16\u89e3\u7801\u529f\u80fd\u4e0eROS image_transport package\u7c7b\u4f3c\uff0cRDK\u91c7\u7528\u786c\u4ef6\u5355\u5143\u52a0\u901fMJPEG/H264/H265\u4e0eBGR8/RGB8/NV12\u683c\u5f0f\u4e4b\u95f4\u8f6c\u6362\uff0c\u53ef\u4ee5\u5927\u5e45\u964d\u4f4eCPU\u5360\u7528\u7684\u540c\u65f6\u63d0\u5347\u683c\u5f0f\u8f6c\u6362\u6548\u7387\uff0cX86\u5e73\u53f0\u4ec5\u652f\u6301MJPEG\u4e0eBGR8/RGB8/NV12\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u6362\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee3\u7801\u4ed3\u5e93\uff1a(",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_codec",children:"https://github.com/D-Robotics/hobot_codec"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,r.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,r.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"\u542f\u52a8MIPI\u6444\u50cf\u5934\u83b7\u53d6\u56fe\u50cf\uff0c\u7136\u540e\u8fdb\u884c\u56fe\u50cf\u7f16\u7801\uff0c\u6700\u540e\u901a\u8fc7Web\u5c55\u793a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X5"}),(0,r.jsx)(n.td,{children:"Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"\u542f\u52a8MIPI\u6444\u50cf\u5934\u83b7\u53d6\u56fe\u50cf\uff0c\u7136\u540e\u8fdb\u884c\u56fe\u50cf\u7f16\u7801\uff0c\u6700\u540e\u901a\u8fc7Web\u5c55\u793a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK Ultra"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,r.jsx)(n.td,{children:"\u542f\u52a8MIPI\u6444\u50cf\u5934\u83b7\u53d6\u56fe\u50cf\uff0c\u7136\u540e\u8fdb\u884c\u56fe\u50cf\u7f16\u7801\uff0c\u6700\u540e\u901a\u8fc7Web\u5c55\u793a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"X86"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy)"}),(0,r.jsx)(n.td,{children:"\u4f7f\u7528\u56fe\u50cf\u53d1\u5e03\u5de5\u5177\u53d1\u5e03YUV\u56fe\u50cf\uff0c\u7136\u540e\u8fdb\u884c\u56fe\u50cf\u7f16\u7801\uff0c\u6700\u540e\u901a\u8fc7Web\u5c55\u793a"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"RDK Ultra\u4e0d\u652f\u6301H.264\u89c6\u9891\u7f16\u7801\u683c\u5f0f\u3002"})})}),"\n",(0,r.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RDK\u5df2\u8fde\u63a5\u6444\u50cf\u5934F37\u6216\u5176\u4ed6MIPI\u6444\u50cf\u5934\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"x86\u5e73\u53f0",children:"X86\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"X86\u73af\u5883\u5df2\u914d\u7f6eUbuntu 20.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"X86\u73af\u5883\u5df2\u5b89\u88c5X86\u7248\u672ctros.b\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u9762\u4ee5 JPEG \u7f16\u7801\u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u4ece\u6444\u50cf\u5934\u6216\u56fe\u50cf\u53d1\u5e03\u5de5\u5177\u83b7\u53d6NV12\u683c\u5f0f\u56fe\u7247\u6570\u636e\uff0c\u7ecf\u8fc7JPEG\u538b\u7f29\u7f16\u7801\u540e\uff0c\u5b9e\u73b0\u5728PC\u7684Web\u7aef\u9884\u89c8\u56fe\u7247\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u83b7\u53d6YUV\u6570\u636e\uff0c\u5e76\u542f\u52a8JPGE\u7f16\u7801\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7SSH\u767b\u5f55RDK\uff0c\u4f7f\u7528mipi_cam\u4f5c\u4e3a\u6570\u636e\u6765\u6e90\uff0c\u914d\u7f6ehobot_codec\u8f93\u5165\u4e3aNV12\u683c\u5f0f\uff0c\u8f93\u51fa\u4e3aJPEG\u683c\u5f0f\uff0c\u53ef\u4fee\u6539mipi_cam\u4e3a\u5b9e\u9645\u4f7f\u7528\u7684sensor\u578b\u53f7\u3002"}),"\n",(0,r.jsx)(n.p,{children:"a. \u542f\u52a8mipi_cam"}),"\n",(0,r.jsxs)(t.A,{groupId:"tros-distro",children:[(0,r.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(o.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ros2 launch mipi_cam mipi_cam.launch.py mipi_video_device:=F37\n"})}),"\n",(0,r.jsx)(n.p,{children:"b. \u542f\u52a8hobot_codec\u7f16\u7801"}),"\n",(0,r.jsxs)(t.A,{groupId:"tros-distro",children:[(0,r.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(o.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ros2 launch hobot_codec hobot_codec.launch.py codec_in_mode:=shared_mem codec_in_format:=nv12 codec_out_mode:=ros codec_out_format:=jpeg codec_sub_topic:=/hbmem_img codec_pub_topic:=/image_jpeg\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Web\u7aef\u67e5\u770bJPEG\u7f16\u7801\u56fe\u50cf\uff0c\u53e6\u8d77\u4e00\u4e2a\u7ec8\u7aef\uff1a"}),"\n",(0,r.jsxs)(t.A,{groupId:"tros-distro",children:[(0,r.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(o.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ros2 launch websocket websocket.launch.py websocket_image_topic:=/image_jpeg websocket_only_show_image:=true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["PC\u6253\u5f00\u6d4f\u89c8\u5668\uff08chrome/firefox/edge\uff09\u8f93\u5165 ",(0,r.jsx)(n.code,{children:"http://IP:8000"}),"\uff0cIP\u4e3aRDK/X86\u8bbe\u5907IP\u5730\u5740\uff0c\u70b9\u51fb\u5de6\u4e0a\u65b9Web\u7aef\u5c55\u793a\u5373\u53ef\u67e5\u770bJPEG\u7f16\u7801\u7684\u5b9e\u65f6\u753b\u9762"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"web-f37-codec",src:s(64397).A+"",title:"\u5b9e\u65f6\u56fe\u50cf",width:"1862",height:"941"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"x86\u5e73\u53f0-1",children:"X86\u5e73\u53f0"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u83b7\u53d6YUV\u6570\u636e\uff0c\u5e76\u542f\u52a8JPGE\u7f16\u7801\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"a. \u542f\u52a8\u56fe\u50cf\u53d1\u5e03\u8282\u70b9"}),"\n",(0,r.jsxs)(t.A,{groupId:"tros-distro",children:[(0,r.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(o.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"//\u4ecetros.b\u7684\u5b89\u88c5\u8def\u5f84\u4e2d\u62f7\u8d1d\u51fa\u8fd0\u884c\u793a\u4f8b\u9700\u8981\u7684\u56fe\u7247\u6587\u4ef6\ncp -r /opt/tros/${TROS_DISTRO}/lib/hobot_image_publisher/config/ .\n\n// \u542f\u52a8\u56fe\u50cf\u53d1\u5e03\u8282\u70b9\n\nros2 launch hobot_image_publisher hobot_image_publisher.launch.py publish_output_image_w:=960 publish_output_image_h:=544 publish_message_topic_name:=/hbmem_img publish_fps:=20 \n"})}),"\n",(0,r.jsx)(n.p,{children:"b. \u542f\u52a8JPEG\u56fe\u7247\u7f16\u7801&\u53d1\u5e03pkg"}),"\n",(0,r.jsxs)(t.A,{groupId:"tros-distro",children:[(0,r.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(o.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ros2 launch hobot_codec hobot_codec.launch.py codec_in_mode:=shared_mem codec_in_format:=nv12 codec_out_mode:=ros codec_out_format:=jpeg codec_sub_topic:=/hbmem_img codec_pub_topic:=/image_jpeg\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Web\u7aef\u67e5\u770bJPEG\u7f16\u7801\u56fe\u50cf\uff0c\u53e6\u8d77\u4e00\u4e2a\u7ec8\u7aef\uff1a"}),"\n",(0,r.jsxs)(t.A,{groupId:"tros-distro",children:[(0,r.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(o.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ros2 launch websocket websocket.launch.py websocket_image_topic:=/image_jpeg websocket_only_show_image:=true\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["PC\u6253\u5f00\u6d4f\u89c8\u5668\uff08chrome/firefox/edge\uff09\u8f93\u5165 ",(0,r.jsx)(n.code,{children:"http://IP:8000"}),"\uff0cIP\u4e3aRDK/X86\u8bbe\u5907IP\u5730\u5740\uff0c\u70b9\u51fb\u5de6\u4e0a\u65b9Web\u7aef\u5c55\u793a\u5373\u53ef\u67e5\u770bJPEG\u7f16\u7801\u7684\u5b9e\u65f6\u753b\u9762\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u9047\u5230 Hobot codec \u8282\u70b9\u542f\u52a8\u5f02\u5e38\uff0c\u53ef\u901a\u8fc7\u4e0b\u8ff0\u6b65\u9aa4\u8fdb\u884c\u95ee\u9898\u6392\u67e5\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u662f\u5426\u8bbe\u7f6e tros.b \u73af\u5883"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\u662f\u5426\u6b63\u786e\uff0c\u5177\u4f53\u53c2\u8003Hobot_codec ",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_codec",children:"README.md"})]}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var r=s(34164);const l={tabItem:"tabItem_Ymn6"};var t=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:s,children:n})}},93859:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(96540),l=s(34164),t=s(86641),o=s(56347),c=s(205),a=s(38874),i=s(24035),d=s(82993);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:l}}=e;return{value:n,label:s,attributes:r,default:l}}))}(s);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function b(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const l=(0,o.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(l.location.search);n.set(t,e),l.replace({...l.location,search:n.toString()})}),[t,l])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:l}=e,t=h(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[i,u]=p({queryString:s,groupId:l}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,t]=(0,d.Dv)(s);return[l,(0,r.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:l}),j=(()=>{const e=i??m;return b({value:e,tabValues:t})?e:null})();(0,c.A)((()=>{j&&a(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=s(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=s(74848);function g(e){let{className:n,block:s,selectedValue:r,selectValue:o,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:i}=(0,t.a_)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),l=c[s].value;l!==r&&(i(n),o(l))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...t,className:(0,l.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:l}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=m(e);return(0,_.jsxs)("div",{className:(0,l.A)("tabs-container",j.tabList),children:[(0,_.jsx)(g,{...n,...e}),(0,_.jsx)(f,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,_.jsx)(v,{...e,children:u(e.children)},String(n))}},64397:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/web-f37-codec-7bef9ef64c1ec1b4df6bd6161d9a0507.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const l={},t=r.createContext(l);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);