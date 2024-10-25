"use strict";(self.webpackChunkrdk_doc=self.webpackChunkrdk_doc||[]).push([[9751],{31750:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>d,default:()=>_,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(74848),i=n(28453);const s={sidebar_position:2},d="UART Driver Debugging Guide",c={id:"Advanced_development/linux_development/driver_development/driver_uart_dev",title:"UART Driver Debugging Guide",description:"The X3 chip has 4 UART ports: UART0, UART1, UART2, UART3",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07_Advanced_development/02_linux_development/driver_development/driver_uart_dev.md",sourceDirName:"07_Advanced_development/02_linux_development/driver_development",slug:"/Advanced_development/linux_development/driver_development/driver_uart_dev",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_uart_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/D-Robotics/rdk_doc/blob/main/docs/07_Advanced_development/02_linux_development/driver_development/driver_uart_dev.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration of Uboot and Kernel Options",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/uboot_kernel_config"},next:{title:"I2C Debugging Guide",permalink:"/rdk_doc/en/Advanced_development/linux_development/driver_development/driver_i2c_dev"}},a={},o=[{value:"Driver Code",id:"driver-code",level:2},{value:"Code Path",id:"code-path",level:3},{value:"Kernel Configuration",id:"kernel-configuration",level:3},{value:"DTS Device Node Configuration",id:"dts-device-node-configuration",level:3},{value:"UART Testing",id:"uart_test",level:2},{value:"Appendix (Test Code)",id:"appendix-test-code",level:2}];function u(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"uart-driver-debugging-guide",children:"UART Driver Debugging Guide"}),"\n",(0,r.jsx)(e.p,{children:"The X3 chip has 4 UART ports: UART0, UART1, UART2, UART3"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"UART0 is used as the debugging port, only UART1 supports hardware flow control"}),"\n",(0,r.jsx)(e.li,{children:"Supports baud rates of 115.2Kbps, 230.4Kbps, 460.8Kbps, 921.6Kbps, 1.5Mbps, 2Mbps, 4Mbps. Enabling TOI is required for speeds above 2M."}),"\n",(0,r.jsx)(e.li,{children:"Supports interrupt-based or DMA-based mode"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"driver-code",children:"Driver Code"}),"\n",(0,r.jsx)(e.h3,{id:"code-path",children:"Code Path"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"drivers/tty/serial/hobot_serial.c\ndrivers/tty/serial/hobot_serial.h\n"})}),"\n",(0,r.jsx)(e.h3,{id:"kernel-configuration",children:"Kernel Configuration"}),"\n",(0,r.jsx)(e.p,{children:"CONFIG_SERIAL_HOBOT_UART"}),"\n",(0,r.jsx)(e.p,{children:"SERIAL_HOBOT_UART_CONSOLE"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image-20220324112539182",src:n(58712).A+"",width:"788",height:"433"})}),"\n",(0,r.jsx)(e.h3,{id:"dts-device-node-configuration",children:"DTS Device Node Configuration"}),"\n",(0,r.jsx)(e.p,{children:"The general configuration for uart0-3 can be found in the hobot-xj3.dtsi file. This file is usually not modified. When enabling the corresponding UART, customization and additions can be made in the device tree of the specific board. For example, to enable uart0, 1, and 3 in the hobot-x3-sdb.dts file:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-xj3.dtsi */\nuart0: serial@0xA5000000 {\n    compatible = "hobot,hobot-uart";\n    reg = <0 0xA5000000 0 0x1000>;\n    interrupt-parent = <&gic>;\n    interrupts = <0 29 4>;\n    clocks = <&uart0_mclk>;\n    pinctrl-names = "default";\n    pinctrl-0 = <&uart0_func>;\n    status = "disabled";\n};\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'/* arch/arm64/boot/dts/hobot/hobot-x3-sdb.dts */\n&uart0 {\n```\tstatus = "okay";\n};\n\n&uart1 {\n\tstatus = "okay"; /* 4 wire uart for bt */\n\tpinctrl-0 = <&uart1_func_rtscts>; /* <&uart1_func>;  uart 1 connect to bt with rtscts*/\n};\n\n&uart3 {\n\tstatus = "okay"; /* 4 wire uart for bt */\n};\n'})}),"\n",(0,r.jsx)(e.h2,{id:"uart_test",children:"UART Testing"}),"\n",(0,r.jsx)(e.p,{children:"Physically connect the TX and RX pins of uart3 on the hardware."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"image-20220324122032808",src:n(81948).A+"",width:"399",height:"243"})}),"\n",(0,r.jsxs)(e.p,{children:["Compile the ",(0,r.jsx)(e.code,{children:"uart_duplex.c"})," code as follows, with the full code provided in Appendix A:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"/opt/gcc-ubuntu-9.3.0-2020.03-x86_64-aarch64-linux-gnu/bin/aarch64-linux-gnu-gcc -o uart_duplex uart_duplex.c -lpthread\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Loopback test command: Open ",(0,r.jsx)(e.code,{children:"/dev/ttyS3"}),' with a default baud rate of 4Mbps, and for each round of testing, transmit and receive 1MB of data by default over 100 rounds. Concurrently read and write, perform data verification after every transmission and reception of 512 bytes. Upon the completion of a full round of testing without errors, print "Verification Correct".']}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# ./uart_duplex -c 100 -d /dev/ttyS3\ntest size:1024 Kbytes, baud:4000000\nStart receive thread\nStart send thread\nStart recv_check thread\nThis is receive test 1 times\nThis is uart send 1 times\nreceive sum:102416 bytes\nreceive sum:205312 bytes\n...\nreceive sum:924164 bytes\nreceive sum:1027076 bytes\nsend 1024Kbytes,time:2700.000000ms, BPS:379259.250000\nThis is receive test 2 times\n## Check the received data is correct ##\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"uart_duplex"})," command is used to test the UART functionality. For more usage instructions, refer to its help information."]}),"\n",(0,r.jsx)(e.h2,{id:"appendix-test-code",children:"Appendix (Test Code)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdint.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <fcntl.h>\n#include <termios.h>\n#include <errno.h>\n#include <string.h>\n#include <getopt.h>\n#include <sys/time.h>\n#include <pthread.h>\n#include <semaphore.h>\n#include <stdlib.h>\n\n#define BUFF_SIZE (20 * 1024 * 1024)\npthread_t recv_thread_id;\npthread_t recv_check_thread_id;\npthread_t send_thread_id;\nchar send_buffer[BUFF_SIZE] = {0};\nchar recv_buffer[BUFF_SIZE] = {0};\nstatic uint32_t test_size = 1024;\nstatic uint32_t baud = 4000000;\nstatic uint32_t test_count = 0;\nint g_fd;\nuint64_t recv_total = 0;\nsem_t sem_check;\n\n#define FRAME_LEN 512\n#if 1\nstatic void dump_recv_data(uint32_t sum, uint32_t len)\n{\n\tint ii = 0;\n\tprintf("dump receive data:\\n");\n\tfor (ii = 0; ii < len; ii += 4) {\n\t\tprintf("0x%x: 0x%x, 0x%x, 0x%x, 0x%x\\n", sum + ii,\n\t\t\t\trecv_buffer[sum + ii],\n\t\t\t\trecv_buffer[sum + ii + 1],\n\t\t\t\trecv_buffer[sum + ii + 2],\n\t\t\t\trecv_buffer[sum + ii + 3]);\n\n\t}\n\n}\n\nstatic void dump_send_data(uint32_t sum, uint32_t len)\n{\n\tint ii = 0;\n\tprintf("dump send data:\\n");\n\tfor (ii = 0; ii < len; ii += 4) {\n\t\tprintf("0x%x: 0x%x, 0x%x, 0x%x, 0x%x\\n", sum + ii,\n\t\t\t\tsend_buffer[sum + ii],\n\t\t\t\tsend_buffer[sum + ii + 1],\n\t\t\t\tsend_buffer[sum + ii + 2],\n\t\t\t\tsend_buffer[sum + ii + 3]);\n\n\t}\n\n}\n#endif\n\nstatic void set_baudrate(int fd, int nSpeed)\n{\n\tstruct termios newtio;\n\n\ttcgetattr(fd, &newtio);\n\n\tswitch (nSpeed) {\n\tcase 2400:\n\t\tcfsetispeed(&newtio, B2400);\n\t\tcfsetospeed(&newtio, B2400);\n\t\tbreak;\n\n\tcase 4800:\n\t\tcfsetispeed(&newtio, B4800);\n\t\tcfsetospeed(&newtio, B4800);\n\t\tbreak;\n\n\tcase 9600:\n\t\tcfsetispeed(&newtio, B9600);\n\t\tcfsetospeed(&newtio, B9600);\n\t\tbreak;\n\n\tcase 19200:\n\t\tcfsetispeed(&newtio, B19200);\n\t\tcfsetospeed(&newtio, B19200);\n\t\tbreak;\n\n\tcase 38400:\n\t\tcfsetispeed(&newtio, B38400);\n\t\tcfsetospeed(&newtio, B38400);\n\t\tbreak;\n\n\tcase 57600:\n\t\tcfsetispeed(&newtio, B57600);\n\t\tcfsetospeed(&newtio, B57600);\n\t\tbreak;\n\n\tcase 115200:\n\t\tcfsetispeed(&newtio, B115200);\n\t\tcfsetospeed(&newtio, B115200);\n\t\tbreak;\n\tcase 230400:\n\t\tcfsetispeed(&newtio, B230400);\n\t\tcfsetospeed(&newtio, B230400);\n\t\tbreak;\n\tcase 921600:\n\t\tcfsetispeed(&newtio, B921600);\n\t\tcfsetospeed(&newtio, B921600);\n\t\tbreak;\n\tcase 1000000:\n\t\tcfsetispeed(&newtio, B1000000);\n\t\tcfsetospeed(&newtio, B1000000);\n\t\tbreak;\n\n\tcase 1152000:\n\t\tcfsetispeed(&newtio, B1152000);\n\t\tcfsetospeed(&newtio, B1152000);\n\t\tbreak;\n\tcase 1500000:\n\t\tcfsetispeed(&newtio, B1500000);\n\t\tcfsetospeed(&newtio, B1500000);\n\t\tbreak;\n\tcase 2000000:\n\t\tcfsetispeed(&newtio, B2000000);\n\t\tcfsetospeed(&newtio, B2000000);\n\t\tbreak;\n\tcase 2500000:\n\t\tcfsetispeed(&newtio, B2500000);\n\t\tcfsetospeed(&newtio, B2500000);\n\t\tbreak;\n\tcase 3000000:\n\t\tcfsetispeed(&newtio, B3000000);\n\t\tcfsetospeed(&newtio, B3000000);\n\t\tbreak;\n\tcase 3500000:\n\t\tcfsetispeed(&newtio, B3500000);\n\t\tcfsetospeed(&newtio, B3500000);\n\t\tbreak;\n\n\tcase 4000000:\n\t\tcfsetispeed(&newtio, B4000000);\n\t\tcfsetospeed(&newtio, B4000000);\n\t\tbreak;\n\n\tdefault:\n\t\tprintf("\\tSorry, Unsupported baud rate, use previous baudrate!\\n\\n");\n\t\tbreak;\n\t}\n\ttcsetattr(fd,TCSANOW,&newtio);\n}\n\nstatic void set_termios(int fd)\n{\n\tstruct termios term;\n\n\ttcgetattr(fd, &term);\n\tterm.c_cflag &= ~(CSIZE | CSTOPB | PARENB | INPCK);\n\tterm.c_cflag |= (CS8 | CLOCAL | CREAD);\n\tterm.c_lflag &= ~(ICANON | ECHO | ECHOE | ISIG);\n\tterm.c_oflag &= ~(OPOST | ONLCR | OCRNL);\n\tterm.c_iflag &= ~(ICRNL |INLCR | IXON | IXOFF | IXANY);\n\tterm.c_cc[VTIME] = 0;\n\tterm.c_cc[VMIN] = 1;\n\ttcsetattr(fd, TCSAFLUSH, &term);\n}\n\nstatic void *send_test(void *times)\n{\n\t/*send thread*/\n\tstruct timeval start, end;\n\tint32_t i = 0;\n\tuint32_t j = 0;\n\tuint32_t tmp = 0;\n\tuint32_t exe_count = 0;\n\tint32_t ret = 0;\n\tfloat ts = 0;\n\n\tprintf("Start send thread\\n");\n\n\tsleep(1);\n\tif (test_count == 0) {\n\t\ttmp = 10;\n\t} else\n\t\ttmp = test_count;\n\tfor (j = 0; j < tmp; j++) {\n\t\tif (test_count == 0)\n\t\t\tj = 0;\n\t\tsleep(1);\n\t\tprintf("This is uart send %d times\\n", ++exe_count);\n\t\tgettimeofday(&start, NULL);\n\t\tfor (i = 0; i <  test_size * 1024; i = i + FRAME_LEN) {\n\t\t\tret = write(g_fd, &send_buffer[i], FRAME_LEN);\n\t\t\tif (ret < FRAME_LEN) {\n\t\t\t\tprintf("write ttyS2 error\\n");\n\t\t\t\treturn NULL;\n\t\t\t}\n\t\t}\n#if 1\n\t\tgettimeofday(&end, NULL);\n\t\t//\t\tprintf("start %ld sec, %ld usec, end %ld sec, %ld usec\\n", start.tv_sec, start.tv_usec, end.tv_sec, end.tv_usec);\n\t\tts = ((end.tv_sec * 1000000 + end.tv_usec) - (start.tv_sec * 1000000 + start.tv_usec)) / 1000;\n\t\tprintf("send %dKbytes,time:%fms, BPS:%f\\n", test_size, ts, test_size * 1000 / (ts / 1000));\n#endif\n\t}\n\tclose(g_fd);\n\treturn NULL;\n}\n\nstatic void *recv_test(void *times)\n{\n\tint32_t j = 0;\n\tuint32_t exe_count = 0;\n\tint tmp = 0;\n\tint size = 0;\n\tint sum = 0;\n\tint last_count = 0;\n\tint len = 0;\n\tint len_frame = 0; /*use to get correct frame len*/\n\n\tprintf("Start receive thread\\n");\n\n\tmemset(recv_buffer, 0, sizeof(recv_buffer));\n\n\tif (test_count == 0) {\n\t\ttmp = 10;\n\t} else\n\t\ttmp = test_count;\n\tfor (j = 0; j < tmp; j++) {\n\t\tsum = 0;\n\t\tlast_count = 0;\n\t\tif (test_count == 0)\n\t\t\tj = 0;\n\t\tprintf("This is receive test %d times\\n", ++exe_count);\n\t\t//gettimeofday(&start, NULL);\n\t\tsize = test_size * 1024;\n\t\twhile (size > 0) {\n\t\t\tlen = read(g_fd, &recv_buffer[sum], FRAME_LEN);\n\t\t\tif (len < 0) {\n\t\t\t\tprintf("read error\\n");\n\t\t\t\treturn NULL;\n\t\t\t}\n\t\t\trecv_total += len;\n\t\t\tlen_frame += len;\n\t\t\tif (len_frame >= FRAME_LEN) {\n\t\t\t\tlen_frame -= FRAME_LEN;\n\t\t\t\tsem_post(&sem_check);\n\t\t\t}\n\n#if 0\n\t\t\tret = memcmp(&recv_buffer[sum], &send_buffer[sum], len);\n\t\t\tif (ret != 0) {\n\t\t\t\tprintf("data compare error\\n");\n\t\t\t\treturn NULL;\n\t\t\t}\n#endif\n\t\t\tsum +=len;\n\t\t\tsize -= len;\n\t\t\tif ((sum - last_count) > 100 * 1024) {\n\t\t\t\tprintf("receive sum:%d bytes\\n", sum);\n\t\t\t\tlast_count = sum;\n\t\t\t}\n\t\t}\n#if 0\n\t\tgettimeofday(&end, NULL);\n\t\tprintf("start %ld sec, %ld usec, end %ld sec, %ld usec\\n", start.tv_sec, start.tv_usec, end.tv_sec, end.tv_usec);\n\t\tts = ((end.tv_sec * 1000000 + end.tv_usec) - (start.tv_sec * 1000000 + start.tv_usec)) / 1000;\n\n\t\tprintf("receive %dKbytes,time:%fms, BPS:%f\\n", test_size, ts, test_size * 1000 / (ts / 1000));\n#endif\n\t}\n\tclose(g_fd);\n\treturn NULL;\n}\n\nint32_t error_bit(uint64_t *data1, uint64_t *data2, int32_t len)\n{\n\tuint64_t c=0;\n\tint32_t sum = 0;\n\tint i = 0;\n\tfor(i = 0; i < len / 8; i++) {\n\t\tc = data1[i] ^ data2[i];\n\t\twhile(c!=0) {\n\t\t\tc &= (c - 1);\n\t\t\tsum++;\n\t\t}\n\t}\n\treturn sum;\n}\n\nstatic void *recv_check_test(void *times)\n{\n\tint32_t check_pos = 0;\n\tuint32_t *cur_frame = NULL;\n\tint32_t error_bit_cnt = 0;\n\tprintf("Start recv_check thread\\n");\n\twhile (1) {\n\t\tsem_wait(&sem_check);\n\t\t/*check data*/\n\t\tcur_frame = (uint32_t *)&recv_buffer[check_pos];\n\t\tif (*cur_frame != check_pos / FRAME_LEN) {\n\t\t\tprintf("error: may lost frame, curruent frame is %d, expected frame is %d position: 0x%x\\n",\n\t\t\t\t\t*cur_frame, check_pos / FRAME_LEN, check_pos);\n\t\t\t//dump_recv_data(check_pos, FRAME_LEN);\n\t\t\t//dump_send_data(check_pos, FRAME_LEN);\n\t\t\terror_bit_cnt = 0;\n\t\t\terror_bit_cnt = error_bit((uint64_t *)&recv_buffer[check_pos],\n\t\t\t\t\t(uint64_t *)&send_buffer[check_pos],\n\t\t\t\t\tFRAME_LEN / 8);\n\t\t\tcheck_pos += FRAME_LEN;\n\t\t\tprintf("test total data: 0x%lx, error bit count:%d\\n", recv_total, error_bit_cnt);\n\t\t\tif (check_pos == test_size * 1024) {\n\t\t\t\t//exit(1);\n\t\t\t\tprintf("uart: frame head error\\n");\n\n\t\t\t}\n\t\t\tcontinue;\n\t\t}\n\t\terror_bit_cnt = 0;\n\t\terror_bit_cnt = error_bit((uint64_t *)&recv_buffer[check_pos],\n\t\t\t\t(uint64_t *)&send_buffer[check_pos],\n\t\t\t\tFRAME_LEN / 8);\n\t\tif (error_bit_cnt) {\n\t\t\tprintf("test total data: 0x%lx!!!!!!!, error bit count:%d\\n", recv_total, error_bit_cnt);\n\t\t\t//dump_recv_data(check_pos, FRAME_LEN);\n\t\t\t//dump_send_data(check_pos, FRAME_LEN);\n\t\t\tcheck_pos += FRAME_LEN;\n\t\t\tif (check_pos == test_size * 1024) {\n\t\t\t\t//exit(1);\n\t\t\t\tprintf("uart: frame data error\\n");\n\t\t\t}\n\t\t\tcontinue;\n\t\t}\n\t\tmemset(&recv_buffer[check_pos], 0, FRAME_LEN);\n\t\tcheck_pos += FRAME_LEN;\n\t\tif (check_pos == test_size * 1024) {\n\t\t\tcheck_pos = 0;\n\t\t\tprintf("## Check the received data is correct ##\\n");\n\t\t}\n\t}\n\treturn NULL;\n}\n\nstatic const char short_options[] = "s:u:c:b:d:h";\nstatic const struct option long_options[] = {\n\t{"size", required_argument, NULL, \'s\'},\n\t{"baudrate", required_argument, NULL, \'b\'},\n\t{"count", required_argument, NULL, \'c\'},\n\t{"device", required_argument, NULL, \'d\'},\n\t{"help", no_argument, NULL, \'h\'},\n\t{0, 0, 0, 0}};\nint main(int argc, char *argv[])\n{\n\tint ret = 0;\n\tchar *pDevice = NULL;\n\tint i = 0;\n\tint32_t cmd_parser_ret = 0;\n\tuint32_t *frame_num = NULL;\n\tuint32_t *frame_value = NULL;\n\n\twhile ((cmd_parser_ret = getopt_long(argc, argv, short_options, long_options, NULL)) != -1) {\n\t\tswitch (cmd_parser_ret) {\n\t\tcase \'s\':\n\t\t\ttest_size = atoi(optarg);\n\t\t\tbreak;\n\n\t\tcase \'b\':\n\t\t\tbaud = atoi(optarg);\n\t\t\tbreak;\n\n\t\tcase \'c\':\n\t\t\ttest_count = atoi(optarg);\n\t\t\tbreak;\n\t\tcase \'d\':\n\t\t\tpDevice = optarg;\n\t\t\tbreak;\n\n\t\tcase \'h\':\n\t\t\tprintf("**********UART STRESS TEST HELP INFORMATION*********\\n");\n\t\t\tprintf(">>> -s/--size     [test size,unit--Kbytes,default is 1M, MAX is 20M]\\n");\n\t\t\tprintf(">>> -b/--baudrate  [baud,default is 4M]\\n");\n\t\t\tprintf(">>> -c/--count  [test count,default is forever]\\n");\n\t\t\tprintf(">>> -d/--uart  [uart device, user must set this]\\n");\n\t\t\treturn 0;\n\t\t}\n\t}\n\tif (baud > 4000000) {\n\t\tprintf("baud is larger than max baud\\n");\n\t\treturn -1;\n\t}\n\tg_fd = open(pDevice, O_RDWR | O_NOCTTY);\n\tif (0 > g_fd) {\n\t\tprintf("open fail\\n");\n\t\treturn -1;\n\t}\n\tset_baudrate(g_fd, baud);\n\tset_termios(g_fd);\n\tprintf("test size:%d Kbytes, baud:%d\\n", test_size, baud);\n\tfor (i = 0; i < test_size * 1024; i+=4) {\n\t\tif (i % FRAME_LEN) {\n\t\t\tframe_value = (uint32_t *)&send_buffer[i];\n\t\t\t*frame_value = rand();\n\t\t}\n\n\t}\n\tfor (i = 0; i < test_size * 1024 / FRAME_LEN; i++) {\n\t\tframe_num = (uint32_t *)&send_buffer[i * FRAME_LEN];\n\t\t*frame_num = i;\n\t\t//        printf("pos:0x%x, value:0x%x\\n", i * FRAME_LEN, *frame_num);\n\t}\n\n\tsem_init(&sem_check, 0, 0);\n\tret = pthread_create(&recv_thread_id,\n\t\t\tNULL,\n\t\t\trecv_test,\n\t\t\tNULL);\n\tif (ret < 0) {\n\t\tprintf("create uart1 test thread failed\\n");\n\t\treturn -1;\n\t}\n\tret = pthread_create(&send_thread_id,\n\t\t\tNULL,\n\t\t\tsend_test,\n\t\t\tNULL);\n\tif (ret < 0) {\n\t\tprintf("create uart2 test thread failed\\n");\n\t\treturn -1;\n\t}\n\tret = pthread_create(&recv_check_thread_id,\n\t\t\tNULL,\n\t\t\trecv_check_test,\n\t\t\tNULL);\n\tif (ret < 0) {\n\t\tprintf("create receive check thread failed\\n");\n\t\treturn -1;\n\t}\n\tpthread_join(recv_thread_id, NULL);\n\tpthread_join(recv_check_thread_id, NULL);\n\tpthread_join(send_thread_id, NULL);\n\treturn 0;\n}\n'})})]})}function _(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},58712:(t,e,n)=>{n.d(e,{A:()=>r});const r=n.p+"assets/images/image-20220324112539182-44c516822b7a4251805f66bec1e18116.png"},81948:(t,e,n)=>{n.d(e,{A:()=>r});const r=n.p+"assets/images/image-20220324122032808-222fb765a63e8aedecc3c81976adc891.png"},28453:(t,e,n)=>{n.d(e,{R:()=>d,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function d(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:d(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);