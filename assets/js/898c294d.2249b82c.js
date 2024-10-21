"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9646],{50218:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var l=s(74848),t=s(28453),r=s(93859),a=s(19365);const i={sidebar_position:2},o="5.4.2 Navigation2",u={id:"Robot_development/apps/navigation2",title:"5.4.2 Navigation2",description:"\u529f\u80fd\u4ecb\u7ecd",source:"@site/docs/05_Robot_development/04_apps/navigation2.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/navigation2",permalink:"/rdk_doc/Robot_development/apps/navigation2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/04_apps/navigation2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"5.4.1 SLAM\u5efa\u56fe",permalink:"/rdk_doc/Robot_development/apps/slam"},next:{title:"5.4.3 \u59ff\u6001\u68c0\u6d4b",permalink:"/rdk_doc/Robot_development/apps/fall_detection"}},c={},d=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:2},{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:3},{value:"\u4f7f\u7528\u4ecb\u7ecd",id:"\u4f7f\u7528\u4ecb\u7ecd",level:2},{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0-1",level:3},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"542-navigation2",children:"5.4.2 Navigation2"}),"\n","\n",(0,l.jsx)(n.h2,{id:"\u529f\u80fd\u4ecb\u7ecd",children:"\u529f\u80fd\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.p,{children:"Nav2\uff08Navigation2\uff09\u662fROS2\u4e2d\u81ea\u5e26\u7684\u5bfc\u822a\u6846\u67b6\uff0c\u65e8\u5728\u5bfb\u627e\u4e00\u79cd\u5b89\u5168\u7684\u65b9\u5f0f\u8ba9\u79fb\u52a8\u673a\u5668\u4eba\u4eceA\u70b9\u79fb\u52a8\u5230B\u70b9\u3002Nav2\u4e5f\u53ef\u4ee5\u5e94\u7528\u4e8e\u5176\u4ed6\u673a\u5668\u4eba\u5bfc\u822a\u5e94\u7528\uff0c\u4f8b\u5982\u52a8\u6001\u70b9\u8ddf\u8e2a\uff0c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u9700\u8981\u5b8c\u6210\u52a8\u6001\u8def\u5f84\u89c4\u5212\u3001\u8ba1\u7b97\u7535\u673a\u901f\u5ea6\u3001\u907f\u514d\u969c\u788d\u7b49\u3002"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"./slam",children:"SLAM\u5efa\u56fe"}),"\u4ecb\u7ecd\u4e86\u5982\u4f55\u8fd0\u884cSLAM\u7b97\u6cd5\u8fdb\u884c\u5efa\u56fe\uff0c\u672c\u7ae0\u8282\u4ecb\u7ecd\u5982\u4f55\u57fa\u4e8e\u5efa\u7acb\u7684\u5730\u56fe\u4f7f\u7528Nav2\u8fdb\u884c\u5bfc\u822a\u3002\u540c\u6837\u4f7f\u7528Gazebo\u5728PC\u7aef\u521b\u5efa\u865a\u62df\u73af\u5883\u548c\u5c0f\u8f66\uff0c\u4f7f\u7528Rviz2\u8bbe\u7f6e\u5bfc\u822a\u76ee\u7684\u5730\uff0cRDK\u8fd0\u884cNav2\u7a0b\u5e8f\u5bfc\u822a\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u652f\u6301\u5e73\u53f0",children:"\u652f\u6301\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5e73\u53f0"}),(0,l.jsx)(n.th,{children:"\u8fd0\u884c\u65b9\u5f0f"}),(0,l.jsx)(n.th,{children:"\u793a\u4f8b\u529f\u80fd"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,l.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,l.jsx)(n.td,{children:"PC\u7aef\u542f\u52a8\u4eff\u771f\u73af\u5883\uff0c\u5e76\u5728RDK\u542f\u52a8\u5bfc\u822a\u529f\u80fd\uff0c\u6700\u540e\u901a\u8fc7Rviz2\u5c55\u793a\u5bfc\u822a\u6548\u679c"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u70e7\u5f55\u597dUbuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u955c\u50cf\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"RDK\u5df2\u6210\u529f\u5b89\u88c5tros.b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"tros.b\u6210\u529f\u5b89\u88c5\u540e\uff0c\u5b89\u88c5Nav2\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo apt update \nsudo apt install ros-foxy-navigation2\nsudo apt install ros-foxy-nav2-bringup\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"sudo apt update \nsudo apt install ros-humble-navigation2\nsudo apt install ros-humble-nav2-bringup\n"})})})]}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"\u548cRDK\u5728\u540c\u4e00\u7f51\u6bb5\u7684PC\uff0cPC\u5df2\u5b89\u88c5Ubuntu 20.04/Ubuntu 22.04\u7cfb\u7edf\u3001ROS2\u684c\u9762\u7248\u548c\u4eff\u771f\u73af\u5883Gazebo\uff0c\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177Rviz2\u3002"}),"\n"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsxs)(a.A,{value:"foxy",label:"Foxy",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ubuntu 20.04\u7cfb\u7edf\u548c",(0,l.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy\u684c\u9762\u7248"})]}),"\n",(0,l.jsx)(n.li,{children:"PC\u7684ROS2\u5b89\u88c5\u6210\u529f\u540e\u5b89\u88c5Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e3a\uff1a"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3*\nsudo apt install ros-foxy-navigation2\nsudo apt install ros-foxy-nav2-bringup\n"})})]}),(0,l.jsxs)(a.A,{value:"humble",label:"Humble",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Ubuntu 22.04\u7cfb\u7edf\u548c",(0,l.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble\u684c\u9762\u7248"})]}),"\n",(0,l.jsx)(n.li,{children:"PC\u7684ROS2\u5b89\u88c5\u6210\u529f\u540e\u5b89\u88c5Gazebo\u548cTurtlebot3\u76f8\u5173\u7684\u529f\u80fd\u5305\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e3a\uff1a"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3*\nsudo apt install ros-humble-navigation2\nsudo apt install ros-humble-nav2-bringup\n"})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u4f7f\u7528\u4ecb\u7ecd",children:"\u4f7f\u7528\u4ecb\u7ecd"}),"\n",(0,l.jsx)(n.h3,{id:"rdk\u5e73\u53f0-1",children:"RDK\u5e73\u53f0"}),"\n",(0,l.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u5982\u4f55\u5728PC\u7aef\u642d\u5efa\u4eff\u771f\u73af\u5883\uff0c\u4ee5\u53ca\u8fdb\u884c\u5bfc\u822a\u76ee\u7684\u5730\u8bbe\u7f6e\uff0cRDK\u8fd0\u884c\u5bfc\u822a\u529f\u80fd\uff0c\u5e76\u67e5\u770b\u5bfc\u822a\u6548\u679c\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"PC\u7aef"}),"\u542f\u52a8gazebo\u4eff\u771f\u73af\u5883"]}),"\n"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"export TURTLEBOT3_MODEL=waffle\nros2 launch turtlebot3_gazebo turtlebot3_world.launch.py\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4eff\u771f\u73af\u5883\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(2813).A+"",width:"1922",height:"1082"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"RDK"}),"\u542f\u52a8\u5bfc\u822a\u529f\u80fd"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/setup.bash\nros2 launch nav2_bringup bringup_launch.py use_sim_time:=True map:=/opt/ros/foxy/share/nav2_bringup/maps/turtlebot3_world.yaml\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u914d\u7f6etros.b\u73af\u5883\nsource /opt/tros/humble/setup.bash\nros2 launch nav2_bringup bringup_launch.py use_sim_time:=True map:=/opt/ros/humble/share/nav2_bringup/maps/turtlebot3_world.yaml\n"})})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"PC\u7aef"}),"\u542f\u52a8Rviz2\u5de5\u5177"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(r.A,{groupId:"tros-distro",children:[(0,l.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,l.jsx)(a.A,{value:"humble",label:"Humble",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ros2 launch nav2_bringup rviz_launch.py\n"})}),"\n",(0,l.jsx)(n.p,{children:"Rviz2\u6548\u679c\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(81070).A+"",width:"1922",height:"1082"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728Rviz2\u4e0a\u8bbe\u7f6e\u673a\u5668\u4eba\u8d77\u59cb\u4f4d\u7f6e\u548c\u65b9\u5411"}),"\n",(0,l.jsx)(n.p,{children:'Rviz2\u542f\u52a8\u540e\uff0c\u673a\u5668\u4eba\u6700\u521d\u4e0d\u77e5\u9053\u5b83\u5728\u54ea\u91cc\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cNav2\u4f1a\u7b49\u5f85\u7528\u6237\u7ed9\u673a\u5668\u4eba\u4e00\u4e2a\u5927\u81f4\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002\u67e5\u770b\u673a\u5668\u4eba\u5728Gazebo\u4e2d\u7684\u4f4d\u7f6e\uff0c\u5e76\u5728\u5730\u56fe\u4e0a\u627e\u5230\u8be5\u4f4d\u7f6e\u3002\u901a\u8fc7\u70b9\u51fbRviz2\u4e2d\u7684"2D Pose Estimate" \u6309\u94ae\uff0c\u7136\u540e\u901a\u8fc7\u5728\u5730\u56fe\u4e0a\u673a\u5668\u4eba\u9884\u4f30\u7684\u4f4d\u7f6e\u5904\u70b9\u51fb\u6765\u8bbe\u7f6e\u673a\u5668\u4eba\u521d\u59cb\u4f4d\u7f6e \u3002\u53ef\u4ee5\u901a\u8fc7\u5411\u524d\u62d6\u52a8\u521a\u624d\u5355\u51fb\u7684\u4f4d\u7f6e\u6765\u8bbe\u7f6e\u673a\u5668\u4eba\u8d77\u59cb\u7684\u79fb\u52a8\u65b9\u5411\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a'}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(15029).A+"",width:"1922",height:"1082"})}),"\n",(0,l.jsx)(n.p,{children:"\u4e00\u65e6\u8bbe\u7f6e\u597d\u4e86\u673a\u5668\u4eba\u7684\u521d\u59cb\u4f4d\u7f6e\uff0c\u5c31\u4f1a\u5b8c\u6210\u5750\u6807\u53d8\u6362\u6811\uff0c\u540c\u65f6Nav2\u5c06\u4f1a\u5b8c\u5168\u6fc0\u6d3b\u5e76\u51c6\u5907\u5c31\u7eea\u3002\u8fd9\u65f6\u5c31\u53ef\u4ee5\u770b\u5230\u673a\u5668\u4eba\u548c\u70b9\u4e91\u4e86\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(1983).A+"",width:"1922",height:"1082"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Rviz2\u8bbe\u7f6e\u76ee\u7684\u5730"}),"\n",(0,l.jsx)(n.p,{children:'\u70b9\u51fb "Navigaton2 Goal" \u6309\u94ae\u5e76\u9009\u62e9\u4e00\u4e2a\u76ee\u7684\u5730\u3002'}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(60858).A+"",width:"1922",height:"1082"})}),"\n",(0,l.jsx)(n.p,{children:"\u73b0\u5728\u5c31\u53ef\u4ee5\u770b\u5230\u673a\u5668\u4eba\u5728\u79fb\u52a8\u4e86\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,l.jsx)(n.p,{children:"\u5bfc\u822a\u6548\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(24795).A+"",width:"992",height:"480"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var l=s(34164);const t={tabItem:"tabItem_Ymn6"};var r=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,a),hidden:s,children:n})}},93859:(e,n,s)=>{s.d(n,{A:()=>_});var l=s(96540),t=s(34164),r=s(86641),a=s(56347),i=s(205),o=s(38874),u=s(24035),c=s(82993);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:l,default:t}}=e;return{value:n,label:s,attributes:l,default:t}}))}(s);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=h(e),[a,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=s.find((e=>e.default))??s[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[u,d]=b({queryString:s,groupId:t}),[x,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Dv)(s);return[t,(0,l.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),g=(()=>{const e=u??x;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&o(g)}),[g]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=s(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function v(e){let{className:n,block:s,selectedValue:l,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,s=o.indexOf(n),t=i[s].value;t!==l&&(u(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,t.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(f,{...n,...e})]})}function _(e){const n=(0,m.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},2813:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/gazebo-19f341a0f2fa28c798d10c7a549e6c01.png"},81070:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/rviz-0e6f03e80e5bca6bf1910affe2bd333e.png"},60858:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/rviz_goal-355c80e616d7f802727e793ca40f7e5b.png"},15029:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/rviz_init-27f69643ccdbfaf4b2c320110a6e2fcf.png"},24795:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/rviz_nav2-c7e9a9473be4c40887d475c8906115ca.gif"},1983:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/rviz_start-cc27d087079ca85b9cd21c7c2df989aa.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var l=s(96540);const t={},r=l.createContext(t);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);