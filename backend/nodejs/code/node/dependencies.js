import _ from "lodash";
import { log, info, warn } from "modify_console";

const name = "Alan Saputra Lengkoan";

log(_.upperCase(name));
info(_.lowerCase(name));
warn(_.kebabCase(name));
