"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6265],{72131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=s(74848),o=s(28453);const r={sidebar_position:4},d="4.1.4 \u57fa\u4e8eUSB\u6444\u50cf\u5934\u63a8\u7406{#usb}",c={id:"Algorithm_Application/pydev_dnn_demo/usb_camera",title:"4.1.4 \u57fa\u4e8eUSB\u6444\u50cf\u5934\u63a8\u7406",description:"usb}",source:"@site/docs/04_Algorithm_Application/01_pydev_dnn_demo/usb_camera.md",sourceDirName:"04_Algorithm_Application/01_pydev_dnn_demo",slug:"/Algorithm_Application/pydev_dnn_demo/usb_camera",permalink:"/rdk_doc/Algorithm_Application/pydev_dnn_demo/usb_camera",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/04_Algorithm_Application/01_pydev_dnn_demo/usb_camera.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"4.1.3 \u9759\u6001\u56fe\u7247\u63a8\u7406",permalink:"/rdk_doc/Algorithm_Application/pydev_dnn_demo/static_image"},next:{title:"4.1.5 \u57fa\u4e8eMIPI\u6444\u50cf\u5934\u63a8\u7406",permalink:"/rdk_doc/Algorithm_Application/pydev_dnn_demo/mipi_camera"}},t={},l=[{value:"\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\u2014fcos",id:"\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5fcos",level:2},{value:"\u8fd0\u884c\u65b9\u6cd5",id:"\u8fd0\u884c\u65b9\u6cd5",level:3},{value:"\u793a\u4f8b\u4ee3\u7801\u89e3\u6790",id:"\u793a\u4f8b\u4ee3\u7801\u89e3\u6790",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"usb",children:"4.1.4 \u57fa\u4e8eUSB\u6444\u50cf\u5934\u63a8\u7406"}),"\n",(0,i.jsx)(n.h2,{id:"\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5fcos",children:"\u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\u2014fcos"}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u793a\u4f8b\u4e3b\u8981\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u52a0\u8f7d ",(0,i.jsx)(n.code,{children:"fcos"})," \u76ee\u6807\u68c0\u6d4b\u7b97\u6cd5\u6a21\u578b\uff08\u57fa\u4e8eCOCO\u6570\u636e\u96c6\u8bad\u7ec3\u768480\u4e2a\u7c7b\u522b\u7684\u76ee\u6807\u68c0\u6d4b\uff09"]}),"\n",(0,i.jsx)(n.li,{children:"\u4eceUSB\u6444\u50cf\u5934\u8bfb\u53d6\u89c6\u9891\u6d41\uff0c\u5e76\u8fdb\u884c\u63a8\u7406"}),"\n",(0,i.jsx)(n.li,{children:"\u89e3\u6790\u6a21\u578b\u8f93\u51fa\u5e76\u5c06\u7ed3\u679c\u6e32\u67d3\u5230\u539f\u59cb\u89c6\u9891\u6d41"}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7",(0,i.jsx)(n.code,{children:"HDMI"}),"\u63a5\u53e3\u8f93\u51fa\u6e32\u67d3\u540e\u7684\u89c6\u9891\u6d41"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8fd0\u884c\u65b9\u6cd5",children:"\u8fd0\u884c\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bf7\u67e5\u9605 ",(0,i.jsx)(n.a,{href:"/Basic_Application/Image/usb_camera",children:"USB\u6444\u50cf\u5934AI\u63a8\u7406"})," \u4e86\u89e3\u5982\u4f55\u5feb\u901f\u8fd0\u884c\u672c\u793a\u4f8b\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u793a\u4f8b\u4ee3\u7801\u89e3\u6790",children:"\u793a\u4f8b\u4ee3\u7801\u89e3\u6790"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bfc\u5165\u7b97\u6cd5\u63a8\u7406\u6a21\u5757hobot_dnn\u3001\u89c6\u9891\u8f93\u51fa\u6a21\u5757hobot_vio\u3001numpy\u3001opencv\u3001colorsys\u7b49\u6a21\u5757"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"from hobot_dnn import pyeasy_dnn as dnn\nfrom hobot_vio import libsrcampy as srcampy\nimport numpy as np\nimport cv2\nimport colorsys\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u52a0\u8f7d\u6a21\u578b\u6587\u4ef6"}),"\n",(0,i.jsxs)(n.p,{children:["\u8c03\u7528",(0,i.jsx)(n.code,{children:"load"}),"\u65b9\u6cd5\u52a0\u8f7d\u6a21\u578b\u6587\u4ef6\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"hobot_dnn.pyeasy_dnn.Model"})," \u7c7b\u7684 list\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"models = dnn.load('../models/fcos_512x512_nv12.bin')\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"fcos"}),"\u6a21\u578b\u7684\u8f93\u5165\u662f",(0,i.jsx)(n.code,{children:"1x3x512x512"}),"\u6570\u636e\uff0c\u683c\u5f0f\u4e3a",(0,i.jsx)(n.code,{children:"NCHW"}),"\u3002\u8f93\u51fa\u4e3a15\u7ec4\u6570\u636e\uff0c\u7528\u6765\u8868\u793a\u68c0\u6d4b\u5230\u7684\u7269\u4f53\u68c0\u6d4b\u6846\u3002\u793a\u4f8b\u4e2d\u5b9a\u4e49\u4e86",(0,i.jsx)(n.code,{children:"print_properties"}),"\u51fd\u6570\u7528\u6765\u8f93\u51fa\u6a21\u578b\u7684\u8f93\u5165\u3001\u8f93\u51fa\u53c2\u6570\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# print properties of input tensor\nprint_properties(models[0].inputs[0].properties)\n# print properties of output tensor\nprint(len(models[0].outputs))\nfor output in models[0].outputs:\n    print_properties(output.properties)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6570\u636e\u9884\u5904\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528opencv\u6253\u5f00USB\u6444\u50cf\u5934\u8bbe\u5907\u8282\u70b9",(0,i.jsx)(n.code,{children:"/dev/video8"}),"\uff0c\u83b7\u53d6\u5b9e\u65f6\u56fe\u50cf\uff0c\u5e76\u628a\u56fe\u50cf\u7f29\u653e\u5230\u7b26\u5408\u6a21\u578b\u8f93\u5165tensor\u7684\u5c3a\u5bf8"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# open usb camera: /dev/video8\ncap = cv2.VideoCapture(8)\nif(not cap.isOpened()):\n    exit(-1)\nprint(\"Open usb camera successfully\")\n# set the output of usb camera to MJPEG, solution 640 x 480\ncodec = cv2.VideoWriter_fourcc( 'M', 'J', 'P', 'G' )\ncap.set(cv2.CAP_PROP_FOURCC, codec)\ncap.set(cv2.CAP_PROP_FPS, 30) \ncap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)\ncap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u540e\u628abgr\u683c\u5f0f\u7684\u56fe\u50cf\u8f6c\u6362\u6210\u7b26\u5408\u6a21\u578b\u8f93\u5165\u7684 NV12 \u683c\u5f0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"nv12_data = bgr2nv12_opencv(resized_data)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6a21\u578b\u63a8\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,i.jsx)(n.a,{href:"/rdk_doc/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"Model"})," \u7c7b\u7684 ",(0,i.jsx)(n.code,{children:"forward"})," \u63a5\u53e3\u8fdb\u884c\u63a8\u7406\uff0c\u6a21\u578b\u8f93\u51fa15\u7ec4\u6570\u636e\uff0c\u7528\u6765\u8868\u793a\u68c0\u6d4b\u5230\u7684\u7269\u4f53\u68c0\u6d4b\u6846\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"outputs = models[0].forward(nv12_data)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7b97\u6cd5\u540e\u5904\u7406"}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u4e2d\u7684\u540e\u5904\u7406\u51fd\u6570",(0,i.jsx)(n.code,{children:"postprcess"}),"\uff0c\u4f1a\u5904\u7406\u6a21\u578b\u8f93\u51fa\u7684\u7269\u4f53\u7c7b\u522b\u3001\u68c0\u6d4b\u6846\u3001\u7f6e\u4fe1\u5ea6\u7b49\u4fe1\u606f\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"prediction_bbox = postprocess(outputs, input_shape, origin_img_shape=(1080,1920))\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u68c0\u6d4b\u7ed3\u679c\u53ef\u89c6\u5316"}),"\n",(0,i.jsxs)(n.p,{children:["\u793a\u4f8b\u5bf9\u7b97\u6cd5\u7ed3\u679c\u548c\u539f\u59cb\u89c6\u9891\u6d41\u8fdb\u884c\u4e86\u6e32\u67d3\uff0c\u5e76\u901a\u8fc7",(0,i.jsx)(n.code,{children:"HDMI"}),"\u63a5\u53e3\u8f93\u51fa\uff0c\u7528\u6237\u53ef\u5728\u663e\u793a\u5668\u4e0a\u5b9e\u65f6\u9884\u89c8\u6548\u679c\u3002\u663e\u793a\u90e8\u5206\u7528\u5230\u4e86hobot_vio\u6a21\u5757\u7684Display\u529f\u80fd\uff0c\u8be5\u6a21\u5757\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b ",(0,i.jsx)(n.a,{href:"/rdk_doc/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_x3/object_display",children:"Display\u7ae0\u8282"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# create display object\ndisp = srcampy.Display()\n# set solution to 1920 x 1080\ndisp.display(0, 1920, 1080)\n\n# if the solution of image is not 1920 x 1080, do resize\nif frame.shape[0]!=1080 and frame.shape[1]!=1920:\n    frame = cv2.resize(frame, (1920,1080), interpolation=cv2.INTER_AREA)\n\n# render the detection results to image\nbox_bgr = draw_bboxs(frame, prediction_bbox)\n\n# convert BGR to NV12\nbox_nv12 = bgr2nv12_opencv(box_bgr)\n# do display\ndisp.set_img(box_nv12.tobytes())\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(96540);const o={},r=i.createContext(o);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);