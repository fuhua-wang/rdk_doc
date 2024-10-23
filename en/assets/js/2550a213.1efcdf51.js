"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2506],{10663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=t(74848),i=t(28453),r=t(93859),s=t(19365);const a={sidebar_position:1},l="6.1 Line Following",c={id:"Application_case/line_follower",title:"6.1 Line Following",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/06_Application_case/line_follower.md",sourceDirName:"06_Application_case",slug:"/Application_case/line_follower",permalink:"/rdk_doc/en/Application_case/line_follower",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/06_Application_case/line_follower.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6. \u5e94\u7528\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/en/Application_case"},next:{title:"6.2 AMR",permalink:"/rdk_doc/en/Application_case/amr"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Preparation",id:"preparation",level:2},{value:"D-Robotics RDK",id:"d-robotics-rdk",level:3},{value:"Usage",id:"usage",level:2},{value:"D-Robotics RDK",id:"d-robotics-rdk-1",level:3},{value:"Data Acquisition and Annotation",id:"data-acquisition-and-annotation",level:4},{value:"Model Selection",id:"model-selection",level:4},{value:"Model Implementation and Training",id:"model-implementation-and-training",level:4},{value:"Model Conversion",id:"model-conversion",level:4},{value:"Deployment",id:"deployment",level:4},{value:"Results Analysis",id:"results-analysis",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"61-line-following",children:"6.1 Line Following"}),"\n","\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(62893).A+"",width:"638",height:"416"})}),"\n",(0,o.jsx)(n.p,{children:"The line following task refers to the ability of a robot car to autonomously follow a guide line and move forward. When the guide line turns left, the car also turns left. When the guide line turns right, the car turns right accordingly. This task is a basic task in wheeled robots and can be implemented in various ways, such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Installing multiple photoelectric sensors (gray scale sensors) to determine if the sensors are on the line based on their return values, and then adjust the robot's movement direction accordingly."}),"\n",(0,o.jsx)(n.li,{children:"Using a camera to obtain the position of the line in the image based on traditional image processing methods such as edge detection, and then adjust the robot's movement direction."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The commonly used methods mentioned above often require repeated image collection, threshold adjustment, and testing to achieve good recognition results when there are changes in lighting conditions or the environment. Is it possible to make the robot adapt to changes in the environment without the need for manual threshold adjustment? Convolutional Neural Network (CNN) is one of the most successful applications of deep learning algorithms, with good adaptability and robustness. With the rapid development of processors in recent years, CNN inference can already be performed on embedded devices. Here, CNN is used to perceive the position of the guide line in the line following task."}),"\n",(0,o.jsxs)(n.p,{children:["Code repository:  (",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/line_follower",children:"https://github.com/D-Robotics/line_follower"}),")"]}),"\n",(0,o.jsx)(n.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Platform"}),(0,o.jsx)(n.th,{children:"System"}),(0,o.jsx)(n.th,{children:"Function"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"RDK X3, RDK X3 Module"}),(0,o.jsx)(n.td,{children:"Ubuntu 20.04 (Foxy), Ubuntu 22.04 (Humble)"}),(0,o.jsx)(n.td,{children:"Start MIPI camera to capture images, perform guide line detection and car control, and finally demonstrate line following effect through the motion of the real car"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(n.h3,{id:"d-robotics-rdk",children:"D-Robotics RDK"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"D-Robotics RDK has been flashed with the  Ubuntu 20.04/22.04 system image provided by Horizon."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"TogetheROS.Bot has been successfully installed on the D-Robotics RDK."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"MIPI or USB camera has been installed on the D-Robotics RDK."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The PC is in the same network segment (wired or connected to the same wireless network) as the D-Robotics RDK. The following environment needs to be installed on the PC:"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ubuntu 20.04 system and ",(0,o.jsx)(n.a,{href:"https://docs.ros.org/en/foxy/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Foxy Desktop Full"})]}),"\n"]})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ubuntu 22.04 system and ",(0,o.jsx)(n.a,{href:"https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html",children:"ROS2 Humble Desktop Full"})]}),"\n"]})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Algorithm toolchain for OE package (obtain by running the following command):\n",(0,o.jsx)(n.code,{children:"wget -c ftp://vrftp.horizon.ai/Open_Explorer_gcc_9.3.0/2.3.3/horizon_xj3_open_explorer_v2.3.3_20220727.tar.gz"})]}),"\n",(0,o.jsxs)(n.li,{children:["Algorithm toolchain for Docker (obtain by running the following command):\n",(0,o.jsx)(n.code,{children:"wget -c ftp://vrftp.horizon.ai/Open_Explorer_gcc_9.3.0/2.3.3/x3pi_toolchain/ai_toolchain_2.3.3.tar.gz"})]}),"\n",(0,o.jsxs)(n.li,{children:["Project source code\n",(0,o.jsx)(n.code,{children:"https://github.com/D-Robotics/line_follower/tree/develop"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"d-robotics-rdk-1",children:"D-Robotics RDK"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(75822).A+"",width:"1348",height:"716"})}),"\n",(0,o.jsxs)(n.p,{children:["The OriginBot kit is selected for the chassis of the car, which has two active wheels and one passive wheel. The rotation control of the car is achieved through the differential speed of the two active wheels. The MCU module is mainly used for the motor control of the car and communicates with the main control board D-Robotics RDK through serial communication. OriginBot website: ",(0,o.jsx)(n.a,{href:"https://www.originbot.org/",children:"www.originbot.org"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(30572).A+"",width:"328",height:"273"})}),"\n",(0,o.jsx)(n.p,{children:"As shown in the above figure, the D-Robotics RDK obtains the environmental data in front of the car through a camera. The image data is processed by a trained CNN model to infer the coordinates of the guiding line. Then, based on a certain control strategy, the motion mode of the car is calculated. The motion control instructions are sent to the car through UART to achieve closed-loop control of the entire system."}),"\n",(0,o.jsx)(n.p,{children:"The PC is used for data annotation and training. To improve efficiency, the D-Robotics RDK is used to send images to the PC for annotation through Ethernet."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(80302).A+"",width:"2546",height:"454"})}),"\n",(0,o.jsx)(n.p,{children:"The entire software engineering process includes 5 main steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Data acquisition and annotation: Obtain the corresponding data according to the task goal and annotate it for model training."}),"\n",(0,o.jsx)(n.li,{children:"Model selection: Select a suitable model structure based on the task goal to ensure both performance and accuracy."}),"\n",(0,o.jsx)(n.li,{children:"Model training: Train the model using annotated data to achieve satisfactory accuracy requirements."}),"\n",(0,o.jsx)(n.li,{children:"Model conversion: Use the algorithm toolchain to convert the trained floating-point model into a fixed-point model that can run on the D-Robotics RDK."}),"\n",(0,o.jsx)(n.li,{children:"On-device deployment: Run the converted model on the D-Robotics RDK to obtain perception results and control the robot's motion."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"X86"})}),"\n",(0,o.jsx)(n.h4,{id:"data-acquisition-and-annotation",children:"Data Acquisition and Annotation"}),"\n",(0,o.jsx)(n.p,{children:"Data collection and annotation are essential for model training. Here, we utilize the MIPI camera image acquisition function and inter-device communication capabilities provided by hobot_sensor in tros.b to build a simple data acquisition and annotation system on the PC. The workflow of the data acquisition and annotation system is as follows: the MIPI camera image acquisition function and inter-device communication capabilities provided by sensor in tros.b are used to build a simple data acquisition and annotation system on the PC. The workflow of the data acquisition and annotation system is as follows:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(86343).A+"",width:"1106",height:"434"})}),"\n",(0,o.jsx)(n.p,{children:"On the D-Robotics RDK, start mipi_cam. The selected camera module is F37, and the output image format is BGR8 with a resolution of 960x544. The communication method is non-zero copy."}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp\nros2 launch mipi_cam mipi_cam.launch.py mipi_out_format:=bgr8 mipi_io_method:=mmap\n"})}),"\n",(0,o.jsx)(n.p,{children:"On the PC, run"}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/foxy/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp\n# Build line_follower_model, go to the line_follower_model directory\ncolcon build --packages-select line_follower_model\n# Load the compiled line_follower_model\nsource install/setup.bash\n# Run the annotation program on the PC\nros2 run line_follower_model annotation\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Use the right mouse button to click on the center of the black guiding line in the middle of the picture to mark the target point. Press the Enter key, and the program will automatically save the image in the image_dataset folder along with the labeling results. The image is named as xy_[x-coordinate]",(0,o.jsx)(n.em,{children:"[y-coordinate]"}),"[uuid].jpg, where uuid is the unique identifier of the image to avoid duplicate file names.According to the data collection and annotation methods mentioned above, collect a certain amount of data, preferably at least 100 images, for subsequent model training. Corresponding images can also be collected when there are changes in the environment or location, to improve the adaptability of the model."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(75524).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.h4,{id:"model-selection",children:"Model Selection"}),"\n",(0,o.jsxs)(n.p,{children:["Taking into account the maturity of the model, the hardware requirements of the CPU/GPU for training the model, ResNet network is chosen as the backbone here. Residual Neural Network (ResNet) was proposed by researchers from Microsoft Research Institute including Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. It won the championship in the 2015 ILSVRC (ImageNet Large Scale Visual Recognition Challenge). ResNet cleverly uses shortcut connections to solve the problem of model degradation in deep networks. It is one of the most widely used CNN feature extraction networks. The structure of ",(0,o.jsx)(n.a,{href:"https://huggingface.co/microsoft/resnet-18",children:"ResNet18"})," is as follows:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(87761).A+"",width:"848",height:"226"})}),"\n",(0,o.jsx)(n.p,{children:"On the D-Robotics RDK, ResNet18 has a high inference performance of up to 232FPS, and ResNet50 has an inference performance of over 100FPS. The high frame rate ensures the real-time nature of data processing, which is a necessary condition for improving vehicle speed and implementing more complex applications in the future. ResNet18 network structure is used here initially, and a deeper ResNet50 network structure will be considered later if a bottleneck is encountered. In order to satisfy the output of guide line coordinates x and y, the FC output of ResNet18 network needs to be modified to 2 directly outputting the x and y coordinates of the guide line. The input resolution of ResNet18 is 224x224.\nThe training framework selected here is the popular PyTorch. The CPU version of PyTorch is installed here, but the GPU version of PyTorch can be used if there is a GPU card on the hardware. The installation command is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cpu\n"})}),"\n",(0,o.jsx)(n.p,{children:"The development PC is a regular notebook with the following specifications:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CPU: Intel i5-7260U"}),"\n",(0,o.jsx)(n.li,{children:"DDR: 8G"}),"\n",(0,o.jsx)(n.li,{children:"OS: Ubuntu 20.04"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"model-implementation-and-training",children:"Model Implementation and Training"}),"\n",(0,o.jsx)(n.p,{children:"The code that completes this function is located in line_follower/line_follower_model/line_follower_model/training_member_function.py"}),"\n",(0,o.jsx)(n.p,{children:"Running on the PC:"}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/foxy/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"source  /opt/ros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Compile line_follower_model and enter the line_follower_model directory\ncolcon build --packages-select line_follower_model\n# Load the compiled line_follower_model\nsource install/setup.bash\n# Run the PC-side annotation program\nros2 run line_follower_model training\n"})}),"\n",(0,o.jsx)(n.h4,{id:"model-conversion",children:"Model Conversion"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(13553).A+"",width:"1426",height:"194"})}),"\n",(0,o.jsx)(n.p,{children:"If the floating-point model obtained by training with PyTorch is run directly on the D-Robotics RDK, the efficiency will be low. In order to improve the running efficiency and use the 5T computing power of BPU, it is necessary to convert the floating-point model to a fixed-point model."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generate ONNX model from the PyTorch model"}),"\n",(0,o.jsx)(n.p,{children:"Run on the PC:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ros2 run line_follower_model generate_onnx\n"})}),"\n",(0,o.jsx)(n.p,{children:"After running, generate the best_line_follower_model_xy.onnx model in the current directory."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Generating fixed-point models from floating-point models"}),"\n",(0,o.jsx)(n.p,{children:"The completion code for this function is located in line_follower/10_model_convert.\nThe directory structure of OE packages is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:".\n\u251c\u2500\u2500 bsp\n\u2502   \u2514\u2500\u2500 X3J3-Img-PL2.2-V1.1.0-20220324.tgz\n\u251c\u2500\u2500 ddk\n\u2502   \u251c\u2500\u2500 package\n\u2502   \u251c\u2500\u2500 samples\n\u2502   \u2514\u2500\u2500 tools\n\u251c\u2500\u2500 doc\n\u2502   \u251c\u2500\u2500 cn\n\u2502   \u251c\u2500\u2500 ddk_doc\n\u2502   \u2514\u2500\u2500 en\n\u251c\u2500\u2500 release_note-CN.txt\n\u251c\u2500\u2500 release_note-EN.txt\n\u251c\u2500\u2500 run_docker.sh\n\u2514\u2500\u2500 tools\n    \u251c\u2500\u2500 0A_CP210x_USB2UART_Driver.zip\n    \u251c\u2500\u2500 0A_PL2302-USB-to-Serial-Comm-Port.zip\n    \u251c\u2500\u2500 0A_PL2303-M_LogoDriver_Setup_v202_20200527.zip\n    \u251c\u2500\u2500 0B_hbupdate_burn_secure-key1.zip\n    \u251c\u2500\u2500 0B_hbupdate_linux_cli_v1.1.tgz\n    \u251c\u2500\u2500 0B_hbupdate_linux_gui_v1.1.tgz\n    \u251c\u2500\u2500 0B_hbupdate_mac_v1.0.5.app.tar.gz\n    \u2514\u2500\u2500 0B_hbupdate_win64_v1.1.zip\n"})}),"\n",(0,o.jsx)(n.p,{children:"Copy 10_model-convert from the project to the algorithm toolchain OE package ddk/samples/ai_toolchain/horizon_model-convert_sample/03_classification/directory."}),"\n",(0,o.jsx)(n.p,{children:"Load the algorithm toolchain docker and run it in the root directory of the OE package."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sh run_docker.sh /data/\n"})}),"\n",(0,o.jsx)(n.p,{children:"Generate calibration data. The calibration data generated in this step is mainly used for calibration in the next step of model compilation. Part of the training model data can be used without special requirements, as long as the standards are correct, and the quantity should be around 100 sheets."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd ddk/samples/ai_toolchain/horizon_model_convert_sample/03_classification/10_model_convert/mapper\nsh 02_preprocess.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results are as follows:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(1769).A+"",width:"800",height:"450"})}),"\n",(0,o.jsx)(n.p,{children:"Model compilation, this step will generate fixed-point model files."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Execute in the docker\ncd ddk/samples/ai_toolchain/horizon_model_convert_sample/03_classification/10_model_convert/mapper\nsh 03_build.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results are as follows:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(35952).A+"",width:"800",height:"450"})}),"\n",(0,o.jsx)(n.h4,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsx)(n.p,{children:"Through the previous model conversion, we have obtained a fixed-point model that can run on the D-Robotics RDKBPU. How can we deploy it on the D-Robotics RDK to achieve the complete functionality of image acquisition, model inference, and motion control? Here, we rely on the hobot_dnn implementation in the tros.b. Hobot_dnn is a board-end algorithm inference framework in the tros.b software stack, which uses the BPU processor on the D-Robotics RDK to implement algorithm inference functions. It provides a simpler and easier-to-use model integration and development interface for robot application development, including model management, input processing and output parsing based on model descriptions, and model output memory allocation and management."}),"\n",(0,o.jsx)(n.p,{children:"Inherit DnnNode to implement necessary interfaces. Here, public inheritance is used, and the interfaces that must be implemented are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"SetNodePara(), used to configure model parameters such as model path and model name"}),"\n",(0,o.jsx)(n.li,{children:"SetOutputParser(), used to parse model inference outputs"}),"\n",(0,o.jsx)(n.li,{children:"PostProcess(const std::shared_ptr<DnnNodeOutput> &outputs), used for further post-processing of the results"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For the complete code, please refer to: line_follower/line_follower_perception/src/line_follower_perception.cpp"}),"\n",(0,o.jsx)(n.p,{children:"Copy the line_follower_perception folder and the compiled fixed-point model to the board for execution."}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"# Execute in the line_follower_perception folder path\uff0cthe branch of x3 verison is feature-x3, and the branch of x5 verison is feature-x5. Please pull the corresponding branch according to the device model for compilation\ncolcon build --packages-select line_follower_perception\n"})}),"\n",(0,o.jsx)(n.p,{children:"After the compilation is completed, specify the model path and name through the parameters model_path and model_name."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"source install/setup.bash\nros2 run line_follower_perception line_follower_perception --ros-args -p model_path:=./resnet18_224x224_nv12.bin -p model_name:=resnet18_224x224_nv12 &\n"})}),"\n",(0,o.jsx)(n.p,{children:"Run mipi_cam."}),"\n",(0,o.jsxs)(r.A,{groupId:"tros-distro",children:[(0,o.jsx)(s.A,{value:"foxy",label:"Foxy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/setup.bash\n"})})}),(0,o.jsx)(s.A,{value:"humble",label:"Humble",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Configure the tros.b environment\nsource /opt/tros/humble/setup.bash\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ros2 launch mipi_cam mipi_cam.launch.py &\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Lastly, enter the motion control package of the car and run ",(0,o.jsx)(n.code,{children:"originbot_base"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"source install/setup.bash\nros2 run originbot_base originbot_base\n"})}),"\n",(0,o.jsx)(n.h2,{id:"results-analysis",children:"Results Analysis"}),"\n",(0,o.jsx)(n.p,{children:"The car has started line following movement."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(43175).A+"",width:"640",height:"1138"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var o=t(34164);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,s),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(96540),i=t(34164),r=t(86641),s=t(56347),a=t(205),l=t(38874),c=t(24035),d=t(82993);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=u(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,h]=m({queryString:t,groupId:i}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),b=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==o&&(c(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function _(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(_,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,x.jsx)(v,{...e,children:h(e.children)},String(n))}},1769:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/02-7add32382cc2abf0d867e79e681a8a22.gif"},35952:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/03-4960d7ae2f4011edd867b3e67c1e917a.gif"},75524:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/annotation-66b8dbde5a6b5e42d91405647bbbdbeb.gif"},86343:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/annotation-e9563d60ad5004c2ceb56588e2b32472.png"},30572:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/car-7056cef7016a16cf7e029ffeb410c74d.png"},62893:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/demo-725b5185be38515fbca3c9c62faf35de.png"},75822:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-c3a859e8418b4baa1f58e5ddf2289e7a.png"},87761:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/model-808e7a206ee03d1575b6284e7d3b02f6.png"},13553:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/model_convert-b7d6367e6d5ace7abf6453d581e82aee.png"},80302:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/roadmap-b553d95eada41fa25e2667ae4b4ec6e1.png"},43175:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/tracking_car-c090631217391ef88a5e4c66cb02b4b9.gif"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);