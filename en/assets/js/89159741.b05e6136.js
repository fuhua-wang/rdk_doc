"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[3709],{10311:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var o=i(74848),s=i(28453);const t={sidebar_position:4},d="8.4 Multimedia Class",r={id:"FAQ/multimedia",title:"8.4 Multimedia Class",description:"Video Encoding/Decoding",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/08_FAQ/04_multimedia.md",sourceDirName:"08_FAQ",slug:"/FAQ/multimedia",permalink:"/rdk_doc/en/FAQ/multimedia",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/08_FAQ/04_multimedia.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"8.3 Applications and Examples",permalink:"/rdk_doc/en/FAQ/applications_and_examples"},next:{title:"8.5 Algorithm toolchain class",permalink:"/rdk_doc/en/FAQ/toolchain"}},c={},l=[{value:"Video Encoding/Decoding",id:"video-encodingdecoding",level:2}];function a(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"84-multimedia-class",children:"8.4 Multimedia Class"}),"\n",(0,o.jsx)(n.h2,{id:"video-encodingdecoding",children:"Video Encoding/Decoding"}),"\n",(0,o.jsx)("font",{color:"Blue",children:"[Question]"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["When decoding the rtsp video stream on the development board, the following error occurs:",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.img,{alt:"image-20220728110439753",src:i(73559).A+"",width:"960",height:"88"})]}),"\n"]}),"\n",(0,o.jsx)("font",{color:"Green",children:"[Answer]"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The rtsp stream pushed by the streaming server needs to include ",(0,o.jsx)(n.code,{children:"PPS"})," and ",(0,o.jsx)(n.code,{children:"SPS"})," parameter information."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["When using ",(0,o.jsx)(n.code,{children:"ffmpeg"})," to stream open video files in formats such as ",(0,o.jsx)(n.code,{children:".mp4"})," and ",(0,o.jsx)(n.code,{children:".avi"}),", the ",(0,o.jsx)(n.code,{children:"-vbsf h264_mp4toannexb"})," option needs to be added to include the ",(0,o.jsx)(n.code,{children:"PPS"})," and ",(0,o.jsx)(n.code,{children:"SPS"})," information in the stream, for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ffmpeg -re -stream_loop -1 -i xxx.mp4 -vcodec copy -vbsf h264_mp4toannexb -f rtsp rtsp://192.168.1.195:8554/h264_stream\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Currently, the rtsp video stream only supports 1080p resolution."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Using VLC software for rtsp streaming is not supported because VLC software does not support adding ",(0,o.jsx)(n.code,{children:"PPS"})," and ",(0,o.jsx)(n.code,{children:"SPS"})," information."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},73559:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/image-20220728110439753-0072af456addd613837816e45592b0b7.png"},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var o=i(96540);const s={},t=o.createContext(s);function d(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);