const fs = require('fs')


fs.readFile('./grade.txt', 'utf8', function (err, dataStr) {
    if (err) {
        return console.log('fail to read the file!' + err.message)
    }
    console.log('succeed in reading the file ' + dataStr)

    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })

    //join to a new string
    const newStr = arrNew.join('\r\n')

    //write to a new txt
    fs.writeFile('./newgrade.txt', newStr, function (err) {
        if (err) {
            return console.log('fail to write the file！' + err.message)
        }
        console.log('succeed in writing the file')
    })
})