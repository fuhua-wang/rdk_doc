"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[5412],{26841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var o=t(74848),i=t(28453);const r={sidebar_position:2},s="4.3.2 ModelZoo Quick Start",l={id:"Algorithm_Application/model_zoo/bpu_infer_lib_intro",title:"4.3.2 ModelZoo Quick Start",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/04_Algorithm_Application/03_model_zoo/bpu_infer_lib_intro.md",sourceDirName:"04_Algorithm_Application/03_model_zoo",slug:"/Algorithm_Application/model_zoo/bpu_infer_lib_intro",permalink:"/rdk_doc/en/Algorithm_Application/model_zoo/bpu_infer_lib_intro",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/04_Algorithm_Application/03_model_zoo/bpu_infer_lib_intro.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.3.1 ModelZoo Overview",permalink:"/rdk_doc/en/Algorithm_Application/model_zoo/model_zoo_intro"},next:{title:"4.3.3 ModelZoo Inference Interface",permalink:"/rdk_doc/en/Algorithm_Application/model_zoo/infer_api"}},d={},a=[{value:"Overview",id:"overview",level:2},{value:"Installation Method",id:"installation-method",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Model Loading",id:"model-loading",level:3},{value:"Reading Inputs",id:"reading-inputs",level:3},{value:"Model Inference",id:"model-inference",level:3},{value:"Obtaining Outputs",id:"obtaining-outputs",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"432-modelzoo-quick-start",children:"4.3.2 ModelZoo Quick Start"}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["The board-side inference interface used by ModelZoo is ",(0,o.jsx)(n.strong,{children:"bpu_infer_lib"}),", which is a Python wrapper of the board-side inference C++ interface libdnn. It is designed to be ",(0,o.jsx)(n.strong,{children:"easy to install, easy to learn, and quick to get started"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"installation-method",children:"Installation Method"}),"\n",(0,o.jsx)(n.p,{children:"bpu_infer_lib can be installed on the RDK series development boards using the following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# For RDK X5, use the following command\npip install bpu_infer_lib_x5\n\n# For RDK X3, use the following command\npip install bpu_infer_lib_x3\n"})}),"\n",(0,o.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,o.jsx)(n.p,{children:"This quick start guide uses the detection model yoloworld from ModelZoo as an example to show developers the basic usage of the bpu_infer_lib inference library."}),"\n",(0,o.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,o.jsxs)(n.p,{children:["Yoloworld repository link\uff1a",(0,o.jsx)(n.a,{href:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/llm/yoloworld",children:"https://github.com/D-Robotics/rdk_model_zoo/tree/main/demos/llm/yoloworld"})]})}),"\n",(0,o.jsxs)(n.p,{children:["The repository provides the geeva heterogeneous model ",(0,o.jsx)(n.code,{children:"yolo_world.bin"})," that can be directly deployed on the RDK series development boards."]}),"\n",(0,o.jsxs)(n.p,{children:["Assuming the developer has downloaded the model, we can import the bpu_infer_lib inference library and use the most important class of this library - the ",(0,o.jsx)(n.strong,{children:"Infer"})," class to create an object:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"import bpu_infer_lib\ninf = bpu_infer_lib.Infer(False)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The inf object will be responsible for the entire process of ",(0,o.jsx)(n.strong,{children:"model loading, input reading, model inference, and output acquisition"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The constructor of this object accepts one parameter, named debug, which is of type bool. If debug mode is enabled, more output will be printed."}),"\n",(0,o.jsx)(n.h3,{id:"model-loading",children:"Model Loading"}),"\n",(0,o.jsx)(n.p,{children:"For model loading, we will call the load_model member function of the inf object, which accepts the path to a geeva heterogeneous .bin model and completes the model loading:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'inf.load_model("yolo_world.bin")\n'})}),"\n",(0,o.jsx)(n.p,{children:"After the model is loaded, we can view the attributes required for the model's inputs and outputs. For example, we can view the following information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The number of model inputs"}),"\n",(0,o.jsx)(n.li,{children:"The data layout (layout) required for each model input"}),"\n",(0,o.jsx)(n.li,{children:"The data type (type) required for each model input"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'print("Number of model\'s inputs:", len(inf.inputs))\nprint("Input[0]\'s tensor layout:", inf.inputs[0].properties.tensorLayout)\nprint("Input[0]\'s tensor type:", inf.inputs[0].properties.tensorType)\nprint("Input[1]\'s tensor layout:", inf.inputs[1].properties.tensorLayout)\nprint("Input[1]\'s tensor type:", inf.inputs[1].properties.tensorType)\n'})}),"\n",(0,o.jsx)(n.p,{children:"The results are as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Number of model's inputs: 2\nInput[0]'s tensor layout: HB_DNN_LAYOUT_NCHW\nInput[0]'s tensor type: HB_DNN_TENSOR_TYPE_F32\nInput[1]'s tensor layout: HB_DNN_LAYOUT_NCHW\nInput[1]'s tensor type: HB_DNN_TENSOR_TYPE_F32\n"})}),"\n",(0,o.jsx)(n.p,{children:"Similarly, we can also view:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The number of model inputs"}),"\n",(0,o.jsx)(n.li,{children:"The data layout (layout) required for each model input"}),"\n",(0,o.jsx)(n.li,{children:"The data type (type) required for each model input"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:'print("Number of model\'s outputs:", len(inf.outputs))\nprint("Output[0]\'s tensor layout:", inf.outputs[0].properties.tensorLayout)\nprint("Output[0]\'s tensor type:", inf.outputs[0].properties.tensorType)\nprint("Output[1]\'s tensor layout:", inf.outputs[1].properties.tensorLayout)\nprint("Output[1]\'s tensor type:", inf.outputs[1].properties.tensorType)\n'})}),"\n",(0,o.jsx)(n.p,{children:"The results are as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Number of model's outputs: 2\nOutput[0]'s tensor layout: HB_DNN_LAYOUT_NCHW\nOutput[0]'s tensor type: HB_DNN_TENSOR_TYPE_F32\nOutput[1]'s tensor layout: HB_DNN_LAYOUT_NCHW\nOutput[1]'s tensor type: HB_DNN_TENSOR_TYPE_F32\n"})}),"\n",(0,o.jsx)(n.h3,{id:"reading-inputs",children:"Reading Inputs"}),"\n",(0,o.jsxs)(n.p,{children:["For reading inputs, we use the ",(0,o.jsx)(n.code,{children:"inf.read_input"})," member function, which accepts two parameters."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The first parameter is a numpy array that matches the model input type"}),"\n",(0,o.jsx)(n.li,{children:"The second parameter is the input index, i.e., which input (starting from 0, for single-input models, fill in 0 here)"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["We will use this interface to read the two inputs required by the yoloworld model: ",(0,o.jsx)(n.code,{children:"input_image"})," and ",(0,o.jsx)(n.code,{children:"text_embeddings"})," into the model:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"inf.read_input(input_image, 0)\ninf.read_input(text_embeddings, 1)\n"})}),"\n",(0,o.jsx)(n.admonition,{title:"Did you know",type:"tip",children:(0,o.jsx)(n.p,{children:"inf.read_input will automatically check the data type and size of the numpy array input by the developer. Inappropriate data types and sizes will be checked. This prevents unreasonable inputs from being read by the model."})}),"\n",(0,o.jsx)(n.h3,{id:"model-inference",children:"Model Inference"}),"\n",(0,o.jsx)(n.p,{children:"After completing model loading and input reading, the next step is to perform model inference."}),"\n",(0,o.jsxs)(n.p,{children:["Model inference uses the ",(0,o.jsx)(n.code,{children:"inf.forward"})," function, which does not accept any parameters and can be executed after model loading and input reading:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"inf.forward()\n"})}),"\n",(0,o.jsx)(n.h3,{id:"obtaining-outputs",children:"Obtaining Outputs"}),"\n",(0,o.jsxs)(n.p,{children:["When the heterogeneous model completes inference on the BPU, we can use the ",(0,o.jsx)(n.code,{children:"inf.get_output"})," function to obtain the inference results. The ",(0,o.jsx)(n.code,{children:"inf.get_output"})," function does not accept any parameters and can be used directly:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"inf.get_output()\n"})}),"\n",(0,o.jsx)(n.p,{children:"The inference results are numpy arrays, and the two outputs can be obtained as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Python",children:"classes_scores = inf.outputs[0].data\nbboxes = inf.outputs[1].data\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);