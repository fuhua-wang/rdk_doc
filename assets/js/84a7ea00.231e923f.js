"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5897],{94706:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=d(74848),s=d(28453);const l={sidebar_position:4},i="Display\u5bf9\u8c61",c={id:"Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_display",title:"Display\u5bf9\u8c61",description:"Display\u5bf9\u8c61\u5b9e\u73b0\u4e86\u89c6\u9891\u663e\u793a\u529f\u80fd\uff0c\u53ef\u4ee5\u5c06\u56fe\u50cf\u6570\u636e\u901a\u8fc7HDMI\u63a5\u53e3\u8f93\u51fa\u5230\u663e\u793a\u5668\uff0c\u8be5\u5bf9\u8c61\u5305\u542bdisplay\u3001sendframe\u3001setrect\u3001set_word\u3001close\u7b49\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a",source:"@site/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra/object_display.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra",slug:"/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_display",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_display",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/04_multi_media/multi_media_api/pydev_multimedia_api_ultra/object_display.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Decoder\u5bf9\u8c61",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/pydev_multimedia_api_ultra/object_decoder"},next:{title:"VIO\uff08\u89c6\u9891\u8f93\u5165\uff09API",permalink:"/rdk_doc/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_ultra/vio_api"}},t={},h=[{value:"display",id:"display",level:2},{value:"send_frame",id:"send_frame",level:2},{value:"set_rect",id:"set_rect",level:2},{value:"set_word",id:"set_word",level:2},{value:"close",id:"close",level:2},{value:"bind\u63a5\u53e3",id:"bind\u63a5\u53e3",level:2},{value:"unbind\u63a5\u53e3",id:"unbind\u63a5\u53e3",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"display\u5bf9\u8c61",children:"Display\u5bf9\u8c61"}),"\n",(0,r.jsxs)(n.p,{children:["Display\u5bf9\u8c61\u5b9e\u73b0\u4e86\u89c6\u9891\u663e\u793a\u529f\u80fd\uff0c\u53ef\u4ee5\u5c06\u56fe\u50cf\u6570\u636e\u901a\u8fc7",(0,r.jsx)(n.code,{children:"HDMI"}),"\u63a5\u53e3\u8f93\u51fa\u5230\u663e\u793a\u5668\uff0c\u8be5\u5bf9\u8c61\u5305\u542b",(0,r.jsx)(n.code,{children:"display"}),"\u3001",(0,r.jsx)(n.code,{children:"send_frame"}),"\u3001",(0,r.jsx)(n.code,{children:"set_rect"}),"\u3001",(0,r.jsx)(n.code,{children:"set_word"}),"\u3001",(0,r.jsx)(n.code,{children:"close"}),"\u7b49\u65b9\u6cd5\uff0c\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.h2,{id:"display",children:"display"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u663e\u793a\u6a21\u5757\u521d\u59cb\u5316\uff0c\u5e76\u914d\u7f6e\u663e\u793a\u53c2\u6570"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Display.display([width, height])\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"width"}),(0,r.jsx)(n.td,{children:"\u8f93\u5165\u56fe\u50cf\u7684\u5bbd\u5ea6"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc71920"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"height"}),(0,r.jsx)(n.td,{children:"\u8f93\u5165\u56fe\u50cf\u7684\u9ad8\u5ea6"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc71080"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"#create display object\ndisp = srcampy.Display()\n\n#enable display function, solution: 1080p, interface: HDMI\nret = disp.display([1920, 1080])\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u524d\u53ea\u652f\u6301",(0,r.jsx)(n.code,{children:"1920x1080"})," \u5206\u8fa8\u7387\u3002"]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)(n.h2,{id:"send_frame",children:"send_frame"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u5411display\u6a21\u5757\u8f93\u5165\u663e\u793a\u6570\u636e\uff0c\u683c\u5f0f\u9700\u8981\u4e3a",(0,r.jsx)(n.code,{children:"NV12"})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Display.send_frame(img)\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"img"}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u663e\u793a\u7684\u56fe\u50cf\u6570\u636e"}),(0,r.jsx)(n.td,{children:"NV12\u683c\u5f0f"})]})})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u4f7f\u7528",(0,r.jsx)(n.code,{children:"display"}),"\u63a5\u53e3\u4f7f\u80fd\u663e\u793a\u529f\u80fd\u540e\u4f7f\u7528\uff0c\u9001\u5165\u6570\u636e\u9700\u8981\u4e3a",(0,r.jsx)(n.code,{children:"NV12"}),"\u683c\u5f0f"]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import sys, os, time\n\nimport numpy as np\nimport cv2\nfrom hobot_spdev import libsppydev as srcampy\n\ndef test_display():\n    #create display object\n    disp = srcampy.Display()\n\n    #enable display function\n    ret = disp.display([1920, 1080])\n    print ("Display display 0 return:%d" % ret)\n\n    fo = open("output.img", "rb")\n    img = fo.read()\n    fo.close()\n\n    #send image data to display\n    ret = disp.send_frame(img)\n    print ("Display send_frame return:%d" % ret)\n\n    time.sleep(3)\n\n    disp.close()\n    print("test_display done!!!")\n\ntest_display()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"set_rect",children:"set_rect"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u663e\u793a\u6a21\u5757\u7684\u56fe\u5f62\u5c42\u7ed8\u5236\u77e9\u5f62\u6846"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Display.set_rect(x0, y0, x1, y1, flush, color, line_width)\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u5b9a\u4e49\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x0"}),(0,r.jsx)(n.td,{children:"\u7ed8\u5236\u77e9\u5f62\u6846\u5de6\u4e0a\u89d2\u7684\u5750\u6807\u503cx"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u89c6\u9891\u753b\u9762\u5c3a\u5bf8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"y0"}),(0,r.jsx)(n.td,{children:"\u7ed8\u5236\u77e9\u5f62\u6846\u5de6\u4e0a\u89d2\u7684\u5750\u6807\u503cy"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u89c6\u9891\u753b\u9762\u5c3a\u5bf8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x1"}),(0,r.jsx)(n.td,{children:"\u7ed8\u5236\u77e9\u5f62\u6846\u53f3\u4e0b\u89d2\u7684\u5750\u6807\u503cx"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u89c6\u9891\u753b\u9762\u5c3a\u5bf8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"y1"}),(0,r.jsx)(n.td,{children:"\u7ed8\u5236\u77e9\u5f62\u6846\u53f3\u4e0b\u89d2\u7684\u5750\u6807\u503cy"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u89c6\u9891\u753b\u9762\u5c3a\u5bf8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"flush"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u6e05\u96f6\u56fe\u5f62\u5c42buffer"}),(0,r.jsx)(n.td,{children:"0\uff1a\u5426\uff0c1\uff1a\u662f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color"}),(0,r.jsx)(n.td,{children:"\u77e9\u5f62\u6846\u989c\u8272\u8bbe\u7f6e"}),(0,r.jsx)(n.td,{children:"ARGB8888\u683c\u5f0f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"line_width"}),(0,r.jsx)(n.td,{children:"\u77e9\u5f62\u6846\u8fb9\u7684\u5bbd\u5ea6"}),(0,r.jsx)(n.td,{children:"\u8303\u56f41~16\uff0c\u9ed8\u8ba4\u4e3a4"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'#enable graph layer 2\nret = disp.display(2)\nprint ("Display display 2 return:%d" % ret)\n\n#set osd rectangle\nret = disp.set_rect(100, 100, 1920, 200,  flush = 1,  color = 0xffff00ff)\n'})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u4f7f\u7528",(0,r.jsx)(n.code,{children:"display"}),"\u63a5\u53e3\u4f7f\u80fd\u663e\u793a\u529f\u80fd\u540e\u4f7f\u7528"]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)(n.h2,{id:"set_word",children:"set_word"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u663e\u793a\u6a21\u5757\u7684\u56fe\u5f62\u5c42\u7ed8\u5236\u5b57\u7b26"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Display.set_word(x, y, str,flush, color, line_width)\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"\u7ed8\u5236\u5b57\u7b26\u7684\u8d77\u59cb\u5750\u6807\u503cx"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u89c6\u9891\u753b\u9762\u5c3a\u5bf8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"y"}),(0,r.jsx)(n.td,{children:"\u7ed8\u5236\u5b57\u7b26\u7684\u8d77\u59cb\u5750\u6807\u503cy"}),(0,r.jsx)(n.td,{children:"\u4e0d\u8d85\u8fc7\u89c6\u9891\u753b\u9762\u5c3a\u5bf8"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"\u9700\u8981\u7ed8\u5236\u7684\u5b57\u7b26\u6570\u636e"}),(0,r.jsx)(n.td,{children:"GB2312\u7f16\u7801"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"flush"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u6e05\u96f6\u56fe\u5f62\u5c42buffer"}),(0,r.jsx)(n.td,{children:"0\uff1a\u5426\uff0c1\uff1a\u662f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"color"}),(0,r.jsx)(n.td,{children:"\u5b57\u7b26\u989c\u8272\u8bbe\u7f6e"}),(0,r.jsx)(n.td,{children:"ARGB8888\u683c\u5f0f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"line_width"}),(0,r.jsx)(n.td,{children:"\u5b57\u7b26\u7ebf\u6761\u7684\u5bbd\u5ea6"}),(0,r.jsx)(n.td,{children:"\u8303\u56f41~16\uff0c\u9ed8\u8ba4\u4e3a1"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'#enable graph layer 2\nret = disp.display(2)\nprint ("Display display 2 return:%d" % ret)\n\n#set osd string\nstring = "horizon"\nret = disp.set_word(300, 300, string.encode(\'gb2312\'),  0, 0xff00ffff)\nprint ("Display set_word return:%d" % ret)\n'})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u4f7f\u7528",(0,r.jsx)(n.code,{children:"display"}),"\u63a5\u53e3\u4f7f\u80fd\u663e\u793a\u529f\u80fd\u540e\u4f7f\u7528"]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)(n.h2,{id:"close",children:"close"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u5173\u95ed\u663e\u793a\u6a21\u5757"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"Display.close()\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u9700\u8981\u5728\u4f7f\u7528",(0,r.jsx)(n.code,{children:"display"}),"\u63a5\u53e3\u4f7f\u80fd\u663e\u793a\u529f\u80fd\u540e\u4f7f\u7528"]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)(n.h2,{id:"bind\u63a5\u53e3",children:"bind\u63a5\u53e3"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u63a5\u53e3\u53ef\u4ee5\u628a",(0,r.jsx)(n.code,{children:"Camera"}),"\u3001",(0,r.jsx)(n.code,{children:"Encoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Decoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Display"}),"\u6a21\u5757\u7684\u8f93\u51fa\u4e0e\u8f93\u5165\u6570\u636e\u6d41\u8fdb\u884c\u7ed1\u5b9a\uff0c\u7ed1\u5b9a\u540e\u65e0\u9700\u7528\u6237\u64cd\u4f5c\uff0c\u6570\u636e\u53ef\u5728\u7ed1\u5b9a\u6a21\u5757\u4e4b\u95f4\u81ea\u52a8\u6d41\u8f6c\u3002\u4f8b\u5982\uff0c\u7ed1\u5b9a ",(0,r.jsx)(n.code,{children:"Camera"})," \u548c ",(0,r.jsx)(n.code,{children:"Display"})," \u540e\uff0c\u6444\u50cf\u5934\u6570\u636e\u4f1a\u81ea\u52a8\u901a\u8fc7\u663e\u793a\u6a21\u5757\u8f93\u51fa\u5230\u663e\u793a\u5c4f\u4e0a\uff0c\u65e0\u9700\u8c03\u7528\u989d\u5916\u63a5\u53e3\u3002"]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"    srcampy.bind(src, dst)\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"src"}),(0,r.jsx)(n.td,{children:"\u6e90\u6570\u636e\u6a21\u5757"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Camera"}),"\u3001",(0,r.jsx)(n.code,{children:"Encoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Decoder"}),"\u6a21\u5757"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dst"}),(0,r.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u6a21\u5757"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Camera"}),"\u3001",(0,r.jsx)(n.code,{children:"Encoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Decoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Display"}),"\u6a21\u5757"]})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'#create camera object\ncam = srcampy.Camera()\nret = cam.open_cam(-1,[1920, 1080], [1280, 720])\nprint("Camera open_cam return:%d" % ret)\n\n#encode start\nenc = srcampy.Encoder()\nret = enc.encode(2, [1920, 1080])\nprint("Encoder encode return:%d" % ret)\n\n#bind, input: cam, output: enc\nret = srcampy.bind(cam, enc)\nprint("srcampy bind return:%d" % ret)\n'})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)(n.h2,{id:"unbind\u63a5\u53e3",children:"unbind\u63a5\u53e3"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u529f\u80fd\u63cf\u8ff0\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4e24\u4e2a\u7ed1\u5b9a\u8fc7\u7684\u6a21\u5757\u89e3\u7ed1"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u51fd\u6570\u58f0\u660e\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"srcampy.unbind(src, dst)\n"})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u6570\u63cf\u8ff0\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,r.jsx)(n.th,{children:"\u53d6\u503c\u8303\u56f4"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"src"}),(0,r.jsx)(n.td,{children:"\u6e90\u6570\u636e\u6a21\u5757"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Camera"}),"\u3001",(0,r.jsx)(n.code,{children:"Encoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Decoder"}),"\u6a21\u5757"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dst"}),(0,r.jsx)(n.td,{children:"\u76ee\u6807\u6570\u636e\u6a21\u5757"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"Camera"}),"\u3001",(0,r.jsx)(n.code,{children:"Encoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Decoder"}),"\u3001",(0,r.jsx)(n.code,{children:"Display"}),"\u6a21\u5757"]})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u4f7f\u7528\u65b9\u6cd5\u3011"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'#create camera object\ncam = srcampy.Camera()\nret = cam.open_cam(-1,[1920, 1080], [1280, 720])\nprint("Camera open_cam return:%d" % ret)\n\n#encode start\nenc = srcampy.Encoder()\nret = enc.encode(2, [1920, 1080])\nprint("Encoder encode return:%d" % ret)\n\n#bind, input: cam, output: enc\nret = srcampy.bind(cam, enc)\nprint("srcampy bind return:%d" % ret)\n#unbind, input: cam, output: enc\nret = srcampy.unbind(cam, enc)\nprint("srcampy unbind return:%d" % ret)\n'})}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u8fd4\u56de\u503c\u3011"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u6210\u529f"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5931\u8d25"})]})]})]}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u6ce8\u610f\u4e8b\u9879\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"}),"\n",(0,r.jsx)("font",{color:"Blue",children:"\u3010\u53c2\u8003\u4ee3\u7801\u3011"}),"\n",(0,r.jsx)(n.p,{children:"\u65e0"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>c});var r=d(96540);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);