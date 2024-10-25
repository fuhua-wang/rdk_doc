"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7709],{33621:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=t(74848),s=t(28453),o=t(93859),l=t(19365);const a={sidebar_position:9},i="5.2.9 Large Language Model",c={id:"Robot_development/quick_demo/hobot_llm",title:"5.2.9 Large Language Model",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/02_quick_demo/hobot_llm.md",sourceDirName:"05_Robot_development/02_quick_demo",slug:"/Robot_development/quick_demo/hobot_llm",permalink:"/rdk_doc/en/Robot_development/quick_demo/hobot_llm",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/02_quick_demo/hobot_llm.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"5.2.8 Text to Speech",permalink:"/rdk_doc/en/Robot_development/quick_demo/hobot_tts"},next:{title:"FCOS",permalink:"/rdk_doc/en/Robot_development/boxs/detection/fcos"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"RDK",id:"rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"RDK",id:"rdk-1",level:3},{value:"Terminal Interaction",id:"terminal-interaction",level:4},{value:"Subscribe and Publish Messages",id:"subscribe-and-publish-messages",level:4},{value:"Note",id:"note",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"529-large-language-model",children:"5.2.9 Large Language Model"}),"\n","\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This section introduces how to experience Large Language Model (LLM) on RDK."}),"\n",(0,r.jsxs)(n.p,{children:["Code repository:  (",(0,r.jsx)(n.a,{href:"https://github.com/D-Robotics/hobot_llm.git",children:"https://github.com/D-Robotics/hobot_llm.git"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Platform"}),(0,r.jsx)(n.th,{children:"System"}),(0,r.jsx)(n.th,{children:"Function"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RDK X3, RDK X3 Module (4GB RAM)"}),(0,r.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,r.jsx)(n.td,{children:"Edge-side LLM Experience"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Note: Only supports RDK X3 and RDK X3 Module with 4GB RAM version."})}),"\n",(0,r.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,r.jsx)(n.h3,{id:"rdk",children:"RDK"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"RDK with 4GB RAM version."}),"\n",(0,r.jsx)(n.li,{children:"RDK has been flashed with the provided  Ubuntu 20.04/22.04 system image."}),"\n",(0,r.jsx)(n.li,{children:"RDK has successfully installed TogetheROS.Bot."}),"\n",(0,r.jsxs)(n.li,{children:["Install transformers, the command is ",(0,r.jsx)(n.code,{children:"pip3 install transformers -i https://pypi.tuna.tsinghua.edu.cn/simple"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"rdk-1",children:"RDK"}),"\n",(0,r.jsx)(n.p,{children:"Before running the program, you need to download the model file and extract it, the commands are as follows:"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(l.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Download the model file\nwget http://archive.d-robotics.cc/tros/llm-model/llm_model.tar.gz\n\n# Extract\nsudo tar -xf llm_model.tar.gz -C /opt/tros/${TROS_DISTRO}/lib/hobot_llm/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use the command ",(0,r.jsx)(n.code,{children:"srpi-config"}),' to modify the ION memory size to 1.7GB. The configuration method can be referred to the "Performance Options" section of the RDK User Manual Configuration Tool ',(0,r.jsx)(n.code,{children:"srpi-config"})," Guide ",(0,r.jsx)(n.a,{href:"/rdk_doc/en/System_configuration/srpi-config",children:"Performance Options"})]}),"\n",(0,r.jsxs)(n.p,{children:["After restarting, set the CPU maximum frequency to 1.5GHz and the scheduling mode to ",(0,r.jsx)(n.code,{children:"performance"}),", the commands are as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo bash -c 'echo 1 > /sys/devices/system/cpu/cpufreq/boost'\nsudo bash -c 'echo performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Currently, there are two ways to experience it. One is to directly input text in the terminal for chat interaction, and the other is to subscribe to text messages and then publish the results in text format."}),"\n",(0,r.jsx)(n.h4,{id:"terminal-interaction",children:"Terminal Interaction"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(l.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ros2 run hobot_llm hobot_llm_chat\n"})}),"\n",(0,r.jsx)(n.p,{children:"After the program starts, you can chat directly with the robot in the current terminal."}),"\n",(0,r.jsx)(n.h4,{id:"subscribe-and-publish-messages",children:"Subscribe and Publish Messages"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start hobot_llm"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(l.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ros2 run hobot_llm hobot_llm\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a new terminal to subscribe"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(l.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ros2 topic echo /text_result\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Open a new terminal to publish"}),"\n",(0,r.jsxs)(o.A,{groupId:"tros-distro",children:[(0,r.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,r.jsx)(l.A,{value:"humble",label:"Humble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ros2 topic pub --once /text_query std_msgs/msg/String "{data: ""What is the highest mountain?""}"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"After sending the message, you can check the output result in the subscribed terminal."}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(n.p,{children:"Make sure the development board has 4GB of memory and modify the ION memory size to 1.7GB, otherwise the model loading will fail."})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),s=t(34164),o=t(86641),l=t(56347),a=t(205),i=t(38874),c=t(24035),u=t(82993);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=b({queryString:t,groupId:s}),[p,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=a[t].value;s!==r&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function _(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);