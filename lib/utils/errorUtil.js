export function typeCheck(target, type) {
  if (typeof target !== type) {
    throw new Error(`The ${target} type must be ${type}`);
  }
}

export function invalidParam(target) {
  if (!target) {
    throw new Error(`Invalid parameter ${target}`);
  }
}

export function typeArrayCheck(target) {
  if (!Array.isArray(target)) {
    throw new Error(`The ${target} type must be array`);
  }
}
