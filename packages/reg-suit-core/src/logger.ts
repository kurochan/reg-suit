import { Logger } from "./core-interface";

export type LogLevel = "verbose" | "info" | "silent";

// TODO chalk, plugin category setter, --no-color opt

export class RegLogger implements Logger {

  _level: LogLevel;

  constructor() {
    this._level = "info";
  }

  info(msg: string) {
    if (this._level !== "silent") {
      console.log(msg);
    }
  }

  warn(msg: string) {
    if (this._level !== "silent") {
      console.warn(msg);
    }
  }

  error(obj: string | Error) {
    if (this._level !== "silent") {
      console.error(obj);
    }
  }

  verbose(msg: string) {
    if (this._level === "verbose") {
      console.log(msg);
    }
  }
}

const regLogger = new RegLogger();

export default regLogger;