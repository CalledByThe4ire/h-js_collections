// @flow
/* eslint no-bitwise: ["error", { "allow": ["^"] }] */
export default (arr: Array<number>): number => arr.reduce((acc, num) => acc ^ num, 0);

