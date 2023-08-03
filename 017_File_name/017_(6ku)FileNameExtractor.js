class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return String(dirtyFileName.match(/(?<=_)([a-zA-Z-_]+).([a-zA-Z-_]+)/g))
    }
}

console.log(FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION'))

// console.log(FileNameExtractor'1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34')

// console.log(FileNameExtractor'1231231223123131_myFile.tar.gz2')