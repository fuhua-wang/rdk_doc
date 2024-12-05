"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2090],{65723:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(74848),a=s(28453);const r={sidebar_position:3},t="CAN Usage",c={id:"Advanced_development/hardware_development/rdk_x5/can",title:"CAN Usage",description:"Protocol Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/01_hardware_development/rdk_x5/can.md",sourceDirName:"07_Advanced_development/01_hardware_development/rdk_x5",slug:"/Advanced_development/hardware_development/rdk_x5/can",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x5/can",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/01_hardware_development/rdk_x5/can.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accessories List",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x5/accessory"},next:{title:"Display Usage",permalink:"/rdk_doc/en/Advanced_development/hardware_development/rdk_x5/display"}},d={},o=[{value:"Protocol Overview",id:"protocol-overview",level:2},{value:"Interface Description",id:"interface-description",level:2},{value:"Module Overview",id:"module-overview",level:2},{value:"Driver Guide",id:"driver-guide",level:2},{value:"Driver Code",id:"driver-code",level:2},{value:"can-utils Introduction",id:"can-utils-introduction",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Test Guide",id:"test-guide",level:2},{value:"Loopback Test",id:"loopback-test",level:3},{value:"CANFD Loopback Test",id:"canfd-loopback-test",level:3},{value:"Dual Device Communication Test",id:"dual-device-communication-test",level:3},{value:"Application Guide",id:"application-guide",level:2}];function l(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"can-usage",children:"CAN Usage"}),"\n",(0,i.jsx)(n.h2,{id:"protocol-overview",children:"Protocol Overview"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CAN"}),"\nCAN stands for Controller Area Network, which is a serial communication protocol standardized by ISO. It is widely used in real-time applications, utilizing twisted pair cables for signal transmission. It is one of the most widely used fieldbus technologies worldwide."]}),"\n",(0,i.jsx)(n.p,{children:"Advantages of CAN bus:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"High reliability and strong anti-interference capabilities"}),(0,i.jsx)(n.br,{}),"\n","The physical layer chip uses differential signals and twisted pair wiring for transmission, effectively mitigating electromagnetic interference. The hardware-based data link layer automatically resolves synchronization issues between multiple nodes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Strong error detection capabilities"}),(0,i.jsx)(n.br,{}),"\n","The hardware-based data link layer includes features like CRC and bit detection, ensuring near 100% detection of communication anomalies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Comprehensive error management"}),(0,i.jsx)(n.br,{}),"\n","If a message arbitration fails or is corrupted during transmission, it will be automatically retransmitted. Nodes with severe errors will automatically disconnect from the bus, without affecting normal operation of the network."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Real-time performance"}),(0,i.jsx)(n.br,{}),"\n","CAN bus supports high data transmission speeds and can handle large amounts of data in real time, meeting the needs of automotive electronic control systems."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Low cost"}),(0,i.jsx)(n.br,{}),"\n","The hardware cost for CAN bus systems is relatively low, reducing the overall cost of automotive electronic control systems."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Long communication distance and high message transmission speed"}),(0,i.jsx)(n.br,{}),"\n","Direct communication can cover up to 10 km (at rates below 4 kbps); the transmission speed can reach up to 1 Mbps, with a maximum distance of 40 meters at this speed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Multi-master communication support, lossless arbitration"}),(0,i.jsx)(n.br,{}),"\n","In the event that two nodes send messages simultaneously, the higher priority message will be transmitted without interference."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:'Eliminates the concept of "address"'}),(0,i.jsx)(n.br,{}),"\n","A key feature of CAN is the elimination of traditional address encoding, replaced by message-based communication."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"High flexibility and ease of network expansion"}),(0,i.jsx)(n.br,{}),"\n","The number of nodes on a CAN network is not limited. Adding new nodes does not affect the existing hardware and software of the network."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CAN FD"}),"\nThe need for higher performance in CAN networks led to the development of CAN FD (Flexible Data-rate). CAN FD maintains the advantages of standard CAN but addresses its shortcomings with the following features:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Extended data field"}),(0,i.jsx)(n.br,{}),"\n","CAN FD supports a data field of up to 64 bytes per frame, compared to the 8 bytes in standard CAN. This greatly increases data transfer capacity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dual bit-rate mode"}),(0,i.jsx)(n.br,{}),"\n","CAN FD supports dual bit-rate operation, using a nominal bit-rate (up to 1 Mbps) for the arbitration phase and a higher bit-rate (up to 5 Mbps) for the data phase, enhancing data transmission speed while maintaining compatibility."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Improved CRC and padding bit counter"}),(0,i.jsx)(n.br,{}),"\n","CAN FD introduces improvements in CRC and padding bit counters to enhance error detection and data integrity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Remote frame support removed"}),(0,i.jsx)(n.br,{}),"\n","CAN FD simplifies the frame structure by removing support for remote frames, making communication fully data-frame based."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"interface-description",children:"Interface Description"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img-20241009-1",src:s(19011).A+"",width:"1186",height:"733"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The RDK X5 provides a CAN communication interface, equipped with a 120-ohm terminal resistor switch. To enable the terminal resistor, simply close the switch."}),"\n",(0,i.jsx)(n.li,{children:"The terminal interface is of type SH1.0 1X3P."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"module-overview",children:"Module Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The RDK X5 integrates the ",(0,i.jsx)(n.strong,{children:"TCAN4550"})," chip.",(0,i.jsx)(n.br,{}),"\n","The ",(0,i.jsx)(n.strong,{children:"TCAN4550"})," is a CAN FD controller with an integrated transceiver supporting data rates of up to 8 Mbps. It complies with the ISO11898-1:2015 high-speed CAN data link layer specification and the ISO11898\u20132:2016 high-speed CAN physical layer requirements. The TCAN4550 interfaces between the CAN bus and the system processor via the Serial Peripheral Interface (SPI), supporting both classic CAN and CAN FD, and provides port expansion or CAN support for processors that do not support CAN FD. The TCAN4550 features differential transmission and reception capabilities for CAN FD transceivers."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports CAN at 1 Mbps and CAN FD at 2 Mbps."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"driver-guide",children:"Driver Guide"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"dts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'&spi5 {\n  status = "okay";\n  pinctrl-names = "default";\n  pinctrl-0 = <&pinctrl_spi5 &lsio_gpio0_7 &lsio_gpio0_12>;\n\n  tcan4x5x: tcan4x5x@0 {\n    compatible = "ti,tcan4x5x";\n    reg = <0>;\n    #address-cells = <1>;\n    #size-cells = <1>;\n    spi-max-frequency = <10000000>;\n    bosch,mram-cfg = <0x0 0 0 16 0 0 1 1>;\n    interrupt-parent = <&ls_gpio0_porta>;\n    interrupts = <12 IRQ_TYPE_EDGE_FALLING>;\n    reset-gpios = <&ls_gpio0_porta 7 GPIO_ACTIVE_HIGH>;\n  };\n};\n'})}),"\n",(0,i.jsx)(n.h2,{id:"driver-code",children:"Driver Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kernel\\drivers\\net\\can\\m_can\\tcan4x5x-core.c\n"})}),"\n",(0,i.jsx)(n.h2,{id:"can-utils-introduction",children:"can-utils Introduction"}),"\n",(0,i.jsx)(n.p,{children:"can-utils is an open-source toolset for the Linux operating system, specifically designed for tasks related to the CAN (Controller Area Network) bus. CAN bus is widely used in automotive and industrial automation for communication between devices."}),"\n",(0,i.jsx)(n.p,{children:"This toolset provides various command-line utilities for sending, receiving, and processing data on the CAN network. Some common tools include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"cansend"}),": Sends a single CAN frame."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"candump"}),": Captures and displays data passing through the CAN interface."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"canplayer"}),": Replays data recorded by ",(0,i.jsx)(n.code,{children:"candump"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"cansniffer"}),": Displays changes in CAN data."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"can-utils also includes advanced tools for tasks like configuring CAN hardware filters or debugging CAN devices and networks. These tools are accessible via the command line and can be easily integrated into scripts and automation systems."}),"\n",(0,i.jsx)(n.h3,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1. candump"}),"\nDisplays, filters, and records CAN data"]}),"\n",(0,i.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump can0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Display all CAN data through the can0 interface."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Filter by specific ID:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump can0,123:7FF\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Display CAN frames with ID 123."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Record data to a file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump -l can0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["This will record data passing through can0 to a file, with the default filename format as ",(0,i.jsx)(n.code,{children:"candump-YYYY-MM-DD.log"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2. canplayer"}),"\n",(0,i.jsx)(n.strong,{children:"canplayer"})," is used to replay CAN data logs recorded by ",(0,i.jsx)(n.code,{children:"candump"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"canplayer -I candump.log\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replay CAN data from the file ",(0,i.jsx)(n.code,{children:"candump.log"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3. cansend"}),"\nused to send a specified CAN frame."]}),"\n",(0,i.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cansend can0 123#1122334455667788\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Send a CAN frame with ID 123 and data ",(0,i.jsx)(n.code,{children:"1122334455667788"})," to the can0 interface."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4. cangen"}),"\nGenerate random or specific-patterned CAN traffic for testing or simulation purposes."]}),"\n",(0,i.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cangen can0 -I 1A -L 8 -D i -g 10 -n 100\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate 100 CAN frames with ID 1A, 8-byte length, and incrementing payloads on ",(0,i.jsx)(n.code,{children:"can0"}),", with a 10ms interval between each frame."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"5. cansequence"}),(0,i.jsx)(n.br,{}),"\n","Send a sequence of CAN frames with incrementing payloads and check for any frame loss."]}),"\n",(0,i.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cansequence can0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Send and monitor a sequence of CAN frames with incrementing payloads on ",(0,i.jsx)(n.code,{children:"can0"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"6. cansniffer"}),(0,i.jsx)(n.br,{}),"\n","Used to display changes in CAN data, which is very useful for debugging and understanding the data flow."]}),"\n",(0,i.jsx)(n.p,{children:"Basic usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cansniffer can0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Monitor and display any changes in CAN data on the ",(0,i.jsx)(n.code,{children:"can0"})," interface."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test-guide",children:"Test Guide"}),"\n",(0,i.jsx)(n.h3,{id:"loopback-test",children:"Loopback Test"}),"\n",(0,i.jsx)(n.p,{children:"Configure the CAN bus bitrate and enable loopback mode."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip link set down can0\nip link set can0 type can bitrate 125000\nip link set can0 type can loopback on\nip link set up can0\n"})}),"\n",(0,i.jsx)(n.p,{children:"View CAN0 Configuration Information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip -details link show can0\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img-20241009-2",src:s(57032).A+"",width:"1280",height:"194"})}),"\n",(0,i.jsxs)(n.p,{children:["To check the configuration details of the ",(0,i.jsx)(n.code,{children:"can0"})," interface, you can use the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump can0 -L &\n"})}),"\n",(0,i.jsx)(n.p,{children:"To send a test message and verify that data is immediately received, use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cansend can0 123#1122334455667788\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Test Results\n",(0,i.jsx)(n.img,{alt:"img-20241009-3",src:s(89073).A+"",width:"749",height:"86"})]}),"\n",(0,i.jsx)(n.h3,{id:"canfd-loopback-test",children:"CANFD Loopback Test"}),"\n",(0,i.jsx)(n.p,{children:"The arbitration segment bitrate is set to 500K, and the data segment bitrate is set to 2M."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip link set can0 down\nip link set can0 type can bitrate 500000 dbitrate 2000000  fd on\nip link set can0 type can loopback on\nip link set can0 up\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sending and Receiving CAN FD Data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump can0 -L &\ncansend can0 123##300112233445566778899aabbccddeeff\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dual-device-communication-test",children:"Dual Device Communication Test"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Hardware Connection"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"img-20241009-4",src:s(60862).A+"",width:"1011",height:"819"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GND to GND, L to L, H to H."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Test Instructions"}),(0,i.jsx)(n.br,{}),"\n","Configure both devices with the same CAN bus bit rate."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip link set down can0\nip link set can0 type can bitrate 125000\nip link set up can0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["One device should be configured to ",(0,i.jsx)(n.strong,{children:"receive"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"candump can0 -L\n"})}),"\n",(0,i.jsxs)(n.p,{children:["One device should be configured to ",(0,i.jsx)(n.strong,{children:"send"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cansend can0 123#1122334455667788\n"})}),"\n",(0,i.jsx)(n.h2,{id:"application-guide",children:"Application Guide"}),"\n",(0,i.jsx)(n.p,{children:"Linux provides a SocketCAN interface, which makes CAN bus communication similar to Ethernet communication. The application programming interface is more universal and flexible. Using SocketCAN is like using TCP/IP."}),"\n",(0,i.jsx)(n.p,{children:"Here is a simple example of sending and receiving CAN data:"}),"\n",(0,i.jsx)(n.p,{children:"Configure CAN Bus Bitrate and Loopback Mode"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ip link set down can0\nip link set can0 type can bitrate 125000\nip link set can0 type can loopback on\nip link set up can0\n"})}),"\n",(0,i.jsx)(n.p,{children:"write code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <unistd.h>\n#include <linux/can.h>\n#include <linux/can/raw.h>\n#include <sys/socket.h>\n#include <net/if.h>\n#include <sys/ioctl.h>\n#include <fcntl.h>\n\nint main() {\n  int sock;\n  struct sockaddr_can addr;\n  struct can_frame frame;\n\n  // \u521b\u5efa Socket\n  sock = socket(PF_CAN, SOCK_RAW, CAN_RAW);\n  if (sock < 0) {\n      perror("Socket");\n      return 1;\n  }\n\n  // \u83b7\u53d6 can0 \u63a5\u53e3\n  struct ifreq ifr;\n  strcpy(ifr.ifr_name, "can0");\n  ioctl(sock, SIOCGIFINDEX, &ifr);\n\n  // \u7ed1\u5b9a Socket\n  addr.can_family = PF_CAN;\n  addr.can_ifindex = ifr.ifr_ifindex;\n  bind(sock, (struct sockaddr *)&addr, sizeof(addr));\n\n  // \u53d1\u9001\u6d88\u606f\n  frame.can_id = 0x123;\n  frame.can_dlc = 4;\n  memcpy(frame.data, "\\xde\\xad\\xbe\\xef", 4);\n  write(sock, &frame, sizeof(struct can_frame));\n\n  // \u63a5\u6536\u6d88\u606f\n  while (1) {\n      int nbytes = read(sock, &frame, sizeof(struct can_frame));\n      if (nbytes > 0) {\n          printf("Received: ID: 0x%X Data: ", frame.can_id);\n          for (int i = 0; i < frame.can_dlc; i++) {\n              printf("%02X ", frame.data[i]);\n          }\n          printf("\\n");\n      }\n  }\n\n  close(sock);\n  return 0;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Compile and Run"}),"\n",(0,i.jsxs)(n.p,{children:["Save the code to a file named ",(0,i.jsx)(n.code,{children:"can_loopback.c"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"compile the program:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gcc -o can_loopback can_loopback.c\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run the Program"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ./can_loopback\n"})}),"\n",(0,i.jsx)(n.p,{children:"The code will send a CAN message and continuously receive and print the messages it receives."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},19011:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img-20241009-1-df79e2478230c1f512e3b70478e86776.png"},57032:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img-20241009-2-a8e89d8c8d2a68f2542c2f0432c88892.png"},89073:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu0AAABWCAIAAAD0Tj+vAAAYGUlEQVR4nOydOV5izxbHr28FmBl2iJmhoe6gl6CZmS7BJUjWGS6hd4DhPzSDsEMy2EG/zx3g1nCmGkBof99I4VB1Tg3nnhpu1f+aZObLv3//bhbPkszzYvP379/lPF9AzN38y0jXNl//t0OCjlBaFgAAAAA4I6Q4ZggBAoiIIDOOodPnow4yjpF/npoFAAAAAL6KjPmYs2Z2f3nxvvI/W71fXFw/fpVGAAAAADgi7oRF/sIQZjgAAAAAUMh3m48BAAAAAAAAAAAA+GowHwMAAACAcwVxDAAAAADOFcQxAAAAADhXEMcAAAAA4Fz5bnFM9jnC50pr8HAQ4HypnsP8Dfh2LaA2aFEAgJPiJOOYf+NRcxpW3FxNmvWfWavPj6tm+/l79rX6AA73qOnM4GA8m4lqdsFJ1XEe/mHXnA5Ki5J1KFey3AqbmY4kL0IKkCeCuyKqAKEnVVasAHdq+V5KFaAUJYpBFQDg26JHAHZXlJx0NU4ijnFGzO2fXx1VnQAnUS0R8aMt8aEQPJlC+5gH15gJLcA8upgWpehwKCVTrDCb6cpyVcEIVIljYpmgtCQBNkzZiagCnJauEqoAAEfiJOdjZNru83bz+XIx8PLR3L2h/5A4I+b57bTZrj+/WiNA8Lz4OR0uyOhb9LZpJndPyU26TaD7MfvtSHc7h5+JJ0B831halKxDZSWzrLCY2dbJ613z8bFi7ZAFth8vrp4Xl/ezBIH58mHqqxpcpiILzO4vL3z6b1f/PRoFwia5q7Lp7dwqAMDJMo5mx5CevD+aD895AcMooRMJx0fjh9FgO/xg/z83u21PYdTW18c4GBKyKIe/7DJ1pO+lFKvofU2Vg1BQpK6UCJuJMQuvrmvcUFq5HPovSMPSsf9UubjeTyipRVW87l69XT/JCrvAMNfEp84LlKq8ayi80qoAmaMkHwnExRJ8ogoAcDQy52N+LDZvd5Phn+nPXZdsW3I/TtgxfYj8sygg0w6BJtuP137osnetT1frpplc3dj1v12OWkwfcvre7XIsgMnd64FWhnsTv2rduc3dq63pg6fKfOl/PaHmxeSCCpNo04iW6LVMxCy8HKYPm6cr0WaKQ5fDzdWk8TeazP6sm6a5+nH4eme7zfypVfc0ZvDUvp1vBS0wXz5MV+/C5bGqQNsGxIGDINC1B2duJEIVCLW9nTbN9uMXKx8LzH5/br3ZleefNxM3T1UAgJNlGDpuNk7Xmy+Gv4fAIlqn3cuqAu6nzPL6IOv87aRqnE2JVApX2BNSYEMNdniSMB9TFseUvVkyFKsfhi7953f4OHflLQUVjxOfF5t4jT76xG0EYhZMC0yJXA9eDmP1jwP1/LGt9Zdk19P2nRlbVLX5mLyNtqU7fYMtQKkCpRtL9tNzrprxxIcgQFmrzv9oO6aJLFQBAE4SaUaT6vOew1IFhM/2v+8/dv6MF7vUKCR+0gVPnZQUxKjrQHEM96aC90StEcYkeSbfDktBKWEF+RRxPtSziFKoPyUfk1gOXxHHEMFZoz/grS2qUhzDKFlqhSLgWUa1QE0gCGt3mY3WKgJD4SzDaCdc0uEFCGMrhDFRBqoAAMchb12JnKd9/nHVNMMbmXvcCXJVQKH7fZ+18+c+jQRcHfr50VQCKw7F4zW1R7BbXhv/nT7s/cjDtLmf7YKDt7vJbvb6YbqbyLZGM31labPEvid7c7UakAvq8brfXzia4MUcnQ7uBPzOFmsWcZNLre7jlMNAV93RjtDa7Bd3V+9hXs7+z/dVW/LejGdZi6qmZK4VJoFuA+3qN18HqkDzeO0pNLu/7Br5uASjCrRMp827vwt3XL+3CQzl1C/38AozAvNuHdTfxustwasCAByLvDjmSE9xwLF2XnZw3/3YfrweT4n5knxip9FHaqMVh9trdDBKy4EK5fstMwfYnLJTdvvxciFs72grpq2SnLemylGVrGeFLzC8hDOG1V2k1Mdr3QNaFSD5XCuxsyfQtwdv983jr+4VtmEXkCrgllS3/0eIwxmBbseMm8Xs/vXD3RCjCgBwNCq+d03OrLgDYlUgMa99r+3TIOl3xIW4OvTDER46haqkZjG7v3YGT+47lN04rw8NWvc8vNvZDtZ2r3laR/t9ZQlOqffo3tuj4uu2qk2XuxeO9854568vYoxmxE1Oq246hcOWQ/cUm9z8DGeiag8XdlMYrbJJsz5VWlQtJbOt+DrUDu4LpIU9Il20IYYxtIDgUo0CAJwu4sJ2tCszXL9WBdxM4vlqd1MMvc832FASL02r+3yNKRh2t/Dr0loWnGQS4yFlzq6G1ASE/a3Mto+k18ufFxt57wpp/3zp7/OVsjj8Pt9K5RD/InOGXtxcxiba/oo8PyHoGbYWlb0/Rlay3AqLmXF+Se9QB22abA+yAPtuAf82ArcfOv8V8FrvbABwgsgeKt74Re+y5AVoMfcQC3cpe/f1MtgAPCa9XJJ7KoMtcuTeUzkFwy5dfje/kkWoS45rqHGQL/FeBfG85uywP7//8pXBnFtijmOiBITC/rpyoLJIrXS6oNyeQzNGJtLvbS1K1qFYyXIrDGYSFqXGMXIOqgBnqdSsSSuyd/jyasZDBGtJAnA46p7nO7u/DA6eXL17c7+qwF7snTon8/G/lbPWvdtacXF93f7Vr9T26927tC9/0TuA//Ok/CV2WwoGOCsqZsFS5SDftoA9C7wtlbP7S2cBZfvxkm4H2Rz8/Q6RDkyTkYwYf59X2Acvhy4Lf5/Ty3GXTOKa6Bf0xso4h6OhVSt0M2voEK4r+jmoAk3YahtiI5AqsFtCFa5UEwXiogqyUAUAAAzeC9cAAAAAAGeFOlsKAAAAAHDKzLVbnAAAAAAAAAAAAABOlLr7fAEAAAAAjgfiGAAAAACcK4hjAAAAAHCufLc4Jv8e4TOl7NJrL5nvVGzgUJS0QhBQqXcDAKpzwGDjiHHMaYRMxdcTNHIU457qKZxvzgsECVEi3smhlBqKQHB8spsDd8CrdHoqoaKfDH3sfOHZp1IWNiXVggqPPtYOgtVKQtDhq7uFgm6FyliYhpOPtSPNpWsThN4t61CuZLkVNjMby7UHpAB5ArQrogoQeia5ILX757ggqhhUAXBk9AjA3vyTk67GScQxNa4n4M8eVE7Tp3ooU1d7UcEXM25EESAdlXpQvXKOvH4QfXgXjpiFhpaFrajFgmK0JKuLrSzj7QonPnVQfEdEUJb0dQFCUevV7WjK9G5Fh0MpmWKF2UzRP8gCVeKYIhekdn+Lf5CdmEUAHB85AghvNEmKF75ZHFNl3pkLY7TbDZmb5JhR2WaxIO6yie91nC/JMIURiJRS72DsE0ywIrp70HjZYULLULMwFLWhoMgrfiI12cqy33Z5yodyV7izcz/jRLsAtaitLUrq3YoOB1Ay2Qp7x+H9gyaQf1FmqFW2C2ISFCRCAdWJpXu5787Y6McwUrrhjChJXsA6OA6b3fiheiff/n9uRtWewqitcR3Bd41CFuXwF+qljy7lMCaeFGDNZNcUhrFk7FLU7mgUiBsZ+wvah1isyM4ih9SiznJspI9XKotvD1HK2SXgtW5lGZHqm0LnTbJCxf5T5XHqJ5TUu1UdqimZaIVdgG1yukBxHFPugsgcU8IY3Ykle7l/jsx9vj8Wm7e7yfDP9OeuGbSl9zB1BacPkU8QBWSeF693k+3Ha3+F3r47P12tm2ZydWPX/3Y5ajF9yKnv2+VYAJO71wPNkuffd11PhdtpQ94KeHMVXjI3+7Numubqh6JtIDBfPkxX7+T9cl0Wzeo/9u45VWD2+3PbNNPbMS7p7sZjf9Fb+/FLv+2ON3P+1LYM9iJFexY8ShaxkmpBsfj9SqssY3v4XPu1YqftEZ4HmT543WO+9L+e3L3F3VvovNmtugKsC7NW9zFQ/Wy+FbSA0OSMAm0bEAdxgkC5Cwq11bp/LKA6sVQvB4bhymbjVPd8MfzNzG6PTUMVcD9lpkIHWedvJ1XjbEqkUriqm5ACG2qwIXHCfExZHFNjVclgxTikIYeNcdGFC7uOjsRIeLN4dqe44lGHIOBly4/go/QaX0HVijATbUxaUBVkFpqStoIiswvXpuTKktqDiz6dTzLY6ee79EuCKJiNO9ASO2+aFRrWX5JuUGtRxt5dbT6G9tWlVmgCUpMzCJRuLKnkgmLxVAHVidm93L9I3nzMZP378n4/Ynm8H+ZH+kDyxb2i/vVjO0boqoBCF/qu/8x2ofvqd5fx46/gGnyV/ZTO7seTm59pLnVMYUggZTaoHK/ROi3W8+JtUD6MLNuSFy7w18gbCQ71Mn3YKfp2s175NdUOpZzKIFlfPY2jZ2r6TBHoxyYO7DxALxmUk8GKBMgsyrEpqZakw7yfsnArx1JZh6VzIM3q3XE+zez+2tXo8frS+5fqnV/ceUOIojZQr3fXUTLPCjVXpcnpbXL78XKx52XoJm67VwXKXdAetftzAqoTs3s5IMeTdFzvxMiqgJySOwUTbJPZL7fbd7eQySbtj1G0rTIfQ8PuwGlLsu7mGHpDEqc0t067j7eICRt3dxzzEo4XqLlGqAKGPXOyRQYrIoRJtFrL1lQWkpKGgqJSigauamVp7YH9uQVb6VG9w7w1Lc2KcoXJoo5w6yq1d1eYj1GVTLfCJKA1OV2AzcS6PaWGCxop2SAkOrEEL/dvkjcf08+JgC9j7YwhXpzZqO3H6yGyowas1LaBfnOBO3kzu7/cK3r9OIw2eoHnxc+pN4fQ7Wvol6r7Dthn4S19+wNoVaAfwbsCwwwgMVrpV+fJNWXBCoLH67ZKJndPKVmkQWUhKakX1Kjj8u8wsH65GMWtlaW1h0Oz0z6Xo1pBFzUB36IOj6pkPSt8AbXJ6W2SotuaJeEJVHBBTklp3Z8RUJ1Ygpf7R6l4ni+5H+75x9U+7lEFEvPat5Q+DZJ+F1aIq0M0IWdKoSqpWfhT6e7zq5tTf7zehTfDlOn7apw9vUyc9VX2anoLclpdDkVtr+w0n0PlyLeMkGHNQo8xkq1Iz6KcUEm1JPtfDdvw28aS2lCS2kNBr5ecc/9kIxYKDmNFCdlFXbV3lypZ1GC+BtXZ+gLFLmhE7f6MgOrEErwc6BFnxqLdhuG2PFXAzSSemHOnEel9vuqkn7rP15iCeV2Jml5UZyYZySTmNQ7ybeLJ25Fg8pKYy/T2YMbHLFAZySuM0VZCTcC4s1yck5ateObO0UjJwvtlJGLJQitqtST50zt4VXPPj8l+71rZ5xt1ubBvGTpvghUqnGuQi9pS3fbenb2upLaHQivsHcf9Oukd6ufFhl57dWpXFqjggvLV976o4uXAgNwryI0b1I4HVoAWczdUhFsf2q+Xo1v0l483yyW5/r1ckuk39hQMu1v4HeRKFqEuOc1xXuMgX0cJ/nEk1CVR3drCdGgrtR1AqK5IgN5LFGohvkYgW8FtVkrKwrOFjGO0LPSilguK33ZB15ixsmh7c8MYWk8ibhm/8/uWqfNarUhSMtwWJhS1oboNvVvWoVjJciusHcdXODWOkXNQBThLU1yQk1PGi0q8msleDuzRN4X5lUpIqgKx1F7I4gDHOiW2ZO7/96SyUrAUCW2FlkX4+4w45rnmBXJSqbs9SBhLWPoV56e8QtTyUBPg90KqOxCNTVoIapV6EKrbkIVe1EJBVYljDO2hqdAi2V4VKNDm4fcta+e1WGFVMNLUUtRydVt691fHMboVtlYdCKdOaPCDSatApGeOCyoKY+IcsrwcOCEKhnIgl66TodBBDdCYAADfHdPIFtQFDx9Qh/LpQQAA+BewLU4BAAAAAAAAAAAAnB4Vz48BAAAAADgqiGMAAAAAcK4gjgEAAADAuZIdx+AFFlAHvMBSkarnBgEAwL+LEMWkHIxmOFBbuDdUeFlJERCODOJOmZSOcFSOAzOccpvz3pWUhU1JtaCCY6qCJMiTsFwZVcDR4cRD4sKD0RqvNAzHr2pnXEtHzAnn1cs6lCtZboXNzMZy9jopULXRSmXFCqjdP8cF4WA0AFJhD6NTjvSmeqh2GLzgixk3ogiQjko9LVs5zFo/DTu8kEPMQkPLwlbUYkExWsYX8vB5GB8JJz91UHxQfVCWwhG0dCZ6dTuaMufVKzocSskUK8xmiv5BFqjSaItckNr9Lf5BdmIWAQC+OVwYo12xxlxnxYzKNosFcc70PLoCb74kwxRGIFJKvQiuTzDBiugCNPlCNSILFTULQ1EbCoq8Z8TPI+viM1ryRL2s1qqtSbS/oI/BV4va2qKkVSVFhwMomWyFvePw/kETqNBoS10Qk6AgEQqoTizdywHwzZDDmHhSgL3chF1TGMaSsUtRu6NRIB6osr+gfYjFiuwsckgt6izH5ldIxTimMJARL9wR19eI+7bIC1r4Vp2E/adK2fkJ8XfdEImoOlRTMtEKuwDrH3SB4kZb7oLIHFPCGN2JJXs5AM6ZjH2+89tp02zXn9EXN1eTptl+/p7tP5n9WTdNc/VDeZIFAvPlw3T1fv1ISHZZNKv/qO9sArPfn9ummd6OccnPm4nwi97aj19sgpwVbhpPdxO6yBKz4FGyiJVUC4plcnXj/nf3xj4xbQIdn2u/Vuy0Tv5h6nwwffCymS/9r1t9Ind+u3xry28QeHV/n92qK+AXtYO1uo8Bq6QqoFpBCwj+wShQ0mjLXVCordb9YwHViaV6OQC+GWxgP34xDmnIYWO8VBwu7Dpz48RIeLN4dpeQ41GHIOBly4/go/QaX0HVCvuGxYLrooQsNCVtBUVm58/HhOSu0SfM3UQ/CxvJ0i8JomD2H+3M330Q3Titt+oUrL8kt6hqLUpaVUrRoUjJYis0Ack/GARKG20lFxSLpwqoTszu5QA4czLfu84bCT7++th2A+Zd13q7Wa+2nkg7lNp+vN7PhGTWV0/j6LlLLuiiikA/NnFg5wF6SW8wbrIiATKLcmxKqiXpMO+nLLzK2X68XOx5GXJ0k1AFCumGqs3q/dJpMLP7a7f5PF5fev92BRNMEYxGkV8fG6qoddqWNLSjtliqN6lUJfOsUHNV/IPuQGo02lIXtEft/pyA6sTsXg6A70cX5vMvQ1OTEvFwZT9CICZsgh211Es4ToL+AFoVMOyZky0yWBERDfItWaRBZSEpaSgoKiVF0fSVfv+b1PkYW+lR73+wG4nCD2ytup7CtqJ26yppc0yd+RhVyXQrTAKaf9AF2EysjbaGCxop2SAkOrEELwfAN4Tvehm76rxJU+p5Ezx3iO2gYiSUIRAob+n6+tJQcRY6mksMlLSXw+45aQgyCh6Rh4pjmKe8OY7J2iuaq3BWUR87jlGVPFSDUf2DwYGU6nBkD8MI1NQBgPMnfV2J3+XY7dWc3Px05k9+XDVNs/4jT5oKAmQWJQK9RiaGNQt9a1yyFelZlBMqqZZk/6vFptslu/14ubjUlwf6LY45AlpLoenbojBh/rz4OSUXCuykt+o8Eot65PF6Z9Zg5/tqNDkppQpKZlvxdSQ22mIXNKJ2f0ZAdWIJXg6Abwr7jmwweUnMZXp7MONjFqiMmPdk/SzDw7Z4AW4DLH3cHnc4hWTFM3eORkoW3i8jEUsWWlGrJakce/O82NDLWE71ywKR/hmDRWWfbzRTRiipzMcYWrUdeWAuFLVa3XP5IF+DDoVKllth7zju10nvUNdotMUuKF9974sqXg6Abwv/0InnuKWXFRS3SPdjahrdS0MRoCefQy3EpSLZCm52OykLzxYyjtGy0ItaLih+uUKc5Y9cp1YMY2Z5oQGhJxG3jN8tl5u0OEZv1VlKhqsA6UUdrn45L+mwoaKWRr6S5VZYO46vcGocI+dgarSlLsjJKeNFJV7NZC8HwHdGeuy4PUgYS1j6Feen5vy5ZjYB38+wewjUHYisFaEjI0QsYYy0E9KQhV7UQkGpz63YWUZ5qAJOXiVDRU9X+oGxt9APVExxjKFVpygYaWooaqW6nw2vXH91HKNbYWvVgXDqhEadRlvsgorCmDiHLC8HwPem62SI7kEN0JgAAAAcHTx8QB1KJ2MAAAAAAAAAAICzI/M8XwAAAACALwdxDAAAAADOFcQxAAAAADhXEMcAAAAA4FxBHAMAAACAcwVxDAAAAADOFcQxAAAAADhXEMcAAAAA4FxBHAMAAACAcwVxDAAAAADOFcQxAAAAADhXEMcAAAAA4FxBHAMAAACAcwVxDAAAAADOFcQxAAAAADhXEMcAAAAA4FxBHAMAAACAc+X/AQAA///qGR3fGJ+4uAAAAABJRU5ErkJggg=="},60862:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/img-20241009-4-1df1ee0777684ba8c0122001050cfa10.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(96540);const a={},r=i.createContext(a);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);