"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[4834],{90244:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var i=o(74848),d=o(28453);const a={sidebar_position:1},s="3.2.1 Audio Adapter Board On RDK X3",t={id:"Basic_Application/audio/audio_board_x3",title:"3.2.1 Audio Adapter Board On RDK X3",description:"Video//www.youtube.com/watch?v=Jt7eaEe2QbQ&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=9",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/02_audio/audio_board_x3.md",sourceDirName:"03_Basic_Application/02_audio",slug:"/Basic_Application/audio/audio_board_x3",permalink:"/rdk_doc/en/Basic_Application/audio/audio_board_x3",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/02_audio/audio_board_x3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3.1.2 Using USB Camera",permalink:"/rdk_doc/en/Basic_Application/Image/usb_camera"},next:{title:"3.2.2 RDK X3 Module\u97f3\u9891\u677f\u4f7f\u7528\u6307\u5357",permalink:"/rdk_doc/en/Basic_Application/audio/audio_board_x3_md"}},r={},c=[{value:"WM8960 Audio HAT",id:"wm8960-audio-hat",level:2},{value:"Product Introduction",id:"product-introduction",level:3},{value:"Installation Method",id:"installation-method",level:3},{value:"Uninstalling Method",id:"uninstalling-method",level:3},{value:"Audio Nodes",id:"audio-nodes",level:3},{value:"Recording and Playback Test",id:"recording-and-playback-test",level:3},{value:"Coexistence of Audio Subboard and USB Sound Card",id:"coexistence-of-audio-subboard-and-usb-sound-card",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"321-audio-adapter-board-on-rdk-x3",children:"3.2.1 Audio Adapter Board On RDK X3"}),"\n",(0,i.jsxs)(n.p,{children:["Video: ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Jt7eaEe2QbQ&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=9",children:"https://www.youtube.com/watch?v=Jt7eaEe2QbQ&list=PLSxjn4YS2IuFUWcLGj2_uuCfLYnNYw6Ld&index=9"})]}),"\n",(0,i.jsxs)(n.p,{children:["The RDK X3 currently supports ",(0,i.jsx)(n.strong,{children:"WM8960 Audio HAT"}),". This board are designed to meet the functional requirements of different voice scenarios. The following will provide detailed instructions on how to use this audio board."]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(n.p,{children:["If you are prompted that the Miniboot version is not the latest after installing the driver, please go to ",(0,i.jsx)(n.code,{children:"1 System Options"})," -> ",(0,i.jsx)(n.code,{children:"S7 Update Miniboot"})," to update Miniboot."]})}),"\n",(0,i.jsx)(n.h2,{id:"wm8960-audio-hat",children:"WM8960 Audio HAT"}),"\n",(0,i.jsx)(n.h3,{id:"product-introduction",children:"Product Introduction"}),"\n",(0,i.jsx)(n.p,{children:"WM8960 Audio HAT is an audio adapter board produced by Waveshare, using the WM8960 Codec solution, and can achieve dual channel microphone recording and audio playback functions. The appearance of the adapter board is as shown in the figure below:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-audio-wm8960",src:o(79745).A+"",width:"390",height:"247"})}),"\n",(0,i.jsx)(n.p,{children:"This audio sub-board is only compatible with RDK X3 version 2.0, and the version number can be queried as follows. The return value 8 indicates that the device is 2.0 version."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:/userdata# cat /sys/class/socinfo/som_name\n8\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a detailed introduction to the audio adapter board, please refer to ",(0,i.jsx)(n.a,{href:"https://www.waveshare.net/wiki/WM8960_Audio_HAT",children:"WM8960 Audio HAT"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-method",children:"Installation Method"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Connect the adapter board to the 40-pin header of RDK X3 as shown in the following picture",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"image-wm8960-audio-hat-setup",src:o(70363).A+"",width:"425",height:"266"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the audio board using ",(0,i.jsx)(n.code,{children:"srpi-config"}),(0,i.jsx)(n.br,{}),"\n","Enter ",(0,i.jsx)(n.code,{children:"3 Interface Options"})," -> ",(0,i.jsx)(n.code,{children:"I5 Audio"}),(0,i.jsx)(n.br,{}),"\n","Select ",(0,i.jsx)(n.code,{children:"WM8960 Audio HAT"}),":\n",(0,i.jsx)(n.img,{alt:"image-audio-driver-hat-config00",src:o(59044).A+"",width:"1189",height:"465"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the command ",(0,i.jsx)(n.code,{children:"sync && reboot"})," to restart the development board. If the device nodes like the following appear under /dev/snd, it indicates that the adapter board is installed successfully."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:~# ls /dev/snd/\nPlayback   controlC0  pcmC0D0c  pcmC0D0p  pcmC0D1c  pcmC0D1p  pcmC1D0c  pcmC1D0p  timer\n```by-path  controlC0  pcmC0D0c  pcmC0D0p  pcmC0D1c  pcmC0D1p  timer\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"uninstalling-method",children:"Uninstalling Method"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configure the audio board using ",(0,i.jsx)(n.code,{children:"srpi-config"}),(0,i.jsx)(n.br,{}),"\n","Go to ",(0,i.jsx)(n.code,{children:"3 Interface Options"}),"->",(0,i.jsx)(n.code,{children:"I5 Audio"}),(0,i.jsx)(n.br,{}),"\n","Select ",(0,i.jsx)(n.code,{children:"UNSET"})," to uninstall the audio driver and related configurations"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"audio-nodes",children:"Audio Nodes"}),"\n",(0,i.jsxs)(n.p,{children:["The playback node for this audio board on the ",(0,i.jsx)(n.code,{children:"RDK X3"})," is ",(0,i.jsx)(n.code,{children:"pcmC0D1p"}),", and the recording node is ",(0,i.jsx)(n.code,{children:"pcmC0D0c"})]}),"\n",(0,i.jsx)(n.h3,{id:"recording-and-playback-test",children:"Recording and Playback Test"}),"\n",(0,i.jsxs)(n.p,{children:["The test uses the toolset of ",(0,i.jsx)(n.code,{children:"tinyalsa"})," library: use ",(0,i.jsx)(n.code,{children:"tinycap"})," for recording and ",(0,i.jsx)(n.code,{children:"tinyplay"})," for playback"]}),"\n",(0,i.jsxs)(n.p,{children:["Usage of ",(0,i.jsx)(n.code,{children:"tinycap"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tinycap\nUsage: tinycap {file.wav | --} [-D card] [-d device] [-c channels] [-r rate] [-b bits] [-p period_size] [-n n_periods] [-t time_in_seconds]\n\nUse -- for filename to send raw PCM to stdout\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Usage of ",(0,i.jsx)(n.code,{children:"tinyplay"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"tinyplay\nusage: tinyplay file.wav [options]\noptions:\n-D | --card   <card number>    The device to receive the audio\n-d | --device <device number>  The card to receive the audio\n-p | --period-size <size>      The size of the PCM's period\n-n | --period-count <count>    The number of PCM periods\n-i | --file-type <file-type >  The type of file to read (raw or wav)\n-c | --channels <count>        The amount of channels per frame\n-r | --rate <rate>             The amount of frames per second\n-b | --bits <bit-count>        The number of bits in one sample\n-M | --mmap                    Use memory mapped IO to play audio\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you want to learn more about the ",(0,i.jsx)(n.code,{children:"tinyalsa"})," library, please refer to their ",(0,i.jsx)(n.a,{href:"https://github.com/tinyalsa/tinyalsa",children:"repository"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Recording with a 2-channel microphone:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"tinycap ./2chn_test.wav -D 0 -d 0 -c 2 -b 16 -r 48000 -p 512 -n 4 -t 5\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Playback of stereo audio:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"tinyplay ./2chn_test.wav -D 0 -d 1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"coexistence-of-audio-subboard-and-usb-sound-card",children:"Coexistence of Audio Subboard and USB Sound Card"}),"\n",(0,i.jsx)(n.p,{children:"If you have a USB sound card and want it to coexist with the above-mentioned audio subboard, please follow the steps below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make sure the audio subboard is functional according to the tutorial above."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Connect the USB sound card and observe the newly added nodes under ",(0,i.jsx)(n.code,{children:"/dev/snd"})," after the driver is loaded. Taking ",(0,i.jsx)(n.code,{children:"WM8960"})," + USB ",(0,i.jsx)(n.strong,{children:"full-duplex"})," sound card as an example:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"    root@ubuntu:~# ls /dev/snd/\n    by-path  controlC0  pcmC0D0c  pcmC0D0p  pcmC0D1c  pcmC0D1p  pcmC1D0c  pcmC1D0p  timer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pcmC1D0c pcmC1D0p"})," nodes are for the USB sound card, and they share a full-duplex node."]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Modify ",(0,i.jsx)(n.code,{children:"/etc/pulse/default.pa"})," and add the corresponding node information below ",(0,i.jsx)(n.code,{children:"load-module module-alsa-source"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-apacheconf",children:"...\n\n.ifexists module-udev-detect.so\nload-module module-alsa-sink device=hw:0,1 mmap=false tsched=0 fragments=2 fragment_size=960 rate=48000 channels=2 rewind_safeguard=960\nload-module module-alsa-source device=hw:0,0 mmap=false tsched=0 fragments=2 fragment_size=960 rate=48000 channels=2\nload-module alsa device=hw:1,0 #corresponding to the above nodes\nload-module module-alsa-source device=hw:1,0 #corresponding to the above nodes\n.else\n\n...\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Save the configuration and reboot the development board."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},59044:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/image-audio-driver-hat-config01-240f8abdb8ff30263cbecee0fc125d89.png"},79745:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/image-audio-wm8960-e22ac0685b4ea89d5131a8dc9444d75a.jpg"},70363:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/image-wm8960-audio-hat-setup-3fcf19217053dd36f2deb388cccd72ce.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>t});var i=o(96540);const d={},a=i.createContext(d);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);