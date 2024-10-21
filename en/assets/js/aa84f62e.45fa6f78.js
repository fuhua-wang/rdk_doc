"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[2198],{38132:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var i=s(74848),t=s(28453);const o={sidebar_position:6},r="3.3.6 Using SPI",p={id:"Basic_Application/03_40pin_user_guide/spi",title:"3.3.6 Using SPI",description:"The RDK X3 exposes the SPI2 bus of the Sunrise X3M chip on physical pins 19, 21, 23, 24 of the 40-pin header, supporting one chip select and operating at 3.3V IO voltage.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/03_40pin_user_guide/spi.md",sourceDirName:"03_Basic_Application/03_40pin_user_guide",slug:"/Basic_Application/03_40pin_user_guide/spi",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/spi",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/03_Basic_Application/03_40pin_user_guide/spi.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"3.3.5 Using I2C",permalink:"/rdk_doc/en/Basic_Application/03_40pin_user_guide/i2c"},next:{title:"3.4.1 Reference Examples (python)",permalink:"/rdk_doc/en/Basic_Application/multi_media/pydev_vio_demo"}},c={},d=[{value:"Loopback Test",id:"loopback-test",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Test Procedure",id:"test-procedure",level:3},{value:"Test Code",id:"test-code",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"336-using-spi",children:"3.3.6 Using SPI"}),"\n",(0,i.jsxs)(n.p,{children:["The RDK X3 exposes the ",(0,i.jsx)(n.code,{children:"SPI2"})," bus of the Sunrise X3M chip on physical pins ",(0,i.jsx)(n.code,{children:"19, 21, 23, 24"})," of the 40-pin header, supporting one chip select and operating at 3.3V IO voltage."]}),"\n",(0,i.jsxs)(n.p,{children:["The RDK Ultra exposes the ",(0,i.jsx)(n.code,{children:"SPI0"})," bus on physical pins ",(0,i.jsx)(n.code,{children:"19, 21, 23, 24, 26"})," of the 40-pin header, supporting two chip selects and operating at 3.3V IO voltage."]}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to ",(0,i.jsx)(n.code,{children:"/app/40pin_samples/test_spi.py"})," for detailed information on how to use SPI."]}),"\n",(0,i.jsx)(n.h2,{id:"loopback-test",children:"Loopback Test"}),"\n",(0,i.jsx)(n.p,{children:"Connect MISO and MOSI pins together on the hardware, then run the spi test program to perform write and read operations. The expected result is that the read data should be identical to the written data."}),"\n",(0,i.jsx)(n.h3,{id:"hardware-connection",children:"Hardware Connection"}),"\n",(0,i.jsx)(n.p,{children:"Connect MISO and MOSI directly together on the hardware using a jumper cap."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"image-20220512101915524",src:s(51444).A+"",width:"407",height:"146"})}),"\n",(0,i.jsx)(n.h3,{id:"test-procedure",children:"Test Procedure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"python3 /app/40pin_samples/test_spi.py"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select the bus number and chip select number from the printed spi controllers as input options. For example, if you want to test ",(0,i.jsx)(n.code,{children:"spidev0.0"}),", then both ",(0,i.jsx)(n.code,{children:"bus num"})," and ",(0,i.jsx)(n.code,{children:"cs num"})," should be ",(0,i.jsx)(n.code,{children:"0"}),". Press enter to confirm:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"List of enabled spi controllers:\n/dev/spidev0.0  /dev/spidev0.1\nPlease input SPI bus num:0\nPlease input SPI cs num:0\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Once the program is running correctly, it will continuously print ",(0,i.jsx)(n.code,{children:"0x55 0xAA"}),". If it prints ",(0,i.jsx)(n.code,{children:"0x00 0x00"}),", then the loopback test of SPI has failed."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Starting demo now! Press CTRL+C to exit\n0x55 0xAA\n0x55 0xAA\n"})}),"\n",(0,i.jsx)(n.h2,{id:"test-code",children:"Test Code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'#!/usr/bin/env python3\n\nfrom __future__ import print_function\nimport sys\nimport os\nimport time\n\n```# Import the spidev module \nimport spidev\n\ndef BytesToHex(Bytes):\n    return \'\'.join(["0x%02X " % x for x in Bytes]).strip()\n\ndef spidevTest():\n    # Set the spi bus number (0, 1, 2) and cs (0, 1)\n    spi_bus = input("Please input SPI bus num:")\n    spi_device = input("Please input SPI cs num:")\n    # Create an object of the spidev class to access the Python functions based on spidev\n    spi = spidev.SpiDev()\n    # Open the spi bus handle\n    spi.open(int(spi_bus), int(spi_device))\n\n    # Set spi frequency to 12MHz\n    spi.max_speed_hz = 12000000\n\n    print("Starting demo now! Press CTRL+C to exit")\n\n    # Send [0x55, 0xAA] and receive should also be [0x55, 0xAA]\n    try:\n        while True:\n            resp = spi.xfer2([0x55, 0xAA])\n            print(BytesToHex(resp))\n            time.sleep(1)\n\n    except KeyboardInterrupt:\n        spi.close()\n\nif __name__ == \'__main__\':\n    print("List of enabled spi controllers:")\n    os.system(\'ls /dev/spidev*\')\n\n    spidevTest()\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51444:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-20220512101915524-49489bdedef7ededcef22bdb2c8c459a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>p});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);