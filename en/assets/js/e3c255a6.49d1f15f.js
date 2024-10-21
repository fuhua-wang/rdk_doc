"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2855],{35666:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(74848),o=i(28453);const r={sidebar_position:3},s="2.3 config.txt Configuration File",d={id:"System_configuration/config_txt",title:"2.3 config.txt Configuration File",description:"RDK uses the configuration file config.txt to set system configurations during startup. config.txt is read during the uboot stage and supports modifications to device tree configurations, IO pin states, ION memory, CPU frequency, etc. This file is usually accessible from Linux at /boot/config.txt and must be edited as the root user. If the config.txt file does not exist but there are configuration settings, simply create it as a new text file.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02_System_configuration/03_config_txt.md",sourceDirName:"02_System_configuration",slug:"/System_configuration/config_txt",permalink:"/rdk_doc/en/System_configuration/config_txt",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_System_configuration/03_config_txt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2.2 srpi-config Configuration Tool User Guide",permalink:"/rdk_doc/en/System_configuration/srpi-config"},next:{title:"2.4 Thermal\u548cCPU\u9891\u7387\u7ba1\u7406",permalink:"/rdk_doc/en/System_configuration/frequency_management"}},l={},c=[{value:"Notes",id:"notes",level:2},{value:"Device Tree Configuration",id:"device-tree-configuration",level:2},{value:"dtdebug",id:"dtdebug",level:3},{value:"dtoverlay",id:"dtoverlay",level:3},{value:"[Only X5 supports]ion",id:"only-x5-supportsion",level:3},{value:"dtparam",id:"dtparam",level:3},{value:"CPU Frequency",id:"cpu-frequency",level:2},{value:"arm_boost",id:"arm_boost",level:3},{value:"governor",id:"governor",level:3},{value:"frequency",id:"frequency",level:3},{value:"IO Initialization",id:"io-initialization",level:2},{value:"gpio",id:"gpio",level:3},{value:"Example",id:"example",level:3},{value:"Temperature Control",id:"temperature-control",level:2},{value:"throttling_temp",id:"throttling_temp",level:3},{value:"shutdown_temp",id:"shutdown_temp",level:3},{value:"Option Filtering",id:"option-filtering",level:2},{value:"Voltage Domain",id:"voltage-domain",level:2},{value:"voltage_domain",id:"voltage_domain",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"23-configtxt-configuration-file",children:"2.3 config.txt Configuration File"}),"\n",(0,t.jsxs)(n.p,{children:["RDK uses the configuration file ",(0,t.jsx)(n.code,{children:"config.txt"})," to set system configurations during startup. ",(0,t.jsx)(n.code,{children:"config.txt"})," is read during the ",(0,t.jsx)(n.code,{children:"uboot"})," stage and supports modifications to device tree configurations, IO pin states, ION memory, CPU frequency, etc. This file is usually accessible from Linux at ",(0,t.jsx)(n.code,{children:"/boot/config.txt"})," and must be edited as the ",(0,t.jsx)(n.code,{children:"root"})," user. If the ",(0,t.jsx)(n.code,{children:"config.txt"})," file does not exist but there are configuration settings, simply create it as a new text file."]}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"config.txt"})," configuration file is only applicable to the ",(0,t.jsx)(n.code,{children:"RDK X3"})," and ",(0,t.jsx)(n.code,{children:"RDK X3 Module"})," development boards and not for the ",(0,t.jsx)(n.code,{children:"RDK Ultra"})," development board."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The system version must be at least ",(0,t.jsx)(n.code,{children:"2.1.0"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"miniboot"})," version cannot be earlier than the version dated ",(0,t.jsx)(n.code,{children:"20231126"}),". Refer to ",(0,t.jsx)(n.a,{href:"/rdk_doc/en/Appendix/rdk-command-manual/cmd_rdk-miniboot-update",children:"rdk-miniboot-update"})," for updating the miniboot on the board."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you add filtering items to this configuration file, please note whether the configuration items will be filtered out when using the ",(0,t.jsx)(n.code,{children:"srpi-config"})," tool."]}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"device-tree-configuration",children:"Device Tree Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"dtdebug",children:"dtdebug"}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"dtdebug"})," is non-zero, it will output configuration logs during the device tree configuration process in the ",(0,t.jsx)(n.code,{children:"uboot"})," stage."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dtdebug=1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dtoverlay",children:"dtoverlay"}),"\n",(0,t.jsx)(n.p,{children:"Supports device tree overlays, providing a more flexible way to adjust the device tree."}),"\n",(0,t.jsxs)(n.p,{children:["[X5 not supported] For example, to adjust the size of ",(0,t.jsx)(n.code,{children:"ION"})," memory using ",(0,t.jsx)(n.code,{children:"ion_resize"}),", the following configuration will modify the ",(0,t.jsx)(n.code,{children:"ION"})," memory size to ",(0,t.jsx)(n.code,{children:"1GB"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"dtoverlay=ion_resize,size=0x40000000\n"})}),"\n",(0,t.jsx)(n.p,{children:"[Only X5 supports] Use dtoverlay_spi5_spidev to add /dev/spidev5.0\uff08Note: The CAN device has also received SPI5, so Spidev and CAN can only choose one from the other\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"dtoverlay=dtoverlay_spi5_spidev\n"})}),"\n",(0,t.jsx)(n.h3,{id:"only-x5-supportsion",children:"[Only X5 supports]ion"}),"\n",(0,t.jsx)(n.p,{children:"use ion_reserved_size ion_carveout_size ion_cma_size  to modify the ION partition size"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"boot name"}),(0,t.jsx)(n.th,{children:"dts name"}),(0,t.jsx)(n.th,{children:"dts compatible"}),(0,t.jsx)(n.th,{children:"size"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ion_reserved_size"}),(0,t.jsx)(n.td,{children:"ion_reserved"}),(0,t.jsx)(n.td,{children:"ion-pool"}),(0,t.jsx)(n.td,{children:"320M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ion_carveout_size"}),(0,t.jsx)(n.td,{children:"ion_carveout"}),(0,t.jsx)(n.td,{children:"ion-carveout"}),(0,t.jsx)(n.td,{children:"320M"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ion_cma_size"}),(0,t.jsx)(n.td,{children:"ion_cma"}),(0,t.jsx)(n.td,{children:"ion-cma"}),(0,t.jsx)(n.td,{children:"128M"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Shell",children:"ion=ion_reserved_size=0x14000000\nion=ion_carveout_size=0x14000000\nion=ion_cma_size=0x08000000\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dtparam",children:"dtparam"}),"\n",(0,t.jsx)(n.p,{children:"Supports enabling and disabling buses such as uart, i2c, spi, i2s, etc."}),"\n",(0,t.jsx)(n.p,{children:"Currently supported options: uart3, spi0, spi1, spi2, i2c0, i2c1, i2c2, i2c3, i2c4, i2c5, i2s0, i2s1"}),"\n",(0,t.jsx)(n.p,{children:"[X5] uart0, uart1, uart5, spi1, spi5, i2c0, i2c2, i2c3, i2c4, i2c5, i2c6, i2c7, dw_i2s0, dw_i2s1"}),"\n",(0,t.jsx)(n.p,{children:"For example, to disable uart3:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dtparam=uart3=off\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example, to enable i2c5:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dtparam=i2c5=on\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cpu-frequency",children:"CPU Frequency"}),"\n",(0,t.jsx)(n.h3,{id:"arm_boost",children:"arm_boost"}),"\n",(0,t.jsxs)(n.p,{children:["When set to 1, enables overclocking. For RDK v1.x, the maximum frequency is increased to 1.5GHz. For RDK V2.0 and RDK Module, the maximum frequency is increased to 1.8GHz. Use ",(0,t.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/scaling_boost_frequencies"})," to retrieve the higher CPU frequencies enabled by boost."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, overclocking is disabled. Set ",(0,t.jsx)(n.code,{children:"arm_boost"})," to ",(0,t.jsx)(n.code,{children:"1"})," to enable, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"arm_boost=1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"governor",children:"governor"}),"\n",(0,t.jsxs)(n.p,{children:["The scheduling method for CPU frequency. Various options like ",(0,t.jsx)(n.code,{children:"conservative"}),", ",(0,t.jsx)(n.code,{children:"ondemand"}),", ",(0,t.jsx)(n.code,{children:"userspace"}),", ",(0,t.jsx)(n.code,{children:"powersave"}),", ",(0,t.jsx)(n.code,{children:"performance"}),", and ",(0,t.jsx)(n.code,{children:"schedutil"})," are available. Use ",(0,t.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/scaling_available_governors"})," to get the available modes."]}),"\n",(0,t.jsx)(n.p,{children:"For example, setting the CPU to run in performance mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"governor=performance\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"frequency_management#cpu%E9%A2%91%E7%8E%87%E7%AE%A1%E7%90%86",children:"CPU Frequency Management"})," for more information on CPU scheduling methods."]}),"\n",(0,t.jsx)(n.h3,{id:"frequency",children:"frequency"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.code,{children:"governor"})," is set to ",(0,t.jsx)(n.code,{children:"userspace"}),", this option allows the CPU to run at a fixed frequency. Currently, common frequencies like ",(0,t.jsx)(n.code,{children:"240000, 500000, 800000, 1000000, 1200000, 1500000, 1800000"})," can be set. Use ",(0,t.jsx)(n.code,{children:"cat /sys/devices/system/cpu/cpufreq/scaling_available_frequencies"})," to get the list of available frequencies."]}),"\n",(0,t.jsx)(n.p,{children:"For example, setting the CPU to run at 1GHz:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"governor=userspace\nfrequency=1000000\n"})}),"\n",(0,t.jsx)(n.h2,{id:"io-initialization",children:"IO Initialization"}),"\n",(0,t.jsx)(n.h3,{id:"gpio",children:"gpio"}),"\n",(0,t.jsx)(n.p,{children:"Supports setting the IO multiplexing, output, input mode, output high/low level, and pull-up/pull-down mode."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gpio:\nip - Input                             Set to input mode\nop - Output                            Set to output mode\nf0-f3 - Func0-Func3                    Set function multiplexing, f3 functions are all set to IO mode, For other functions, please refer to the register manual.\ndh - Driving high (for outputs)        Drive high level\ndl - Driving low (for outputs)         Drive low level\npu - Pull up                           Pull up\npd - Pull down                         Pull down\npn/np - No pull                        No pull\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"GPIO5"})," and ",(0,t.jsx)(n.code,{children:"GPIO6"})," on ",(0,t.jsx)(n.code,{children:"40Pin"})," as IO mode:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gpio=5=f3\ngpio=6=f3\n# For consecutive pins, you can also configure them in the following way\ngpio=5-6=f3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"GPIO5"})," on ",(0,t.jsx)(n.code,{children:"40Pin"})," as input mode:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gpio=5=f3\ngpio=5=ip\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"GPIO6"})," on ",(0,t.jsx)(n.code,{children:"40Pin"})," as output mode and drive low level:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gpio=6=f3\ngpio=6=op,dl\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Configure ",(0,t.jsx)(n.code,{children:"GPIO6"})," on ",(0,t.jsx)(n.code,{children:"40Pin"})," as output mode, drive high level and set pull up:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"gpio=6=f3\ngpio=6=op,dl,pu\n"})}),"\n",(0,t.jsx)(n.h2,{id:"temperature-control",children:"Temperature Control"}),"\n",(0,t.jsx)(n.h3,{id:"throttling_temp",children:"throttling_temp"}),"\n",(0,t.jsx)(n.p,{children:"The temperature point at which the system CPU and BPU will throttle. When the temperature exceeds this point, the CPU and BPU will reduce their operating frequency to reduce power consumption. The CPU can go as low as 240MHz, while the BPU can go as low as 400MHz."}),"\n",(0,t.jsx)(n.h3,{id:"shutdown_temp",children:"shutdown_temp"}),"\n",(0,t.jsx)(n.p,{children:"Shutdown temperature point of the system. If the temperature exceeds this point, the system will automatically shut down to protect the chip and hardware. It is recommended to perform heat dissipation treatment on the device to avoid system shutdown, as the device will not restart automatically after shutdown."}),"\n",(0,t.jsx)(n.h2,{id:"option-filtering",children:"Option Filtering"}),"\n",(0,t.jsx)(n.p,{children:"Supports the use of [] to set filtering items. The filtering items need to be added at the end of the configuration file, because the part before the filtering item is considered 'all'. Once a filtering setting is added, the subsequent configurations belong to that filtering attribute until the end of the configuration file or another filtering item is set."}),"\n",(0,t.jsx)(n.p,{children:"The supported filtering items are differentiated by hardware model, and the following filtering items are supported:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Filtering Item"}),(0,t.jsx)(n.th,{children:"Compatible Models"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[all]"}),(0,t.jsx)(n.td,{children:"All hardware, default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[rdkv1]"}),(0,t.jsx)(n.td,{children:"RDK x3 v1.0, RDK x3 v1.1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[rdkv1.2]"}),(0,t.jsx)(n.td,{children:"RDK x3 v1.2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[rdkv2]"}),(0,t.jsx)(n.td,{children:"RDK x3 v2.1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[rdkmd]"}),(0,t.jsx)(n.td,{children:"RDK x3 Module"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"[x5-rdk]"}),(0,t.jsx)(n.td,{children:"RDK X5 V0.1"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"voltage-domain",children:"Voltage Domain"}),"\n",(0,t.jsx)(n.h3,{id:"voltage_domain",children:"voltage_domain"}),"\n",(0,t.jsx)(n.p,{children:"Configures the voltage domain of the 40-pin, supporting configuration as 3.3V or 1.8V. If not configured, the default is 3.3V."}),"\n",(0,t.jsx)(n.p,{children:"This configuration item needs to be used in conjunction with the jumper cap for voltage domain switching on the hardware."}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsx)(n.p,{children:"Only RDK Module supports this configuration."})}),"\n",(0,t.jsxs)(n.p,{children:["For example, to configure the 40-pin of the ",(0,t.jsx)(n.code,{children:"RDK Module"})," to work in ",(0,t.jsx)(n.code,{children:"3v3"})," voltage mode, the following example uses ",(0,t.jsx)(n.code,{children:"[rdkmd]"})," as the filtering item:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"# Voltage domain configuration for 40 Pin, 3.3V or 1.8V, defualt 3.3V\n# Only RDK Module supported\n[rdkmd]\nvoltage_domain=3.3V\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);