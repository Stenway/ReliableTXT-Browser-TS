"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reliabletxt_1 = require("@stenway/reliabletxt");
const src_1 = require("../src");
test("ReliableTxtDownload.getDownloadUrl", () => {
    const document = new reliabletxt_1.ReliableTxtDocument("Test");
    src_1.ReliableTxtDownload.getDownloadUrl(document);
});
test("ReliableTxtDownload.download", () => {
    const document = new reliabletxt_1.ReliableTxtDocument("Test");
    expect(() => src_1.ReliableTxtDownload.download(document, "File.txt")).toThrowError();
});
//# sourceMappingURL=reliabletxt-browser.test.js.map