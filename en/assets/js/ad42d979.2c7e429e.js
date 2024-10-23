"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6531],{67895:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=o(74848),i=o(28453);const s={sidebar_position:5},r="4.1.5 Inference Based on USB Camera {#usb}",d={id:"Algorithm_Application/pydev_dnn_demo/usb_camera",title:"4.1.5 Inference Based on USB Camera",description:"usb}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/01_pydev_dnn_demo/usb_camera.md",sourceDirName:"04_Algorithm_Application/01_pydev_dnn_demo",slug:"/Algorithm_Application/pydev_dnn_demo/usb_camera",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/usb_camera",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/01_pydev_dnn_demo/usb_camera.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4.1.4 MIPI Camera-based Inference",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/mipi_camera"},next:{title:"4.1.6 Model Inference Interface Description",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api"}},c={},a=[{value:"Object Detection Algorithm - FCOS",id:"object-detection-algorithm---fcos",level:2},{value:"How to Run",id:"how-to-run",level:3},{value:"Code Analysis",id:"code-analysis",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"usb",children:"4.1.5 Inference Based on USB Camera"}),"\n",(0,t.jsx)(n.h2,{id:"object-detection-algorithm---fcos",children:"Object Detection Algorithm - FCOS"}),"\n",(0,t.jsx)(n.p,{children:"This example mainly implements the following functions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Load the ",(0,t.jsx)(n.code,{children:"fcos"})," object detection algorithm model (trained on the COCO dataset with 80 object categories)."]}),"\n",(0,t.jsx)(n.li,{children:"Read the video stream from the USB camera and perform inference."}),"\n",(0,t.jsx)(n.li,{children:"Parse the model output and render the results to the original video stream."}),"\n",(0,t.jsxs)(n.li,{children:["Output the rendered video stream via the ",(0,t.jsx)(n.code,{children:"HDMI"})," interface."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-run",children:"How to Run"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/first_application/usb_camera",children:"USB Camera AI Inference"})," for instructions on how to quickly run this example."]}),"\n",(0,t.jsx)(n.h3,{id:"code-analysis",children:"Code Analysis"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Import algorithm inference module ",(0,t.jsx)(n.code,{children:"hobot_dnn"}),", video output module ",(0,t.jsx)(n.code,{children:"hobot_vio"}),", ",(0,t.jsx)(n.code,{children:"numpy"}),", ",(0,t.jsx)(n.code,{children:"opencv"}),", ",(0,t.jsx)(n.code,{children:"colorsys"}),", etc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"from hobot_dnn import pyeasy_dnn as dnn\nfrom hobot_vio import libsrcampy as srcampy\nimport numpy as np\nimport cv2\nimport colorsys\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Load model files"}),"\n",(0,t.jsxs)(n.p,{children:["Call the ",(0,t.jsx)(n.code,{children:"load"})," method to load the model files and return a list of ",(0,t.jsx)(n.code,{children:"hobot_dnn.pyeasy_dnn.Model"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"models = dnn.load('../models/fcos_512x512_nv12.bin')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The input of the ",(0,t.jsx)(n.code,{children:"fcos"})," model is ",(0,t.jsx)(n.code,{children:"1x3x512x512"})," data in ",(0,t.jsx)(n.code,{children:"NCHW"})," format. The output consists of 15 groups of data that represent the detected object bounding boxes. The example defines the ",(0,t.jsx)(n.code,{children:"print_properties"})," function to output the input and output parameters of the model:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# print properties of input tensor\nprint_properties(models[0].inputs[0].properties)\n# print properties of output tensor\nprint(len(models[0].outputs))\nfor output in models[0].outputs:\n    print_properties(output.properties)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Data preprocessing"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Use OpenCV to open the USB camera device node ",(0,t.jsx)(n.code,{children:"/dev/video8"}),", get real-time images, and resize the images to fit the input tensor size of the model."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# open usb camera: /dev/video8\ncap = cv2.VideoCapture(8)\nif(not cap.isOpened()):\n    exit(-1)\nprint(\"Open usb camera successfully\")\n# set the output of usb camera to MJPEG, solution 640 x 480\ncodec = cv2.VideoWriter_fourcc( 'M', 'J', 'P', 'G' )\ncap.set(cv2.CAP_PROP_FOURCC, codec)\ncap.set(cv2.CAP_PROP_FPS, 30) \ncap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)\ncap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then convert the BGR format image to NV12 format that fits the model input."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"nv12_data = bgr2nv12_opencv(resized_data)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Model Inference"}),"\n",(0,t.jsxs)(n.p,{children:["Call the ",(0,t.jsx)(n.code,{children:"forward"})," interface of the ",(0,t.jsx)(n.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"Model"})," class for inference. The model will output 15 sets of data representing the detected object bounding boxes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"outputs = models[0].forward(nv12_data)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Post-processing"}),"\n",(0,t.jsxs)(n.p,{children:["The post-processing function ",(0,t.jsx)(n.code,{children:"postprocess"})," in the example will process the object category, bounding box, and confidence information output by the model."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"prediction_bbox = postprocess(outputs, input_shape, origin_img_shape=(1080,1920))\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Visualize the Detection Results"}),"\n",(0,t.jsxs)(n.p,{children:["The example renders the algorithm results and the original video stream, and outputs them through the ",(0,t.jsx)(n.code,{children:"HDMI"})," interface for real-time preview on a monitor. The Display function of the hobot_vio module is used for displaying. For more information about this module, please refer to the ",(0,t.jsx)(n.a,{href:"../../03_Basic_Application/04_multi_media/pydev_multimedia_api_x3/object_display.md",children:"Display section"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# create display object\ndisp = srcampy.Display()\n# set solution to 1920 x 1080\ndisp.display(0, 1920, 1080)\n\n# if the solution of image is not 1920 x 1080, do resize\nif frame.shape[0]!=1080 and frame.shape[1]!=1920:\n    frame = cv2.resize(frame, (1920,1080), interpolation=cv2.INTER_AREA)\n\n# render the detection results to image\nbox_bgr = draw_bboxs(frame, prediction_bbox)\n\n# convert BGR to NV12\nbox_nv12 = bgr2nv12_opencv(box_bgr)\n# do display\ndisp.set_img(box_nv12.tobytes())\n"})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);