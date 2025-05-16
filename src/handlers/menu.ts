const menu = (name?: string): string =>
  `Hi ${
    name || "there"
  }! Here’s what I can help with:\n\n- 'help': Show usage info\n- 'pricing': View our plans\n- 'agent': Talk to a human`;

export default menu;
