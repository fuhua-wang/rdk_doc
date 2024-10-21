"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8645],{47013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(74848),s=t(28453);const o={sidebar_position:1},r="route",d={id:"Appendix/linux-command-manual/cmd_route",title:"route",description:"The route command is used to display and set the network routing table in the Linux kernel. The routes set by the route command are mainly static routes. To achieve communication between two different subnets, a router connecting both networks or a gateway located in both networks is needed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/09_Appendix/linux-command-manual/cmd_route.md",sourceDirName:"09_Appendix/linux-command-manual",slug:"/Appendix/linux-command-manual/cmd_route",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_route",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/09_Appendix/linux-command-manual/cmd_route.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ps",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_ps"},next:{title:"rsync",permalink:"/rdk_doc/en/Appendix/linux-command-manual/cmd_rsync"}},a={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Options",id:"options",level:2},{value:"Commonly Used Commands",id:"commonly-used-commands",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"route",children:"route"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"route"})," command is used to display and set the network routing table in the Linux kernel. The routes set by the route command are mainly static routes. To achieve communication between two different subnets, a router connecting both networks or a gateway located in both networks is needed."]}),"\n",(0,i.jsx)(n.p,{children:"Setting routes in Linux systems is usually done to solve the following problems:"}),"\n",(0,i.jsxs)(n.p,{children:["If a Linux system is in a LAN (Local Area Network) with a gateway that allows machines to access the Internet, the IP address of this machine needs to be set as the default route for the Linux machine. It should be noted that adding routes directly through the command line using the route command will not be permanently saved. The route will become invalid when the network card or the machine is restarted. To ensure that the route is permanently set, the route command can be added to the ",(0,i.jsx)(n.code,{children:"/etc/rc.local"})," file."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"route [-nNvee] [-FC] [<AF>]           List kernel routing tables\nroute [-v] [-FC] {add|del|flush} ...  Modify routing table for AF.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-A"}),": Set the address type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-v, --verbose"}),": Display detailed information."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-n, --numeric"}),": Do not perform DNS reverse lookup and display IP addresses in numeric form."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-e, --extend"}),": Display the routing table in netstat format."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-F, --fib"}),": Display the forwarding information base (default)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-C, --cache"}),": Display the route cache instead of the forwarding information base."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-net"}),": Show the routing table for a network."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-host"}),": Show the routing table for a host."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"add"}),": Used to add a specified routing record, routing the specified destination network or host to the specified network interface."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"del"}),": Used to delete a specified routing record."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"}),": Specifies the destination network or host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gw"}),": Used to set the default gateway."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mss"}),": Set the maximum segment size (MSS) for TCP."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"window"}),": Specify the TCP window size for TCP connections through the routing table."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dev"}),": Specify the network interface represented by the routing record."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commonly-used-commands",children:"Commonly Used Commands"}),"\n",(0,i.jsx)(n.p,{children:"Display the current routing table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"root@ubuntu:~# route\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         192.168.0.1     0.0.0.0         UG    600    0        0 wlan0\ndefault         192.168.1.1     0.0.0.0         UG    700    0        0 eth0\n192.168.0.0     0.0.0.0         255.255.255.0   U     600    0        0 wlan0\n192.168.1.0     0.0.0.0         255.255.255.0   U     700    0        0 eth0\nroot@ubuntu:~# route -n\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n0.0.0.0         192.168.0.1     0.0.0.0         UG    600    0        0 wlan0\n0.0.0.0         192.168.1.1     0.0.0.0         UG    700    0        0 eth0\n192.168.0.0     0.0.0.0         255.255.255.0   U     600    0        0 wlan0\n192.168.1.0     0.0.0.0         255.255.255.0   U     700    0        0 eth0\n"})}),"\n",(0,i.jsx)(n.p,{children:"The Flags column indicates the status of the network node, and the Flags symbols are explained as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"U"}),": Up, indicating that the route is currently in an active state."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"H"}),": Host, indicating that the gateway is a host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"G"}),": Gateway, indicating that the gateway is a router."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"R"}),": Reinstate Route, indicating that the route has been initialized again using dynamic routing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"D"}),": Dynamically, indicating that the route has been dynamically written."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"M"}),": Modified, indicating that the route has been dynamically modified by the routing daemon or router."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"!"}),": Indicates that the route is currently in an inactive state."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Adding a gateway / setting a gateway"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"route add -net 192.168.2.0 netmask 255.255.255.0 dev eth0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Blocking a route"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"route add -net 192.168.2.0 netmask 255.255.255.0 reject\n"})}),"\n",(0,i.jsx)(n.p,{children:"Deleting a route record"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"route del -net 192.168.2.0 netmask 255.255.255.0\nroute del -net 192.168.2.0 netmask 255.255.255.0 reject\n"})}),"\n",(0,i.jsx)(n.p,{children:"Deleting and adding a default gateway"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"route del default gw 192.168.2.1\nroute add default gw 192.168.2.1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);