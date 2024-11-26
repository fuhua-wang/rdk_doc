"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9533],{55496:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=d(74848),t=d(28453);const s={sidebar_position:3},r="DECODER API",c={id:"Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/decoder_api",title:"DECODER API",description:"The DECODER API provides the following interfaces:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3/decoder_api.md",sourceDirName:"03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3",slug:"/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/decoder_api",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/decoder_api",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/03_Basic_Application/04_multi_media/multi_media_api/cdev_multimedia_api_x3/decoder_api.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ENCODER (Encoder Module) API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/encoder_api"},next:{title:"DISPLAY API",permalink:"/rdk_doc/en/Basic_Application/multi_media/multi_media_api/cdev_multimedia_api_x3/display_api"}},o={},l=[{value:"sp_init_decoder_module",id:"sp_init_decoder_module",level:2},{value:"sp_release_decoder_module",id:"sp_release_decoder_module",level:2},{value:"sp_start_decode",id:"sp_start_decode",level:2},{value:"sp_stop_decode",id:"sp_stop_decode",level:2},{value:"sp_decoder_get_image",id:"sp_decoder_get_image",level:2},{value:"sp_decoder_set_image",id:"sp_decoder_set_image",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"decoder-api",children:"DECODER API"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"DECODER"})," API provides the following interfaces:"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Function"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sp_init_decoder_module"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"Initialize the decoder module object"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sp_release_decoder_module"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"Destroy the decoder module object"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sp_start_decode"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"Create an image decoding channel"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sp_stop_decode"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"Close the image decoding channel"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sp_decoder_get_image"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"Retrieve the decoded image frame from the decoding channel"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"sp_decoder_set_image"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.strong,{children:"Pass the encoded stream data to the decoding channel"})})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"sp_init_decoder_module",children:"sp_init_decoder_module"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"void *sp_init_decoder_module()"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"Initialize the decoder module object. You need to call this function to obtain the handle when using the decoder module. It supports H264, H265, and Mjpeg formats of video streams."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"None."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,n.jsxs)(i.p,{children:["If successful, it returns a ",(0,n.jsx)(i.code,{children:"DECODER"})," object. If failed, it returns NULL."]}),"\n",(0,n.jsx)(i.h2,{id:"sp_release_decoder_module",children:"sp_release_decoder_module"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"void sp_release_decoder_module(void *obj)"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"Destroy the decoder module object."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"obj"}),": The object pointer obtained when calling the initialization interface."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"None"}),"\n",(0,n.jsx)(i.h2,{id:"sp_start_decode",children:"sp_start_decode"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"int32_t sp_start_decode(void *obj, const char *stream_file, int32_t video_chn, int32_t type, int32_t width, int32_t height)"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"Create a decoding channel and set the channel number, the type of the decoding stream, and the resolution of the image frame."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"obj"}),": Pointer to the initialized ",(0,n.jsx)(i.code,{children:"DECODER"})," object"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"stream_file"}),": When ",(0,n.jsx)(i.code,{children:"stream_file"}),' is set to the name of a stream file, it means that the stream file needs to be decoded, for example, setting the stream file of H264 as "stream.h264". When ',(0,n.jsx)(i.code,{children:"stream_file"})," is set to an empty string, it means that the decoding data stream needs to be passed in by calling ",(0,n.jsx)(i.code,{children:"sp_decoder_set_image"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"video_chn"}),": Decoding channel number, supports 0-31."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"type"}),": Type of the decoding data, supports ",(0,n.jsx)(i.code,{children:"SP_ENCODER_H264"}),", ",(0,n.jsx)(i.code,{children:"SP_ENCODER_H265"}),", and ",(0,n.jsx)(i.code,{children:"SP_ENCODER_MJPEG"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"width"}),": Width of the decoded image frame resolution"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"height"}),": Height of the decoded image frame resolution"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"Returns 0 if successful, -1 if failure."}),"\n",(0,n.jsx)(i.h2,{id:"sp_stop_decode",children:"sp_stop_decode"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"int32_t sp_stop_decode(void *obj)"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Description\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"Close the decoding channel."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Parameters\u3011"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"obj"}),": Pointer to the initialized ",(0,n.jsx)(i.code,{children:"DECODER"})," object"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Return Type\u3011"})}),"\n",(0,n.jsx)(i.p,{children:"Returns 0 if successful, -1 if failure."}),"\n",(0,n.jsx)(i.h2,{id:"sp_decoder_get_image",children:"sp_decoder_get_image"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"\u3010Function Prototype\u3011"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"int32_t sp_decoder_get_image(void *obj, char *image_buffer)"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Function Description]"})}),"\n",(0,n.jsxs)(i.p,{children:["Obtain the decoded image frame data from the decoding channel, and the returned image data format is a ",(0,n.jsx)(i.code,{children:"YUV"})," image in ",(0,n.jsx)(i.code,{children:"NV12"})," format."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Parameters]"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"obj"}),": Pointer to the initialized ",(0,n.jsx)(i.code,{children:"DECODER"})," object."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"image_buffer"}),": The returned image frame data. The size of this buffer is determined by the resolution of the image, which is ",(0,n.jsx)(i.code,{children:"(width * height * 3) / 2"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Return Type]"})}),"\n",(0,n.jsx)(i.p,{children:"Returns 0 if successful, and -1 if failed."}),"\n",(0,n.jsx)(i.h2,{id:"sp_decoder_set_image",children:"sp_decoder_set_image"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Function Prototype]"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"int32_t sp_decoder_set_image(void *obj, char *image_buffer, int32_t chn, int32_t size, int32_t eos)"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Function Description]"})}),"\n",(0,n.jsx)(i.p,{children:"Feeds the bitstream data into an opened decoding channel. If decoding H264 or H265 bitstream, it is required to send 3-5 frames of data first to allow the decoder to complete frame buffering before obtaining the decoded frame data. If decoding H264 bitstream, the first frame of data sent for decoding needs to be the description of sps and pps, otherwise the decoder will report an error and exit."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Parameters]"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"obj"}),": Pointer to the initialized ",(0,n.jsx)(i.code,{children:"DECODER"})," object."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"image_buffer"}),": Pointer to the bitstream data."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"chn"}),": Decoder channel number, which needs to be the channel number that has been opened by calling ",(0,n.jsx)(i.code,{children:"sp_start_decode"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"size"}),": Size of the bitstream data."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"eos"}),": Whether it is the last frame of data."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"[Return Type]"})}),"\n",(0,n.jsx)(i.p,{children:"Returns 0 if successful, and -1 if failed."})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,i,d)=>{d.d(i,{R:()=>r,x:()=>c});var n=d(96540);const t={},s=n.createContext(t);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);