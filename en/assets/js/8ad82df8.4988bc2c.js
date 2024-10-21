"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[6986],{51101:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var o=i(74848),t=i(28453);const c={sidebar_position:1},r="Configuration of Uboot and Kernel Options",d={id:"Advanced_development/linux_development/driver_development/uboot_kernel_config",title:"Configuration of Uboot and Kernel Options",description:"In software development, it is often necessary to configure the functional options of Uboot and Kernel. This chapter introduces several commonly used configuration methods for users' reference.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/uboot_kernel_config.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/uboot_kernel_config",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/uboot_kernel_config",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/07_Advanced_development/02_linux_development/driver_development/uboot_kernel_config.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"6.2 Driver Development Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/"},next:{title:"UART Driver Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_uart_dev"}},s={},l=[{value:"Configuration of Uboot Options",id:"configuration-of-uboot-options",level:2},{value:"Configure Kernel Options",id:"configure-kernel-options",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuration-of-uboot-and-kernel-options",children:"Configuration of Uboot and Kernel Options"}),"\n",(0,o.jsx)(n.p,{children:"In software development, it is often necessary to configure the functional options of Uboot and Kernel. This chapter introduces several commonly used configuration methods for users' reference."}),"\n",(0,o.jsx)(n.h2,{id:"configuration-of-uboot-options",children:"Configuration of Uboot Options"}),"\n",(0,o.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,o.jsxs)(n.p,{children:["The following instructions are provided with the example of modifying the ",(0,o.jsx)(n.code,{children:"xj3_ubuntu_nand_defconfig"})," configuration file."]}),(0,o.jsxs)(n.p,{children:["The specific configuration file used by Uboot can be found in the ",(0,o.jsx)(n.code,{children:"bootloader/device/.board_config.mk"})," board-level configuration file after executing ",(0,o.jsx)(n.code,{children:"./xbuild.sh lunch"}),", in the ",(0,o.jsx)(n.code,{children:"HR_UBOOT_CONFIG_FILE"})," variable."]})]}),"\n",(0,o.jsxs)(n.p,{children:["First, enter the ",(0,o.jsx)(n.code,{children:"uboot"})," directory and execute ",(0,o.jsx)(n.code,{children:"make ARCH=arm64 xj3_ubuntu_nand_defconfig"}),". Because the ",(0,o.jsx)(n.code,{children:"make"})," command will first execute the Makefile file in the top-level directory. The targets ending with ",(0,o.jsx)(n.code,{children:"config"})," have a common entry:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-makefile",children:"%config: scripts_basic outputmakefile FORCE\n        $(Q)$(MAKE) $(build)=scripts/kconfig $@\n"})}),"\n",(0,o.jsx)(n.p,{children:"The expanded command is:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"make -f ./scripts/Makefile.build obj=scripts/kconfig xj3_ubuntu_nand_defconfig\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After executing this command, a ",(0,o.jsx)(n.code,{children:".config"})," file will be generated in the root directory of the Uboot source code."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make ARCH=arm64 xj3_ubuntu_nand_defconfig\n\n  HOSTCC  scripts/basic/fixdep\n  HOSTCC  scripts/kconfig/conf.o\n  YACC    scripts/kconfig/zconf.tab.c\n  LEX     scripts/kconfig/zconf.lex.c\n  HOSTCC  scripts/kconfig/zconf.tab.o\n  HOSTLD  scripts/kconfig/conf\n#\n# configuration written to .config\n#\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, you can execute ",(0,o.jsx)(n.code,{children:"make ARCH=arm64 menuconfig"})," to open the graphical configuration interface for configuring Uboot options."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"image-20220518111319607",src:i(16497).A+"",width:"823",height:"609"}),'After completing the configuration in the menuconfig interface, select "Exit" and choose "Yes" or "No" to save the modifications to the ',(0,o.jsx)(n.code,{children:".config"})," file according to the prompt."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-20220518111506018",src:i(98413).A+"",width:"616",height:"114"})}),"\n",(0,o.jsxs)(n.p,{children:["After saving the configuration, execute the command ",(0,o.jsx)(n.code,{children:"diff .config configs/xj3_ubuntu_nand_defconfig"})," to compare the differences and confirm whether the modifications meet expectations."]}),"\n",(0,o.jsxs)(n.p,{children:["If the modifications are correct, execute ",(0,o.jsx)(n.code,{children:"cp .config configs/xj3_ubuntu_nand_defconfig"})," to replace the default configuration file."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-kernel-options",children:"Configure Kernel Options"}),"\n",(0,o.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,o.jsxs)(n.p,{children:["The following instructions are based on modifying the ",(0,o.jsx)(n.code,{children:"xj3_perf_ubuntu_defconfig"})," configuration file."]}),(0,o.jsxs)(n.p,{children:["The specific configuration file used by the kernel can be found in the ",(0,o.jsx)(n.code,{children:"kernel_config_file"})," variable in the ",(0,o.jsx)(n.code,{children:"mk_kernel.sh"})," script."]})]}),"\n",(0,o.jsxs)(n.p,{children:["Configuring the kernel through ",(0,o.jsx)(n.code,{children:"menuconfig"})," is similar to configuring U-Boot. Follow these steps to configure the kernel options."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.code,{children:"xj3_perf_ubuntu_defconfig"})," to generate ",(0,o.jsx)(n.code,{children:".config"}),". If the source code has been fully compiled, the ",(0,o.jsx)(n.code,{children:".config"})," file will already be configured."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"make ARCH=arm64 xj3_perf_ubuntu_defconfig\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Execute the following command to modify the configuration."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"make ARCH=arm64 menuconfig\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"After making modifications, you can see the differences between the modified and original configurations."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"diff .config arch/arm64/configs/xj3_perf_ubuntu_defconfig\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Overwrite ",(0,o.jsx)(n.code,{children:"xj3_perf_ubuntu_defconfig"})," with the new configuration."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cp .config arch/arm64/configs/xj3_perf_ubuntu_defconfig\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},16497:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/image-20220518111319607-110c21472711233469ff890b56ccd253.png"},98413:(e,n,i)=>{i.d(n,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmgAAAByCAYAAADnPS2dAAAbeklEQVR4nO3df4zb1mEH8G9ad5fMTpEfl2SXNqGvl0gJkCyjPadokRDecuOgP5b8sbViYHRqcVDS6q/Nd6gAFWBRARWgwg62f4QmwqElhsDSWgxoulWoesYMOmiHZDZX1FhC1eqFyRBtjuOkubq1C7feH6ROlI4nkRJ1x9N9P8ABPusd33vke9Tje4/v3bB49PR1EBEREVFkfGi7E0BERERE3dhAIyIiIooYNtCIiIiIIoYNNCIiIqKIYQONiIiIKGLYQCMiIiKKmD2bffDMs3duZTqIiIiIJt4Lz1/wFY49aEREREQRwwYaERERUcSwgUZEREQUMWygEREREUWMzwbaFKaFGPbPxTBz83gTRERERLSzWdCUOFR9+COwB42IiIgoYthAIyIiIoqYTddBC+TmGcT6jH2utRporTEcwzEcwzEcwzEcw01wuBDdsHj09HWvD55ZeqRvYpwkodVoIeQ0EREREe0suop4utonQBJlM4/XfS5Uu3kP2loLjbWW88sUpgUB+/YAVy+E30okIiIi2tGkPEwz7/xiQVNkNDMm8lJ3sNd9Ho5z0IiIiIgihg00IiIioojx+ZLAVVy0Grg43rQQERERTQABqYo50hHYg0ZEREQUMWygEREREUVMOOugEREREdFAx5973Fc43z1oU9MCYvvnfKyNRlFiaQri8VH2A9OhxuOIj7KhGBENwYKuKlDiccTbP4oKr5o4ej3fWbYuvxY0VYGiuK5BPA5FUaFZ446bdjpLU0b67mQPGhFRBFlaFukqkKubqAjt/2SrYGtZaFaBRNlERer8n67KSMsNoF5BSuj390TDi+AcNKfHputHgaKo0HlvCkxIVWCaGxfK234WNIU9c0TeLJyqGUAy090AELxbA9Gt534Fux9seX6F7l+khRxEGKid4pcSjU8EG2iOZBmmado/9QwSsQbSsrJruvCJiGi7ScibHr1kVhMGgNgsu89ofKLbQHMTJKTyReREA9WSBvczi6VrUJXuORraEF1tuhpHPO49v8Pr6W5wvN5zt+y5E0rA+QuDny7dY93t+RnuHkjP+CwdmtoTVlGgbnr+rO7wm8yH6a/dQyqjYACoprvndvQkNKzr6xzMX34tHZrSO/en5+HA0qBsdl51deM53xB3v/O8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"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var o=i(96540);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);