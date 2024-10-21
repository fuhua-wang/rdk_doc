"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9287],{45219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(74848),i=t(28453);const r={sidebar_position:1},s="ip",a={id:"Appendix/linux-command-manual/cmd_ip",title:"ip",description:"The ip command is similar to the ifconfig command, but more powerful. Its main function is to display or configure network devices.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_ip.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_ip",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ip",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_Appendix/linux-command-manual/cmd_ip.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ifconfig",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ifconfig"},next:{title:"mount",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_mount"}},d={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Common Commands",id:"common-commands",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ip",children:"ip"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"ip"})," command is similar to the ",(0,o.jsx)(n.code,{children:"ifconfig"})," command, but more powerful. Its main function is to display or configure network devices."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"ip"})," command is an enhanced version of the network configuration tool in Linux, which replaces the ifconfig command."]}),"\n",(0,o.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ip [ OPTIONS ] OBJECT { COMMAND | help }\nip [ -force ] -batch filename\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"OBJECT := { link | address | addrlabel | route | rule | neigh | ntable |\n       tunnel | tuntap | maddress | mroute | mrule | monitor | xfrm |\n       netns | l2tp | macsec | tcp_metrics | token }\n\n-V: Display version information of the command;\n-s: Output more detailed information;\n-f: Force the usage of the specified protocol family;\n-4: Specify that the network layer protocol used is IPv4;\n-6: Specify that the network layer protocol used is IPv6;\n-0: Output each record in a single line, even if the content is long;\n-r: When displaying hosts, use domain names instead of IP addresses.\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OPTIONS"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"OPTIONS := { -V[ersion] | -s[tatistics] | -d[etails] | -r[esolve] |\n        -h[uman-readable] | -iec |\n        -f[amily] { inet | inet6 | ipx | dnet | bridge | link } |\n        -4 | -6 | -I | -D | -B | -0 |\n        -l[oops] { maximum-addr-flush-attempts } |\n        -o[neline] | -t[imestamp] | -ts[hort] | -b[atch] [filename] |\n        -rc[vbuf] [size] | -n[etns] name | -a[ll] }\n\nNetwork object: Specify the network object to manage;\nSpecific operation: Perform specific operation on the specified network object;\nhelp: Display help information on the supported operation commands of the network object.\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"common-commands",children:"Common Commands"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ip link show                     # Show network interface information\nip link set eth0 up             # Enable network card\nip link set eth0 down            # Disable network card\nip link set eth0 promisc on      # Enable promiscuous mode for network card\nip link set eth0 promisc off     # Disable promiscuous mode for network card\nip link set eth0 txqueuelen 1200 # Set the queue length for the network card\nip link set eth0 mtu 1400        # Set the maximum transmission unit for the network card\n\nip addr show     # Show IP information for the network card\nip addr add 192.168.0.1/24 dev eth0 # Assign IP address 192.168.0.1 to eth0 network card\nip addr del 192.168.0.1/24 dev eth0 # Delete IP address of eth0 network card\n\nip route show # Show system routes\nip route add default via 192.168.1.254   # Set the default route for the system\nip route list                 # View route information\nip route add 192.168.1.0/24  via  192.168.0.254 dev eth0 # Set the gateway for 192.168.4.0 network segment to 192.168.0.254, using eth0 interface\nip route add default via  192.168.0.254  dev eth0        # Set the default gateway to 192.168.0.254\nip route del 192.168.1.0/24   # Delete the gateway for 192.168.4.0 network segment\nip route del default          # Delete the default route\nip route delete 192.168.1.0/24 dev eth0 # Delete route\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"Get all network interfaces of the host"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ip link | grep -E '^[0-9]' | awk -F: '{print $2}'\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);