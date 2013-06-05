/*! URI.js v1.8.1 http://medialize.github.com/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,g){"object"===typeof exports?module.exports=g():"function"===typeof define&&define.amd?define(g):f.IPv6=g()})(this,function(){return{best:function(f){var f=f.toLowerCase().split(":"),g=f.length,i=8;""===f[0]&&""===f[1]&&""===f[2]?(f.shift(),f.shift()):""===f[0]&&""===f[1]?f.shift():""===f[g-1]&&""===f[g-2]&&f.pop();g=f.length;-1!==f[g-1].indexOf(".")&&(i=7);var d;for(d=0;d<g&&""!==f[d];d++);if(d<i)for(f.splice(d,1,"0000");f.length<i;)f.splice(d,0,"0000");for(d=0;d<i;d++){for(var g=f[d].split(""),
l=0;3>l;l++)if("0"===g[0]&&1<g.length)g.splice(0,1);else break;f[d]=g.join("")}var g=-1,t=l=0,h=-1,c=!1;for(d=0;d<i;d++)c?"0"===f[d]?t+=1:(c=!1,t>l&&(g=h,l=t)):"0"==f[d]&&(c=!0,h=d,t=1);t>l&&(g=h,l=t);1<l&&f.splice(g,l,"");g=f.length;i="";""===f[0]&&(beststr=":");for(d=0;d<g;d++){i+=f[d];if(d===g-1)break;i+=":"}""===f[g-1]&&(i+=":");return i}}});
(function(f){function g(a){throw RangeError(C[a]);}function i(a,b){for(var e=a.length;e--;)a[e]=b(a[e]);return a}function d(a){for(var b=[],e=0,d=a.length,s,c;e<d;)s=a.charCodeAt(e++),55296==(s&63488)&&e<d?(c=a.charCodeAt(e++),56320==(c&64512)?b.push(((s&1023)<<10)+(c&1023)+65536):b.push(s,c)):b.push(s);return b}function l(a){return i(a,function(a){var b="";65535<a&&(a-=65536,b+=z(a>>>10&1023|55296),a=56320|a&1023);return b+=z(a)}).join("")}function t(e,d,s){for(var c=0,e=s?w(e/b):e>>1,e=e+w(e/d);e>
x*r>>1;c+=k)e=w(e/x);return w(c+(x+1)*e/(e+a))}function h(a){var b=[],d=a.length,c,h=0,f=s,v=e,p,i,m,j,q;p=a.lastIndexOf(B);0>p&&(p=0);for(i=0;i<p;++i)128<=a.charCodeAt(i)&&g("not-basic"),b.push(a.charCodeAt(i));for(p=0<p?p+1:0;p<d;){i=h;c=1;for(m=k;;m+=k){p>=d&&g("invalid-input");j=a.charCodeAt(p++);j=10>j-48?j-22:26>j-65?j-65:26>j-97?j-97:k;(j>=k||j>w((n-h)/c))&&g("overflow");h+=j*c;q=m<=v?u:m>=v+r?r:m-v;if(j<q)break;j=k-q;c>w(n/j)&&g("overflow");c*=j}c=b.length+1;v=t(h-i,c,0==i);w(h/c)>n-f&&g("overflow");
f+=w(h/c);h%=c;b.splice(h++,0,f)}return l(b)}function c(a){var b,c,h,f,v,p,j,i,m,q=[],l,y,x,a=d(a);l=a.length;b=s;c=0;v=e;for(p=0;p<l;++p)m=a[p],128>m&&q.push(z(m));for((h=f=q.length)&&q.push(B);h<l;){j=n;for(p=0;p<l;++p)m=a[p],m>=b&&m<j&&(j=m);y=h+1;j-b>w((n-c)/y)&&g("overflow");c+=(j-b)*y;b=j;for(p=0;p<l;++p)if(m=a[p],m<b&&++c>n&&g("overflow"),m==b){i=c;for(j=k;;j+=k){m=j<=v?u:j>=v+r?r:j-v;if(i<m)break;x=i-m;i=k-m;q.push(z(m+x%i+22+75*(26>m+x%i)-0));i=w(x/i)}q.push(z(i+22+75*(26>i)-0));v=t(c,y,
h==f);c=0;++h}++c;++b}return q.join("")}var p,m="function"==typeof define&&"object"==typeof define.amd&&define.amd&&define,j="object"==typeof exports&&exports,q="object"==typeof module&&module,n=2147483647,k=36,u=1,r=26,a=38,b=700,e=72,s=128,B="-",v=/[^ -~]/,y=/^xn--/,C={overflow:"Overflow: input needs wider integers to process.","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},x=k-u,w=Math.floor,z=String.fromCharCode,A;p={version:"1.1.1",ucs2:{decode:d,
encode:l},decode:h,encode:c,toASCII:function(a){return i(a.split("."),function(a){return v.test(a)?"xn--"+c(a):a}).join(".")},toUnicode:function(a){return i(a.split("."),function(a){return y.test(a)?h(a.slice(4).toLowerCase()):a}).join(".")}};if(j)if(q&&q.exports==j)q.exports=p;else for(A in p)p.hasOwnProperty(A)&&(j[A]=p[A]);else m?define("punycode",p):f.punycode=p})(this);
(function(f,g){"object"===typeof exports?module.exports=g():"function"===typeof define&&define.amd?define(g):f.SecondLevelDomains=g()})(this,function(){var f=Object.prototype.hasOwnProperty,g={list:{ac:"com|gov|mil|net|org",ae:"ac|co|gov|mil|name|net|org|pro|sch",af:"com|edu|gov|net|org",al:"com|edu|gov|mil|net|org",ao:"co|ed|gv|it|og|pb",ar:"com|edu|gob|gov|int|mil|net|org|tur",at:"ac|co|gv|or",au:"asn|com|csiro|edu|gov|id|net|org",ba:"co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",bb:"biz|co|com|edu|gov|info|net|org|store|tv",
bh:"biz|cc|com|edu|gov|info|net|org",bn:"com|edu|gov|net|org",bo:"com|edu|gob|gov|int|mil|net|org|tv",br:"adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",bs:"com|edu|gov|net|org",bz:"du|et|om|ov|rg",ca:"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",ck:"biz|co|edu|gen|gov|info|net|org",cn:"ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",
co:"com|edu|gov|mil|net|nom|org",cr:"ac|c|co|ed|fi|go|or|sa",cy:"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm","do":"art|com|edu|gob|gov|mil|net|org|sld|web",dz:"art|asso|com|edu|gov|net|org|pol",ec:"com|edu|fin|gov|info|med|mil|net|org|pro",eg:"com|edu|eun|gov|mil|name|net|org|sci",er:"com|edu|gov|ind|mil|net|org|rochest|w",es:"com|edu|gob|nom|org",et:"biz|com|edu|gov|info|name|net|org",fj:"ac|biz|com|info|mil|name|net|org|pro",fk:"ac|co|gov|net|nom|org",fr:"asso|com|f|gouv|nom|prd|presse|tm",
gg:"co|net|org",gh:"com|edu|gov|mil|org",gn:"ac|com|gov|net|org",gr:"com|edu|gov|mil|net|org",gt:"com|edu|gob|ind|mil|net|org",gu:"com|edu|gov|net|org",hk:"com|edu|gov|idv|net|org",id:"ac|co|go|mil|net|or|sch|web",il:"ac|co|gov|idf|k12|muni|net|org","in":"ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",iq:"com|edu|gov|i|mil|net|org",ir:"ac|co|dnssec|gov|i|id|net|org|sch",it:"edu|gov",je:"co|net|org",jo:"com|edu|gov|mil|name|net|org|sch",jp:"ac|ad|co|ed|go|gr|lg|ne|or",ke:"ac|co|go|info|me|mobi|ne|or|sc",
kh:"com|edu|gov|mil|net|org|per",ki:"biz|com|de|edu|gov|info|mob|net|org|tel",km:"asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",kn:"edu|gov|net|org",kr:"ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",kw:"com|edu|gov|net|org",ky:"com|edu|gov|net|org",kz:"com|edu|gov|mil|net|org",lb:"com|edu|gov|net|org",lk:"assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",
lr:"com|edu|gov|net|org",lv:"asn|com|conf|edu|gov|id|mil|net|org",ly:"com|edu|gov|id|med|net|org|plc|sch",ma:"ac|co|gov|m|net|org|press",mc:"asso|tm",me:"ac|co|edu|gov|its|net|org|priv",mg:"com|edu|gov|mil|nom|org|prd|tm",mk:"com|edu|gov|inf|name|net|org|pro",ml:"com|edu|gov|net|org|presse",mn:"edu|gov|org",mo:"com|edu|gov|net|org",mt:"com|edu|gov|net|org",mv:"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",mw:"ac|co|com|coop|edu|gov|int|museum|net|org",mx:"com|edu|gob|net|org",my:"com|edu|gov|mil|name|net|org|sch",
nf:"arts|com|firm|info|net|other|per|rec|store|web",ng:"biz|com|edu|gov|mil|mobi|name|net|org|sch",ni:"ac|co|com|edu|gob|mil|net|nom|org",np:"com|edu|gov|mil|net|org",nr:"biz|com|edu|gov|info|net|org",om:"ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",pe:"com|edu|gob|mil|net|nom|org|sld",ph:"com|edu|gov|i|mil|net|ngo|org",pk:"biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",pl:"art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",
pr:"ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",ps:"com|edu|gov|net|org|plo|sec",pw:"belau|co|ed|go|ne|or",ro:"arts|com|firm|info|nom|nt|org|rec|store|tm|www",rs:"ac|co|edu|gov|in|org",sb:"com|edu|gov|net|org",sc:"com|edu|gov|net|org",sh:"co|com|edu|gov|net|nom|org",sl:"com|edu|gov|net|org",st:"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",sv:"com|edu|gob|org|red",sz:"ac|co|org",tr:"av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",tt:"aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",
tw:"club|com|ebiz|edu|game|gov|idv|mil|net|org",mu:"ac|co|com|gov|net|or|org",mz:"ac|co|edu|gov|org",na:"co|com",nz:"ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",pa:"abo|ac|com|edu|gob|ing|med|net|nom|org|sld",pt:"com|edu|gov|int|net|nome|org|publ",py:"com|edu|gov|mil|net|org",qa:"com|edu|gov|mil|net|org",re:"asso|com|nom",ru:"ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
rw:"ac|co|com|edu|gouv|gov|int|mil|net",sa:"com|edu|gov|med|net|org|pub|sch",sd:"com|edu|gov|info|med|net|org|tv",se:"a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",sg:"com|edu|gov|idn|net|org|per",sn:"art|com|edu|gouv|org|perso|univ",sy:"com|edu|gov|mil|net|news|org",th:"ac|co|go|in|mi|net|or",tj:"ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",tn:"agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",tz:"ac|co|go|ne|or",
ua:"biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",ug:"ac|co|go|ne|or|org|sc",uk:"ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
us:"dni|fed|isa|kids|nsn",uy:"com|edu|gub|mil|net|org",ve:"co|com|edu|gob|info|mil|net|org|web",vi:"co|com|k12|net|org",vn:"ac|biz|com|edu|gov|health|info|int|name|net|org|pro",ye:"co|com|gov|ltd|me|net|org|plc",yu:"ac|co|edu|gov|org",za:"ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",zm:"ac|co|com|edu|gov|net|org|sch"},has_expression:null,is_expression:null,has:function(f){return!!f.match(g.has_expression)},
is:function(f){return!!f.match(g.is_expression)},get:function(f){return(f=f.match(g.has_expression))&&f[1]||null},init:function(){var i="",d;for(d in g.list)f.call(g.list,d)&&(i+="|("+("("+g.list[d]+")."+d)+")");g.has_expression=RegExp("\\.("+i.substr(1)+")$","i");g.is_expression=RegExp("^("+i.substr(1)+")$","i")}};g.init();return g});
(function(f,g){"object"===typeof exports?module.exports=g(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],g):f.URI=g(f.punycode,f.IPv6,f.SecondLevelDomains)})(this,function(f,g,i){function d(a,b){if(!(this instanceof d))return new d(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function l(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
"\\$1")}function t(a){return"[object Array]"===String(Object.prototype.toString.call(a))}function h(a){return encodeURIComponent(a).replace(/[!'()*]/g,escape).replace(/\*/g,"%2A")}var c=d.prototype,p=Object.prototype.hasOwnProperty;d.duplicateQueryParameters=!1;d.protocol_expression=/^[a-z][a-z0-9-+-]*$/i;d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;d.encode=h;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=
h;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+",
"%2C":",","%3B":";","%3D":"="}}}};d.encodeQuery=function(a){return d.encode(a+"").replace(/%20/g,"+")};d.decodeQuery=function(a){return d.decode((a+"").replace(/\+/g,"%20"))};d.recodePath=function(a){for(var a=(a+"").split("/"),b=0,e=a.length;b<e;b++)a[b]=d.encodePathSegment(d.decode(a[b]));return a.join("/")};d.decodePath=function(a){for(var a=(a+"").split("/"),b=0,e=a.length;b<e;b++)a[b]=d.decodePathSegment(a[b]);return a.join("/")};var m={encode:"encode",decode:"decode"},j,q=function(a,b){return function(e){return d[b](e+
"").replace(d.characters[a][b].expression,function(e){return d.characters[a][b].map[e]})}};for(j in m)d[j+"PathSegment"]=q("pathname",m[j]);d.encodeReserved=q("reserved","encode");d.parse=function(a,b){var e;b||(b={});e=a.indexOf("#");-1<e&&(b.fragment=a.substring(e+1)||null,a=a.substring(0,e));e=a.indexOf("?");-1<e&&(b.query=a.substring(e+1)||null,a=a.substring(0,e));"//"===a.substring(0,2)?(b.protocol="",a=a.substring(2),a=d.parseAuthority(a,b)):(e=a.indexOf(":"),-1<e&&(b.protocol=a.substring(0,
e),b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(e+3):"//"===a.substring(e+1,e+3)?(a=a.substring(e+3),a=d.parseAuthority(a,b)):(a=a.substring(e+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){var e=a.indexOf("/"),d;-1===e&&(e=a.length);"["===a[0]?(d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,e)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,e)||null,b.port=null):(d=a.substring(0,
e).split(":"),b.hostname=d[0]||null,b.port=d[1]||null);b.hostname&&"/"!==a.substring(e)[0]&&(e++,a="/"+a);return a.substring(e)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var e=a.indexOf("@"),s=a.indexOf("/");-1<e&&(-1===s||e<s)?(s=a.substring(0,e).split(":"),b.username=s[0]?d.decode(s[0]):null,s.shift(),b.password=s[0]?d.decode(s.join(":")):null,a=a.substring(e+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a){if(!a)return{};
a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var b={},a=a.split("&"),e=a.length,s,c,h=0;h<e;h++)s=a[h].split("="),c=d.decodeQuery(s.shift()),s=s.length?d.decodeQuery(s.join("=")):null,b[c]?("string"===typeof b[c]&&(b[c]=[b[c]]),b[c].push(s)):b[c]=s;return b};d.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");if(!a.urn&&(b||a.hostname))b+="//";b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path[0]&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===
typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)d.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username),a.password&&(b+=":"+d.encode(a.password)),b+=
"@");return b};d.buildQuery=function(a,b){var e="",c,h,f,g;for(h in a)if(p.call(a,h)&&h)if(t(a[h])){c={};f=0;for(g=a[h].length;f<g;f++)void 0!==a[h][f]&&void 0===c[a[h][f]+""]&&(e+="&"+d.buildQueryParameter(h,a[h][f]),!0!==b&&(c[a[h][f]+""]=!0))}else void 0!==a[h]&&(e+="&"+d.buildQueryParameter(h,a[h]));return e.substring(1)};d.buildQueryParameter=function(a,b){return d.encodeQuery(a)+(null!==b?"="+d.encodeQuery(b):"")};d.addQuery=function(a,b,e){if("object"===typeof b)for(var c in b)p.call(b,c)&&
d.addQuery(a,c,b[c]);else if("string"===typeof b)void 0===a[b]?a[b]=e:("string"===typeof a[b]&&(a[b]=[a[b]]),t(e)||(e=[e]),a[b]=a[b].concat(e));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,e){var c;if(t(b)){e=0;for(c=b.length;e<c;e++)a[b[e]]=void 0}else if("object"===typeof b)for(c in b)p.call(b,c)&&d.removeQuery(a,c,b[c]);else if("string"===typeof b)if(void 0!==e)if(a[b]===e)a[b]=void 0;else{if(t(a[b])){c=a[b];var h={},f,
g;if(t(e)){f=0;for(g=e.length;f<g;f++)h[e[f]]=!0}else h[e]=!0;f=0;for(g=c.length;f<g;f++)void 0!==h[c[f]]&&(c.splice(f,1),g--,f--);a[b]=c}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};d.commonPath=function(a,b){var e=Math.min(a.length,b.length),d;for(d=0;d<e;d++)if(a[d]!==b[d]){d--;break}if(1>d)return a[0]===b[0]&&"/"===a[0]?"/":"";"/"!==a[d]&&(d=a.substring(0,d).lastIndexOf("/"));return a.substring(0,d+1)};d.withinString=function(a,
b){return a.replace(d.find_uri_expression,b)};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!f)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(f.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-]");}};c.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),
this._deferred_build=!1;return this};c.clone=function(){return new d(this)};c.toString=function(){return this.build(!1)._string};c.valueOf=function(){return this.toString()};m={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};q=function(a){return function(b,e){if(void 0===b)return this._parts[a]||"";this._parts[a]=b;this.build(!e);return this}};for(j in m)c[j]=q(m[j]);m={query:"?",fragment:"#"};q=function(a,b){return function(e,d){if(void 0===e)return this._parts[a]||
"";null!==e&&(e+="",e[0]===b&&(e=e.substring(1)));this._parts[a]=e;this.build(!d);return this}};for(j in m)c[j]=q(j,m[j]);m={search:["?","query"],hash:["#","fragment"]};q=function(a,b){return function(e,d){var c=this[a](e,d);return"string"===typeof c&&c.length?b+c:c}};for(j in m)c[j]=q(m[j][1],m[j][0]);c.pathname=function(a,b){if(void 0===a||!0===a){var e=this._parts.path||(this._parts.urn?"":"/");return a?d.decodePath(e):e}this._parts.path=a?d.recodePath(a):"/";this.build(!b);return this};c.path=
c.pathname;c.href=function(a,b){if(void 0===a)return this.toString();this._string="";this._parts={protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters};var e=a instanceof d,c="object"===typeof a&&(a.hostname||a.path),h;!e&&(c&&"[object Object]"!==Object.prototype.toString.call(a))&&(a=a.toString());if("string"===typeof a)this._parts=d.parse(a,this._parts);else if(e||c)for(h in e=e?a._parts:
a,e)p.call(this._parts,h)&&(this._parts[h]=e[h]);else throw new TypeError("invalid input");this.build(!b);return this};c.is=function(a){var b=!1,e=!1,c=!1,h=!1,f=!1,g=!1,p=!1,j=!this._parts.urn;this._parts.hostname&&(j=!1,e=d.ip4_expression.test(this._parts.hostname),c=d.ip6_expression.test(this._parts.hostname),b=e||c,f=(h=!b)&&i&&i.has(this._parts.hostname),g=h&&d.idn_expression.test(this._parts.hostname),p=h&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return j;
case "absolute":return!j;case "domain":case "name":return h;case "sld":return f;case "ip":return b;case "ip4":case "ipv4":case "inet4":return e;case "ip6":case "ipv6":case "inet6":return c;case "idn":return g;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return p}return null};var n=c.protocol,k=c.port,u=c.hostname;c.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");
return n.call(this,a,b)};c.scheme=c.protocol;c.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a[0]&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return k.call(this,a,b)};c.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var e={};d.parseHost(a,e);a=e.hostname}return u.call(this,a,b)};c.host=function(a,b){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";d.parseHost(a,this._parts);this.build(!b);return this};c.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";d.parseAuthority(a,this._parts);this.build(!b);return this};c.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var e=d.buildUserinfo(this._parts);return e.substring(0,
e.length-1)}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};c.resource=function(a,b){var e;if(void 0===a)return this.path()+this.search()+this.hash();e=d.parse(a);this._parts.path=e.path;this._parts.query=e.query;this._parts.fragment=e.fragment;this.build(!b);return this};c.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.length-this.domain().length-
1;return this._parts.hostname.substring(0,e)||""}e=this._parts.hostname.length-this.domain().length;e=this._parts.hostname.substring(0,e);e=RegExp("^"+l(e));a&&"."!==a[a.length-1]&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(e,a);this.build(!b);return this};c.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.match(/\./g);
if(e&&2>e.length)return this._parts.hostname;e=this._parts.hostname.length-this.tld(b).length-1;e=this._parts.hostname.lastIndexOf(".",e-1)+1;return this._parts.hostname.substring(e)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(e=RegExp(l(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(e,a));this.build(!b);return this};c.tld=function(a,b){if(this._parts.urn)return void 0===a?"":
this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.lastIndexOf("."),e=this._parts.hostname.substring(e+1);return!0!==b&&i&&i.list[e.toLowerCase()]?i.get(this._parts.hostname)||e:e}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(i&&i.is(a))e=RegExp(l(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(e,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||
this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");e=RegExp(l(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(e,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};c.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var e=this._parts.path.length-this.filename().length-1,e=this._parts.path.substring(0,
e)||(this._parts.hostname?"/":"");return a?d.decodePath(e):e}e=this._parts.path.length-this.filename().length;e=this._parts.path.substring(0,e);e=RegExp("^"+l(e));this.is("relative")||(a||(a="/"),"/"!==a[0]&&(a="/"+a));a&&"/"!==a[a.length-1]&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(e,a);this.build(!b);return this};c.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this._parts.path.lastIndexOf("/"),
e=this._parts.path.substring(e+1);return a?d.decodePathSegment(e):e}e=!1;"/"===a[0]&&(a=a.substring(1));a.match(/\.?\//)&&(e=!0);var c=RegExp(l(this.filename())+"$"),a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);e?this.normalizePath(b):this.build(!b);return this};c.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var e=this.filename(),c=e.lastIndexOf(".");if(-1===c)return"";e=e.substring(c+
1);e=/^[a-z0-9%]+$/i.test(e)?e:"";return a?d.decodePathSegment(e):e}"."===a[0]&&(a=a.substring(1));if(e=this.suffix())c=a?RegExp(l(e)+"$"):RegExp(l("."+e)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}c&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(c,a));this.build(!b);return this};c.segment=function(a,b,e){var d=this._parts.urn?":":"/",c=this.path(),h="/"===c.substring(0,1),c=c.split(d);"number"!==typeof a&&(e=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+
a+"', must be 0-based integer");h&&c.shift();0>a&&(a=Math.max(c.length+a,0));if(void 0===b)return void 0===a?c:c[a];if(null===a||void 0===c[a])if(t(b))c=b;else{if(b||"string"===typeof b&&b.length)""===c[c.length-1]?c[c.length-1]=b:c.push(b)}else b||"string"===typeof b&&b.length?c[a]=b:c.splice(a,1);h&&c.unshift("");return this.path(c.join(d),e)};var r=c.query;c.query=function(a,b){return!0===a?d.parseQuery(this._parts.query):void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters),
this.build(!b),this):r.call(this,a,b)};c.addQuery=function(a,b,e){var c=d.parseQuery(this._parts.query);d.addQuery(c,a,void 0===b?null:b);this._parts.query=d.buildQuery(c,this._parts.duplicateQueryParameters);"string"!==typeof a&&(e=b);this.build(!e);return this};c.removeQuery=function(a,b,e){var c=d.parseQuery(this._parts.query);d.removeQuery(c,a,b);this._parts.query=d.buildQuery(c,this._parts.duplicateQueryParameters);"string"!==typeof a&&(e=b);this.build(!e);return this};c.addSearch=c.addQuery;
c.removeSearch=c.removeQuery;c.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};c.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};c.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&
f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&g&&(this._parts.hostname=g.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};c.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};c.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;var b,e,c=
this._parts.path,h,f;"/"!==c[0]&&("."===c[0]&&(e=c.substring(0,c.indexOf("/"))),b=!0,c="/"+c);for(c=c.replace(/(\/(\.\/)+)|\/{2,}/g,"/");;){h=c.indexOf("/../");if(-1===h)break;else if(0===h){c=c.substring(3);break}f=c.substring(0,h).lastIndexOf("/");-1===f&&(f=h);c=c.substring(0,f)+c.substring(h+3)}b&&this.is("relative")&&(c=e?e+c:c.substring(1));c=d.recodePath(c);this._parts.path=c;this.build(!a);return this};c.normalizePathname=c.normalizePath;c.normalizeQuery=function(a){"string"===typeof this._parts.query&&
(this._parts.query.length?this.query(d.parseQuery(this._parts.query)):this._parts.query=null,this.build(!a));return this};c.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};c.normalizeSearch=c.normalizeQuery;c.normalizeHash=c.normalizeFragment;c.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;this.normalize();d.encode=a;d.decode=b;return this};c.unicode=function(){var a=d.encode,b=d.decode;d.encode=
h;d.decode=unescape;this.normalize();d.encode=a;d.decode=b;return this};c.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(b+=f.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path[0])&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",h=0,g=a._parts.query.split("&"),p=g.length;h<p;h++){var j=
(g[h]||"").split("="),c=c+("&"+d.decodeQuery(j[0]).replace(/&/g,"%26"));void 0!==j[1]&&(c+="="+d.decodeQuery(j[1]).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=a.hash()};c.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],h,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");if(this._parts.hostname)return b;a instanceof d||(a=new d(a));h=0;for(f;f=c[h];h++)b._parts[f]=a._parts[f];c=["query","path"];
h=0;for(f;f=c[h];h++)!b._parts[f]&&a._parts[f]&&(b._parts[f]=a._parts[f]);"/"!==b.path()[0]&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};c.relativeTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],h;if(this._parts.urn)throw Error("URNs do not have any generally defined hierachical components");a instanceof d||(a=new d(a));if("/"!==this.path()[0]||"/"!==a.path()[0])throw Error("Cannot calculate common path from non-relative URLs");
h=d.commonPath(b.path(),a.path());for(var a=a.directory(),f=0,g;g=c[f];f++)b._parts[g]=null;if(!h||"/"===h)return b;if(a+"/"===h)b._parts.path="./"+b.filename();else{c="../";h=RegExp("^"+l(h));for(a=a.replace(h,"/").match(/\//g).length-1;a--;)c+="../";b._parts.path=b._parts.path.replace(h,c)}b.build();return b};c.equals=function(a){var b=this.clone(),c=new d(a),h={},f={},a={},g;b.normalize();c.normalize();if(b.toString()===c.toString())return!0;h=b.query();f=c.query();b.query("");c.query("");if(b.toString()!==
c.toString()||h.length!==f.length)return!1;h=d.parseQuery(h);f=d.parseQuery(f);for(g in h)if(p.call(h,g)){if(t(h[g])){if(!t(f[g])||h[g].length!==f[g].length)return!1;h[g].sort();f[g].sort();b=0;for(c=h[g].length;b<c;b++)if(h[g][b]!==f[g][b])return!1}else if(h[g]!==f[g])return!1;a[g]=!0}for(g in f)if(p.call(f,g)&&!a[g])return!1;return!0};c.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};return d});
(function(f,g){"object"===typeof exports?module.exports=g(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],g):f.URITemplate=g(f.URI)})(this,function(f){function g(d){if(g._cache[d])return g._cache[d];if(!(this instanceof g))return new g(d);this.expression=d;g._cache[d]=this;return this}function i(d){this.data=d;this.cache={}}var d=Object.prototype.hasOwnProperty,l=g.prototype,t={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},"+":{prefix:"",separator:",",
named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",separator:"&",named:!0,
empty_name_separator:!0,encode:"encode"}};g._cache={};g.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;g.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;g.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;g.expand=function(d,c){var f=t[d.operator],m=f.named?"Named":"Unnamed",j=d.variables,i=[],n,k,l;for(l=0;k=j[l];l++)n=c.get(k.name),n.val.length?i.push(g["expand"+m](n,f,k.explode,k.explode&&f.separator||",",k.maxlength,k.name)):n.type&&i.push("");return i.length?f.prefix+i.join(f.separator):""};g.expandNamed=
function(d,c,g,m,j,i){var n="",k=c.encode,c=c.empty_name_separator,l=!d[k].length,r=2===d.type?"":f[k](i),a,b,e;b=0;for(e=d.val.length;b<e;b++)j?(a=f[k](d.val[b][1].substring(0,j)),2===d.type&&(r=f[k](d.val[b][0].substring(0,j)))):l?(a=f[k](d.val[b][1]),2===d.type?(r=f[k](d.val[b][0]),d[k].push([r,a])):d[k].push([void 0,a])):(a=d[k][b][1],2===d.type&&(r=d[k][b][0])),n&&(n+=m),g?n+=r+(c||a?"=":"")+a:(b||(n+=f[k](i)+(c||a?"=":"")),2===d.type&&(n+=r+","),n+=a);return n};g.expandUnnamed=function(d,c,
g,i,j){var q="",n=c.encode,c=c.empty_name_separator,k=!d[n].length,l,r,a,b;a=0;for(b=d.val.length;a<b;a++)j?r=f[n](d.val[a][1].substring(0,j)):k?(r=f[n](d.val[a][1]),d[n].push([2===d.type?f[n](d.val[a][0]):void 0,r])):r=d[n][a][1],q&&(q+=i),2===d.type&&(l=j?f[n](d.val[a][0].substring(0,j)):d[n][a][0],q+=l,q=g?q+(c||r?"=":""):q+","),q+=r;return q};l.expand=function(d){var c="";(!this.parts||!this.parts.length)&&this.parse();d instanceof i||(d=new i(d));for(var f=0,m=this.parts.length;f<m;f++)c+="string"===
typeof this.parts[f]?this.parts[f]:g.expand(this.parts[f],d);return c};l.parse=function(){var d=this.expression,c=g.EXPRESSION_PATTERN,f=g.VARIABLE_PATTERN,i=g.VARIABLE_NAME_PATTERN,j=[],l=0,n,k,u;for(c.lastIndex=0;;){k=c.exec(d);if(null===k){j.push(d.substring(l));break}else j.push(d.substring(l,k.index)),l=k.index+k[0].length;if(t[k[1]]){if(!k[3])throw Error('Unclosed Expression "'+k[0]+'"');}else throw Error('Unknown Operator "'+k[1]+'" in "'+k[0]+'"');n=k[2].split(",");for(var r=0,a=n.length;r<
a;r++){u=n[r].match(f);if(null===u)throw Error('Invalid Variable "'+n[r]+'" in "'+k[0]+'"');if(u[1].match(i))throw Error('Invalid Variable Name "'+u[1]+'" in "'+k[0]+'"');n[r]={name:u[1],explode:!!u[3],maxlength:u[4]&&parseInt(u[4],10)}}if(!n.length)throw Error('Expression Missing Variable(s) "'+k[0]+'"');j.push({expression:k[0],operator:k[1],variables:n})}j.length||j.push(d);this.parts=j;return this};i.prototype.get=function(f){var c=this.data,g={type:0,val:[],encode:[],encodeReserved:[]},i;if(void 0!==
this.cache[f])return this.cache[f];this.cache[f]=g;c="[object Function]"===String(Object.prototype.toString.call(c))?c(f):"[object Function]"===String(Object.prototype.toString.call(c[f]))?c[f](f):c[f];if(!(void 0===c||null===c))if("[object Array]"===String(Object.prototype.toString.call(c))){i=0;for(f=c.length;i<f;i++)void 0!==c[i]&&null!==c[i]&&g.val.push([void 0,String(c[i])]);g.val.length&&(g.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(c))){for(i in c)d.call(c,i)&&
(void 0!==c[i]&&null!==c[i])&&g.val.push([i,String(c[i])]);g.val.length&&(g.type=2)}else g.type=1,g.val.push([void 0,String(c)]);return g};f.expand=function(d,c){var i=(new g(d)).expand(c);return new f(i)};return g});

(function(exports, window) {
    //Configure through URL query params
    var uri = new URI(window.location.href),
        props = uri.search(true),
        w = parseInt(props.vpwidth, 10),
        h = parseInt(props.vpheight, 10),
        x = parseFloat(props.vpdensity),
        locked = Boolean(props.vplocked),
        vp = new CustomViewport(w, h, x, locked);

    //Export the viewport as exports.customViewport;
    Object.defineProperty(exports, 'customViewport', {
        get: function() {
            return vp;
        }
    });

    function CustomViewport(w, h, x, initiaLlock) {
        if (!(this instanceof CustomViewport)) {
            return new Viewport(w, h, x);
        }
        var dimensions = new Dimensions(),
            metatag = addMetaviewport(),
            isReady = false,
            isLocked = true,
            dispatcher = window.document.createElement('x-dispatcher'),
            props;

        //public interfaces
        props = {
            height: {
                get: function() {
                    return dimensionGetter('height');
                },
                set: function(h) {
                    dimensionSetter(undefined, h, undefined);
                }
            },
            width: {
                get: function() {
                    return dimensionGetter('width');
                },
                set: function(w) {
                    dimensionSetter(w, undefined, undefined);
                }
            },
            density: {
                get: function() {
                    return dimensionGetter('density');
                },
                set: function(x) {
                    dimensionSetter(undefined, undefined, x);
                }
            },
            dimensions: {
                value: copyDimensions
            },
            on: {
                value: function(type, callback) {
                    dispatcher.addEventListener(type, callback, false);
                }
            },
            removeListener: {
                value: function(type, callback) {
                    dispatcher.removeEventListener(type, callback, false);
                }
            },
            ready: {
                get: function() {
                    return isReady;
                }
            },
            lock: {
                value: lock
            },
            unlock: {
                value: unlock
            },
            locked: {
                get: function() {
                    return isLocked;
                },
                set: function(value) {
                    if (Boolean(value)) {
                        this.lock();
                    }else {
                        this.unlock();
                    }
                }
            }
        };
        Object.defineProperties(this, props);
        init.call(this, w, h, x, initiaLlock);

        function init(w, h, x, lock) {
            if (Boolean(lock)) {
                this.lock(w, h, x);
            }else {
                dimensionSetter(w, h, x);
                unlock();
            }
            setupDone();
        }

        function setupDone() {
            isReady = true;
            dispatchEvent('ready');
        }

        function setToWindowSize() {
            var w = window.innerWidth,
                h = window.innerHeight,
                x = (window.devicePixelRatio) || 1;
            dimensionSetter(w, h, x);
        }

        function copyDimensions() {
            var w = dimensions.width,
                h = dimensions.height,
                x = dimensions.density;
            return new Dimensions(w, h, x);
        }

        function Dimensions(w, h, x) {
            this.width = w;
            this.height = h;
            this.density = x;
        }

        function lock(w, h, x) {
            dimensionSetter(w, h, x);
            if (!isLocked) {
                window.removeEventListener('resize', setToWindowSize, false);
                isLocked = true;
                dispatchEvent('lockchange');
            }
        }

        function unlock() {
            if (isLocked) {
                window.addEventListener('resize', setToWindowSize, false);
                isLocked = false;
                dispatchEvent('lockchange');
            }
        }

        function addMetaviewport() {
            var meta = window.document.querySelector('head > meta[name=viewport]');
            if (!(meta)) {
                meta = document.createElement('meta');
                meta.setAttribute('name', 'viewport');
                document.head.appendElement(metatag);
            }
            return meta;
        }

        function dimensionSetter(w, h, x) {
            var newWidth = (parseInt(w, 10)) || dimensions.width || window.innerWidth,
                newHeight = (parseInt(h, 10)) || dimensions.height || window.innerHeight,
                newDensity = (parseFloat(x)) || dimensions.density || (window.devicePixelRatio) || 1,
                changed = false;
            if (newWidth !== dimensions.width) {
                dimensions.width = newWidth;
                changed = true;
            }
            if (newHeight !== dimensions.height) {
                dimensions.height = newHeight;
                changed = true;
            }
            if (newDensity !== dimensions.density) {
                dimensions.density = newDensity;
                changed = true;
            }
            if (changed) {
                updateMeta();
                dispatchEvent('change');
            }
        }

        function updateMeta() {
            var content = '',
                w = dimensions.width,
                h = dimensions.height,
                x = dimensions.density;
            //only update if document is still interactive
            //otherwise, it doesn't really help
            if (window.document.readyState !== 'complete') {
                content += (!(isNaN(w))) ? 'width=' + w + ',' : '';
                content += (!(isNaN(h))) ? 'height=' + h + ',' : '';
                content += (!(isNaN(x))) ? 'target-densitydpi=' + x : '';
                //remove trailing ",", as browser whinge about it.
                if (/,$/.test(content)) {
                    content = content.substr(0, content.length - 1);
                }
                metatag.content = content;
            }
        }

        function dimensionGetter(prop) {
            return dimensions[prop];
        }

        function dispatchEvent(type) {
            var e = new CustomEvent(type);
            dispatcher.dispatchEvent(e);
        }
    }
}(this, window));

(function(exports) {
    //The HTML contains definitions/algorithms from HTML5
    var HTML = {},
        //"white space" per HTML5
        //Spec: http://www.whatwg.org/specs/web-apps/current-work/#space-character
        //\u0020\u0009\u000A\u000C\u000D
        whitespace = ' \t\n\f\r',
        ASCIIDigits = /^[0-9]$/;

    //export HTML object
    Object.defineProperty(exports, 'HTML', {
        get: function() {
            return HTML;
        }
    });

    //Configure HTML object
    Object.defineProperty(HTML, 'whitespace', {
        get: function() {
            return whitespace;
        }
    });
    Object.defineProperty(HTML, 'ASCIIDigits', {
        get: function() {
            return ASCIIDigits;
        }
    });
    Object.defineProperty(HTML, 'collectCharacters', {
        value: collectCharacters
    });
    Object.defineProperty(HTML, 'skipWhiteSpace', {
        value: skipWhiteSpace
    });
    Object.defineProperty(HTML, 'splitStringOnSpaces', {
        value: splitStringOnSpaces
    });
    Object.defineProperty(HTML, 'parseNonNegInt', {
        value: parseNonNegInt
    });
    Object.defineProperty(HTML, 'parseInteger', {
        value: parseInteger
    });
    Object.defineProperty(HTML, 'parseFloat', {
        value: parseFloatingPoint
    });

    //The step skip whitespace means that the user agent must collect a sequence of characters that are space characters.
    //Spec: http://www.whatwg.org/specs/web-apps/current-work/#skip-whitespace
    function skipWhiteSpace(str) {
        str = String(str);
        var l = str.length,
            i = 0,
            ws = HTML.whitespace;
        for (; i < l; i++) {
            if (ws.indexOf(str[i]) === -1) {
                return i;
            }
        }
        return l;
    }
    //When a user agent has to split a string on spaces, it must use the following algorithm:
    //Spec: http://www.whatwg.org/specs/web-apps/current-work/#split-a-string-on-spaces
    //Let input be the string being parsed.
    function splitStringOnSpaces(input) {
        //Let position be a pointer into input, initially pointing at the start of the string.
        var position = 0,
            //Let tokens be a list of tokens, initially empty.
            tokens = [],
            l = input.length,
            sequence = '',
            ws = HTML.whitespace;
        //Skip whitespace
        position = skipWhiteSpace(input);
        //While position is not past the end of input:
        while (position < l) {
            //Collect a sequence of characters that are not space characters.
            if (ws.indexOf(input[position]) === -1) {
                sequence += input[position++];
                if (position === l) {
                    tokens.push(sequence);
                }
            } else {
                tokens.push(sequence);
                sequence = '';
                //Skip whitespace
                position += skipWhiteSpace(input.substr(position, l));
            }
        }
        //Return tokens.
        return tokens;
    }
    //For parsers based on this pattern, a step that requires the user agent to collect a sequence of characters means
    //that the following algorithm must be run, with characters being the set of characters that can be collected:
    //Let input and position be the same variables as those of the same name in the algorithm that invoked these steps.
    function collectCharacters(input, position, characters) {
        //Let result be the empty string.
        var result = '',
            l = input.length;
        //While position doesn't point past the end of input
        //and the character at position is one of the characters
        while (position < l && characters.test(input[position])) {
            //append that character to the end of result and advance position
            //to the next character in input.
            result += input[position++];
        }
        //Return result.
        return {
            result: result,
            position: position
        };
    }
    //The rules for parsing non-negative integers are as given in the following algorithm.
    //When invoked, the steps must be followed in the order given,
    //aborting at the first step that returns a value.
    //This algorithm will return either zero, a positive integer, or an error.
    //Let input be the string being parsed.
    function parseNonNegInt(input) {
        var value = HTML.parseInteger(input);
        //Let value be the result of parsing input using the rules for parsing integers.
        //If value is an error, return an error.
        //(Returing value is already an error)
        //If value is less than zero, return an error.
        if (value < 0) {
            return new Error('Invalid input');
        }
        //Return value.
        return value;
    }
    //The rules for parsing integers are as given in the following algorithm.
    //When invoked, the steps must be followed in the order given,
    //aborting at the first step that returns a value.
    //This algorithm will return either an integer or an error.
    //Let input be the string being parsed.
    function parseInteger(input) {
        //Let position be a pointer into input, initially pointing at the start of the string.
        var position = 0,
            //Let sign have the value "positive".
            sign = 'positive',
            endOfInput = input.length - 1,
            collectedChars,
            value = 0;
        //Skip whitespace.
        position = skipWhiteSpace(input);
        //If position is past the end of input, return an error.
        if (position > endOfInput) {
            return new Error('Invlid input');
        }
        //If the character indicated by position (the first character) is a "-" (U+002D) character:
        if (input[position] === '-') {
            //Let sign be "negative".
            sign = 'negative';
            //Advance position to the next character.
            position++;
            //If position is past the end of input, return an error.
            if (position > endOfInput) {
                return new Error('Invlid input');
            }
            //Otherwise, if the character indicated by position (the first character) is a "+" (U+002B) character:
        } else if (input[position] === '+') {
            //Advance position to the next character. (The "+" is ignored, but it is not conforming.)
            position++;
            //If position is past the end of input, return an error.
            if (position > endOfInput) {
                return new Error('Invlid input');
            }
        }
        //If the character indicated by position is not one of ASCII digits, then return an error.
        if (!ASCIIDigits.test(input[position])) {
            return new Error('Invlid input');
        }
        //Collect a sequence of characters in the range ASCII digits,
        //and interpret the resulting sequence as a base-ten integer.
        //Let value be that integer.
        collectedChars = HTML.collectCharacters(input, position, ASCIIDigits);
        position = collectedChars.position;
        value = parseInt(collectedChars.result, 10);
        //If sign is "positive", return value, otherwise return the result of subtracting value from zero.
        if (sign === 'positive') {
            return value;
        }
        return 0 - value;
    }
    //The rules for parsing floating-point number values are as given in the following algorithm. This algorithm must be aborted at the first step that returns something. This algorithm will return either a number or an error.
    //Let input be the string being parsed.
    function parseFloatingPoint(input) {
        window.console.warn('Using ECMAScript parse float, as the HTML one is not done yet');
        return window.parseFloat(input);
        /*
        //Let position be a pointer into input, initially pointing at the start of the string.
        var position = 0,
            value = 1, //Let value have the value 1.
            divisor = 1, //Let divisor have the value 1.
            exponent = 1, //Let exponent have the value 1.
            l = input.length,
            endOfInput = l - 1,
            collectedChars;
        //Skip whitespace.
        position = HTML.skipWhiteSpace(input);
        //If position is past the end of input, return an error.
        if (position >= endOfInput) {
            return new Error('invalid input');
        }
        //If the character indicated by position is a "-" (U+002D) character:
        if (input[position] === '-') {
            //Change value and divisor to âˆ’1.
            divisor *= -1;
            //Advance position to the next character.
            position++;
            //Otherwise, if the character indicated by position (the first character) is a "+" (U+002B) character:
        } else if (input[position] === '+') {
            //Advance position to the next character. (The "+" is ignored, but it is not conforming.)
            position++;
        }
        //If position is past the end of input, return an error.
        if (position >= endOfInput) {
            return new Error('invalid input');
        }
        //If the character indicated by position is a "." (U+002E),
        //and that is not the last character in input,
        //and the character after the character indicated by position is one of ASCII digits,
        if (input[position] === '.' && position !== endOfInput && ASCIIDigits.test(input[position + 1])) {
            //then set value to zero and jump to the step labeled fraction.
            value = 0;
            fraction();
        }
        //If the character indicated by position is not one of ASCII digits, then return an error.
        if (!ASCIIDigits.test(input[position])) {
            return new Error('invalid input');
        }
        //Collect a sequence of characters in the range ASCII digits,
        //and interpret the resulting sequence as a base-ten integer. Multiply value by that integer.
        collectedChars = HTML.collectCharacters(input, position, ASCIIDigits);
        value *= parseInt(collectedChars.result, 10);
        position = collectedChars.position;
        //If position is past the end of input, jump to the step labeled conversion.
        if (position > endOfInput) {
            conversion();
        }
        //Fraction: If the character indicated by position is a "." (U+002E), run these substeps:
        function fraction() {

            //Advance position to the next character.
            position++;

            //If position is past the end of input,
            var eoi = position > endOfInput,
                isDigit = ASCIIDigits.test(input[position]),
                chr = input[position];
            //or if the character indicated by position is not one of ASCII digits,
            //"e" (U+0065), or "E" (U+0045),
            if (eoi || isDigit || chr === 'e' || chr === 'E') {
                //then jump to the step labeled conversion.
                conversion();
            }
        }
        throw 'Not implemented yet, sorry!';
        //If the character indicated by position is a "e" (U+0065) character or a "E" (U+0045) character, skip the remainder of these substeps.
        //Fraction loop: Multiply divisor by ten.
        //Add the value of the character indicated by position, interpreted as a base-ten digit (0..9) and divided by divisor, to value.
        //Advance position to the next character.
        //If position is past the end of input, then jump to the step labeled conversion.
        //If the character indicated by position is one of ASCII digits, jump back to the step labeled fraction loop in these substeps.
        //If the character indicated by position is a "e" (U+0065) character or a "E" (U+0045) character, run these substeps:
        //Advance position to the next character.
        //If position is past the end of input, then jump to the step labeled conversion.
        //If the character indicated by position is a "-" (U+002D) character:
        //Change exponent to âˆ’1.
        //Advance position to the next character.
        //If position is past the end of input, then jump to the step labeled conversion.
        //Otherwise, if the character indicated by position is a "+" (U+002B) character:
        //Advance position to the next character.
        //If position is past the end of input, then jump to the step labeled conversion.
        //If the character indicated by position is not one of ASCII digits, then jump to the step labeled conversion.
        //Collect a sequence of characters in the range ASCII digits, and interpret the resulting sequence as a base-ten integer. Multiply exponent by that integer.
        //Multiply value by ten raised to the exponentth power.
        //Conversion:
        function conversion() {}
        // Let S be the set of finite IEEE 754 double-precision floating-point values except âˆ’0,
        //but with two special values added: 21024 and âˆ’21024.
        //Let rounded-value be the number in S that is closest to value, selecting the number with an even significand if there are two equally close values. (The two special values 21024 and âˆ’21024 are considered to have even significands for this purpose.)
        //If rounded-value is 21024 or âˆ’21024, return an error.
        //Return rounded-value.
        */
    }
}(this));

(function(window, srcsetParser) {
    var imgs = findImages(),
        resolver = new Resolver();

    //listen for loading things
    document.body.addEventListener('load', function() {
        console.log(e.target);
    }, true);

    function findImages() {
        var imgElems = document.querySelectorAll('img'),
            imgs = [];
        for (var i = imgElems.length - 1; i >= 0; i--) {
            imgs = {img: imgs[i]};
        }
        return imgs;
    }

    function isCompletelyAvailable(img) {
        if (img.width === 0 && img.height === 0) {
            return false;
        }
    }

    function processImg() {
        //⌛ If the img element does not have a srcset attribute specified,
        //is not in the completely available state,
        //has image data whose resource type is multipart/x-mixed-replace,
        //or if its update the image data algorithm is running,
        //then abort this algorithm.
        if (!this.hasAttribute('srcset') && !this.complete) {
            return;
        }

        //⌛ Let selected source and selected pixel density be the URL and pixel density
        //that results from processing the image candidates, respectively.
        var result = srcsetParser(elem.getAttributeNode('srcset')),
            selectedSource = result.url,
            selectedPixelDensity = result.density,
            CORSMode;

        //⌛ If selected source is null, then abort these steps.
        if (selectedSource === null) {
            return;
        }

        //⌛ If selected source and selected pixel density are the same as
        //the element's last selected source and current pixel density,
        //then abort these steps.


        //⌛ Resolve selected source, relative to the element.
        resolvedURL = resolver.resolve(selectedSource);

        //⌛ Let CORS mode be the state of the element's crossorigin content attribute.
        CORSMode = elem.getAttribute('crossorigin');

        //⌛ If the resolve a URL algorithm is not successful, abort these steps.


        //End the synchronous section, continuing the remaining steps asynchronously.
        setTimeout(asyncPortion, 1);

        function asyncPortion() {
            //Do a potentially CORS-enabled fetch of the resulting absolute URL,
            //with the mode being CORS mode, the origin being the origin of the img element's Document,
            //and the default origin behaviour set to taint.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', resolvedURL, true);
            xhr.responseType = 'blob';

            //If this download fails in any way (other than the response code not being a 2xx code,
            //as mentioned earlier), or if the image format is unsupported
            //(as determined by applying the image sniffing rules, again as mentioned earlier),
            //or if the resource type is multipart/x-mixed-replace, then abort these steps.
            /* */



            //Otherwise, wait for the fetch algorithm to queue its last task,
            //and then continue with these steps.
            //The data obtained in this way is used in the steps below.

            //Queue a task to run the following substeps:
            //If the img element's src, srcset, or crossorigin attributes have been set,
            //changed, or removed since this algorithm started, then abort these steps.

            //Let the img element's last selected source be selected source and the
            //img element's current pixel density be selected pixel density.

            //Replace the img element's image data with the resource obtained by
            //the earlier step of this algorithm. It can be either CORS-same-origin
            //or CORS-cross-origin; this affects the origin of the image itself
            //(e.g. when used on a canvas).
            //Fire a simple event named load at the img element.
            var e = new CustomEvent('load');
            img.dispatchEvent(e);
        }
    }

    function Resolver() {
        var a = window.document.createElement('a');
        this.resolve = function(url) {
            a.href = url;
            return a.href;
        };
    }

}(window, window.srcsetParser));

/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:false, strict:true, undef:true, unused:true, curly:true, browser:true, indent:4, maxerr:50 */
(function (exports, window, viewport) {
    'use strict';
    var debugging = true,
        srcsetParser = new SrcSetParser(),
        HTML = window.HTML;

    //Constructors and interfaces
    function SrcSetParser() {}
    Object.defineProperty(SrcSetParser.prototype, 'parse', {
        value: parseSrcset
    });

    //Export public interface
    Object.defineProperty(exports, 'srcsetParser', {
        get: function () {
            return srcsetParser;
        }
    });

    function parseSrcset(attr) {
        //Let input be the value of the img element's srcset attribute.
        var input = attr.value;
        if (!(attr instanceof window.Attr)) {
            throw new TypeError('Invalid input');
        }
        //Let position be a pointer into input, initially pointing at the start of the string.
        var position = 0,
            descriptors,
            l = input.length,
            //Let raw candidates be an initially empty ordered list of URLs with associated unparsed descriptors.
            //The order of entries in the list is the order in which entries are added to the list.
            rawCandidates = [];
        //Splitting loop: Skip whitespace.
        while (position < l) {
            position += HTML.skipWhiteSpace(input.substr(position, l));
            //Collect a sequence of characters that are not space characters, and let that be url.
            for (var ws = HTML.whitespace, url = '', chr; position < l; position++) {
                chr = input[position];
                if (ws.indexOf(chr) === -1) {
                    url += chr;
                } else {
                    break;
                }
            }
            //If url is empty, then jump to the step labeled descriptor parser.
            if (url.length === 0) {
                return parseDescriptors(rawCandidates, attr);
            }
            //Collect a sequence of characters that are not "," (U+002C) characters, and let that be descriptors.
            for (descriptors = ''; position < l; position++) {
                if (input[position] !== ',') {
                    descriptors += input[position];
                } else {
                    //Advance position to the next character in input (skipping past the "," (U+002C) character separating this candidate from the next).
                    position++;
                    //Return to the step labeled splitting loop.
                    break;
                }
            }
            //Add url to raw candidates, associated with descriptors.
            rawCandidates.push({
                url: url,
                descriptors: descriptors
            });
        }
        //If position is past the end of input, then jump to the step labeled descriptor parser.
        return parseDescriptors(rawCandidates, attr);
    }

    //Descriptor parser:
    function parseDescriptors(rawCandidates, attr) {
        //Let candidates be an initially empty ordered list of URLs each with an associated pixel density,
        //and optionally an associated width and/or height.
        //The order of entries in the list is the order in which entries are added to the list.
        var candidates = [],
            maxWidth,
            maxHeight,
            maxDensity;

        //For each entry in raw candidates with URL url associated with the unparsed descriptors unparsed descriptors,
        // in the order they were originally added to the list, run these substeps:
        for (var i = 0, l = rawCandidates.length; i < l; i++) {
            //Let descriptor list be the result of splitting unparsed descriptors on spaces.
            var descriptorList = HTML.splitStringOnSpaces(rawCandidates[i].descriptors),
                error = false, //Let error be no.
                width = null, //Let width be absent.
                height = null, //Let height be absent.
                density = null; //Let density be absent.

            //For each token in descriptor list, run the appropriate set of steps from the following list:
            for (var j = 0, jl = descriptorList.length; j < jl; j++) {
                parseToken(descriptorList[j], rawCandidates[i].url);
            }
        }
        //If the img element has a src attribute whose value is not the empty string,
        //then run the following substeps:
        if (attr.ownerElement.hasAttribute('src') && attr.ownerElement.getAttribute('src') !== '') {
            //Let url be the value of the element's src attribute.
            //Add an entry to candidates whose URL is url,
            //associated with a width Infinity, a height Infinity, and a pixel density 1.0.
            candidates.push(new Entry(attr.ownerElement.getAttribute('src')));
        }
        //If candidates is empty, return null and undefined and abort these steps.
        if (candidates.length === 0) {
            return {
                url: null,
                density: undefined
            };
        }
        //If an entry b in candidates has the same associated width, height, and pixel density
        //as an earlier entry a in candidates, then remove entry b.
        //Repeat this step until none of the entries in candidates have the same associated width,
        //height, and pixel density as an earlier entry.
        removeDuplicates(candidates);
        //Optionally, return the URL of an entry in candidates chosen by the user agent,
        //and that entry's associated pixel density, and then abort these steps.
        //The user agent may apply any algorithm or heuristic in its selection of an entry for the
        //purposes of this step.
        //Let max width be the width of the viewport, and let max height be the height of
        //the viewport.[CSS]
        maxWidth = (viewport) ? viewport.width : window.innerWidth;
        maxHeight = (viewport) ? viewport.height : window.innerHeight;
        maxDensity = (viewport) ? viewport.density : window.devicePixelRatio || 1;

        //If there are any entries in candidates that have an associated width that
        //is less than max width, then remove them,
        //unless that would remove all the entries, in which case remove only
        //the entries whose associated width is less than the greatest such width.
        //If there are any entries in candidates that have an associated height that is less
        //than max height, then remove them,unless that would remove all the entries,
        //in which case remove only the entries whose associated height is less than the greatest
        //such height.
        //If there are any entries in candidates that have an associated pixel density that
        //is less than a user-agent-defined value giving the nominal pixel density of the display,
        //then remove them, unless that would remove all the entries, in which case remove only
        //the entries whose associated pixel density is less than the greatest such pixel density.
        discardOutliers('width', candidates, maxWidth);
        discardOutliers('height', candidates, maxHeight);
        discardOutliers('density', candidates, maxDensity);

        //Remove all the entries in candidates that have an associated width that is greater than
        //the smallest such width.
        //Remove all the entries in candidates that have an associated height that is greater than
        //the smallest such height.
        //Remove all the entries in candidates that have an associated pixel density that
        //is greater than the smallest such pixel density.
        ['width', 'height', 'density'].forEach(function (prop) {
            findBestMatch(prop, candidates);
        });

        //MC: Check that the algorithm found the one and only match.
        if (candidates.length > 1 && debugging) {
            window.console.warn('there was more than one candidate?', candidates);
        }

        //Return the URL of the sole remaining entry in candidates, and that entry's
        //associated pixel density.
        return {
            url: candidates[0].url,
            density: candidates[0].density
        };

        function removeDuplicates(candidates) {
            if (candidates.length > 1) {
                for (var h = 0; h <= candidates.length; h++) {
                    for (var b = candidates.length - 1; b > h; b--) {
                        if ((h !== b) && arePropsEqual(candidates[h], candidates[b])) {
                            candidates.splice(b, 1);
                        }
                    }
                }
            }
            return candidates;

            function arePropsEqual(x, y) {
                for (var i in x) {
                    //check everything, except URL
                    if ((i !== 'url') && String(x[i]) !== String(y[i])) {
                        return false;
                    }
                }
                return true;
            }
        }

        function parseToken(token, url) {
            var validWidth = /^\d+\u0077$/,
                validHeight = /^\d+\u0068$/,
                validFloat = /^[\-\+]?[0-9]*\.?[0-9]+([eE][\-\+]?[0-9]+)?\u0078$/;

            //If the token consists of a valid non-negative integer followed by
            //a U+0077 LATIN SMALL LETTER W character
            if (validWidth.test(token)) {
                //If width is not absent, then let error be yes.
                if (width !== null) {
                    error = true;
                }
                //Apply the rules for parsing non-negative integers to the token.
                //Let width be the result.
                width = HTML.parseNonNegInt(token);
            } else if (validHeight.test(token)) {
                //If the token consists of a valid non-negative integer followed
                //by a U+0068 LATIN SMALL LETTER H character
                //I height is not absent, then let error be yes.
                if (height !== null) {
                    error = true;
                }
                //Apply the rules for parsing non-negative integers to the token. Let height be the result.
                height = HTML.parseNonNegInt(token);
            } else if (validFloat.test(token)) {
                //If the token consists of a valid floating-point number followed
                //by a U+0078 LATIN SMALL LETTER X character
                //If density is not absent, then let error be yes.
                if (density !== null) {
                    error = true;
                }
                //Apply the rules for parsing floating-point number values to the token.
                //Let density be the result.
                density = HTML.parseFloat(token);
            }

            //If error is still no,
            if (!error) {
                //then add an entry to candidates whose URL is url,
                //associated with a width width, a height height, and a pixel density density.
                candidates.push(new Entry(url, width, height, density));
            }
        }

        function Entry(url, width, height, density) {
            this.url = url;
            this.width = width || Infinity;
            this.height = height || Infinity;
            this.density = density || 1.0;
        }

        function discardOutliers(prop, candidates, max) {
            if (candidates.length > 1) {
                for (var i = 0, next = candidates[i + 1], biggest = candidates[i]; i < candidates.length; i++) {
                    if (candidates[i].hasOwnProperty(prop) && candidates[i][prop] < max) {
                        biggest = ((next) && next[prop] > biggest[prop]) ? next : biggest;
                        candidates.splice(i--, 1);
                        next = candidates[i + 1];
                    }
                }
                if (candidates.length === 0) {
                    candidates.unshift(biggest);
                }
            }
        }

        function findBestMatch(prop, candidates) {
            if (candidates.length > 1) {
                for (var i = 0, smallest = candidates[0]; i < candidates.length; i++) {
                    if (candidates[i].hasOwnProperty(prop) && !! (candidates[i + 1])) {
                        if (candidates[i + 1][prop] > smallest[prop]) {
                            candidates.splice(i + 1, 1);
                            i--;
                        } else if (candidates[i + 1][prop] !== smallest[prop]) {
                            smallest = candidates[i + 1];
                            candidates.splice(i--, 1);
                        }
                    }
                }
            }
        }
    }
}(this, window, window.customViewport));
