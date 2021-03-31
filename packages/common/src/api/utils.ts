export function urlComposer(...args) {
  if (typeof args[args.length - 1] == "object") {
    const last = args.pop();
    const protocol = last.protocol;
    const host = last.host;
    const port = last.port;
    return `${protocol}://${host}:${port}/${args.join("/")}`;
  } else {
    return `/${args.join("/")}`;
  }
}
