"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2469],{58646:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>t,metadata:()=>_,toc:()=>s});var d=i(74848),l=i(28453);const t={sidebar_position:5},r="Pinctrl\u8c03\u8bd5\u6307\u5357",_={id:"Advanced_development/linux_development/driver_development/driver_pinctrl_dev",title:"Pinctrl\u8c03\u8bd5\u6307\u5357",description:"X3 Pinctrl\u4f7f\u7528Linux Kernel\u4e3b\u7ebf\u4ee3\u7801\u7684pinctl-single\u4f5c\u4e3a\u9a71\u52a8\uff0c\u4e3b\u8981\u901a\u8fc7\u914d\u7f6eDTS\u6765\u5b9e\u73b0pinctrl\u529f\u80fd\u3002",source:"@site/docs/07_Advanced_development/02_linux_development/driver_development/driver_pinctrl_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_pinctrl_dev",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_pinctrl_dev",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/02_linux_development/driver_development/driver_pinctrl_dev.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"GPIO\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_gpio_dev"},next:{title:"IO-DOMAIN\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_io_domain_dev"}},c={},s=[{value:"\u7ba1\u811a\u67e5\u8be2",id:"\u7ba1\u811a\u67e5\u8be2",level:2},{value:"\u9a71\u52a8\u4ee3\u7801",id:"\u9a71\u52a8\u4ee3\u7801",level:3},{value:"\u5185\u6838\u914d\u7f6e",id:"\u5185\u6838\u914d\u7f6e",level:3},{value:"Pinctrl\u7684DTS\u914d\u7f6e",id:"pinctrl\u7684dts\u914d\u7f6e",level:3},{value:"Pinctrl\u4f7f\u7528",id:"pinctrl\u4f7f\u7528",level:2},{value:"\u9a71\u52a8DTS\u914d\u7f6e",id:"\u9a71\u52a8dts\u914d\u7f6e",level:3},{value:"Pin-mux\u914d\u7f6e",id:"pin-mux\u914d\u7f6e",level:3},{value:"\u9a71\u52a8\u5f3a\u5ea6\u914d\u7f6e",id:"\u9a71\u52a8\u5f3a\u5ea6\u914d\u7f6e",level:3},{value:"\u4e0a\u4e0b\u62c9\u914d\u7f6e",id:"\u4e0a\u4e0b\u62c9\u914d\u7f6e",level:3},{value:"\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e",id:"\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e",level:3},{value:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801",id:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801",level:3},{value:"\u7528\u6237\u7a7a\u95f4\u8c03\u8bd5",id:"\u7528\u6237\u7a7a\u95f4\u8c03\u8bd5",level:3}];function p(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,l.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h1,{id:"pinctrl\u8c03\u8bd5\u6307\u5357",children:"Pinctrl\u8c03\u8bd5\u6307\u5357"}),"\n",(0,d.jsx)(e.p,{children:"X3 Pinctrl\u4f7f\u7528Linux Kernel\u4e3b\u7ebf\u4ee3\u7801\u7684pinctl-single\u4f5c\u4e3a\u9a71\u52a8\uff0c\u4e3b\u8981\u901a\u8fc7\u914d\u7f6eDTS\u6765\u5b9e\u73b0pinctrl\u529f\u80fd\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u7ba1\u811a\u67e5\u8be2",children:"\u7ba1\u811a\u67e5\u8be2"}),"\n",(0,d.jsxs)(e.p,{children:["IO\u7ba1\u811a\u7684\u590d\u7528\u548c\u914d\u7f6e\u53ef\u4ee5\u5728 ",(0,d.jsx)(e.a,{href:"https://archive.d-robotics.cc/downloads/datasheets/",children:"datasheets"})," \u67e5\u9605\u300aPL-2500-3-X3 PIN SW Reg-V1.2.xls\u300b\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u5728 \u300aPL-2500-3-X3 PIN SW Reg-V1.2.xls\u300b\u53ef\u4ee5\u6bd4\u8f83\u76f4\u89c2\u7684\u67e5\u8be2\u5230\u7ba1\u811a\u7684\u4e0a\u7535\u9ed8\u8ba4\u72b6\u6001\u3001\u590d\u7528\u3001\u9a71\u52a8\u80fd\u529b\u3001\u4e0a\u4e0b\u62c9\u3001\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u9a71\u52a8\u4ee3\u7801",children:"\u9a71\u52a8\u4ee3\u7801"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"drivers/pinctrl/pinctrl-single.c # pinctrl \u9a71\u52a8\u4ee3\u7801\u6e90\u6587\u4ef6\ninclude/linux/platform_data/pinctrl-single.h # pinctrl \u9a71\u52a8\u4ee3\u7801\u5934\u6587\u4ef6\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u5185\u6838\u914d\u7f6e",children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,d.jsx)(e.p,{children:"CONFIG_PINCTRL_SINGLE"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.img,{alt:"image-20220321233840795",src:i(53374).A+"",width:"793",height:"544"})}),"\n",(0,d.jsx)(e.h3,{id:"pinctrl\u7684dts\u914d\u7f6e",children:"Pinctrl\u7684DTS\u914d\u7f6e"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-pinctrl-xj3.dtsi */\npinctrl: pinctrl@0xA6004000 {\n    compatible = "pinctrl-single";\n    reg = <0x0 0xA6004000 0x0 0x200>;\n    #pinctrl-cells = <1>;\n    #gpio-range-cells = <0x3>;\n    pinctrl-single,register-width = <32>;\n    pinctrl-single,function-mask = <0x3FF>;\n    /* pin base, nr pins & gpio function */\n    pinctrl-single,gpio-range = <&range 0 120 3>;\n\n    i2c0_func: i2c0_func {\n        pinctrl-single,pins = < \n            0x020   (MUX_F0 | DRIVE2_09MA | SCHMITT2_DIS | PULL2_UP)\n            0x024   (MUX_F0 | DRIVE2_09MA | SCHMITT2_DIS | PULL2_UP)\n            >;\n    };\n    ...\n}\n'})}),"\n",(0,d.jsx)(e.h2,{id:"pinctrl\u4f7f\u7528",children:"Pinctrl\u4f7f\u7528"}),"\n",(0,d.jsx)(e.h3,{id:"\u9a71\u52a8dts\u914d\u7f6e",children:"\u9a71\u52a8DTS\u914d\u7f6e"}),"\n",(0,d.jsx)(e.p,{children:'\u9a71\u52a8\u5728\u4f7f\u7528Pinctrl\u7684\u63a5\u53e3\u524d\uff0c\u9700\u8981\u5728DTS\u91cc\u914d\u7f6e\u76f8\u5e94\u7684pinctrl\u914d\u7f6e\u7ec4\uff0c\u5f53\u9a71\u52a8probe\u7684\u65f6\u5019\uff0c\u4f1a\u5c06"default"\u5bf9\u5e94\u7684\u8fd9\u7ec4Pinctrl\u914d\u7f6e\u5230\u5bc4\u5b58\u5668\u91cc\u9762\uff0c\u800c\u5176\u5b83\u7ec4\u7684\u914d\u7f6e\u9700\u8981\u5728\u4ee3\u7801\u91cc\u9762\u89e3\u6790\u51fa\u6765\uff0c\u518d\u9009\u62e9\u5207\u6362\u4f7f\u7528\uff0c\u4ee5iar\u4e3a\u4f8b\uff1a'}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-xj3.dtsi */\niar: iar@0xA4001000 {\n    compatible = "hobot,hobot-iar";\n    reg = <0 0xA4301000 0 0x400>, <0 0xA4355000 0 0x1000>;\n    clocks = <&iar_pix_clk>, <&iar_ipi_clk>, <&sif_mclk>;\n    clock-names = "iar_pix_clk","iar_ipi_clk", "sif_mclk";\n    interrupt-parent = <&gic>;\n    interrupts = <0 69 4>;\n    resets = <&rst 0x40 12>;\n    pinctrl-names = "bt_func", "rgb_func", "rgb_gpio_func", "bt1120_voltage_func";\n    pinctrl-0 = <&btout_func>;\n    pinctrl-1 = <&rgb_func>;\n    pinctrl-2 = <&rgb_gpio_func>;\n    pinctrl-3 = <&bt1120_1_8v_func>;\n    disp_panel_reset_pin = <28>;\n    reset-names = "iar";\n    status = "disabled";\n};\n'})}),"\n",(0,d.jsx)(e.p,{children:"iar pinctrl\u4e2d\u5f15\u7528\u7684\u914d\u7f6e\u7ec4\u5728arch/arm64/boot/dts/hobot/hobot-pinctrl-xj3.dtsi\u4e2d\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"btout_func: btout_func {\n    pinctrl-single,pins = <\n        0x138   (MUX_F0 | DRIVE1_12MA | SCHMITT2_ENA | PULL2_DOWN) /*BT1120_OUT_CLK*/\n        0x13c   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN) /*BT1120_OUT_DAT0*/\n        0x140   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x144   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x148   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x14c   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x150   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x154   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x158   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN) /*BT1120_OUT_DAT7*/\n        0x15c   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN) /*BT1120_OUT_DAT8*/\n        0x160   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x164   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x168   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x16c   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x170   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x174   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN)\n        0x178   (MUX_F0 | DRIVE1_12MA | SCHMITT2_DIS | PULL2_DOWN) /*BT1120_OUT_DAT15*/\n        >;\n};\n"})}),"\n",(0,d.jsx)(e.p,{children:"pinctrl\u914d\u7f6e\u7ec4\u5c06\u591a\u4e2apin\u914d\u7f6e\u7ec4\u5408\u5230\u4e00\u8d77\uff0c\u6bcf\u4e2apin\u7684\u914d\u7f6e\u5305\u542b2\u5217\uff0c\u7b2c\u4e00\u5217\u8868\u793apin\u811a\u914d\u7f6e\u5bc4\u5b58\u5668\u7684\u504f\u79fb\u5730\u5740\uff0c\u503c\u4e3apin\u811a\u53f7\u4e58\u4ee54\uff0c\u4f8b\u5982BT1120_OUT_CLK\u7684Pin\u811a\u53f7\u4e3a78\uff0c\u56e0\u6b64\u504f\u79fb\u5730\u5740\u4e3a 78 * 4 = 312 \uff0c\u8f6c\u6362\u4e3a16\u8fdb\u5236\u5c31\u662f0x138\uff1b\u7b2c\u4e8c\u5217\u8868\u793aPin\u7684\u529f\u80fd\u590d\u7528\u914d\u7f6e Pin-mux\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"pin-mux\u914d\u7f6e",children:"Pin-mux\u914d\u7f6e"}),"\n",(0,d.jsx)(e.p,{children:"X3 \u6bcf\u4e2a\u82af\u7247\u7684Pin\u811a\u652f\u6301\u6700\u591a4\u79cd\u529f\u80fd\uff0c\u5728\u914d\u7f6e\u67d0\u4e2a\u529f\u80fd\u65f6\uff0c\u5ba2\u6237\u53ef\u4ee5\u901a\u8fc7\u5bc4\u5b58\u5668\u624b\u518c\u67e5\u770b\u5bf9\u5e94\u529f\u80fd\u7684pinmux\u503c\uff0c\u4f8b\u5982Pin\u811a78\u7684mux\u914d\u7f6e\u4e3a0\uff0c\u4e5f\u5c31\u662fMUX_F0\u65f6Pin\u7684\u529f\u80fd\u4e3aBT1120_OUT_CLK\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"/* include/dt-bindings/pinctrl/hobot-xj3.h */\n/* MUX functions for pins */\n#define MUX_F0          0\n#define MUX_F1          1\n#define MUX_F2          2\n#define MUX_F3          3\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u9a71\u52a8\u5f3a\u5ea6\u914d\u7f6e",children:"\u9a71\u52a8\u5f3a\u5ea6\u914d\u7f6e"}),"\n",(0,d.jsx)(e.p,{children:"X3 \u6bcf\u4e2aPin\u811a\u652f\u6301\u914d\u7f6e\u6700\u5927\u7684\u8f93\u51fa\u7535\u6d41\uff0c\u9a71\u52a8\u7535\u6d41\u7684\u914d\u7f6e\u5728Pin\u811a\u914d\u7f6e\u5bc4\u5b58\u5668\u4e2d\u5360\u8f93\u51fa\u7535\u6d41\u7684\u914d\u7f6e\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff0c\u540c\u6837\u7684\u5bc4\u5b58\u5668\u503c\u5728\u4e0d\u540c\u7c7b\u7684Pin\u4e0a\u8868\u793a\u7684\u9a71\u52a8\u7535\u6d41\u4e0d\u4e00\u81f4\uff0c\u4f8b\u5982DRIVE1\u4e0a0\u8868\u793a3mA\uff0c\u800cDRIVE2\u4e0a\u8868\u793a6mA\uff0c\u5177\u4f53\u67d0\u4e2aPin\u811a\u5c5e\u4e8e\u54ea\u4e00\u7c7b\uff0c\u5ba2\u6237\u53ef\u4ee5\u901a\u8fc7arch/arm64/boot/dts/hobot/hobot-pinctrl-xj3.dtsi\u6765\u67e5\u770b\uff0chobot-pinctrl-xj3.dtsi\u4e2d\u5df2\u7ecf\u5217\u51fa\u4e86X3\u82af\u7247\u7684\u6240\u6709pin\u811a\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"/* include/dt-bindings/pinctrl/hobot-xj3.h */\n/* drive strength definition */\n#define DRIVE_MASK      (4 << 2)\n#define DRIVE1_03MA     (0 << 2)\n#define DRIVE2_06MA     (0 << 2)\n#define DRIVE1_06MA     (1 << 2)\n#define DRIVE2_09MA     (1 << 2)\n#define DRIVE1_09MA     (2 << 2)\n#define DRIVE2_12MA     (2 << 2)\n#define DRIVE1_12MA     (3 << 2)\n#define DRIVE2_15MA     (3 << 2)\n#define DRIVE1_17MA     (4 << 2)\n#define DRIVE2_18MA     (4 << 2)\n#define DRIVE1_20MA     (5 << 2)\n#define DRIVE2_21MA     (5 << 2)\n#define DRIVE1_22MA     (6 << 2)\n#define DRIVE2_24MA     (6 << 2)\n#define DRIVE1_25MA     (7 << 2)\n#define DRIVE2_27MA     (7 << 2)\n#define DRIVE1_33MA     (8 << 2)\n#define DRIVE2_30MA     (8 << 2)\n#define DRIVE1_35MA     (9 << 2)\n#define DRIVE2_33MA     (9 << 2)\n#define DRIVE1_37MA     (10 << 2)\n#define DRIVE2_36MA     (10 << 2)\n#define DRIVE1_39MA     (11 << 2)\n#define DRIVE2_39MA     (11 << 2)\n#define DRIVE1_41MA     (12 << 2)\n#define DRIVE2_41MA     (12 << 2)\n#define DRIVE1_42_5MA   (13 << 2)\n#define DRIVE2_42_5MA   (13 << 2)\n#define DRIVE1_44MA     (14 << 2)\n#define DRIVE2_44MA     (14 << 2)\n#define DRIVE1_45MA     (15 << 2)\n#define DRIVE2_45MA     (15 << 2)\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u4e0a\u4e0b\u62c9\u914d\u7f6e",children:"\u4e0a\u4e0b\u62c9\u914d\u7f6e"}),"\n",(0,d.jsx)(e.p,{children:"X3J3\u6bcf\u4e2aPin\u811a\u4e5f\u652f\u6301\u4e0a\u4e0b\u62c9\u914d\u7f6e\uff0c\u548c\u9a71\u52a8\u5f3a\u5ea6\u914d\u7f6e\u7c7b\u4f3c\uff0c\u4e0a\u4e0b\u62c9\u7684\u914d\u7f6e\u4e5f\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e24\u7c7b\u9700\u8981\u64cd\u4f5c\u7684\u5bc4\u5b58\u5668bit\u4f4d\u7f6e\u4e0d\u540c\uff0c\u5177\u4f53Pin\u811a\u7684\u4e0a\u4e0b\u62c9\u7c7b\u522b\uff0c\nhobot-pinctrl-xj3.dtsi\u4e2d\u5df2\u7ecf\u5217\u51fa\uff0c\u5728\u5ba2\u6237\u53ef\u4ee5\u901a\u8fc7hobot-pinctrl-xj3.dtsi\u67e5\u627e\u5373\u53ef\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"/* include/dt-bindings/pinctrl/hobot-xj3.h */\n/*\n * PULL1 -> bit7(0==pulldown, 1==pullup)\n * bit6(0==pull disable, 1==pull enable)\n *\n * PULL2 -> bit8(0==pullup enable, 1==pullup enable)\n * bit7(0==pulldown diable, 1==pulldown enable)\n*/\n\n/* pin states bits */\n#define PULL1_MASK      (3 << 6)\n#define PULL2_MASK      (3 << 7)\n#define PULL1_EN     (1 << 6)\n#define PULL1_DIS       (0)\n#define PULL2_DIS       (0)\n#define PULL1_UP        (PULL1_EN | (1 << 7))\n#define PULL2_UP        (1 << 8)\n#define PULL1_DOWN      (PULL1_EN | (0 << 7))\n#define PULL2_DOWN      (1 << 7)\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e",children:"\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e"}),"\n",(0,d.jsx)(e.p,{children:"X3J3\u6bcf\u4e2aPin\u811a\u4e5f\u652f\u6301\u4e0a\u4e0b\u62c9\u914d\u7f6e\uff0c\u548c\u9a71\u52a8\u5f3a\u5ea6\u914d\u7f6e\u7c7b\u4f3c\uff0c\u65bd\u5bc6\u7279\u89e6\u53d1\u7684\u914d\u7f6e\u4e5f\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e24\u7c7b\u9700\u8981\u64cd\u4f5c\u7684\u5bc4\u5b58\u5668bit\u4f4d\u7f6e\u4e0d\u540c\uff0c\u5177\u4f53Pin\u811a\u7684\u65bd\u5bc6\u7279\u89e6\u53d1\u914d\u7f6e\u7c7b\u522b\uff0c\nhobot-pinctrl-xj3.dtsi\u4e2d\u5df2\u7ecf\u5217\u51fa\uff0c\u5728\u5ba2\u6237\u53ef\u4ee5\u901a\u8fc7hobot-pinctrl-xj3.dtsi\u67e5\u627e\u5373\u53ef\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:"/* include/dt-bindings/pinctrl/hobot-xj3.h */\n\n/*\n* SCHMITT1 -> bit8(0==diable, 1==enable)\n*\n* SCHMITT2 -> bit9(0==diable, 1==enable)\n*/\n/* pin schmitt */\n#define SCHMITT1_ENA    (1 << 8)\n#define SCHMITT1_DIS    (0 << 8)\n \n#define SCHMITT2_ENA    (1 << 9)\n#define SCHMITT2_DIS    (0 << 9)\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801",children:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,d.jsx)(e.p,{children:"\u9a71\u52a8\u5148\u901a\u8fc7Pinctrl-names\u67e5\u627e\u5bf9\u5e94\u7684pinctrl state\uff0c\u7136\u540e\u518d\u5207\u6362\u5230\u5bf9\u5e94\u7684state\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-c",children:'static int hobot_xxx_probe(struct platform_device *pdev)\n{\n    ...\n    g_xxx_dev->pinctrl = devm_pinctrl_get(&pdev->dev);\n    if (IS_ERR(g_xxx_dev->pinctrl)) {\n        dev_warn(&pdev->dev, "pinctrl get none\\n");\n        g_xxx_dev->pins_xxxx = NULL;\n    }\n    ...\n        /* \u6309\u7167 pinctrl-names lookup state */\n        g_xxx_dev->pins_xxxx = pinctrl_lookup_state(g_xxx_dev->pinctrl, "xxx_func");\n    if (IS_ERR(g_xxx_dev->pins_xxxx)) {\n        dev_info(&pdev->dev, "xxx_func get error %ld\\n",\n                PTR_ERR(g_xxx_dev->pins_xxxx));\n        g_xxx_dev->pins_xxxx = NULL;\n    }\n    ...\n}\nint xxxx_pinmux_select(void)\n{\n    if (!g_xxx_dev->pins_xxxx)\n        return -ENODEV;\n    /* \u5207\u6362\u5230\u5bf9\u5e94\u7684state */\n        return pinctrl_select_state(g_xxx_dev->pinctrl, g_xxx_dev->pins_xxxx);\n}\n'})}),"\n",(0,d.jsx)(e.h3,{id:"\u7528\u6237\u7a7a\u95f4\u8c03\u8bd5",children:"\u7528\u6237\u7a7a\u95f4\u8c03\u8bd5"}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u679c\u5728\u5185\u6838\u914d\u7f6e\u4e2d\u6253\u5f00\u4e86Linux Kernel\u7684 CONFIG_DEBUG_FS \u9009\u9879\uff0c\u5e76\u4e14\u6302\u8f7d\u4e86debugfs\u6587\u4ef6\u7cfb\u7edf"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"mount -t debugfs none /sys/kernel/debug\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u90a3\u4e48\u5728\u7528\u6237\u7a7a\u95f4\u7684/sys/kernel/debug/pinctrl/a6004000.pinctrl/\u76ee\u5f55\u4e0b\u6709\u4e00\u4e9b\u8282\u70b9\u53ef\u4ee5\u67e5\u770bpinctrl\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-bash",children:"cat /sys/kernel/debug/pinctrl/a6004000.pinctrl/pinmux-pins\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u53ef\u4ee5\u67e5\u770b\u54ea\u4e9bpin\u811a\u88ab\u914d\u7f6e\u4e3a\u914d\u7f6e\u7ec4\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(p,{...n})}):p(n)}},53374:(n,e,i)=>{i.d(e,{A:()=>d});const d=i.p+"assets/images/image-20220321233840795-2ac81169d4f5f5334eb848b542a5ae93.png"},28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>_});var d=i(96540);const l={},t=d.createContext(l);function r(n){const e=d.useContext(t);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function _(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),d.createElement(t.Provider,{value:e},n.children)}}}]);