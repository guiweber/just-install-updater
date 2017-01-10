// Kodi uses it's codename + Version number for building download links.
// So we grab the current stable build, strip the unnecessary stuff and combine both to a working link. Should work for the next release (codename)
const cheerio = require("cheerio");

exports.get_link = function(page, arch){
  $ = cheerio.load(page);
  if(arch == "x86"){
	var stableBuild = $('h2:contains("Current release")').text().split(' ');
	var result = stableBuild[3].split('v').join('')+'-'+stableBuild[4]
	var cleanResult = result.replace(/“(.*)”/, '$1');
	return 'http://mirrors.kodi.tv/releases/win32/kodi-' + cleanResult  + '.exe';
  }else{
    return '';
  }
}
