"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9064],{46189:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(74848),o=i(28453);const r={sidebar_position:4},s="GPIO Debugging Guide",a={id:"Advanced_development/linux_development/driver_development/driver_gpio_dev",title:"GPIO Debugging Guide",description:"The X3 chip has a total of 121 IO functional pins, each of which can be configured to work in GPIO mode. However, it is important to note the multiplexing relationship with other functional pins.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/driver_gpio_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_gpio_dev",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_gpio_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/02_linux_development/driver_development/driver_gpio_dev.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"I2C Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_i2c_dev"},next:{title:"Pinctrl Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_pinctrl_dev"}},d={},l=[{value:"Pin Query",id:"pin-query",level:2},{value:"Example",id:"example",level:3},{value:"GPIO Helper Tool",id:"gpio-helper-tool",level:3},{value:"Driver Code",id:"driver-code",level:2},{value:"Kernel Configuration",id:"kernel-configuration",level:3},{value:"Kernel DTS Configuration",id:"kernel-dts-configuration",level:3},{value:"Using GPIO",id:"using-gpio",level:2},{value:"Kernel Space",id:"kernel-space",level:3},{value:"DTS Configuration",id:"dts-configuration",level:4},{value:"Driver Code Interface",id:"driver-code-interface",level:4},{value:"X3J3 GPIO IRQ",id:"x3j3-gpio-irq",level:4},{value:"User Space",id:"user-space",level:3},{value:"Control interface",id:"control-interface",level:4},{value:"Invocation interface",id:"invocation-interface",level:4},{value:"Invocation example",id:"invocation-example",level:4},{value:"Debug interface",id:"debug-interface",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"gpio-debugging-guide",children:"GPIO Debugging Guide"}),"\n",(0,t.jsx)(n.p,{children:"The X3 chip has a total of 121 IO functional pins, each of which can be configured to work in GPIO mode. However, it is important to note the multiplexing relationship with other functional pins."}),"\n",(0,t.jsx)(n.h2,{id:"pin-query",children:"Pin Query"}),"\n",(0,t.jsxs)(n.p,{children:['The multiplexing and configuration of IO pins can be found in the "PL-2500-3-X3 PIN SW Reg-V1.2.xls" and "RM-2500-5-X3M Register Reference Manual-GPIO&PIN-V1.1.pdf" in the ',(0,t.jsx)(n.a,{href:"http://archive.d-robotics.cc/downloads/datasheets/",children:"datasheets"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'In the "PL-2500-3-X3 PIN SW Reg-V1.2.xls", you can intuitively query the default power-on state, multiplexing, drive capability, pull-up/down, and Schmitt trigger configuration of each pin.'}),"\n",(0,t.jsx)(n.p,{children:'In the "RM-2500-5-X3M Register Reference Manual-GPIO&PIN-V1.1.pdf", you can find the GPIO register information for the corresponding pins.'}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Taking the query of pin ",(0,t.jsx)(n.code,{children:"gpio120"})," as an example, we will explain the multiplexing, direction control, and data register address:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Functional multiplexing register description:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Open the "PL-2500-3-X3 PIN SW Reg-V1.2.xls" and select the "PIN SW Register" data sheet.'}),"\n",(0,t.jsxs)(n.li,{children:["The first row will indicate the base address for functional multiplexing as ",(0,t.jsx)(n.code,{children:"0xA6004000"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Find ",(0,t.jsx)(n.code,{children:"GPIO[120]"})," in the ",(0,t.jsx)(n.code,{children:"GPIO"})," column, and the corresponding information for this item is the default power-on state, multiplexing, drive capability, pull-up/down, and Schmitt trigger configuration of pin ",(0,t.jsx)(n.code,{children:"120"}),". The image below shows the details."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220529112804426",src:i(21804).A+"",width:"1448",height:"486"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After finding the above configuration items, adding the offset value to the base address will give the multiplexing control register of that pin. For example, the multiplexing register of ",(0,t.jsx)(n.code,{children:"GPIO120"})," is ",(0,t.jsx)(n.code,{children:"0xA6004000 + 0x1E0 = 0xA600410E0"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["When configuring the multiplexing register, it is recommended to first read out the value, then set the corresponding bit you want to modify, and write it back. For example, to configure ",(0,t.jsx)(n.code,{children:"GPIO120"})," as a ",(0,t.jsx)(n.code,{children:"GPIO"})," mode, only set the lower two bits of register ",(0,t.jsx)(n.code,{children:"0xA600410E0"})," to ",(0,t.jsx)(n.code,{children:"0x3"}),", while keeping other startup strength, pull-up/down, and Schmitt trigger configurations unchanged unless you explicitly know that you need to modify them as well."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"GPIO control and data registers:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['Open the "RM-2500-5-X3M Register Reference Manual-GPIO&PIN-V1.1.pdf". This document has two main sections, the ',(0,t.jsx)(n.code,{children:"GPIO"}),' section describes the control registers, output data registers, input data registers, and pin voltage domain configuration registers (the two registers with offsets 0x170 and 0x174 are pin voltage domain configuration registers). The "Pin Group" section is the same as the multiplexing information in the "PL-2500-3-X3 PIN SW Reg-V1.2.xls" table.']}),"\n",(0,t.jsxs)(n.li,{children:["The base address of the control and data registers is shown in the first row of each page table as ",(0,t.jsx)(n.code,{children:"BASE_ADDR:0xA600_3000"}),". Adding the queried offset address to this base address will give the corresponding complete register address."]}),"\n",(0,t.jsxs)(n.li,{children:["The X3M chip has a total of 120 available pins, divided into 7 banks with a maximum of 16 pins per bank. The control and data registers are organized into one control unit per bank. For example, the bank of ",(0,t.jsx)(n.code,{children:"GPIO120"})," is ",(0,t.jsx)(n.code,{children:"7"})," (obtained by dividing 120 by 16 and taking the integer part), and the pin number in the bank is ",(0,t.jsx)(n.code,{children:"8"})," (obtained by taking the remainder of 120 divided by 16). With this information, we can find the corresponding register address as shown in the image below. The register of ",(0,t.jsx)(n.code,{children:"GPIO120"})," is the ",(0,t.jsx)(n.code,{children:"bit8"})," in the registers ",(0,t.jsx)(n.code,{children:"GPIO7_xxx"})," (counting from bit0)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220529115057783",src:i(34494).A+"",width:"709",height:"283"})}),"\n",(0,t.jsx)(n.h3,{id:"gpio-helper-tool",children:"GPIO Helper Tool"}),"\n",(0,t.jsxs)(n.p,{children:["With the information provided in the above sections, you should now have the ability to independently query and set the configurations of various pins. D-Robotics also provides a small software tool to help users quickly query the various register addresses of the pins and generate commands to assist in setting the pin functions. You can download and use the ",(0,t.jsx)(n.a,{href:"https://pan.horizon.ai/index.php/s/JTitK4g8SLzSGa6/download?path=%2FGpio_tools&files=%E5%9C%B0%E5%B9%B3%E7%BA%BFGPIO%E5%B8%AE%E5%8A%A9%E5%B7%A5%E5%85%B7v1.0.exe",children:"D-Robotics GPIO Helper Tool"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The interface of the tool is shown in the image below. Users can input the ",(0,t.jsx)(n.code,{children:"GPIO number"})," or ",(0,t.jsx)(n.code,{children:"GPIO pin"})," to query the various register addresses of the pin and generate helper commands for setting the pin. Please refer to the ",(0,t.jsx)(n.a,{href:"#user-space",children:"GPIO User Space Usage Guide"})," for command details."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220529120102028",src:i(79400).A+"",width:"432",height:"452"})}),"\n",(0,t.jsx)(n.h2,{id:"driver-code",children:"Driver Code"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"drivers/gpio/gpio-hobot-x3.c # gpio driver source file\n"})}),"\n",(0,t.jsx)(n.h3,{id:"kernel-configuration",children:"Kernel Configuration"}),"\n",(0,t.jsx)(n.p,{children:"CONFIG_GPIO_HOBOT_X3"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220321232551078",src:i(52679).A+"",width:"793",height:"544"})}),"\n",(0,t.jsx)(n.h3,{id:"kernel-dts-configuration",children:"Kernel DTS Configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-xj3.dtsi */\ngpios: gpio@0xA6003000 {\n    compatible = "hobot,x3-gpio";\n    reg = <0 0xA6003000 0 0x100>;\n    gpio-controller;\n    #gpio-cells = <2>; \n    gpio-ranges = <&pinctrl 0 0 121>;\n    interrupts = <0 54 4>;\n    interrupt-parent = <&gic>;\n    interrupt-controller;\n    #interrupt-cells = <2>; \n};\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Remark",type:"info",children:(0,t.jsx)(n.p,{children:"The nodes in hobot-xj3.dtsi mainly declare some resources such as registers and interrupts, which are common features of the soc and are not related to specific circuit boards. Generally, there is no need to modify them."})}),"\n",(0,t.jsx)(n.h2,{id:"using-gpio",children:"Using GPIO"}),"\n",(0,t.jsx)(n.h3,{id:"kernel-space",children:"Kernel Space"}),"\n",(0,t.jsx)(n.h4,{id:"dts-configuration",children:"DTS Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The attributes of GPIO device tree nodes are generally named names-gpios or names-gpio, as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot/hobot-x3-sdb.dtsi */\n&usb_id {\n        status = "okay";  \n        id-gpio = <&gpios 65 GPIO_ACTIVE_HIGH>;\n        host-rst-gpio = <&gpios 115 GPIO_ACTIVE_HIGH>;\n        host-exrst-gpio = <&gpios 38 GPIO_ACTIVE_LOW>;\n};\n'})}),"\n",(0,t.jsx)(n.h4,{id:"driver-code-interface",children:"Driver Code Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"/* include/linux/gpio.h */\n/* Request GPIO */\nint gpio_request(unsigned gpio, const char *label);\n/* Initialize GPIO as output and set output level */\nint gpio_direction_output(unsigned gpio, int value);\n/* Initialize GPIO as input */\nint gpio_direction_input(unsigned gpio);\n/* Get the level of GPIO */\nint gpio_get_value(unsigned int gpio);\n/* Set the level of GPIO */\nvoid gpio_set_value(unsigned int gpio, int value);\n/* Free GPIO */\nvoid gpio_free(unsigned gpio);\n/* Request GPIO interrupt and return the value that can be passed to request_irq and free_irq */\nint gpio_to_irq(unsigned int gpio);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"x3j3-gpio-irq",children:"X3J3 GPIO IRQ"}),"\n",(0,t.jsx)(n.p,{children:"X3 GPIO has a total of 121 pins, and there are 4 hardware interrupts available. By setting the GPIO module registers, up to 4 pins out of the 121 pins can be mapped to the 4 IRQ interrupts. The mapping process is managed by the GPIO driver. The gpio_to_irq function is used to request GPIO IRQ numbers. If all 4 IRQs are already allocated, any subsequent requests will fail. The code for managing IRQ mapping is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'/* drivers/gpio/gpio-hobot-x3.c */\n/* Initialize the IRQ mapping table */\nvoid init_irqbank(struct x3_gpio *gpo) {\n    int i = 0;\n    for (i = 0; i < GPIO_IRQ_BANK_NUM; i++) {\n        gpo->irqbind[i] = GPIO_IRQ_NO_BIND;\n    }\n}\n\n/* Request IRQ and update the mapping table */\nint request_irqbank(struct x3_gpio *gpo, unsigned long gpio) {\n    int i = 0, index = GPIO_IRQ_NO_BIND;\n    index = find_irqbank(gpo, gpio);\n    if(index == GPIO_IRQ_NO_BIND) {\n        for (i = 0; i < GPIO_IRQ_BANK_NUM; i++) {\n            if(gpo->irqbind[i] == GPIO_IRQ_NO_BIND) {\n                gpo->irqbind[i] = gpio;\n                index = i;\n                break;\n            }\n        }\n    } else {\n        dev_err(gpo->dev, "gpio(%ld) has be binded\\n", gpio);\n        return GPIO_IRQ_NO_BIND;\n    }\n    return index;\n```/* free gpio and update mapping table */\nvoid release_irqbank(struct x3_gpio *gpo, unsigned long gpio) {\n    int index = GPIO_IRQ_NO_BIND;\n    index = find_irqbank(gpo, gpio);\n    if(index != GPIO_IRQ_NO_BIND) {\n        gpo->irqbind[index] = GPIO_IRQ_NO_BIND;\n    }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"Remark",type:"info",children:(0,t.jsx)(n.p,{children:"X3 GPIO interfaces in the Kernel Space are standard Linux interfaces. For more usage examples, please refer to Documentation/gpio/consumer.txt."})}),"\n",(0,t.jsx)(n.h3,{id:"user-space",children:"User Space"}),"\n",(0,t.jsx)(n.h4,{id:"control-interface",children:"Control interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/sys/class/gpio/export # Userspace can request control of a gpio in the userspace by writing the gpio number, for example, echo 42 > export\n/sys/class/gpio/unexport # Opposite of export\n/sys/class/gpio/gpiochip0 # gpio controller\n"})}),"\n",(0,t.jsx)(n.h4,{id:"invocation-interface",children:"Invocation interface"}),"\n",(0,t.jsx)(n.p,{children:"After exporting the control of the gpio using export will result in the path /sys/class/gpio/gpio42/, and the following attributes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'direction: indicates the direction of the GPIO port, reading as "in" or "out", writing "in" or "out" can set it as input or output'}),"\n",(0,t.jsx)(n.li,{children:"value: indicates the level of the GPIO, 0 for low level, 1 for high level. If the GPIO is configured as output, the value can be written."}),"\n",(0,t.jsx)(n.li,{children:'edge: indicates the interrupt trigger mode, with 4 types: "none", "rising", "falling", and "both". "none" means the GPIO is not an interrupt pin, "rising" means the pin is triggered by a rising edge, "falling" means the pin is triggered by a falling edge, and "both" means the pin is triggered by an edge.'}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"invocation-example",children:"Invocation example"}),"\n",(0,t.jsx)(n.p,{children:"The example below demonstrates exporting the JTG_TRSTN pin, setting it as output, outputting a high level, and finally unexporting it."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo 4 > /sys/class/gpio/export\necho out > /sys/class/gpio/gpio4/direction\necho 1 > /sys/class/gpio/gpio4/value\n# echo 0 > /sys/class/gpio/gpio4/value\necho 4 > /sys/class/gpio/unexport\n"})}),"\n",(0,t.jsx)(n.h4,{id:"debug-interface",children:"Debug interface"}),"\n",(0,t.jsx)(n.p,{children:"If the Linux Kernel configuration option CONFIG_DEBUG_FS is enabled and the debugfs file system is mounted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mount -t debugfs none /sys/kernel/debug\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then you can view the list of GPIO requests through the following node."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"root@x3dvbx3-hynix1G-2666:~# cat /sys/kernel/debug/gpio\ngpiochip0: GPIOs 0-120, parent: platform/a6003000.gpio:\ngpio-42  (           |sysfs     ) in hi\ngpio-64  (           |cd        ) in lo IRQ\ngpio-65  (           |id        ) in hi IRQ\ngpio-100 (           |?         ) out lo\ngpio-120 (           |?         ) out hi\nroot@x3dvbx3-hynix1G-2666:~#\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Remark",type:"info",children:(0,t.jsx)(n.p,{children:"The X3 GPIO interface in User Space is a standard Linux interface. For more usage methods, please refer to Documentation/gpio/sysfs.txt."})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21804:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/function_register_en-27e4a96164e2bb88ade3152b3178e198.png"},34494:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/gpio_control_and_data_register_en-a6d7d69f627a3fb14575f3c2586c0d37.png"},52679:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20220321232551078-3f8609809d4f72cefb45d83fc77ac322.png"},79400:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-20220529120102028-fa37f833283b29eff798e26d8661e330.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);