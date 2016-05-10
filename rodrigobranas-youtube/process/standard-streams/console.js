var konsole = {
  log: function(msg) {
    process.stdout.write(msg + '\n');
  },
  error: function(msg) {
    process.stderr.write(msg + '\n');
  }
};

// verify if the message is output to a terminal
konsole.log('A TTY: ' + !!process.stdout.isTTY);
// verify if the message is output to a software such as telnet, ssh, xterm
konsole.error('B TTY: ' + !!process.stdout.isPTY);