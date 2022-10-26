import { ReliableTxtDocument } from "@stenway/reliabletxt";
export declare abstract class ReliableTxtDownload {
    static getDownloadUrl(document: ReliableTxtDocument): string;
    static download(rtxtDocument: ReliableTxtDocument, fileName: string): void;
}
