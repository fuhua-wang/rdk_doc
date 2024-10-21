"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[140],{56592:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(74848),n=t(28453),s=t(93859),o=t(19365);const l={sidebar_position:5},i="5.1.5 \u4f7f\u7528ROS2 package",u={id:"Robot_development/quick_start/ros_pkg",title:"5.1.5 \u4f7f\u7528ROS2 package",description:"\u524d\u63d0\uff1a\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot",source:"@site/docs/05_Robot_development/01_quick_start/ros_pkg.md",sourceDirName:"05_Robot_development/01_quick_start",slug:"/Robot_development/quick_start/ros_pkg",permalink:"/rdk_doc/Robot_development/quick_start/ros_pkg",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/01_quick_start/ros_pkg.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"5.1.4 \u8fd0\u884c\u201cHello World\u201d",permalink:"/rdk_doc/Robot_development/quick_start/hello_world"},next:{title:"5.1.6 \u7248\u672c\u53d1\u5e03\u8bb0\u5f55",permalink:"/rdk_doc/Robot_development/quick_start/changelog"}},c={},d=[{value:"\u5b89\u88c5ROS2 package",id:"\u5b89\u88c5ros2-package",level:2},{value:"1 \u6dfb\u52a0ROS apt\u6e90",id:"1-\u6dfb\u52a0ros-apt\u6e90",level:3},{value:"2 \u5b89\u88c5packages",id:"2-\u5b89\u88c5packages",level:3},{value:"\u4f7f\u7528ROS2 package",id:"\u4f7f\u7528ros2-package",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"515-\u4f7f\u7528ros2-package",children:"5.1.5 \u4f7f\u7528ROS2 package"}),"\n","\n",(0,a.jsx)(r.p,{children:"\u524d\u63d0\uff1a\u5df2\u6210\u529f\u5b89\u88c5TogetheROS.Bot"}),"\n",(0,a.jsx)(r.p,{children:"tros.b\u548cROS2 Foxy/Humble\u7248\u672c\u63a5\u53e3\u5b8c\u5168\u517c\u5bb9\uff0c\u80fd\u591f\u590d\u7528ROS2\u4e30\u5bcc\u5de5\u5177\u5305\uff0c\u8fd9\u91cc\u4ee5\u5b89\u88c5\u548c\u4f7f\u7528ROS2 image-transport\u4e3a\u4f8b\u4ecb\u7ecd\u5982\u4f55\u5728tros.b\u4e2d\u4f7f\u7528ROS package\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"\u5b89\u88c5ros2-package",children:"\u5b89\u88c5ROS2 package"}),"\n",(0,a.jsx)(r.h3,{id:"1-\u6dfb\u52a0ros-apt\u6e90",children:"1 \u6dfb\u52a0ROS apt\u6e90"}),"\n",(0,a.jsx)(r.p,{children:"\u5b89\u88c5tros.b\u65f6\uff0c\u5df2\u81ea\u52a8\u6dfb\u52a0ROS apt\u6e90\uff0c\u65e0\u9700\u624b\u52a8\u6dfb\u52a0\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u66f4\u65b0apt\u4ed3\u5e93"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"sudo apt update\n"})}),"\n",(0,a.jsx)(r.h3,{id:"2-\u5b89\u88c5packages",children:"2 \u5b89\u88c5packages"}),"\n",(0,a.jsxs)(s.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"sudo apt install ros-foxy-image-transport\nsudo apt install ros-foxy-image-transport-plugins\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"sudo apt install ros-humble-image-transport\nsudo apt install ros-humble-image-transport-plugins\n"})})})]}),"\n",(0,a.jsx)(r.h2,{id:"\u4f7f\u7528ros2-package",children:"\u4f7f\u7528ROS2 package"}),"\n",(0,a.jsx)(r.p,{children:"\u4e0eROS\u4f7f\u7528\u4e00\u6837"}),"\n",(0,a.jsxs)(s.A,{groupId:"tros-distro",children:[(0,a.jsx)(o.A,{value:"foxy",label:"Foxy",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"source /opt/tros/setup.bash\nros2 run image_transport list_transports\n"})})}),(0,a.jsx)(o.A,{value:"humble",label:"Humble",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"source /opt/tros/humble/setup.bash\nros2 run image_transport list_transports\n"})})})]}),"\n",(0,a.jsx)(r.p,{children:"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff0c\u5c55\u793a\u4e86image_transport package\u652f\u6301\u7684\u56fe\u50cf\u683c\u5f0f"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:'root@ubuntu:/opt/tros# ros2 run image_transport list_transports\nDeclared transports:\nimage_transport/compressed\nimage_transport/compressedDepth\nimage_transport/raw\nimage_transport/theora\n\nDetails:\n----------\n"image_transport/compressed"\n - Provided by package: compressed_image_transport\n - Publisher:\n      This plugin publishes a CompressedImage using either JPEG or PNG compression.\n\n - Subscriber:\n      This plugin decompresses a CompressedImage topic.\n\n----------\n"image_transport/compressedDepth"\n - Provided by package: compressed_depth_image_transport\n - Publisher:\n      This plugin publishes a compressed depth images using PNG compression.\n\n - Subscriber:\n      This plugin decodes a compressed depth images.\n\n----------\n"image_transport/raw"\n - Provided by package: image_transport\n - Publisher:\n      This is the default publisher. It publishes the Image as-is on the base topic.\n\n - Subscriber:\n      This is the default pass-through subscriber for topics of type sensor_msgs/Image.\n\n----------\n"image_transport/theora"\n - Provided by package: theora_image_transport\n - Publisher:\n      This plugin publishes a video packet stream encoded using Theora.\n\n - Subscriber:\n      This plugin decodes a video packet stream encoded using Theora.\n'})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var a=t(34164);const n={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:t,children:r})}},93859:(e,r,t)=>{t.d(r,{A:()=>j});var a=t(96540),n=t(34164),s=t(86641),o=t(56347),l=t(205),i=t(38874),u=t(24035),c=t(82993);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,u.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(n.location.search);r.set(s,e),n.replace({...n.location,search:r.toString()})}),[s,n])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:s}))),[u,d]=m({queryString:t,groupId:n}),[b,g]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,s]=(0,c.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),f=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function _(e){let{className:r,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const r=e.currentTarget,t=i.indexOf(r),n=l[t].value;n!==a&&(u(r),o(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:n}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function x(e){const r=b(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,v.jsx)(_,{...r,...e}),(0,v.jsx)(k,{...r,...e})]})}function j(e){const r=(0,g.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var a=t(96540);const n={},s=a.createContext(n);function o(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);