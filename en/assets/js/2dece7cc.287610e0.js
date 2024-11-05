"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4783],{24271:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=n(74848),i=n(28453),s=n(93859),r=n(19365);const a={sidebar_position:14},l="Segment Anything",c={id:"Robot_development/boxs/function/mono_mobilesam",title:"Segment Anything",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/function/mono_mobilesam.md",sourceDirName:"05_Robot_development/03_boxs/function",slug:"/Robot_development/boxs/function/mono_mobilesam",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono_mobilesam",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/function/mono_mobilesam.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"hobot_stereonet",permalink:"/rdk_doc/en/Robot_development/boxs/function/hobot_stereonet"},next:{title:"Optical Flow Estimation",permalink:"/rdk_doc/en/Robot_development/boxs/function/mono_pwcnet"}},m={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Result Analysis",id:"result-analysis",level:2},{value:"Advance",id:"advance",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"segment-anything",children:"Segment Anything"}),"\n","\n",(0,t.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(o.p,{children:"The mono mobile sam package is a usage example based on Mobile SAM quantification deployment. The image data comes from local image feedback and subscribed image msg. SAM relies on the input of the detection box for segmentation, and segments the targets in the detection box without specifying the category information of the targets, only providing the box. The algorithm information will be published through topics and the results will be rendered and visualized on the web page. It also supports saving the rendered images in the result directory during program execution."}),"\n",(0,t.jsx)(o.p,{children:"In this example, we provide two deployment methods:\n-Regular box for segmentation: A detection box in the center of the image is fixed for segmentation.\n-Subscription box for segmentation: Subscribe to the detection box information output by the upstream detection network and segment the information in the box."}),"\n",(0,t.jsxs)(o.p,{children:["Code repository:  (",(0,t.jsx)(o.a,{href:"https://github.com/D-Robotics/mono_mobilesam.git",children:"https://github.com/D-Robotics/mono_mobilesam.git"}),")"]}),"\n",(0,t.jsx)(o.p,{children:"Application scenario: Combining detection boxes for obstacle segmentation, water stain area segmentation, etc."}),"\n",(0,t.jsx)(o.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Platform"}),(0,t.jsx)(o.th,{children:"System"}),(0,t.jsx)(o.th,{children:"Function"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"RDK X5"}),(0,t.jsx)(o.td,{children:"Ubuntu 22.04 (Humble)"}),(0,t.jsx)(o.td,{children:"Start MIPI/USB camera/local image offline, inference rendering results displayed/saved locally on the Web"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"preparation",children:"Preparation"}),"\n",(0,t.jsx)(o.h3,{id:"rdk",children:"RDK"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"The RDK has burned the  Ubuntu 22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"The RDK has successfully installed TogetheROS.Bot."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o.p,{children:"The package publishes algorithm messages that include semantic segmentation and object detection information, and users can subscribe to these messages for application development."}),"\n",(0,t.jsx)(o.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Publishing images from MIPI camera"})}),"\n",(0,t.jsx)(s.A,{groupId:"tros-distro",children:(0,t.jsx)(r.A,{value:"humble",label:"Humble",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono_mobilesam/config/ .\n\n# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch mono_mobilesam sam.launch.py \n"})})})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Publishing images from USB camera"})}),"\n",(0,t.jsx)(s.A,{groupId:"tros-distro",children:(0,t.jsx)(r.A,{value:"humble",label:"Humble",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono_mobilesam/config/ .\n\n# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch mono_mobilesam sam.launch.py \n"})})})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Using a single image offline"})}),"\n",(0,t.jsx)(s.A,{groupId:"tros-distro",children:(0,t.jsx)(r.A,{value:"humble",label:"Humble",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n\n# Copy the configuration file required for running the example from the installation path of tros.b.\ncp -r /opt/tros/${TROS_DISTRO}/lib/mono_mobilesam/config/ .\n\n# Configure the local playback image.\nexport CAM_TYPE=fb\n\n# Start the launch file\nros2 launch mono_mobilesam sam.launch.py \n"})})})}),"\n",(0,t.jsx)(o.h2,{id:"result-analysis",children:"Result Analysis"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Using a MIPI camera to publish images"})}),"\n",(0,t.jsx)(o.p,{children:"After the package is initialized, the following information will be displayed in the terminal:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"[INFO] [launch]: All log files can be found below .ros/log/1970-01-02-22-39-09-001251-buildroot-22955\n[INFO] [hobot_codec_republish-2]: process started with pid [22973]\n[INFO] [mono_mobilesam-3]: process started with pid [22975]\n[INFO] [websocket-4]: process started with pid [22977]\n[hobot_codec_republish-2] [WARN] [0000167949.975123376] [HobotCodec]: This is HobotCodecNode: hobot_codec_22973.\n[hobot_codec_republish-2] [WARN] [0000167950.040208542] [HobotCodecNode]: Parameters:\n[hobot_codec_republish-2] sub_topic: /image\n[hobot_codec_republish-2] pub_topic: /hbmem_img\n[hobot_codec_republish-2] channel: 1\n[hobot_codec_republish-2] in_mode: ros\n[hobot_codec_republish-2] out_mode: shared_mem\n[hobot_codec_republish-2] in_format: jpeg\n[hobot_codec_republish-2] out_format: nv12\n[hobot_codec_republish-2] enc_qp: 10\n[hobot_codec_republish-2] jpg_quality: 60\n[hobot_codec_republish-2] input_framerate: 30\n[hobot_codec_republish-2] output_framerate: -1\n[hobot_codec_republish-2] dump_output: 0\n[hobot_codec_republish-2] [WARN] [0000167950.050887417] [HobotCodecImpl]: platform x5\n[websocket-4] [WARN] [0000167950.068235417] [websocket]:\n[websocket-4] Parameter:\n[websocket-4]  image_topic: /image\n[websocket-4]  image_type: mjpeg\n[websocket-4]  only_show_image: 0\n[websocket-4]  smart_topic: hobot_sam\n[websocket-4]  output_fps: 0\n[mono_mobilesam-3] [WARN] [0000167950.510756918] [mono_mobilesam]: Parameter:\n[mono_mobilesam-3]  cache_len_limit: 8\n[mono_mobilesam-3]  dump_render_img: 0\n[mono_mobilesam-3]  feed_type(0:local, 1:sub): 1\n[mono_mobilesam-3]  image: config/00131.jpg\n[mono_mobilesam-3]  is_regular_box: 1\n[mono_mobilesam-3]  is_shared_mem_sub: 1\n[mono_mobilesam-3]  is_sync_mode: 0\n[mono_mobilesam-3]  ai_msg_pub_topic_name: /hobot_sam\n[mono_mobilesam-3]  ai_msg_sub_topic_name: /hobot_dnn_detection\n[mono_mobilesam-3]  ros_img_sub_topic_name: /image\n[mono_mobilesam-3] [BPU_PLAT]BPU Platform Version(1.3.6)!\n[mono_mobilesam-3] [HBRT] set log level as 0. version = 3.15.52.0\n[mono_mobilesam-3] [DNN] Runtime version = 1.23.9_(3.15.52 HBRT)\n[mono_mobilesam-3] [A][DNN][packed_model.cpp:247][Model](1970-01-02,22:39:10.889.592) [HorizonRT] The model builder version = 1.23.5\n[mono_mobilesam-3] [W][DNN]bpu_model_info.cpp:491][Version](1970-01-02,22:39:11.25.90) Model: mobilesam_encoder_384_all_BPU. Inconsistency between the hbrt library version 3.15.52.0 and the model build version 3.15.47.0 detected, in order to ensure correct model results, it is recommended to use compilation tools and the BPU SDK from the same OpenExplorer package.\n[mono_mobilesam-3] [A][DNN][packed_model.cpp:247][Model](1970-01-02,22:39:11.239.603) [HorizonRT] The model builder version = 1.23.5\n[mono_mobilesam-3] [WARN] [0000167951.353811293] [mono_mobilesam]: Create hbmem_subscription with topic_name: /hbmem_img\n[mono_mobilesam-3] [W][DNN]bpu_model_info.cpp:491][Version](1970-01-02,22:39:11.318.569) Model: mobilesam_decoder_384. Inconsistency between the hbrt library version 3.15.52.0 and the model build version 3.15.47.0 detected, in order to ensure correct model results, it is recommended to use compilation tools and the BPU SDK from the same OpenExplorer package.\n[mono_mobilesam-3] [WARN] [0000167951.606431085] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 43, infer time ms: 152, post process time ms: 24\n[mono_mobilesam-3] [WARN] [0000167951.779821293] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 36, infer time ms: 149, post process time ms: 21\n[mono_mobilesam-3] [WARN] [0000167951.952713293] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 36, infer time ms: 150, post process time ms: 22\n[mono_mobilesam-3] [WARN] [0000167952.123928377] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 37, infer time ms: 149, post process time ms: 21\n[mono_mobilesam-3] [WARN] [0000167952.295540585] [mono_mobilesam]: Smart fps: 5.00, pre process time ms: 35, infer time ms: 150, post process time ms: 21\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Using single image offline"})}),"\n",(0,t.jsxs)(o.p,{children:["The result will be rendered on web. On the PC-side browser, you can view the image and algorithm rendering effect by entering ",(0,t.jsx)(o.a,{href:"http://IP:8000",children:"http://IP:8000"})," (IP is the IP address of the RDK), and open the settings in the upper right corner of the interface."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{src:n(36118).A+"",width:"1917",height:"914"})}),"\n",(0,t.jsx)(o.h2,{id:"advance",children:"Advance"}),"\n",(0,t.jsx)(o.p,{children:"If you need to adjust the size of the detection box, you can refer to the following method for verification. What's more, the detection results of the other dnn detection node can be used as the input for Sam."}),"\n",(0,t.jsx)(o.p,{children:"Start the launch file with cancel regular box mode, sam_is_regular_box:=0."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"ros2 launch mono_mobilesam sam.launch.py sam_is_regular_box:=0\n"})}),"\n",(0,t.jsx)(o.p,{children:"Publish ai msg in another terminal."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:'ros2 topic pub /hobot_dnn_detection ai_msgs/msg/PerceptionTargets \'{"targets": [{"rois": [{"rect": {"x_offset": 96, "y_offset": 96, "width": 192, "height": 96}, "type": "anything"}]}] }\'\n'})}),"\n",(0,t.jsx)(o.p,{children:'Explanation: The topic name published here is "/hobot_dnn_detection". The starting point of the detection box is (96, 96), with a width of 192 and a height of 96. The starting and ending points of the detection box should not exceed the size of the input image. Please check while using it.'})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},19365:(e,o,n)=>{n.d(o,{A:()=>r});n(96540);var t=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function r(e){let{children:o,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,r),hidden:n,children:o})}},93859:(e,o,n)=>{n.d(o,{A:()=>y});var t=n(96540),i=n(34164),s=n(86641),r=n(56347),a=n(205),l=n(38874),c=n(24035),m=n(82993);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:o,children:n}=e;return(0,t.useMemo)((()=>{const e=o??function(e){return d(e).map((e=>{let{props:{value:o,label:n,attributes:t,default:i}}=e;return{value:o,label:n,attributes:t,default:i}}))}(n);return function(e){const o=(0,c.X)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function h(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function b(e){let{queryString:o=!1,groupId:n}=e;const i=(0,r.W6)(),s=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const o=new URLSearchParams(i.location.search);o.set(s,e),i.replace({...i.location,search:o.toString()})}),[s,i])]}function p(e){const{defaultValue:o,queryString:n=!1,groupId:i}=e,s=u(e),[r,l]=(0,t.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!h({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:s}))),[c,d]=b({queryString:n,groupId:i}),[p,_]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[i,s]=(0,m.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),f=(()=>{const e=c??p;return h({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),_(e)}),[d,_,s]),tabValues:s}}var _=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function x(e){let{className:o,block:n,selectedValue:t,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),m=e=>{const o=e.currentTarget,n=l.indexOf(o),i=a[n].value;i!==t&&(c(o),r(i))},d=e=>{let o=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;o=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;o=l[n]??l[l.length-1];break}}o?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},o),children:a.map((e=>{let{value:o,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===o?0:-1,"aria-selected":t===o,ref:e=>l.push(e),onKeyDown:d,onClick:m,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===o}),children:n??o},o)}))})}function v(e){let{lazy:o,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,o)=>(0,t.cloneElement)(e,{key:o,hidden:e.props.value!==i})))})}function j(e){const o=p(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...o,...e}),(0,g.jsx)(v,{...o,...e})]})}function y(e){const o=(0,_.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(o))}},36118:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/render_sam-58a8fd337e0d7e98ad943dcd5700cf2c.png"},28453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var t=n(96540);const i={},s=t.createContext(i);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);