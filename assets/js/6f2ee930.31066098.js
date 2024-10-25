"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4547],{9231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=t(74848),r=t(28453),o=t(93859),l=t(19365);const i={sidebar_position:3},c="5.1.3 \u6e90\u7801\u5b89\u88c5",a={id:"Robot_development/quick_start/cross_compile",title:"5.1.3 \u6e90\u7801\u5b89\u88c5",description:"\u672c\u7ae0\u8282\u4ecb\u7ecdRDK\u548cX86\u5e73\u53f0\u5982\u4f55\u901a\u8fc7\u6e90\u7801\u5b89\u88c5TogetheROS.Bot\u3002",source:"@site/docs/05_Robot_development/01_quick_start/cross_compile.md",sourceDirName:"05_Robot_development/01_quick_start",slug:"/Robot_development/quick_start/cross_compile",permalink:"/rdk_doc/Robot_development/quick_start/cross_compile",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/05_Robot_development/01_quick_start/cross_compile.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5.1.2 apt\u5b89\u88c5\u4e0e\u5347\u7ea7",permalink:"/rdk_doc/Robot_development/quick_start/install_tros"},next:{title:"5.1.4 \u8fd0\u884c\u201cHello World\u201d",permalink:"/rdk_doc/Robot_development/quick_start/hello_world"}},d={},u=[{value:"RDK\u5e73\u53f0",id:"rdk\u5e73\u53f0",level:2},{value:"\u7f16\u8bd1tros.b",id:"\u7f16\u8bd1trosb",level:3},{value:"1 \u4f7f\u7528docker\u6587\u4ef6",id:"1-\u4f7f\u7528docker\u6587\u4ef6",level:4},{value:"2 \u83b7\u53d6tros.b\u6e90\u7801",id:"2-\u83b7\u53d6trosb\u6e90\u7801",level:4},{value:"3 \u4ea4\u53c9\u7f16\u8bd1",id:"3-\u4ea4\u53c9\u7f16\u8bd1",level:4},{value:"\u5b89\u88c5tros.b",id:"\u5b89\u88c5trosb",level:3},{value:"\u7f16\u8bd1\u6307\u5b9a\u7248\u672ctros.b",id:"\u7f16\u8bd1\u6307\u5b9a\u7248\u672ctrosb",level:3},{value:"X86\u5e73\u53f0",id:"x86\u5e73\u53f0",level:2},{value:"\u7cfb\u7edf\u8981\u6c42",id:"\u7cfb\u7edf\u8981\u6c42",level:3},{value:"\u7cfb\u7edf\u8bbe\u7f6e",id:"\u7cfb\u7edf\u8bbe\u7f6e",level:3},{value:"\u8bbe\u7f6elocal",id:"\u8bbe\u7f6elocal",level:4},{value:"\u6dfb\u52a0apt\u6e90",id:"\u6dfb\u52a0apt\u6e90",level:4},{value:"\u5b89\u88c5ROS\u5de5\u5177\u5305",id:"\u5b89\u88c5ros\u5de5\u5177\u5305",level:4},{value:"\u83b7\u53d6tros.b\u6e90\u7801",id:"\u83b7\u53d6trosb\u6e90\u7801",level:3},{value:"\u5b89\u88c5\u4f9d\u8d56\u9879",id:"\u5b89\u88c5\u4f9d\u8d56\u9879",level:3},{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:3},{value:"\u5b89\u88c5tros.b",id:"\u5b89\u88c5trosb-1",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"513-\u6e90\u7801\u5b89\u88c5",children:"5.1.3 \u6e90\u7801\u5b89\u88c5"}),"\n","\n",(0,s.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u4ecb\u7ecdRDK\u548cX86\u5e73\u53f0\u5982\u4f55\u901a\u8fc7\u6e90\u7801\u5b89\u88c5TogetheROS.Bot\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"rdk\u5e73\u53f0",children:"RDK\u5e73\u53f0"}),"\n",(0,s.jsx)(n.p,{children:"\u524d\u63d0\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5f00\u53d1\u673a\u80fd\u591f\u6b63\u5e38\u8bbf\u95ee",(0,s.jsx)(n.a,{href:"https://github.com/D-Robotics",children:"D-Robotics"}),"\u7ec4\u7ec7"]}),"\n",(0,s.jsx)(n.li,{children:"\u5f00\u53d1\u673a\u5df2\u5b89\u88c5docker"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7f16\u8bd1trosb",children:"\u7f16\u8bd1tros.b"}),"\n",(0,s.jsx)(n.h4,{id:"1-\u4f7f\u7528docker\u6587\u4ef6",children:"1 \u4f7f\u7528docker\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u90e8\u5206\u64cd\u4f5c\u5747\u5728\u5f00\u53d1\u673a\u7684docker\u5185\u5b8c\u6210\u3002"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'## \u521b\u5efa\u76ee\u5f55\ncd  /mnt/data/kairui.wang/test\nmkdir -p cc_ws/tros_ws/src\n## \u83b7\u53d6\u4ea4\u53c9\u7f16\u8bd1\u7528docker\nwget http://archive.d-robotics.cc/TogetheROS/cross_compile_docker/pc_tros_v1.0.5.tar.gz\n## \u52a0\u8f7ddocker\u955c\u50cf\nsudo docker load --input pc_tros_v1.0.5.tar.gz \n## \u67e5\u770bpc_tros\u5bf9\u5e94\u7684image ID\nsudo docker images\n## \u542f\u52a8docker\u6302\u8f7d\u76ee\u5f55\nsudo docker run -it --entrypoint="/bin/bash" -v PC\u672c\u5730\u76ee\u5f55:docker\u76ee\u5f55 imageID\uff0c\u8fd9\u91cc\u4ee5 sudo docker run -it --entrypoint="/bin/bash" -v /mnt/data/kairui.wang/test:/mnt/test 9c2ca340973e \u4e3a\u4f8b\n'})})}),(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'## \u521b\u5efa\u76ee\u5f55\ncd  /mnt/data/kairui.wang/test\nmkdir -p cc_ws/tros_ws/src\n## \u83b7\u53d6\u4ea4\u53c9\u7f16\u8bd1\u7528docker\nwget http://archive.d-robotics.cc/TogetheROS/cross_compile_docker/pc_tros_ubuntu22.04_v1.0.0.tar.gz\n## \u52a0\u8f7ddocker\u955c\u50cf\nsudo docker load --input pc_tros_ubuntu22.04_v1.0.0.tar.gz \n## \u67e5\u770bpc_tros\u5bf9\u5e94\u7684image ID\nsudo docker images\n## \u542f\u52a8docker\u6302\u8f7d\u76ee\u5f55\nsudo docker run -it --entrypoint="/bin/bash" -v PC\u672c\u5730\u76ee\u5f55:docker\u76ee\u5f55 imageID\uff0c\u8fd9\u91cc\u4ee5 sudo docker run -it --entrypoint="/bin/bash" -v /mnt/data/kairui.wang/test:/mnt/test 4cbdb9d61e19 \u4e3a\u4f8b\n'})})})]}),"\n",(0,s.jsx)(n.h4,{id:"2-\u83b7\u53d6trosb\u6e90\u7801",children:"2 \u83b7\u53d6tros.b\u6e90\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u90e8\u5206\u64cd\u4f5c\u5747\u5728\u5f00\u53d1\u673a\u7684docker\u5185\u5b8c\u6210\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u4ee5docker\u4e2d/mnt/test\u76ee\u5f55\u4e3a\u4f8b\u3002"}),"\n",(0,s.jsxs)(o.A,{groupId:"tros-distro",children:[(0,s.jsx)(l.A,{value:"foxy",label:"Foxy",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd /mnt/test/cc_ws/tros_ws\n## \u83b7\u53d6\u914d\u7f6e\u6587\u4ef6\ngit clone https://github.com/D-Robotics/robot_dev_config.git -b foxy \n## \u6267\u884ccd robot_dev_config\uff0c\u4f7f\u7528 git tag --list \u547d\u4ee4\u67e5\u770b\u53ef\u7528\u7684\u53d1\u5e03\u7248\u672c\n## \u4f7f\u7528 git reset --hard [tag\u53f7] \u547d\u4ee4\u6307\u5b9a\u53d1\u5e03\u7248\u672c\u3002\u8be6\u7ec6\u8bf4\u660e\u53c2\u8003\u672c\u9875\u9762 \u7f16\u8bd1\u6307\u5b9a\u7248\u672ctros.b \u5185\u5bb9\n## \u62c9\u53d6\u4ee3\u7801\nvcs-import src < ./robot_dev_config/ros2_release.repos \n"})})}),(0,s.jsx)(l.A,{value:"humble",label:"Humble",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd /mnt/test/cc_ws/tros_ws\n## \u83b7\u53d6\u914d\u7f6e\u6587\u4ef6\ngit clone https://github.com/D-Robotics/robot_dev_config.git -b develop \n## \u6267\u884ccd robot_dev_config\uff0c\u4f7f\u7528 git tag --list \u547d\u4ee4\u67e5\u770b\u53ef\u7528\u7684\u53d1\u5e03\u7248\u672c\n## \u4f7f\u7528 git reset --hard [tag\u53f7] \u547d\u4ee4\u6307\u5b9a\u53d1\u5e03\u7248\u672c\u3002\u8be6\u7ec6\u8bf4\u660e\u53c2\u8003\u672c\u9875\u9762 \u7f16\u8bd1\u6307\u5b9a\u7248\u672ctros.b \u5185\u5bb9\n## \u62c9\u53d6\u4ee3\u7801\nvcs-import src < ./robot_dev_config/ros2_release.repos \n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u6574\u4e2a\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\u251c\u2500\u2500 cc_ws\n\u2502   \u251c\u2500\u2500 sysroot_docker\n\u2502   \u2502   \u251c\u2500\u2500 etc\n\u2502   \u2502   \u251c\u2500\u2500 lib -> usr/lib\n\u2502   \u2502   \u251c\u2500\u2500 opt\n\u2502   \u2502   \u2514\u2500\u2500 usr\n\u2502   \u2514\u2500\u2500 tros_ws\n\u2502       \u251c\u2500\u2500 robot_dev_config\n\u2502       \u2514\u2500\u2500 src\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"tros_ws/robot_dev_config"}),"\u8def\u5f84\u5305\u542b\u4ee3\u7801\u62c9\u53d6\u3001\u7f16\u8bd1\u3001\u6253\u5305\u7b49\u529f\u80fd\u6240\u9700\u8981\u7684\u914d\u7f6e\u3001\u811a\u672c\u6587\u4ef6\uff1b",(0,s.jsx)(n.code,{children:"tros_ws/src"}),"\u8def\u5f84\u5b58\u653e\u62c9\u53d6\u7684\u4ee3\u7801\uff1b",(0,s.jsx)(n.code,{children:"sysroot_docker"}),"\u8def\u5f84\u5305\u542b\u4ea4\u53c9\u7f16\u8bd1\u4f9d\u8d56\u7684\u5934\u6587\u4ef6\u548c\u5e93\uff0c\u548cRDK\u7684",(0,s.jsx)(n.code,{children:"/"}),"\u76ee\u5f55\u5bf9\u5e94\u3002\u4f8b\u5982\u5a92\u4f53\u5e93\u5728",(0,s.jsx)(n.code,{children:"sysroot_docker"}),"\u4e2d\u7684\u8def\u5f84\u4e3a",(0,s.jsx)(n.code,{children:"sysroot_docker/usr/lib/hbmedia/"}),"\uff0c\u5728RDK\u4e2d\u7684\u8def\u5f84\u4e3a",(0,s.jsx)(n.code,{children:"/usr/lib/hbmedia/"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7f16\u8bd1\u65f6\uff0c\u5728",(0,s.jsx)(n.code,{children:"robot_dev_config/aarch64_toolchainfile.cmake"}),"\u7f16\u8bd1\u811a\u672c\u4e2d\u901a\u8fc7",(0,s.jsx)(n.code,{children:"CMAKE_SYSROOT"}),"\u5b8f\u6307\u5b9a",(0,s.jsx)(n.code,{children:"sysroot_docker"}),"\u7684\u5b89\u88c5\u8def\u5f84\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"3-\u4ea4\u53c9\u7f16\u8bd1",children:"3 \u4ea4\u53c9\u7f16\u8bd1"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u90e8\u5206\u64cd\u4f5c\u5747\u5728\u5f00\u53d1\u673a\u7684docker\u5185\u5b8c\u6210\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"## \u4f7f\u7528build.sh\u7f16\u8bd1X3\u7248\u672ctros.b\nbash ./robot_dev_config/build.sh -p X3\n\n## \u4f7f\u7528build.sh\u7f16\u8bd1RDK Ultra\u7248\u672ctros.b\nbash ./robot_dev_config/build.sh -p Rdkultra\n\n## \u4f7f\u7528build.sh\u7f16\u8bd1X5\u7248\u672ctros.b\nbash ./robot_dev_config/build.sh -p X5\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u6210\u529f\u540e\u4f1a\u63d0\u793a\u603b\u8ba1N packages\u7f16\u8bd1\u901a\u8fc7\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u82e5\u4f7f\u7528minimal_build.sh\u8fdb\u884c\u6700\u5c0f\u5316\u7f16\u8bd1\uff0c\u8fd8\u53ef\u901a\u8fc7\u6267\u884c./minimal_deploy.sh -d \u201cinstall_path\u201d\uff0c\u8fdb\u4e00\u6b65\u538b\u7f29\u90e8\u7f72\u5305\u5927\u5c0f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5trosb",children:"\u5b89\u88c5tros.b"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u7f16\u8bd1\u751f\u6210\u7684install\u76ee\u5f55\u62f7\u8d1d\u81f3RDK\u4e2d\u5e76\u91cd\u547d\u540d\u4e3atros\uff0c\u8fd9\u91cc\u6211\u4eec\u5c06\u90e8\u7f72\u5305\u653e\u5728/opt/tros\u76ee\u5f55\u4e0b\u4e0edeb\u5b89\u88c5\u76ee\u5f55\u4fdd\u6301\u4e00\u81f4"}),"\n",(0,s.jsx)(n.h3,{id:"\u7f16\u8bd1\u6307\u5b9a\u7248\u672ctrosb",children:"\u7f16\u8bd1\u6307\u5b9a\u7248\u672ctros.b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u672c\u7ae0\u8282",(0,s.jsx)(n.strong,{children:"\u7f16\u8bd1tros.b"}),"\u5c0f\u8282\u7b2c2\u6b65",(0,s.jsx)(n.strong,{children:"\u83b7\u53d6tros.b\u6e90\u7801"}),"\u4e2d\uff0c\u9ed8\u8ba4\u662f\u83b7\u53d6\u7684\u6700\u65b0\u7248\u672ctros.b\u6e90\u7801\u3002\u5982\u679c\u9700\u8981\u83b7\u53d6\u67d0\u4e2a\u6307\u5b9a\u53d1\u5e03\u7248\u672c\u6e90\u7801\uff0c\u8be5\u6b65\u9aa4\u9700\u8981\u505a\u5982\u4e0b\u4fee\u6539"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"## \u83b7\u53d6\u914d\u7f6e\u6587\u4ef6\ngit clone https://github.com/D-Robotics/robot_dev_config.git\ncd robot_dev_config\n## \u67e5\u770b\u53ef\u7528\u7684\u53d1\u5e03\u7248\u672c\ngit tag --list\n## \u5207\u6362\u81f3\u6307\u5b9a\u7248\u672c\u53f7\uff0c\u8fd9\u91cc\u4ee5tros.b 2.0.0\u4e3a\u4f8b\ngit reset --hard tros_2.0.0\ncd ..\n## \u62c9\u53d6\u4ee3\u7801\nvcs-import src < ./robot_dev_config/ros2_release.repos\n"})}),"\n",(0,s.jsx)(n.h2,{id:"x86\u5e73\u53f0",children:"X86\u5e73\u53f0"}),"\n",(0,s.jsx)(n.h3,{id:"\u7cfb\u7edf\u8981\u6c42",children:"\u7cfb\u7edf\u8981\u6c42"}),"\n",(0,s.jsx)(n.p,{children:"\u5fc5\u987b\u4e3aUbuntu 20.04 64\u4f4d\u7cfb\u7edf\uff0c\u4e5f\u53ef\u4f7f\u7528RDK\u5e73\u53f0\u4ea4\u53c9\u7f16\u8bd1docker\u955c\u50cf\uff0c\u4f46\u7f16\u8bd1\u548c\u8fd0\u884c\u5fc5\u987b\u90fd\u5728docker\u4e2d\u8fdb\u884c"}),"\n",(0,s.jsx)(n.h3,{id:"\u7cfb\u7edf\u8bbe\u7f6e",children:"\u7cfb\u7edf\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.h4,{id:"\u8bbe\u7f6elocal",children:"\u8bbe\u7f6elocal"}),"\n",(0,s.jsx)(n.p,{children:"\u786e\u4fdd\u8bed\u8a00\u73af\u5883\u652f\u6301 UTF-8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"locale  # check for UTF-8\n\nsudo apt update && sudo apt install locales\nsudo locale-gen en_US en_US.UTF-8\nsudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8\nexport LANG=en_US.UTF-8\n\nlocale  # verify settings\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6dfb\u52a0apt\u6e90",children:"\u6dfb\u52a0apt\u6e90"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# \u9996\u5148\u786e\u4fdd\u5df2\u542f\u7528 Ubuntu Universe\nsudo apt install software-properties-common\nsudo add-apt-repository universe\n\nsudo apt update && sudo apt install curl\n\n# \u6dfb\u52a0ROS2\u5b98\u65b9\u6e90\nsudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n\n# \u6dfb\u52a0tros.b\u5b98\u65b9\u6e90\nsudo curl -sSL http://archive.d-robotics.cc/keys/sunrise.gpg -o /usr/share/keyrings/sunrise.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/sunrise.gpg] http://archive.d-robotics.cc/ubuntu-rdk-sim focal main" | sudo    tee /etc/apt/sources.list.d/sunrise.list > /dev/null\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u5b89\u88c5ros\u5de5\u5177\u5305",children:"\u5b89\u88c5ROS\u5de5\u5177\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt update && sudo apt install -y \\\n  libbullet-dev \\\n  python3-pip \\\n  python3-pytest-cov \\\n  ros-dev-tools\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u83b7\u53d6trosb\u6e90\u7801",children:"\u83b7\u53d6tros.b\u6e90\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git config --global credential.helper store\n\nmkdir -p ~/cc_ws/tros_ws/src\ncd ~/cc_ws/tros_ws/\n\ngit clone https://github.com/D-Robotics/robot_dev_config.git -b develop \nvcs-import src < ./robot_dev_config/ros2_release.repos\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5\u4f9d\u8d56\u9879",children:"\u5b89\u88c5\u4f9d\u8d56\u9879"}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5\u6e90\u7801\u7f16\u8bd1\u4f9d\u8d56\u7684\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# install some pip packages needed for testing\npython3 -m pip install -U \\\n  argcomplete \\\n  flake8-blind-except \\\n  flake8-builtins \\\n  flake8-class-newline \\\n  flake8-comprehensions \\\n  flake8-deprecated \\\n  flake8-docstrings \\\n  flake8-import-order \\\n  flake8-quotes \\\n  pytest-repeat \\\n  pytest-rerunfailures \\\n  pytest\n\n# install Fast-RTPS dependencies\nsudo apt install --no-install-recommends -y \\\n  libasio-dev \\\n  libtinyxml2-dev\n\n# install Cyclone DDS dependencies\nsudo apt install --no-install-recommends -y \\\n  libcunit1-dev\n\n# install tros.b basic models\nsudo apt install --no-install-recommends -y \\\n  hobot-models-basic\n\n# install other packages dependencies\nsudo apt install --no-install-recommends -y \\\n  qt5-qmake \\\n  libpyside2-dev \\\n  libshiboken2-dev \\\n  pyqt5-dev \\\n  python3-pyqt5 \\\n  python3-pyqt5.qtsvg \\\n  python3-pyside2.qtsvg \\\n  python3-sip-dev \\\n  shiboken2 \\\n  libyaml-dev \\\n  qtbase5-dev \\\n  libzstd-dev \\\n  libeigen3-dev \\\n  libxml2-utils \\\n  libtinyxml-dev \\\n  libssl-dev \\\n  python3-numpy \\\n  libconsole-bridge-dev \\\n  pydocstyle \\\n  libqt5core5a \\\n  libqt5gui5 \\\n  libgtest-dev \\\n  cppcheck \\\n  tango-icon-theme \\\n  libqt5opengl5 \\\n  libqt5widgets5 \\\n  python3-lark \\\n  libspdlog-dev \\\n  google-mock \\\n  clang-format \\\n  python3-flake8 \\\n  libbenchmark-dev \\\n  python3-pygraphviz \\\n  python3-pydot \\\n  python3-psutil \\\n  libfreetype6-dev \\\n  libx11-dev \\\n  libxaw7-dev \\\n  libxrandr-dev \\\n  libgl1-mesa-dev \\\n  libglu1-mesa-dev \\\n  python3-pytest-mock \\\n  python3-mypy \\\n  default-jdk \\\n  libcunit1-dev \\\n  libopencv-dev \\\n  python3-ifcfg \\\n  python3-matplotlib \\\n  graphviz \\\n  uncrustify \\\n  python3-lxml \\\n  libcppunit-dev \\\n  libcurl4-openssl-dev \\\n  python3-mock \\\n  python3-nose \\\n  libsqlite3-dev \\\n  pyflakes3 \\\n  clang-tidy \\\n  python3-lttng \\\n  liblog4cxx-dev \\\n  python3-babeltrace \\\n  python3-pycodestyle \\\n  libassimp-dev \\\n  libboost-dev \\\n  libboost-python-dev \\\n  python3-opencv \\\n  libboost-python1.71.0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u7f16\u8bd1",children:"\u7f16\u8bd1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# \u4f7f\u7528build.sh\u7f16\u8bd1\nbash ./robot_dev_config/build.sh -p X86\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u6210\u529f\u540e\u4f1a\u63d0\u793a\u603b\u8ba1N packages\u7f16\u8bd1\u901a\u8fc7\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5trosb-1",children:"\u5b89\u88c5tros.b"}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u7f16\u8bd1\u751f\u6210\u7684install\u76ee\u5f55\u62f7\u8d1d\u81f3/opt\u76ee\u5f55\u4e0b\u5e76\u91cd\u547d\u540d\u4e3atros\uff0c\u4e0edeb\u5b89\u88c5\u76ee\u5f55\u4fdd\u6301\u4e00\u81f4"}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,s.jsx)(n.p,{children:"Q1\uff1a \u5982\u4f55\u5224\u65adVCS\u662f\u5426\u6210\u529f\u62c9\u53d6\u4ee3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"A1\uff1a\u5982\u4e0b\u56fe\u6240\u793a\uff0cvcs import\u8fc7\u7a0b\u4e2d\u6253\u5370.\u8868\u793a\u6210\u529f\u62c9\u53d6repo\uff0c\u5982\u679c\u6253\u5370E\u8868\u793a\u8be5repo\u62c9\u53d6\u5931\u8d25\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u540e\u7684log\u770b\u5230\u5177\u4f53\u5931\u8d25\u7684repo\uff0c\u78b0\u5230\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u5c1d\u8bd5\u5220\u9664src\u91cc\u9762\u7684\u5185\u5bb9\u91cd\u65b0vcs import\u6216\u8005\u624b\u52a8\u62c9\u53d6\u5931\u8d25\u7684repo."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"vcs_import",src:t(32125).A+"",title:"vcs_import",width:"1536",height:"78"})}),"\n",(0,s.jsx)(n.p,{children:"Q2\uff1a\u6761\u4ef6\u53d7\u9650\u65e0\u6cd5\u4ecegithub\u62c9\u53d6\u4ee3\u7801"}),"\n",(0,s.jsxs)(n.p,{children:["A2\uff1a\u53ef\u4ee5\u76f4\u63a5\u5728",(0,s.jsx)(n.a,{href:"http://archive.d-robotics.cc/TogetheROS/source_code/",children:"TogetheROS\u6587\u4ef6\u670d\u52a1\u5668"}),"\u4e2d\u9009\u62e9\u4e0b\u8f7d\u9700\u8981\u7684\u7248\u672c\u4ee3\u7801\u3002\u4f8b\u5982",(0,s.jsx)(n.code,{children:"tros_2.0.0_source_code.tar.gz"}),"\u6587\u4ef6\u5bf9\u5e94\u4e8etros.b 2.0.0\u7248\u672c\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var o=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},93859:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(34164),o=t(86641),l=t(56347),i=t(205),c=t(38874),a=t(24035),d=t(82993);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[a,u]=b({queryString:t,groupId:r}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),m=(()=>{const e=a??g;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(74848);function x(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==s&&(a(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=g(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,_.jsx)(x,{...n,...e}),(0,_.jsx)(f,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,_.jsx)(k,{...e,children:u(e.children)},String(n))}},32125:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/vcs_import_error-a82a8dcd758a247ffbceaf3de494419e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);