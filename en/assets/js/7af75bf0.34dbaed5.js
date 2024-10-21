"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[521],{57236:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=o(74848),t=o(28453);const i={sidebar_position:2},d="4.1.2 Importing the Model Inference Library",s={id:"Algorithm_Application/pydev_dnn_demo/model_import",title:"4.1.2 Importing the Model Inference Library",description:"The hobot_dnn model inference library is pre-installed on the Ubuntu system of the development board. Users can import the module and check the version information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/01_pydev_dnn_demo/model_import.md",sourceDirName:"04_Algorithm_Application/01_pydev_dnn_demo",slug:"/Algorithm_Application/pydev_dnn_demo/model_import",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/model_import",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Algorithm_Application/01_pydev_dnn_demo/model_import.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.1.1 Model Inference Examples",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_demo"},next:{title:"4.1.3 Static Image Inference",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/static_image"}},l={},a=[];function c(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"412-importing-the-model-inference-library",children:"4.1.2 Importing the Model Inference Library"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"hobot_dnn"})," model inference library is pre-installed on the Ubuntu system of the development board. Users can import the module and check the version information."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sunrise@ubuntu:~$ sudo python3\nPython 3.8.10 (default, Mar 15 2022, 12:22:08) \nType \"help\", \"copyright\", \"credits\" or \"license\" for more information.\n>>> from hobot_dnn import pyeasy_dnn as dnn\n>>> dir(dnn)\n['Model', 'TensorProperties', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'load', 'pyDNNTensor']\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The main classes and interfaces used in the ",(0,r.jsx)(n.code,{children:"hobot_dnn"})," inference library are as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Model"}),": AI algorithm model class, used for loading algorithm models and performing inference calculations. For more information, please refer to the ",(0,r.jsx)(n.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"Model"})," documentation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pyDNNTensor"}),": AI algorithm input and output data tensor class. For more information, please refer to the ",(0,r.jsx)(n.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"pyDNNTensor"})," documentation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TensorProperties"}),": Class for the properties of the input tensor of the model. For more information, please refer to the ",(0,r.jsx)(n.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"TensorProperties"})," documentation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"load"}),": Load algorithm models. For more information, please refer to the ",(0,r.jsx)(n.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"API interface"})," documentation."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>s});var r=o(96540);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);