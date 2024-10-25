"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5099],{76578:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var n=t(74848),i=t(28453);const r={sidebar_position:0},s="TogetheROS.Bot",d={id:"Robot_development/tros",title:"TogetheROS.Bot",description:"TogetheROS.Bot is a robot operating system launched by D-Robotics for robot manufacturers and developers. It aims to unleash the intelligent potential of robot scenarios, enabling developers and commercial customers to develop robots efficiently and conveniently, and create competitive intelligent robot products.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/tros.md",sourceDirName:"05_Robot_development",slug:"/Robot_development/tros",permalink:"/rdk_doc/en/Robot_development/tros",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/tros.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"5. \u673a\u5668\u4eba\u5e94\u7528\u5f00\u53d1",permalink:"/rdk_doc/en/Robot_development"},next:{title:"5.1.1 Environment Setup",permalink:"/rdk_doc/en/Robot_development/quick_start/preparation"}},c={},a=[{value:"Communication",id:"communication",level:2},{value:"Boxs",id:"boxs",level:2},{value:"Apps",id:"apps",level:2},{value:"Common Term Definitions",id:"common-term-definitions",level:2}];function l(e){const o={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"togetherosbot",children:"TogetheROS.Bot"}),"\n",(0,n.jsx)(o.p,{children:"TogetheROS.Bot is a robot operating system launched by D-Robotics for robot manufacturers and developers. It aims to unleash the intelligent potential of robot scenarios, enabling developers and commercial customers to develop robots efficiently and conveniently, and create competitive intelligent robot products."}),"\n",(0,n.jsx)(o.p,{children:"TogetheROS.Bot supports running on the RDK platform. The RDK platform covers all the functions shown in the diagram below, improving user algorithm development and verification efficiency, and enabling quick migration to the RDK platform."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"TROS-Diagram",src:t(7317).A+"",width:"1211",height:"628"})}),"\n",(0,n.jsxs)(o.p,{children:["The code of TogetheROS.Bot is hosted on GitHub under the D-Robotics organization link: ",(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics",children:"D-Robotics"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"communication",children:"Communication"}),"\n",(0,n.jsx)(o.p,{children:"Communication is D-Robotics's optimized and extended communication component on ROS2 Foxy/Humble version."}),"\n",(0,n.jsx)(o.p,{children:"Main Features include:"}),"\n",(0,n.jsx)(o.p,{children:"The blue sections indicate the modules optimized and added by D-Robotics, and the main features of TogetheROS.Bot are as follows:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:'Provide "hobot_sensor" to adapt to commonly used robot sensors, saving development time and focusing on core competitiveness.'}),"\n",(0,n.jsx)(o.li,{children:'Provide "hobot_dnn" to simplify on-board algorithm model inference and deployment, unlocking BPU computing power and lowering the threshold for intelligent algorithm usage.'}),"\n",(0,n.jsx)(o.li,{children:'Provide "hobot_codec" to accelerate video encoding and decoding through a combination of software and hardware, saving CPU resources and improving parallel processing capability.'}),"\n",(0,n.jsx)(o.li,{children:'Provide "hobot_cv" to enhance the performance of common computer vision operators through a combination of software and hardware, saving CPU resources and improving runtime efficiency.'}),"\n",(0,n.jsx)(o.li,{children:'Provide "hobot Render" for web-based and HDMI dynamic visualization, real-time rendering of algorithm results (limited to web-based), facilitating display and debugging.'}),"\n",(0,n.jsx)(o.li,{children:'Add "zero-copy" inter-process zero-copy communication mechanism to reduce data transmission latency and system resource consumption.'}),"\n",(0,n.jsx)(o.li,{children:"Enhance middleware software debugging and performance tuning tools, improve problem localization efficiency, and facilitate system performance optimization."}),"\n",(0,n.jsx)(o.li,{children:"Fully compatible with ROS2 Foxy/Humble version, facilitating the reuse of ROS2 toolkits and speeding up prototype verification."}),"\n",(0,n.jsx)(o.li,{children:"Support minimal and modular pruning, facilitating deployment in resource-constrained embedded products as needed."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"boxs",children:"Boxs"}),"\n",(0,n.jsx)(o.p,{children:"Boxs is an intelligent algorithm package launched by D-Robotics for robot manufacturers and developers based on TogetheROS.Bot. It aims to improve the efficiency of integrating and implementing robot intelligent algorithms based on the D-Robotics robot operating system."}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Image detection algorithms such as FCOS, YOLO, FasterRCNN, Efficientdet, Mobilenet_ssd;"}),"\n",(0,n.jsx)(o.li,{children:"Image classification models such as Mobilenet"}),"\n",(0,n.jsx)(o.li,{children:"Semantic segmentation models such as Unet"}),"\n",(0,n.jsx)(o.li,{children:"Application algorithm models such as human detection and tracking, gesture recognition, human hand keypoint detection, monocular height network, monocular 3D detection, speech processing,VIO,etc."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"apps",children:"Apps"}),"\n",(0,n.jsx)(o.p,{children:"Apps are algorithm application examples developed based on the D-Robotics robot operating system's Communication and Boxs. They aim to establish a complete chain of image input, perception, strategy, etc., demonstrate application effects, and accelerate the development efficiency of customer demos."}),"\n",(0,n.jsx)(o.h2,{id:"common-term-definitions",children:"Common Term Definitions"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Term"}),(0,n.jsx)(o.th,{children:"Definition"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"zero-copy"}),(0,n.jsx)(o.td,{children:"Inter-process zero-copy communication method"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"BPU"}),(0,n.jsx)(o.td,{children:"neural network algorithm processing unit"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"hobot dnn"}),(0,n.jsx)(o.td,{children:"Encapsulation of BPU-based model inference functionality"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"SLAM"}),(0,n.jsx)(o.td,{children:"Simultaneous Localization and Mapping"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"DOA"}),(0,n.jsx)(o.td,{children:"Direction of Arrival"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"ASR"}),(0,n.jsx)(o.td,{children:"Automatic Speech Recognition"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"TogetheROS.Bot"}),(0,n.jsx)(o.td,{children:"Together Robot Operating System for robot"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tros.b"}),(0,n.jsx)(o.td,{children:"TogetheROS.Bot abbreviation"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"RDK"}),(0,n.jsx)(o.td,{children:"Robotics Developer Kits"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"BEV"}),(0,n.jsx)(o.td,{children:"Birds Eye View"})]})]})]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7317:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/TogetheROS-9e881bcbde7520c3539a3a4165821f84.png"},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>d});var n=t(96540);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);