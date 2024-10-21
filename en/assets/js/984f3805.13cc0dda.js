"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8822],{49377:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var c=d(74848),i=d(28453);const r={sidebar_position:3},t="Decoder\u5bf9\u8c61",l={id:"Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_decoder",title:"Decoder\u5bf9\u8c61",description:"Decoder\u5bf9\u8c61\u5b9e\u73b0\u4e86\u5bf9\u89c6\u9891\u6570\u636e\u7684\u89e3\u7801\u529f\u80fd\uff0c\u5305\u542b\u4e86decode\u3001setimg\u3001getimg\u3001close\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3/object_decoder.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3",slug:"/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_decoder",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_decoder",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_x3/object_decoder.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Encoder\u5bf9\u8c61",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_encoder"},next:{title:"Display\u5bf9\u8c61",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_display"}},s={},o=[{value:"decode",id:"decode",level:2},{value:"get_img",id:"get_img",level:2},{value:"set_img",id:"set_img",level:2},{value:"close",id:"close",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"decoder\u5bf9\u8c61",children:"Decoder\u5bf9\u8c61"}),"\n",(0,c.jsxs)(n.p,{children:["Decoder\u5bf9\u8c61\u5b9e\u73b0\u4e86\u5bf9\u89c6\u9891\u6570\u636e\u7684\u89e3\u7801\u529f\u80fd\uff0c\u5305\u542b\u4e86",(0,c.jsx)(n.code,{children:"decode"}),"\u3001",(0,c.jsx)(n.code,{children:"set_img"}),"\u3001",(0,c.jsx)(n.code,{children:"get_img"}),"\u3001",(0,c.jsx)(n.code,{children:"close"}),"\u7b49\u51e0\u79cd\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,c.jsx)(n.h2,{id:"decode",children:"decode"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u4f7f\u80fddecode\u89e3\u7801\u6a21\u5757\uff0c\u5e76\u5bf9\u89c6\u9891\u6587\u4ef6\u8fdb\u884c\u89e3\u7801"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Decoder.decode(file, video_chn, decode_type, width, height)\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"file"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u89e3\u7801\u7684\u6587\u4ef6\u540d"}),(0,c.jsx)(n.td,{children:"\u65e0"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"video_chn"}),(0,c.jsx)(n.td,{children:"\u6307\u5b9a\u89c6\u9891\u89e3\u7801\u5668\u7684\u901a\u9053\u53f7"}),(0,c.jsx)(n.td,{children:"\u8303\u56f40~31"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"decode_type"}),(0,c.jsx)(n.td,{children:"\u89c6\u9891\u89e3\u7801\u7c7b\u578b"}),(0,c.jsxs)(n.td,{children:["\u8303\u56f41~3\uff0c\u5206\u522b\u5bf9\u5e94",(0,c.jsx)(n.code,{children:"H264"}),"\u3001",(0,c.jsx)(n.code,{children:"H265"}),"\u3001",(0,c.jsx)(n.code,{children:"MJPEG"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"width"}),(0,c.jsx)(n.td,{children:"\u8f93\u5165\u89e3\u7801\u6a21\u5757\u7684\u56fe\u50cf\u5bbd\u5ea6"}),(0,c.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc74096"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"height"}),(0,c.jsx)(n.td,{children:"\u8f93\u5165\u89e3\u7801\u6a21\u5757\u7684\u56fe\u50cf\u9ad8\u5ea6"}),(0,c.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc74096"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'#create decode object\ndecode = libsrcampy.Decoder()\n\n#enable decode channel 0, solution: 1080p, format: H264\nret = dec.decode("encode.h264", 0, 1, 1920, 1080)\n'})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\u4e3a2\u4e2a\u6210\u5458\u7684",(0,c.jsx)(n.code,{children:"list"}),"\u6570\u636e"]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"list[0]"}),(0,c.jsx)(n.td,{children:"0\uff1a\u89e3\u7801\u6210\u529f\uff0c-1\uff1a\u89e3\u7801\u5931\u8d25"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"list[1]"}),(0,c.jsx)(n.td,{children:"\u8f93\u5165\u7801\u6d41\u6587\u4ef6\u7684\u5e27\u6570\uff0c\u89e3\u7801\u6210\u529f\u65f6\u6709\u6548"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)(n.h2,{id:"get_img",children:"get_img"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u83b7\u53d6\u89e3\u7801\u6a21\u5757\u7684\u8f93\u51fa\u7ed3\u679c"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Decoder.get_img()\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'ret = dec.decode("encode.h264", 0, 1, 1920, 1080)\nprint ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\nimg = dec.get_img()\n'})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u89e3\u7801\u6570\u636e"})]})})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u8c03\u7528",(0,c.jsx)(n.code,{children:"Decoder.decode()"}),"\u521b\u5efa\u89e3\u7801\u901a\u9053\u540e\u4f7f\u7528"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_vio import libsrcampy\n\ndef test_decode():\n    #create decode object\n    dec = libsrcampy.Decoder()\n\n    #enable decode function\n    #decode input: encode.h264, solution: 1080p, format: h264\n    ret = dec.decode("encode.h264", 0, 1, 1920, 1080)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n    \n    #get decoder output\n    img = dec.get_img()\n    if img is not None:\n        #save file\n        fo = open("output.img", "wb")\n        fo.write(img)\n        fo.close()\n        print("decode save img file success")\n    else:\n        print("decode save img file failed")\n\n    dec.close()\n    print("test_decode done!!!")\n\ntest_decode()\n'})}),"\n",(0,c.jsx)(n.h2,{id:"set_img",children:"set_img"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u5c06\u5355\u5e27\u7f16\u7801\u6570\u636e\u9001\u5165\u89e3\u7801\u6a21\u5757\uff0c\u5e76\u8fdb\u884c\u89e3\u7801"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Decoder.set_img(img, chn, eos)\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,c.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"img"}),(0,c.jsx)(n.td,{children:"\u9700\u8981\u89e3\u7801\u7684\u5355\u5e27\u6570\u636e"}),(0,c.jsx)(n.td,{children:"\u65e0"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"chn"}),(0,c.jsx)(n.td,{children:"\u89e3\u7801\u5668\u901a\u9053\u53f7"}),(0,c.jsx)(n.td,{children:"\u8303\u56f40~31"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"eos"}),(0,c.jsx)(n.td,{children:"\u89e3\u7801\u6570\u636e\u662f\u5426\u7ed3\u675f"}),(0,c.jsx)(n.td,{children:"0\uff1a\u672a\u7ed3\u675f\uff0c1\uff1a\u7ed3\u675f"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u8c03\u7528",(0,c.jsx)(n.code,{children:"Decoder.decode()"}),"\u521b\u5efa\u89e3\u7801\u901a\u9053\u540e\u4f7f\u7528\uff0c\u4e14\u89e3\u7801\u901a\u9053\u521b\u5efa\u65f6\u5165\u53c2",(0,c.jsx)(n.code,{children:"file"}),"\u7f6e\u7a7a"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_vio import libsrcampy\n\ndef test_cam_bind_encode_decode_bind_display():\n    #camera start\n    cam = libsrcampy.Camera()\n    # If you know the pipe_id and video_index, you can specify the first two arguments.\n    # ret = cam.open_cam(0, 1, 30, [1920, 1280], [1080, 720])\n\n    # If you do not know the pipe_id and video_index, you can use the following\n    # code to detect them, and it will default to using the first detected camera.\n    ret = cam.open_cam(0, -1, 30, [1920, 1280], [1080, 720])\n    print("Camera open_cam return:%d" % ret)\n\n    #enable encoder\n    enc = libsrcampy.Encoder()\n    ret = enc.encode(0, 1, 1920, 1080)\n    print("Encoder encode return:%d" % ret)\n\n    #enable decoder\n    dec = libsrcampy.Decoder()\n    ret = dec.decode("", 0, 1, 1920, 1080)\n    print ("Decoder return:%d frame count: %d" %(ret[0], ret[1]))\n\n    ret = libsrcampy.bind(cam, enc)\n    print("libsrcampy bind return:%d" % ret)\n\n    a = 0\n    while a < 100:\n        #get encode image from encoder\n        img = enc.get_img()\n        if img is not None:\n            #send encode image to decoder\n            dec.set_img(img)\n            print("encode get image success count: %d" % a)\n        else:\n            print("encode get image failed count: %d" % a)\n        a = a + 1\n\n    ret = libsrcampy.unbind(cam, enc)\n    dec.close()\n    enc.close()\n    cam.close_cam()\n    print("test_cam_bind_encode_decode_bind_display done!!!")\n\ntest_cam_bind_encode_decode_bind_display()\n'})}),"\n",(0,c.jsx)(n.h2,{id:"close",children:"close"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u5173\u95ed\u89e3\u7801\u6a21\u5757"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"Decoder.close()\n"})}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,c.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"0"}),(0,c.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"-1"}),(0,c.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,c.jsxs)(n.p,{children:["\u9000\u51fa\u7a0b\u5e8f\u65f6\u9700\u8981\u8c03\u7528",(0,c.jsx)(n.code,{children:"close"}),"\u63a5\u53e3\u4ee5\u91ca\u653e\u8d44\u6e90\u3002"]}),"\n",(0,c.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,c.jsx)(n.p,{children:"\u65e0"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>t,x:()=>l});var c=d(96540);const i={},r=c.createContext(i);function t(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);