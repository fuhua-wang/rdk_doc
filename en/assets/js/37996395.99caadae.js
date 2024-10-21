"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9876],{28260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(74848),r=n(28453),a=n(93859),s=n(19365);const i={sidebar_position:3},c="5.2.3 Image Codec",l={id:"Robot_development/quick_demo/hobot_codec",title:"5.2.3 Image Codec",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/02_quick_demo/hobot_codec.md",sourceDirName:"05_Robot_development/02_quick_demo",slug:"/Robot_development/quick_demo/hobot_codec",permalink:"/rdk_doc/en/Robot_development/quick_demo/hobot_codec",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/02_quick_demo/hobot_codec.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5.2.2 Display",permalink:"/rdk_doc/en/Robot_development/quick_demo/demo_render"},next:{title:"5.2.4 Image Processing Acceleration",permalink:"/rdk_doc/en/Robot_development/quick_demo/demo_cv"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"Important notes:",id:"important-notes",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"523-image-codec",children:"5.2.3 Image Codec"}),"\n","\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"The image codec functionality is similar to the ROS image_transport package. The RDK utilizes hardware acceleration to convert between the MJPEG/H264/H265 and BGR8/RGB8/NV12 formats, which significantly reduces CPU usage while improving conversion efficiency."}),"\n",(0,o.jsxs)(t.p,{children:["Code repository:  (",(0,o.jsx)(t.a,{href:"https://github.com/D-Robotics/hobot_codec",children:"https://github.com/D-Robotics/hobot_codec"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Platform"}),(0,o.jsx)(t.th,{children:"System"}),(0,o.jsx)(t.th,{children:"Function"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"RDK X3, RDK X3 Module, RDK X5"}),(0,o.jsx)(t.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(t.td,{children:"Start MIPI camera to capture images, encode them, and display them via Web"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(t.h3,{id:"rdk",children:"RDK"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"The RDK has been flashed with the  Ubuntu 20.04/22.04 system image provided by D-Robotics."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"TogetheROS.Bot has been successfully installed on the RDK."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"The RDK has been connected to a camera, such as the F37 or other MIPI cameras."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.p,{children:"Taking JPEG encoding as an example, this section explains how to obtain NV12 format image data from a camera or image publishing tool, compress and encode it as JPEG, and preview the image on a PC via web."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Obtain YUV data and start JPEG encoding:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"RDK"})}),"\n",(0,o.jsxs)(t.p,{children:["Log in to the RDK via SSH and use ",(0,o.jsx)(t.code,{children:"mipi_cam"})," as the data source. Configure ",(0,o.jsx)(t.code,{children:"hobot_codec"})," to input NV12 format and output JPEG format. Modify ",(0,o.jsx)(t.code,{children:"mipi_cam"})," to the actual sensor model being used."]}),"\n",(0,o.jsxs)(t.p,{children:["a. Start ",(0,o.jsx)(t.code,{children:"mipi_cam"})]}),"\n",(0,o.jsxs)(a.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"ros2 launch mipi_cam mipi_cam.launch.py mipi_video_device:=F37\n"})}),"\n",(0,o.jsx)(t.p,{children:"b. Launch the hobot_codec encoder"}),"\n",(0,o.jsxs)(a.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"ros2 launch hobot_codec hobot_codec.launch.py codec_in_mode:=shared_mem codec_in_format:=nv12 codec_out_mode:=ros codec_out_format:=jpeg codec_sub_topic:=/hbmem_img codec_pub_topic:=/image_jpeg\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"To view the JPEG encoded images on the web interface, open another terminal:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"ros2 launch websocket websocket.launch.py websocket_image_topic:=/image_jpeg websocket_only_show_image:=true\n"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Open a web browser (Chrome/Firefox/Edge) on your PC and enter  ",(0,o.jsx)(t.code,{children:"http://IP:8000"}),". Replace the IP address of the RDK. Click on the Web at the top left to view the real-time JPEG encoded image."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"web-f37-codec",src:n(24978).A+"",title:"Real-time image",width:"1862",height:"941"})}),"\n",(0,o.jsx)(t.h2,{id:"important-notes",children:"Important notes:"}),"\n",(0,o.jsx)(t.p,{children:"If you encounter an abnormal startup of the Hobot codec node, you can troubleshoot the problem by following these steps:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Check if the tros.b environment is set."}),"\n",(0,o.jsx)(t.li,{children:"Verify if the parameters are correct, please refer to the Hobot_codec README.md for details."}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var o=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:n,children:t})}},93859:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(96540),r=n(34164),a=n(86641),s=n(56347),i=n(205),c=n(38874),l=n(24035),d=n(82993);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[s,c]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,u]=p({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=l??b;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=i[n].value;r!==o&&(l(t),s(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(_,{...e,children:u(e.children)},String(t))}},24978:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/web-f37-codec-7bef9ef64c1ec1b4df6bd6161d9a0507.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);