"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4580],{21039:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>t,contentTitle:()=>c,default:()=>_,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=i(74848),s=i(28453);const r={sidebar_position:3},c="DECODER\uff08\u89e3\u7801\u6a21\u5757\uff09API",l={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api",title:"DECODER\uff08\u89e3\u7801\u6a21\u5757\uff09API",description:"DECODER API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/decoder_api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ENCODER\uff08\u7f16\u7801\u6a21\u5757\uff09API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api"},next:{title:"DISPLAY\uff08\u663e\u793a\u6a21\u5757\uff09API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/display_api"}},t={},o=[{value:"sp_init_decoder_module",id:"sp_init_decoder_module",level:2},{value:"sp_release_decoder_module",id:"sp_release_decoder_module",level:2},{value:"sp_start_decode",id:"sp_start_decode",level:2},{value:"sp_stop_decode",id:"sp_stop_decode",level:2},{value:"sp_decoder_get_image",id:"sp_decoder_get_image",level:2},{value:"sp_decoder_set_image",id:"sp_decoder_set_image",level:2}];function h(e){const d={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"decoder\u89e3\u7801\u6a21\u5757api",children:"DECODER\uff08\u89e3\u7801\u6a21\u5757\uff09API"}),"\n",(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.code,{children:"DECODER"})," API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a"]}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"\u51fd\u6570"}),(0,n.jsx)(d.th,{children:"\u529f\u80fd"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sp_init_decoder_module"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.strong,{children:"\u521d\u59cb\u5316\u89e3\u7801\u6a21\u5757\u5bf9\u8c61"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sp_release_decoder_module"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.strong,{children:"\u9500\u6bc1\u89e3\u7801\u6a21\u5757\u5bf9\u8c61"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sp_start_decode"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.strong,{children:"\u521b\u5efa\u56fe\u50cf\u89e3\u7801\u901a\u9053"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sp_stop_decode"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.strong,{children:"\u5173\u95ed\u56fe\u50cf\u89e3\u7801\u901a\u9053"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sp_decoder_get_image"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.strong,{children:"\u4ece\u89e3\u7801\u901a\u9053\u83b7\u53d6\u89e3\u7801\u540e\u7684\u56fe\u50cf\u5e27"})})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"sp_decoder_set_image"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.strong,{children:"\u5411\u89e3\u7801\u901a\u9053\u4f20\u5165\u9700\u8981\u89e3\u7801\u7684\u7801\u6d41\u6570\u636e"})})]})]})]}),"\n",(0,n.jsx)(d.admonition,{type:"note",children:(0,n.jsxs)(d.p,{children:["RDK Ultra ",(0,n.jsx)(d.strong,{children:"\u4e0d"}),"\u652f\u6301",(0,n.jsx)(d.code,{children:"H264"}),"\u7f16\u89e3\u7801"]})}),"\n",(0,n.jsx)(d.h2,{id:"sp_init_decoder_module",children:"sp_init_decoder_module"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.code,{children:"void *sp_init_decoder_module()"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u521d\u59cb\u5316\u89e3\u7801\u6a21\u5757\u5bf9\u8c61\uff0c\u5728\u4f7f\u7528\u89e3\u7801\u6a21\u5757\u65f6\u9700\u8981\u8c03\u7528\u83b7\u5f97\u64cd\u4f5c\u53e5\u67c4\uff0c\u652f\u6301H264\u3001H265\u548cMjpeg\u683c\u5f0f\u7684\u89c6\u9891\u7801\u6d41\u3002"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u65e0\u3002"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,n.jsxs)(d.p,{children:["\u6210\u529f\u8fd4\u56de",(0,n.jsx)(d.code,{children:"DECODER"}),"\u5bf9\u8c61\uff0c\u5931\u8d25\u8fd4\u56de NULL\u3002"]}),"\n",(0,n.jsx)(d.h2,{id:"sp_release_decoder_module",children:"sp_release_decoder_module"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.code,{children:"void sp_release_decoder_module(void *obj)"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u9500\u6bc1\u89e3\u7801\u6a21\u5757\u5bf9\u8c61\u3002"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"obj"}),": \u8c03\u7528\u521d\u59cb\u5316\u63a5\u53e3\u65f6\u5f97\u5230\u7684\u5bf9\u8c61\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u65e0"}),"\n",(0,n.jsx)(d.h2,{id:"sp_start_decode",children:"sp_start_decode"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.code,{children:"int sp_start_decode(void *decoder_object,const char *stream_file, int32_t type, int32_t width, int32_t height)"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u521b\u5efa\u4e00\u4e2a\u89e3\u7801\u901a\u9053\uff0c\u8bbe\u7f6e\u89e3\u7801\u7684\u7801\u6d41\u7c7b\u578b\u3001\u56fe\u50cf\u5e27\u5206\u8fa8\u7387\u3002"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,n.jsx)(d.code,{children:"DECODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"stream_file"}),"\uff1a\u5f53 ",(0,n.jsx)(d.code,{children:"stream_file"})," \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u7801\u6d41\u6587\u4ef6\u540d\u65f6\uff0c\u8868\u793a\u5bf9\u8fd9\u4e2a\u7801\u6d41\u6587\u4ef6\u8fdb\u884c\u89e3\u7801\uff0c\u4f8b\u5982\u8bbe\u7f6eH265\u7684\u7801\u6d41\u6587\u4ef6\u201cstream.h265\u201d, \u5f53 ",(0,n.jsx)(d.code,{children:"stream_file"})," \u4f20\u5165\u7a7a\u5b57\u7b26\u4e32\u65f6\uff0c\u8868\u793a\u89e3\u7801\u7684\u6570\u636e\u6d41\u9700\u8981\u901a\u8fc7\u8c03\u7528 ",(0,n.jsx)(d.code,{children:"sp_decoder_set_image"})," \u4f20\u5165\u3002"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"type"}),"\uff1a\u89e3\u7801\u7684\u6570\u636e\u7c7b\u578b\uff0c\u652f\u6301",(0,n.jsx)(d.code,{children:"SP_ENCODER_H265"})," \u548c ",(0,n.jsx)(d.code,{children:"SP_ENCODER_MJPEG"}),"\u3002"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"width"}),"\uff1a\u89e3\u7801\u51fa\u6765\u7684\u56fe\u50cf\u5e27\u7684\u5206\u8fa8\u7387 - \u5bbd"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"height"}),"\uff1a\u89e3\u7801\u51fa\u6765\u7684\u56fe\u50cf\u5e27\u7684\u5206\u8fa8\u7387 - \u9ad8"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,n.jsx)(d.h2,{id:"sp_stop_decode",children:"sp_stop_decode"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.code,{children:"int32_t sp_stop_decode(void *obj)"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u5173\u95ed\u89e3\u7801\u901a\u9053\u3002"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,n.jsx)(d.code,{children:"DECODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,n.jsx)(d.h2,{id:"sp_decoder_get_image",children:"sp_decoder_get_image"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.code,{children:"int32_t sp_decoder_get_image(void *obj, char *image_buffer)"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,n.jsxs)(d.p,{children:["\u4ece\u89e3\u7801\u901a\u9053\u83b7\u53d6\u89e3\u7801\u540e\u7684\u56fe\u50cf\u5e27\u6570\u636e\uff0c\u8fd4\u56de\u7684\u56fe\u50cf\u6570\u636e\u683c\u5f0f\u4e3a ",(0,n.jsx)(d.code,{children:"NV12"})," \u7684 ",(0,n.jsx)(d.code,{children:"YUV"})," \u56fe\u50cf\u3002"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"obj"}),"\uff1a\u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,n.jsx)(d.code,{children:"DECODER"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"image_buffer"}),"\uff1a\u8fd4\u56de\u7684\u56fe\u50cf\u5e27\u6570\u636e\uff0c\u8fd9\u4e2abuffer\u5927\u5c0f\u4e0e\u56fe\u50cf\u5206\u8fa8\u7387\u7684\u5173\u7cfb\u4e3a width * height * 3 / 2\u3002"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,n.jsx)(d.h2,{id:"sp_decoder_set_image",children:"sp_decoder_set_image"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.code,{children:"int32_t sp_decoder_set_image(void *obj, char *image_buffer, int32_t size, int32_t eos)"})}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u5411\u5df2\u7ecf\u6253\u5f00\u7684\u89e3\u7801\u901a\u9053\u9001\u5165\u7801\u6d41\u6570\u636e\u3002\n\u5982\u679c\u662f\u89e3\u7801 H264 \u6216 H265 \u7801\u6d41\uff0c\u9700\u8981\u5148\u53d1\u90013-5\u5e27\u6570\u636e\uff0c\u8ba9\u89e3\u7801\u5668\u5b8c\u6210\u5e27\u7f13\u5b58\u540e\uff0c\u518d\u83b7\u53d6\u89e3\u7801\u5e27\u6570\u636e\u3002\n\u5982\u679c\u89e3\u7801 H264 \u7801\u6d41\uff0c\u9996\u5148\u7b2c\u4e00\u5e27\u9001\u5165\u89e3\u7801\u7684\u6570\u636e\u9700\u8981\u662f sps \u548c pps \u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u5426\u8005\u89e3\u7801\u5668\u4f1a\u62a5\u9519\u9000\u51fa\u3002"}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,n.jsx)(d.code,{children:"DECODER"}),"\u5bf9\u8c61\u6307\u9488\u3002"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"image_buffer"}),"\uff1a\u7801\u6d41\u6570\u636e\u6307\u9488\u3002"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"size"}),"\uff1a\u7801\u6d41\u6570\u636e\u5927\u5c0f\u3002"]}),"\n",(0,n.jsxs)(d.li,{children:[(0,n.jsx)(d.code,{children:"eos"}),"\uff1a\u662f\u5426\u662f\u6700\u540e\u4e00\u5e27\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,n.jsx)(d.p,{children:(0,n.jsx)(d.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,n.jsx)(d.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"})]})}function _(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,d,i)=>{i.d(d,{R:()=>c,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function c(e){const d=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:d},e.children)}}}]);