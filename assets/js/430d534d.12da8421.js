"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1792],{7903:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var l=i(74848),s=i(28453);const d={sidebar_position:2},t="3.3.2 GPIO\u5e94\u7528",r={id:"Basic_Application/03_40pin_user_guide/gpio",title:"3.3.2 GPIO\u5e94\u7528",description:"\u5f00\u53d1\u677f\u9884\u7f6e\u4e86 GPIO Python \u5e93 Hobot.GPIO\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5bfc\u5165GPIO\u5e93\u3002",source:"@site/docs/03_Basic_Application/03_40pin_user_guide/gpio.md",sourceDirName:"03_Basic_Application/03_40pin_user_guide",slug:"/Basic_Application/03_40pin_user_guide/gpio",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/gpio",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/03_40pin_user_guide/gpio.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"3.3.1 \u7ba1\u811a\u5b9a\u4e49\u4e0e\u5e94\u7528",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/40pin_define"},next:{title:"3.3.3 PWM\u5e94\u7528",permalink:"/rdk_doc/Basic_Application/03_40pin_user_guide/pwm"}},a={},c=[{value:"\u8bbe\u7f6e\u5f15\u811a\u7f16\u7801\u65b9\u5f0f",id:"\u8bbe\u7f6e\u5f15\u811a\u7f16\u7801\u65b9\u5f0f",level:2},{value:"\u8b66\u544a\u4fe1\u606f",id:"\u8b66\u544a\u4fe1\u606f",level:2},{value:"\u7ba1\u811a\u914d\u7f6e",id:"\u7ba1\u811a\u914d\u7f6e",level:2},{value:"\u8f93\u5165\u64cd\u4f5c",id:"\u8f93\u5165\u64cd\u4f5c",level:2},{value:"\u8f93\u51fa\u64cd\u4f5c",id:"\u8f93\u51fa\u64cd\u4f5c",level:2},{value:"\u6e05\u7406\u7ba1\u811a\u5360\u7528",id:"\u6e05\u7406\u7ba1\u811a\u5360\u7528",level:2},{value:"\u67e5\u770b\u7ba1\u811a\u72b6\u6001",id:"\u67e5\u770b\u7ba1\u811a\u72b6\u6001",level:2},{value:"\u8fb9\u6cbf\u68c0\u6d4b\u4e0e\u4e2d\u65ad",id:"\u8fb9\u6cbf\u68c0\u6d4b\u4e0e\u4e2d\u65ad",level:2},{value:"wait_for_edge() \u51fd\u6570",id:"wait_for_edge-\u51fd\u6570",level:3},{value:"event_detected() \u51fd\u6570",id:"event_detected-\u51fd\u6570",level:3},{value:"\u68c0\u6d4b\u5230\u8fb9\u6cbf\u4e8b\u4ef6\u65f6\u8fd0\u884c\u56de\u8c03\u51fd\u6570",id:"\u68c0\u6d4b\u5230\u8fb9\u6cbf\u4e8b\u4ef6\u65f6\u8fd0\u884c\u56de\u8c03\u51fd\u6570",level:3},{value:"\u5173\u95ed\u4e2d\u65ad",id:"\u5173\u95ed\u4e2d\u65ad",level:3},{value:"\u6d4b\u8bd5\u4f8b\u7a0b",id:"\u6d4b\u8bd5\u4f8b\u7a0b",level:2},{value:"hb_gpioinfo\u5de5\u5177\u4ecb\u7ecd",id:"hb_gpioinfo\u5de5\u5177\u4ecb\u7ecd",level:2},{value:"hb_gpioinfo\u7ec4\u6210",id:"hb_gpioinfo\u7ec4\u6210",level:3},{value:"hb_gpioinfo\u4f7f\u7528\u5b9e\u4f8b",id:"hb_gpioinfo\u4f7f\u7528\u5b9e\u4f8b",level:3}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"332-gpio\u5e94\u7528",children:"3.3.2 GPIO\u5e94\u7528"}),"\n",(0,l.jsxs)(e.p,{children:["\u5f00\u53d1\u677f\u9884\u7f6e\u4e86 GPIO Python \u5e93 ",(0,l.jsx)(e.code,{children:"Hobot.GPIO"}),"\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5bfc\u5165GPIO\u5e93\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'sunrise@ubuntu:~$ sudo python3\nPython 3.8.10 (default, Mar 15 2022, 12:22:08)\nType "help", "copyright", "credits" or "license" for more information.\n>>> import Hobot.GPIO as GPIO\n>>> GPIO.VERSION\n\'0.0.2\'\n>>> GPIO.model\n\'RDK_X5\'\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u8bbe\u7f6e\u5f15\u811a\u7f16\u7801\u65b9\u5f0f",children:"\u8bbe\u7f6e\u5f15\u811a\u7f16\u7801\u65b9\u5f0f"}),"\n",(0,l.jsx)(e.p,{children:"\u5f00\u53d1\u677f\u7684\u5f15\u811a\u7f16\u7801\u6709 4 \u79cd\u6a21\u5f0f\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"BOARD\uff1a\u7269\u7406\u5f15\u811a\u5e8f\u53f7\uff0c\u4e0e\u5f00\u53d1\u677f\u7684\u4e1d\u5370\u5e8f\u53f7\u4e00\u4e00\u5bf9\u5e94\u3002"}),"\n",(0,l.jsx)(e.li,{children:"BCM\uff1a\u6839\u636e\u535a\u901aSoC\u5236\u5b9a\u7684GPIO\u547d\u540d\u89c4\u5219\u3002"}),"\n",(0,l.jsx)(e.li,{children:"CVM\uff1a \u4f7f\u7528\u5b57\u7b26\u4e32\u4ee3\u66ff\u6570\u5b57\uff0c\u5bf9\u5e94\u4e8eCVM / CVB\u8fde\u63a5\u5668\u7684\u4fe1\u53f7\u540d\u79f0\u3002"}),"\n",(0,l.jsx)(e.li,{children:"SOC\uff1a \u5bf9\u5e94\u7684\u7f16\u53f7\u662f\u82af\u7247\u5185\u90e8\u7684 GPIO \u7ba1\u811a\u5e8f\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u672c\u6587\u63a8\u8350\u7528\u6237\u4f7f\u7528",(0,l.jsx)(e.code,{children:"BOARD"}),"\u7f16\u7801\u6a21\u5f0f\uff0c\u8bbe\u7f6e\u7f16\u7801\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a\n\u6ce8\u610f\uff1a\u7f16\u7801\u6bcf\u6b21\u53ea\u80fd\u8bbe\u7f6e\u4e00\u6b21\uff0c\u5982\u679c\u60f3\u8981\u91cd\u65b0\u8bbe\u7f6e\uff0c\u9700\u8981",(0,l.jsx)(e.code,{children:"GPIO.cleanup()"}),"\u540e\u91cd\u65b0\u8bbe\u7f6e"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.setmode(GPIO.BOARD)\n# or\nGPIO.setmode(GPIO.BCM)\n# or\nGPIO.setmode(GPIO.CVM)\n# or\nGPIO.setmode(GPIO.SOC)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u67e5\u8be2\u7f16\u7801\u65b9\u5f0f\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.getmode()\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u7a0b\u5e8f\u4f1a\u8f93\u51fa ",(0,l.jsx)(e.code,{children:"BOARD, BCM, CVM, SOC or None"})," \u5176\u4e2d\u7684\u4e00\u79cd\u7ed3\u679c\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8b66\u544a\u4fe1\u606f",children:"\u8b66\u544a\u4fe1\u606f"}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\u4e0b\u8fd0\u884c\u4ee3\u7801\uff0c\u4f1a\u6709\u8b66\u544a\u65e5\u5fd7\u8f93\u51fa\uff0c\u4f46\u5e76\u4e0d\u4f1a\u5f71\u54cd\u6b63\u5e38\u529f\u80fd\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7528\u6237\u5c1d\u8bd5\u4f7f\u7528\u7684GPIO\uff0c\u5df2\u5728\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\uff1b"}),"\n",(0,l.jsxs)(e.li,{children:["\u5728\u8bbe\u7f6e\u6a21\u5f0f\u548c\u901a\u9053\u4e4b\u524d\uff0c\u5c1d\u8bd5\u8c03\u7528 ",(0,l.jsx)(e.code,{children:"GPIO.cleanup"})," \u6e05\u7406\u7ba1\u811a\uff1b"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u8981\u5c4f\u853d\u8b66\u544a\u4fe1\u606f\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b9e\u73b0\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.setwarnings(False)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u7ba1\u811a\u914d\u7f6e",children:"\u7ba1\u811a\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"GPIO\u7ba1\u811a\u5728\u4f7f\u7528\u4e4b\u524d\uff0c\u9700\u8981\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.p,{children:"\u8bbe\u7f6e\u4e3a\u8f93\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.setup(channel, GPIO.IN)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8bbe\u7f6e\u4e3a\u8f93\u51fa\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.setup(channel, GPIO.OUT)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u4e3a\u8f93\u51fa\u901a\u9053\u6307\u5b9a\u4e00\u4e2a\u521d\u59cb\u503c\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.setup(channel, GPIO.OUT, initial=GPIO.HIGH)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u5de5\u5177\u652f\u6301\u540c\u65f6\u8bbe\u7f6e\u591a\u4e2a\u8f93\u51fa\u901a\u9053\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"# set gpio(18,12,13) to output\nchannels = [18, 12, 13]\nGPIO.setup(channels, GPIO.OUT)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8f93\u5165\u64cd\u4f5c",children:"\u8f93\u5165\u64cd\u4f5c"}),"\n",(0,l.jsx)(e.p,{children:"\u8981\u8bfb\u53d6\u901a\u9053\u7684\u503c\uff0c\u8bf7\u4f7f\u7528\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.input(channel)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u547d\u4ee4\u8fd4\u56de\u503c\u4e3a 0 \u6216\u8005 1\u3002 0 \u4ee3\u8868 GPIO.LOW\uff0c 1 \u4ee3\u8868 GPIO.HIGH\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8f93\u51fa\u64cd\u4f5c",children:"\u8f93\u51fa\u64cd\u4f5c"}),"\n",(0,l.jsx)(e.p,{children:"\u8981\u8bbe\u7f6e\u901a\u9053\u7684\u8f93\u51fa\u503c\uff0c\u8bf7\u4f7f\u7528\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.output(channel, state)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5176\u4e2d state \u53ef\u4ee5\u662f GPIO.LOW \u6216 GPIO.HIGH\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u6e05\u7406\u7ba1\u811a\u5360\u7528",children:"\u6e05\u7406\u7ba1\u811a\u5360\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u7a0b\u5e8f\u63a8\u51fa\u524d\uff0c\u63a8\u8350\u8fdb\u884c\u901a\u9053\u6e05\u7406\u52a8\u4f5c\uff0c\u8bf7\u4f7f\u7528\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.cleanup()\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u53ea\u60f3\u6e05\u7406\u7279\u5b9a\u901a\u9053\uff0c\u8bf7\u4f7f\u7528\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"# \u6e05\u9664\u5355\u4e2a\u901a\u9053\nGPIO.cleanup(channel)\n# \u6e05\u9664\u4e00\u7ec4\u901a\u9053\nGPIO.cleanup( (channel1, channel2) )\nGPIO.cleanup( [channel1, channel2] )\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u67e5\u770b\u7ba1\u811a\u72b6\u6001",children:"\u67e5\u770b\u7ba1\u811a\u72b6\u6001"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u529f\u80fd\u5141\u8bb8\u60a8\u68c0\u67e5\u5bf9\u5e94 GPIO \u901a\u9053\u7684\u529f\u80fd\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.gpio_function(channel)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u8fd4\u56de IN \u6216 OUT\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8fb9\u6cbf\u68c0\u6d4b\u4e0e\u4e2d\u65ad",children:"\u8fb9\u6cbf\u68c0\u6d4b\u4e0e\u4e2d\u65ad"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fb9\u6cbf\u662f\u7535\u4fe1\u53f7",(0,l.jsx)(e.code,{children:"\u4ece\u4f4e\u5230\u9ad8"}),"\uff08\u4e0a\u5347\u6cbf\uff09\u6216",(0,l.jsx)(e.code,{children:"\u4ece\u9ad8\u5230\u4f4e"}),"\uff08\u4e0b\u964d\u6cbf\uff09\u7684\u53d8\u5316\uff0c\u8fd9\u79cd\u6539\u53d8\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u79cd\u4e8b\u4ef6\u7684\u53d1\u751f\uff0c\u8fd9\u79cd\u4e8b\u4ef6\u53ef\u4ee5\u7528\u6765\u89e6\u53d1CPU\u4e2d\u65ad\u4fe1\u53f7\u3002"]}),"\n",(0,l.jsxs)(e.admonition,{type:"info",children:[(0,l.jsxs)(e.p,{children:["\u5728",(0,l.jsx)(e.code,{children:"RDK Ultra"}),"\u5e73\u53f0\u4e0a\uff0c",(0,l.jsx)(e.code,{children:"40pin"}),"\u4e0a\u53ea\u6709\u7279\u5b9a\u51e0\u4e2a\u7ba1\u811a\u624d\u80fd\u4f5c\u4e3a\u4e2d\u65ad\u7ba1\u811a\u4f7f\u7528\uff0c\u5b83\u4eec\u5728",(0,l.jsx)(e.code,{children:"BOARD"}),"\u7f16\u7801\u6a21\u5f0f\u4e0b\u7684\u7f16\u53f7\u4e3a\uff1a",(0,l.jsx)(e.strong,{children:"13"}),"\u3001",(0,l.jsx)(e.strong,{children:"16"}),"\u3001",(0,l.jsx)(e.strong,{children:"18"}),"\u3001",(0,l.jsx)(e.strong,{children:"22"}),"\u3001",(0,l.jsx)(e.strong,{children:"27"}),"\u3001",(0,l.jsx)(e.strong,{children:"28"}),"\u3001",(0,l.jsx)(e.strong,{children:"32"}),"\u3001",(0,l.jsx)(e.strong,{children:"33"}),"\u3001",(0,l.jsx)(e.strong,{children:"37"})]}),(0,l.jsxs)(e.p,{children:["\u7ba1\u811a\u5b9a\u4e49\u8bf7\u53c2\u8003 ",(0,l.jsx)(e.a,{href:"./40pin_define#40pin_define",children:"\u7ba1\u811a\u914d\u7f6e\u4e0e\u5b9a\u4e49"})]})]}),"\n",(0,l.jsx)(e.p,{children:"GPIO\u5e93\u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u6cd5\u6765\u68c0\u6d4b\u8f93\u5165\u4e8b\u4ef6\uff1a"}),"\n",(0,l.jsx)(e.h3,{id:"wait_for_edge-\u51fd\u6570",children:"wait_for_edge() \u51fd\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u51fd\u6570\u963b\u585e\u8c03\u7528\u7ebf\u7a0b\uff0c\u76f4\u5230\u68c0\u6d4b\u5230\u5bf9\u5e94\u7684\u8fb9\u7f18\u53d8\u5316\u3002\u51fd\u6570\u8c03\u7528\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.wait_for_edge(channel, GPIO.RISING)\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5176\u4e2d\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6307\u5b9a\u8981\u68c0\u6d4b\u7684\u8fb9\u6cbf\uff0c\u53d6\u503c\u8303\u56f4\u4e3a",(0,l.jsx)(e.code,{children:"GPIO.RISING\u3001GPIO.FALLING \u6216 GPIO.BOTH"}),"\u3002\u5982\u679c\u8981\u6307\u5b9a\u7b49\u5f85\u65f6\u95f4\uff0c\u53ef\u4ee5\u9009\u62e9\u8bbe\u7f6e\u8d85\u65f6\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"# \u8d85\u65f6\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\nGPIO.wait_for_edge(channel, GPIO.RISING, timeout=500)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8d85\u65f6\u65f6\u95f4\u5185\u5916\u90e8\u4fe1\u53f7\u53d1\u751f\u53d8\u5316\uff0c\u51fd\u6570\u8fd4\u56de\u68c0\u6d4b\u7684\u901a\u9053\u53f7\uff1b\u5982\u679c\u53d1\u751f\u8d85\u65f6\uff0c\u51fd\u6570\u8fd4\u56deNone\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"event_detected-\u51fd\u6570",children:"event_detected() \u51fd\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u51fd\u6570\u53ef\u7528\u4e8e\u5b9a\u671f\u68c0\u67e5\u81ea\u4e0a\u6b21\u8c03\u7528\u4ee5\u6765\u662f\u5426\u53d1\u751f\u4e86\u4e8b\u4ef6\u3002\u8be5\u51fd\u6570\u53ef\u4ee5\u6309\u5982\u4e0b\u65b9\u5f0f\u8bbe\u7f6e\u548c\u8c03\u7528\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'# \u5728\u901a\u9053GPIO\u4e0a\u8bbe\u7f6e\u4e0a\u5347\u6cbf\u68c0\u6d4b\nGPIO.add_event_detect(channel, GPIO.RISING)\nif GPIO.event_detected(channel):\n    print("Rising edge event detected")\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u60a8\u53ef\u4ee5\u68c0\u6d4b GPIO.RISING\u3001GPIO.FALLING \u6216 GPIO.BOTH \u7684\u4e8b\u4ef6\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u68c0\u6d4b\u5230\u8fb9\u6cbf\u4e8b\u4ef6\u65f6\u8fd0\u884c\u56de\u8c03\u51fd\u6570",children:"\u68c0\u6d4b\u5230\u8fb9\u6cbf\u4e8b\u4ef6\u65f6\u8fd0\u884c\u56de\u8c03\u51fd\u6570"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u529f\u80fd\u53ef\u7528\u4e8e\u6ce8\u518c\u56de\u8c03\u51fd\u6570\uff0c\u56de\u8c03\u51fd\u6570\u8fd0\u884c\u5728\u72ec\u7acb\u7684\u5904\u7406\u7ebf\u7a0b\u4e2d\uff0c\u4f7f\u7528\u8bf4\u660e\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'# define callback function\ndef callback_fn(channel):\n    print("Callback called from channel %s" % channel)\n\n# enable rising detection\nGPIO.add_event_detect(channel, GPIO.RISING, callback=callback_fn)\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u6709\u9700\u8981\uff0c\u4e5f\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u56de\u8c03\uff0c\u65b9\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'def callback_one(channel):\n    print("First Callback")\n\ndef callback_two(channel):\n    print("Second Callback")\n\nGPIO.add_event_detect(channel, GPIO.RISING)\nGPIO.add_event_callback(channel, callback_one)\nGPIO.add_event_callback(channel, callback_two)\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u7531\u4e8e\u6240\u6709\u56de\u8c03\u51fd\u6570\u8fd0\u884c\u5728\u540c\u4e00\u7ebf\u7a0b\u4e0a\uff0c\u56e0\u6b64\u4e0d\u540c\u7684\u56de\u8c03\u662f\u6309\u987a\u5e8f\u8fd0\u884c\u7684\uff0c\u800c\u4e0d\u662f\u540c\u65f6\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e3a\u4e86\u901a\u8fc7\u5c06\u591a\u4e2a\u4e8b\u4ef6\u5408\u5e76\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u6765\u9632\u6b62\u591a\u6b21\u8c03\u7528\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u9009\u62e9\u8bbe\u7f6e\u53bb\u6296\u52a8\u65f6\u95f4\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"# bouncetime unit is ms\nGPIO.add_event_detect(channel, GPIO.RISING, callback=callback_fn, bouncetime=200)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5173\u95ed\u4e2d\u65ad",children:"\u5173\u95ed\u4e2d\u65ad"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u518d\u9700\u8981\u8fb9\u6cbf\u68c0\u6d4b\uff0c\u53ef\u4ee5\u5c06\u5176\u5220\u9664\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"GPIO.remove_event_detect(channel)\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6d4b\u8bd5\u4f8b\u7a0b",children:"\u6d4b\u8bd5\u4f8b\u7a0b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"/app/40pin_samples/"}),"\u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e3b\u8981\u7684\u6d4b\u8bd5\u4f8b\u7a0b\uff1a"]}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u6d4b\u8bd5\u4f8b\u7a0b\u540d"}),(0,l.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"simple_out.py"}),(0,l.jsxs)(e.td,{children:["\u5355\u4e2a\u7ba1\u811a",(0,l.jsx)(e.code,{children:"\u8f93\u51fa"}),"\u6d4b\u8bd5"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"simple_input.py"}),(0,l.jsxs)(e.td,{children:["\u5355\u4e2a\u7ba1\u811a",(0,l.jsx)(e.code,{children:"\u8f93\u5165"}),"\u6d4b\u8bd5"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"button_led.py"}),(0,l.jsx)(e.td,{children:"\u4e00\u4e2a\u7ba1\u811a\u4f5c\u4e3a\u6309\u952e\u8f93\u5165\uff0c\u4e00\u4e2a\u7ba1\u811a\u4f5c\u4e3a\u8f93\u51fa\u63a7\u5236LED"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"test_all_pins_input.py"}),(0,l.jsxs)(e.td,{children:["\u6240\u6709\u7ba1\u811a\u7684",(0,l.jsx)(e.code,{children:"\u8f93\u5165\u6d4b\u8bd5"}),"\u4ee3\u7801"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"test_all_pins.py"}),(0,l.jsxs)(e.td,{children:["\u6240\u6709\u7ba1\u811a\u7684",(0,l.jsx)(e.code,{children:"\u8f93\u51fa\u6d4b\u8bd5"}),"\u4ee3\u7801"]})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"button_event.py"}),(0,l.jsx)(e.td,{children:"\u6355\u83b7\u7ba1\u811a\u7684\u4e0a\u5347\u6cbf\u3001\u4e0b\u964d\u6cbf\u4e8b\u4ef6"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"button_interrupt.py"}),(0,l.jsx)(e.td,{children:"\u4e2d\u65ad\u65b9\u5f0f\u5904\u7406\u7ba1\u811a\u7684\u4e0a\u5347\u6cbf\u3001\u4e0b\u964d\u6cbf\u4e8b\u4ef6"})]})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["GPIO \u8bbe\u7f6e\u4e3a",(0,l.jsx)(e.code,{children:"\u8f93\u51fa\u6a21\u5f0f"}),"\uff0c1\u79d2\u949f\u5207\u6362\u8f93\u51fa\u7535\u5e73\uff0c\u53ef\u4ee5\u7528\u4e8e\u63a7\u5236LED\u706f\u7684\u5faa\u73af\u4eae\u706d\uff0c \u6d4b\u8bd5\u4ee3\u7801 ",(0,l.jsx)(e.code,{children:"simple_out.py"}),"\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"#!/usr/bin/env python3\nimport sys\nimport signal\nimport Hobot.GPIO as GPIO\nimport time\n\ndef signal_handler(signal, frame):\n    sys.exit(0)\n\n# \u5b9a\u4e49\u4f7f\u7528\u7684GPIO\u901a\u9053\u4e3a37\noutput_pin = 37 # BOARD \u7f16\u7801 37\n\ndef main():\n    # \u8bbe\u7f6e\u7ba1\u811a\u7f16\u7801\u6a21\u5f0f\u4e3a\u786c\u4ef6\u7f16\u53f7 BOARD\n    GPIO.setmode(GPIO.BOARD)\n    # \u8bbe\u7f6e\u4e3a\u8f93\u51fa\u6a21\u5f0f\uff0c\u5e76\u4e14\u521d\u59cb\u5316\u4e3a\u9ad8\u7535\u5e73\n    GPIO.setup(output_pin, GPIO.OUT, initial=GPIO.HIGH)\n    # \u8bb0\u5f55\u5f53\u524d\u7ba1\u811a\u72b6\u6001\n    curr_value = GPIO.HIGH\n    print(\"Starting demo now! Press CTRL+C to exit\")\n    try:\n        # \u95f4\u96941\u79d2\u65f6\u95f4\uff0c\u5faa\u73af\u63a7\u5236LED\u706f\u4eae\u706d\n        while True:\n            time.sleep(1)\n            GPIO.output(output_pin, curr_value)\n            curr_value ^= GPIO.HIGH\n    finally:\n        GPIO.cleanup()\n\nif __name__=='__main__':\n    signal.signal(signal.SIGINT, signal_handler)\n    main()\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["GPIO \u8bbe\u7f6e\u4e3a",(0,l.jsx)(e.code,{children:"\u8f93\u5165\u6a21\u5f0f"}),"\uff0c\u901a\u8fc7\u5fd9\u8f6e\u8be2\u65b9\u5f0f\u8bfb\u53d6\u7ba1\u811a\u7535\u5e73\u503c\uff0c\u6d4b\u8bd5\u4ee3\u7801 ",(0,l.jsx)(e.code,{children:"simple_input.py"}),"\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'#!/usr/bin/env python3\nimport sys\nimport signal\nimport Hobot.GPIO as GPIO\nimport time\n\ndef signal_handler(signal, frame):\n    sys.exit(0)\n\n# \u5b9a\u4e49\u4f7f\u7528\u7684GPIO\u901a\u9053\u4e3a37\ninput_pin = 37 # BOARD \u7f16\u7801 37\n\nGPIO.setwarnings(False)\n\ndef main():\n    prev_value = None\n\n    # \u8bbe\u7f6e\u7ba1\u811a\u7f16\u7801\u6a21\u5f0f\u4e3a\u786c\u4ef6\u7f16\u53f7 BOARD\n    GPIO.setmode(GPIO.BOARD)\n    # \u8bbe\u7f6e\u4e3a\u8f93\u5165\u6a21\u5f0f\n    GPIO.setup(input_pin, GPIO.IN)\n\n    print("Starting demo now! Press CTRL+C to exit")\n    try:\n        while True:\n            # \u8bfb\u53d6\u7ba1\u811a\u7535\u5e73\n            value = GPIO.input(input_pin)\n            if value != prev_value:\n                if value == GPIO.HIGH:\n                    value_str = "HIGH"\n                else:\n                    value_str = "LOW"\n                print("Value read from pin {} : {}".format(input_pin, value_str))\n                prev_value = value\n            time.sleep(1)\n    finally:\n        GPIO.cleanup()\n\nif __name__==\'__main__\':\n    signal.signal(signal.SIGINT, signal_handler)\n    main()\n\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["GPIO \u8bbe\u7f6e\u4e3a\u8f93\u5165\u6a21\u5f0f\uff0c\u6355\u83b7\u7ba1\u811a\u7684\u4e0a\u5347\u6cbf\u3001\u4e0b\u964d\u6cbf\u4e8b\u4ef6\uff0c\u6d4b\u8bd5\u4ee3\u7801 ",(0,l.jsx)(e.code,{children:"button_event.py"}),", \u5b9e\u73b0\u68c0\u6d4b37\u53f7\u7ba1\u811a\u7684\u4e0b\u964d\u6cbf\uff0c\u7136\u540e\u63a7\u523636\u53f7\u7ba1\u811a\u7684\u8f93\u51fa\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'#!/usr/bin/env python3\nimport sys\nimport signal\nimport Hobot.GPIO as GPIO\nimport time\n\ndef signal_handler(signal, frame):\n    sys.exit(0)\n\n# \u5b9a\u4e49\u4f7f\u7528\u7684GPIO\u901a\u9053\uff1a\n# 36\u53f7\u4f5c\u4e3a\u8f93\u51fa\uff0c\u53ef\u4ee5\u70b9\u4eae\u4e00\u4e2aLED\n# 37\u53f7\u4f5c\u4e3a\u8f93\u5165\uff0c\u53ef\u4ee5\u63a5\u4e00\u4e2a\u6309\u94ae\nled_pin = 36 # BOARD \u7f16\u7801 36\nbut_pin = 37 # BOARD \u7f16\u7801 37\n\n# \u7981\u7528\u8b66\u544a\u4fe1\u606f\nGPIO.setwarnings(False)\n\ndef main():\n    # \u8bbe\u7f6e\u7ba1\u811a\u7f16\u7801\u6a21\u5f0f\u4e3a\u786c\u4ef6\u7f16\u53f7 BOARD\n    GPIO.setmode(GPIO.BOARD)\n    GPIO.setup(led_pin, GPIO.OUT)  # LED pin set as output\n    GPIO.setup(but_pin, GPIO.IN)  # button pin set as input\n\n    # Initial state for LEDs:\n    GPIO.output(led_pin, GPIO.LOW)\n\n    print("Starting demo now! Press CTRL+C to exit")\n    try:\n        while True:\n            print("Waiting for button event")\n            GPIO.wait_for_edge(but_pin, GPIO.FALLING)\n\n            # event received when button pressed\n            print("Button Pressed!")\n            GPIO.output(led_pin, GPIO.HIGH)\n            time.sleep(1)\n            GPIO.output(led_pin, GPIO.LOW)\n    finally:\n        GPIO.cleanup()  # cleanup all GPIOs\n\nif __name__ == \'__main__\':\n    signal.signal(signal.SIGINT, signal_handler)\n    main()\n\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["GPIO \u8bbe\u7f6e\u4e3a\u8f93\u5165\u6a21\u5f0f\uff0c\u542f\u52a8gpio\u4e2d\u65ad\u529f\u80fd\uff0c\u54cd\u5e94\u7ba1\u811a\u7684\u4e0a\u5347\u6cbf\u3001\u4e0b\u964d\u6cbf\u4e8b\u4ef6\uff0c\u6d4b\u8bd5\u4ee3\u7801 ",(0,l.jsx)(e.code,{children:"button_interrupt.py"}),", \u5b9e\u73b0\u68c0\u6d4b 37 \u53f7\u7ba1\u811a\u7684\u4e0b\u964d\u6cbf\uff0c\u7136\u540e\u63a7\u523613\u53f7\u7ba1\u811a\u5feb\u901f\u5207\u6362\u9ad8\u4f4e\u7535\u5e73 5 \u6b21\uff1a"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'#!/usr/bin/env python3\nimport sys\nimport signal\nimport Hobot.GPIO as GPIO\nimport time\n\ndef signal_handler(signal, frame):\n    sys.exit(0)\n\n# \u5b9a\u4e49\u4f7f\u7528\u7684GPIO\u901a\u9053\uff1a\n# 15\u53f7\u4f5c\u4e3a\u8f93\u51fa\uff0c\u53ef\u4ee5\u70b9\u4eae\u4e00\u4e2aLED\n# 16\u53f7\u4f5c\u4e3a\u8f93\u51fa\uff0c\u53ef\u4ee5\u70b9\u4eae\u4e00\u4e2aLED\n# 37\u53f7\u4f5c\u4e3a\u8f93\u5165\uff0c\u53ef\u4ee5\u63a5\u4e00\u4e2a\u6309\u94ae\nled_pin_1 = 15 # BOARD \u7f16\u7801 15\nled_pin_2 = 16 # BOARD \u7f16\u7801 16\nbut_pin = 37   # BOARD \u7f16\u7801 37\n\n\n# \u7981\u7528\u8b66\u544a\u4fe1\u606f\nGPIO.setwarnings(False)\n\n# \u6309\u4e0b\u6309\u94ae\u65f6 LED 2 \u5feb\u901f\u95ea\u70c1 5 \u6b21\ndef blink(channel):\n    print("Blink LED 2")\n    for i in range(5):\n        GPIO.output(led_pin_2, GPIO.HIGH)\n        time.sleep(0.5)\n        GPIO.output(led_pin_2, GPIO.LOW)\n        time.sleep(0.5)\n\ndef main():\n    # Pin Setup:\n    GPIO.setmode(GPIO.BOARD)  # BOARD pin-numbering scheme\n    GPIO.setup([led_pin_1, led_pin_2], GPIO.OUT)  # LED pins set as output\n    GPIO.setup(but_pin, GPIO.IN)  # button pin set as input\n\n    # Initial state for LEDs:\n    GPIO.output(led_pin_1, GPIO.LOW)\n    GPIO.output(led_pin_2, GPIO.LOW)\n\n    # \u628ablink\u51fd\u6570\u6ce8\u518c\u4e3a\u6309\u94ae\u4e0b\u964d\u6cbf\u4e8b\u4ef6\u7684\u4e2d\u65ad\u5904\u7406\u51fd\u6570\n    GPIO.add_event_detect(but_pin, GPIO.FALLING, callback=blink, bouncetime=10)\n    # \u5f00\u59cb\u6d4b\u8bd5\uff0c Led1 \u7f13\u6162\u95ea\u70c1\n    print("Starting demo now! Press CTRL+C to exit")\n    try:\n        while True:\n            # blink LED 1 slowly\n            GPIO.output(led_pin_1, GPIO.HIGH)\n            time.sleep(2)\n            GPIO.output(led_pin_1, GPIO.LOW)\n            time.sleep(2)\n    finally:\n        GPIO.cleanup()  # cleanup all GPIOs\n\nif __name__ == \'__main__\':\n    signal.signal(signal.SIGINT, signal_handler)\n    main()\n\n'})}),"\n",(0,l.jsx)(e.h2,{id:"hb_gpioinfo\u5de5\u5177\u4ecb\u7ecd",children:"hb_gpioinfo\u5de5\u5177\u4ecb\u7ecd"}),"\n",(0,l.jsx)(e.p,{children:"hb_gpioinfo \u662f\u9002\u914dX5\u7684\u4e00\u4e2agpio\u5e2e\u52a9\u5de5\u5177\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u5f00\u53d1\u677f\u7684\u7684PinName\u548cPinNum\u7684\u5bf9\u5e94\u5173\u7cfb"}),"\n",(0,l.jsx)(e.h3,{id:"hb_gpioinfo\u7ec4\u6210",children:"hb_gpioinfo\u7ec4\u6210"}),"\n",(0,l.jsxs)(e.p,{children:["hb_gpioinfo\u5de5\u5177\u7531\u9a71\u52a8\u548c\u5e94\u7528\u4e24\u90e8\u5206\u7ec4\u6210,\u9a71\u52a8\u8d1f\u8d23\u89e3\u6790pinmux-gpio.dtsi\u5e76\u5c06pinnode\u548cpinname\u4fe1\u606f\u5bfc\u51fa\u5230debugfs\u7cfb\u7edf\u4e2d\uff0chb_gpioinfo\u5e94\u7528\u8fdb\u884c\u89e3\u6790\u6253\u5370\u5230\u7ec8\u7aef\u4e0a\n\u9a71\u52a8\u4ee3\u7801\u8def\u5f84\uff1a",(0,l.jsx)(e.code,{children:"kernel/drivers/gpio/hobot_gpio_debug.c"})]}),"\n",(0,l.jsx)(e.h3,{id:"hb_gpioinfo\u4f7f\u7528\u5b9e\u4f8b",children:"hb_gpioinfo\u4f7f\u7528\u5b9e\u4f8b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"PinName:\u6307\u7684\u662fSoc\u4e0a\u7684\u7ba1\u811a\u540d\u5b57\uff0c\u539f\u7406\u56fe\u4e0aX5 Soc\u7ba1\u811a\u547d\u540d\u4e00\u81f4"}),"\n",(0,l.jsx)(e.li,{children:"PinNode\uff1a\u6307\u7684\u662f\u8bbe\u5907\u6811\u4e2d\u7684PinNode\u4fe1\u606f"}),"\n",(0,l.jsx)(e.li,{children:"PinNum\uff1a\u6307\u7684\u662fX5\u5b9e\u9645\u7684\u5bf9\u5e94\u7684\u7ba1\u811agpio\u7f16\u53f7"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"root@ubuntu:~# hb_gpioinfo\ngpiochip0 - 8 lines: @platform/31000000.gpio: @GPIOs 498-505\n        [Number]                [Mode]  [Status]  [GpioName]       [PinName]              [PinNode]           [PinNum]\n        line  0:        unnamed input                             AON_GPIO0_PIN0        aon_gpio_0              498\n        line  1:        unnamed input                             AON_GPIO0_PIN1        aon_gpio_1              499\n        line  2:        unnamed input  active-low  GPIO Key Power AON_GPIO0_PIN2        aon_gpio_2              500\n        line  3:        unnamed input              interrupt      AON_GPIO0_PIN3        aon_gpio_3              501\n        line  4:        unnamed input                             AON_GPIO0_PIN4        aon_gpio_4              502\n        line  5:        unnamed input              id             AON_ENV_VDD           aon_gpio_5              503\n        line  6:        unnamed input              id             AON_ENV_CNN0          aon_gpio_6              504\n        line  7:        unnamed input                             AON_ENV_CNN1          aon_gpio_7              505\ngpiochip1 - 31 lines: @platform/35060000.gpio: @GPIOs 466-496\n        [Number]                [Mode]  [Status]  [GpioName]       [PinName]              [PinNode]           [PinNum]\n        line  0:        unnamed input                             HSIO_ENET_MDC         hsio_gpio0_0            466\n        line  1:        unnamed input                             HSIO_ENET_MDIO        hsio_gpio0_1            467\n        line  2:        unnamed input                             HSIO_ENET_TXD_0       hsio_gpio0_2            468\n        line  3:        unnamed input                             HSIO_ENET_TXD_1       hsio_gpio0_3            469\n        line  4:        unnamed input                             HSIO_ENET_TXD_2       hsio_gpio0_4            470\n        line  5:        unnamed input                             HSIO_ENET_TXD_3       hsio_gpio0_5            471\n        line  6:        unnamed input                             HSIO_ENET_TXEN        hsio_gpio0_6            472\n        line  7:        unnamed input                             HSIO_ENET_TX_CLK      hsio_gpio0_7            473\n        line  8:        unnamed input                             HSIO_ENET_RX_CLK      hsio_gpio0_8            474\n        ....\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>r});var l=i(96540);const s={},d=l.createContext(s);function t(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);