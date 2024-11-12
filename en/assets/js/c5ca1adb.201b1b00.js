"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7991],{59571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var A=n(74848),s=n(28453);const i={sidebar_position:3},r="System Burning",o={id:"Advanced_development/hardware_development/rdk_x3_module/system",title:"System Burning",description:"The RDK X3 Module comes with a pre-burned test version of the system image. To ensure the use of the latest version of the system, it is recommended to refer to this document to complete the burning of the latest version of the system image.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/01_hardware_development/rdk_x3_module/system.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x3_module",slug:"/Advanced_development/hardware_development/rdk_x3_module/system",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3_module/system",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/01_hardware_development/rdk_x3_module/system.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Interface Description",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3_module/interface"},next:{title:"Camera Usage",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x3_module/camera"}},d={},a=[{value:"Installing USB Driver",id:"installing-usb-driver",level:2},{value:"Flashing the System",id:"flash_system",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(t.h1,{id:"system-burning",children:"System Burning"}),"\n",(0,A.jsx)(t.admonition,{title:"Note",type:"info",children:(0,A.jsxs)(t.p,{children:["The ",(0,A.jsx)(t.strong,{children:"RDK X3 Module"})," comes with a pre-burned test version of the system image. To ensure the use of the latest version of the system, it is recommended to refer to this document to complete the ",(0,A.jsx)(t.a,{href:"../../../01_Quick_start/install_os.md",children:"burning of the latest version of the system image"}),"."]})}),"\n",(0,A.jsx)(t.p,{children:"The RDK X3 Module supports booting the system from both eMMC and SD card:"}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"If the eMMC on the module has not been burned with a system image, insert the SD card with the prepared system into the carrier board to boot the system from the SD card."}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"If the eMMC on the module has been burned with a system image, you can switch the startup between eMMC and SD card by following these steps:"}),"\n",(0,A.jsxs)(t.ol,{children:["\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"By default, the system starts from eMMC."}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"Disable the eMMC startup and switch to boot from the SD card. After logging into the system, execute the following command to remove the boot flag on the second partition of the eMMC and restart the system to take effect:"}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{children:"sudo parted /dev/mmcblk0 set 2 boot off\nsudo reboot\n"})}),"\n",(0,A.jsxs)(t.ol,{start:"3",children:["\n",(0,A.jsxs)(t.li,{children:["In uboot, you will find that there is no boot partition on the eMMC and it looks for the boot partition on the SD card. The system boots from the SD card. After logging into the system, you can execute the ",(0,A.jsx)(t.code,{children:"mount"})," command to see that the root file system is mounted on the second partition of the SD card, and the config partition also uses the first partition of the SD card."]}),"\n"]}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{children:"/dev/mmcblk2p2 on / type ext4 (rw,relatime,data=ordered) \n/dev/mmcblk2p1 on /boot/config type vfat\n"})}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"Switch back to boot from eMMC after booting from the SD card"}),"\n",(0,A.jsx)(t.p,{children:"When the system is booted from the SD card and the eMMC has already been burned with the system, execute the following command to switch back to boot from the eMMC, and restart the system to take effect."}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{children:"sudo parted /dev/mmcblk0 set 2 boot on\nsudo reboot\n"})}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(t.p,{children:["When the RDK X3 module needs to burn the system to the SD card and does not boot from the eMMC mode, please refer to ",(0,A.jsx)(t.a,{href:"../..../../../01_Quick_start/install_os.md.md",children:"Install OS"})," to complete the burning of the SD card system."]}),"\n",(0,A.jsxs)(t.p,{children:["When burning the eMMC system image on the RDK X3 module, the D-Robotics ",(0,A.jsx)(t.code,{children:"hbupdate"})," burning tool is required. Currently, the tool supports two versions: Windows and Linux, which are respectively named ",(0,A.jsx)(t.code,{children:"hbupdate_win64"})," and ",(0,A.jsx)(t.code,{children:"hbupdate_linux"}),". The tool can be downloaded from the following link: ",(0,A.jsx)(t.a,{href:"http://archive.d-robotics.cc/downloads/hbupdate/",children:"hbupdate"}),"."]}),"\n",(0,A.jsx)(t.p,{children:"The following precautions should be taken when using the tool:"}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["Unzip the compressed file of the tool, and make sure that the decompression path does not contain any ",(0,A.jsx)(t.strong,{children:"spaces, Chinese characters, special characters"}),", etc."]}),"\n",(0,A.jsx)(t.li,{children:"The tool communicates with the RDK X3 module through the USB port, so you need to install the USB driver in advance. Please refer to the following description for the specific method."}),"\n"]}),"\n",(0,A.jsx)(t.h2,{id:"installing-usb-driver",children:"Installing USB Driver"}),"\n",(0,A.jsx)(t.p,{children:"For a PC using the Windows operating system, before using the flashing tool, it is necessary to confirm if the fastboot driver has been installed. Please follow the steps below for confirmation:"}),"\n",(0,A.jsxs)(t.ol,{children:["\n",(0,A.jsxs)(t.li,{children:["Use a jumper cap to ground the ",(0,A.jsx)(t.code,{children:"Boot"})," pin on the RDK X3 carrier board. Refer to the figure below for the pin position.",(0,A.jsx)(t.br,{}),"\n",(0,A.jsx)(t.img,{alt:"image-carrier-board-bootstrap",src:n(26074).A+"",width:"425",height:"277"})]}),"\n",(0,A.jsxs)(t.li,{children:["Connect the Micro USB interface on the carrier board to the PC using a USB cable. Refer to the figure below for the interface position.",(0,A.jsx)(t.br,{}),"\n",(0,A.jsx)(t.img,{alt:"image-carrier-board-microusb",src:n(23680).A+"",width:"567",height:"319"})]}),"\n",(0,A.jsxs)(t.li,{children:["Power on the device and observe the port status in the computer's Device Manager. If there is an unknown device named ",(0,A.jsx)(t.code,{children:"USB download gadget"}),", the driver needs to be updated. Otherwise, you can skip the following steps.",(0,A.jsx)(t.br,{}),"\n",(0,A.jsx)(t.img,{alt:"image-usb-driver1",src:n(71202).A+"",width:"214",height:"72"})]}),"\n",(0,A.jsxs)(t.li,{children:["Download and unzip the driver package ",(0,A.jsx)(t.code,{children:"android_hobot.zip"})," from the following link: ",(0,A.jsx)(t.a,{href:"http://archive.d-robotics.cc/downloads/hbupdate/android_hobot.zip",children:"android_hobot"}),"."]}),"\n",(0,A.jsxs)(t.li,{children:["Go to the extracted directory and run ",(0,A.jsx)(t.code,{children:"5-runasadmin_register-CA-cer.cmd"})," as an administrator to complete the driver program registration."]}),"\n",(0,A.jsxs)(t.li,{children:["Double-click the unknown device named ",(0,A.jsx)(t.code,{children:"USB download gadget"})," and select the directory where the driver package is extracted. Then click Next.",(0,A.jsx)(t.br,{}),"\n",(0,A.jsx)(t.img,{alt:"image-usb-driver2",src:n(27289).A+"",width:"492",height:"371"})]}),"\n",(0,A.jsxs)(t.li,{children:["After the driver installation is completed, the Device Manager will display the fastboot device ",(0,A.jsx)(t.code,{children:"Android Device"}),".",(0,A.jsx)(t.br,{}),"\n",(0,A.jsx)(t.img,{alt:"image-usb-driver3",src:n(21040).A+"",width:"384",height:"103"})]}),"\n"]}),"\n",(0,A.jsx)(t.h2,{id:"flash_system",children:"Flashing the System"}),"\n",(0,A.jsxs)(t.p,{children:["After confirming that the PC Device Manager displays the fastboot device ",(0,A.jsx)(t.code,{children:"Android Device"}),", run ",(0,A.jsx)(t.code,{children:"hbupdate.exe"})," to open the flashing tool, and follow the steps below to flash the system:"]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"image-flash-system1",src:n(47909).A+"",width:"742",height:"600"})}),"\n",(0,A.jsxs)(t.ol,{children:["\n",(0,A.jsx)(t.li,{children:"Select the development board model, which is a required option."}),"\n"]}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"RDK_X3_2GB: RDK X3 (Sunrise X3 platform), 2GB memory version, supports flashing the minimal system image only."}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"RDK_X3_4GB: RDK X3 (Sunrise X3 platform), 4GB memory version, supports flashing the minimal system image only."}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"RDK_X3_MD_2GB: RDK X3 Module, 2GB memory version."}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"RDK_X3_MD_4GB: RDK X3 Module, 4GB memory version."}),"\n"]}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"image-flash-system2",src:n(93902).A+"",width:"452",height:"158"})}),"\n",(0,A.jsxs)(t.ol,{start:"2",children:["\n",(0,A.jsxs)(t.li,{children:["Click the ",(0,A.jsx)(t.code,{children:"Browse"})," button to select the image file to be flashed, which is a required option."]}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"image-flash-system3",src:n(23127).A+"",width:"976",height:"78"})}),"\n",(0,A.jsxs)(t.ol,{start:"3",children:["\n",(0,A.jsxs)(t.li,{children:["Click the ",(0,A.jsx)(t.code,{children:"Start"})," button to start flashing. Follow the pop-up prompts to begin flashing:"]}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"image-flash-system4",src:n(90488).A+"",width:"500",height:"150"})}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsxs)(t.p,{children:["When flashing the image, ground the ",(0,A.jsx)(t.code,{children:"BOOT"})," pin using a jumper cap. Refer to ",(0,A.jsx)(t.a,{href:"../rdk_x3_module/interface#function_control_interface",children:"Function Control Interface"})," for the pin position."]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsxs)(t.p,{children:["Connect the Micro USB interface to the computer. The Device Manager of the computer will recognize the device as ",(0,A.jsx)(t.code,{children:"Android Device"}),", as described in the previous section for installing the USB download driver."]}),"\n"]}),"\n",(0,A.jsxs)(t.li,{children:["\n",(0,A.jsx)(t.p,{children:"After flashing, disconnect the power, disconnect the cable connected to the computer, remove the BOOT jumper cap, and power on again.- If the startup is normal, the 'ACT LED' on the hardware will enter a state of 'two quick flashes, one slow flash'."}),"\n"]}),"\n"]}),"\n",(0,A.jsxs)(t.ol,{start:"4",children:["\n",(0,A.jsx)(t.li,{children:"Check the upgrade result"}),"\n"]}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsx)(t.li,{children:"When the image burning is successful, the tool prompt is as follows:"}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"image-flash-system6",src:n(81034).A+"",width:"1070",height:"262"})}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsx)(t.li,{children:"When the image burning fails, the tool prompt is as follows, at this time it is necessary to confirm whether the PC Device Manager has 'Android Device' device."}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"image-flash-system7",src:n(36243).A+"",width:"1072",height:"260"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(c,{...e})}):c(e)}},26074:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-carrier-board-bootstrap-735d37564c9b4dc776e74b3db25c7519.png"},23680:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-carrier-board-microusb-dcfd50fb05a8f26ff9badfb09350322e.png"},47909:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-flash-system1-fa405cec7e508c02d38c6f70e3a5c050.png"},93902:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},23127:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},90488:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},81034:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-flash-system6-4d933b3d04e88de46637d1a78ed2c595.png"},36243:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-flash-system7-12e74260a7e0777b5efe5a60bc453d57.png"},71202:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},27289:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-usb-driver2-aa3fd1925609d58d0d2be89c43d09d8b.png"},21040:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/image-usb-driver3-62f5a0f21269cbca81d6e9cf78daeb4d.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var A=n(96540);const s={},i=A.createContext(s);function r(e){const t=A.useContext(i);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),A.createElement(i.Provider,{value:t},e.children)}}}]);