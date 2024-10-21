"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[8267],{27490:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var d=i(74848),r=i(28453);const c={sidebar_position:3},s="3.2.3 RDK X5 \u7cfb\u5217\u97f3\u9891\u4f7f\u7528\u6307\u5357",o={id:"Basic_Application/audio/audio_board_x5",title:"3.2.3 RDK X5 \u7cfb\u5217\u97f3\u9891\u4f7f\u7528\u6307\u5357",description:"RDK X5 \u96c6\u6210\u4e86ES8326\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u5bf9\u63a5\u79cd\u97f3\u9891\u677f\u6765\u6269\u5c55\u97f3\u9891\u529f\u80fd\uff0c\u6ee1\u8db3\u4e0d\u540c\u8bed\u97f3\u573a\u666f\u7684\u529f\u80fd\u9700\uff0c\u4e0b\u9762\u5c06\u5bf9\u677f\u8f7d\u97f3\u9891codec \u548c \u97f3\u9891\u677f\u7684\u4f7f\u7528\u65b9\u6cd5\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002",source:"@site/docs/03_Basic_Application/02_audio/audio_board_x5.md",sourceDirName:"03_Basic_Application/02_audio",slug:"/Basic_Application/audio/audio_board_x5",permalink:"/rdk_doc/en/Basic_Application/audio/audio_board_x5",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/02_audio/audio_board_x5.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"3.2.2 RDK X3 Module\u97f3\u9891\u677f\u4f7f\u7528\u6307\u5357",permalink:"/rdk_doc/en/Basic_Application/audio/audio_board_x3_md"},next:{title:"3.3.1 Pin Configuration and Definition",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/40pin_define"}},a={},l=[{value:"\u677f\u8f7dES8326",id:"\u677f\u8f7des8326",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:3},{value:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5",id:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5",level:3},{value:"Audio Driver HAT REV2",id:"audio-driver-hat-rev2",level:2},{value:"\u4ea7\u54c1\u7b80\u4ecb",id:"\u4ea7\u54c1\u7b80\u4ecb",level:3},{value:"\u5b89\u88c5\u65b9\u6cd5",id:"\u5b89\u88c5\u65b9\u6cd5",level:3},{value:"\u5378\u8f7d\u65b9\u6cd5",id:"\u5378\u8f7d\u65b9\u6cd5",level:3},{value:"\u97f3\u9891\u8282\u70b9",id:"\u97f3\u9891\u8282\u70b9",level:3},{value:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5",id:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5-1",level:3}];function t(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"323-rdk-x5-\u7cfb\u5217\u97f3\u9891\u4f7f\u7528\u6307\u5357",children:"3.2.3 RDK X5 \u7cfb\u5217\u97f3\u9891\u4f7f\u7528\u6307\u5357"}),"\n",(0,d.jsx)(n.p,{children:"RDK X5 \u96c6\u6210\u4e86ES8326\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u5bf9\u63a5\u79cd\u97f3\u9891\u677f\u6765\u6269\u5c55\u97f3\u9891\u529f\u80fd\uff0c\u6ee1\u8db3\u4e0d\u540c\u8bed\u97f3\u573a\u666f\u7684\u529f\u80fd\u9700\uff0c\u4e0b\u9762\u5c06\u5bf9\u677f\u8f7d\u97f3\u9891codec \u548c \u97f3\u9891\u677f\u7684\u4f7f\u7528\u65b9\u6cd5\u8fdb\u884c\u8be6\u7ec6\u4ecb\u7ecd\u3002"}),"\n",(0,d.jsx)(n.admonition,{title:"\u63d0\u793a",type:"note",children:(0,d.jsxs)(n.p,{children:["\u5982\u679c\u5b89\u88c5\u9a71\u52a8\u540e\u63d0\u793aMiniboot\u7248\u672c\u4e0d\u662f\u6700\u65b0\uff0c\u8bf7\u8fdb\u5165",(0,d.jsx)(n.code,{children:"1 System Options"})," -> ",(0,d.jsx)(n.code,{children:"S7 Update Miniboot"})," \u66f4\u65b0miniboot"]})}),"\n",(0,d.jsx)(n.h2,{id:"\u677f\u8f7des8326",children:"\u677f\u8f7dES8326"}),"\n",(0,d.jsx)(n.p,{children:"\u677f\u8f7dAudio codec es8326\u53ef\u63d0\u4f9b\u57fa\u7840\u7684\u97f3\u9891\u529f\u80fd\uff0c\u9700\u8981\u63d2\u4e0a3.5mm\u97f3\u9891\u63a5\u53e3\u624d\u80fd\u6536\u97f3\u548c\u64ad\u653e\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528amix\u6216\u8005tinyalsa\u7b49\u7528\u6237\u7a7a\u95f4\u7684\u63a5\u53e3\u6765\u4f7f\u7528\u3002",(0,d.jsx)(n.strong,{children:"\u6ce8\u610f\uff01\uff01\uff01"})," \u8c03\u6574\u589e\u76ca\u6216\u8005\u6d4b\u8bd5\u7684\u65f6\u5019\uff0c\u6700\u597d\u4e0d\u8981\u6234\u8033\u673a\u64cd\u4f5c\u547d\u4ee4\uff0c\u4ee5\u514d\u7a81\u7136\u566a\u58f0\u6216\u8005\u54cd\u5ea6\u8fc7\u5927\u635f\u5bb3\u542c\u529b\u3002",(0,d.jsx)(n.strong,{children:"\u4fdd\u9669\u7684\u64cd\u4f5c\u65b9\u6cd5\u662f"}),"\uff1a\u547d\u4ee4\u5148\u6267\u884c\uff0c\u89c2\u5bdf\u54cd\u5ea6\u6216\u8005\u566a\u97f3\u5728\u627f\u53d7\u8303\u56f4\u5185\u518d\u5bf9\u6bd4\u89c2\u5bdf\u3002"]}),"\n",(0,d.jsxs)(c,{children:[(0,d.jsx)("summary",{children:"\u6709\u5173 amixer \u7684\u90e8\u5206\u4f7f\u7528\u6ce8\u610f\u70b9\u53ef\u4ee5\u70b9\u51fb\u67e5\u770b"}),(0,d.jsx)(n.p,{children:"\u6211\u4eec\u53d1\u73b0\u6709\u4e9b\u5c0f\u4f19\u4f34\u5728\u4f7f\u7528\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u63d2\u4e0a\u4e00\u4e9bUSB\u97f3\u9891\u8bbe\u5907\uff0c\u5bfc\u81f4\u590d\u5236\u7c98\u8d34\u4e0b\u6587\u7684\u53c2\u8003\u547d\u4ee4\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\u3002"}),(0,d.jsxs)(n.p,{children:["\u5d4c\u5165\u5f0f\u97f3\u9891\u8bbe\u5907\u4e2d\u4e00\u822c\u901a\u8fc7 ",(0,d.jsx)(n.code,{children:"cat /proc/asound/cards"}),"\u53ef\u4ee5\u770b\u5230\u6709\u591a\u5c11\u5f20\u58f0\u5361\uff0c\u6bcf\u5f20\u7684\u5e8f\u53f7\u3002\n\u63d2\u4e0aUSB\u8bbe\u5907\u4e4b\u540e\u91cd\u542f\uff0cUAC\u8bbe\u5907\u58f0\u5361\u9996\u5148\u6ce8\u518c\u4e0a\uff0c\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u53ef\u80fd\u51fa\u73b0\u5982\u4e0b\u6253\u5370\uff1a"]}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"  0 [RC08           ]: USB-Audio - ROCWARE RC08\n                      ROCWARE RC08 at usb-xhci-hcd.2.auto-1.2, high speed\n  1 [duplexaudio    ]: simple-card - duplex-audio\n                      duplex-audio\n"})}),(0,d.jsx)(n.p,{children:"\u6b64\u65f6\u6211\u4eec\u53d1\u73b0\u677f\u8f7daudio\u58f0\u5361\u7684\u5e8f\u53f7\u53d8\u4e3a\u4e861\uff0camixer\u6216\u8005tinymix\u5728\u6ca1\u6709\u6307\u5b9adevice\u548ccard\u7f16\u53f7\u7684\u65f6\u5019\uff0c\u9ed8\u8ba4\n\u90fd\u662f\u4f7f\u7528\u5e8f\u53f7\u4e3a0\u7684\u8bbe\u5907\uff0c\u6240\u4ee5\u6b64\u65f6\u6211\u4eec\u5728\u67e5\u770b\u677f\u8f7d\u58f0\u5361\u7684controls\u7b49\u5c5e\u6027\u7684\u65f6\u5019\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"  amixer -D 0 -c 1 controls\n"})}),(0,d.jsx)(n.p,{children:"\u6b64\u65f6\u5982\u679c\u6211\u4eec\u60f3\u8981\u901a\u8fc7amixer\u8c03\u6574\u9ea6\u514b\u98ce\u589e\u76ca\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6765\u5c1d\u8bd5\u8bbe\u7f6e\uff1a"}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"  amixer -D 0 -c 1 sget 'ADC PGA Gain',0\n"})})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5",children:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5"}),"\n",(0,d.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u7b80\u5355\u6d4b\u8bd5\u4e00\u4e0b\u662f\u5426\u80fd\u6b63\u5e38\u5f55\u5236\u548c\u64ad\u653e\u58f0\u97f3\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u5f55\u5236\u547d\u4ee4\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"# arecord -Dhw:0,0 -c 2 -r 48000 -f S24_LE -t wav -d 10 /userdata/record1.wav\nRecording WAVE '/userdata/record1.wav' : Signed 24 bit Little Endian, Rate 48000 Hz, Stereo\n#\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u89c2\u5bdf\u5230\u5c4f\u5e55\u8f93\u51fa\u6b63\u5e38\u7684\u5f55\u5236log\uff0c\u7b49\u5f85\u5927\u698210s\uff08-d 10 \u4e2d\u768410\u4ee3\u886810\u79d2\uff09\uff0c\u5f55\u5236\u7ed3\u675f\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u6765\u64ad\u653e\u521a\u521a\u7684\u5f55\u97f3\u4e86\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u64ad\u653e\u547d\u4ee4\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"# aplay -D hw:0,0 /userdata/record1.wav\nPlaying WAVE '/userdata/record1.wav' : Signed 24 bit Little Endian, Rate 48000 Hz, Stereo\n#\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679c\u89c9\u5f97\u5f55\u5236\u7684\u58f0\u97f3\u592a\u5c0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u67e5\u770b\u548c\u4fee\u6539\u9ea6\u514b\u98ce\u6536\u97f3\u7684\u589e\u76ca\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u67e5\u8be2\u547d\u4ee4\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"# amixer sget 'ADC PGA Gain',0\nSimple mixer control 'ADC PGA Gain',0\n  Capabilities: volume volume-joined\n  Playback channels: Mono\n  Capture channels: Mono\n  Limits: 0 - 10\n  Mono: 0 [0%] [0.00dB]\n"})}),"\n",(0,d.jsx)(n.p,{children:'\u4e0a\u8ff0\u547d\u4ee4\u6267\u884c\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u503c\u4e2d "Mono: 0 [0%] [0.00dB]" \u8fd9\u4e00\u53e5\uff0c\u4ee3\u8868\u4e86\u5f53\u524d\u503c\u662f0\u3002'}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8c03\u6574\u589e\u76ca\u547d\u4ee4\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"# amixer sset 'ADC PGA Gain',0 10\nSimple mixer control 'ADC PGA Gain',0\n  Capabilities: volume volume-joined\n  Playback channels: Mono\n  Capture channels: Mono\n  Limits: 0 - 10\n  Mono: 10 [100%] [30.00dB]\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4e0a\u8ff0\u547d\u4ee4\u662f\u5c06ADC PGA Gain\u8c03\u6ee1\uff0c\u8fbe\u5230\u4e8610\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"audio-driver-hat-rev2",children:"Audio Driver HAT REV2"}),"\n",(0,d.jsx)(n.admonition,{title:"\u63d0\u793a",type:"note",children:(0,d.jsx)(n.p,{children:"\u5b89\u88c5\u97f3\u9891\u5b50\u5361\u9a71\u52a8\u540e\uff0ccard 0\u662f\u5b50\u5361\u6ce8\u518c\u7684\u8bbe\u5907\uff0c\u539f\u672c\u7684\u677f\u8f7d\u97f3\u9891\u73b0\u5728\u662fcard 1"})}),"\n",(0,d.jsx)(n.h3,{id:"\u4ea7\u54c1\u7b80\u4ecb",children:"\u4ea7\u54c1\u7b80\u4ecb"}),"\n",(0,d.jsx)(n.p,{children:"Audio Driver HAT REV2\u662f\u7531\u5fae\u96ea\u7535\u5b50\u751f\u4ea7\u7684\u4e00\u6b3e\u97f3\u9891\u8f6c\u63a5\u677f\uff0c\u91c7\u7528ES7210+ES8156\u53ccCodec\u65b9\u6848\uff0c\u53ef\u5b9e\u73b0\u73af\u5f624MIC\u5f55\u97f3\u3001\u53cc\u901a\u9053\u97f3\u9891\u64ad\u653e\u3001\u97f3\u9891\u4fe1\u53f7\u56de\u91c7\u529f\u80fd\uff0c\u8f6c\u63a5\u677f\u5916\u89c2\u5982\u4e0b\u56fe\uff1a"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"image-audio-driver-hat",src:i(33035).A+"",width:"425",height:"371"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5173\u4e8e\u97f3\u9891\u8f6c\u63a5\u677f\u7684\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003",(0,d.jsx)(n.a,{href:"https://www.waveshare.net/shop/Audio-Driver-HAT.htm",children:"Audio Driver HAT"}),"\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5b89\u88c5\u65b9\u6cd5",children:"\u5b89\u88c5\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6309\u7167\u4e0b\u56fe\u65b9\u5f0f\uff0c\u5c06\u8f6c\u63a5\u677f\u63a5\u5165RDK X5 \u768440pin header",(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.img,{alt:"image-x5-audio-driver-hat-v2",src:i(82138).A+"",width:"706",height:"1064"}),(0,d.jsx)(n.br,{}),"\n","\u5e76\u5c06\u62e8\u7801\u5f00\u5173\u5168\u90e8\u62e8\u5230",(0,d.jsx)(n.strong,{children:"off"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u4f7f\u7528",(0,d.jsx)(n.code,{children:"srpi-config"}),"\u914d\u7f6e\u97f3\u9891\u677f",(0,d.jsx)(n.br,{}),"\n","\u8fdb\u5165",(0,d.jsx)(n.code,{children:"3 Interface Options"}),"->",(0,d.jsx)(n.code,{children:"I5 Audio"}),(0,d.jsx)(n.br,{}),"\n","\u9009\u62e9",(0,d.jsx)(n.code,{children:"Audio Driver HAT V2"}),"\uff1a\n",(0,d.jsx)(n.img,{alt:"image-audio-driver-hat-config02",src:i(77822).A+"",width:"836",height:"412"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u8fd0\u884c\u547d\u4ee4",(0,d.jsx)(n.code,{children:"sync && reboot"}),"\u91cd\u542f\u5f00\u53d1\u677f\uff0c\u5982",(0,d.jsx)(n.code,{children:"/dev/snd"}),"\u4e0b\u51fa\u73b0\u5982\u4e0b\u8bbe\u5907\u8282\u70b9\uff0c\u8bf4\u660e\u8f6c\u63a5\u677f\u5b89\u88c5\u6210\u529f"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"root@ubuntu:/userdata# ls /dev/snd\nby-path  controlC0  controlC1  pcmC0D0c  pcmC0D1p  pcmC1D0c  pcmC1D0p  timer\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4e2d\uff0cpcmC0D0c  pcmC0D1p \u662fES7210+ES8156\u6ce8\u518c\u7684\u97f3\u9891\u8bbe\u5907\uff0cpcmC1D0c  pcmC1D0p\u662f\u677f\u8f7d\u97f3\u9891\u6ce8\u518c\u7684\u97f3\u9891\u8bbe\u5907"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u5378\u8f7d\u65b9\u6cd5",children:"\u5378\u8f7d\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4f7f\u7528",(0,d.jsx)(n.code,{children:"srpi-config"}),"\u914d\u7f6e\u97f3\u9891\u677f",(0,d.jsx)(n.br,{}),"\n","\u8fdb\u5165",(0,d.jsx)(n.code,{children:"3 Interface Options"}),"->",(0,d.jsx)(n.code,{children:"I5 Audio"}),(0,d.jsx)(n.br,{}),"\n","\u9009\u62e9",(0,d.jsx)(n.code,{children:"UNSET"}),",\u5373\u53ef\u5378\u8f7d\u97f3\u9891\u9a71\u52a8\u548c\u76f8\u5173\u914d\u7f6e"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u97f3\u9891\u8282\u70b9",children:"\u97f3\u9891\u8282\u70b9"}),"\n",(0,d.jsxs)(n.p,{children:["\u8be5\u97f3\u9891\u677f\u5728",(0,d.jsx)(n.code,{children:"RDK X5"}),"\u4e0a\u7684\u7684\u64ad\u653e\u8282\u70b9\u4e3a",(0,d.jsx)(n.code,{children:"pcmC1D1p"}),"\uff0c\u5f55\u5236\u8282\u70b9\u4e3a",(0,d.jsx)(n.code,{children:"pcmC1D0c"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5-1",children:"\u5f55\u97f3\u64ad\u653e\u6d4b\u8bd5"}),"\n",(0,d.jsxs)(n.p,{children:["\u6d4b\u8bd5\u4f7f\u7528",(0,d.jsx)(n.code,{children:"tinyalsa"}),"\u5e93\u7684\u5de5\u5177\u96c6\uff1a\u4f7f\u7528",(0,d.jsx)(n.code,{children:"tinycap"}),"\u8fdb\u884c\u5f55\u5236\uff0c\u4f7f\u7528",(0,d.jsx)(n.code,{children:"tinyplay"}),"\u8fdb\u884c\u64ad\u653e"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tinycap"}),"\u4f7f\u7528\u8bf4\u660e\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"tinycap\nUsage: tinycap {file.wav | --} [-D card] [-d device] [-c channels] [-r rate] [-b bits] [-p period_size] [-n n_periods] [-t time_in_seconds]\n\nUse -- for filename to send raw PCM to stdout\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"tinyplay"}),"\u4f7f\u7528\u8bf4\u660e\uff1a"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"tinyplay\nusage: tinyplay file.wav [options]\noptions:\n-D | --card   <card number>    The device to receive the audio\n-d | --device <device number>  The card to receive the audio\n-p | --period-size <size>      The size of the PCM's period\n-n | --period-count <count>    The number of PCM periods\n-i | --file-type <file-type >  The type of file to read (raw or wav)\n-c | --channels <count>        The amount of channels per frame\n-r | --rate <rate>             The amount of frames per second\n-b | --bits <bit-count>        The number of bits in one sample\n-M | --mmap                    Use memory mapped IO to play audio\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e",(0,d.jsx)(n.code,{children:"tinyalsa"}),"\u5e93\u7684\u4fe1\u606f\uff0c\u8bf7\u67e5\u9605\u5b83\u4eec\u7684",(0,d.jsx)(n.a,{href:"https://github.com/tinyalsa/tinyalsa",children:"\u4ed3\u5e93\u5730\u5740"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"2\u901a\u9053\u9ea6\u514b\u98ce\u5f55\u97f3\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"tinycap ./2chn_test.wav -D 0 -d 0 -c 2 -b 16 -r 48000 -p 512 -n 4 -t 5\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"4\u901a\u9053\u9ea6\u514b\u98ce\u5f55\u97f3\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"tinycap ./4chn_test.wav -D 0 -d 0 -c 4 -b 16 -r 48000 -p 512 -n 4 -t 5\n"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u53cc\u901a\u9053\u97f3\u9891\u64ad\u653e\uff08\u4e0d\u652f\u6301\u76f4\u63a5\u64ad\u653e4\u901a\u9053\u5f55\u97f3\uff09\uff1a"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"tinyplay ./2chn_test.wav -D 0 -d 1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(t,{...e})}):t(e)}},77822:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/image-audio-driver-hat-config02-919e126bed44acac05b0dce660b9a2df.png"},33035:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/image-audio-driver-hat-395081612ff49a92aa58af08066aaf05.jpg"},82138:(e,n,i)=>{i.d(n,{A:()=>d});const d=i.p+"assets/images/image-x5-audio-driver-hat-v2-750d4c4ccdea42fb5c2672a5b985d1c4.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var d=i(96540);const r={},c=d.createContext(r);function s(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);