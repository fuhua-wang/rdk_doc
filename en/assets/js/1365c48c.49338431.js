"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8138],{38259:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(74848),r=o(28453),i=o(93859),s=o(19365);const a={sidebar_position:3},c="5.1.3 Source Code Installation",l={id:"Robot_development/quick_start/cross_compile",title:"5.1.3 Source Code Installation",description:"This section explains how to install TogetheROS.Bot on the RDK using source code.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/05_Robot_development/01_quick_start/cross_compile.md",sourceDirName:"05_Robot_development/01_quick_start",slug:"/Robot_development/quick_start/cross_compile",permalink:"/rdk_doc/en/Robot_development/quick_start/cross_compile",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/05_Robot_development/01_quick_start/cross_compile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5.1.2 apt installation and upgrade",permalink:"/rdk_doc/en/Robot_development/quick_start/install_tros"},next:{title:"5.1.4 Hello World",permalink:"/rdk_doc/en/Robot_development/quick_start/hello_world"}},d={},u=[{value:"RDK Platform",id:"rdk-platform",level:2},{value:"Compile",id:"compile",level:3},{value:"1 Load docker image",id:"1-load-docker-image",level:4},{value:"2 Obtain the Code",id:"2-obtain-the-code",level:4},{value:"3 Cross-Compilation",id:"3-cross-compilation",level:4},{value:"Install",id:"install",level:3},{value:"Compile a specific version",id:"compile-a-specific-version",level:3},{value:"FAQ",id:"faq",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"513-source-code-installation",children:"5.1.3 Source Code Installation"}),"\n","\n",(0,n.jsx)(t.p,{children:"This section explains how to install TogetheROS.Bot on the RDK using source code."}),"\n",(0,n.jsx)(t.h2,{id:"rdk-platform",children:"RDK Platform"}),"\n",(0,n.jsx)(t.p,{children:"Prerequisites:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The development machine can access the D-Robotics organization on ",(0,n.jsx)(t.a,{href:"https://github.com/D-Robotics",children:"GitHub"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Docker is installed on the development machine."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"compile",children:"Compile"}),"\n",(0,n.jsx)(t.h4,{id:"1-load-docker-image",children:"1 Load docker image"}),"\n",(0,n.jsx)(t.p,{children:"All the following operations are performed within the Docker environment on the development machine."}),"\n",(0,n.jsxs)(i.A,{groupId:"tros-distro",children:[(0,n.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'## Create a directory\ncd /mnt/data/kairui.wang/test\nmkdir -p cc_ws/tros_ws/src\n## Obtain the Docker for cross-compilation\nwget http://archive.d-robotics.cc/tros/cross_compile_docker/pc_tros_v1.0.5.tar.gz\n## Load the Docker image\nsudo docker load --input pc_tros_v1.0.5.tar.gz\n## Check the corresponding image ID for pc_tros\nsudo docker images\n## Launch Docker and mount the directory\nsudo docker run -it --entrypoint="/bin/bash" -v PC local directory: Docker directory imageID, here is an example using:\nsudo docker run -it --entrypoint="/bin/bash" -v /mnt/data/kairui.wang/test:/mnt/test 9c2ca340973e\n'})})}),(0,n.jsx)(s.A,{value:"humble",label:"Humble",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'## Create a directory\ncd /mnt/data/kairui.wang/test\nmkdir -p cc_ws/tros_ws/src\n## Obtain the Docker for cross-compilation\nwget http://archive.d-robotics.cc/tros/cross_compile_docker/pc_tros_ubuntu22.04_v1.0.0.tar.gz\n## Load the Docker image\nsudo docker load --input pc_tros_ubuntu22.04_v1.0.0.tar.gz \n## Check the corresponding image ID for pc_tros\nsudo docker images\n## Launch Docker and mount the directory\nsudo docker run -it --entrypoint="/bin/bash" -v PC local directory: Docker directory imageID, here is an example using:\nsudo docker run -it --entrypoint="/bin/bash" -v /mnt/data/kairui.wang/test:/mnt/test 4cbdb9d61e19\n'})})})]}),"\n",(0,n.jsx)(t.h4,{id:"2-obtain-the-code",children:"2 Obtain the Code"}),"\n",(0,n.jsx)(t.p,{children:"All the following operations are performed within the Docker environment on the development machine."}),"\n",(0,n.jsx)(t.p,{children:"Here, we take the /mnt/test directory in Docker as an example."}),"\n",(0,n.jsxs)(i.A,{groupId:"tros-distro",children:[(0,n.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'cd /mnt/test/cc_ws/tros_ws\n## Obtain the configuration file\ngit clone https://github.com/D-Robotics/robot_dev_config.git -b foxy\n## Execute cd robot_dev_config and use the "git tag --list" command to view the available release versions\n## Use the "git reset --hard [tag number]" command to specify the release version. For detailed instructions, refer to the "Compile Specific Version tros.b" section on this page\n## Pull the source code\nvcs-import src < ./robot_dev_config/ros2_release.repos\n'})})}),(0,n.jsx)(s.A,{value:"humble",label:"Humble",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'cd /mnt/test/cc_ws/tros_ws\n## Obtain the configuration file\ngit clone https://github.com/D-Robotics/robot_dev_config.git -b develop \n## Execute cd robot_dev_config and use the "git tag --list" command to view the available release versions\n## Use the "git reset --hard [tag number]" command to specify the release version. For detailed instructions, refer to the "Compile Specific Version tros.b" section on this page\n## Pull the source code\nvcs-import src < ./robot_dev_config/ros2_release.repos \n'})})})]}),"\n",(0,n.jsx)(t.p,{children:"The directory structure of the entire project is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"\u251c\u2500\u2500 cc_ws\n\u2502   \u251c\u2500\u2500 sysroot_docker\n\u2502   \u2502   \u251c\u2500\u2500 etc\n\u2502   \u2502   \u251c\u2500\u2500 lib -> usr/lib\n\u2502   \u2502   \u251c\u2500\u2500 opt\n\u2502   \u2502   \u2514\u2500\u2500 usr\n\u2502   \u2514\u2500\u2500 tros_ws\n\u2502       \u251c\u2500\u2500 robot_dev_config\n\u2502       \u2514\u2500\u2500 src\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"tros_ws/robot_dev_config"})," path contains the configuration and script files needed for code fetching, compilation, and packaging. The ",(0,n.jsx)(t.code,{children:"tros_ws/src"})," path stores the fetched code. The ",(0,n.jsx)(t.code,{children:"sysroot_docker"})," path contains the header files and libraries required for cross-compilation, corresponding to the ",(0,n.jsx)(t.code,{children:"/"})," directory of the RDK. For example, the path for the media library in ",(0,n.jsx)(t.code,{children:"sysroot_docker"})," is ",(0,n.jsx)(t.code,{children:"sysroot_docker/usr/lib/hbmedia/"}),", while the path in the RDK is ",(0,n.jsx)(t.code,{children:"/usr/lib/hbmedia/"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["During compilation, the installation path of ",(0,n.jsx)(t.code,{children:"sysroot_docker"})," is specified through the ",(0,n.jsx)(t.code,{children:"CMAKE_SYSROOT"})," macro in the ",(0,n.jsx)(t.code,{children:"robot_dev_config/aarch64_toolchainfile.cmake"})," compilation script."]}),"\n",(0,n.jsx)(t.h4,{id:"3-cross-compilation",children:"3 Cross-Compilation"}),"\n",(0,n.jsx)(t.p,{children:"All of these operations are performed inside the docker on the development machine."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"## Compile tros.b version X3 using build.sh\nbash ./robot_dev_config/build.sh -p X3\n"})}),"\n",(0,n.jsx)(t.p,{children:"After successful compilation, a message will prompt: N packages compiled and passed."}),"\n",(0,n.jsxs)(t.p,{children:["If using minimal_build.sh for minimal compilation, you can further compress the deployment package size by executing ",(0,n.jsx)(t.code,{children:'./minimal_deploy.sh -d "install_path"'}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,n.jsx)(t.p,{children:"Copy the compiled directory to the RDK and rename it as tros. Here, we place the deployment package in the /opt/tros directory to be consistent with the deb installation directory."}),"\n",(0,n.jsx)(t.h3,{id:"compile-a-specific-version",children:"Compile a specific version"}),"\n",(0,n.jsxs)(t.p,{children:["In the section ",(0,n.jsx)(t.strong,{children:"Compile"}),", in the step 2 ",(0,n.jsx)(t.strong,{children:"Obtain the Code"}),", the default is to fetch the latest version of tros.b source code. If you need to get a specific release version of the source code, you need to make the following modifications:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"## Get the configuration file\ngit clone https://github.com/D-Robotics/robot_dev_config.git -b develop \ncd robot_dev_config\n## View available release versions\ngit tag --list\n## Switch to the specified version number, here we take tros.b 2.0.0 as an example\ngit reset --hard tros_2.0.0\ncd ..\n## Pull code\nvcs-import src < ./robot_dev_config/ros2_release.repos\n"})}),"\n",(0,n.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(t.p,{children:"Q1: How to determine if VCS successfully pulled the code?"}),"\n",(0,n.jsx)(t.p,{children:'A1: As shown in the image below, during the vcs import process, a "." indicates a successful repo pull, and an "E" indicates a failed repo pull. Specific failed repos can be seen in the log after execution. If this happens, you can try deleting the contents in the src directory and re-run vcs import or manually pull the failed repos.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"vcs_import",src:o(10394).A+"",title:"vcs_import",width:"1536",height:"78"})}),"\n",(0,n.jsx)(t.p,{children:"Q2: Limited conditions prevent code retrieval from GitHub"}),"\n",(0,n.jsxs)(t.p,{children:["A2: You can directly download the desired version of the code from the ",(0,n.jsx)(t.a,{href:"http://archive.d-robotics.cc/tros/source_code/",children:"TogetheROS File Server"}),". For example, the ",(0,n.jsx)(t.code,{children:"tros_2.0.0_source_code.tar.gz"})," file corresponds to version 2.0.0 of tros.b."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,o)=>{o.d(t,{A:()=>s});o(96540);var n=o(34164);const r={tabItem:"tabItem_Ymn6"};var i=o(74848);function s(e){let{children:t,hidden:o,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:o,children:t})}},93859:(e,t,o)=>{o.d(t,{A:()=>j});var n=o(96540),r=o(34164),i=o(86641),s=o(56347),a=o(205),c=o(38874),l=o(24035),d=o(82993);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}(o);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,i=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:o,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:r}),g=(()=>{const e=l??b;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=o(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=o(74848);function _(e){let{className:t,block:o,selectedValue:n,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const t=e.currentTarget,o=c.indexOf(t),r=a[o].value;r!==n&&(l(t),s(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;t=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;t=c[o]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},t),children:a.map((e=>{let{value:t,label:o,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function x(e){let{lazy:t,children:o,selectedValue:r}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(_,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(t))}},10394:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/vcs_import_error-a82a8dcd758a247ffbceaf3de494419e.png"},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);