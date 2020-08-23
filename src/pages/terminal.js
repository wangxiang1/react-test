/**
 * 文件说明：测试文件
 * 作者：王响
 */
import React, { PureComponent } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';
// import { WebLinksAddon } from 'xterm-addon-web-links';
// import { FitAddon } from 'xterm-addon-fit';
import { AttachAddon } from 'xterm-addon-attach';

class TerminalCom extends PureComponent {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://172.16.13.81:8889/bch//websocket/pezy/testhive-pezy-e064b60c-dbdf845c-fjmrv/testhive-pezy-e064b60c');
  }

  componentDidMount() {
    this.initTerminal()
  }

  initTerminal = () => {
    const terminal = new Terminal({
      // rendererType: 'canvas', // 渲染类型
      convertEol: true,
      cursorBlink: true, // 光标闪烁
      cursorStyle: 'block', // 光标样式
    });
    // const webLinksAddon = new WebLinksAddon();
    // const fitAddon = new FitAddon();
    const attachAddon = new AttachAddon(this.socket);
    // terminal.loadAddon(webLinksAddon);
    // terminal.loadAddon(fitAddon);
    terminal.loadAddon(attachAddon);
    terminal.open(document.getElementById('myTerminal'));
    // fitAddon.fit();
    // 限制和后端交互，只有输入回车键才显示结果
    terminal.prompt = () => {
      terminal.write('\r\n$ ');
    };
    terminal.prompt();
  };

  render() {
    return (
      <div id="myTerminal" />
    );
  }
}

export default TerminalCom;
