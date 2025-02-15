var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension/registry.ts
var registry_exports = {};
__export(registry_exports, {
  web3AuthWalletInfo: () => web3AuthWalletInfo
});
module.exports = __toCommonJS(registry_exports);

// src/constant.ts
var ICON = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjY0LjY4ODciIGN5PSI2NC42ODgyIiByPSI1OS4xODI4IiBmaWxsPSIjMDM2NEZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODguODc0NiA4NS41NjEyQzg4LjQ3NCA4Ny4wNTYgODYuMzUzIDg3LjA1NiA4NS45NTI0IDg1LjU2MTJMODEuMjg3MyA2OC4xNTA2QzgxLjE5NzEgNjcuODEzOSA4MS4xOTcxIDY3LjQ1OTUgODEuMjg3MyA2Ny4xMjI5TDg1LjQyMTQgNTEuNjk0Qzg1Ljc4NjkgNTAuMzMwMSA4Ny4wMjI5IDQ5LjM4MTcgODguNDM0OSA0OS4zODE3SDk0LjUwMzFDOTYuNTU0NCA0OS4zODE3IDk4LjA0NzUgNTEuMzI3NSA5Ny41MTY1IDUzLjMwOUw4OC44NzQ2IDg1LjU2MTJaTTQ4Ljg0ODEgNjguMTIxNUM0OC45MzgzIDY3Ljc4NDkgNDguOTM4MyA2Ny40MzA1IDQ4Ljg0ODEgNjcuMDkzOEw0NC43MjE3IDUxLjY5NEM0NC4zNTYyIDUwLjMzMDEgNDMuMTIwMyA0OS4zODE3IDQxLjcwODIgNDkuMzgxN0gzNS42NDAxQzMzLjU4ODcgNDkuMzgxNyAzMi4wOTU2IDUxLjMyNzUgMzIuNjI2NiA1My4zMDlMNDEuMjYwNyA4NS41MzIxQzQxLjY2MTMgODcuMDI2OSA0My43ODI0IDg3LjAyNjkgNDQuMTgyOSA4NS41MzIxTDQ4Ljg0ODEgNjguMTIxNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjEuOTkwNyA4OS4wNjlDNjEuODU0IDg5LjU3OTMgNjIuMjM4NSA5MC4wODA1IDYyLjc2NjkgOTAuMDgwNUg2Ny4zOTQ3QzY3LjkyMzEgOTAuMDgwNSA2OC4zMDc3IDg5LjU3OTMgNjguMTcwOSA4OS4wNjlMNjUuODU3IDgwLjQzMzRDNjUuNjQ0MiA3OS42MzkyIDY0LjUxNzQgNzkuNjM5MiA2NC4zMDQ2IDgwLjQzMzRMNjEuOTkwNyA4OS4wNjlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU3LjM4MjkgOTQuNTk3OUM1Ny4wMjg1IDk1LjkyMDUgNTUuODMgOTYuODQwMiA1NC40NjA3IDk2Ljg0MDJINDguMTk2OEM0Ni4yMDc2IDk2Ljg0MDIgNDQuNzU5OCA5NC45NTMzIDQ1LjI3NDcgOTMuMDMxOUw1OC4xMjQ4IDQ1LjA3NDdDNTguNTEyNCA0My42MjgxIDU5LjgyMzMgNDIuNjIyMiA2MS4zMjA5IDQyLjYyMjJINjguNzc1N0M3MC4yNzMzIDQyLjYyMjIgNzEuNTg0MiA0My42MjgxIDcxLjk3MTggNDUuMDc0N0w4NC44MjIgOTMuMDMxOUM4NS4zMzY4IDk0Ljk1MzMgODMuODg5IDk2Ljg0MDIgODEuODk5OCA5Ni44NDAySDc1LjYzNTlDNzQuMjY2NiA5Ni44NDAyIDczLjA2ODEgOTUuOTIwNSA3Mi43MTM3IDk0LjU5NzlMNjYuNDYzNyA3MS4yNzI2QzY2LjA3NTcgNjkuODI0NSA2NC4wMjA5IDY5LjgyNDUgNjMuNjMyOSA3MS4yNzI2TDU3LjM4MjkgOTQuNTk3OVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODguODkwOSA4NS41NjEyQzg4LjQ5MDMgODcuMDU2IDg2LjM2OTIgODcuMDU2IDg1Ljk2ODcgODUuNTYxMkw4MS4zMDM1IDY4LjE1MDZDODEuMjEzMyA2Ny44MTM5IDgxLjIxMzMgNjcuNDU5NSA4MS4zMDM1IDY3LjEyMjlMODcuMjQ4OSA0NC45MzQ1Qzg3LjYxNDQgNDMuNTcwNiA4OC44NTAzIDQyLjYyMjIgOTAuMjYyNCA0Mi42MjIySDk2LjMzMDVDOTguMzgxOSA0Mi42MjIyIDk5Ljg3NDkgNDQuNTY4IDk5LjM0NCA0Ni41NDk0TDg4Ljg5MDkgODUuNTYxMlpNNDguODY0MyA2OC4xMjE1QzQ4Ljk1NDUgNjcuNzg0OSA0OC45NTQ1IDY3LjQzMDUgNDguODY0MyA2Ny4wOTM4TDQyLjkyNjggNDQuOTM0NUM0Mi41NjEzIDQzLjU3MDYgNDEuMzI1MyA0Mi42MjIyIDM5LjkxMzMgNDIuNjIyMkgzMy44NDUxQzMxLjc5MzggNDIuNjIyMiAzMC4zMDA3IDQ0LjU2OCAzMC44MzE3IDQ2LjU0OTRMNDEuMjc3IDg1LjUzMjFDNDEuNjc3NiA4Ny4wMjY5IDQzLjc5ODYgODcuMDI2OSA0NC4xOTkyIDg1LjUzMjFMNDguODY0MyA2OC4xMjE1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";

// src/extension/registry.ts
var web3AuthWalletInfo = {
  name: "web3auth",
  prettyName: "Web3Auth",
  logo: ICON,
  mode: "extension",
  mobileDisabled: false,
  rejectMessage: {
    source: "Request rejected"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  web3AuthWalletInfo
});
//# sourceMappingURL=registry.js.map