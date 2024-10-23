"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[698],{76898:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),o=i(28453);const s={sidebar_position:4},r="4.1.4 MIPI Camera-based Inference",a={id:"Algorithm_Application/pydev_dnn_demo/mipi_camera",title:"4.1.4 MIPI Camera-based Inference",description:"Object Detection Algorithm - FCOS",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/01_pydev_dnn_demo/mipi_camera.md",sourceDirName:"04_Algorithm_Application/01_pydev_dnn_demo",slug:"/Algorithm_Application/pydev_dnn_demo/mipi_camera",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/mipi_camera",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/04_Algorithm_Application/01_pydev_dnn_demo/mipi_camera.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"4.1.3 Static Image Inference",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/static_image"},next:{title:"4.1.5 Inference Based on USB Camera",permalink:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/usb_camera"}},d={},c=[{value:"Object Detection Algorithm - FCOS",id:"object-detection-algorithm---fcos",level:2},{value:"Running Method",id:"running-method",level:3},{value:"Example Code Analysis",id:"example-code-analysis",level:3},{value:"Object Detection Algorithm Web Visualization",id:"object-detection-algorithm-web-visualization",level:2},{value:"Code Analysis",id:"code-analysis",level:3}];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"414-mipi-camera-based-inference",children:"4.1.4 MIPI Camera-based Inference"}),"\n",(0,t.jsx)(n.h2,{id:"object-detection-algorithm---fcos",children:"Object Detection Algorithm - FCOS"}),"\n",(0,t.jsx)(n.p,{children:"This example mainly achieves the following functions:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Load the ",(0,t.jsx)(n.code,{children:"fcos"})," image object detection algorithm model (trained on the COCO dataset with 80 object detection categories)."]}),"\n",(0,t.jsx)(n.li,{children:"Read video images from the MIPI camera and perform inference."}),"\n",(0,t.jsx)(n.li,{children:"Parse the model output and render the result to the original video stream."}),"\n",(0,t.jsxs)(n.li,{children:["Output the rendered video stream through the ",(0,t.jsx)(n.code,{children:"HDMI"})," interface."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"running-method",children:"Running Method"}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"/rdk_doc/en/Basic_Application/Image/mipi_camera",children:"MIPI Camera AI Inference"})," for how to quickly run this example."]}),"\n",(0,t.jsx)(n.h3,{id:"example-code-analysis",children:"Example Code Analysis"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import Python modules\nImport modules such as hobot_dnn, hobot_vio, numpy, opencv, colorsys, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport cv2\nimport colorsys\n\nfrom hobot_dnn import pyeasy_dnn as dnn\nfrom hobot_vio import libsrcampy as srcampy\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Load the model file"}),"\n",(0,t.jsxs)(n.p,{children:["Call the ",(0,t.jsx)(n.a,{href:"./pydev_dnn_api",children:"load"})," method to load the model file and return a list of ",(0,t.jsx)(n.code,{children:"hobot_dnn.pyeasy_dnn.Model"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"models = dnn.load('../models/fcos_512x512_nv12.bin')\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The input of the ",(0,t.jsx)(n.code,{children:"fcos"})," model is ",(0,t.jsx)(n.code,{children:"1x3x512x512"})," data with the format of ",(0,t.jsx)(n.code,{children:"NCHW"}),". The output is 15 sets of data used to represent the detected object bounding boxes. In the example, the ",(0,t.jsx)(n.code,{children:"print_properties"})," function is defined to output the input and output parameters of the model:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# print properties of input tensor\nprint_properties(models[0].inputs[0].properties)\n# print properties of output tensor\nprint(len(models[0].outputs))\nfor output in models[0].outputs:\n    print_properties(output.properties)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Data Preprocessing"}),"\n",(0,t.jsxs)(n.p,{children:["Call the ",(0,t.jsx)(n.code,{children:"get_cam"})," interface of the ",(0,t.jsx)(n.code,{children:"srcampy.Camera"})," class to obtain the real-time image from the MIPI camera and resize the image to fit the size of the model's input tensor."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# create Camera object\ncam = srcampy.Camera()\nh, w = get_hw(models[0].inputs[0].properties)\n# open MIPI Camera, set 30fps, solution 1920 x 1080, 512 x 512\ncam.open_cam(0, 1, 30, [1920, w], [1080, h])\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# get the image, solution 512x512\nimg = cam.get_img(2, 512, 512)\n# transform data to np format\nimg = np.frombuffer(img, dtype=np.uint8)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Data Stream Binding"}),"\n",(0,t.jsxs)(n.p,{children:["To reduce the data copying of the image data, the example binds the input and output modules of the image data, allowing the image data from ",(0,t.jsx)(n.code,{children:"camera"})," to be directly sent to the ",(0,t.jsx)(n.code,{children:"display"})," module at the lower level."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"disp = srcampy.Display()\n# For the meaning of parameters, please refer to the relevant documents of HDMI display\ndisp.display(0, 1920, 1080)\n\n# bind camera directly to display\nsrcampy.bind(cam, disp)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more information about the detailed usage of the camera, please refer to the ",(0,t.jsx)(n.a,{href:"../../03_Basic_Application/04_multi_media/pydev_multimedia_api_x3/object_camera.md",children:"Camera section"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Model Inference"}),"\n",(0,t.jsxs)(n.p,{children:["Call the ",(0,t.jsx)(n.code,{children:"forward"})," interface of the ",(0,t.jsx)(n.a,{href:"/rdk_doc/en/Algorithm_Application/pydev_dnn_demo/pydev_dnn_api",children:"Model"})," class for inference. The model outputs 15 sets of data to represent the detected object detection boxes."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"outputs = models[0].forward(nv12_data)\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Algorithm Postprocessing"}),"\n",(0,t.jsxs)(n.p,{children:["The postprocessing function ",(0,t.jsx)(n.code,{children:"postprocess"})," in the example will process the information of the object categories, detection boxes, and confidence from the model outputs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# do postprocess\nprediction_bbox = postprocess(outputs, input_shape, origin_img_shape=(1080,1920))\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Visualization of Detection Results"}),"\n",(0,t.jsxs)(n.p,{children:["The example renders the algorithm results and the original video stream and outputs them through the HDMI interface. Users can preview the effects in real time on a display. The display part uses the Display function of the hobot_vio module, for more detailed information about this module, please refer to the ",(0,t.jsx)(n.a,{href:"../../03_Basic_Application/04_multi_media/pydev_multimedia_api_x3/object_display.md",children:"Display section"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"for index, bbox in enumerate(prediction_bbox):\n...\n    if index == 0:\n        disp.set_graph_rect(coor[0], coor[1], coor[2], coor[3], 2, 1,\n                            box_color_ARGB)\n        disp.set_graph_word(coor[0], coor[1] - 2, bbox_string, 2, 1,\n                            box_color_ARGB)\n    else:\n        disp.set_graph_rect(coor[0], coor[1], coor[2], coor[3], 2, 0,\n                            box_color_ARGB)\n        disp.set_graph_word(coor[0], coor[1] - 2, bbox_string, 2, 0,\n                            box_color_ARGB)\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"object-detection-algorithm-web-visualization",children:"Object Detection Algorithm Web Visualization"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we want to achieve the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Load the "fcos" image object detection algorithm model (trained on COCO dataset with 80 object categories)'}),"\n",(0,t.jsx)(n.li,{children:"Read video images from a MIPI camera and perform inference"}),"\n",(0,t.jsx)(n.li,{children:"Parse the model output results"}),"\n",(0,t.jsx)(n.li,{children:"Push the algorithm results and video stream to the web-side"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The data preprocessing, model inference, and post-processing code in this example are the same as in the previous sections. Only the differences will be explained below."}),"\n",(0,t.jsx)(n.h3,{id:"code-analysis",children:"Code Analysis"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start ",(0,t.jsx)(n.code,{children:"web_service"})]}),"\n",(0,t.jsx)(n.p,{children:"Before using the web service, please make sure that the development board and the computer are in the same network segment and can ping each other. Then execute the following command to start the web service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd /app/pydev_demo/05_web_display_camera_sample/\nsudo sh ./start_nginx.sh\nsudo python3 ./mipi_camera_web.py \n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that if you encounter the following error when running ",(0,t.jsx)(n.code,{children:"start_nginx.sh"}),", it means that there is already an httpd service running on the device and TCP port 80 is occupied:\n",(0,t.jsx)(n.img,{alt:"image-20220719003947031",src:i(64551).A+"",width:"960",height:"125"})]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you need to find and terminate the process that occupies port ",(0,t.jsx)(n.code,{children:"80"}),". You can execute the command ",(0,t.jsx)(n.code,{children:"lsof -i:80"})," to get the PID of the process occupying the port, and then use ",(0,t.jsx)(n.code,{children:"kill -9 PID"})," to terminate the process."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Protobuf Serialization"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The web client receives data that has been serialized using Protobuf. As the server, the development board needs to serialize the model's output according to a specific data format. In this example, the serialization operation is performed using the ",(0,t.jsx)(n.code,{children:"serialize"})," function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def serialize(FrameMessage, prediction_bbox):\n    if (prediction_bbox.shape[0] > 0):\n        for i in range(prediction_bbox.shape[0]):\n            # get class name\n            Target = x3_pb2.Target()\n            id = int(prediction_bbox[i][5])\n            Target.type_ = classes[id]\n            Box = x3_pb2.Box()\n            Box.type_ = classes[id]\n            Box.score_ = prediction_bbox[i][4]\n\n            Box.top_left_.x_ = prediction_bbox[i][0]\n            Box.top_left_.y_ = prediction_bbox[i][1]\n            Box.bottom_right_.x_ = prediction_bbox[i][2]\n            Box.bottom_right_.y_ = prediction_bbox[i][3]\n\n            Target.boxes_.append(Box)\n            FrameMessage.smart_msg_.targets_.append(Target)\n    prot_buf = FrameMessage.SerializeToString()\n    return prot_buf\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sending Protobuf Data"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The web server on the development board sends the data using the ",(0,t.jsx)(n.code,{children:"websockets"})," plugin, and it needs to obtain the IP address of the local device:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# call ifconfig cmd, to get device ip\nifconfig_cmd = subprocess.check_output(\"ifconfig | grep broadcast | awk '{print $2}'\", shell=True)\nboard_ip = str(ifconfig_cmd, 'UTF-8')[:-1]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, start the ",(0,t.jsx)(n.code,{children:"websockets"})," and send the data using the ",(0,t.jsx)(n.code,{children:"web_service"})," function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"start_server = websockets.serve(web_service, board_ip, 8080)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'async def web_service(websocket, path):\n    while True:\n        # create protobuf message object\n        FrameMessage = x3_pb2.FrameMessage()\n        # set frame solution and format\n        FrameMessage.img_.height_ = 1080\n        FrameMessage.img_.width_ = 1920\n        FrameMessage.img_.type_ = "JPEG"\n\n        # get camera image for inference\n        img = cam.get_img(2, 512, 512)\n        img = np.frombuffer(img, dtype=np.uint8)\n        outputs = models[0].forward(img)\n        # do postprocess\n        prediction_bbox = postprocess(outputs, input_shape, origin_img_shape=(1080, 1920))\n        print(prediction_bbox)\n\n        # get camera image for render\n        origin_image = cam.get_img(2, 1920, 1080)\n        # encode image to mjpeg\n        enc.encode_file(origin_image)\n        FrameMessage.img_.buf_ = enc.get_img()\n        FrameMessage.smart_msg_.timestamp_ = int(time.time())\n        # serialize data\n        prot_buf = serialize(FrameMessage, prediction_bbox)\n        # send data\n        await websocket.send(prot_buf)\n    cam.close_cam()\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"View the display effect on the web"}),"\n",(0,t.jsxs)(n.p,{children:["Enter the IP address of the development board in the ",(0,t.jsx)(n.code,{children:"chrome"})," browser to preview the video image rendered in real time",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{alt:"image-20220719003512782",src:i(1120).A+"",width:"501",height:"192"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1120:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20220719003512782-c41e6490d9a67d7aab6dd985e5d63b84.png"},64551:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20220719003947031-6b21b95b10b4edc287f4a117f8626c9c.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);