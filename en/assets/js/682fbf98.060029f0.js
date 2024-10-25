"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8662],{21180:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var a=t(74848),s=t(28453),i=t(93859),l=t(19365);const r={sidebar_position:1},o="mobilenet_unet",u={id:"Robot_development/boxs/segmentation/mobilenet_unet",title:"mobilenet_unet",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/03_boxs/segmentation/mobilenet_unet.md",sourceDirName:"05_Robot_development/03_boxs/segmentation",slug:"/Robot_development/boxs/segmentation/mobilenet_unet",permalink:"/rdk_doc/en/Robot_development/boxs/segmentation/mobilenet_unet",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/03_boxs/segmentation/mobilenet_unet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"mobilenetv2",permalink:"/rdk_doc/en/Robot_development/boxs/classification/mobilenetv2"},next:{title:"YOLOv8-Seg",permalink:"/rdk_doc/en/Robot_development/boxs/segmentation/yolov8_seg"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Use the Camera to Publish Images",id:"use-the-camera-to-publish-images",level:4},{value:"Use a MIPI Camera to Publish Images",id:"use-a-mipi-camera-to-publish-images",level:5},{value:"Use a USB Camera to Publish Images",id:"use-a-usb-camera-to-publish-images",level:5},{value:"Use local images offline",id:"use-local-images-offline",level:4},{value:"Analysis of Results",id:"analysis-of-results",level:2},{value:"Use a Camera to Publishing Images",id:"use-a-camera-to-publishing-images",level:3},{value:"Use Local Images Offline",id:"use-local-images-offline-1",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"mobilenet_unet",children:"mobilenet_unet"}),"\n","\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"The mobilenet_unet segmentation algorithm example uses images as input and performs algorithm inference using BPU. It publishes segmentation result messages."}),"\n",(0,a.jsxs)(n.p,{children:["The mobilenet_unet model is trained on the ",(0,a.jsx)(n.a,{href:"https://www.cityscapes-dataset.com/",children:"Cityscapes"})," dataset and the Onnx model. It supports segmentation of categories such as humans, vehicles, road surfaces, and road signs."]}),"\n",(0,a.jsxs)(n.p,{children:["Code repository:  (",(0,a.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_dnn",children:"https://github.com/D-Robotics/hobot_dnn"}),")"]}),"\n",(0,a.jsx)(n.p,{children:"Applications: mobilenet_unet, composed of MobileNet and UNet, can segment images at the pixel level. It can be used for road recognition, remote sensing map analysis, medical image diagnosis, and other functions. It is mainly applied in the fields of autonomous driving, geological detection, and medical image analysis."}),"\n",(0,a.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Platform"}),(0,a.jsx)(n.th,{children:"System"}),(0,a.jsx)(n.th,{children:"Function"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,a.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,a.jsx)(n.td,{children:"- Start MIPI/USB cameras or local image and save the rendered results offline."})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The RDK platform has been flashed with the provided  Ubuntu 20.04/22.04 system image."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"TogetheROS.Bot has been successfully installed on the RDK platform."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"A MIPI or USB camera has been installed on the RDK platform. If there is no camera available, the algorithm's effects can be experienced by using local JPEG/PNG images offline."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,a.jsx)(n.h4,{id:"use-the-camera-to-publish-images",children:"Use the Camera to Publish Images"}),"\n",(0,a.jsx)(n.h5,{id:"use-a-mipi-camera-to-publish-images",children:"Use a MIPI Camera to Publish Images"}),"\n",(0,a.jsxs)(n.p,{children:["The mobilenet_unet segmentation example subscribes to images published by the sensor package. After inference, it publishes algorithm messages and saves the rendered images automatically in the running directory. The saved images are named in the format of ",(0,a.jsx)(n.code,{children:"render_frameid_timestampInSeconds_timestampInNanoseconds.jpg"}),"."]}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,a.jsx)(l.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Configuring MIPI camera\nexport CAM_TYPE=mipi\n\n# Start the launch file\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_dump_render_img:=1 dnn_example_config_file:=config/mobilenet_unet_workconfig.json dnn_example_image_width:=1920 dnn_example_image_height:=1080\n"})}),"\n",(0,a.jsx)(n.h5,{id:"use-a-usb-camera-to-publish-images",children:"Use a USB Camera to Publish Images"}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,a.jsx)(l.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Configuring USB camera\nexport CAM_TYPE=usb\n\n# Start the launch file\nros2 launch dnn_node_example dnn_node_example.launch.py dnn_example_dump_render_img:=1 dnn_example_config_file:=config/mobilenet_unet_workconfig.json dnn_example_image_width:=1920 dnn_example_image_height:=1080\n"})}),"\n",(0,a.jsx)(n.h4,{id:"use-local-images-offline",children:"Use local images offline"}),"\n",(0,a.jsx)(n.p,{children:"The mobilenet_unet segmentation example uses local JPEG/PNG format images for feedback. After inference, the rendered images of the algorithm results are stored in the local running path."}),"\n",(0,a.jsxs)(i.A,{groupId:"tros-distro",children:[(0,a.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,a.jsx)(l.A,{value:"humble",label:"Humble",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"# Start the launch file\nros2 launch dnn_node_example dnn_node_example_feedback.launch.py dnn_example_config_file:=config/mobilenet_unet_workconfig.json dnn_example_image:=config/raw_unet.jpg\n"})}),"\n",(0,a.jsx)(n.h2,{id:"analysis-of-results",children:"Analysis of Results"}),"\n",(0,a.jsx)(n.h3,{id:"use-a-camera-to-publishing-images",children:"Use a Camera to Publishing Images"}),"\n",(0,a.jsx)(n.p,{children:"The output shows the following information:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"[example-3] [WARN] [1655095719.035374293] [example]: Create ai msg publisher with topic_name: hobot_dnn_detection\n[example-3] [WARN] [1655095719.035493746] [example]: Create img hbmem_subscription with topic_name: /hbmem_img\n[example-3] [WARN] [1655095720.693716453] [img_sub]: Sub img fps 6.85\n[example-3] [WARN] [1655095721.072909861] [example]: Smart fps 5.85\n[example-3] [WARN] [1655095721.702680885] [img_sub]: Sub img fps 3.97\n[example-3] [WARN] [1655095722.486407545] [example]: Smart fps 3.54\n[example-3] [WARN] [1655095722.733431396] [img_sub]: Sub img fps 4.85\n[example-3] [WARN] [1655095723.888407681] [example]: Smart fps 4.28\n[example-3] [WARN] [1655095724.069835983] [img_sub]: Sub img fps 3.74\n[example-3] [WARN] [1655095724.900725522] [example]: Smart fps 3.95\n[example-3] [WARN] [1655095725.093525634] [img_sub]: Sub img fps 3.91\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The log output shows that the topic used for publishing the algorithm inference results is ",(0,a.jsx)(n.code,{children:"hobot_dnn_detection"}),", and the topic used for subscribing to the images is ",(0,a.jsx)(n.code,{children:"/hbmem_img"}),". The frame rate at which the images are published will adapt according to the algorithm inference output frame rate. Additionally, rendering the semantic segmentation results on the RDK and saving the images in the running path will cause a decrease in frame rate."]}),"\n",(0,a.jsxs)(n.p,{children:["Original image:\n",(0,a.jsx)(n.img,{alt:"raw",src:t(50543).A+"",width:"2400",height:"1600"})]}),"\n",(0,a.jsxs)(n.p,{children:["Rendered image:\n",(0,a.jsx)(n.img,{alt:"render_web",src:t(44714).A+"",width:"2048",height:"1024"})]}),"\n",(0,a.jsx)(n.h3,{id:"use-local-images-offline-1",children:"Use Local Images Offline"}),"\n",(0,a.jsx)(n.p,{children:"The output shows the following information:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"[example-1] [INFO] [1654769881.171005839] [dnn]: The model input 0 width is 2048 and height is 1024\n[example-1] [INFO] [1654769881.171129709] [example]: Set output parser.\n[example-1] [INFO] [1654769881.171206707] [UnetPostProcess]: Set out parser\n[example-1] [INFO] [1654769881.171272663] [dnn]: Task init.\n[example-1] [INFO] [1654769881.173427170] [dnn]: Set task_num [2]\n[example-1] [INFO] [1654769881.173587414] [example]: The model input width is 2048 and height is 1024\n[example-1] [INFO] [1654769881.173646870] [example]: Dnn node feed with local image: config/raw_unet.jpeg\n[example-1] [INFO] [1654769881.750748126] [example]: task_num: 2\n[example-1] [INFO] [1654769881.933418736] [example]: Output from image_name: config/raw_unet.jpeg, frame_id: feedback, stamp: 0.0\n[example-1] [INFO] [1654769881.933542440] [UnetPostProcess]: outputs size: 1\n[example-1] [INFO] [1654769881.995920396] [UnetPostProcess]: Draw result to file: render_unet_feedback_0_0.jpeg\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The log shows that the algorithm performs inference using the input image ",(0,a.jsx)(n.code,{children:"config/raw_unet.jpeg"}),", and the rendered image is stored with the file ",(0,a.jsx)(n.code,{children:"render_unet_feedback_0_0.jpeg"}),". The rendered image looks like this:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"render_feedback",src:t(85683).A+"",width:"2048",height:"1024"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(96540),s=t(34164),i=t(86641),l=t(56347),r=t(205),o=t(38874),u=t(24035),d=t(82993);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,c]=p({queryString:t,groupId:s}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=u??g;return h({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,i]),tabValues:i}}var b=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function _(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=r[t].value;s!==a&&(u(n),l(s))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:c,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,x.jsx)(_,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,x.jsx)(v,{...e,children:c(e.children)},String(n))}},50543:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/mobilenet_unet_raw-83aac110941b5f0ffaf7a3254b9617b1.jpeg"},85683:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/mobilenet_unet_render_feedback-442d05e3e8ff9190cf3b4f183e10fd93.jpeg"},44714:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/mobilenet_unet_render_web-442d05e3e8ff9190cf3b4f183e10fd93.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var a=t(96540);const s={},i=a.createContext(s);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);