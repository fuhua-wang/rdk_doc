"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[96],{20727:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>x});var t=d(74848),c=d(28453);const r={sidebar_position:5},i="7.2.5 \u5e94\u7528\u5b9e\u65f6\u5185\u6838",s={id:"Advanced_development/linux_development/realtime_kernel",title:"7.2.5 \u5e94\u7528\u5b9e\u65f6\u5185\u6838",description:"\u672c\u7ae0\u8282\u65e8\u5728\u63cf\u8ff0\u5982\u4f55\u5728RDK X3 \u548c RDK X3 Module\u4e0a\u542f\u7528\u5b9e\u65f6\u5185\u6838\uff08Preempt-RT kernel\uff09\uff0c\u5e76\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u547d\u4ee4\u4ee5\u4fbf\u4e8e\u7528\u6237\u4f7f\u7528\u3002\u5b9e\u65f6\u5185\u6838\u662f\u4e00\u79cd\u80fd\u591f\u63d0\u4f9b\u66f4\u52a0\u7cbe\u786e\u548c\u53ef\u9760\u7684\u54cd\u5e94\u65f6\u95f4\u7684\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u901a\u5e38\u7528\u4e8e\u5bf9\u65f6\u95f4\u654f\u611f\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5728\u673a\u5668\u4eba\u63a7\u5236\u3001\u5de5\u4e1a\u81ea\u52a8\u5316\u7b49\u5e94\u7528\u573a\u666f\u4f7f\u7528\u8f83\u591a\u3002\u4ee5\u4e0b\u662f\u542f\u7528\u548c\u7981\u7528\u5b9e\u65f6\u5185\u6838\u7684\u76f8\u5173\u547d\u4ee4\u4ee5\u53ca\u4e00\u4e9b\u5e38\u89c1\u7528\u9014\u548c\u6d4b\u8bd5\u65b9\u6cd5\u3002",source:"@site/docs/07_Advanced_development/02_linux_development/realtime_kernel.md",sourceDirName:"07_Advanced_development/02_linux_development",slug:"/Advanced_development/linux_development/realtime_kernel",permalink:"/rdk_doc/Advanced_development/linux_development/realtime_kernel",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/02_linux_development/realtime_kernel.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"7.2.4 \u5185\u6838\u5934\u6587\u4ef6",permalink:"/rdk_doc/Advanced_development/linux_development/kernel_headers"},next:{title:"7.3 \u591a\u5a92\u4f53\u5f00\u53d1\u6307\u5357",permalink:"/rdk_doc/03_multimedia_development"}},l={},x=[{value:"\u5b9e\u65f6\u5185\u6838\u542f\u7528\u547d\u4ee4",id:"\u5b9e\u65f6\u5185\u6838\u542f\u7528\u547d\u4ee4",level:2},{value:"\u6062\u590d\u4e3a\u6807\u51c6\u5185\u6838\u547d\u4ee4",id:"\u6062\u590d\u4e3a\u6807\u51c6\u5185\u6838\u547d\u4ee4",level:2},{value:"\u5b9e\u65f6\u6027\u80fd\u6d4b",id:"\u5b9e\u65f6\u6027\u80fd\u6d4b",level:2},{value:"\u5b89\u88c5rt-tests\u5de5\u5177",id:"\u5b89\u88c5rt-tests\u5de5\u5177",level:3},{value:"\u8fd0\u884ccyclictest\u6d4b\u8bd5",id:"\u8fd0\u884ccyclictest\u6d4b\u8bd5",level:3},{value:"\u5206\u6790\u6d4b\u8bd5\u7ed3\u679c",id:"\u5206\u6790\u6d4b\u8bd5\u7ed3\u679c",level:3}];function v(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"725-\u5e94\u7528\u5b9e\u65f6\u5185\u6838",children:"7.2.5 \u5e94\u7528\u5b9e\u65f6\u5185\u6838"}),"\n",(0,t.jsxs)(n.p,{children:["\u672c\u7ae0\u8282\u65e8\u5728\u63cf\u8ff0\u5982\u4f55\u5728",(0,t.jsx)(n.code,{children:"RDK X3"})," \u548c ",(0,t.jsx)(n.code,{children:"RDK X3 Module"}),"\u4e0a\u542f\u7528\u5b9e\u65f6\u5185\u6838\uff08Preempt-RT kernel\uff09\uff0c\u5e76\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u547d\u4ee4\u4ee5\u4fbf\u4e8e\u7528\u6237\u4f7f\u7528\u3002\u5b9e\u65f6\u5185\u6838\u662f\u4e00\u79cd\u80fd\u591f\u63d0\u4f9b\u66f4\u52a0\u7cbe\u786e\u548c\u53ef\u9760\u7684\u54cd\u5e94\u65f6\u95f4\u7684\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\uff0c\u901a\u5e38\u7528\u4e8e\u5bf9\u65f6\u95f4\u654f\u611f\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5728\u673a\u5668\u4eba\u63a7\u5236\u3001\u5de5\u4e1a\u81ea\u52a8\u5316\u7b49\u5e94\u7528\u573a\u666f\u4f7f\u7528\u8f83\u591a\u3002\u4ee5\u4e0b\u662f\u542f\u7528\u548c\u7981\u7528\u5b9e\u65f6\u5185\u6838\u7684\u76f8\u5173\u547d\u4ee4\u4ee5\u53ca\u4e00\u4e9b\u5e38\u89c1\u7528\u9014\u548c\u6d4b\u8bd5\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u65f6\u5185\u6838\u542f\u7528\u547d\u4ee4",children:"\u5b9e\u65f6\u5185\u6838\u542f\u7528\u547d\u4ee4"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u5728RDK X3\u4e0a\u542f\u7528\u5b9e\u65f6\u5185\u6838\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install hobot-kernel-headers=2.0.0-01~rt hobot-boot=2.0.2-01~rt hobot-bpu-drivers=2.0.0-01~rt\nsudo reboot\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e9b\u547d\u4ee4\u5c06\u5b89\u88c5\u4e0e\u5b9e\u65f6\u5185\u6838\u517c\u5bb9\u7684\u5185\u6838\u5934\u6587\u4ef6\u3001\u5185\u6838\u6587\u4ef6\u3001\u9a71\u52a8\u7a0b\u5e8f\u548cBPU\u9a71\u52a8\uff0c\u5b8c\u6210\u540e\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf\u4ee5\u4f7f\u66f4\u6539\u751f\u6548\uff0c\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"uname -a"}),"\u547d\u4ee4\u53ef\u4ee5\u770b\u5230 ",(0,t.jsx)(n.code,{children:"PREEMPT RT"}),"\u7684\u5185\u6838\u7248\u672c\u4fe1\u606f\u8bf4\u660e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230914142401210",src:d(73285).A+"",width:"820",height:"34"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6062\u590d\u4e3a\u6807\u51c6\u5185\u6838\u547d\u4ee4",children:"\u6062\u590d\u4e3a\u6807\u51c6\u5185\u6838\u547d\u4ee4"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u6062\u590d\u4e3a\u6807\u51c6\u5185\u6838\uff0c\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install hobot-kernel-headers hobot-boot hobot-bpu-drivers\nsudo reboot\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e9b\u547d\u4ee4\u5c06\u5378\u8f7d\u5b9e\u65f6\u5185\u6838\u76f8\u5173\u7684\u7ec4\u4ef6\uff0c\u5e76\u4e14\u5b89\u88c5\u6807\u51c6\u5185\u6838\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u5b8c\u6210\u540e\u91cd\u65b0\u542f\u52a8\u7cfb\u7edf\u4ee5\u5207\u6362\u56de\u6807\u51c6\u5185\u6838\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u65f6\u6027\u80fd\u6d4b",children:"\u5b9e\u65f6\u6027\u80fd\u6d4b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u9700\u8981\u5bf9\u5b9e\u65f6\u5185\u6838\u7684\u6027\u80fd\u8fdb\u884c\u6d4b\u8bd5\u65f6\uff0c\u4e00\u4e2a\u5e38\u7528\u7684\u6027\u80fd\u6d4b\u8bd5\u5de5\u5177\u662f",(0,t.jsx)(n.code,{children:"rt-tests"}),"\uff0c\u5b83\u5305\u62ec\u4e86\u591a\u4e2a\u6d4b\u8bd5\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u5b9e\u65f6\u5185\u6838\u7684\u6027\u80fd\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528",(0,t.jsx)(n.code,{children:"rt-tests"}),"\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5rt-tests\u5de5\u5177",children:"\u5b89\u88c5rt-tests\u5de5\u5177"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u5c1a\u672a\u5b89\u88c5",(0,t.jsx)(n.code,{children:"rt-tests"}),"\u5de5\u5177\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt install rt-tests\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8fd0\u884ccyclictest\u6d4b\u8bd5",children:"\u8fd0\u884ccyclictest\u6d4b\u8bd5"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cyclictest"}),"\u6d4b\u8bd5\u662f",(0,t.jsx)(n.code,{children:"rt-tests"}),"\u4e2d\u7684\u4e00\u4e2a\u5e38\u7528\u6d4b\u8bd5\uff0c\u5b83\u7528\u4e8e\u8bc4\u4f30\u7cfb\u7edf\u7684\u5b9a\u65f6\u884c\u4e3a\u548c\u54cd\u5e94\u65f6\u95f4\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c",(0,t.jsx)(n.code,{children:"cyclictest"}),"\u6d4b\u8bd5\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo cyclictest -l50000000 -m -S -p90 -i200 -h400\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u547d\u4ee4\u5c06\u8fd0\u884c\u4e00\u4e2a\u5b9e\u65f6\u6027\u80fd\u6d4b\u8bd5\uff0c\u5176\u4e2d\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-l50000000"}),": \u8bbe\u7f6e\u6d4b\u8bd5\u8fd0\u884c\u7684\u5faa\u73af\u6b21\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-m"}),": \u6307 ",(0,t.jsx)(n.code,{children:"cyclictest"})," \u5728\u6d4b\u8bd5\u671f\u95f4\u5c06\u5f53\u524d\u548c\u63a5\u4e0b\u6765\u7684\u5185\u5b58\u901a\u8fc7mlock\u9501\u5b9a\uff0c\u9632\u6b62\u53d1\u751fswap\u5f71\u54cd\u6d4b\u8bd5\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-S"}),": \u6307\u6807\u51c6smp\u67b6\u6784\u6d4b\u8bd5\uff0c\u6240\u6709\u7684\u7ebf\u7a0b\u5c06\u4f7f\u7528\u76f8\u540c\u7684-a -t -n\u548c\u4f18\u5148\u7ea7\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-p90"}),": \u6307\u5b9a\u5b9e\u65f6\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7\u3002",(0,t.jsx)(n.code,{children:"-p90"})," \u8868\u793a\u6d4b\u8bd5\u5c06\u5728\u4f18\u5148\u7ea7 90 \u7684\u5b9e\u65f6\u8c03\u5ea6\u7c7b\u522b\u4e2d\u8fd0\u884c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-i200"}),": \u8bbe\u7f6e\u6d4b\u8bd5\u7ebf\u7a0b\u7761\u7720\u7684\u65f6\u95f4\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-h400"}),": \u6d4b\u8bd5\u5b8c\u6210\u540e\u8f93\u51fa\u4e00\u4e2a\u76f4\u65b9\u56fe\uff0c\u5e76\u8f93\u51fa\u5ef6\u65f6\u5c0f\u4e8e\u6307\u5b9a\u503c\uff08400\uff09\u5fae\u79d2\u7684\u6b21\u6570\u7edf\u8ba1\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6d4b\u8bd5\u7ed3\u679c\u5c06\u663e\u793a\u51fa\u7cfb\u7edf\u7684\u6700\u5c0f\u3001\u6700\u5927\u548c\u5e73\u5747\u5ef6\u8fdf\uff0c\u4ee5\u53ca\u4e00\u4e9b\u5176\u4ed6\u6027\u80fd\u7edf\u8ba1\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u5206\u6790\u6d4b\u8bd5\u7ed3\u679c",children:"\u5206\u6790\u6d4b\u8bd5\u7ed3\u679c"}),"\n",(0,t.jsxs)(n.p,{children:["\u5206\u6790",(0,t.jsx)(n.code,{children:"cyclictest"}),"\u6d4b\u8bd5\u7ed3\u679c\u4ee5\u8bc4\u4f30\u5b9e\u65f6\u5185\u6838\u7684\u6027\u80fd\u8868\u73b0\u3002\u5173\u6ce8\u6700\u5c0f\u5ef6\u8fdf\u548c\u6700\u5927\u5ef6\u8fdf\uff0c\u4ee5\u786e\u4fdd\u5b83\u4eec\u5728\u53ef\u63a5\u53d7\u8303\u56f4\u5185\u3002\u8f83\u5c0f\u7684\u6700\u5927\u5ef6\u8fdf\u548c\u66f4\u52a0\u4e00\u81f4\u7684\u5ef6\u8fdf\u8868\u660e\u5b9e\u65f6\u5185\u6838\u7684\u6027\u80fd\u8f83\u597d\u3002\u4e0b\u56fe\u662f\u4f7f\u7528\u5b9e\u65f6\u5185\u6838\uff0c\u5e76\u4e14\u8fd0\u884c\u4e86 ",(0,t.jsx)(n.code,{children:"/app/pydev_demo/03_mipi_camera_sample"})," \u793a\u4f8b\u7684\u60c5\u51b5\u4e0b\u6d4b\u8bd5\u7684\u7ed3\u679c\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230914145619064",src:d(25126).A+"",width:"636",height:"123"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230914145234528",src:d(26866).A+"",width:"452",height:"58"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cyclictest"})," \u8f93\u51fa\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bb5\u542b\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"T"}),": \u6d4b\u8bd5\u8fd0\u884c\u7684\u7ebf\u7a0b\u7f16\u53f7\u548c\u7ebf\u7a0b\u53f7\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"P"}),": \u6d4b\u8bd5\u8fd0\u884c\u65f6\u4f7f\u7528\u7684\u4f18\u5148\u7ea7\u3002\u5728\u4f60\u7684\u8f93\u51fa\u4e2d\uff0c\u5b83\u7684\u503c\u4e3a 90\uff0c\u8868\u793a\u6d4b\u8bd5\u5728\u4f18\u5148\u7ea7 90 \u7684\u5b9e\u65f6\u8c03\u5ea6\u7c7b\u522b\u4e2d\u8fd0\u884c\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"I"}),": \u5ef6\u8fdf\u6d4b\u91cf\u7ebf\u7a0b\u7684\u9884\u671f\u5524\u9192\u5468\u671f\uff0c\u4ee5\u5fae\u79d2\u4e3a\u5355\u4f4d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"C"}),": \u6d4b\u91cf\u5ef6\u8fdf\u7684\u6b21\u6570\uff0c\u5373\u5faa\u73af\u8ba1\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Min"}),": \u5f53\u524d\u6d4b\u8bd5\u5468\u671f\u7684\u6700\u5c0f\u5ef6\u8fdf\uff0c\u4ee5\u5fae\u79d2\u4e3a\u5355\u4f4d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Act"}),": \u5f53\u524d\u6d4b\u8bd5\u5468\u671f\u7684\u5b9e\u9645\u5ef6\u8fdf\uff0c\u4ee5\u5fae\u79d2\u4e3a\u5355\u4f4d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Avg"}),": \u5f53\u524d\u6d4b\u8bd5\u5468\u671f\u7684\u5e73\u5747\u5ef6\u8fdf\uff0c\u4ee5\u5fae\u79d2\u4e3a\u5355\u4f4d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Max"}),": \u5f53\u524d\u6d4b\u8bd5\u5468\u671f\u7684\u6700\u5927\u5ef6\u8fdf\uff0c\u4ee5\u5fae\u79d2\u4e3a\u5355\u4f4d\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},73285:(e,n,d)=>{d.d(n,{A:()=>t});const t="data:image/png;base64,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"},26866:(e,n,d)=>{d.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcQAAAA6CAIAAACh0r6VAAALcUlEQVR4nO2d27WzvK6GtfZYbfw3qIHZhNIATagBpwjcgJugAdREGjCt/PuCM7E5JCaBLD033/gE07wy4BPw5j///vsvAPzzzz9wVpDLkhEAAMT8GfmyHEVRlAD/t7ANkRABAInwU3oCeJf//f395c5/UYSSFCSi5uJSlF9hoTFFKpgAgNjesoUiyD6e6caSy39m6QXJb4Fsy0agnSgMx5Ha6ONRWlqPTwvqNyCX47rps94bXzruFfId/qaw1lrOgruPrp7L5zsUNDpuNN+1ejt9vtFyJhtiQr86ZEtBvDFFIhDxgJh5Xy8UIeavwUg3ijzrOJJsySD5399f7oDL/ioIx5H5Vt2bhHLJ7Fq8WZEgaOrgXiGN7oa+Zv6mKxU74vHjXihfAOSCxElw1/YqEvG/kC8yY3Vv74fhuLF8V+rt9PlGy0EubFabvN3Aow3R8q9IqDElW5ZlWTIiF/2/dnWoGaTveEY9T9OxWRoGtcPZIw505cuQfWwZCQMA3cg75zwAeHHO042W4t4ZI765zL1zAlkzMY3FgZhRnGnuDC/OpV3fjR73SvkiF1S7aFeLzNS1LZfP1zvj2mbSSxXUP853NyfLN1pOhgh11RUzJHvw/fJxQo2pmPv97gTE5fe7eBCT3+/x638BsiU3HU9uJLMFtycvb/uzblDb9W1EN+i6chl3tUlAzKD2XRre1+3ZjsUX/jgYR8xAPMTmXcHw7vianpPnS8y1iw+5kAgleKldNN8hsRsFyn/Od+28XyTfSflSCWS3ZiyFRNjOdBfLvyLhab73gJn34n2GKJV4v3wZR2h6SOl6SFl9kiWjrtyFu/LAH5l9ywrIZb9Ihdl6HKDpFWrz3Ag8xYnaid24MximRLkZz3L2xtf1nDtfIGthSTUxo1SB7RfNF/pGp2Rw+VP5s3zXz/v58w2WIyYXaCuCanMfbtZg+Vcl0JiytdYWhEBsLRNkN/tap7FhMDGHuOzXto+qWe/yru2dLAbH4kC2tFnoVgjEpe08Ip2BF3cfpmMvxmN6IpwmX7I2c65GxG632e5t5ztP4Kr59kdtOnsq52tRkXyD5Vwl31A5yGWJvls89uNGc6X8axFoTKWqPAB6cZUH8CJVFRosrBOZYMQha7nue70db5RuO8hUz9DUx+KtptJmkj+NfAPx5ed0iYjpCXC+fD1Q0dCsmBc8ftQcXD68dL4jbc8zs7eWSzs9p8s3UA4SoVSuWzwWaVvfj9wvnyTQmHoRDyjOiXjAunIi8tIsH6QSZKbmXdX5pVN7H2hqvYdmvYaYabalhmBXTfZRlpvGsY0e7vT0M6xYHMk+QldeLC6VUJsvIPeLZMiWh4dvRV/+3nj0uBfJV0ze06yY52YoEYlw1rZcPN9JnJini6bP+UbP+0XyjZXT3Ln9227Dommk/Mvyn9AXUMhlAffcZfZxq7aPEMk+2M9qEtkWTXV5MXczuVfIdk/4uy+bJnsLWJoW1/2Bd+MwcllQvXEa2B/Bi7uPb+VAfPTpVUN73Fh8nu9QEDF3F824GnbGl457iXxHkH1YGH/P9hT4hXyRbNG9xDKriEC+W+rtzPkulDMUM6+hUPlXJdiYKoqiKPtY+pxUURRF2Yg2poqiKAnQxlRRFCUBn2lM8Uctgn41L0VRdvMRCz4k7i2CfolfzQtOZ5GnepY5m57/TRJY8LV2JTMDufFLEt7l75g6I297jfRZ1cGfp72Z1yvss1zbH283TizyVM/v6FEOJIEFHwAAeJ+1L9QjEVz73dvzss9ybX8cAODZIk/1/Ioe5VBSWfDVIhkzNrZAMjJK6Jyjx465XD4s0bM3336Cln0LFn8Tt96xJWBMT9DdN5JXrPxxNJDtYRaCu+NNZSxa5KmeC+tRjiWZBZ8XASKkG00+gmtM9gL2NHxr3WJMTXb25ehmwpZ9CxZ/trStF20+WALG9TQfGpvWvBZG5rXhvCLlE9usk3Kvbq964O61XHvFom3FIk/1XFiPcjDpLPi8CFDBtPZBcbd35xYTcc3dxE7LvpElIPip8URQD93Iu3u/YdW8dqF8pPZpnhczK+ZoC8Ed8TWLPNXzA3qUo/jvc4itRcgyBGCLGQGAtejWP5v1ztVsaycA601jIksD4pJ5aEHXzYORygf3kWH/qE9utV1ntHwxubMFF2wxwSfI3uV/DgAoYLn2VpyszVxe41CfiBuWv1XPtfQoR5HUgk/MLuO8t9lp2ed9PfxgVWeuuLL/njHzQvnemTzPm0WEuR0WwEEWgvst2hYt8lTPxfUoB3OoBd+Yg3xf45Z9AYs/qYRs9wAIidfWaqUS5M7t5vkIADDNK1L+2LIswHEWgjvjyxZ5qufyepRjCa6Zdm9DzZ8mvYwYU1P78w2vtanT35NuWx5xrm43FDcvU6Xeue6nEvqWSkxuulhxg0pWkhOTm7p9El/c4Gn3eV7h8r1zcCuaZ/mBX6+ovfd+Wz2LyR1Q+VRQqvheVM+19CiHohZ8iqIoCVCjE0VRlARoY6ooipIAbUwVRVESoI3pO6gFn6IoLR+x4PtVfteCT1GUvaSw4Ov25/L1V5/WClYLvoYjLd2QOzeWjvWzqXq+p2e+QYc8XyaVBV8zfvV+Ooqdz4F1Tvwex1q6+f5jsvaDstnP2Kuec+kBQC5Lap117hW+6qCjpCGVBR8gEcrM3IOLcuq8V/LoMug6d7avj2fVgi9lfJwHM623Farnq3qIGcWZzUY8yrGksuBDIpRKpBq1pl5kdB22ewBA09PWpu1p3+hP1YIvtaVbd6ima1xuK1TPd/UgZiAeFiz4lY+SyIKvbymjren4W+ORVd17/ala8KW1dOsTGZ0s1XNmPUTYDgLkyYJf+TBpLPiQCL3UAAB1s27qGr8b5+TBjOKyG3mXN5ffXmu7BdSCL3287RTyrX2c6vmiHhk670qYEWFl6UE5jjQWfBlitwpaMo471HakSrfRCtNea7soasGX2NKtCWxZDlQ939ez6bmw8jmSWPA1PfXoMedoxV4qQeLb5PJrLMWosxR7Z26iFnwJ461uwk1ther5th6phLi7PPlGqSzXlddIYcFH09Mo1XNrOuvKxeQus+UjbGwXPIZa8MFHLN2aJ8Qb1yFUz3f1iMmlmxGSevN9mxNY8JF9sM93PIFRFEU5HV/6Np+4nw1vXYFSFEU5MYGn+Z9ApLLFw7bvCt11VKooysU5wTRfURTl+qgF3zuoBZ+iKC1qwfcGv2rBh6SdxJXQ83UOUljwNW8nja1stjp3bEMt+AY+YCVHtrR2aydxtJVcdP8D9SzVzzf0zAXNrupd50s5kFQWfN5n7aulSLTyWafyKsdbySGXNpNNr/4m0wNRK7nY/t+qn+/omYsa99/7zpdyKKks+GqRjBkBiLkezm3QIm/i2TD7z07Ugu+V+Fjv05tpYnJTrWtJqSdmJbdB/0fr5wR6ntlxvpRjSWXBB14Emo/wRx/zhC3yALzLTc0FY+/G99rLUWrBl9pKzu8w8TraSm6D/o/Wz1f1dFP92ahmz/lSDiaRBR+0rWnBkw9QFyzyxJiay7K0JObldUe14Pugldyhehas5Bb0H6enVRWqn8/rGab4uZFMnfbOShoLPgAA8M7VbGsnAKMBX9wiT5zzJYO7v3EzqwXf6/G9VnKH6lmwkovrP1APAMTq53t6ALy4u6PyRtscLZSPksaCr/tLM535LlrkIRdcOwdcvLheqhZ8H7KSO1pPrEla0X+Yni4wr58v61HOThILvgViFnnNUqlxLjf1O/MWteB7Id7q22wld7SemJXcov4v1M+X9IyvH+QiwcqMcggpLPiiRC3yyA5LpWKMkF1rS9SCr9VzsJVc/87w7OXhY/XErOQW9H+lfr6jx0vVXT+PkmozPu6+86Ucin6bryiKkgD9Nl9RFCUB/w/SG9E7PLgPtAAAAABJRU5ErkJggg=="},25126:(e,n,d)=>{d.d(n,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>s});var t=d(96540);const c={},r=t.createContext(c);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);