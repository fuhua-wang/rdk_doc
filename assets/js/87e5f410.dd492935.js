"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9575],{10444:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=d(74848),r=d(28453);const i={sidebar_position:8},l="PWM \u9a71\u52a8\u8c03\u8bd5\u6307\u5357",c={id:"Advanced_development/linux_development/driver_development_x5/driver_pwm",title:"PWM \u9a71\u52a8\u8c03\u8bd5\u6307\u5357",description:"X5\u6709\u4e24\u7c7b\u63a7\u5236\u5668\uff1a\u4e00\u7c7b\u662f\u6807\u51c6PWM\uff0c\u67094\u7ec4\uff0c\u6bcf\u7ec42\u8def\u8f93\u51fa\uff0c\u51718\u4e2aPWM\u8f93\u51fa\uff0c\u53e6\u4e00\u7c7b\u662fLPWM\uff0c\u5171\u4e24\u7ec4\uff0c\u6bcf\u7ec44\u8defPWM\u8f93\u51fa\uff0c\u4e3b\u8981\u7528\u4e8e\u652f\u6301Sensor\u7684\u540c\u6b65\u66dd\u5149\u3002",source:"@site/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_pwm.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development_x5",slug:"/Advanced_development/linux_development/driver_development_x5/driver_pwm",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_pwm",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development_x5/driver_pwm.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"SPI\u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_spi_dev"},next:{title:"Thermal \u7cfb\u7edf",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development_x5/driver_thermal_dev"}},p={},s=[{value:"\u9a71\u52a8\u4ee3\u7801",id:"\u9a71\u52a8\u4ee3\u7801",level:2},{value:"\u4ee3\u7801\u8def\u5f84",id:"\u4ee3\u7801\u8def\u5f84",level:3},{value:"\u5185\u6838\u914d\u7f6e",id:"\u5185\u6838\u914d\u7f6e",level:3},{value:"DTS\u8282\u70b9\u914d\u7f6e",id:"dts\u8282\u70b9\u914d\u7f6e",level:3},{value:"DTS\u4e2dpwm\u548cpwmchip\u5bf9\u5e94\u5173\u7cfb",id:"dts\u4e2dpwm\u548cpwmchip\u5bf9\u5e94\u5173\u7cfb",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"pwm-\u9a71\u52a8\u8c03\u8bd5\u6307\u5357",children:"PWM \u9a71\u52a8\u8c03\u8bd5\u6307\u5357"}),"\n",(0,t.jsx)(n.p,{children:"X5\u6709\u4e24\u7c7b\u63a7\u5236\u5668\uff1a\u4e00\u7c7b\u662f\u6807\u51c6PWM\uff0c\u67094\u7ec4\uff0c\u6bcf\u7ec42\u8def\u8f93\u51fa\uff0c\u51718\u4e2aPWM\u8f93\u51fa\uff0c\u53e6\u4e00\u7c7b\u662fLPWM\uff0c\u5171\u4e24\u7ec4\uff0c\u6bcf\u7ec44\u8defPWM\u8f93\u51fa\uff0c\u4e3b\u8981\u7528\u4e8e\u652f\u6301Sensor\u7684\u540c\u6b65\u66dd\u5149\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PWM \u9ed8\u8ba4\u652f\u6301\u9891\u7387\u8303\u56f4\u662f0.05Hz\u5230100MHz\uff0c\u5360\u7a7a\u6bd4\u5bc4\u5b58\u5668RATIO\u7cbe\u5ea6\u4e3a16bit\u3002\u5468\u671f\u6709\u6548\u65f6\u95f4\u4e3a10ns\u523021s\uff1b\u5360\u7a7a\u6bd4\u6709\u6548\u65f6\u95f4\u4e3a10ns\u523021s\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"LPWM \u9ed8\u8ba4\u652f\u6301\u9891\u7387\u8303\u56f4\u662f1Hz\u5230500KHz\uff0c\u6ca1\u6709\u5360\u7a7a\u6bd4\u5bc4\u5b58\u5668\uff0c\u53ea\u6709\u4e00\u4e2a\u9ad8\u7535\u5e73\u6301\u7eed\u65f6\u95f4HIGH\uff0cHIGH\u5bc4\u5b58\u5668\u914d\u7f6e\u5355\u4f4d\u662fus\uff0c\u5360\u7a7a\u6bd4\u6709\u6548\u65f6\u95f4\u4e3a1us\uff1b4ms\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["LPWM\u662f\u4e3a\u4e86Sensor \u540c\u6b65\u8bbe\u8ba1\u7684\uff0c\u4e0d\u662f\u4e00\u4e2a\u901a\u7528\u7684PWM\uff0c",(0,t.jsx)(n.strong,{children:"\u5355\u7eafPWM\u529f\u80fd\u5efa\u8bae\u4f7f\u7528PWM\u3002"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u9a71\u52a8\u4ee3\u7801",children:"\u9a71\u52a8\u4ee3\u7801"}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u8def\u5f84",children:"\u4ee3\u7801\u8def\u5f84"}),"\n",(0,t.jsx)(n.p,{children:"PWM\u4ee3\u7801\u8def\u5f84"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"drivers/pwm/pwm-hobot.c\n"})}),"\n",(0,t.jsx)(n.p,{children:"LPWM\u4ee3\u7801\u8def\u5f84"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"kernel/drivers/media/platform/horizon/camsys/lpwm/\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5185\u6838\u914d\u7f6e",children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"/* arch/arm64/configs/hobot_x5_rdk_ubuntu_defconfig */\n...\nCONFIG_HOBOT_LPWM=m\n...\nCONFIG_PWM_DROBOT=y\n...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"dts\u8282\u70b9\u914d\u7f6e",children:"DTS\u8282\u70b9\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"X5 PWM\u53caLPWM\u63a7\u5236\u5668\u8bbe\u5907\u6811\u5b9a\u4e49\u4f4d\u4e8eSDK\u5305\u7684kernel\u6587\u4ef6\u5939\u4e0b\u7684arch/arm64/boot/dts/hobot/x5.dtsi\u6587\u4ef6\u5185\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"x5.dtsi\u4e2d\u7684\u8282\u70b9\u4e3b\u8981\u58f0\u660eSoC\u5171\u6709\u7279\u6027\uff0c\u548c\u5177\u4f53\u7535\u8def\u677f\u65e0\u5173\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u4e0d\u7528\u4fee\u6539\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u9700\u8981\u4f7f\u80fd\u7279\u5b9aPWM\u7aef\u53e3\u8f93\u51fa\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5230\u5bf9\u5e94\u7684\u677f\u7ea7\u6587\u4ef6\u4fee\u6539\uff0c\u8fd9\u91cc\u4ee5x5-rdk-v1p0.dts\u4e3a\u4f8b\uff0c\u4f7f\u80fdlpwm1_0, lpwm1_1, pwm0_0, pwm0_1, pwm1_0, pwm1_1, pwm2_0, pwm2_1, pwm3_0, pwm3_1\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'&lpwm1 {\n\tstatus = "okay";\n\tpinctrl-names = "default";\n\t/** for display backlight **/\n\tpinctrl-0 = <&pinctrl_lpwm1_0 &pinctrl_lpwm1_1>;\n};\n\n&pwm0 {\n\tstatus = "okay";\n\tpinctrl-names = "default";\n\tpinctrl-0 = <&pinctrl_pwm0_0 &pinctrl_pwm0_1>;\n};\n\n&pwm1 {\n\tstatus = "okay";\n\tpinctrl-names = "default";\n\tpinctrl-0 = <&pinctrl_pwm1_0 &pinctrl_pwm1_1>;\n};\n\n&pwm2 {\n\tstatus = "okay";\n\tpinctrl-names = "default";\n\tpinctrl-0 = <&pinctrl_pwm2_0 &pinctrl_pwm2_1>;\n};\n\n&pwm3 {\n\t/* LSIO_PWM_OUT6 and LSIO_PWM_OUT7 */\n\tstatus = "okay";\n\tpinctrl-names = "default";\n\tpinctrl-0 = <&pinctrl_pwm3_0 &pinctrl_pwm3_1>;\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"dts\u4e2dpwm\u548cpwmchip\u5bf9\u5e94\u5173\u7cfb",children:"DTS\u4e2dpwm\u548cpwmchip\u5bf9\u5e94\u5173\u7cfb"}),"\n",(0,t.jsx)(n.p,{children:"\u5c3d\u7ba1pwm\u548clpwm\u90fd\u5c5e\u4e8epwmchip\uff0c\u4f46PWM/LPWM\u4e0b\u542b\u7684\u8bbe\u5907\u6570\u91cf\u4e0d\u4e00\u81f4\uff0c\u6240\u4ee5\u65e0\u6cd5\u901a\u8fc7aliases\u56fa\u5b9a\u5e8f\u53f7\uff0c\u56e0\u6b64\u5728\u677f\u7aef\u64cd\u4f5cpwm\u65f6\uff0c\u9700\u8981cat pwmchip\u4e0b\u7684device/uevent\uff0c\u67e5\u770bpwm\u5730\u5740\u662f\u5426\u4e0e\u76ee\u6807pwm\u5730\u5740\u662f\u5426\u4e00\u81f4\u3002\u4ee5pwm0\u4e3a\u4f8b\uff0c\u5728\u677f\u7aef\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770bpwmchip\u7684uevent"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cat /sys/class/pwm/pwmchip0/device/uevent\nDRIVER=drobot-pwm\nOF_NAME=pwm\nOF_FULLNAME=/soc/a55_apb0/pwm@34140000\nOF_COMPATIBLE_0=d-robotics,pwm\nOF_COMPATIBLE_N=1\nMODALIAS=of:NpwmT(null)Cd-robotics,pwm\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6d4b\u8bd5",children:"\u6d4b\u8bd5"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u6237\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884cpwm\u529f\u80fd\u6d4b\u8bd5\uff0c\u5e76\u8fdb\u884c\u4fe1\u53f7\u6d4b\u91cf\uff0c\u9a8c\u8bc1pwm\u5de5\u4f5c\u662f\u5426\u6b63\u5e38\u3002\u5177\u4f53\u6d4b\u91cf\u7684\u786c\u4ef6\u5f15\u811a\u8bf7\u7528\u6237\u53c2\u8003\u4f7f\u7528\u7684\u5177\u4f53\u786c\u4ef6\u63d0\u4f9b\u7684\u8bf4\u660e\u3002\n\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u9a8c\u8bc1PWM0 ch0\u4e3a\u4f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'cd /sys/class/pwm/pwmchip0/\necho 0 > export\ncd pwm0\n\n# \u914d\u7f6e\u5468\u671f\u4e3a100us\necho 100000 > period\n# \u914d\u7f6e\u5360\u7a7a\u6bd4\u4e3a 50% = 100us * 0.5 = 50us\necho 50000 > duty_cycle\n# \u4f7f\u80fdPWM\u8f93\u51fa\necho 1 > enable\n\n#\u4ee5\u4e0b\u662f\u8fdb\u884c\u5bc4\u5b58\u5668\u8bfb\u53d6\necho "Regs of PWM 3:"\necho "PWM_EN       `devmem 0x34170000 32`"\necho "PWM_INT_CTRL `devmem 0x34170004 32`"\necho "PWM0_CTRL    `devmem 0x34170008 32`"\necho "PWM0_CLK     `devmem 0x34170010 32`"\necho "PWM0_PERIOD  `devmem 0x34170020 32`"\necho "PWM0_STATUS  `devmem 0x34170028 32`"\necho "PWM1_CTRL    `devmem 0x34170030 32`"\necho "PWM1_CLK     `devmem 0x34170034 32`"\necho "PWM1_PERIOD  `devmem 0x34170040 32`"\necho "PWM1_STATUS  `devmem 0x34170048 32`"\n'})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>c});var t=d(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);