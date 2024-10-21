"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3037],{81681:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=n(74848),d=n(28453);const c={sidebar_position:1},r="VIO\uff08\u89c6\u9891\u8f93\u5165\uff09API",l={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api",title:"VIO\uff08\u89c6\u9891\u8f93\u5165\uff09API",description:"VIO \u6a21\u5757\u63d0\u4f9b\u64cd\u4f5c MIPI \u6444\u50cf\u5934\u548c\u64cd\u4f5c\u56fe\u50cf\u5904\u7406\u7684\u529f\u80fd\u3002",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Display\u5bf9\u8c61",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_display"},next:{title:"ENCODER\uff08\u7f16\u7801\u6a21\u5757\uff09API",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/encoder_api"}},h={},o=[{value:"sp_init_vio_module",id:"sp_init_vio_module",level:2},{value:"sp_release_vio_module",id:"sp_release_vio_module",level:2},{value:"sp_open_camera",id:"sp_open_camera",level:2},{value:"sp_open_vps",id:"sp_open_vps",level:2},{value:"sp_vio_close",id:"sp_vio_close",level:2},{value:"sp_vio_get_frame",id:"sp_vio_get_frame",level:2},{value:"sp_vio_get_raw",id:"sp_vio_get_raw",level:2},{value:"sp_vio_get_yuv",id:"sp_vio_get_yuv",level:2},{value:"sp_vio_set_frame",id:"sp_vio_set_frame",level:2}];function t(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"vio\u89c6\u9891\u8f93\u5165api",children:"VIO\uff08\u89c6\u9891\u8f93\u5165\uff09API"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"VIO"})," \u6a21\u5757\u63d0\u4f9b\u64cd\u4f5c ",(0,s.jsx)(i.code,{children:"MIPI"})," \u6444\u50cf\u5934\u548c\u64cd\u4f5c\u56fe\u50cf\u5904\u7406\u7684\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"VIO"})," API\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u7684\u63a5\u53e3\uff1a"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\u51fd\u6570"}),(0,s.jsx)(i.th,{children:"\u529f\u80fd"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_init_vio_module"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u521d\u59cb\u5316VIO\u5bf9\u8c61"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_release_vio_module"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u9500\u6bc1VIO\u5bf9\u8c61"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_open_camera"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u6253\u5f00\u6444\u50cf\u5934"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_open_vps"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u6253\u5f00VPS"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_vio_close"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u5173\u95ed\u6444\u50cf\u5934"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_vio_get_frame"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u83b7\u53d6\u89c6\u9891\u56fe\u50cf\u5e27"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sp_vio_set_frame"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"\u53d1\u9001\u89c6\u9891\u56fe\u50cf\u5e27\u7ed9vps\u6a21\u5757"})})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"sp_init_vio_module",children:"sp_init_vio_module"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"void *sp_init_vio_module()"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["\u521d\u59cb\u5316",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\uff0c\u521b\u5efa\u64cd\u4f5c\u53e5\u67c4\u3002\u5728\u5176\u4ed6\u63a5\u53e3\u8c03\u7528\u524d\u5fc5\u987b\u6267\u884c\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u65e0"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6210\u529f\u8fd4\u56de\u4e00\u4e2a",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488\uff0c\u5931\u8d25\u8fd4\u56de",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsx)(i.h2,{id:"sp_release_vio_module",children:"sp_release_vio_module"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"void sp_release_vio_module(void *obj)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["\u9500\u6bc1",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u8c03\u7528\u521d\u59cb\u5316\u63a5\u53e3\u65f6\u5f97\u5230\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u65e0"}),"\n",(0,s.jsx)(i.h2,{id:"sp_open_camera",children:"sp_open_camera"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_open_camera(void *obj, int32_t chn_num, int32_t *width, int32_t *height)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u521d\u59cb\u5316\u63a5\u5165\u5230RDK X3\u4e0a\u7684MIPI\u6444\u50cf\u5934\u3002\n\u8bbe\u7f6e\u8f93\u51fa\u5206\u8fa8\u7387\uff0c\u652f\u6301\u8bbe\u7f6e\u6700\u591a5\u7ec4\u5206\u8fa8\u7387\uff0c\u5176\u4e2d\u53ea\u67091\u7ec4\u53ef\u4ee5\u653e\u5927\uff0c4\u7ec4\u53ef\u4ee5\u7f29\u5c0f\u3002\u6700\u5927\u652f\u6301\u653e\u5927\u5230\u539f\u59cb\u56fe\u50cf\u76841.5\u500d\uff0c\u6700\u5c0f\u652f\u6301\u7f29\u5c0f\u5230\u539f\u59cb\u56fe\u50cf\u76841/8\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"chn_num"}),"\uff1a\u8bbe\u7f6e\u8f93\u51fa\u591a\u5c11\u79cd\u4e0d\u540c\u5206\u8fa8\u7387\u7684\u56fe\u50cf\uff0c\u6700\u5927\u4e3a5\uff0c\u6700\u5c0f\u4e3a1\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"width"}),"\uff1a\u914d\u7f6e\u8f93\u51fa\u5bbd\u5ea6\u7684\u6570\u7ec4\u5730\u5740"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"height"}),"\uff1a\u914d\u7f6e\u8f93\u51fa\u9ad8\u5ea6\u7684\u6570\u7ec4\u5730\u5740"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_open_vps",children:"sp_open_vps"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_open_vps(void *obj, int32_t chn_num,int32_t src_width, int32_t src_height, int32_t *dst_width, int32_t *dst_height,int32_t *crop_x, int32_t *crop_y, int32_t *crop_width, int32_t *crop_height, int32_t *rotate)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6253\u5f00\u4e00\u8def\u56fe\u50cf\u5904\u7406\u6a21\u5757\uff0c\u652f\u6301\u5bf9\u8f93\u5165\u7684\u56fe\u50cf\u5b8c\u6210\u7f29\u5c0f\u3001\u653e\u5927\u3001\u65cb\u8f6c\u3001\u88c1\u526a\u4efb\u52a1\u3002"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"chn_num"}),"\uff1a\u8bbe\u7f6e\u8f93\u51fa\u56fe\u50cf\u6570\u91cf\uff0c\u6700\u5927\u4e3a5\uff0c\u4e0e\u8bbe\u7f6e\u7684\u76ee\u6807\u9ad8\u5bbd\u6570\u7ec4\u5927\u5c0f\u6709\u5173"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"src_width"}),"\uff1a\u539f\u59cb\u5e27\u5bbd\u5ea6"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"src_height"}),"\uff1a\u539f\u59cb\u5e27\u9ad8\u5ea6"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"dst_width"}),"\uff1a\u914d\u7f6e\u76ee\u6807\u8f93\u51fa\u5bbd\u5ea6\u7684\u6570\u7ec4\u5730\u5740"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"dst_height"}),"\uff1a\u914d\u7f6e\u76ee\u6807\u8f93\u51fa\u9ad8\u5ea6\u7684\u6570\u7ec4\u5730\u5740"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"crop_x"}),"\uff1a\u88c1\u526a\u533a\u57df\u7684\u5de6\u4e0a\u89d2x\u5750\u6807\u96c6\u5408\uff0c\u4e0d\u4f7f\u7528\u88c1\u526a\u529f\u80fd\u65f6\uff0c\u4f20\u5165",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"crop_y"}),"\uff1a\u88c1\u526a\u533a\u57df\u7684\u5de6\u4e0a\u89d2y\u5750\u6807\u96c6\u5408\uff0c\u4e0d\u4f7f\u7528\u88c1\u526a\u529f\u80fd\u65f6\uff0c\u4f20\u5165",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"crop_width"}),"\uff1a\u88c1\u526a\u533a\u57df\u7684\u5bbd\u5ea6\uff0c\u4e0d\u4f7f\u7528\u88c1\u526a\u529f\u80fd\u65f6\uff0c\u4f20\u5165",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"crop_height"}),"\uff1a\u88c1\u526a\u533a\u57df\u7684\u9ad8\u5ea6\uff0c\u4e0d\u4f7f\u7528\u88c1\u526a\u529f\u80fd\u65f6\uff0c\u4f20\u5165",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"rotate"}),"\uff1a\u65cb\u8f6c\u89d2\u5ea6\u96c6\u5408\uff0c\u76ee\u524d\u652f\u6301",(0,s.jsx)(i.code,{children:"ROTATION_90"})," 90\xb0\u3001",(0,s.jsx)(i.code,{children:"ROTATION_180"})," 180\xb0\u548c",(0,s.jsx)(i.code,{children:"ROTATION_270"})," 270\xb0\uff0c\u4e0d\u4f7f\u7528\u65cb\u8f6c\u529f\u80fd\u65f6\uff0c\u4f20\u5165",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_vio_close",children:"sp_vio_close"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_vio_close(void *obj)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["\u6839\u636e\u4f20\u5165\u7684 ",(0,s.jsx)(i.code,{children:"obj"})," \u662f\u6253\u5f00\u7684 ",(0,s.jsx)(i.code,{children:"camera"})," \u8fd8\u662f ",(0,s.jsx)(i.code,{children:"vps"}),"\u51b3\u5b9a\u5173\u95edcamera\u8fd8\u662fvps\u6a21\u5757\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_vio_get_frame",children:"sp_vio_get_frame"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_vio_get_frame(void *obj, char *frame_buffer, int32_t width, int32_t height, const int32_t timeout)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["\u83b7\u53d6\u6307\u5b9a\u5206\u8fa8\u7387\u7684\u56fe\u50cf\u5e27\u6570\u636e\uff08\u5206\u8fa8\u7387\u5728\u6253\u5f00\u6a21\u5757\u65f6\u9700\u8981\u4f20\u5165\uff0c\u5426\u5219\u4f1a\u83b7\u53d6\u5931\u8d25\uff09\u3002\u8fd4\u56de\u6570\u636e\u683c\u5f0f\u4e3a ",(0,s.jsx)(i.code,{children:"NV12"})," \u7684 ",(0,s.jsx)(i.code,{children:"YUV"})," \u56fe\u50cf\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"frame_buffer"}),"\uff1a\u5df2\u7ecf\u9884\u5206\u914d\u5185\u5b58\u7684buffer\u6307\u9488\uff0c\u7528\u4e8e\u4fdd\u5b58\u83b7\u53d6\u51fa\u6765\u7684\u56fe\u7247\uff0c\u76ee\u524d\u83b7\u53d6\u5230\u7684\u56fe\u50cf\u90fd\u662f",(0,s.jsx)(i.code,{children:"NV12"}),"\u683c\u5f0f\uff0c\u6240\u4ee5\u9884\u5206\u914d\u5185\u5b58\u5927\u5c0f\u53ef\u4ee5\u7531\u516c\u5f0f",(0,s.jsx)(i.code,{children:"\u9ad8 * \u5bbd * 3 / 2 "}),"\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528\u63d0\u4f9b\u7684\u5b8f\u5b9a\u4e49 ",(0,s.jsx)(i.code,{children:"FRAME_BUFFER_SIZE(w, h)"}),"\u8fdb\u884c\u5185\u5b58\u5927\u5c0f\u8ba1\u7b97"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"width"}),"\uff1a",(0,s.jsx)(i.code,{children:"image_buffer"}),"\u4fdd\u5b58\u56fe\u7247\u7684\u5bbd\uff0c\u5fc5\u987b\u662f\u5728",(0,s.jsx)(i.code,{children:"sp_open_camera"}),"\u6216\u8005",(0,s.jsx)(i.code,{children:"sp_open_vps"}),"\u914d\u7f6e\u597d\u7684\u8f93\u51fa\u5bbd"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"height"}),"\uff1a",(0,s.jsx)(i.code,{children:"image_buffer"}),"\u4fdd\u5b58\u56fe\u7247\u7684\u9ad8\uff0c\u5fc5\u987b\u662f\u5728",(0,s.jsx)(i.code,{children:"sp_open_camera"}),"\u6216\u8005",(0,s.jsx)(i.code,{children:"sp_open_vps"}),"\u914d\u7f6e\u597d\u7684\u8f93\u51fa\u9ad8"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timeout"}),"\uff1a\u83b7\u53d6\u56fe\u7247\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a",(0,s.jsx)(i.code,{children:"ms"}),"\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3a",(0,s.jsx)(i.code,{children:"2000"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_vio_get_raw",children:"sp_vio_get_raw"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_vio_get_raw(void *obj, char *frame_buffer, int32_t width, int32_t height, const int32_t timeout)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u83b7\u53d6\u6444\u50cf\u5934\u7684raw\u56fe\u6570\u636e"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"frame_buffer"}),"\uff1a\u5df2\u7ecf\u9884\u5206\u914d\u5185\u5b58\u7684buffer\u6307\u9488\uff0c\u7528\u4e8e\u4fdd\u5b58\u83b7\u53d6\u51fa\u6765\u7684raw\u56fe\uff0c\u9884\u5206\u914d\u5185\u5b58\u5b57\u8282\u5927\u5c0f\u53ef\u4ee5\u7531\u516c\u5f0f",(0,s.jsx)(i.code,{children:"(\u9ad8 * \u5bbd * \u56fe\u50cf\u6df1\u5ea6)/8"}),"\u8ba1\u7b97\u5f97\u51fa"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"width"}),"\uff1a\u83b7\u53d6raw\u56fe\u65f6\u4f20",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"height"}),"\uff1a\u83b7\u53d6raw\u56fe\u65f6\u4f20",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timeout"}),"\uff1a\u83b7\u53d6\u56fe\u7247\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a",(0,s.jsx)(i.code,{children:"ms"}),"\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3a",(0,s.jsx)(i.code,{children:"2000"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_vio_get_yuv",children:"sp_vio_get_yuv"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_vio_get_yuv(void *obj, char *frame_buffer, int32_t width, int32_t height, const int32_t timeout)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u83b7\u53d6\u6444\u50cf\u5934\u7684ISP\u6a21\u5757\u7684YUV\u6570\u636e"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"frame_buffer"}),"\uff1a\u5df2\u7ecf\u9884\u5206\u914d\u5185\u5b58\u7684buffer\u6307\u9488\uff0c\u7528\u4e8e\u4fdd\u5b58\u83b7\u53d6\u51fa\u6765\u7684\u56fe\u7247\uff0c\u76ee\u524d\u83b7\u53d6\u5230\u7684\u56fe\u50cf\u90fd\u662f",(0,s.jsx)(i.code,{children:"NV12"}),"\u683c\u5f0f\uff0c\u6240\u4ee5\u9884\u5206\u914d\u5185\u5b58\u5927\u5c0f\u53ef\u4ee5\u7531\u516c\u5f0f",(0,s.jsx)(i.code,{children:"\u9ad8 * \u5bbd * 3 / 2 "}),"\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528\u63d0\u4f9b\u7684\u5b8f\u5b9a\u4e49 ",(0,s.jsx)(i.code,{children:"FRAME_BUFFER_SIZE(w, h)"}),"\u8fdb\u884c\u5185\u5b58\u5927\u5c0f\u8ba1\u7b97"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"width"}),"\uff1a\u83b7\u53d6ISP\u7684YUV\u6570\u636e\u65f6\u4f20",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"height"}),"\uff1a\u83b7\u53d6ISP\u7684YUV\u6570\u636e\u4f20",(0,s.jsx)(i.code,{children:"NULL"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"timeout"}),"\uff1a\u83b7\u53d6\u56fe\u7247\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a",(0,s.jsx)(i.code,{children:"ms"}),"\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3a",(0,s.jsx)(i.code,{children:"2000"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"}),"\n",(0,s.jsx)(i.h2,{id:"sp_vio_set_frame",children:"sp_vio_set_frame"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u51fd\u6570\u539f\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.code,{children:"int32_t sp_vio_set_frame(void *obj, void *frame_buffer, int32_t size)"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"})}),"\n",(0,s.jsxs)(i.p,{children:["\u5728\u4f7f\u7528",(0,s.jsx)(i.code,{children:"vps"}),"\u6a21\u5757\u529f\u80fd\u65f6\uff0c\u6e90\u6570\u636e\u9700\u8981\u901a\u8fc7\u8c03\u7528\u672c\u63a5\u53e3\u9001\u5165\uff0c",(0,s.jsx)(i.code,{children:"frame_buffer"}),"\u91cc\u9762\u7684\u6570\u636e\u5fc5\u987b\u662f ",(0,s.jsx)(i.code,{children:"NV12"})," \u683c\u5f0f\u7684\u56fe\u50cf\u6570\u636e\uff0c\u5206\u8fa8\u7387\u5fc5\u987b\u548c\u8c03\u7528",(0,s.jsx)(i.code,{children:"sp_open_vps"}),"\u63a5\u53e3\u662f\u7684\u539f\u59cb\u5e27\u5206\u8fa8\u7387\u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u53c2\u6570\u3011"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"obj"}),"\uff1a \u5df2\u7ecf\u521d\u59cb\u5316\u7684",(0,s.jsx)(i.code,{children:"VIO"}),"\u5bf9\u8c61\u6307\u9488"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"image_buffer"}),"\uff1a\u9700\u8981\u5904\u7406\u7684\u56fe\u50cf\u5e27\u6570\u636e\uff0c\u5fc5\u987b\u662f ",(0,s.jsx)(i.code,{children:"NV12"})," \u683c\u5f0f\u7684\u56fe\u50cf\u6570\u636e\uff0c\u5206\u8fa8\u7387\u5fc5\u987b\u548c\u8c03\u7528",(0,s.jsx)(i.code,{children:"sp_open_vps"}),"\u63a5\u53e3\u662f\u7684\u539f\u59cb\u5e27\u5206\u8fa8\u7387\u4e00\u81f4\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"size"}),": \u5e27\u5927\u5c0f"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"\u3010\u8fd4\u56de\u7c7b\u578b\u3011"})}),"\n",(0,s.jsx)(i.p,{children:"\u6210\u529f\u8fd4\u56de 0\uff0c\u5931\u8d25\u8fd4\u56de -1"})]})}function j(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var s=n(96540);const d={},c=s.createContext(d);function r(e){const i=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(c.Provider,{value:i},e.children)}}}]);