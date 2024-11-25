"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[450],{49305:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=o(74848),r=o(28453),s=o(93859),a=o(19365);const l={sidebar_position:2},i="5.1.2 apt installation and upgrade",u={id:"Robot_development/quick_start/install_tros",title:"5.1.2 apt installation and upgrade",description:"This section introduces how to use apt to install TogetheROS.Bot on RDK.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/01_quick_start/install_tros.md",sourceDirName:"05_Robot_development/01_quick_start",slug:"/Robot_development/quick_start/install_tros",permalink:"/rdk_doc/en/Robot_development/quick_start/install_tros",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/01_quick_start/install_tros.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"5.1.1 Environment Setup",permalink:"/rdk_doc/en/Robot_development/quick_start/preparation"},next:{title:"5.1.3 Source Code Installation",permalink:"/rdk_doc/en/Robot_development/quick_start/cross_compile"}},c={},d=[{value:"RDK",id:"rdk",level:2},{value:"Installation",id:"installation",level:3},{value:"Upgrade tros.b",id:"upgrade-trosb",level:3},{value:"Check the current version of tros.b",id:"check-the-current-version-of-trosb",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"512-apt-installation-and-upgrade",children:"5.1.2 apt installation and upgrade"}),"\n","\n",(0,n.jsx)(t.p,{children:"This section introduces how to use apt to install TogetheROS.Bot on RDK."}),"\n",(0,n.jsx)(t.h2,{id:"rdk",children:"RDK"}),"\n",(0,n.jsx)(t.p,{children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The environment preparation in section 1.1 has been completed."}),"\n",(0,n.jsx)(t.li,{children:"The RDK system has been installed."}),"\n",(0,n.jsx)(t.li,{children:"The RDK can access the internet normally."}),"\n",(0,n.jsx)(t.li,{children:"The RDK can be accessed remotely via SSH."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Note: The IP address of the RDK used here is 10.64.61.241. Replace it with your IP address during installation."})}),"\n",(0,n.jsx)(t.p,{children:"Login to the RDK"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"ssh root@10.64.61.241\n"})}),"\n",(0,n.jsx)(t.p,{children:"Install the tros.b package:"}),"\n",(0,n.jsxs)(s.A,{groupId:"tros-distro",children:[(0,n.jsx)(a.A,{value:"foxy",label:"Foxy",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros\n"})})}),(0,n.jsx)(a.A,{value:"humble",label:"Humble",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apt update\nsudo apt install tros-humble\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Note: If you encounter the error ",(0,n.jsx)(t.code,{children:"E: Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution).' after running the installation command, please execute the command "}),"apt --fix-broken install` to install the related dependencies before installing tros.b."]})}),"\n",(0,n.jsx)(t.p,{children:"After the installation is complete, check the files in the /opt directory"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"root@ubuntu:/userdata# ls /opt/\nhobot  tros\n"})}),"\n",(0,n.jsx)(t.p,{children:"The tros.b is installed in the /opt directory."}),"\n",(0,n.jsx)(t.h3,{id:"upgrade-trosb",children:"Upgrade tros.b"}),"\n",(0,n.jsx)(t.p,{children:"Login to RDK:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"ssh root@10.64.61.241\n"})}),"\n",(0,n.jsx)(t.p,{children:"Upgrade tros.b deb package:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n",(0,n.jsx)(t.h3,{id:"check-the-current-version-of-trosb",children:"Check the current version of tros.b"}),"\n",(0,n.jsxs)(s.A,{groupId:"tros-distro",children:[(0,n.jsxs)(a.A,{value:"foxy",label:"Foxy",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"root@ubuntu:~# apt show tros\nPackage: tros\nVersion: 2.0.0-20230523223852\nMaintainer: kairui.wang <kairui.wang@d-robotics.cc>\nInstalled-Size: unknown\nDepends: hobot-models-basic, tros-ros-base, tros-ai-msgs, tros-audio-control, tros-audio-msg, tros-audio-tracking, tros-body-tracking, tros-dnn-benchmark-example, tros-dnn-node, tros-dnn-node-example, tros-dnn-node-sample, tros-elevation-net, tros-gesture-control, tros-hand-gesture-detection, tros-hand-lmk-detection, tros-hbm-img-msgs, tros-hobot-app-xrrobot-body-tracking, tros-hobot-app-xrrobot-gesture-control, tros-hobot-codec, tros-hobot-cv, tros-hobot-falldown-detection, tros-hobot-hdmi, tros-hobot-image-publisher, tros-hobot-mot, tros-hobot-usb-cam, tros-image-subscribe-example, tros-img-msgs, tros-imu-sensor, tros-line-follower-model, tros-line-follower-perception, tros-mipi-cam, tros-mono2d-body-detection, tros-mono2d-trash-detection, tros-mono3d-indoor-detection, tros-parking-perception, tros-parking-search, tros-rgbd-sensor, tros-websocket, tros-xrrobot, tros-xrrobot-msgs\nDownload-Size: 980 B\nAPT-Manual-Installed: yes\nAPT-Sources: http://archive.d-robotics.cc/ubuntu-rdk focal/main arm64 Packages\nDescription: TogetheROS Bot\n\n"})}),(0,n.jsx)(t.p,{children:"It can be seen that the current version of tros.b has been upgraded to version 2.0.0."})]}),(0,n.jsxs)(a.A,{value:"humble",label:"Humble",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"root@ubuntu:~# apt show tros-humble\nPackage: tros-humble\nVersion: 2.2.0-jammy.20240410.221258\nPriority: optional\nSection: misc\nMaintainer: zhuo <zhuo.wang@d-robotics.cc>\nInstalled-Size: 44.0 kB\nDepends: hobot-models-basic, tros-humble-ai-msgs, tros-humble-audio-control, tros-humble-audio-msg, tros-humble-   audio-tracking, tros-humble-base, tros-humble-body-tracking, tros-humble-dnn-benchmark-example, tros-humble-dnn-   node, tros-humble-dnn-node-example, tros-humble-dnn-node-sample, tros-humble-elevation-net, tros-humble-gesture-   control, tros-humble-hand-gesture-detection, tros-humble-hand-lmk-detection, tros-humble-hbm-img-msgs, tros-humb   le-hobot-audio, tros-humble-hobot-chatbot, tros-humble-hobot-codec, tros-humble-hobot-cv, tros-humble-hobot-fall   down-detection, tros-humble-hobot-hdmi, tros-humble-hobot-image-publisher, tros-humble-hobot-llm, tros-humble-ho   bot-mot, tros-humble-hobot-shm, tros-humble-hobot-tts, tros-humble-hobot-usb-cam, tros-humble-hobot-vio, tros-hu   mble-hobot-visualization, tros-humble-img-msgs, tros-humble-imu-sensor, tros-humble-line-follower-model, tros-hu   mble-line-follower-perception, tros-humble-mipi-cam, tros-humble-mono2d-body-detection, tros-humble-mono2d-trash   -detection, tros-humble-mono3d-indoor-detection, tros-humble-parking-perception, tros-humble-parking-search, tro   s-humble-rgbd-sensor, tros-humble-websocket, tros-humble-ros-workspace\nDownload-Size: 5,546 B\nAPT-Manual-Installed: yes\nAPT-Sources: http://archive.d-robotics.cc/ubuntu-rdk jammy/main arm64 Packages\nDescription: TogetheROS Bot\n\n"})}),(0,n.jsx)(t.p,{children:"It can be seen that the current version of tros.b has been upgraded to version 2.2.0."})]})]})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,o)=>{o.d(t,{A:()=>a});o(96540);var n=o(34164);const r={tabItem:"tabItem_Ymn6"};var s=o(74848);function a(e){let{children:t,hidden:o,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:o,children:t})}},93859:(e,t,o)=>{o.d(t,{A:()=>y});var n=o(96540),r=o(34164),s=o(86641),a=o(56347),l=o(205),i=o(38874),u=o(24035),c=o(82993);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}(o);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function b(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function p(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,s=h(e),[a,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:o,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),f=(()=>{const e=u??p;return b({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=o(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=o(74848);function x(e){let{className:t,block:o,selectedValue:n,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,o=i.indexOf(t),r=l[o].value;r!==n&&(u(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const o=i.indexOf(e.currentTarget)+1;t=i[o]??i[0];break}case"ArrowLeft":{const o=i.indexOf(e.currentTarget)-1;t=i[o]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},t),children:l.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function k(e){let{lazy:t,children:o,selectedValue:r}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>l});var n=o(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);