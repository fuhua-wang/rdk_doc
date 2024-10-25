"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4779],{13969:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>_});var d=e(74848),o=e(28453);const i={sidebar_position:14},s="\u770b\u95e8\u72d7\u9a71\u52a8\u8c03\u8bd5\u6307\u5357",r={id:"Advanced_development/linux_development/driver_development/driver_watchdog_dev",title:"\u770b\u95e8\u72d7\u9a71\u52a8\u8c03\u8bd5\u6307\u5357",description:"\u4ee3\u7801\u8def\u5f84",source:"@site/docs/07_Advanced_development/02_linux_development/driver_development/driver_watchdog_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_watchdog_dev",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_watchdog_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development/driver_watchdog_dev.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"RTC \u8c03\u8bd5\u6307\u5357",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_rtc_dev"},next:{title:"\u97f3\u9891Codec\u9002\u914d\u8bf4\u660e",permalink:"/rdk_doc/Advanced_development/linux_development/driver_development/driver_codec_dev"}},c={},_=[{value:"\u4ee3\u7801\u8def\u5f84",id:"\u4ee3\u7801\u8def\u5f84",level:2},{value:"dts\u914d\u7f6e",id:"dts\u914d\u7f6e",level:2},{value:"\u5185\u6838\u914d\u7f6e",id:"\u5185\u6838\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.R)(),...t.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u770b\u95e8\u72d7\u9a71\u52a8\u8c03\u8bd5\u6307\u5357",children:"\u770b\u95e8\u72d7\u9a71\u52a8\u8c03\u8bd5\u6307\u5357"}),"\n",(0,d.jsx)(n.h2,{id:"\u4ee3\u7801\u8def\u5f84",children:"\u4ee3\u7801\u8def\u5f84"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"drivers/watchdog/hobot_wdt.c # watchdog \u9a71\u52a8\u4ee3\u7801\u6e90\u6587\u4ef6\ninclude/linux/watchdog.h # watchdog \u9a71\u52a8\u4ee3\u7801\u5934\u6587\u4ef6\n"})}),"\n",(0,d.jsx)(n.h2,{id:"dts\u914d\u7f6e",children:"dts\u914d\u7f6e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'/* arch/arm64/boot/dts/hobot/hobot-xj3.dtsi */\nwatchdog: watchdog@0xA1002000 {\n    compatible = "hobot,hobot-wdt";\n    reg = <0 0xA1002000 0 0x1000>;\n    clocks = <&timer0_mclk>;\n    clock-names = "watchdog_mclk";\n    interrupt-parent = <&gic>;\n    interrupts = <0 15 4>;\n    pet-time = <6>;\n    bark-time = <11>;\n    bite-time = <15>;\n    status = "disabled";\n};\n\n/* arch/arm64/boot/dts/hobot/hobot-x3-sdb.dts */\n&watchdog {\n\tstatus = "okay";\n};\n\n/* arch/arm64/boot/dts/hobot/hobot-xj3-xvb.dtsi */\n&watchdog {\n\tstatus = "okay";\n};\n\n'})}),"\n",(0,d.jsx)(n.h2,{id:"\u5185\u6838\u914d\u7f6e",children:"\u5185\u6838\u914d\u7f6e"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"/* arch/arm64/configs/xj3_debug_defconfig */\nCONFIG_WATCHDOG=y\nCONFIG_WATCHDOG_CORE=y\n# CONFIG_WATCHDOG_NOWAYOUT is not set\nCONFIG_WATCHDOG_HANDLE_BOOT_ENABLED=y\n# CONFIG_WATCHDOG_SYSFS is not set\n#\n# Watchdog Device Drivers\n#\n# CONFIG_SOFT_WATCHDOG is not set\n# CONFIG_GPIO_WATCHDOG is not set\n# CONFIG_XILINX_WATCHDOG is not set\n# CONFIG_ZIIRAVE_WATCHDOG is not set\n# CONFIG_ARM_SP805_WATCHDOG is not set\n# CONFIG_ARM_SBSA_WATCHDOG is not set\n# CONFIG_CADENCE_WATCHDOG is not set\n# CONFIG_DW_WATCHDOG is not set\n# CONFIG_MAX63XX_WATCHDOG is not set\nCONFIG_HOBOT_WATCHDOG=y\n# CONFIG_HOBOT_WATCHDOG_ENABLE is not set/*\u6253\u5f00\u8fd9\u4e2a\u9009\u9879\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5582\u72d7*/\nCONFIG_HOBOT_WATCHDOG_TEST=y\n# CONFIG_MEN_A21_WDT is not set\n\n/* arch/arm64/configs/xj3_debug_defconfig */\nCONFIG_WATCHDOG=y\nCONFIG_WATCHDOG_CORE=y\n# CONFIG_WATCHDOG_NOWAYOUT is not set\nCONFIG_WATCHDOG_HANDLE_BOOT_ENABLED=y\n# CONFIG_WATCHDOG_SYSFS is not set\n\n#\n# Watchdog Device Drivers\n#\n# CONFIG_SOFT_WATCHDOG is not set\n# CONFIG_GPIO_WATCHDOG is not set\n# CONFIG_XILINX_WATCHDOG is not set\n# CONFIG_ZIIRAVE_WATCHDOG is not set\n# CONFIG_ARM_SP805_WATCHDOG is not set\n# CONFIG_ARM_SBSA_WATCHDOG is not set\n# CONFIG_CADENCE_WATCHDOG is not set\n# CONFIG_DW_WATCHDOG is not set\n# CONFIG_MAX63XX_WATCHDOG is not set\nCONFIG_HOBOT_WATCHDOG=y\nCONFIG_HOBOT_WATCHDOG_ENABLE=y/*\u6253\u5f00\u8fd9\u4e2a\u9009\u9879\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5582\u72d7*/\n# CONFIG_HOBOT_WATCHDOG_TEST is not set\n# CONFIG_MEN_A21_WDT is not set\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h> //UNIX\u6807\u51c6\u51fd\u6570\u5b9a\u4e49\n#include <sys/types.h>\n#include <sys/stat.h>\n#include <fcntl.h>  //\u6587\u4ef6\u63a7\u5236\u5b9a\u4e49\n#include <termios.h>    //PPSIX\u7ec8\u7aef\u63a7\u5236\u5b9a\u4e49\n#include <errno.h>  //\u9519\u8bef\u53f7\u5b9a\u4e49\n#include <pthread.h>\n#include <linux/watchdog.h>\n#include <string.h>\n#include <sys/ioctl.h>\n\nint watchdogfd;\nint feeddog = 1;\n\nvoid* feeddogthread()\n{\n\tint feeddogvalue;\n\tint returnval;\n\n\tfeeddogvalue = 65535;\n\n\twhile (feeddog) {\n\t\t//\u6bcf\u969410\u79d2\uff0c\u5c06\u91cd\u8f7d\u770b\u95e8\u72d7\u8ba1\u6570\u5bc4\u5b58\u5668\u7684\u503c\n\t\tprintf("feed dog\\n");\n\t\treturnval = write(watchdogfd, &feeddogvalue, sizeof(int));\n\t\tsleep(10);\n\t}\n}\n\nint main()\n{\n\tpthread_t watchdogThd;\n\t//int watchdogfd;\n\tint returnval;\n\tchar readline[32], *p;\n\n\t//\u6253\u5f00\u770b\u95e8\u72d7\u8bbe\u5907\n\tif ((watchdogfd = open("/dev/watchdog", O_RDWR|O_NONBLOCK)) < 0) {\n\t\tprintf("cannot open the watchdog device\\n");\n\t\texit(0);\n\t}\n\n\tint timeout = 15;\n\tint timeleft;\n    ioctl(watchdogfd, WDIOC_SETTIMEOUT, &timeout);\n    printf("The timeout was set to %d seconds\\n", timeout);\n\n\t//\u521b\u5efa\u5582\u72d7\u7ebf\u7a0b\n\treturnval = pthread_create(&watchdogThd, NULL, feeddogthread, NULL);\n\tif (returnval < 0)\n\t\tprintf("cannot create feeddog thread\\n");\n\n\twhile (1) {\n\t\tprintf("Command (e quit): ");\n\t\tmemset(readline, \'\\0\', sizeof(readline));\n        fgets(readline, sizeof(readline), stdin);\n    \n        /* \u53bb\u5b57\u7b26\u4e32\u524d\u90e8\u7a7a\u5b57\u7b26 */\n        p = readline;\n        while(*p == \' \' || *p == \'\\t\')\n                p++;\n\n        switch(*p) {\n        case \'g\':\n        \tioctl(watchdogfd, WDIOC_GETTIMEOUT, &timeout);\n    \t\tprintf("The timeout was is %d seconds\\n", timeout);\n    \t\tbreak;\n    \tcase \'e\':\n\t\t\tprintf("Close watchdog an exit safety!\\n");\n\t\t\t//write(watchdogfd, "V", 1);\n\t\t\tint disable_dog = WDIOS_DISABLECARD;\n\t\t\tioctl(watchdogfd, WDIOC_SETOPTIONS, &disable_dog);\n\t\t\tclose(watchdogfd);\n\t\t\tbreak;\n\t\tcase \'s\':\n\t\t\tprintf("stop feed dog\\n");\n\t\t\tfeeddog = 0;\n\t\t\tbreak;\n\t\tcase \'t\':\n\t\t\tioctl(watchdogfd, WDIOC_GETTIMELEFT, &timeleft);\n    \t\tprintf("The timeout was is %d seconds\\n", timeleft);\n    \t\tbreak;\n\t\tcase \'r\': \n\t\t\tprintf("we don\'t close watchdog. The machine will reboot in a few seconds!\\n");\n\t\t\tprintf("wait......\\n");\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tprintf("get error char: %c\\n", *p);\n        }\n\t\t\n\t}\n\n\treturn 0;\n}\n\n'})})]})}function l(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,d.jsx)(n,{...t,children:(0,d.jsx)(a,{...t})}):a(t)}},28453:(t,n,e)=>{e.d(n,{R:()=>s,x:()=>r});var d=e(96540);const o={},i=d.createContext(o);function s(t){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),d.createElement(i.Provider,{value:n},t.children)}}}]);