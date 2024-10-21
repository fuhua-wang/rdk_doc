"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9893],{15173:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=i(74848),t=i(28453);const r={sidebar_position:1},s="4.3.1 ModelZoo\u6982\u8ff0",d={id:"Algorithm_Application/model_zoo/model_zoo_intro",title:"4.3.1 ModelZoo\u6982\u8ff0",description:"\u4ea7\u54c1\u4ecb\u7ecd",source:"@site/docs/04_Algorithm_Application/03_model_zoo/model_zoo_intro.md",sourceDirName:"04_Algorithm_Application/03_model_zoo",slug:"/Algorithm_Application/model_zoo/model_zoo_intro",permalink:"/rdk_doc/en/Algorithm_Application/model_zoo/model_zoo_intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Algorithm_Application/03_model_zoo/model_zoo_intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"4.2.9 Model Inference DEBUG Method",permalink:"/rdk_doc/en/Algorithm_Application/cdev_dnn_api/model_debug"},next:{title:"4.3.2 ModelZoo\u5feb\u901f\u4e0a\u624b",permalink:"/rdk_doc/en/Algorithm_Application/model_zoo/bpu_infer_lib_intro"}},l={},c=[{value:"\u4ea7\u54c1\u4ecb\u7ecd",id:"\u4ea7\u54c1\u4ecb\u7ecd",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u6a21\u5757\u4ecb\u7ecd",id:"\u6a21\u5757\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"431-modelzoo\u6982\u8ff0",children:"4.3.1 ModelZoo\u6982\u8ff0"}),"\n",(0,n.jsx)(o.h2,{id:"\u4ea7\u54c1\u4ecb\u7ecd",children:"\u4ea7\u54c1\u4ecb\u7ecd"}),"\n",(0,n.jsx)(o.p,{children:"\u672c\u4ea7\u54c1\u4e3a RDK \u7cfb\u5217\u5f00\u53d1\u677f\u7684\u6a21\u578b\u6837\u4f8b\u603b\u4ed3\uff08Model Zoo\uff09\uff0c\u65e8\u5728\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u80fd\u76f4\u63a5\u4e0a\u677f\u90e8\u7f72\u7684\uff0c\u4e30\u5bcc\u591a\u6837\u7684\u6a21\u578b\u6848\u4f8b\u3002"}),"\n",(0,n.jsx)(o.admonition,{title:"Tip",type:"tip",children:(0,n.jsxs)(o.p,{children:["Model Zoo\u7684github\u4ed3\u5728\u8fd9\u91cc\uff1a",(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics/rdk_model_zoo",children:"https://github.com/D-Robotics/rdk_model_zoo"})]})}),"\n",(0,n.jsx)(o.p,{children:"\u901a\u8fc7\u8be5\u4ed3\u5e93\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8bbf\u95ee\u4ee5\u4e0b\u8d44\u6e90\uff1a"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u591a\u6837\u5316\u7684\u5730\u74dc\u5f02\u6784\u6a21\u578b"}),"\uff1a\u4ed3\u5e93\u4e2d\u5305\u542b\u4e86\u5404\u7c7b\u53ef\u76f4\u63a5\u4e0a\u677f\u90e8\u7f72\uff0c\u9002\u7528\u4e0e\u591a\u79cd\u573a\u666f\u3001\u901a\u7528\u6027\u8f83\u5f3a\u7684\u5730\u74dc\u5f02\u6784\u6a21\u578b\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u56fe\u50cf\u5206\u7c7b\u3001\u76ee\u6807\u68c0\u6d4b\u3001\u8bed\u4e49\u5206\u5272\u3001\u81ea\u7136\u8bed\u8a00\u5904\u7406\u7b49\u9886\u57df\u7684.bin\u6a21\u578b\u3002\u8fd9\u4e9b\u6a21\u578b\u7ecf\u8fc7\u7cbe\u5fc3\u6311\u9009\u548c\u4f18\u5316\uff0c\u5177\u6709\u9ad8\u6548\u7684\u6027\u80fd\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u8be6\u7ec6\u7684\u4f7f\u7528\u6307\u5357"}),"\uff1a\u6bcf\u4e2a\u6a21\u578b\u90fd\u914d\u6709\u4e00\u4e2aJupyter Notebook\uff0c\u5176\u4e2d\u9644\u5e26\u8be6\u7ec6\u7684\u6a21\u578b\u4ecb\u7ecd\u3001\u4f7f\u7528\u8bf4\u660e\u3001\u793a\u4f8b\u4ee3\u7801\u548c\u6ce8\u91ca\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u4e0a\u624b\u3002\u540c\u65f6\uff0c\u5bf9\u4e8e\u90e8\u5206\u6a21\u578b\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u6a21\u578b\u7684\u6027\u80fd\u8bc4\u4f30\u62a5\u544a\u548c\u8c03\u4f18\u5efa\u8bae\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u6839\u636e\u5177\u4f53\u9700\u6c42\u8fdb\u884c\u5b9a\u5236\u548c\u4f18\u5316\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u96c6\u6210\u7684\u5f00\u53d1\u5de5\u5177"}),"\uff1a\u6211\u4eec\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u53ef\u5728RDK \u7cfb\u5217\u5f00\u53d1\u677f\u4e0a\u5feb\u901f\u90e8\u7f72\u6a21\u578b\u7684\u4e00\u5957python\u63a5\u53e3\uff0cbpu_infer_lib\uff0c\u901a\u8fc7\u5b66\u4e60\u4ed3\u5e93\u5185\u6a21\u578b\u914d\u5907\u7684Jupyter Notebook\uff0c\u5982\u6570\u636e\u9884\u5904\u7406\u811a\u672c\u548c\u63a8\u7406\u65b9\u6cd5\uff0c\u5f00\u53d1\u8005\u80fd\u5feb\u901f\u638c\u63e1\u5bf9\u8be5\u63a5\u53e3\u7684\u4f7f\u7528\uff0c\u5927\u5927\u7b80\u5316\u4e86\u6a21\u578b\u5f00\u53d1\u548c\u90e8\u7f72\u7684\u6d41\u7a0b\u3002"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"\u73af\u5883\u51c6\u5907",children:"\u73af\u5883\u51c6\u5907"}),"\n",(0,n.jsxs)(o.p,{children:["\u5f00\u53d1\u8005\u9996\u5148\u6839\u636e\u6240\u5728\u5206\u652f\uff0c\u51c6\u5907\u4e00\u5757\u5bf9\u5e94\u7684RDK \u5f00\u53d1\u677f\uff0c\u5e76\u524d\u5f80\u5730\u74dc\u673a\u5668\u4eba\u5b98\u7f51\u5b8c\u6210",(0,n.jsx)(o.a,{href:"https://developer.d-robotics.cc/rdk_doc/Quick_start/install_os",children:"\u786c\u4ef6\u51c6\u5907\u3001\u9a71\u52a8\u5b89\u88c5\u3001\u8f6f\u4ef6\u4e0b\u8f7d\u3001\u548c\u955c\u50cf\u70e7\u5f55"}),"\u3002\u5bf9\u4e8eX3\u548cX5\u7684\u955c\u50cf\uff0c\u8bf7\u9009\u62e93.0.0\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,n.jsxs)(o.p,{children:["\u5728\u5b8c\u6210\u786c\u4ef6\u8fde\u63a5\u548c\u7f51\u7edc\u914d\u7f6e\u540e\uff0c\u4f7f\u7528MobaXTerm",(0,n.jsx)(o.a,{href:"https://developer.d-robotics.cc/rdk_doc/Quick_start/remote_login",children:"\u8fdc\u7a0b\u767b\u5f55\u5f00\u53d1\u677f"}),"\u3002\u5bf9\u5f00\u53d1\u677f\u8fdb\u884c",(0,n.jsx)(o.a,{href:"https://developer.d-robotics.cc/rdk_doc/System_configuration/network_blueteeth",children:"\u7f51\u7edc\u8fde\u63a5"}),"\u3002"]}),"\n",(0,n.jsx)(o.p,{children:"\u4f7f\u7528pip\u5b8c\u6210\u76f8\u5e94python\u5e93\u7684\u5b89\u88c5\uff1a"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"bpu_infer_lib"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"\u5982\u4f7f\u7528RDK X5\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"pip install bpu_infer_lib_x5 -i http://archive.d-robotics.cc/simple/ --trusted-host archive.d-robotics.cc\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u5982\u4f7f\u7528RDK X3\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"pip install bpu_infer_lib_x3 -i http://archive.d-robotics.cc/simple/ --trusted-host archive.d-robotics.cc\n"})}),"\n",(0,n.jsxs)(o.ol,{start:"2",children:["\n",(0,n.jsx)(o.li,{children:"jupyterlab"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"pip install jupyterlab\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u968f\u540e\u5373\u53ef\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u62c9\u53d6Model Zoo\u4ed3\u5e93\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"git clone https://github.com/D-Robotics/rdk_model_zoo\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u6ce8\uff1a\u8fd9\u91ccgit clone\u62c9\u4e0b\u6765\u7684\u5206\u652f\u9ed8\u8ba4\u4e3aRDK X5\u5206\u652f\uff0c\u5982\u5b9e\u9645\u4f7f\u7528\u7684\u5f00\u53d1\u677f\u4e3aRDK\u7cfb\u5217\u7684\u5176\u4ed6\u4ea7\u54c1\uff0c\u8bf7\u4f7f\u7528git checkout\u547d\u4ee4\u8fdb\u884c\u5207\u6362\uff0c\u8fd9\u91cc\u4ee5X3\u4e3a\u4f8b\uff0c\u5982\u60f3\u5207\u6362\u81f3RDK X3\u5bf9\u5e94\u7684\u5206\u652f\uff0c\u8bf7\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"git checkout rdk_x3\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u62c9\u53d6\u5b8c\u6210\u540e\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u5165Model Zoo\u76ee\u5f55\uff1a"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"cd rdk_model_zoo\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u968f\u540e\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u5165Jupyter Lab\uff08\u6ce8\uff1aip\u5730\u5740\u4e3a\u677f\u5b50\u5b9e\u9645\u767b\u5f55\u65f6\u4f7f\u7528\u7684ip\uff09:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"jupyter lab --allow-root --ip 10.112.148.68\n"})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:i(3217).A+"",width:"1907",height:"574"})}),"\n",(0,n.jsx)(o.p,{children:"\u4f7f\u7528\u547d\u4ee4\u540e\uff0c\u4f1a\u51fa\u73b0\u4ee5\u4e0a\u65e5\u5fd7\uff0c\u6309\u4f4fCtrl\uff0c\u9f20\u6807\u5de6\u952e\u70b9\u51fb\u4e0a\u56fe\u6240\u793a\u7684\u94fe\u63a5\uff0c\u5373\u53ef\u8fdb\u5165Jupyter Lab\uff08\u5982\u4e0b\u56fe\u6240\u793a\uff09\uff0c\u53cc\u51fbdemos\u540e\uff0c\u5373\u53ef\u9009\u62e9\u6a21\u578b\u4f53\u9a8cRDK Model Zoo\u3002"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:i(39819).A+"",width:"1542",height:"1008"})}),"\n",(0,n.jsx)(o.h2,{id:"\u6a21\u5757\u4ecb\u7ecd",children:"\u6a21\u5757\u4ecb\u7ecd"}),"\n",(0,n.jsx)(o.p,{children:"RDK \u7cfb\u5217 Model Zoo\u603b\u4f53\u5206\u4e3a\u5982\u4e0b\u6a21\u5757\uff08\u8fd9\u90e8\u5206\u4ee5RDK X5\u4e3a\u4f8b\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8df3\u8f6c\u81ea\u5bf9\u5e94\u5206\u652f\uff09\uff1a"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/llm",children:"\u5927\u6a21\u578b"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/classification",children:"\u56fe\u50cf\u5206\u7c7b"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/detect",children:"\u76ee\u6807\u68c0\u6d4b"})})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.a,{href:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/Instance_Segmentation",children:"\u5b9e\u4f8b\u5206\u5272"})})}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"\u5f00\u53d1\u8005\u53ef\u8df3\u8f6c\u81f3\u5bf9\u5e94\u7684\u6a21\u5757\uff0c\u4f53\u9a8c\u6a21\u578b\u5728RDK \u7cfb\u5217\u5f00\u53d1\u677f\u7684\u90e8\u7f72\u3002"}),"\n",(0,n.jsx)(o.h2,{id:"\u4f7f\u7528\u6307\u5357",children:"\u4f7f\u7528\u6307\u5357"}),"\n",(0,n.jsx)(o.p,{children:"\u5728Jupyter Lab\u4e2d\u9009\u62e9\u4e00\u4e2a\u6a21\u578b\u7684notebook\u8fdb\u5165\u540e\uff0c\u5f00\u53d1\u8005\u4f1a\u8fdb\u5165\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u754c\u9762\uff1a"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:i(61297).A+"",width:"1695",height:"635"})}),"\n",(0,n.jsx)(o.p,{children:"\u8fd9\u91cc\u4ee5yolo world\u6a21\u578b\u4e3a\u4f8b\uff0c\u7528\u6237\u53ea\u9700\u8981\u70b9\u51fb\u4e0a\u56fe\u4e2d\u7684\u53cc\u4e09\u89d2\u6309\u94ae\uff0c\u5373\u53ef\u8fd0\u884c\u5168\u90e8cell\u3002\u9f20\u6807\u62d6\u52a8\u5230\u4e0b\u65b9\uff0c\u5373\u53ef\u770b\u5230\u7ed3\u679c\u5c55\u793a\uff1a"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:i(28514).A+"",width:"1507",height:"967"})}),"\n",(0,n.jsx)(o.p,{children:"\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u9009\u62e9\u9010cell\u8fd0\u884c\uff0c\u6b64\u65f6\u53ea\u9700\u8981\u6309\u4e0bShift + Enter\uff0c\u5373\u53ef\u5b8c\u6210\u5f53\u524dcell\u8fd0\u884c\uff0c\u5e76\u8df3\u8f6c\u81f3\u4e0b\u4e00\u4e2acell\u3002"})]})}function p(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},61297:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/basic_usage-0bcf035695e2328d4a731196b44bed79.png"},28514:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/basic_usage_res-f8e0e9872375980e3465f880521ea376.png"},39819:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/into_jupyter-53d2ece1ed6a1d766b0387d831a42d35.png"},3217:(e,o,i)=>{i.d(o,{A:()=>n});const n=i.p+"assets/images/jupyter_start-04ab4b11767c9856d06b643b9e045a82.png"},28453:(e,o,i)=>{i.d(o,{R:()=>s,x:()=>d});var n=i(96540);const t={},r=n.createContext(t);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);