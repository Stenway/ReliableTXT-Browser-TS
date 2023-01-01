"use strict";
/* (C) Stefan John / Stenway / ReliableTXT.com / 2022 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliableTxtDownload = void 0;
// ----------------------------------------------------------------------
class ReliableTxtDownload {
    static getDownloadUrl(document) {
        const bytes = document.getBytes();
        const blob = new Blob([bytes], { type: 'text/plain' });
        return URL.createObjectURL(blob);
    }
    static download(rtxtDocument, fileName) {
        const url = ReliableTxtDownload.getDownloadUrl(rtxtDocument);
        const element = document.createElement('a');
        element.href = url;
        element.download = fileName;
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}
exports.ReliableTxtDownload = ReliableTxtDownload;
//# sourceMappingURL=reliabletxt-browser.js.map