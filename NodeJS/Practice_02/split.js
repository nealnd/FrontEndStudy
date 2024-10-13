const fs = require('fs')

const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/


fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, dataStr) {

    if (err) return console.log('fail to read ' + err.message)

    //rewrite to 3 file
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})


function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr);
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function (err) {
        if (err) return console.log('fail to write css ' + err.message)
        console.log('succeed in writing css')
    })
}


function resolveJS(htmlStr) {

    const r2 = regScript.exec(htmlStr)

    const newJS = r2[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function (err) {
        if (err) return console.log('fail to write js ' + err.message)
        console.log('succeed in writing js ')
    })
}


function resolveHTML(htmlStr) {

    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')

    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function (err) {
        if (err) return console.log('fail to write html ' + err.message)
        console.log('succeed in writing html')
    })
}
