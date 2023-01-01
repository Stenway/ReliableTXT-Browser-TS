import { ReliableTxtDocument } from "@stenway/reliabletxt"
import { ReliableTxtDownload } from "../src"

test("ReliableTxtDownload.getDownloadUrl", () => {
	const document = new ReliableTxtDocument("Test")
	ReliableTxtDownload.getDownloadUrl(document)
})

test("ReliableTxtDownload.download", () => {
	const document = new ReliableTxtDocument("Test")
	expect(() => ReliableTxtDownload.download(document, "File.txt")).toThrowError()
})