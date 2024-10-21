"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2738],{31186:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var i=s(74848),r=s(28453);const c={sidebar_position:5},l="4.2.5 Model Memory Operation API",t={id:"Algorithm_Application/cdev_dnn_api/sys_mem",title:"4.2.5 Model Memory Operation API",description:"hbSysAllocMem()",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/02_cdev_dnn_api/sys_mem.md",sourceDirName:"04_Algorithm_Application/02_cdev_dnn_api",slug:"/Algorithm_Application/cdev_dnn_api/sys_mem",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/sys_mem",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Algorithm_Application/02_cdev_dnn_api/sys_mem.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4.2.4 Model Inference API",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/dnn_infer"},next:{title:"4.2.6 Model Pre-processing API",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/dnn_resize"}},d={},h=[{value:"hbSysAllocMem()",id:"hbsysallocmem",level:2},{value:"hbSysAllocCachedMem()",id:"hbsysalloccachedmem",level:2},{value:"hbSysFlushMem()",id:"hbsysflushmem",level:2},{value:"hbSysFreeMem()",id:"hbsysfreemem",level:2},{value:"hbSysWriteMem()",id:"hbsyswritemem",level:2},{value:"hbSysReadMem()",id:"hbsysreadmem",level:2},{value:"hbSysRegisterMem()",id:"hbsysregistermem",level:2},{value:"hbSysUnregisterMem()",id:"hbsysunregistermem",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"425-model-memory-operation-api",children:"4.2.5 Model Memory Operation API"}),"\n",(0,i.jsx)(n.h2,{id:"hbsysallocmem",children:"hbSysAllocMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Function prototype\u3011"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysAllocMem(hbSysMem *mem, uint32_t size)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Description\u3011"})}),"\n",(0,i.jsx)(n.p,{children:"Allocate BPU memory."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"size"}),"  The size of the memory to be allocated."]}),"\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"mem"}),"  Memory pointer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Return type\u3011"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise the execution fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsysalloccachedmem",children:"hbSysAllocCachedMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Function prototype\u3011"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysAllocCachedMem(hbSysMem *mem, uint32_t size)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Description\u3011"})}),"\n",(0,i.jsx)(n.p,{children:"Allocate cached BPU memory."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"size"}),"  The size of the memory to be allocated."]}),"\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"mem"}),"  Memory pointer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u3010Return type\u3011"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise the execution fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsysflushmem",children:"hbSysFlushMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysFlushMem(hbSysMem *mem, int32_t flag)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsx)(n.p,{children:"Flushes the cache BPU memory."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"mem"}),"               Memory pointer."]}),"\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"flag"}),"              Flush flag."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsysfreemem",children:"hbSysFreeMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysFreeMem(hbSysMem *mem)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsx)(n.p,{children:"Frees BPU memory."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[in]  ",(0,i.jsx)(n.code,{children:"mem"}),"               Memory pointer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns ",(0,i.jsx)(n.code,{children:"0"})," if the API is executed successfully, otherwise it fails."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsyswritemem",children:"hbSysWriteMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysWriteMem(hbSysMem *dest, char *src, uint32_t size)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsx)(n.p,{children:"Writes to BPU memory."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"dest"}),"  Memory pointer."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"src"}),"    Pointer to data."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"size"}),"   Size of data."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns 0 if the API is executed successfully, otherwise it fails."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsysreadmem",children:"hbSysReadMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysReadMem(char *dest, hbSysMem *src, uint32_t size)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Description]"})}),"\n",(0,i.jsx)(n.p,{children:"Reads BPU memory."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[out] ",(0,i.jsx)(n.code,{children:"dest"}),"Pointer to data."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"src"}),"Pointer to memory."]}),"\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"size"}),"Size of data."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns 0 if the API is executed successfully, otherwise it fails."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsysregistermem",children:"hbSysRegisterMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysRegisterMem(hbSysMem *mem)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Description]"})}),"\n",(0,i.jsx)(n.p,{children:"Registers a memory range with a known physical address as a memory identifier that can be used by BPU, and the memory obtained is cacheable."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[in/out] ",(0,i.jsx)(n.code,{children:"mem"}),"Pointer to memory."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Returns 0 if the API is executed successfully, otherwise it fails."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hbsysunregistermem",children:"hbSysUnregisterMem()"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Function Prototype]"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"int32_t hbSysUnregisterMem(hbSysMem *mem)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Description]"})}),"\n",(0,i.jsxs)(n.p,{children:["This function is used to unregister the memory identifier registered by ",(0,i.jsx)(n.code,{children:"hbSysRegisterMem"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Parameters]"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["[in] ",(0,i.jsx)(n.code,{children:"mem"}),": Memory pointer."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"[Return Type]"})}),"\n",(0,i.jsxs)(n.p,{children:["If the API is executed successfully, it returns ",(0,i.jsx)(n.code,{children:"0"}),"; otherwise, it returns a non-zero value indicating failure."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(96540);const r={},c=i.createContext(r);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);