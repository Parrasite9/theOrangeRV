;/*FB_PKG_DELIM*/

/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("exif-js-2.3.0",[],(function(a,b,c,d,e,f){"use strict";var g={},h={exports:g};function i(){(function(){var a=!1,b=this,c=function(a){if(a instanceof c)return a;if(!(this instanceof c))return new c(a);this.EXIFwrapped=a};typeof g!=="undefined"?(typeof h!=="undefined"&&h.exports&&(g=h.exports=c),g.EXIF=c):b.EXIF=c;var d=c.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},e=c.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},f=c.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},i=c.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},j=c.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function k(a){return!!a.exifdata}function l(a,b){b||a.match(/^data\:([^\;]+)\;base64,/im)[1]||"";a=a.replace(/^data\:([^\;]+)\;base64,/gim,"");b=atob(a);a=b.length;var c=new ArrayBuffer(a),d=new Uint8Array(c);for(var e=0;e<a;e++)d[e]=b.charCodeAt(e);return c}function m(a,b){var c=new XMLHttpRequest();c.open("GET",a,!0);c.responseType="blob";c.onload=function(a){(this.status==200||this.status===0)&&b(this.response)};c.send()}function n(a,b){function d(d){var e=o(d);a.exifdata=e||{};e=p(d);a.iptcdata=e||{};if(c.isXmpEnabled){e=y(d);a.xmpdata=e||{}}b&&b.call(a)}if(a.src)if(/^data\:/i.test(a.src)){var e=l(a.src);d(e)}else if(/^blob\:/i.test(a.src)){var f=new FileReader();f.onload=function(a){d(a.target.result)};m(a.src,function(a){f.readAsArrayBuffer(a)})}else{var g=new XMLHttpRequest();g.onload=function(){if(this.status==200||this.status===0)d(g.response);else throw"Could not load image";g=null};g.open("GET",a.src,!0);g.responseType="arraybuffer";g.send(null)}else if(self.FileReader&&(a instanceof self.Blob||a instanceof self.File)){var f=new FileReader();f.onload=function(a){d(a.target.result)};f.readAsArrayBuffer(a)}}function o(a){var b=new DataView(a);if(b.getUint8(0)!=255||b.getUint8(1)!=216)return!1;var c=2;a=a.byteLength;var d;while(c<a){if(b.getUint8(c)!=255)return!1;d=b.getUint8(c+1);if(d==225)return x(b,c+4,b.getUint16(c+2)-2);else c+=2+b.getUint16(c+2)}}function p(a){var b=new DataView(a);if(b.getUint8(0)!=255||b.getUint8(1)!=216)return!1;var c=2,d=a.byteLength,e=function(a,b){return a.getUint8(b)===56&&a.getUint8(b+1)===66&&a.getUint8(b+2)===73&&a.getUint8(b+3)===77&&a.getUint8(b+4)===4&&a.getUint8(b+5)===4};while(c<d){if(e(b,c)){var f=b.getUint8(c+7);f%2!==0&&(f+=1);f===0&&(f=4);var g=c+8+f;f=b.getUint16(c+6+f);return r(a,g,f)}c++}}var q={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function r(a,b,c){a=new DataView(a);var d={},e,f,g=b;while(g<b+c)a.getUint8(g)===28&&a.getUint8(g+1)===2&&(f=a.getUint8(g+2),f in q&&(e=a.getInt16(g+3),f=q[f],e=w(a,g+5,e),d.hasOwnProperty(f)?d[f]instanceof Array?d[f].push(e):d[f]=[d[f],e]:d[f]=e)),g++;return d}function s(b,c,d,e,f){var g=b.getUint16(d,!f),h={},i,j,k;for(k=0;k<g;k++)i=d+k*12+2,j=e[b.getUint16(i,!f)],!j&&a&&!1,h[j]=t(b,i,c,d,f);return h}function t(a,b,c,d,e){d=a.getUint16(b+2,!e);var f=a.getUint32(b+4,!e);c=a.getUint32(b+8,!e)+c;var g,h,i,j;switch(d){case 1:case 7:if(f==1)return a.getUint8(b+8,!e);else{d=f>4?c:b+8;g=[];for(i=0;i<f;i++)g[i]=a.getUint8(d+i);return g}case 2:d=f>4?c:b+8;return w(a,d,f-1);case 3:if(f==1)return a.getUint16(b+8,!e);else{d=f>2?c:b+8;g=[];for(i=0;i<f;i++)g[i]=a.getUint16(d+2*i,!e);return g}case 4:if(f==1)return a.getUint32(b+8,!e);else{g=[];for(i=0;i<f;i++)g[i]=a.getUint32(c+4*i,!e);return g}case 5:if(f==1){d=a.getUint32(c,!e);j=a.getUint32(c+4,!e);h=new Number(d/j);h.numerator=d;h.denominator=j;return h}else{g=[];for(i=0;i<f;i++)d=a.getUint32(c+8*i,!e),j=a.getUint32(c+4+8*i,!e),g[i]=new Number(d/j),g[i].numerator=d,g[i].denominator=j;return g}case 9:if(f==1)return a.getInt32(b+8,!e);else{g=[];for(i=0;i<f;i++)g[i]=a.getInt32(c+4*i,!e);return g}case 10:if(f==1)return a.getInt32(c,!e)/a.getInt32(c+4,!e);else{g=[];for(i=0;i<f;i++)g[i]=a.getInt32(c+8*i,!e)/a.getInt32(c+4+8*i,!e);return g}}}function u(a,b,c){var d=a.getUint16(b,!c);return a.getUint32(b+2+d*12,!c)}function v(a,b,c,d){c=u(a,b+c,d);if(!c)return{};else if(c>a.byteLength)return{};c=s(a,b,b+c,i,d);if(c.Compression)switch(c.Compression){case 6:if(c.JpegIFOffset&&c.JpegIFByteCount){d=b+c.JpegIFOffset;b=c.JpegIFByteCount;c.blob=new Blob([new Uint8Array(a.buffer,d,b)],{type:"image/jpeg"})}break;case 1:break;default:}else c.PhotometricInterpretation==2;return c}function w(a,b,c){var d="";for(var e=b;e<b+c;e++)d+=String.fromCharCode(a.getUint8(e));return d}function x(a,b){if(w(a,b,4)!="Exif")return!1;var c,g,h,i;b=b+6;if(a.getUint16(b)==18761)c=!1;else if(a.getUint16(b)==19789)c=!0;else return!1;if(a.getUint16(b+2,!c)!=42)return!1;var k=a.getUint32(b+4,!c);if(k<8)return!1;g=s(a,b,b+k,e,c);if(g.ExifIFDPointer){i=s(a,b,b+g.ExifIFDPointer,d,c);for(h in i){switch(h){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":i[h]=j[h][i[h]];break;case"ExifVersion":case"FlashpixVersion":i[h]=String.fromCharCode(i[h][0],i[h][1],i[h][2],i[h][3]);break;case"ComponentsConfiguration":i[h]=j.Components[i[h][0]]+j.Components[i[h][1]]+j.Components[i[h][2]]+j.Components[i[h][3]];break}g[h]=i[h]}}if(g.GPSInfoIFDPointer){i=s(a,b,b+g.GPSInfoIFDPointer,f,c);for(h in i){switch(h){case"GPSVersionID":i[h]=i[h][0]+"."+i[h][1]+"."+i[h][2]+"."+i[h][3];break}g[h]=i[h]}}g.thumbnail=v(a,b,k,c);return g}function y(a){if(!("DOMParser"in self))return;var b=new DataView(a);if(b.getUint8(0)!=255||b.getUint8(1)!=216)return!1;var c=2;a=a.byteLength;var d=new DOMParser();while(c<a-4)if(w(b,c,4)=="http"){var e=c-1,f=b.getUint16(c-2)-1;e=w(b,e,f);f=e.indexOf("xmpmeta>")+8;e=e.substring(e.indexOf("<x:xmpmeta"),f);f=e.indexOf("x:xmpmeta")+10;e=e.slice(0,f)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+e.slice(f);f=d.parseFromString(e,"text/xml");return A(f)}else c++}function z(a){var b={};if(a.nodeType==1){if(a.attributes.length>0){b["@attributes"]={};for(var c=0;c<a.attributes.length;c++){var d=a.attributes.item(c);b["@attributes"][d.nodeName]=d.nodeValue}}}else if(a.nodeType==3)return a.nodeValue;if(a.hasChildNodes())for(d=0;d<a.childNodes.length;d++){c=a.childNodes.item(d);var e=c.nodeName;if(b[e]==null)b[e]=z(c);else{if(b[e].push==null){var f=b[e];b[e]=[];b[e].push(f)}b[e].push(z(c))}}return b}function A(a){try{var b={};if(a.children.length>0)for(var c=0;c<a.children.length;c++){var d=a.children.item(c),e=d.attributes;for(var f in e){var g=e[f],h=g.nodeName;g=g.nodeValue;h!==void 0&&(b[h]=g)}h=d.nodeName;if(typeof b[h]=="undefined")b[h]=z(d);else{if(typeof b[h].push=="undefined"){g=b[h];b[h]=[];b[h].push(g)}b[h].push(z(d))}}else b=a.textContent;return b}catch(a){}}c.enableXmp=function(){c.isXmpEnabled=!0};c.disableXmp=function(){c.isXmpEnabled=!1};c.getData=function(a,b){if((self.Image&&a instanceof self.Image||self.HTMLImageElement&&a instanceof self.HTMLImageElement)&&!a.complete)return!1;!k(a)?n(a,b):b&&b.call(a);return!0};c.getTag=function(a,b){if(!k(a))return;return a.exifdata[b]};c.getIptcTag=function(a,b){if(!k(a))return;return a.iptcdata[b]};c.getAllTags=function(a){if(!k(a))return{};var b;a=a.exifdata;var c={};for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c};c.getAllIptcTags=function(a){if(!k(a))return{};var b;a=a.iptcdata;var c={};for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c};c.pretty=function(a){if(!k(a))return"";var b;a=a.exifdata;var c="";for(b in a)a.hasOwnProperty(b)&&(typeof a[b]=="object"?a[b]instanceof Number?c+=b+" : "+a[b]+" ["+a[b].numerator+"/"+a[b].denominator+"]\r\n":c+=b+" : ["+a[b].length+" values]\r\n":c+=b+" : "+a[b]+"\r\n");return c};c.readFromBinaryFile=function(a){return o(a)}}).call(this)}var j=!1;function k(){j||(j=!0,i());return h.exports}function a(a){switch(a){case void 0:return k()}}e.exports=a}),null);
__d("exif-js",["exif-js-2.3.0"],(function(a,b,c,d,e,f){e.exports=b("exif-js-2.3.0")()}),null);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("remove-accents-0.4.2",[],(function(a,b,c,d,e,f){"use strict";b={};var g={exports:b};function h(){var a={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\u1ea4":"A","\u1eae":"A","\u1eb2":"A","\u1eb4":"A","\u1eb6":"A","\xc6":"AE","\u1ea6":"A","\u1eb0":"A","\u0202":"A","\xc7":"C","\u1e08":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\u1ebe":"E","\u1e16":"E","\u1ec0":"E","\u1e14":"E","\u1e1c":"E","\u0206":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\u1e2e":"I","\u020a":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\u1ed0":"O","\u1e4c":"O","\u1e52":"O","\u020e":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\u1ea5":"a","\u1eaf":"a","\u1eb3":"a","\u1eb5":"a","\u1eb7":"a","\xe6":"ae","\u1ea7":"a","\u1eb1":"a","\u0203":"a","\xe7":"c","\u1e09":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\u1ebf":"e","\u1e17":"e","\u1ec1":"e","\u1e15":"e","\u1e1d":"e","\u0207":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\u1e2f":"i","\u020b":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\u1ed1":"o","\u1e4d":"o","\u1e53":"o","\u020f":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xff":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u0108":"C","\u0109":"c","\u010a":"C","\u010b":"c","\u010c":"C","\u010d":"c","C\u0306":"C","c\u0306":"c","\u010e":"D","\u010f":"d","\u0110":"D","\u0111":"d","\u0112":"E","\u0113":"e","\u0114":"E","\u0115":"e","\u0116":"E","\u0117":"e","\u0118":"E","\u0119":"e","\u011a":"E","\u011b":"e","\u011c":"G","\u01f4":"G","\u011d":"g","\u01f5":"g","\u011e":"G","\u011f":"g","\u0120":"G","\u0121":"g","\u0122":"G","\u0123":"g","\u0124":"H","\u0125":"h","\u0126":"H","\u0127":"h","\u1e2a":"H","\u1e2b":"h","\u0128":"I","\u0129":"i","\u012a":"I","\u012b":"i","\u012c":"I","\u012d":"i","\u012e":"I","\u012f":"i","\u0130":"I","\u0131":"i","\u0132":"IJ","\u0133":"ij","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u1e30":"K","\u1e31":"k","K\u0306":"K","k\u0306":"k","\u0139":"L","\u013a":"l","\u013b":"L","\u013c":"l","\u013d":"L","\u013e":"l","\u013f":"L","\u0140":"l","\u0141":"l","\u0142":"l","\u1e3e":"M","\u1e3f":"m","M\u0306":"M","m\u0306":"m","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u0149":"n","N\u0306":"N","n\u0306":"n","\u014c":"O","\u014d":"o","\u014e":"O","\u014f":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","P\u0306":"P","p\u0306":"p","\u0154":"R","\u0155":"r","\u0156":"R","\u0157":"r","\u0158":"R","\u0159":"r","R\u0306":"R","r\u0306":"r","\u0212":"R","\u0213":"r","\u015a":"S","\u015b":"s","\u015c":"S","\u015d":"s","\u015e":"S","\u0218":"S","\u0219":"s","\u015f":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u021b":"t","\u021a":"T","\u0164":"T","\u0165":"t","\u0166":"T","\u0167":"t","T\u0306":"T","t\u0306":"t","\u0168":"U","\u0169":"u","\u016a":"U","\u016b":"u","\u016c":"U","\u016d":"u","\u016e":"U","\u016f":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0216":"U","\u0217":"u","V\u0306":"V","v\u0306":"v","\u0174":"W","\u0175":"w","\u1e82":"W","\u1e83":"w","X\u0306":"X","x\u0306":"x","\u0176":"Y","\u0177":"y","\u0178":"Y","Y\u0306":"Y","y\u0306":"y","\u0179":"Z","\u017a":"z","\u017b":"Z","\u017c":"z","\u017d":"Z","\u017e":"z","\u017f":"s","\u0192":"f","\u01a0":"O","\u01a1":"o","\u01af":"U","\u01b0":"u","\u01cd":"A","\u01ce":"a","\u01cf":"I","\u01d0":"i","\u01d1":"O","\u01d2":"o","\u01d3":"U","\u01d4":"u","\u01d5":"U","\u01d6":"u","\u01d7":"U","\u01d8":"u","\u01d9":"U","\u01da":"u","\u01db":"U","\u01dc":"u","\u1ee8":"U","\u1ee9":"u","\u1e78":"U","\u1e79":"u","\u01fa":"A","\u01fb":"a","\u01fc":"AE","\u01fd":"ae","\u01fe":"O","\u01ff":"o","\xde":"TH","\xfe":"th","\u1e54":"P","\u1e55":"p","\u1e64":"S","\u1e65":"s","X\u0301":"X","x\u0301":"x","\u0403":"\u0413","\u0453":"\u0433","\u040c":"\u041a","\u045c":"\u043a","A\u030b":"A","a\u030b":"a","E\u030b":"E","e\u030b":"e","I\u030b":"I","i\u030b":"i","\u01f8":"N","\u01f9":"n","\u1ed2":"O","\u1ed3":"o","\u1e50":"O","\u1e51":"o","\u1eea":"U","\u1eeb":"u","\u1e80":"W","\u1e81":"w","\u1ef2":"Y","\u1ef3":"y","\u0200":"A","\u0201":"a","\u0204":"E","\u0205":"e","\u0208":"I","\u0209":"i","\u020c":"O","\u020d":"o","\u0210":"R","\u0211":"r","\u0214":"U","\u0215":"u","B\u030c":"B","b\u030c":"b","\u010c\u0323":"C","\u010d\u0323":"c","\xca\u030c":"E","\xea\u030c":"e","F\u030c":"F","f\u030c":"f","\u01e6":"G","\u01e7":"g","\u021e":"H","\u021f":"h","J\u030c":"J","\u01f0":"j","\u01e8":"K","\u01e9":"k","M\u030c":"M","m\u030c":"m","P\u030c":"P","p\u030c":"p","Q\u030c":"Q","q\u030c":"q","\u0158\u0329":"R","\u0159\u0329":"r","\u1e66":"S","\u1e67":"s","V\u030c":"V","v\u030c":"v","W\u030c":"W","w\u030c":"w","X\u030c":"X","x\u030c":"x","Y\u030c":"Y","y\u030c":"y","A\u0327":"A","a\u0327":"a","B\u0327":"B","b\u0327":"b","\u1e10":"D","\u1e11":"d","\u0228":"E","\u0229":"e","\u0190\u0327":"E","\u025b\u0327":"e","\u1e28":"H","\u1e29":"h","I\u0327":"I","i\u0327":"i","\u0197\u0327":"I","\u0268\u0327":"i","M\u0327":"M","m\u0327":"m","O\u0327":"O","o\u0327":"o","Q\u0327":"Q","q\u0327":"q","U\u0327":"U","u\u0327":"u","X\u0327":"X","x\u0327":"x","Z\u0327":"Z","z\u0327":"z"},b=Object.keys(a).join("|"),c=new RegExp(b,"g"),d=new RegExp(b,"");b=function(b){return b.replace(c,function(b){return a[b]})};var e=function(a){return!!a.match(d)};g.exports=b;g.exports.has=e;g.exports.remove=b}var i=!1;function j(){i||(i=!0,h());return g.exports}function a(a){switch(a){case void 0:return j()}}e.exports=a}),null);
__d("remove-accents",["remove-accents-0.4.2"],(function(a,b,c,d,e,f){e.exports=b("remove-accents-0.4.2")()}),null);