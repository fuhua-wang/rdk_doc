"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7311],{71347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>_,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var d=i(74848),s=i(28453);const r={sidebar_position:2},c="ENCODER\uff08\u7f16\u7801\u6a21\u5757\uff09API",l={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api",title:"ENCODER\uff08\u7f16\u7801\u6a21\u5757\uff09API",description:"ENCODER API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"VIO\uff08\u89c6\u9891\u8f93\u5165\uff09API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api"},next:{title:"DECODER\uff08\u89e3\u7801\u6a21\u5757\uff09API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api"}},t={},o=[{value:"sp_init_encoder_module",id:"sp_init_encoder_module",level:2},{value:"sp_release_encoder_module",id:"sp_release_encoder_module",level:2},{value:"sp_start_encode",id:"sp_start_encode",level:2},{value:"sp_stop_encode",id:"sp_stop_encode",level:2},{value:"sp_encoder_set_frame",id:"sp_encoder_set_frame",level:2},{value:"sp_encoder_get_stream",id:"sp_encoder_get_stream",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"encoder\u7f16\u7801\u6a21\u5757api",children:"ENCODER\uff08\u7f16\u7801\u6a21\u5757\uff09API"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ENCODER"})," API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u51fd\u6570"}),(0,d.jsx)(n.th,{children:"\u529f\u80fd"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sp_init_encoder_module"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u521d\u59cb\u5316\u7f16\u7801\u6a21\u5757\u5bf9\u8c61"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sp_release_encoder_module"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u9500\u6bc1\u7f16\u7801\u6a21\u5757\u5bf9\u8c61"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sp_start_encode"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u521b\u5efa\u56fe\u50cf\u7f16\u7801\u901a\u9053"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sp_stop_encode"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u5173\u95ed\u56fe\u50cf\u7f16\u7801\u901a\u9053"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sp_encoder_set_frame"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u5411\u7f16\u7801\u901a\u9053\u4f20\u5165\u56fe\u50cf\u5e27"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sp_encoder_get_stream"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"\u4ece\u7f16\u7801\u901a\u9053\u83b7\u53d6\u7f16\u7801\u597d\u7684\u7801\u6d41"})})]})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.p,{children:["RDK Ultra ",(0,d.jsx)(n.strong,{children:"\u4e0d"}),"\u652f\u6301",(0,d.jsx)(n.code,{children:"H264"}),"\u7f16\u89e3\u7801"]})}),"\n",(0,d.jsx)(n.h2,{id:"sp_init_encoder_module",children:"sp_init_encoder_module"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void *sp_init_encoder_module()"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u521d\u59cb\u5316\u7f16\u7801\u6a21\u5757\u5bf9\u8c61\uff0c\u5728\u4f7f\u7528\u7f16\u7801\u6a21\u5757\u65f6\u9700\u8981\u8c03\u7528\u83b7\u5f97\u64cd\u4f5c\u53e5\u67c4\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u65e0"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsxs)(n.p,{children:["\u6210\u529f\u8fd4\u56de\u4e00\u4e2a",(0,d.jsx)(n.code,{children:"ENCODER"}),"\u5bf9\u8c61\u6307\u9488\uff0c\u5931\u8d25\u8fd4\u56de",(0,d.jsx)(n.code,{children:"NULL"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"sp_release_encoder_module",children:"sp_release_encoder_module"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"void sp_release_encoder_module(void *obj)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u9500\u6bc1\u7f16\u7801\u6a21\u5757\u5bf9\u8c61\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"obj"}),": \u8c03\u7528\u521d\u59cb\u5316\u63a5\u53e3\u65f6\u5f97\u5230\u7684\u5bf9\u8c61\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u65e0"}),"\n",(0,d.jsx)(n.h2,{id:"sp_start_encode",children:"sp_start_encode"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t sp_start_encode(void *obj, int32_t type, int32_t width, int32_t height, int32_t bits)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u8def\u56fe\u50cf\u7f16\u7801\u901a\u9053\uff0c\u652f\u6301\u6700\u591a\u521b\u5efa ",(0,d.jsx)(n.code,{children:"32"})," \u8def\u7f16\u7801\uff0c\u7f16\u7801\u7c7b\u578b\u652f\u6301 ",(0,d.jsx)(n.code,{children:"H264"}),", ",(0,d.jsx)(n.code,{children:"H265"})," \u548c ",(0,d.jsx)(n.code,{children:"MJPEG"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,d.jsx)(n.code,{children:"ENCODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"type"}),"\uff1a\u56fe\u50cf\u7f16\u7801\u7c7b\u578b\uff0c\u652f\u6301 ",(0,d.jsx)(n.code,{children:"SP_ENCODER_H264"}),"\uff0c",(0,d.jsx)(n.code,{children:"SP_ENCODER_H265"})," \u548c ",(0,d.jsx)(n.code,{children:"SP_ENCODER_MJPEG"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"width"}),"\uff1a\u8f93\u5165\u7ed9\u7f16\u7801\u901a\u9053\u7684\u56fe\u50cf\u6570\u636e\u5206\u8fa8\u7387-\u5bbd"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"height"}),"\uff1a\u8f93\u5165\u7ed9\u7f16\u7801\u901a\u9053\u7684\u56fe\u50cf\u6570\u636e\u5206\u8fa8\u7387-\u9ad8"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"bits"}),"\uff1a\u7f16\u7801\u7801\u7387\uff0c\u5e38\u7528\u503c\u4e3a 512, 1024, 2048, 4096, 8192, 16384 \u7b49\u7801\u7387\uff08\u5355\u4f4d Mbps\uff09\uff0c\u5176\u4ed6\u503c\u4e5f\u53ef\u4ee5\uff0c\u7801\u7387\u4e5f\u5927\u7f16\u7801\u7684\u56fe\u50cf\u8d8a\u6e05\u6670\uff0c\u538b\u7f29\u7387\u8d8a\u5c0f\uff0c\u7801\u6d41\u6570\u636e\u8d8a\u5927\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,d.jsx)(n.h2,{id:"sp_stop_encode",children:"sp_stop_encode"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t sp_stop_encode(void *obj)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u5173\u95ed\u6253\u5f00\u7684\u7f16\u7801\u901a\u9053\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,d.jsx)(n.code,{children:"ENCODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,d.jsx)(n.h2,{id:"sp_encoder_set_frame",children:"sp_encoder_set_frame"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t sp_encoder_set_frame(void *obj, char *frame_buffer, int32_t size)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5411\u7f16\u7801\u901a\u9053\u4f20\u5165\u9700\u8981\u7f16\u7801\u7684\u56fe\u50cf\u5e27\u6570\u636e\uff0c\u683c\u5f0f\u5fc5\u987b\u4e3a ",(0,d.jsx)(n.code,{children:"NV12"}),"\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,d.jsx)(n.code,{children:"ENCODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"frame_buffer"}),"\uff1a\u9700\u8981\u7f16\u7801\u7684\u56fe\u50cf\u5e27\u6570\u636e\uff0c\u5fc5\u987b\u662f ",(0,d.jsx)(n.code,{children:"NV12"})," \u683c\u5f0f\uff0c\u5206\u8fa8\u7387\u5fc5\u987b\u548c\u8c03\u7528",(0,d.jsx)(n.code,{children:"sp_start_encode"}),"\u63a5\u53e3\u662f\u7684\u56fe\u50cf\u5e27\u5206\u8fa8\u7387\u4e00\u81f4\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"size"}),"\uff1a\u56fe\u50cf\u5e27\u6570\u636e\u5927\u5c0f\uff0c",(0,d.jsx)(n.code,{children:"NV12"})," \u683c\u5f0f\u7684\u56fe\u50cf\u7684\u5927\u5c0f\u8ba1\u7b97\u516c\u5f0f\u4e3a width * height * 3 / 2\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,d.jsx)(n.h2,{id:"sp_encoder_get_stream",children:"sp_encoder_get_stream"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"int32_t sp_encoder_get_stream(void *obj, char *stream_buffer)"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u4ece\u7f16\u7801\u901a\u9053\u83b7\u53d6\u7f16\u7801\u597d\u7684\u7801\u6d41\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,d.jsx)(n.code,{children:"ENCODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"stream_buffer"}),"\uff1a\u83b7\u53d6\u6210\u529f\u540e\uff0c\u7801\u6d41\u6570\u636e\u4f1a\u5b58\u5728\u672cbuffer\u4e2d\u3002\u6b64buffer\u7684\u5927\u5c0f\u9700\u8981\u6839\u636e\u7f16\u7801\u5206\u8fa8\u7387\u548c\u7801\u7387\u8fdb\u884c\u8c03\u6574\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,d.jsx)(n.p,{children:"\u6210\u529f\u8fd4\u56de\u7801\u6d41\u6570\u636e\u7684size\uff0c\u5931\u8d25\u8fd4\u56de -1"})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var d=i(96540);const s={},r=d.createContext(s);function c(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);