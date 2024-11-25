"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2238],{69886:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=t(74848),s=t(28453),i=t(93859),o=t(19365);const r={sidebar_position:2},l="5.4.2 Navigation2",c={id:"Robot_development/apps/navigation2",title:"5.4.2 Navigation2",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/04_apps/navigation2.md",sourceDirName:"05_Robot_development/04_apps",slug:"/Robot_development/apps/navigation2",permalink:"/rdk_doc/en/Robot_development/apps/navigation2",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/04_apps/navigation2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"5.4.1 SLAM",permalink:"/rdk_doc/en/Robot_development/apps/slam"},next:{title:"5.4.3 Pose Detection",permalink:"/rdk_doc/en/Robot_development/apps/fall_detection"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"User Guide",id:"user-guide",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Result Analysis",id:"result-analysis",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"542-navigation2",children:"5.4.2 Navigation2"}),"\n","\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Nav2 (Navigation2) is a built-in navigation framework in ROS2, aimed at finding a safe way for a mobile robot to move from point A to point B. Nav2 can also be applied to other robot navigation applications, such as dynamic point tracking, which requires dynamic path planning, motor speed calculation, and obstacle avoidance."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"./slam",children:"SLAM Mapping"})," explains how to run SLAM algorithms for mapping. This section introduces how to use Nav2 for navigation based on the created map. Similarly, use Gazebo on the PC to create a virtual environment and a car, use Rviz2 to set the navigation destination, and run the Nav2 program for navigation using the RDK."]}),"\n",(0,a.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Platform"}),(0,a.jsx)(n.th,{children:"Execution"}),(0,a.jsx)(n.th,{children:"Function"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,a.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,a.jsx)(n.td,{children:"Start the simulation environment on the PC and start the navigation function on the RDK, and finally display the navigation effect through Rviz2"})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The RDK has been flashed with the  Ubuntu 20.04/22.04 image provided by D-Robotics."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The RDK has successfully installed tros.b."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"After tros.b is successfully installed, install Nav2."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo apt update \nsudo apt install ros-foxy-navigation2\nsudo apt install ros-foxy-nav2-bringup\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo apt update \nsudo apt install ros-humble-navigation2\nsudo apt install ros-humble-nav2-bringup\n"})})})]}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"The PC on the same network segment as the RDK has installed Ubuntu 20.04/22.04 system, ROS2 desktop version, simulation environment Gazebo, and data visualization tool Rviz2."}),"\n"]}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsxs)(o.A,{value:"foxy",label:"Foxy",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Ubuntu 20.04 system and ",(0,a.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy Desktop Full"})]}),"\n",(0,a.jsx)(n.li,{children:"Gazebo and Turtlebot3 related packages. Installation commands:"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-foxy-gazebo-*\nsudo apt install ros-foxy-turtlebot3*\nsudo apt install ros-foxy-navigation2\nsudo apt install ros-foxy-nav2-bringup\n"})})]}),(0,a.jsxs)(o.A,{value:"humble",label:"Humble",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Ubuntu 22.04 system and ",(0,a.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble Desktop Full"})]}),"\n",(0,a.jsx)(n.li,{children:"Gazebo and Turtlebot3 related packages. Installation commands:"}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install ros-humble-gazebo-*\nsudo apt install ros-humble-turtlebot3*\nsudo apt install ros-humble-navigation2\nsudo apt install ros-humble-nav2-bringup\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"user-guide",children:"User Guide"}),"\n",(0,a.jsx)(n.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,a.jsx)(n.p,{children:"This section describes how to set up a simulation environment on the PC, how to set the navigation destination, and how to run the navigation function with RDK and view the navigation result."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Start the gazebo simulation environment on the ",(0,a.jsx)(n.strong,{children:"PC"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"export TURTLEBOT3_MODEL=waffle\nros2 launch turtlebot3_gazebo turtlebot3_world.launch.py\n"})}),"\n",(0,a.jsx)(n.p,{children:"The simulation environment is shown in the following image:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(96238).A+"",width:"1922",height:"1082"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Start the navigation function on the ",(0,a.jsx)(n.strong,{children:"RDK"}),"."]}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/setup.bash\nros2 launch nav2_bringup bringup_launch.py use_sim_time:=True map:=/opt/ros/foxy/share/nav2_bringup/maps/turtlebot3_world.yaml\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\nros2 launch nav2_bringup bringup_launch.py use_sim_time:=True map:=/opt/ros/humble/share/nav2_bringup/maps/turtlebot3_world.yaml\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Start the Rviz2 tool on the ",(0,a.jsx)(n.strong,{children:"PC"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/foxy/setup.bash\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"source /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ros2 launch nav2_bringup rviz_launch.py\n"})}),"\n",(0,a.jsx)(n.p,{children:"The Rviz2 interface is shown in the following image:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(74797).A+"",width:"1922",height:"1082"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set the initial position and orientation of the robot in Rviz2."}),"\n",(0,a.jsx)(n.p,{children:'After Rviz2 is launched, the robot does not know where it is initially. By default, Nav2 waits for the user to provide an approximate initial position for the robot. Refer to the robot\'s position in Gazebo and find that position on the map. Set the initial position of the robot by clicking the "2D Pose Estimate" button in Rviz2 and then clicking on the estimated position of the robot on the map. The initial movement direction of the robot can be set by dragging the clicked position forward. The process is shown in the following image:'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(60672).A+"",width:"1922",height:"1082"})}),"\n",(0,a.jsx)(n.p,{children:"Once the initial position of the robot is set, the coordinate transformation tree will be established and Nav2 will be fully activated and ready. The robot and point cloud can be seen at this time."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(12260).A+"",width:"1922",height:"1082"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Set the destination in Rviz2."}),"\n",(0,a.jsx)(n.p,{children:'Click the "Navigation2 Goal" button and select a destination.Here is the translation of the Chinese parts in the content, while preserving the original format and content:'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(89667).A+"",width:"1922",height:"1082"})}),"\n",(0,a.jsx)(n.p,{children:"Now you can see the robot is moving."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,a.jsx)(n.p,{children:"The navigation effect is shown in the figure below:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(61366).A+"",width:"992",height:"480"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),s=t(34164),i=t(86641),o=t(56347),r=t(205),l=t(38874),c=t(24035),u=t(82993);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=b({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function f(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=r[t].value;s!==a&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},96238:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/gazebo-19f341a0f2fa28c798d10c7a549e6c01.png"},74797:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/rviz-0e6f03e80e5bca6bf1910affe2bd333e.png"},89667:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/rviz_goal-355c80e616d7f802727e793ca40f7e5b.png"},60672:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/rviz_init-27f69643ccdbfaf4b2c320110a6e2fcf.png"},61366:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/rviz_nav2-c7e9a9473be4c40887d475c8906115ca.gif"},12260:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/rviz_start-cc27d087079ca85b9cd21c7c2df989aa.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);