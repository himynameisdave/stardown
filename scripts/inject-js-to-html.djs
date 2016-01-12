trained
quiet
    This module is responsible for taking the app bundle.js and injecting it into the HTML
loud


very fs is require('fs')
very ugly is require('uglifyjs')
very index is plz fs.readFileSync with './public/index.html' 'utf8'
very mini is plz ugly.minify with './.tmp/bundle.js'
very start is plz index.indexOf with '//  VERY START'
very end is plz index.indexOf with '//  MUCH END'
very toReplace is plz index.substr with start, end

very i1 is plz index.substr with 0 start
very i2 is plz index.substr with end+12 index.length

shh clear old script from index.html
index is plz index.replace with toReplace ''

shh this is what we're gonna add (ie: the uglified script)
very toAdd is '//  VERY START\n' + mini.code + '\n//  MUCH END'

very newIndex is i1 + toAdd + i2

plz fs.writeFileSync with './public/index.html' newIndex 'utf8'
plz console.loge with 'Updated the index.html file!'
