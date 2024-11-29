"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6789],{72449:(t,n,_)=>{_.r(n),_.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var e=_(74848),d=_(28453);const i={sidebar_position:6},o="IO-DOMAIN\u8c03\u8bd5\u6307\u5357",r={id:"Advanced_development/linux_development/driver_development_x5/driver_io_domain_dev",title:"IO-DOMAIN\u8c03\u8bd5\u6307\u5357",description:"IO-Domain\u7528\u6765\u914d\u7f6eX5\u90e8\u5206\u6a21\u5757\u7684\u7535\u538b\u57df\uff0c\u4ee5RGMII\u63a5\u53e3\u4e3a\u4f8b\uff0c\u5982\u679c\u7535\u8def\u8bbe\u8ba1\u65f6\u5916\u63a5\u7535\u538b\u57df\u4e3a3.3V\uff0c\u5219\u9700\u8981\u914d\u7f6eRGMII\u6a21\u5757\u7684IO-DOMAIN\u4e3a3.3V\uff0c\u5982\u679c\u7535\u8def\u8bbe\u8ba1\u65f6\u5916\u63a5\u7535\u538b\u57df\u4e3a1.8V\uff0c\u5219\u9700\u8981\u914d\u7f6e\u4e3a1.8v\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a",source:"@site/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_io_domain_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development_x5",slug:"/Advanced_development/linux_development/driver_development_x5/driver_io_domain_dev",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_io_domain_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_io_domain_dev.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pinctrl\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_pinctrl_dev"},next:{title:"SPI\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_spi_dev"}},l={},s=[{value:"\u9a71\u52a8\u4ee3\u7801",id:"\u9a71\u52a8\u4ee3\u7801",level:2},{value:"\u4ee3\u7801\u4f4d\u7f6e",id:"\u4ee3\u7801\u4f4d\u7f6e",level:3},{value:"IO-DOMAIN\u7684DTS",id:"io-domain\u7684dts",level:3},{value:"\u9a71\u52a8\u8c03\u7528\u65f6DTS\u914d\u7f6e",id:"\u9a71\u52a8\u8c03\u7528\u65f6dts\u914d\u7f6e",level:3},{value:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801",id:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801",level:3},{value:"uboot\u4e0b\u4fee\u6539\u7535\u538b\u57df",id:"uboot\u4e0b\u4fee\u6539\u7535\u538b\u57df",level:2}];function p(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"io-domain\u8c03\u8bd5\u6307\u5357",children:"IO-DOMAIN\u8c03\u8bd5\u6307\u5357"}),"\n",(0,e.jsx)(n.p,{children:"IO-Domain\u7528\u6765\u914d\u7f6eX5\u90e8\u5206\u6a21\u5757\u7684\u7535\u538b\u57df\uff0c\u4ee5RGMII\u63a5\u53e3\u4e3a\u4f8b\uff0c\u5982\u679c\u7535\u8def\u8bbe\u8ba1\u65f6\u5916\u63a5\u7535\u538b\u57df\u4e3a3.3V\uff0c\u5219\u9700\u8981\u914d\u7f6eRGMII\u6a21\u5757\u7684IO-DOMAIN\u4e3a3.3V\uff0c\u5982\u679c\u7535\u8def\u8bbe\u8ba1\u65f6\u5916\u63a5\u7535\u538b\u57df\u4e3a1.8V\uff0c\u5219\u9700\u8981\u914d\u7f6e\u4e3a1.8v\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"\u5916\u63a5\u7535\u538b\u57df\u4e3a3.3V\u800c\u5bf9\u5e94\u7684IO-DOMAIN\u914d\u7f6e\u4e3a1.8V\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bf9\u82af\u7247\u6709\u635f\u4f24\uff1b"}),"\n",(0,e.jsx)(n.li,{children:"\u5916\u63a5\u7535\u538b\u57df\u4e3a1.8V\u800c\u5bf9\u5e94\u7684IO-DOMAIN\u914d\u7f6e\u4e3a3.3V\u65f6\uff0c\u76f8\u5e94\u7684\u6a21\u5757\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff1b"}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:"\u9a71\u52a8\u4ee3\u7801",children:"\u9a71\u52a8\u4ee3\u7801"}),"\n",(0,e.jsx)(n.h3,{id:"\u4ee3\u7801\u4f4d\u7f6e",children:"\u4ee3\u7801\u4f4d\u7f6e"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"drivers/pinctrl/hobot/ # pinctrl \u9a71\u52a8\u4ee3\u7801\u6e90\u6587\u4ef6\u6240\u5728\u6587\u4ef6\u5939\ninclude/linux/platform_data/pinctrl-single.h # pinctrl \u9a71\u52a8\u4ee3\u7801\u5934\u6587\u4ef6\n"})}),"\n",(0,e.jsx)(n.h3,{id:"io-domain\u7684dts",children:"IO-DOMAIN\u7684DTS"}),"\n",(0,e.jsx)(n.p,{children:"X5\u7684Pinctrl\u529f\u80fd\u76f8\u5173\u5b9a\u4e49\u4f4d\u4e8eSDK\u5305kernel\u6587\u4ef6\u5939\u4e0b\u7684arch/arm64/boot/dts/hobot/pinmux-func.dtsi\u6587\u4ef6\u5185\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u7531\u4e8eIO-Domain\u5728pinctrl-single\u7684\u6846\u67b6\u4e0b\u5b9e\u73b0\uff0c\u56e0\u6b64\u5176DTS\u548cpinctrl\u7684\u7c7b\u4f3c\uff0c\u5728IO-Domain\u7684DTS\u91cc\u5df2\u7ecf\u5217\u51fa\u4e86\u6240\u6709\u6a21\u57571.8V\u548c3.3V\u7684\u914d\u7f6e\u7ec4\uff0c\u5ba2\u6237\u4e00\u822c\u4e0d\u9700\u8981\u4fee\u6539\uff0c\u5728\u5177\u4f53\u5f00\u53d1\u65f6\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u4f7f\u7528\u5373\u53ef\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u6bd4\u8f83\u7279\u6b8a\u7684\u662fSD\u548cSDIO\u4e24\u7ec4IO-Domain\u7684\u914d\u7f6e\u3002\u7531\u4e8e\u5728\u82af\u7247PAD\u4e0aSD\u4e0eSDIO\u7684\u7535\u538b\u57df\u4f1a\u88ab\u540c\u65f6\u914d\u7f6e\uff0c\u6211\u4eec\u9ed8\u8ba4\u4f7f\u7528SD\u53caSDIO\u7684MMC\u63a7\u5236\u5668\u6765\u72ec\u7acb\u63a7\u5236SD/SDIO\u7684PIN\u7684\u7535\u538b\u57df\uff0c\u914d\u7f6e\u9009\u9879\u4e3a\u81ea\u5b9a\u4e49\u7684\u201cpower-source\u201d\u5b8f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c",children:"...\n\tpconf_sd_sdio_ds12_padctrl_3v3: pconf-sd-sdio-ds12-padctrl-3v3 {\n\t\tbias-pull-up;\n\t\tpower-source = <HORIZON_IO_PAD_CTRL_VOLTAGE_3V3>;\n\t\tdrive-strength = <12>;\n\t};\n\n\tpconf_sd_sdio_pu_ds12_padctrl_1v8: pconf-sd-sdio-ds12-padctrl-1v8 {\n\t\tbias-pull-up;\n\t\tpower-source = <HORIZON_IO_PAD_CTRL_VOLTAGE_1V8>;\n\t\tdrive-strength = <12>;\n\t};\n...\n\n\tpinctrl_sd: sdgrp {\n\t\thorizon,pins = <\n\t\t\tHSIO_SD_WP\t\tHSIO_PINMUX_2\tBIT_OFFSET24\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_CLK\t\tHSIO_PINMUX_2\tBIT_OFFSET22\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_CMD\t\tHSIO_PINMUX_2\tBIT_OFFSET20\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_CDN\t\tHSIO_PINMUX_2\tBIT_OFFSET18\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_DATA0\tHSIO_PINMUX_2\tBIT_OFFSET16\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_DATA1\tHSIO_PINMUX_2\tBIT_OFFSET14\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_DATA2\tHSIO_PINMUX_2\tBIT_OFFSET12\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SD_DATA3\tHSIO_PINMUX_2\tBIT_OFFSET10\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t>;\n\t};\n\n\tpinctrl_sdio: sdiogrp {\n\t\thorizon,pins = <\n\t\t\tHSIO_SDIO_WP\tHSIO_PINMUX_2\tBIT_OFFSET8\tMUX_ALT0\t\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SDIO_CLK\tHSIO_PINMUX_0\tBIT_OFFSET30\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SDIO_CMD\tHSIO_PINMUX_0\tBIT_OFFSET28\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SDIO_DATA0\tHSIO_PINMUX_1\tBIT_OFFSET0\t\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SDIO_DATA1\tHSIO_PINMUX_2\tBIT_OFFSET30\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SDIO_DATA2\tHSIO_PINMUX_2\tBIT_OFFSET28\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t\tHSIO_SDIO_DATA3\tHSIO_PINMUX_2\tBIT_OFFSET26\tMUX_ALT0\t&pconf_sd_sdio_pu_ds12_ipctrl\n\t\t>;\n\t};\n...\n"})}),"\n",(0,e.jsx)(n.h3,{id:"\u9a71\u52a8\u8c03\u7528\u65f6dts\u914d\u7f6e",children:"\u9a71\u52a8\u8c03\u7528\u65f6DTS\u914d\u7f6e"}),"\n",(0,e.jsx)(n.p,{children:"\u9996\u5148\uff0c\u5728DTS\u5185\u5b9a\u4e49\u5f53\u524d\u786c\u4ef6\u7279\u6b8a\u7684\u7535\u538b\u57df\u914d\u7f6e\uff0c\u4ee5\u914d\u7f6epwm0 ch1\u4e3a1.8V\u4e3a\u4f8b\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c",children:"&lsio_iomuxc {\n    pinctrl_pwm0_1_1v8: pinctrl-pwm0-1_1v8 {\n        horizon,pins = <\n            LSIO_SPI2_SSN\tLSIO_PINMUX_1\tBIT_OFFSET18\tMUX_ALT3\t&pconf_pwm_1v8\n        >;\n    };\n}\n"})}),"\n",(0,e.jsx)(n.p,{children:"\u548cpinctrl\u7684\u4f7f\u7528\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u9a71\u52a8\u5728\u81ea\u5df1\u7684DTS\u4e2d\u5f15\u7528\u9700\u8981\u914d\u7f6e\u7684IO-Domain\uff0c\u4ee5pwm\u9a71\u52a8\u4e3a\u4f8b\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c",children:'&pwm0 {\n    ...\n    pinctrl-names = "default";\n    pinctrl-0 = <&pinctrl_pwm0_1_1v8>; /* \u5c06pwm0 Ch1 \u914d\u7f6e\u4e3a1.8V\u7535\u538b\u57df\uff0cPWM0\u529f\u80fd */\n    ...\n};\n'})}),"\n",(0,e.jsx)(n.h3,{id:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801",children:"\u9a71\u52a8\u8c03\u7528\u793a\u4f8b\u4ee3\u7801"}),"\n",(0,e.jsx)(n.p,{children:"\u548cPinctrl\u8c03\u7528\u65b9\u6cd5\u4e00\u81f4\uff0c\u9a71\u52a8\u5148\u901a\u8fc7Pinctrl-names\u67e5\u627e\u5bf9\u5e94\u7684pinctrl state\uff0c\u7136\u540e\u518d\u5207\u6362\u5230\u5bf9\u5e94\u7684state\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-c",children:'static int hobot_xxx_probe(struct platform_device *pdev)\n{\n    ...\n    g_xxx_dev->pinctrl = devm_pinctrl_get(&pdev->dev);\n    if (IS_ERR(g_xxx_dev->pinctrl)) {\n        dev_warn(&pdev->dev, "pinctrl get none\\n");\n        g_xxx_dev->pins_voltage = NULL;\n    }\n    ...\n        /* \u6309\u7167pinctrl-names lookup state */\n        g_xxx_dev->pins_voltage = pinctrl_lookup_state(g_xxx_dev->pinctrl,\n                "xxx_voltage_func");\n    if (IS_ERR(g_xxx_dev->pins_voltage)) {\n        dev_info(&pdev->dev, "xxx_voltage_func get error %ld\\n",\n                PTR_ERR(g_xxx_dev->pins_voltage));\n        g_xxx_dev->pins_voltage = NULL;\n    }\n    ...\n        /* select state */\n        if (g_xxx_dev->pins_voltage) {\n            ret = pinctrl_select_state(g_xxx_dev->pinctrl, g_xxx_dev->pins_voltage);\n            if (ret) {\n                dev_info(&pdev->dev, "xxx_voltage_func set error %d\\n", ret);\n            }\n        }\n    ...\n}\n'})}),"\n",(0,e.jsx)(n.h2,{id:"uboot\u4e0b\u4fee\u6539\u7535\u538b\u57df",children:"uboot\u4e0b\u4fee\u6539\u7535\u538b\u57df"}),"\n",(0,e.jsx)(n.p,{children:"X5\u7684Uboot\u5185\u5df2\u5b9e\u73b0\u4e86Pinctrl\u9a71\u52a8\uff0c\u4f7f\u7528\u65b9\u6cd5\u4e0e\u5185\u6838\u4e00\u81f4\uff0c\u5747\u901a\u8fc7DTS\u6765\u5b9a\u4e49\u5177\u4f53\u7684Pin\u7684\u5c5e\u6027\u3002"})]})}function c(t={}){const{wrapper:n}={...(0,d.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(p,{...t})}):p(t)}},28453:(t,n,_)=>{_.d(n,{R:()=>o,x:()=>r});var e=_(96540);const d={},i=e.createContext(d);function o(t){const n=e.useContext(i);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(d):t.components||d:o(t.components),e.createElement(i.Provider,{value:n},t.children)}}}]);