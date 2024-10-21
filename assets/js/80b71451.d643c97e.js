"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5419],{92999:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var d=i(74848),l=i(28453);const s={sidebar_position:2},r="\u6a21\u578b\u52a0\u8f7d/\u91ca\u653e API",c={id:"Algorithm_Application/cdev_dnn_api/initialize_and_release",title:"\u6a21\u578b\u52a0\u8f7d/\u91ca\u653e API",description:"hbDNNInitializeFromFiles()",source:"@site/docs/04_Algorithm_Application/02_cdev_dnn_api/initialize_and_release.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/initialize_and_release",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/initialize_and_release",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Algorithm_Application/02_cdev_dnn_api/initialize_and_release.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u578b\u63a8\u7406\u5e93\u7248\u672c\u4fe1\u606f\u83b7\u53d6 API",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/get_version"},next:{title:"\u6a21\u578b\u4fe1\u606f\u83b7\u53d6 API",permalink:"/rdk_doc/Algorithm_Application/cdev_dnn_api/get_model_info"}},t={},o=[{value:"hbDNNInitializeFromFiles()",id:"hbdnninitializefromfiles",level:2},{value:"hbDNNInitializeFromDDR()",id:"hbdnninitializefromddr",level:2},{value:"hbDNNRelease()",id:"hbdnnrelease",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u6a21\u578b\u52a0\u8f7d\u91ca\u653e-api",children:"\u6a21\u578b\u52a0\u8f7d/\u91ca\u653e API"}),"\n",(0,d.jsx)(n.h2,{id:"hbdnninitializefromfiles",children:"hbDNNInitializeFromFiles()"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t hbDNNInitializeFromFiles(hbPackedDNNHandle_t *packedDNNHandle, const char **modelFileNames, int32_t modelFileCount)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4ece\u6587\u4ef6\u5b8c\u6210\u5bf9 ",(0,d.jsx)(n.code,{children:"packedDNNHandle"})," \u7684\u521b\u5efa\u548c\u521d\u59cb\u5316\u3002\u8c03\u7528\u65b9\u53ef\u4ee5\u8de8\u51fd\u6570\u3001\u8de8\u7ebf\u7a0b\u4f7f\u7528\u8fd4\u56de\u7684 ",(0,d.jsx)(n.code,{children:"packedDNNHandle"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["[out] ",(0,d.jsx)(n.code,{children:"packedDNNHandle"}),"  Horizon DNN\u53e5\u67c4\uff0c\u6307\u5411\u591a\u4e2a\u6a21\u578b\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["[in]  ",(0,d.jsx)(n.code,{children:"modelFileNames"}),"   \u6a21\u578b\u6587\u4ef6\u7684\u8def\u5f84\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["[in]  ",(0,d.jsx)(n.code,{children:"modelFileCount"}),"   \u6a21\u578b\u6587\u4ef6\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"hbdnninitializefromddr",children:"hbDNNInitializeFromDDR()"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t hbDNNInitializeFromDDR(hbPackedDNNHandle_t *packedDNNHandle, const void **modelData, int32_t *modelDataLengths, int32_t modelDataCount)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4ece\u6587\u4ef6\u5b8c\u6210\u5bf9 ",(0,d.jsx)(n.code,{children:"packedDNNHandle"})," \u7684\u521b\u5efa\u548c\u521d\u59cb\u5316\u3002\u8c03\u7528\u65b9\u53ef\u4ee5\u8de8\u51fd\u6570\u3001\u8de8\u7ebf\u7a0b\u4f7f\u7528\u8fd4\u56de\u7684 ",(0,d.jsx)(n.code,{children:"packedDNNHandle"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["[out] ",(0,d.jsx)(n.code,{children:"packedDNNHandle"}),"  Horizon DNN\u53e5\u67c4\uff0c\u6307\u5411\u591a\u4e2a\u6a21\u578b\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["[in]  ",(0,d.jsx)(n.code,{children:"modelData"}),"        \u6a21\u578b\u6587\u4ef6\u7684\u6307\u9488\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["[in]  ",(0,d.jsx)(n.code,{children:"modelDataLengths"})," \u6a21\u578b\u6570\u636e\u7684\u957f\u5ea6\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["[in]  ",(0,d.jsx)(n.code,{children:"modelDataCount"}),"   \u6a21\u578b\u6570\u636e\u7684\u4e2a\u6570\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"hbdnnrelease",children:"hbDNNRelease()"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t hbDNNRelease(hbPackedDNNHandle_t packedDNNHandle)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5c06 ",(0,d.jsx)(n.code,{children:"packedDNNHandle"})," \u6240\u6307\u5411\u7684\u6a21\u578b\u91ca\u653e\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["[in] ",(0,d.jsx)(n.code,{children:"packedDNNHandle"}),"  Horizon DNN\u53e5\u67c4\uff0c\u6307\u5411\u591a\u4e2a\u6a21\u578b\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u8fd4\u56de ",(0,d.jsx)(n.code,{children:"0"})," \u5219\u8868\u793aAPI\u6210\u529f\u6267\u884c\uff0c\u5426\u5219\u6267\u884c\u5931\u8d25\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var d=i(96540);const l={},s=d.createContext(l);function r(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);