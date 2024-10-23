"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[7933],{90315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(74848),o=n(28453);const s={sidebar_position:11},r="Modifying BPU Reserved Memory Size",d={id:"Advanced_development/linux_development/driver_development/driver_bpu_mem_dev",title:"Modifying BPU Reserved Memory Size",description:"Temporarily setting BPU reserved memory",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/driver_bpu_mem_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_bpu_mem_dev",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_bpu_mem_dev",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/02_linux_development/driver_development/driver_bpu_mem_dev.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Thermal System",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_thermal_dev"},next:{title:"DDR Stress Testing Plan",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_ddr_dev"}},a={},c=[{value:"Temporarily setting BPU reserved memory",id:"temporarily-setting-bpu-reserved-memory",level:2},{value:"Setting ion_cam size in device tree",id:"setting-ion_cam-size-in-device-tree",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"modifying-bpu-reserved-memory-size",children:"Modifying BPU Reserved Memory Size"}),"\n",(0,i.jsx)(t.h2,{id:"temporarily-setting-bpu-reserved-memory",children:"Temporarily setting BPU reserved memory"}),"\n",(0,i.jsx)(t.p,{children:"When ion selects cma as the memory pool, the space for BPU mem is allocated through the cma region to balance the flexibility of cma and the efficiency of reserved space. The size of this space can be modified after system startup by modifying the /sys node:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"echo 100 > /sys/class/misc/ion/cma_carveout_size\n"})}),"\n",(0,i.jsx)(t.p,{children:"The above command modifies the size of the space in Mbyte. Different configurations should be made based on actual scenario requirements (e.g., if vio reports ion_alloc error in multi-way scenario, the size of the space can be reduced accordingly, with a minimum value of 0). Setting the value to 0 indicates that BPU only uses cma for dynamic allocation (if there is no sys node, it means this version does not support this configuration method)."}),"\n",(0,i.jsx)(t.p,{children:"Note: The modification can only be successful when BPU_MEM is not used by any user. Since this space is a continuous physical address space allocated from cma, the maximum size that can be allocated cannot reach the total size of cma. When BPU_MEM cannot allocate enough memory from this space, the system will attempt to allocate from cma space outside this space."}),"\n",(0,i.jsx)(t.p,{children:'Because this reserved space is allocated from cma as a continuous physical space, setting it may fail. After setting it, you can use the "cat" command to check the value of this node. If it shows the set value, it means the setting is successful. If it shows 0, it means the setting failed.'}),"\n",(0,i.jsx)(t.h2,{id:"setting-ion_cam-size-in-device-tree",children:"Setting ion_cam size in device tree"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in to X3Pi through a serial port or ssh terminal."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Confirm the dtb file currently used by the hardware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For RDK X3, it is ",(0,i.jsx)(t.code,{children:"hobot-x3-pi.dtb"}),".\nFor RDK X3 Module, it is ",(0,i.jsx)(t.code,{children:"hobot-x3-cm.dtb"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.code,{children:"cat /sys/firmware/devicetree/base/model"})," command to determine it."]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Use the following command to convert the dtb file into a readable dts file:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"dtc -I dtb -O dts -o hobot-x3-pi.dts /boot/hobot/hobot-x3-pi.dtb \n"})}),"\n",(0,i.jsxs)(t.p,{children:["where ",(0,i.jsx)(t.code,{children:"/boot/hobot/hobot-x3-pi.dtb"})," is the path of the DTB file to be edited. This command converts the DTB file to a DTS file (device tree source file). In a text editor, you can edit the DTS file and save the changes."]}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"Modify the ion size"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After opening the dts file, locate the ion_cma node, and modify the 0x2a000000 in the alloc-ranges and size attributes to the desired memory size value. Before modifying this value, make sure you have a clear understanding of its meaning, including the allowed range of settings."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'ion_cma {\n\tcompatible = "shared-dma-pool";\n\talloc-ranges = <0x00 0x4000000 0x00 0x5dc00000>;\n\talignment = <0x00 0x100000>;\n\tsize = <0x00 0x5dc00000>;\n\treusable;\n};\n'})}),"\n",(0,i.jsx)(t.p,{children:"For example, if you want to set the ion_cma size to 1.5GB, you can change it as follows."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'ion_cma {\n\tcompatible = "shared-dma-pool";\n\talloc-ranges = <0x00 0x4000000 0x00 0x5dc00000>;\n\talignment = <0x00 0x100000>;\n\tsize = <0x00 0x5dc00000>;\n\treusable;\n};\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"Save the changes and convert the DTS file back to DTB format using the following command. Make sure to backup the original file before performing this operation."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"dtc -I dts -O dtb -o /boot/hobot/hobot-x3-pi.dtb hobot-x3-pi.dts\n"})}),"\n",(0,i.jsx)(t.p,{children:"After saving, it is recommended to convert it back to a dts file and confirm if the modifications are correct to avoid unexpected errors due to typos or other reasons."}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Finally, restart your system to apply the changes."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Modifying the DTB file may affect the stability and security of your system. Before modifying the DTB file, make sure you understand the meaning of the content you want to change and backup the original DTB file to prevent accidental errors."}),"\n",(0,i.jsx)(t.li,{children:"The files under /boot/hobot/ are managed by the D-Robotics package. If the system software is upgraded, user modifications will be reset to the default configuration (672MB)."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);