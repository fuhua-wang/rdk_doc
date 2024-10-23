"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[1039],{15202:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=r(74848),n=r(28453);const d={sidebar_position:12},i="DDR Stress Testing Plan",o={id:"Advanced_development/linux_development/driver_development/driver_ddr_dev",title:"DDR Stress Testing Plan",description:"Purpose",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/driver_ddr_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_ddr_dev",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_ddr_dev",draft:!1,unlisted:!1,editUrl:"https://d-robotics.github.io/rdk_doc/RDK/docs/07_Advanced_development/02_linux_development/driver_development/driver_ddr_dev.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Modifying BPU Reserved Memory Size",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_bpu_mem_dev"},next:{title:"RTC Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_rtc_dev"}},l={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Testing Categories",id:"testing-categories",level:2},{value:"Testing Environment",id:"testing-environment",level:2},{value:"DUT Stress Program",id:"dut-stress-program",level:3},{value:"How to Use the Stress Program",id:"how-to-use-the-stress-program",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"ddr-stress-testing-plan",children:"DDR Stress Testing Plan"}),"\n",(0,t.jsx)(s.h2,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(s.p,{children:"This article mainly introduces the testing method for long-term high-pressure operation of DDR particles in high and low temperature environments."}),"\n",(0,t.jsx)(s.h2,{id:"glossary",children:"Glossary"}),"\n",(0,t.jsx)(s.p,{children:"Definition of terms:\nPASS: After the test is completed, all functions and performance of the DUT meet expectations, and no anomalies occur.\nFAIL: After the test is completed, the DUT's functions are damaged or malfunctioning, or do not meet the specified requirements."}),"\n",(0,t.jsx)(s.h2,{id:"testing-categories",children:"Testing Categories"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Testing Category"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Environmental Temperature"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Testing Duration"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DDR Normal Temperature Stress Test"}),(0,t.jsx)(s.td,{children:"25 degrees"}),(0,t.jsx)(s.td,{children:"48 hours"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DDR High Temperature Stress Test"}),(0,t.jsx)(s.td,{children:"60 degrees"}),(0,t.jsx)(s.td,{children:"48 hours"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"DDR Low Temperature Stress Test"}),(0,t.jsx)(s.td,{children:"-25 degrees"}),(0,t.jsx)(s.td,{children:"48 hours"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"testing-environment",children:"Testing Environment"}),"\n",(0,t.jsx)(s.h3,{id:"dut-stress-program",children:"DUT Stress Program"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"ITEM"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Version Number/Device Number"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Applicable Testing Categories"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Test Script"}),(0,t.jsx)(s.td,{children:"xj3_ddr_stress.tar.gz"}),(0,t.jsx)(s.td,{children:"General Stress Testing"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Number of DUTs"}),(0,t.jsx)(s.td,{children:"5 or more"}),(0,t.jsx)(s.td,{children:"General Stress Testing"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Download ",(0,t.jsx)(s.code,{children:"xj3_ddr_stress_gcc9.3.tar.gz"})," from the corresponding SDK version directory of ",(0,t.jsx)(s.a,{href:"http://archive.d-robotics.cc/downloads/unittest/",children:"unittest"})]}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use-the-stress-program",children:"How to Use the Stress Program"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Transfer ",(0,t.jsx)(s.code,{children:"xj3_ddr_stress_gcc9.3.tar.gz"})," to the userdata directory of XJ3 via Ethernet or other tools."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Enter the userdata directory on the XJ3 side: cd /userdata"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Uncompress the test file"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"tar -zxvf xj3_ddr_stress_gcc9.3.tar.gz\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Grant permission to the xj3_ddr_stress folder"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"chmod 777 xj3_ddr_stress\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:'Enter the directory "cd xj3_ddr_stress"'}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"cd xj3_ddr_stress \n"})}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsx)(s.li,{children:"Set CPU mode and frequency reduction temperature"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# If the device restarts, these two commands need to be configured again\necho performance > /sys/devices/system/cpu/cpufreq/policy0/scaling_governor \necho 105000 > /sys/devices/virtual/thermal/thermal_zone0/trip_point_1_temp\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsx)(s.li,{children:"Execute the stress test script, run cpu test and bpu test in the background"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"sh ./scripts/xj3-stress.sh\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"8",children:["\n",(0,t.jsx)(s.li,{children:"Check the running status with top"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20220324192755274",src:r(22488).A+"",width:"1527",height:"267"})}),"\n",(0,t.jsxs)(s.ol,{start:"9",children:["\n",(0,t.jsx)(s.li,{children:"The cpu test log is stored in /userdata/cpu-stress.log, check the current running status"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# It will be printed every 10 seconds\ntail /userdata/cpu-stress.log\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20220324192849234",src:r(49808).A+"",width:"1320",height:"293"})}),"\n",(0,t.jsx)(s.p,{children:"Note: The program runs continuously for 48 hours by default (as shown in the figure below, the value after the -s parameter is 172800, in seconds)"}),"\n",(0,t.jsxs)(s.ol,{start:"10",children:["\n",(0,t.jsx)(s.li,{children:"The bpu test log is stored in /userdata/bpu-stress.log, check the current running status"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# As long as the log is being updated, it is still testing, it runs continuously by default\ntail /userdata/bpu-stress.log\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"11",children:["\n",(0,t.jsx)(s.li,{children:'Check the cpu test result, if the last Status in /userdata/cpu-stress.log shows PASS and there is no "error" or "miscompare" keyword in the log, it indicates a PASS result.'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20220324193228651",src:r(75569).A+"",width:"1371",height:"543"})}),"\n",(0,t.jsxs)(s.ol,{start:"12",children:["\n",(0,t.jsx)(s.li,{children:'If the last Status in /userdata/cpu-stress.log shows FAIL or if there is an "error" or "miscompare" keyword in the log, it indicates a FAIL result.13. Check the bpu test result. If keywords such as "error" or "system hung" are present in the bpu_stress.log, it means the test has failed.'}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"image-20220324193250187",src:r(11e3).A+"",width:"1534",height:"486"})}),"\n",(0,t.jsxs)(s.p,{children:["13\u3001check ",(0,t.jsx)(s.code,{children:"bpu test result"}),", if  ",(0,t.jsx)(s.code,{children:"error"}),", ",(0,t.jsx)(s.code,{children:"system hung"})," ,etc, appeared in ",(0,t.jsx)(s.code,{children:"bpu_stress.log"}),", it means the test has failed."]})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},22488:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/command-top-933982f483daf67e9cf230879aac237f.png"},49808:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/image-20220324192849234-a18794e26d08d65a373252155b96a984.png"},75569:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/image-20220324193228651-508e5ba8a7ce00f2d6cd5be3ce679d09.png"},11e3:(e,s,r)=>{r.d(s,{A:()=>t});const t=r.p+"assets/images/image-20220324193250187-4b163c29ec3946ff7cc01921da06ed89.png"},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>o});var t=r(96540);const n={},d=t.createContext(n);function i(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);