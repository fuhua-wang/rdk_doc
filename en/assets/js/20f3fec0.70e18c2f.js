"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4986],{14298:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});var o=l(74848),i=l(28453);const d={sidebar_position:4},r="7.2.4 Kernel Header Files",s={id:"Advanced_development/linux_development/kernel_headers",title:"7.2.4 Kernel Header Files",description:"If you need to compile kernel modules or similar code on a development board, you need to install the Linux kernel header files. These header files contain various constant definitions, macro definitions, function interface definitions, and data structure definitions of the Linux kernel. They are essential dependencies for compiling kernel module code.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/kernel_headers.md",sourceDirName:"07_Advanced_development/02_linux_development",slug:"/Advanced_development/linux_development/kernel_headers",permalink:"/rdk_doc/en/Advanced_development/linux_development/kernel_headers",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/kernel_headers.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CPU Performance Test",permalink:"/rdk_doc/en/Advanced_development/linux_development/hardware_unit_test/test_cpu"},next:{title:"7.2.5 Applying Real-Time Kernel",permalink:"/rdk_doc/en/Advanced_development/linux_development/realtime_kernel"}},t={},a=[{value:"Installation",id:"installation",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"Write Hello World Program",id:"write-hello-world-program",level:3},{value:"Writing the Makefile",id:"writing-the-makefile",level:3},{value:"Module Signing",id:"module-signing",level:3},{value:"Load Module",id:"load-module",level:3},{value:"Configure Automatic Loading at Startup",id:"configure-automatic-loading-at-startup",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"724-kernel-header-files",children:"7.2.4 Kernel Header Files"}),"\n",(0,o.jsx)(n.p,{children:"If you need to compile kernel modules or similar code on a development board, you need to install the Linux kernel header files. These header files contain various constant definitions, macro definitions, function interface definitions, and data structure definitions of the Linux kernel. They are essential dependencies for compiling kernel module code."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"You can install the kernel header files using the following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo apt install hobot-kernel-headers\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After the command runs successfully, the kernel header files will be installed in the ",(0,o.jsx)(n.code,{children:"/usr/src/linux-headers-4.14.87"})," directory."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# ls /usr/src/linux-headers-4.14.87/\narch   certs   Documentation  firmware  include  ipc      kernel  Makefile  Module.symvers  samples  security  System.map  usr\nblock  crypto  drivers        fs        init     Kconfig  lib     mm        net             scripts  sound     tools       virt\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,o.jsxs)(n.p,{children:["We will use a simple ",(0,o.jsx)(n.code,{children:"Hello World"})," kernel module to demonstrate how to use the kernel header files. The steps are outlined as follows:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Prepare program code"}),"\n",(0,o.jsx)(n.li,{children:"Write Makefile to compile the driver module"}),"\n",(0,o.jsx)(n.li,{children:"Sign the driver module"}),"\n",(0,o.jsx)(n.li,{children:"Test loading and unloading the module"}),"\n",(0,o.jsx)(n.li,{children:"(Optional) Configure automatic loading at startup"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"write-hello-world-program",children:"Write Hello World Program"}),"\n",(0,o.jsxs)(n.p,{children:["Open your favorite editor (e.g. VIM) and create a file ",(0,o.jsx)(n.code,{children:"hello.c"})," with the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'#include <linux/module.h>\n#include <linux/kernel.h>\n#include <linux/init.h>\n\nMODULE_LICENSE("GPL");\nMODULE_AUTHOR("xxx.xxx");\nMODULE_DESCRIPTION("Hello World");\n\nstatic int __init hello_init(void)\n{\n    printk(KERN_ERR "Hello, World!\\n");\n    return 0;\n}\nstatic void __exit hello_exit(void)\n{\n```printk(KERN_EMERG "Goodbye, World!\\n");\n}\n\nmodule_init(hello_init);\nmodule_exit(hello_exit);\n'})}),"\n",(0,o.jsx)(n.p,{children:'The module prints "Hello, World!" when it is loaded, and prints "Goodbye, World!" when it is unloaded.'}),"\n",(0,o.jsx)(n.h3,{id:"writing-the-makefile",children:"Writing the Makefile"}),"\n",(0,o.jsxs)(n.p,{children:["Open your favorite editor (such as VIM) and create a file called ",(0,o.jsx)(n.code,{children:"Makefile"}),". Then input the following content:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"ifneq ($(KERNELRELEASE),)\n    obj-m := hello.o\nelse\n    PWD = $(shell pwd)\n    KDIR := /usr/src/linux-headers-4.14.87\n\nall:\n    make -C $(KDIR) M=$(PWD) modules\nclean:\n    rm -rf *.ko *.o *.mod.o *.mod.c *.symvers  modul* .*.ko.cmd .*.o.cmd .tmp_versions\nendif\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"PWD"})," specifies the source code path, i.e., the path of hello.c."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"KDIR"})," specifies the path of the kernel source code."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"KERNELRELEASE"})," is a variable defined in the top-level Makefile of the kernel source code."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Save the ",(0,o.jsx)(n.code,{children:"Makefile"})," and then execute the ",(0,o.jsx)(n.code,{children:"make"})," command to compile the module and generate the ",(0,o.jsx)(n.code,{children:"hello.ko"})," file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# make \nmake -C /usr/src/linux-headers-4.14.87 M=/root modules\nmake[1]: Entering directory '/usr/src/linux-headers-4.14.87'\n  CC [M]  /root/hello.o\n  Building modules, stage 2.\n  MODPOST 1 modules\n  CC      /root/hello.mod.o\n  LD [M]  /root/hello.ko\nmake[1]: Leaving directory '/usr/src/linux-headers-4.14.87'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"module-signing",children:"Module Signing"}),"\n",(0,o.jsx)(n.p,{children:"After compiling the driver module file, it needs to be signed before it can be loaded into the RDK X3 kernel. The command is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# hobot-sign-file hello.ko\nSign Kernel Module File Done.\n"})}),"\n",(0,o.jsx)(n.p,{children:"If the driver module file is not signed and loaded directly, the following error will occur:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"insmod: ERROR: could not insert module hello.ko: Required key not available\n"})}),"\n",(0,o.jsx)(n.h3,{id:"load-module",children:"Load Module"}),"\n",(0,o.jsxs)(n.p,{children:["Load ko: ",(0,o.jsx)(n.code,{children:"insmod hello.ko"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# insmod hello.ko\n[ 3104.480703] Hello, World!\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Unload ko: ",(0,o.jsx)(n.code,{children:"rmmod hello"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# rmmod hello \n[ 3136.909409] Goodbye, World!\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Check if ko is loaded: ",(0,o.jsx)(n.code,{children:"lsmod | grep hello"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"root@ubuntu:~# lsmod | grep hello\nhello                  16384  0\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Execute command ",(0,o.jsx)(n.code,{children:"dmesg"})," to view kernel print information as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[ 3104.480361] hello: loading out-of-tree module taints kernel.\n[ 3104.480703] Hello, World!\n[ 3136.909409] Goodbye, World!\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configure-automatic-loading-at-startup",children:"Configure Automatic Loading at Startup"}),"\n",(0,o.jsx)(n.p,{children:"To automatically load a custom driver module at startup, follow these steps:"}),"\n",(0,o.jsxs)(n.p,{children:["Copy ",(0,o.jsx)(n.code,{children:"hello.ko"})," to the directory ",(0,o.jsx)(n.code,{children:"/lib/modules/4.14.87"}),", the command is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo cp -f hello.ko /lib/modules/4.14.87/\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Execute the command ",(0,o.jsx)(n.code,{children:"depmod"})," to update the module dependency:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo depmod\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Finally, create a configuration file with ",(0,o.jsx)(n.code,{children:"conf"})," extension in the directory ",(0,o.jsx)(n.code,{children:"/lib/modules-load.d"}),", for example, ",(0,o.jsx)(n.code,{children:"hello.conf"}),", and add the module name to be automatically loaded (the module name does not need the ",(0,o.jsx)(n.code,{children:".ko"})," extension). For example, if you need to automatically load ",(0,o.jsx)(n.code,{children:"hello.ko"}),", write the line ",(0,o.jsx)(n.code,{children:"hello"}),". If there are multiple modules to be loaded, you can add multiple self-loading modules in one configuration file, one module per line. You can use the following command to quickly create and configure the configuration file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo echo hello > /lib/modules-load.d/hello.conf\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>s});var o=l(96540);const i={},d=o.createContext(i);function r(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);