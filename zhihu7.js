
/***************************************

脚本功能：知乎 盐故事+知识+书刊+去部分广告
下载地址：appstore 
软件版本：所有 
脚本作者：伟人
更新时间：2023-03-05
问题反馈：QQ+
作者QQ:
测试版本: 8.52.0
QQ会员群：添加作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
作者忠告: 如果你是大佬请不要盗用此包，创作不易谢谢各位，
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
忠告:请添加频道获取食用方法


**************************************

[mitm]

hostname = 183.204.14.111,*1*1*,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card|sku\/reversion_sku_ext).*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/zhihu7.js
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books|market\/paid_magazine).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/Scripts/main/shukan2.js
***************************************/

/*202302191200
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', djnoo = '__0xf58ab',  __0xf58ab=['Yy7DtBg=','woXCiULCssK2','asK6wrxLMg==','UiDCiy3Ckg==','eD3DiMOIJA==','w7ISQwd0','w7J/WsOaRA==','ecKNZcKDw58=','w7nCiE1Vfw==','w58AdRon','wo/Dj8OZw6QC','bsKmwpvDjjo=','GsKRBx/DiQ==','HcKlFhHDkw==','wqbCgcOUWcKp','NE8EewE=','w5A6fBNV','V8OnKcO9woM=','JE/DunMP','aAbCozd+','AQ3CmMKtwqo=','CFTDjGw4','GjlQw6k7','eQbDkMOCBA==','CBLCiyIt','AhxWw5Ev','F8OJPMOjQQ==','w7Y+w5c=','WwNZw5vCvw==','QSVlw4PCsA==','NcOJEMOqYQ==','SsKRbQ==','d8KUdA==','w5BCRw==','csKqGsOGw6I=','RC3Dm8OcCQ==','VSTCj1xc','HwLCrMK4wpQ=','QsKEwprDqQw=','wovDqG5JDA==','SGoXwrdD','djvDtwAU','w7BjXMO4TA==','w6tmQ8OiUQ==','w5HCl2xTTQ==','wqfCjcOUXMKwGA==','wpvCnsKj','w7FOwpE=','w5dowop+wqvDvU0/csKPW2YDScOVw6hBDMOGZHgmPsOHw78KL8OmVAnCrDzCoA==','FsOhw6PChWLClsOKw73Ds8KwLcKkXMK+NeeCjeWHuea1ieWIseS/l+iCuiNI6aCC6YCe','M8O/woPDnRfDhwHDiSvCgT7DvsOaw4Mqw5DCgsK2wofDq+WIh+afpg==','RsOEesKvw6xtJcK6Ik7CscOZwqhW','N0PDlMK4w6Vc','woXDkDQ=','U8KVAA==','d8KWwo/DpDE=','VAFHw6TCuQ==','wovComU=','dC/Cqw==','aGdhw6dW','WB/CrxNe','wqESfzbDiQ==','UiPCkC/Clw==','dsOowrjDnjc=','wooUw43DuDA=','GsOBwp3DpUg=','wrbCmMOfdsKN','GMKCEiTDoFFZ','V8OWSArCrQ==','w4oubgBt','w6xwwrdcwoE=','wo47w5zDhQlkSg==','wp/CukzCjsKm','wrTDk8ODw708','Z8K+wqJaPA==','TzHCmy7Ctg==','FsKIFSnDiA==','w7NPwrZawoY=','wqnClUPDhcOO','cRAbPjE=','HT92w7UW','w7dhXsOCWw==','HcKCLzDDhA==','w4XCoMOlGsOT','w6FBwq5YwqQ=','w5pfwopywqQ=','wqfDlsOhw54d','djXCqwt+','BMOSNsOrWE5zVGM1wogVwp/CswhQ','U8KfWEXDicKUUCTDpB8Bw7gCwp0mw6/DlUnChMORf1PCoMOCAlttwqgrwojDoMO1w4XDlEArwqrCqVrCucOIXU/Cs8K2CcOywoTDpTrClcOqw7scVwjDgEota3LDlg==','eMOlwoPDnQ==','Q8K5wqlyNg==','wo3DlnlUKA==','UsOsOcOSwqQ=','woLCvsONe8KS','W8O6wpPDuhA=','PxfCl8Kowpw=','wq0lSgk=','cATCqTpW','wprDrcOQw6Ym','ecKfdcKk','GUkzdjA=','Tl5xw4Ba','UMO/wrPDhDU=','VMK7IsOpw6w=','XcK2wqzDpCk=','wp4xw4jDkA==','b2IT','wobDm8OGw4IlVsO8wrtYw4cB','G8OGwqvDmlk=','CcKcMzXDkArCtyrDjCrDnyZFMsKObMKCcGQF','w4kCw5ogw6Rqw5MMJFHCtgDCtcOzeig8Rz7Dq8Kl','c34bwoB/TCY=','w6oSfx1CTcOx','wqDClcKeVsKTwqNVQi/Dv8On','wqTCmcKeZcKGwrlA','wrrCmMOLUMO8RSjCr8Okwr/kvLjku4A=','TArDk8OqMMOcfg==','XyXCoTbClxjCi8OcfMKEJRA=','UcKmwpfDkDnCpi0=','d1omUDYRwobCvcOZwq5DZgIDY8Ojwo0/w6rCscKvw5LCt1fDokFdasK9wonCmFZ6w43CrkvDn8KNwrjCpMO2DcOLFsKbwprDmsKZdMKJYMOpwpDCi8OrKhPDuMOBwofCtTs0w4DCkcO/wp8Ew7LDixfCqyfDq3Erw6Fwwqdxw5DCpxrCs8O9wq7CoSfCgcKJA8K+w4pZwprDiFosw7x7','wr3Cl8OCUMKmMGw=','wqbCnMOWWcK/HG8=','w5rCknFPa8KQG8O/XcK2w6EYFRhwGMOWAcOLwp9nw5vDvcOEKsKxfkXCvcKHw6jCvBI=','Z8OFCMOcwpbDu0k=','LcOWcRrCncORFkTCqiVJw7QIwpg+54CN5YWP5raf5YmC5L696IGXPsK66aG66YCq','RhfCsFleIcOB','w54qw4XDnQRiDcOKScKvcsK5wpsQBcKCw5TCsEvChOWIpOadvA==','f8KfdsK8w7bDlcOF','w6sYYRZtS8OxCDgYRmhbw7s=','w547SBAQ','XzjCmiXChifDjw==','DxPCkcO6YcODL8OSw6rCgcOQ','w45twotnwoA=','wqjCtlTDnQ==','OEPDlMKrw7RG','XgPCvglLwo7DuA==','bcOBcBrChsOQJ2/CuzhF','5bWP6Ke+6Zem6K+r5YWx5ayx','UBPCtFQ=','Q8K0wqZvPcOi','w7PCssOrD8Oqw6ID','woXDi8OLw609VsKrwrw=','5pa15rOu6KaS55y6772d54OJ5YSP5q6G5aao5rSn5YqPEH/lj67pp4nvvoo=','w4rCgWoj','wrXCmcKAfcKCwqg=','w6dewqx1wq9Lwrhq','XMO3w6LCgWXDg8KLwo3Ds8O7OMK1UcOTcl1Qw5fDv8Oaw74m','RwbCslxRJcONwpo4','Wg7Dl8On','wp4xw5jDnQdq','eRMDDArCssKe','a8KkwqLDsRDCpcKlKsKQfWg=','56uG5Y6J6ZiD6Kyr','w7wWexA=','wobCjnNAJsK3','HsKHKyjDkg3CsA==','w6JmTsOLQUXCqcO7','YUdlTXEMw4PCnsKewqAZOAhfcA==','YVlg','IsO5wrvDqmw+TSBL','P0g6WCMdwp3DjMOPwrNCak4W','w5QIw5g=','w696woM=','54is5pyr5Y+g772UF8Kn5L2c5a2o5pyt5b+556us77+a6L+66KyB5pe65o2w5ou15Lus55m85bWW5L2i','Q8OgRg==','5Yqa6ZiN54un5pyj5Y2h77yDw48a5L2M5a645p+A5b2W56mM','UgfCrlZLK8OLwpJhw6TCvsKueG4qw70=','an3ComvDnkLCgcOZMsKpYA1qfMOJKsKyTxZOwrLDu8KHD3N8wp8qV1bDs3sQwpFOwr48wos+w6VxwrZUw5nCucKpwoDCiwxnSEHDu8KLw4YMbHFKdMKZw5k=','w6JZwqtq','VT7CnynCkA==','DWlnLQk=','I8O9Og==','wrrClsKp','IH/DoW4UXw==','wr81Vx7DkcOOacOE','EsK/w5HDgGvCuXjCpMKUw4TCqS9a','bcKrwrBIEg==','PB7CosK2wro=','Km3DgHsD','w7vCiMOQPMOm','UQJqw4bCsg==','HcKGGBnDvg==','w4XCpHAjYg==','VMOfU8KNw6E=','ZwzDh8OFHQ==','KcOCL8O4ew==','JDzCv8KnwrY=','dF1xw6Fw','B3ckWjs=','McODwrPDnGU=','by05DQk=','Qh3CsDXCkg==','RCLDqy46','d8Kzwo7DtgI=','Q8KQUw==','An9/ISc=','RMOwYAHCjQ==','KcOjPMOnSA==','M2pzABc=','HQ/CjMKSwrw=','KsOgO8OJRQ==','wp4mw5/DuT0=','M0MIQxI=','UwTCpExH','fGgnwpdX','w5LCn29vYQ==','LAHCoMKswqHDjFQ=','dSRDw5LCkjTDkg==','AirDizzDjhTCnsKaO8KKZglzP8OBDcOr','EMKYKh3Dng==','C8KTLTI=','w65PwqF7woBKwqNpbg==','wpHCmXxXJg==','wpUww4rDhg==','O8O4wrg=','dMO5wpjDhgk=','w5l4woV7wpM=','RgbCsxLCkg==','w6sHYxhX','Pw7CnBsKw4fCuA==','DWlxNw==','Vx3CrkZQLsOB','wrUvXg==','wofDl2dSM8O/wp4=','QcOZdcKrw4c=','w43Cj3AxZ8KPWw==','wr0lWwjDgg==','w5PCiHJMW8KJDA==','KmXDqG4HX3pMHg==','B2h5KxLCuCM=','RsKTHsOsw4Q=','OEnDlMKsw75Yw7c=','w6ZyXsO6','w5FOwoBlwq4=','wqTCtlfDu8Os','RMKNf8KFw6Q=','w4M+w6xpw4E=','cMOkw5DCpHE=','RcKIaMKow5s=','SMK0wonDqjU=','wpPDtEFHCg==','dsOYwobDmzE=','B8O2NMOyQg==','WMO8wpPDvAg=','KHHDt8Krw5I=','TyzDiAU4','woDDt3hlHw==','dVslwqxB','wrbCocO+R8K4','aMKpbMKhw6I=','wqDCnMOVQQ==','wqPDicOkw54e','QMK2AMOqw5Q='];(function(_0x367521,_0x1d7f00){var _0x47d992=function(_0x4e318a){while(--_0x4e318a){_0x367521['push'](_0x367521['shift']());}};var _0x4a8cf5=function(){var _0x1ea4e0={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x122c02,_0x23251f,_0x41ec72,_0x2bc550){_0x2bc550=_0x2bc550||{};var _0x23735c=_0x23251f+'='+_0x41ec72;var _0x4d5d89=0x0;for(var _0x4d5d89=0x0,_0x24e80e=_0x122c02['length'];_0x4d5d89<_0x24e80e;_0x4d5d89++){var _0x1c14a0=_0x122c02[_0x4d5d89];_0x23735c+=';\x20'+_0x1c14a0;var _0x622f3d=_0x122c02[_0x1c14a0];_0x122c02['push'](_0x622f3d);_0x24e80e=_0x122c02['length'];if(_0x622f3d!==!![]){_0x23735c+='='+_0x622f3d;}}_0x2bc550['cookie']=_0x23735c;},'removeCookie':function(){return'dev';},'getCookie':function(_0x25bca7,_0x1d4c4f){_0x25bca7=_0x25bca7||function(_0x34a613){return _0x34a613;};var _0x7d541c=_0x25bca7(new RegExp('(?:^|;\x20)'+_0x1d4c4f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x4e023a=function(_0x2fc96f,_0x335e94){_0x2fc96f(++_0x335e94);};_0x4e023a(_0x47d992,_0x1d7f00);return _0x7d541c?decodeURIComponent(_0x7d541c[0x1]):undefined;}};var _0x140fa8=function(){var _0x391d72=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x391d72['test'](_0x1ea4e0['removeCookie']['toString']());};_0x1ea4e0['updateCookie']=_0x140fa8;var _0x39d1ac='';var _0x23eef4=_0x1ea4e0['updateCookie']();if(!_0x23eef4){_0x1ea4e0['setCookie'](['*'],'counter',0x1);}else if(_0x23eef4){_0x39d1ac=_0x1ea4e0['getCookie'](null,'counter');}else{_0x1ea4e0['removeCookie']();}};_0x4a8cf5();}(__0xf58ab,0x6a));var _0xaa20=function(_0x4ffbbf,_0x5d7be5){_0x4ffbbf=_0x4ffbbf-0x0;var _0xa5d4b5=__0xf58ab[_0x4ffbbf];if(_0xaa20['initialized']===undefined){(function(){var _0x8166be=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x21d8d1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x8166be['atob']||(_0x8166be['atob']=function(_0x18bb2a){var _0x263bfa=String(_0x18bb2a)['replace'](/=+$/,'');for(var _0x1f4384=0x0,_0x2c2f98,_0x15e11e,_0x120c3a=0x0,_0x6a0000='';_0x15e11e=_0x263bfa['charAt'](_0x120c3a++);~_0x15e11e&&(_0x2c2f98=_0x1f4384%0x4?_0x2c2f98*0x40+_0x15e11e:_0x15e11e,_0x1f4384++%0x4)?_0x6a0000+=String['fromCharCode'](0xff&_0x2c2f98>>(-0x2*_0x1f4384&0x6)):0x0){_0x15e11e=_0x21d8d1['indexOf'](_0x15e11e);}return _0x6a0000;});}());var _0x14bc61=function(_0x3b067a,_0x5a8c88){var _0x84035d=[],_0x48b871=0x0,_0x54d15c,_0x13f6cf='',_0x5ac49c='';_0x3b067a=atob(_0x3b067a);for(var _0xf50933=0x0,_0x416485=_0x3b067a['length'];_0xf50933<_0x416485;_0xf50933++){_0x5ac49c+='%'+('00'+_0x3b067a['charCodeAt'](_0xf50933)['toString'](0x10))['slice'](-0x2);}_0x3b067a=decodeURIComponent(_0x5ac49c);for(var _0x21f0a9=0x0;_0x21f0a9<0x100;_0x21f0a9++){_0x84035d[_0x21f0a9]=_0x21f0a9;}for(_0x21f0a9=0x0;_0x21f0a9<0x100;_0x21f0a9++){_0x48b871=(_0x48b871+_0x84035d[_0x21f0a9]+_0x5a8c88['charCodeAt'](_0x21f0a9%_0x5a8c88['length']))%0x100;_0x54d15c=_0x84035d[_0x21f0a9];_0x84035d[_0x21f0a9]=_0x84035d[_0x48b871];_0x84035d[_0x48b871]=_0x54d15c;}_0x21f0a9=0x0;_0x48b871=0x0;for(var _0x1f6768=0x0;_0x1f6768<_0x3b067a['length'];_0x1f6768++){_0x21f0a9=(_0x21f0a9+0x1)%0x100;_0x48b871=(_0x48b871+_0x84035d[_0x21f0a9])%0x100;_0x54d15c=_0x84035d[_0x21f0a9];_0x84035d[_0x21f0a9]=_0x84035d[_0x48b871];_0x84035d[_0x48b871]=_0x54d15c;_0x13f6cf+=String['fromCharCode'](_0x3b067a['charCodeAt'](_0x1f6768)^_0x84035d[(_0x84035d[_0x21f0a9]+_0x84035d[_0x48b871])%0x100]);}return _0x13f6cf;};_0xaa20['rc4']=_0x14bc61;_0xaa20['data']={};_0xaa20['initialized']=!![];}var _0x3cc181=_0xaa20['data'][_0x4ffbbf];if(_0x3cc181===undefined){if(_0xaa20['once']===undefined){var _0x14c429=function(_0x3c277e){this['rc4Bytes']=_0x3c277e;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x14c429['prototype']['checkState']=function(){var _0x280f3d=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x280f3d['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x14c429['prototype']['runState']=function(_0x26af7a){if(!Boolean(~_0x26af7a)){return _0x26af7a;}return this['getState'](this['rc4Bytes']);};_0x14c429['prototype']['getState']=function(_0x42d3e8){for(var _0x2d26e1=0x0,_0xee754c=this['states']['length'];_0x2d26e1<_0xee754c;_0x2d26e1++){this['states']['push'](Math['round'](Math['random']()));_0xee754c=this['states']['length'];}return _0x42d3e8(this['states'][0x0]);};new _0x14c429(_0xaa20)['checkState']();_0xaa20['once']=!![];}_0xa5d4b5=_0xaa20['rc4'](_0xa5d4b5,_0x5d7be5);_0xaa20['data'][_0x4ffbbf]=_0xa5d4b5;}else{_0xa5d4b5=_0x3cc181;}return _0xa5d4b5;};var _0x3a9775=$response[_0xaa20('0x0','9fx1')];var _0xc84fee=$request[_0xaa20('0x1','QbML')];const _0x3d90c0=_0xaa20('0x2','xGa^');setInterval(function(){var _0x1d543b={'LQtUS':function _0x5ceb7e(_0x225e74){return _0x225e74();}};_0x1d543b[_0xaa20('0x3','(^Ig')](_0x4aa1e1);},0xfa0);const _0x326088=_0xaa20('0x4','3qz5');const _0x317caf=_0xaa20('0x5','n5cW');if(_0xc84fee[_0xaa20('0x6','QbML')](_0x3d90c0)!=-0x1){_0x3a9775=_0x3a9775[_0xaa20('0x7','A%)F')](/vip_type":\d/g,_0xaa20('0x8','$LsM'))[_0xaa20('0x9','$LsM')](/name":"[^"]+/g,_0xaa20('0xa','ZNh^'))[_0xaa20('0xb','eU1$')](/is_vip":\w+/g,_0xaa20('0xc','QG^b'))[_0xaa20('0xd','&)Vs')](/"avatar_url":"[^"]+/g,_0xaa20('0xe','P$68'));}if(_0xc84fee[_0xaa20('0xf','ZNh^')](_0x326088)!=-0x1){_0x3a9775=_0x3a9775[_0xaa20('0x10','ZNh^')](/jump_url":"[^"]+/g,_0xaa20('0x11','Sivv'))[_0xaa20('0x12','q)Mr')](/"button_text":"[^"]+/g,_0xaa20('0x13','[ZLP'))[_0xaa20('0x14','5Vyf')](/"title":"[^"]+/g,_0xaa20('0x15','9fx1'))[_0xaa20('0x16','59(v')](/songNeedPay":\d/g,_0xaa20('0x17','A%)F'));}var _0x748426=JSON[_0xaa20('0x18','Vbm!')](_0x3a9775);if(_0xc84fee[_0xaa20('0x19','QG^b')](_0x317caf)!=-0x1){var _0xfb2e54=_0xaa20('0x1a','eU1$')[_0xaa20('0x1b','Z0gt')]('|'),_0x3b5c81=0x0;while(!![]){switch(_0xfb2e54[_0x3b5c81++]){case'0':_0x748426[_0xaa20('0x1c','xzWY')][_0xaa20('0x1d','ZJoH')][_0xaa20('0x1e','8%xC')][0x1][_0xaa20('0x1f','[ZLP')]=_0xaa20('0x20','Z0gt');continue;case'1':_0x748426[_0xaa20('0x21','5Vyf')][_0xaa20('0x22','7&nT')][_0xaa20('0x23','gOlJ')][0x1][_0xaa20('0x24','xGa^')]=_0xaa20('0x25','P$68');continue;case'2':_0x748426[_0xaa20('0x26','VmVH')][_0xaa20('0x27','$LsM')][_0xaa20('0x23','gOlJ')][0x1][_0xaa20('0x28','#I9e')]=_0xaa20('0x29','Ntm[');continue;case'3':_0x3a9775=JSON[_0xaa20('0x2a','5Vyf')](_0x748426);continue;case'4':_0x748426[_0xaa20('0x2b','eU1$')][_0xaa20('0x2c','9fx1')][_0xaa20('0x2d','uI%*')][0x1][_0xaa20('0x2e','uEWc')]=_0xaa20('0x2f','59(v');continue;case'5':delete _0x748426[_0xaa20('0x30','A%)F')][_0xaa20('0x31','SeHR')][_0xaa20('0x32','3qz5')][0x0][_0xaa20('0x33','&c)R')];continue;}break;}}$done({'body':_0x3a9775});;(function(_0x2babf9,_0x45eb0e,_0x10fe20){var _0x434e42={'MzxSJ':_0xaa20('0x34','P$68'),'epKpt':_0xaa20('0x35','mnck'),'jOOGc':function _0x8e31da(_0x21f2b7,_0xa86381){return _0x21f2b7!==_0xa86381;},'GIGgO':_0xaa20('0x36','(^Ig'),'atGEC':function _0x3ee831(_0x21ef61,_0x1fc0f4){return _0x21ef61===_0x1fc0f4;},'kDnaj':_0xaa20('0x37','P$68'),'YcdCL':_0xaa20('0x38','n5cW'),'KewpW':_0xaa20('0x39','Z0gt'),'kRqxx':function _0x2409ca(_0x1d6273){return _0x1d6273();},'pveWH':function _0x2ad5bf(_0x2dd885,_0x58ea6){return _0x2dd885+_0x58ea6;},'RLtky':_0xaa20('0x3a','49jh'),'fTlSo':function _0x427161(_0x43237b,_0x450624){return _0x43237b!==_0x450624;},'tKNul':_0xaa20('0x3b','[ZLP'),'SilBW':_0xaa20('0x3c','n5cW'),'TpiJZ':function _0x1af2f2(_0x493a0c,_0x48b488,_0x34b8d3){return _0x493a0c(_0x48b488,_0x34b8d3);},'IoQjK':_0xaa20('0x3d','5Vyf'),'qZOyR':_0xaa20('0x3e','QG^b'),'yqpVK':function _0x435523(_0x1b7bfb,_0x2169cf){return _0x1b7bfb(_0x2169cf);},'gwMKE':_0xaa20('0x3f','#I9e'),'aWIMn':_0xaa20('0x40','QG^b'),'rxrlw':_0xaa20('0x41','49jh'),'atTJC':function _0x21ab3f(_0xf179d7,_0x57a848){return _0xf179d7===_0x57a848;},'HMsbv':_0xaa20('0x42','j8Q('),'BGQMt':_0xaa20('0x43','$LsM'),'NcVrd':function _0x5587ef(_0x4465f4,_0x1a1ea8){return _0x4465f4!==_0x1a1ea8;},'GisDU':_0xaa20('0x44','nhWU'),'TsyJH':function _0x5b21aa(_0x117270,_0x80f45b){return _0x117270===_0x80f45b;},'yQRrW':_0xaa20('0x45','jhR9'),'undkm':_0xaa20('0x46','&)Vs'),'zuovd':function _0x33346e(_0x41fd5c){return _0x41fd5c();}};var _0x187ac7=_0x434e42[_0xaa20('0x47','7&nT')][_0xaa20('0x48','ajH6')]('|'),_0x174eae=0x0;while(!![]){switch(_0x187ac7[_0x174eae++]){case'0':_0x10fe20='al';continue;case'1':try{_0x10fe20+=_0x434e42[_0xaa20('0x49','nhWU')];_0x45eb0e=encode_version;if(!(_0x434e42[_0xaa20('0x4a','gOlJ')](typeof _0x45eb0e,_0x434e42[_0xaa20('0x4b','g@B1')])&&_0x434e42[_0xaa20('0x4c','3qz5')](_0x45eb0e,_0x434e42[_0xaa20('0x4d','VmVH')]))){if(_0x434e42[_0xaa20('0x4e','yS0R')](_0x434e42[_0xaa20('0x4f','eU1$')],_0x434e42[_0xaa20('0x50','j8Q(')])){var _0x1c5458=function(){while(!![]){}};return _0x434e42[_0xaa20('0x51','ajH6')](_0x1c5458);}else{_0x2babf9[_0x10fe20](_0x434e42[_0xaa20('0x52','mnck')]('删除',_0x434e42[_0xaa20('0x53','P$68')]));}}}catch(_0x22d5d2){if(_0x434e42[_0xaa20('0x54','(^Ig')](_0x434e42[_0xaa20('0x55','uI%*')],_0x434e42[_0xaa20('0x56','QG^b')])){}else{_0x2babf9[_0x10fe20](_0x434e42[_0xaa20('0x57','vrwl')]);}}continue;case'2':var _0x52879d=_0x434e42[_0xaa20('0x58','&)Vs')](_0x2bb26f,this,function(){var _0x5261a2=function(){var _0x46802e={'fxhyZ':function _0xaad3df(_0x1ff5e5,_0x460387){return _0x1ff5e5!==_0x460387;},'KDdod':_0xaa20('0x59','59(v')};if(_0x46802e[_0xaa20('0x5a','49jh')](_0x46802e[_0xaa20('0x5b','[ZLP')],_0x46802e[_0xaa20('0x5c','j8Q(')])){return debuggerProtection;}else{}};var _0x389ce8=_0x5aed60[_0xaa20('0x5d','49jh')](typeof window,_0x5aed60[_0xaa20('0x5e','ajH6')])?window:_0x5aed60[_0xaa20('0x5f','j8Q(')](typeof process,_0x5aed60[_0xaa20('0x60','9fx1')])&&_0x5aed60[_0xaa20('0x61','P$68')](typeof require,_0x5aed60[_0xaa20('0x62','5Vyf')])&&_0x5aed60[_0xaa20('0x63','QbML')](typeof global,_0x5aed60[_0xaa20('0x64','Sivv')])?global:this;if(!_0x389ce8[_0xaa20('0x65','ajH6')]){_0x389ce8[_0xaa20('0x66','g@B1')]=function(_0xeea071){var _0xb4f81f={'ljuAc':_0xaa20('0x67','QG^b')};var _0xb4558e=_0xb4f81f[_0xaa20('0x68','3qz5')][_0xaa20('0x48','ajH6')]('|'),_0x34a9b6=0x0;while(!![]){switch(_0xb4558e[_0x34a9b6++]){case'0':_0x10fe20[_0xaa20('0x69','3qz5')]=_0xeea071;continue;case'1':_0x10fe20[_0xaa20('0x6a','#I9e')]=_0xeea071;continue;case'2':_0x10fe20[_0xaa20('0x6b','SeHR')]=_0xeea071;continue;case'3':_0x10fe20[_0xaa20('0x6c','9fx1')]=_0xeea071;continue;case'4':var _0x10fe20={};continue;case'5':_0x10fe20[_0xaa20('0x6d','(^Ig')]=_0xeea071;continue;case'6':_0x10fe20[_0xaa20('0x6e','k9VT')]=_0xeea071;continue;case'7':_0x10fe20[_0xaa20('0x6f','Z0gt')]=_0xeea071;continue;case'8':return _0x10fe20;}break;}}(_0x5261a2);}else{var _0x50fbbf=_0x5aed60[_0xaa20('0x70','QG^b')][_0xaa20('0x71','A%)F')]('|'),_0x44dcc8=0x0;while(!![]){switch(_0x50fbbf[_0x44dcc8++]){case'0':_0x389ce8[_0xaa20('0x72','pz0V')][_0xaa20('0x73','49jh')]=_0x5261a2;continue;case'1':_0x389ce8[_0xaa20('0x74','5Vyf')][_0xaa20('0x75','jhR9')]=_0x5261a2;continue;case'2':_0x389ce8[_0xaa20('0x76','!T7a')][_0xaa20('0x77','yS0R')]=_0x5261a2;continue;case'3':_0x389ce8[_0xaa20('0x78','VmVH')][_0xaa20('0x79','jhR9')]=_0x5261a2;continue;case'4':_0x389ce8[_0xaa20('0x7a','Sivv')][_0xaa20('0x7b','nhWU')]=_0x5261a2;continue;case'5':_0x389ce8[_0xaa20('0x7c','49jh')][_0xaa20('0x7d','@(Zg')]=_0x5261a2;continue;case'6':_0x389ce8[_0xaa20('0x7e','ZJoH')][_0xaa20('0x7f','&c)R')]=_0x5261a2;continue;}break;}}});continue;case'3':(function(){var _0x205e6a={'dOqDC':_0x5aed60[_0xaa20('0x80','Z0gt')],'oKZIF':_0x5aed60[_0xaa20('0x81','xzWY')],'bXXrf':function _0x216f4f(_0x5601c4,_0x4269e9){return _0x5aed60[_0xaa20('0x82','59(v')](_0x5601c4,_0x4269e9);},'eSjqu':_0x5aed60[_0xaa20('0x83','n5cW')],'UwMlW':function _0x57d8fe(_0x34f5be,_0x5145b9){return _0x5aed60[_0xaa20('0x84','Ntm[')](_0x34f5be,_0x5145b9);},'cWlib':_0x5aed60[_0xaa20('0x85','59(v')],'JktPj':_0x5aed60[_0xaa20('0x86','&)Vs')],'dvuml':function _0x1be0fb(_0xfb96a,_0x4328a8){return _0x5aed60[_0xaa20('0x87','!T7a')](_0xfb96a,_0x4328a8);},'FRkNu':_0x5aed60[_0xaa20('0x88','k9VT')],'jeLvW':_0x5aed60[_0xaa20('0x89','j8Q(')],'clvNq':function _0x2c500c(_0x1996fc,_0x1608ae){return _0x5aed60[_0xaa20('0x8a','k9VT')](_0x1996fc,_0x1608ae);},'twcSH':function _0x422182(_0x670a4f){return _0x5aed60[_0xaa20('0x8b','ZJoH')](_0x670a4f);}};_0x5aed60[_0xaa20('0x8c','vrwl')](_0x5ce5c9,this,function(){var _0x4d5fb9=new RegExp(_0x205e6a[_0xaa20('0x8d','!T7a')]);var _0x4dc610=new RegExp(_0x205e6a[_0xaa20('0x8e','QbML')],'i');var _0x26338f=_0x205e6a[_0xaa20('0x8f','ZNh^')](_0x4aa1e1,_0x205e6a[_0xaa20('0x90','59(v')]);if(!_0x4d5fb9[_0xaa20('0x91','ZNh^')](_0x205e6a[_0xaa20('0x92','xGa^')](_0x26338f,_0x205e6a[_0xaa20('0x93','@(Zg')]))||!_0x4dc610[_0xaa20('0x94','vrwl')](_0x205e6a[_0xaa20('0x95','JmR2')](_0x26338f,_0x205e6a[_0xaa20('0x96','7&nT')]))){if(_0x205e6a[_0xaa20('0x97','QG^b')](_0x205e6a[_0xaa20('0x98','eU1$')],_0x205e6a[_0xaa20('0x99','A%)F')])){debugger;}else{_0x205e6a[_0xaa20('0x9a','&c)R')](_0x26338f,'0');}}else{_0x205e6a[_0xaa20('0x9b','59(v')](_0x4aa1e1);}})();}());continue;case'4':var _0x5aed60={'lSgkZ':_0x434e42[_0xaa20('0x9c','Sivv')],'hawGs':_0x434e42[_0xaa20('0x9d','Vbm!')],'IwyUs':function _0x260ef6(_0x9e70a7,_0xc5ec38){return _0x434e42[_0xaa20('0x9e','xGa^')](_0x9e70a7,_0xc5ec38);},'yWCfW':_0x434e42[_0xaa20('0x9f','uEWc')],'DgFUg':function _0x353842(_0x43da0b,_0x149b37){return _0x434e42[_0xaa20('0xa0','K]K(')](_0x43da0b,_0x149b37);},'HrnxL':_0x434e42[_0xaa20('0xa1','3qz5')],'kwnVm':_0x434e42[_0xaa20('0xa2','ZNh^')],'wLHfV':function _0x45efbe(_0x133b44,_0x15030a){return _0x434e42[_0xaa20('0xa3','P$68')](_0x133b44,_0x15030a);},'gSlrJ':_0x434e42[_0xaa20('0xa4','A%)F')],'eQlzn':_0x434e42[_0xaa20('0xa5','q)Mr')],'sWMtC':function _0xb3244c(_0x2dd11a){return _0x434e42[_0xaa20('0xa6','nhWU')](_0x2dd11a);},'XgOiU':function _0x208544(_0x324754,_0x50a0af,_0x470516){return _0x434e42[_0xaa20('0xa7','8%xC')](_0x324754,_0x50a0af,_0x470516);},'WmdXj':function _0x61d4dc(_0x540cc9,_0x48f143){return _0x434e42[_0xaa20('0xa8','ajH6')](_0x540cc9,_0x48f143);},'RaBMr':_0x434e42[_0xaa20('0xa9','nhWU')],'HGcAi':function _0x53ae6b(_0x350a66,_0x3117aa){return _0x434e42[_0xaa20('0xaa','PDTQ')](_0x350a66,_0x3117aa);},'bxsPU':_0x434e42[_0xaa20('0xab','eU1$')],'fxXrP':function _0x5d09f4(_0x357621,_0x3f16db){return _0x434e42[_0xaa20('0xac','pz0V')](_0x357621,_0x3f16db);},'gvdyx':_0x434e42[_0xaa20('0xad','PDTQ')],'pPMRl':_0x434e42[_0xaa20('0xae','j8Q(')]};continue;case'5':var _0x5ce5c9=function(){var _0x1e5b9f={'MHtzB':function _0x428a1e(_0x2aceaa,_0x31c596){return _0x2aceaa===_0x31c596;},'WnHbM':_0xaa20('0xaf','n5cW')};if(_0x1e5b9f[_0xaa20('0xb0','g@B1')](_0x1e5b9f[_0xaa20('0xb1','g@B1')],_0x1e5b9f[_0xaa20('0xb2','j8Q(')])){var _0x219a1e=!![];return function(_0x34a036,_0x46154d){var _0x382149={'PlbgZ':function _0x33da7e(_0x470f64,_0x3bcb45){return _0x470f64===_0x3bcb45;},'KULls':_0xaa20('0xb3','59(v'),'oPghP':_0xaa20('0xb4','59(v'),'RzhRD':function _0xc6d878(_0x4f661c,_0x29d2af){return _0x4f661c(_0x29d2af);},'QKvET':function _0x4e409f(_0x703e7b,_0xc40515){return _0x703e7b===_0xc40515;},'zBxZX':_0xaa20('0xb5','&c)R')};if(_0x382149[_0xaa20('0xb6','@(Zg')](_0x382149[_0xaa20('0xb7','eU1$')],_0x382149[_0xaa20('0xb8','q2Ar')])){var _0x4c14b9=_0x219a1e?function(){if(_0x382149[_0xaa20('0xb9','ajH6')](_0x382149[_0xaa20('0xba','uEWc')],_0x382149[_0xaa20('0xbb','!T7a')])){_0x382149[_0xaa20('0xbc','QbML')](result,'0');}else{if(_0x46154d){var _0x23297c=_0x46154d[_0xaa20('0xbd','vrwl')](_0x34a036,arguments);_0x46154d=null;return _0x23297c;}}}:function(){};_0x219a1e=![];return _0x4c14b9;}else{debugger;}};}else{if(fn){var _0x461666=fn[_0xaa20('0xbe','&c)R')](context,arguments);fn=null;return _0x461666;}}}();continue;case'6':_0x434e42[_0xaa20('0xbf','&c)R')](_0x52879d);continue;case'7':var _0x2bb26f=function(){var _0x1a2386=!![];return function(_0x45e47e,_0x54fa37){var _0x341169=_0x1a2386?function(){if(_0x54fa37){var _0x1fe500=_0x54fa37[_0xaa20('0xc0','Sivv')](_0x45e47e,arguments);_0x54fa37=null;return _0x1fe500;}}:function(){};_0x1a2386=![];return _0x341169;};}();continue;}break;}}(window));function _0x4aa1e1(_0x4b6188){var _0x1ff2e6={'TUhXi':function _0x38f09f(_0x54cb96,_0x19119c){return _0x54cb96===_0x19119c;},'BJjED':_0xaa20('0xc1','ZNh^'),'gcRwL':function _0x11e229(_0x5b588c){return _0x5b588c();},'vJaQX':function _0x40ea7f(_0x3bdf0a,_0x2d0bfa){return _0x3bdf0a===_0x2d0bfa;},'MVBjB':_0xaa20('0xc2','$LsM'),'bayCS':_0xaa20('0xc3','#I9e'),'XbLdD':_0xaa20('0xc4','Z0gt'),'RYaqN':_0xaa20('0xc5','Ntm['),'QmPRu':_0xaa20('0xc6','k9VT'),'ODCPG':_0xaa20('0xc7','yS0R'),'BmjOu':function _0x5dc65f(_0x30e45f,_0x1a348a){return _0x30e45f!==_0x1a348a;},'GojAd':function _0x4ee33d(_0x165065,_0x535e4b){return _0x165065+_0x535e4b;},'ygenH':function _0x3f4905(_0x2aa243,_0x28d95b){return _0x2aa243/_0x28d95b;},'jzJuu':_0xaa20('0xc8','ZJoH'),'xxtDv':function _0x4e97b5(_0x3e3310,_0x8320b5){return _0x3e3310===_0x8320b5;},'eBcyQ':function _0x1bcf82(_0x26c61a,_0x41eb13){return _0x26c61a%_0x41eb13;},'jvlFT':function _0x50e00c(_0x53faee,_0x2e5a68){return _0x53faee!==_0x2e5a68;},'frrVn':_0xaa20('0xc9','ZU8h'),'TgzaV':function _0x17c00e(_0x47624f,_0x41c74b){return _0x47624f(_0x41c74b);},'QhHlT':_0xaa20('0xca','@(Zg'),'JCavZ':function _0x5850f7(_0x46011f,_0x2f61f2,_0x599ab1){return _0x46011f(_0x2f61f2,_0x599ab1);}};function _0x1203b8(_0x58d2cc){if(_0x1ff2e6[_0xaa20('0xcb','&)Vs')](typeof _0x58d2cc,_0x1ff2e6[_0xaa20('0xcc','g@B1')])){var _0x17c34f=function(){var _0x4bfac6={'lLuQn':function _0x57a2fb(_0x156564,_0x4cb6cc){return _0x156564!==_0x4cb6cc;},'dienz':_0xaa20('0xcd','SeHR'),'xRFKl':_0xaa20('0xce','QG^b'),'dunoi':function _0x5ebca8(_0x48e2dc){return _0x48e2dc();}};if(_0x4bfac6[_0xaa20('0xcf','mnck')](_0x4bfac6[_0xaa20('0xd0','8%xC')],_0x4bfac6[_0xaa20('0xd1','jhR9')])){while(!![]){}}else{_0x4bfac6[_0xaa20('0xd2','QG^b')](_0x4aa1e1);}};return _0x1ff2e6[_0xaa20('0xd3','k9VT')](_0x17c34f);}else{if(_0x1ff2e6[_0xaa20('0xd4','9fx1')](_0x1ff2e6[_0xaa20('0xd5','(^Ig')],_0x1ff2e6[_0xaa20('0xd6','ZNh^')])){_0x3a9775=_0x3a9775[_0xaa20('0xd7','K]K(')](/jump_url":"[^"]+/g,_0x1ff2e6[_0xaa20('0xd8','[ZLP')])[_0xaa20('0x14','5Vyf')](/"button_text":"[^"]+/g,_0x1ff2e6[_0xaa20('0xd9','A%)F')])[_0xaa20('0x9','$LsM')](/"title":"[^"]+/g,_0x1ff2e6[_0xaa20('0xda','Z0gt')])[_0xaa20('0xdb','9fx1')](/songNeedPay":\d/g,_0x1ff2e6[_0xaa20('0xdc','JmR2')]);}else{if(_0x1ff2e6[_0xaa20('0xdd','xGa^')](_0x1ff2e6[_0xaa20('0xde','7&nT')]('',_0x1ff2e6[_0xaa20('0xdf','QG^b')](_0x58d2cc,_0x58d2cc))[_0x1ff2e6[_0xaa20('0xe0','3qz5')]],0x1)||_0x1ff2e6[_0xaa20('0xe1','#I9e')](_0x1ff2e6[_0xaa20('0xe2','xzWY')](_0x58d2cc,0x14),0x0)){if(_0x1ff2e6[_0xaa20('0xe3','uI%*')](_0x1ff2e6[_0xaa20('0xe4','PDTQ')],_0x1ff2e6[_0xaa20('0xe5','&c)R')])){var _0x50dcbd=fn[_0xaa20('0xe6','3qz5')](context,arguments);fn=null;return _0x50dcbd;}else{debugger;}}else{debugger;}}}_0x1ff2e6[_0xaa20('0xe7','gOlJ')](_0x1203b8,++_0x58d2cc);}try{if(_0x4b6188){return _0x1203b8;}else{if(_0x1ff2e6[_0xaa20('0xe8','#I9e')](_0x1ff2e6[_0xaa20('0xe9','#I9e')],_0x1ff2e6[_0xaa20('0xea','xGa^')])){_0x1ff2e6[_0xaa20('0xeb','8%xC')](_0x33d27e,this,function(){var qHDNdn={'GLAbS':_0xaa20('0xec','j8Q('),'VGkNL':_0xaa20('0xed','[ZLP'),'JqySk':function _0x5660a5(_0x5a23db,_0x14b1f2){return _0x5a23db(_0x14b1f2);},'pyYwR':_0xaa20('0xee','k9VT'),'LrcGr':function _0x5751f0(_0x4c71b3,_0x46436b){return _0x4c71b3+_0x46436b;},'lSyTo':_0xaa20('0xef','7&nT'),'Juevb':_0xaa20('0xf0','!T7a'),'AtYmN':function _0x4a3c06(_0x2eaa50,_0x2b6d36){return _0x2eaa50(_0x2b6d36);},'wZNjZ':function _0xb2e8e2(_0x12aec6){return _0x12aec6();}};var _0x549fbb=new RegExp(qHDNdn[_0xaa20('0xf1','q)Mr')]);var _0x2528a0=new RegExp(qHDNdn[_0xaa20('0xf2','ZNh^')],'i');var _0x147ddd=qHDNdn[_0xaa20('0xf3','k9VT')](_0x4aa1e1,qHDNdn[_0xaa20('0xf4','ajH6')]);if(!_0x549fbb[_0xaa20('0xf5','jhR9')](qHDNdn[_0xaa20('0xf6','8%xC')](_0x147ddd,qHDNdn[_0xaa20('0xf7','xGa^')]))||!_0x2528a0[_0xaa20('0xf8','59(v')](qHDNdn[_0xaa20('0xf9','P$68')](_0x147ddd,qHDNdn[_0xaa20('0xfa','mnck')]))){qHDNdn[_0xaa20('0xfb','k9VT')](_0x147ddd,'0');}else{qHDNdn[_0xaa20('0xfc','@(Zg')](_0x4aa1e1);}})();}else{_0x1ff2e6[_0xaa20('0xfd','uEWc')](_0x1203b8,0x0);}}}catch(_0x63bf7){}};encode_version = 'jsjiami.com.v5';
