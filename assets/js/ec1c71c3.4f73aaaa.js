"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8757],{90342:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=s(74848),d=s(28453);const r={sidebar_position:13},i=void 0,l={id:"Robot_development/boxs/function/hobot_stereonet",title:"hobot_stereonet",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/03_boxs/function/hobot_stereonet.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/hobot_stereonet",permalink:"/rdk_doc/Robot_development/boxs/function/hobot_stereonet",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/hobot_stereonet.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u56fe\u7247\u7279\u5f81\u68c0\u7d22",permalink:"/rdk_doc/Robot_development/boxs/function/hobot_clip"},next:{title:"\u5206\u5272\u4e00\u5207",permalink:"/rdk_doc/Robot_development/boxs/function/mono_mobilesam"}},c={},h=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u7269\u6599\u6e05\u5355",id:"\u7269\u6599\u6e05\u5355",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u529f\u80fd\u5b89\u88c5",id:"\u529f\u80fd\u5b89\u88c5",level:3},{value:"\u542f\u52a8\u53cc\u76ee\u56fe\u50cf\u53d1\u5e03\u3001\u7b97\u6cd5\u63a8\u7406\u548c\u56fe\u50cf\u53ef\u89c6\u5316",id:"\u542f\u52a8\u53cc\u76ee\u56fe\u50cf\u53d1\u5e03\u7b97\u6cd5\u63a8\u7406\u548c\u56fe\u50cf\u53ef\u89c6\u5316",level:3},{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"\u8ba2\u9605\u8bdd\u9898",id:"\u8ba2\u9605\u8bdd\u9898",level:3},{value:"\u53d1\u5e03\u8bdd\u9898",id:"\u53d1\u5e03\u8bdd\u9898",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u7b97\u6cd5\u8017\u65f6",id:"\u7b97\u6cd5\u8017\u65f6",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"#\u53cc\u76ee\u6df1\u5ea6\u7b97\u6cd5"}),"\n",(0,t.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,t.jsxs)(n.p,{children:["\u53cc\u76ee\u6df1\u5ea6\u4f30\u8ba1\u7b97\u6cd5\u662f\u4f7f\u7528\u5730\u5e73\u7ebf",(0,t.jsx)(n.a,{href:"https://developer.horizon.ai/api/v1/fileData/horizon_j5_open_explorer_cn_doc/hat/source/examples/stereonet.html",children:"OpenExplorer"}),"\u5728",(0,t.jsx)(n.a,{href:"https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html",children:"SceneFlow"}),"\u6570\u636e\u96c6\u4e0a\u8bad\u7ec3\u51fa\u6765\u7684",(0,t.jsx)(n.code,{children:"StereoNet"}),"\u6a21\u578b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u7b97\u6cd5\u8f93\u5165\u4e3a\u53cc\u76ee\u56fe\u50cf\u6570\u636e\uff0c\u5206\u522b\u662f\u5de6\u53f3\u89c6\u56fe\u3002\u7b97\u6cd5\u8f93\u51fa\u4e3a\u5de6\u89c6\u56fe\u7684\u89c6\u5dee\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u793a\u4f8b\u4f7f\u7528mipi\u53cc\u76ee\u76f8\u673a\u4f5c\u4e3a\u56fe\u50cf\u6570\u636e\u8f93\u5165\u6e90\uff0c\u5229\u7528BPU\u8fdb\u884c\u7b97\u6cd5\u63a8\u7406\uff0c\u53d1\u5e03\u5305\u542b\u53cc\u76ee\u56fe\u50cf\u5de6\u56fe\u548c\u611f\u77e5\u7ed3\u679c\u7684\u8bdd\u9898\u6d88\u606f\uff0c\n\u5728PC\u7aefrviz2\u4e0a\u6e32\u67d3\u7b97\u6cd5\u7ed3\u679c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7269\u6599\u6e05\u5355",children:"\u7269\u6599\u6e05\u5355"}),"\n",(0,t.jsx)(n.p,{children:"\u53cc\u76ee\u76f8\u673a"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.h3,{id:"\u529f\u80fd\u5b89\u88c5",children:"\u529f\u80fd\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"\u5728RDK\u7cfb\u7edf\u7684\u7ec8\u7aef\u4e2d\u8fd0\u884c\u5982\u4e0b\u6307\u4ee4\uff0c\u5373\u53ef\u5feb\u901f\u5b89\u88c5\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"tros humble \u7248\u672c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install -y tros-humble-hobot-stereonet\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u542f\u52a8\u53cc\u76ee\u56fe\u50cf\u53d1\u5e03\u7b97\u6cd5\u63a8\u7406\u548c\u56fe\u50cf\u53ef\u89c6\u5316",children:"\u542f\u52a8\u53cc\u76ee\u56fe\u50cf\u53d1\u5e03\u3001\u7b97\u6cd5\u63a8\u7406\u548c\u56fe\u50cf\u53ef\u89c6\u5316"}),"\n",(0,t.jsx)(n.p,{children:"\u5728RDK\u7cfb\u7edf\u7684\u7ec8\u7aef\u4e2d\u8fd0\u884c\u5982\u4e0b\u6307\u4ee4\u542f\u52a8\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"tros humble \u7248\u672c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# \u914d\u7f6etros.b humble\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u542f\u52a8\u53cc\u76ee\u6a21\u578blaunch\u6587\u4ef6\uff0c\u5176\u5305\u542b\u4e86\u7b97\u6cd5\u548c\u53cc\u76ee\u76f8\u673a\u8282\u70b9\u7684\u542f\u52a8\nros2 launch stereonet_model stereonet_model_web_visual.launch.py \\\nstereo_image_topic:=/image_combine_raw stereo_combine_mode:=1 need_rectify:="True" \\\nheight_min:=0.1 height_max:=1.0 KMean:=10 stdv:=0.01 leaf_size:=0.05\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u53e6\u5916\u53ef\u4ee5\u901a\u8fc7 component \u7684\u65b9\u5f0f\u542f\u52a8\u8282\u70b9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# \u914d\u7f6etros.b humble\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u7ec8\u7aef1 \u542f\u52a8\u53cc\u76ee\u6a21\u578blaunch\u6587\u4ef6\nros2 launch stereonet_model stereonet_model_component.launch.py \\\nstereo_image_topic:=/image_combine_raw stereo_combine_mode:=1 need_rectify:="True" \\\nheight_min:=0.1 height_max:=1.0 KMean:=10 stdv:=0.01 leaf_size:=0.05\n\n# \u7ec8\u7aef2 \u542f\u52a8mipi\u53cc\u76ee\u76f8\u673alaunch\u6587\u4ef6\nros2 launch mipi_cam mipi_cam_dual_channel.launch.py \\\nmipi_image_width:=1280 mipi_image_height:=640\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u60f3\u5229\u7528\u672c\u5730\u56fe\u7247\u8bc4\u4f30\u7b97\u6cd5\u6548\u679c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u547d\u4ee4\u6307\u5b9a\u7b97\u6cd5\u8fd0\u884c\u6a21\u5f0f\u3001\u56fe\u50cf\u6570\u636e\u5730\u5740\u4ee5\u53ca\u76f8\u673a\u5185\u53c2\uff0c\n\u540c\u65f6\u8981\u4fdd\u8bc1\u56fe\u50cf\u6570\u636e\u7ecf\u8fc7\u53bb\u7578\u53d8\u3001\u57fa\u7ebf\u5bf9\u9f50\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# \u914d\u7f6etros.b humble\u73af\u5883\nsource /opt/tros/humble/setup.bash\n\n# \u8fdb\u5165\u7b97\u6cd5\u6570\u636e\u76ee\u5f55\ncd /opt/tros/humble/share/stereonet_model/\n\n# \u542f\u52a8\u53cc\u76ee\u6a21\u578blaunch\u6587\u4ef6\nros2 launch stereonet_model stereonet_model_web_visual.launch.py \\\nneed_rectify:="False" use_local_image:="True" local_image_path:=`pwd`/data/ \\\ncamera_fx:=505.044342 camera_fy:=505.044342 camera_cx:=605.167053 camera_cy:=378.247009 base_line:=0.069046\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u53c2\u6570\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570\u503c"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"use_local_image"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 False"}),(0,t.jsx)(n.td,{children:"\u662f\u5426\u542f\u7528\u56fe\u7247\u56de\u704c\u6a21\u5f0f"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"local_image_path"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u56de\u704c\u56fe\u50cf\u7684\u5730\u5740\u76ee\u5f55"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"camera_fx"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u76f8\u673a\u5185\u53c2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"camera_fy"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u76f8\u673a\u5185\u53c2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"camera_cx"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u76f8\u673a\u5185\u53c2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"camera_cy"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u76f8\u673a\u5185\u53c2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"base_line"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"\u57fa\u7ebf\u8ddd\u79bb"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["\u56fe\u7247\u7684\u683c\u5f0f\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u7b2c\u4e00\u5f20\u5de6\u76ee\u56fe\u50cf\u7684\u547d\u540d\u4e3aleft000000.png\uff0c\u7b2c\u4e8c\u5f20\u5de6\u76ee\u56fe\u50cf\u7684\u547d\u540d\u4e3aleft000001.png\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\n\u5bf9\u5e94\u7684\u7b2c\u4e00\u5f20\u53f3\u76ee\u56fe\u50cf\u7684\u547d\u540d\u4e3aright000000.png\uff0c\u7b2c\u4e8c\u5f20\u53f3\u76ee\u56fe\u50cf\u7684\u547d\u540d\u4e3aright000001.png\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\n\u7b97\u6cd5\u6309\u5e8f\u53f7\u904d\u5386\u56fe\u50cf\uff0c\u76f4\u81f3\u56fe\u50cf\u5168\u90e8\u8ba1\u7b97\u5b8c\u6bd5\u3002\n",(0,t.jsx)(n.img,{alt:"stereonet_rdk",src:s(67557).A+"",width:"1234",height:"170"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u542f\u52a8\u6210\u529f\u540e\uff0c\u6253\u5f00\u540c\u4e00\u7f51\u7edc\u7535\u8111\u7684rviz2\uff0c\u8ba2\u9605\u53cc\u76ee\u6a21\u578b\u8282\u70b9\u53d1\u5e03\u7684\u76f8\u5173\u8bdd\u9898\uff0c\u5373\u53ef\u770b\u5230\u7b97\u6cd5\u53ef\u89c6\u5316\u7684\u5b9e\u65f6\u6548\u679c\uff1a\n",(0,t.jsx)(n.img,{alt:"stereonet_rdk",src:s(75297).A+"",width:"1836",height:"1009"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u5728PC\u4e0a\u53ef\u901a\u8fc7\u6d4f\u89c8\u5668\u89c2\u5bdf\u5230\u7b97\u6cd5\u7684\u8fd0\u884c\u7ed3\u679c\uff0c\u5730\u5740\u4e3aX5\u76848000\u7aef\u53e3\uff0c\u6bd4\u5982X5\u7684ip\u5730\u5740\u4e3a192.168.31.111\uff0c\n\u90a3\u4e48\u5728\u6d4f\u89c8\u5668\u8f93\u5165 192.168.31.111:8000 \u5373\u53ef\uff1a\n",(0,t.jsx)(n.img,{alt:"stereonet_rdk",src:s(57177).A+"",width:"1350",height:"918"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u63a5\u53e3\u8bf4\u660e",children:"\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,t.jsx)(n.h3,{id:"\u8ba2\u9605\u8bdd\u9898",children:"\u8ba2\u9605\u8bdd\u9898"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u6d88\u606f\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/image_combine_raw"}),(0,t.jsx)(n.td,{children:"sensor_msgs::msg::Image"}),(0,t.jsx)(n.td,{children:"\u53cc\u76ee\u76f8\u673a\u8282\u70b9\u53d1\u5e03\u7684\u5de6\u53f3\u76ee\u62fc\u63a5\u56fe\u50cf\u8bdd\u9898\uff0c\u7528\u4e8e\u6a21\u578b\u63a8\u7406\u6df1\u5ea6"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u53d1\u5e03\u8bdd\u9898",children:"\u53d1\u5e03\u8bdd\u9898"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u6d88\u606f\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/StereoNetNode/stereonet_pointcloud2"}),(0,t.jsx)(n.td,{children:"sensor_msgs::msg::PointCloud2"}),(0,t.jsx)(n.td,{children:"\u53d1\u5e03\u7684\u70b9\u4e91\u6df1\u5ea6\u8bdd\u9898"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/StereoNetNode/stereonet_depth"}),(0,t.jsx)(n.td,{children:"sensor_msgs::msg::Image"}),(0,t.jsx)(n.td,{children:"\u53d1\u5e03\u7684\u6df1\u5ea6\u56fe\u50cf\uff0c\u50cf\u7d20\u503c\u4e3a\u6df1\u5ea6\uff0c\u5355\u4f4d\u4e3a\u6beb\u7c73"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/StereoNetNode/stereonet_visual"}),(0,t.jsx)(n.td,{children:"sensor_msgs::msg::Image"}),(0,t.jsx)(n.td,{children:"\u53d1\u5e03\u7684\u6bd4\u8f83\u76f4\u89c2\u7684\u53ef\u89c6\u5316\u6e32\u67d3\u56fe\u50cf"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u53c2\u6570\u503c"}),(0,t.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stereo_image_topic"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 /image_combine_raw"}),(0,t.jsx)(n.td,{children:"\u8ba2\u9605\u53cc\u76ee\u56fe\u50cf\u6d88\u606f\u7684\u8bdd\u9898\u540d"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"need_rectify"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 True"}),(0,t.jsx)(n.td,{children:"\u662f\u5426\u5bf9\u53cc\u76ee\u6570\u636e\u505a\u57fa\u7ebf\u5bf9\u9f50\u548c\u53bb\u7578\u53d8\uff0c\u76f8\u673a\u5185\u5916\u53c2\u5728config/stereo.yaml\u6587\u4ef6\u5185\u6307\u5b9a"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stereo_combine_mode"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 1"}),(0,t.jsx)(n.td,{children:"\u5de6\u53f3\u76ee\u56fe\u50cf\u5f80\u5f80\u62fc\u63a5\u5728\u4e00\u5f20\u56fe\u4e0a\u518d\u53d1\u5e03\u51fa\u53bb\uff0c1\u4e3a\u4e0a\u4e0b\u62fc\u63a5\uff0c0\u4e3a\u5de6\u53f3\u62fc\u63a5\uff0c\u6307\u793a\u53cc\u76ee\u7b97\u6cd5\u5982\u4f55\u62c6\u5206\u56fe\u50cf"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"height_min"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 -0.2"}),(0,t.jsx)(n.td,{children:"\u8fc7\u6ee4\u6389\u76f8\u673a\u5782\u76f4\u65b9\u5411\u4e0a\u9ad8\u5ea6\u5c0f\u4e8eheight_min\u7684\u70b9\uff0c\u5355\u4f4d\u4e3a\u7c73"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"height_max"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 999.9"}),(0,t.jsx)(n.td,{children:"\u8fc7\u6ee4\u6389\u76f8\u673a\u5782\u76f4\u65b9\u5411\u4e0a\u9ad8\u5ea6\u5927\u4e8eheight_max\u7684\u70b9\uff0c\u5355\u4f4d\u4e3a\u7c73"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"KMean"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 10"}),(0,t.jsx)(n.td,{children:"\u8fc7\u6ee4\u7a00\u758f\u79bb\u7fa4\u70b9\u65f6\u6bcf\u4e2a\u70b9\u7684\u4e34\u8fd1\u70b9\u7684\u6570\u76ee\uff0c\u7edf\u8ba1\u6bcf\u4e2a\u70b9\u4e0e\u5468\u56f4\u6700\u8fd110\u4e2a\u70b9\u7684\u8ddd\u79bb"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stdv"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 0.01"}),(0,t.jsx)(n.td,{children:"\u8fc7\u6ee4\u7a00\u758f\u79bb\u7fa4\u70b9\u65f6\u5224\u65ad\u662f\u5426\u4e3a\u79bb\u7fa4\u70b9\u7684\u9608\u503c\uff0c\u5c06\u6807\u51c6\u5dee\u7684\u500d\u6570\u8bbe\u7f6e\u4e3a0.01"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"leaf_size"}),(0,t.jsx)(n.td,{children:"\u9ed8\u8ba4 0.05"}),(0,t.jsx)(n.td,{children:"\u8bbe\u7f6e\u70b9\u4e91\u7684\u5355\u4f4d\u5bc6\u5ea6\uff0c\u8868\u793a\u534a\u5f840.05\u7c73\u7684\u4e09\u7ef4\u7403\u5185\u53ea\u6709\u4e00\u4e2a\u70b9"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u7b97\u6cd5\u8017\u65f6",children:"\u7b97\u6cd5\u8017\u65f6"}),"\n",(0,t.jsx)(n.p,{children:"\u5f53log\u7b49\u7ea7\u8bbe\u7f6e\u4e3adebug\u65f6\uff0c\u7a0b\u5e8f\u4f1a\u6253\u5370\u51fa\u7b97\u6cd5\u5404\u9636\u6bb5\u8017\u65f6\u60c5\u51b5\uff0c\u4f9b\u7528\u6237debug\u7b97\u6cd5\u6027\u80fd\u74f6\u9888\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'ros2 launch stereonet_model stereonet_model.launch.py \\\nstereo_image_topic:=/image_combine_raw stereo_combine_mode:=1 need_rectify:="True" log_level:=debug\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"stereonet_rdk",src:s(70114).A+"",width:"1593",height:"365"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u6a21\u578b\u7684\u8f93\u5165\u5c3a\u5bf8\u4e3a\u5bbd\uff1a1280\uff0c\u9ad8640\uff0c\u76f8\u673a\u53d1\u5e03\u7684\u56fe\u50cf\u5206\u8fa8\u7387\u5e94\u4e3a1280x640"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u53cc\u76ee\u76f8\u673a\u53d1\u5e03\u56fe\u50cf\u7684\u683c\u5f0f\u4e3aNV12\uff0c\u90a3\u4e48\u53cc\u76ee\u56fe\u50cf\u7684\u62fc\u63a5\u65b9\u5f0f\u5fc5\u987b\u4e3a\u4e0a\u4e0b\u62fc\u63a5"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},70114:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/consume-a497959ec81c5c736d35ffcaac6d2793.png"},67557:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image_format-60a198d42995b8f630d2b180a532eba8.png"},75297:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/stereonet_rdk-1234677116fadd715881313c16a11d88.png"},57177:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/web_depth_visual-ad535b8915689297cba81d06e869e1ea.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);