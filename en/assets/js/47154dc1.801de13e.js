"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2670],{5850:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=s(74848),i=s(28453);const o={sidebar_position:1},d="2.1 Network & Bluetooth Configuration",c={id:"System_configuration/network_blueteeth",title:"2.1 Network & Bluetooth Configuration",description:"This section mainly introduces the methods for modifying the wired and wireless network configurations of the development board.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/02_System_configuration/01_network_blueteeth.md",sourceDirName:"02_System_configuration",slug:"/System_configuration/network_blueteeth",permalink:"/rdk_doc/en/System_configuration/network_blueteeth",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/02_System_configuration/01_network_blueteeth.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2. \u7cfb\u7edf\u914d\u7f6e",permalink:"/rdk_doc/en/System_configuration"},next:{title:"2.2 srpi-config Configuration Tool User Guide",permalink:"/rdk_doc/en/System_configuration/srpi-config"}},r={},a=[{value:"Wired Network",id:"config_ethnet",level:2},{value:"Modifying Static IP Configuration",id:"modifying-static-ip-configuration",level:3},{value:"Modifying DHCP Configuration",id:"modifying-dhcp-configuration",level:3},{value:"Modify MAC address configuration",id:"modify-mac-address-configuration",level:3},{value:"Wireless Network",id:"wireless-network",level:2},{value:"Station Mode",id:"station-mode",level:3},{value:"Soft AP Mode",id:"soft-ap-mode",level:3},{value:"DNS Server",id:"dns-server",level:2},{value:"2.2 System Updates",id:"22-system-updates",level:2},{value:"Bluetooth",id:"bluetooth",level:2},{value:"Initialization",id:"initialization",level:3},{value:"Network Configuration and Connection",id:"network-configuration-and-connection",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"21-network--bluetooth-configuration",children:"2.1 Network & Bluetooth Configuration"}),"\n",(0,t.jsx)(n.p,{children:"This section mainly introduces the methods for modifying the wired and wireless network configurations of the development board."}),"\n",(0,t.jsx)(n.h2,{id:"config_ethnet",children:"Wired Network"}),"\n",(0,t.jsxs)(n.p,{children:["Video: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=omaAU6sab2A&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=8",children:"https://www.youtube.com/watch?v=omaAU6sab2A&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=8"})]}),"\n",(0,t.jsxs)(n.p,{children:["The default wired network configuration of the development board uses static IP configuration, and the initial IP address is ",(0,t.jsx)(n.code,{children:"192.168.1.10"}),". Users can switch between static and DHCP modes by the following methods."]}),"\n",(0,t.jsx)(n.h3,{id:"modifying-static-ip-configuration",children:"Modifying Static IP Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The development board's static network configuration is saved in the ",(0,t.jsx)(n.code,{children:"/etc/network/interfaces"})," file. By modifying the ",(0,t.jsx)(n.code,{children:"address"}),", ",(0,t.jsx)(n.code,{children:"netmask"}),", ",(0,t.jsx)(n.code,{children:"gateway"}),", and other fields, the static IP configuration can be modified. ",(0,t.jsx)(n.code,{children:"metric"})," is the network priority configuration, setting it to ",(0,t.jsx)(n.code,{children:"700"})," is to lower the priority of the wired network. When both wired and wireless networks are enabled, the wireless network will be prioritized. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# interfaces(5) file used by ifup(8) and ifdown(8)\n# Include files from /etc/network/interfaces.d:\nsource-directory /etc/network/interfaces.d\nauto eth0\niface eth0 inet static\n    address 192.168.1.10\n    netmask 255.255.255.0\n    gateway 192.168.1.1 \n    metric 700\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After the modification is completed, enter the command ",(0,t.jsx)(n.code,{children:"sudo restart_network"})," on the command line to make the configuration take effect."]}),"\n",(0,t.jsx)(n.h3,{id:"modifying-dhcp-configuration",children:"Modifying DHCP Configuration"}),"\n",(0,t.jsx)(n.p,{children:"DHCP (Dynamic Host Configuration Protocol) is usually applied in local area network environments. Its main function is centralized management and allocation of IP addresses, allowing hosts in the network environment to dynamically obtain IP addresses, gateway addresses, DNS server addresses, and other information, thereby improving the utilization of addresses."}),"\n",(0,t.jsxs)(n.p,{children:["The development board's DHCP network configuration is saved in the ",(0,t.jsx)(n.code,{children:"/etc/network/interfaces"})," file. By modifying the relevant configuration of eth0, the DHCP mode can be modified. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"source-directory /etc/network/interfaces.d\nauto lo\niface lo inet loopback\nauto eth0\niface eth0 inet dhcp\nmetric 700\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After modifying, enter the ",(0,t.jsx)(n.code,{children:"sudo restart_network"})," command in the command line to make the configuration take effect."]}),"\n",(0,t.jsx)(n.h3,{id:"modify-mac-address-configuration",children:"Modify MAC address configuration"}),"\n",(0,t.jsxs)(n.p,{children:["If you need to modify the default MAC address of the development board, you can add ",(0,t.jsx)(n.code,{children:"pre-up"})," configuration information in the ",(0,t.jsx)(n.code,{children:"/etc/network/interfaces"})," file to specify the MAC address you need, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# interfaces(5) file used by ifup(8) and ifdown(8)\n# Include files from /etc/network/interfaces.d:\nsource-directory /etc/network/interfaces.d\nauto eth0\niface eth0 inet static\n    address 192.168.1.10\n    netmask 255.255.255.0\n    gateway 192.168.1.1 \n    pre-up ifconfig eth0 hw ether 00:11:22:9f:51:27\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After modifying, ",(0,t.jsx)(n.code,{children:"reboot"})," to make the configuration take effect."]}),"\n",(0,t.jsx)(n.h2,{id:"wireless-network",children:"Wireless Network"}),"\n",(0,t.jsxs)(n.p,{children:["Video: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=KrlTudL0_JE&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=7",children:"https://www.youtube.com/watch?v=KrlTudL0_JE&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=7"})]}),"\n",(0,t.jsx)(n.p,{children:"The development board integrates a 2.4GHz wireless WiFi module, which supports Soft AP and Station modes, and runs in Station mode by default. The following introduces how to use the two modes."}),"\n",(0,t.jsx)(n.h3,{id:"station-mode",children:"Station Mode"}),"\n",(0,t.jsx)(n.p,{children:"In Station mode, the development board as a client and accesses the router's wireless hotspot for internet connection."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For users of Ubuntu Desktop version, you can click on the Wi-Fi icon in the upper right corner of the desktop, select the corresponding hotspot, and enter the password to complete the network configuration, as shown in the figure below:"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-wifi-config",src:s(8955).A+"",width:"284",height:"398"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For users of Ubuntu Server version, you can complete the wireless network configuration through the command line, following these steps:"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"sudo nmcli device wifi rescan"})," command to scan for hotspots. If you get the following message, it means scanning is too frequent and you need to try again later:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# sudo nmcli device wifi rescan\nError: Scanning not allowed immediately following previous scan.\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"sudo nmcli device wifi list"})," command to list the scanned hotspots."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:'sudo wifi_connect "SSID" "PASSWD"'})," command to connect to the hotspot. If you get the following message, it means the network connection is successful:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# sudo wifi_connect \"WiFi-Test\" \"12345678\" \nDevice 'wlan0' successfully activated with 'd7468833-4195-45aa-aa33-3d43da86e1a7'.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If you receive the following message after connecting to the hotspot, it means the hotspot is not found. You can execute the ",(0,t.jsx)(n.code,{children:"sudo nmcli device wifi rescan"})," command to rescan and reconnect."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@ubuntu:~# sudo wifi_connect "WiFi-Test" "12345678" \nError: No network with SSID \'WiFi-Test\' found.\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"soft-ap-mode",children:"Soft AP Mode"}),"\n",(0,t.jsx)(n.p,{children:"By default, the development board's wireless network runs in Station mode. To use the Soft AP mode, please follow the steps below for configuration."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.code,{children:"hostapd"})," and ",(0,t.jsx)(n.code,{children:"isc-dhcp-server"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install hostapd\nsudo apt install isc-dhcp-server\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run the command ",(0,t.jsx)(n.code,{children:"sudo vim /etc/hostapd.conf"})," to configure the ",(0,t.jsx)(n.code,{children:"hostapd.conf"})," file, focusing on the following fields:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"interface=wlan0 # The network card used as an AP hotspot\nssid=Sunrise # WiFi name\nwpa=2 # 0 for WPA, 2 for WPA2, usually 2\nwpa_key_mgmt=WPA-PSK # Encryption algorithm, usually WPA-PSK\nwpa_passphrase=12345678 # Password\nwpa_pairwise=CCMP # Encryption protocol, usually CCMP\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For an open hotspot configuration, add the following content to the ",(0,t.jsx)(n.code,{children:"hostapd.conf"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"interface=wlan0\ndriver=nl80211\nctrl_interface=/var/run/hostapd\nssid=Sunrise\nchannel=6\nieee80211n=1\nhw_mode=g\nignore_broadcast_ssid=0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For a hotspot with a password, add the following content to the ",(0,t.jsx)(n.code,{children:"hostapd.conf"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"interface=wlan0\ndriver=nl80211\nctrl_interface=/var/run/hostapd\nssid=Sunrise\nchannel=6\nieee80211n=1\nhw_mode=g\nignore_broadcast_ssid=0\nwpa=2\nwpa_key_mgmt=WPA-PSK\nrsn_pairwise=CCMP\nwpa_passphrase=12345678\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Configure the ",(0,t.jsx)(n.code,{children:"isc-dhcp-server"})," file as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:"sudo vim /etc/default/isc-dhcp-server"})," to modify the ",(0,t.jsx)(n.code,{children:"isc-dhcp-server"})," file and add the following definition for the network interface:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'INTERFACESv4="wlan0"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:"sudo vim /etc/dhcp/dhcpd.conf"})," to modify the ",(0,t.jsx)(n.code,{children:"dhcpd.conf"})," file and uncomment the following fields:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"authoritative;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Then, add the following configuration to the end of the ",(0,t.jsx)(n.code,{children:"/etc/dhcp/dhcpd.conf"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"subnet 10.5.5.0 netmask 255.255.255.0 { #network and subnet mask\nrange 10.5.5.100 10.5.5.254;#IP range available\noption subnet-mask 255.255.255.0; #subnet mask\noption routers 10.5.5.1;#default gateway\noption broadcast-address 10.5.5.31;#broadcast address\ndefault-lease-time 600;#default lease time in seconds\nmax-lease-time 7200;#maximum lease time in seconds\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stop the ",(0,t.jsx)(n.code,{children:"wpa_supplicant"})," service and restart ",(0,t.jsx)(n.code,{children:"wlan0"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl stop wpa_supplicant\n\nip addr flush dev wlan0\nsleep 0.5\nifconfig wlan0 down\nsleep 1\nifconfig wlan0 up\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start the ",(0,t.jsx)(n.code,{children:"hostapd"})," service as follows:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Execute the command ",(0,t.jsx)(n.code,{children:"sudo hostapd -B /etc/hostapd.conf"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'root@ubuntu:~# sudo hostapd -B /etc/hostapd.conf\nConfiguration file: /etc/hostapd.conf\nUsing interface wlan0 with hwaddr 08:e9:f6:af:18:26 and ssid "sunrise"\nwlan0: interface state UNINITIALIZED->ENABLED\nwlan0: AP-ENABLED\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Configure the IP and subnet of wireless interface ",(0,t.jsx)(n.code,{children:"wlan0"})," using the ",(0,t.jsx)(n.code,{children:"ifconfig"})," command, make sure it matches the configuration in the third step"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ifconfig wlan0 10.5.5.1 netmask 255.255.255.0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Finally, start the ",(0,t.jsx)(n.code,{children:"dhcp"})," server. Clients connecting to the hotspot will be assigned an IP address from ",(0,t.jsx)(n.code,{children:"10.5.5.100"})," to ",(0,t.jsx)(n.code,{children:"10.5.5.255"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo ifconfig wlan0 10.5.5.1 netmask 255.255.255.0\nsudo systemctl start isc-dhcp-server\nsudo systemctl enable isc-dhcp-server\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connect to the hotspot on the development board, for example, ",(0,t.jsx)(n.code,{children:"sunrise"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601203025803",src:s(15928).A+"",width:"828",height:"483"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you need to switch back to ",(0,t.jsx)(n.code,{children:"Station"})," mode, you can do it as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Stop hostapd\nkillall -9 hostapd\n\n# Clear the address of wlan0\nip addr flush dev wlan0\nsleep 0.5\nifconfig wlan0 down\nsleep 1\nifconfig wlan0 up\n\n# Restart wpa_supplicant\nsystemctl restart wpa_supplicant\n\n# Connect to the hotspot, for specific operation, please refer to the previous section "Wireless Network"\nwifi_connect "WiFi-Test" "12345678"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"dns-server",children:"DNS Server"}),"\n",(0,t.jsxs)(n.p,{children:["Video: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=YCNFSC7LpCY&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=6",children:"https://www.youtube.com/watch?v=YCNFSC7LpCY&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=6"})]}),"\n",(0,t.jsx)(n.p,{children:"DNS (Domain Name Server) is a server that converts domain names to their corresponding IP addresses."}),"\n",(0,t.jsxs)(n.p,{children:["The DNS configuration on the development board is managed through the ",(0,t.jsx)(n.code,{children:"/etc/systemd/resolved.conf"})," file. Users can modify this file to configure DNS settings. The steps are as follows:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the ",(0,t.jsx)(n.code,{children:"resolved.conf"})," file and add the DNS server address, for example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"DNS=8.8.8.8 114.114.114.114\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Enable DNS configuration using the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart systemd-resolved\nsudo systemctl enable systemd-resolved\nsudo mv /etc/resolv.conf  /etc/resolv.conf.bak\nsudo ln -s /run/systemd/resolve/resolv.conf /etc/\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"22-system-updates",children:"2.2 System Updates"}),"\n",(0,t.jsxs)(n.p,{children:["For system security and stability considerations, it is recommended for users to update the system using the ",(0,t.jsx)(n.code,{children:"apt"})," command after the installation."]}),"\n",(0,t.jsxs)(n.p,{children:["The software source list for the ",(0,t.jsx)(n.code,{children:"apt"})," command is stored in the ",(0,t.jsx)(n.code,{children:"/etc/apt/source.list"})," file, and it is necessary to update the package list with the ",(0,t.jsx)(n.code,{children:"apt"})," command before installing software."]}),"\n",(0,t.jsx)(n.p,{children:"First, open the terminal command line and enter the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt update\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, upgrade all installed software packages to the latest version with the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt full-upgrade\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["It is recommended to use the ",(0,t.jsx)(n.code,{children:"full-upgrade"})," option instead of the ",(0,t.jsx)(n.code,{children:"upgrade"})," option, so that dependency packages will also be updated when related dependencies change."]}),(0,t.jsxs)(n.p,{children:["When running the ",(0,t.jsx)(n.code,{children:"sudo apt full-upgrade"})," command, the system will prompt for data download and disk space usage. However, ",(0,t.jsx)(n.code,{children:"apt"})," does not check if there is enough disk space, so it is recommended for users to manually check with the ",(0,t.jsx)(n.code,{children:"df -h"})," command. In addition, the deb files downloaded during the upgrade process will be saved in the ",(0,t.jsx)(n.code,{children:"/var/cache/apt/archives"})," directory. Users can use the ",(0,t.jsx)(n.code,{children:"sudo apt clean"})," command to delete cache files and free up disk space."]})]}),"\n",(0,t.jsxs)(n.p,{children:["After executing the ",(0,t.jsx)(n.code,{children:"apt full-upgrade"})," command, it may be necessary to reinstall drivers, kernel files, and some system software. It is recommended for users to manually restart the device to apply the updates, using the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bluetooth",children:"Bluetooth"}),"\n",(0,t.jsxs)(n.p,{children:["Video: ",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Ov8mL8P_yUY&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=10",children:"https://www.youtube.com/watch?v=Ov8mL8P_yUY&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=10"})]}),"\n",(0,t.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsxs)(n.p,{children:["The Bluetooth function on the development board is not enabled by default. You need to execute the ",(0,t.jsx)(n.code,{children:"/usr/bin/startbt6212.sh"})," script to initialize it. The script completes the following tasks:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reset the Bluetooth"}),"\n",(0,t.jsxs)(n.li,{children:["Create the ",(0,t.jsx)(n.code,{children:"messagebus"})," user and group, which are required for the operation of the ",(0,t.jsx)(n.code,{children:"dbus-daemon"})," program"]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"brcm_patchram_plus"})," to load the Bluetooth driver and firmware"]}),"\n",(0,t.jsxs)(n.li,{children:["Continuously check if the ",(0,t.jsx)(n.code,{children:"/sys/class/bluetooth/hci0"})," directory exists to confirm that the Bluetooth driver is running properly"]}),"\n",(0,t.jsxs)(n.li,{children:["The appearance of ",(0,t.jsx)(n.strong,{children:"Done setting line discpline"})," indicates that the Bluetooth has been successfully enabled"]}),"\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:"hciconfig hci0 up"})," to bring up the Bluetooth Link"]}),"\n",(0,t.jsxs)(n.li,{children:["Execute ",(0,t.jsx)(n.code,{children:"hciconfig hci0 piscan"})," to perform Bluetooth scanning (this step can be excluded depending on the situation)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The log after the successful execution of the script is as follows:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601172145987",src:s(87997).A+"",width:"757",height:"215"})}),"\n",(0,t.jsx)(n.p,{children:"In addition, users can use the following command to check if the Bluetooth process is functioning properly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'ps ax | grep "/usr/bin/dbus-daemon\\|/usr/lib/bluetooth/bluetoothd"\n/usr/bin/dbus-daemon\n\n/usr/lib/bluetooth/bluetoothd\n'})}),"\n",(0,t.jsx)(n.h3,{id:"network-configuration-and-connection",children:"Network Configuration and Connection"}),"\n",(0,t.jsxs)(n.p,{children:["Execute ",(0,t.jsx)(n.code,{children:"sudo bluetoothctl"})," to enter the interactive mode of Bluetooth configuration. If device information similar to the image below appears, it means that the Bluetooth has been recognized. Then, use ",(0,t.jsx)(n.code,{children:"show"})," to view the Bluetooth information and pay attention to the ",(0,t.jsx)(n.code,{children:"powered"})," and ",(0,t.jsx)(n.code,{children:"discoverable"})," statuses of the Bluetooth."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601172604051",src:s(80055).A+"",width:"1001",height:"503"})}),"\n",(0,t.jsxs)(n.p,{children:["Execute ",(0,t.jsx)(n.code,{children:"power on"})," to enable the Bluetooth, as shown in the image below:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601172501882",src:s(60405).A+"",width:"371",height:"69"})}),"\n",(0,t.jsxs)(n.p,{children:["In order to make the Bluetooth discoverable to nearby devices, execute ",(0,t.jsx)(n.code,{children:"discoverable on"})," to enable the Bluetooth and open the discoverable attribute of the Bluetooth, as shown in the image below:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601172648853",src:s(24485).A+"",width:"685",height:"82"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, you can use a mobile phone or computer to scan for the Bluetooth device with the name ",(0,t.jsx)(n.code,{children:"ubuntu"}),", as shown in the image below:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601175322650",src:s(75520).A+"",width:"823",height:"1280"})}),"\n",(0,t.jsxs)(n.p,{children:["Next, test the active scanning function of Bluetooth. In the interactive interface of ",(0,t.jsx)(n.code,{children:"bluetoothctl"}),", enter ",(0,t.jsx)(n.code,{children:"scan on"})," to enable active scanning. It will periodically print nearby devices. You can see that my mobile phone device has been discovered. Enter ",(0,t.jsx)(n.code,{children:"scan off"})," to disable the scanning function and summarize the scanned Bluetooth devices."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601154131158",src:s(81122).A+"",width:"1091",height:"318"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601154253947",src:s(33031).A+"",width:"667",height:"363"})}),"\n",(0,t.jsx)(n.p,{children:"Then comes the pairing with other Bluetooth devices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Pairing command: ",(0,t.jsx)(n.code,{children:"pair [targetMAC]"}),", after entering this command, follow the prompts to enter ",(0,t.jsx)(n.code,{children:"yes"}),", and the remote Bluetooth device will select the ",(0,t.jsx)(n.code,{children:"Pair"})," option to complete the pairing."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["After successful pairing, you can use ",(0,t.jsx)(n.code,{children:"trust [targetMAC]"})," to automatically connect next time."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20220601154414717",src:s(39005).A+"",width:"982",height:"547"})}),"\n",(0,t.jsxs)(n.p,{children:["After the above operations, the basic functions of Bluetooth scanning and pairing are completed. For more functions, please refer to the official help documentation of ",(0,t.jsx)(n.code,{children:"BlueZ"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},81122:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601154131158-a4b27b18cb7cb77176cb325bce74b228.png"},33031:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601154253947-451bc0a8af28f5c0d7168c3b148fe704.png"},39005:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601154414717-a1496688514e4c88761a84fde5660229.png"},87997:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601172145987-116b69efa33227d091b832a380e1c5ac.png"},60405:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601172501882-0dd2b0b0b551df5bdb3192ae19e97d73.png"},80055:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601172604051-74a44caff0eeddb19c2e7b0b24fe91a9.png"},24485:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601172648853-3f96573828f72cc091b5addad607682f.png"},75520:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601175322650-5c252835c4d3d6bc26a967b5526dfb45.jpg"},15928:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-20220601203025803-ba3de05d9f87b5b7a814eb95a62d9c00.png"},8955:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-wifi-config-558f89621701c067be22f22cca86590a.jpeg"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var t=s(96540);const i={},o=t.createContext(i);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);