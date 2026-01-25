(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.ht(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.L(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.d7(b)
return new s(c,this)}:function(){if(s===null)s=A.d7(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.d7(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
dd(a,b,c,d){return{i:a,p:b,e:c,x:d}},
da(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.db==null){A.hk()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.dC("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cu
if(o==null)o=$.cu=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.ho(a)
if(p!=null)return p
if(typeof a=="function")return B.v
s=Object.getPrototypeOf(a)
if(s==null)return B.l
if(s===Object.prototype)return B.l
if(typeof q=="function"){o=$.cu
if(o==null)o=$.cu=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
dt(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
eM(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.dt(r))break;++b}return b},
eN(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.n(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.dt(q))break}return b},
a8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aq.prototype
return J.bm.prototype}if(typeof a=="string")return J.ae.prototype
if(a==null)return J.ar.prototype
if(typeof a=="boolean")return J.bl.prototype
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.av.prototype
if(typeof a=="bigint")return J.at.prototype
return a}if(a instanceof A.j)return a
return J.da(a)},
d9(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.av.prototype
if(typeof a=="bigint")return J.at.prototype
return a}if(a instanceof A.j)return a
return J.da(a)},
e8(a){if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
if(typeof a=="symbol")return J.av.prototype
if(typeof a=="bigint")return J.at.prototype
return a}if(a instanceof A.j)return a
return J.da(a)},
di(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a8(a).E(a,b)},
et(a,b){return J.e8(a).v(a,b)},
K(a){return J.a8(a).gl(a)},
eu(a){return J.d9(a).ga5(a)},
ev(a){return J.e8(a).gp(a)},
cV(a){return J.d9(a).gj(a)},
ew(a){return J.a8(a).gk(a)},
b8(a){return J.a8(a).i(a)},
bj:function bj(){},
bl:function bl(){},
ar:function ar(){},
au:function au(){},
V:function V(){},
bz:function bz(){},
aM:function aM(){},
U:function U(){},
at:function at(){},
av:function av(){},
w:function w(a){this.$ti=a},
bk:function bk(){},
bZ:function bZ(a){this.$ti=a},
Z:function Z(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
as:function as(){},
aq:function aq(){},
bm:function bm(){},
ae:function ae(){}},A={cY:function cY(){},
O(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ca(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
e5(a,b,c){return a},
dc(a){var s,r
for(s=$.E.length,r=0;r<s;++r)if(a===$.E[r])return!0
return!1},
eR(a,b,c,d){if(t.U.b(a))return new A.ap(a,b,c.h("@<0>").q(d).h("ap<1,2>"))
return new A.a2(a,b,c.h("@<0>").q(d).h("a2<1,2>"))},
bp:function bp(a){this.a=a},
c7:function c7(){},
c:function c(){},
H:function H(){},
a1:function a1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a2:function a2(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
eg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hN(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b8(a)
return s},
bA(a){var s,r=$.dx
if(r==null)r=$.dx=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eV(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.d.aE(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
bB(a){var s,r,q,p
if(a instanceof A.j)return A.D(A.b7(a),null)
s=J.a8(a)
if(s===B.u||s===B.w||t.A.b(a)){r=B.i(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.D(A.b7(a),null)},
dy(a){var s,r,q
if(a==null||typeof a=="number"||A.d4(a))return J.b8(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.S)return a.i(0)
if(a instanceof A.W)return a.a2(!0)
s=$.es()
for(r=0;r<1;++r){q=s[r].aF(a)
if(q!=null)return q}return"Instance of '"+A.bB(a)+"'"},
v(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.e.a1(s,10)|55296)>>>0,s&1023|56320)}throw A.e(A.bC(a,0,1114111,null,null))},
eU(a){var s=a.$thrownJsError
if(s==null)return null
return A.am(s)},
n(a,b){if(a==null)J.cV(a)
throw A.e(A.e7(a,b))},
e7(a,b){var s,r="index"
if(!A.dX(b))return new A.M(!0,b,r,null)
s=A.b3(J.cV(a))
if(b<0||b>=s)return A.dr(b,s,a,r)
return new A.aI(null,null,!0,b,r,"Value not in range")},
e(a){return A.u(a,new Error())},
u(a,b){var s
if(a==null)a=new A.P()
b.dartException=a
s=A.hu
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hu(){return J.b8(this.dartException)},
cU(a,b){throw A.u(a,b==null?new Error():b)},
ef(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.cU(A.fB(a,b,c),s)},
fB(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.aN("'"+s+"': Cannot "+o+" "+l+k+n)},
df(a){throw A.e(A.ao(a))},
Q(a){var s,r,q,p,o,n
a=A.hr(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.L([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cb(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cc(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dB(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
cZ(a,b){var s=b==null,r=s?null:b.method
return new A.bn(a,r,s?null:b.receiver)},
ac(a){if(a==null)return new A.c6(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ab(a,a.dartException)
return A.h6(a)},
ab(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
h6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.a1(r,16)&8191)===10)switch(q){case 438:return A.ab(a,A.cZ(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.ab(a,new A.aH())}}if(a instanceof TypeError){p=$.ei()
o=$.ej()
n=$.ek()
m=$.el()
l=$.eo()
k=$.ep()
j=$.en()
$.em()
i=$.er()
h=$.eq()
g=p.u(s)
if(g!=null)return A.ab(a,A.cZ(A.A(s),g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.ab(a,A.cZ(A.A(s),g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null){A.A(s)
return A.ab(a,new A.aH())}}return A.ab(a,new A.bI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.ab(a,new A.M(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aK()
return a},
am(a){var s
if(a==null)return new A.aW(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aW(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ea(a){if(a==null)return J.K(a)
if(typeof a=="object")return A.bA(a)
return J.K(a)},
hf(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.B(0,a[s],a[r])}return b},
fJ(a,b,c,d,e,f){t.Z.a(a)
switch(A.b3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.cj("Unsupported number of arguments for wrapped closure"))},
cJ(a,b){var s=a.$identity
if(!!s)return s
s=A.hb(a,b)
a.$identity=s
return s},
hb(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fJ)},
eD(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bF().constructor.prototype):Object.create(new A.ad(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.dp(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ez(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.dp(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ez(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ex)}throw A.e("Error in functionType of tearoff")},
eA(a,b,c,d){var s=A.dn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
dp(a,b,c,d){if(c)return A.eC(a,b,d)
return A.eA(b.length,d,a,b)},
eB(a,b,c,d){var s=A.dn,r=A.ey
switch(b?-1:a){case 0:throw A.e(new A.bD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
eC(a,b,c){var s,r
if($.dl==null)$.dl=A.dk("interceptor")
if($.dm==null)$.dm=A.dk("receiver")
s=b.length
r=A.eB(s,c,a,b)
return r},
d7(a){return A.eD(a)},
ex(a,b){return A.b0(v.typeUniverse,A.b7(a.a),b)},
dn(a){return a.a},
ey(a){return a.b},
dk(a){var s,r,q,p=new A.ad("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.bX("Field name "+a+" not found.",null))},
hg(a){return v.getIsolateTag(a)},
ho(a){var s,r,q,p,o,n=A.A($.e9.$1(a)),m=$.cK[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cO[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.d2($.e3.$2(a,n))
if(q!=null){m=$.cK[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cO[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cR(s)
$.cK[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cO[n]=s
return s}if(p==="-"){o=A.cR(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ec(a,s)
if(p==="*")throw A.e(A.dC(n))
if(v.leafTags[n]===true){o=A.cR(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ec(a,s)},
ec(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.dd(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cR(a){return J.dd(a,!1,null,!!a.$iB)},
hq(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cR(s)
else return J.dd(s,c,null,null)},
hk(){if(!0===$.db)return
$.db=!0
A.hl()},
hl(){var s,r,q,p,o,n,m,l
$.cK=Object.create(null)
$.cO=Object.create(null)
A.hj()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ed.$1(o)
if(n!=null){m=A.hq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
hj(){var s,r,q,p,o,n,m=B.m()
m=A.al(B.n,A.al(B.o,A.al(B.j,A.al(B.j,A.al(B.p,A.al(B.q,A.al(B.r(B.i),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.e9=new A.cL(p)
$.e3=new A.cM(o)
$.ed=new A.cN(n)},
al(a,b){return a(b)||b},
fh(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.n(b,s)
if(!J.di(r,b[s]))return!1}return!0},
hd(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hr(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aV:function aV(a){this.a=a},
X:function X(a){this.a=a},
aJ:function aJ(){},
cb:function cb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aH:function aH(){},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a){this.a=a},
c6:function c6(a){this.a=a},
aW:function aW(a){this.a=a
this.b=null},
S:function S(){},
bb:function bb(){},
bc:function bc(){},
bG:function bG(){},
bF:function bF(){},
ad:function ad(a,b){this.a=a
this.b=b},
bD:function bD(a){this.a=a},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c2:function c2(a,b){this.a=a
this.b=b
this.c=null},
a0:function a0(a,b){this.a=a
this.$ti=b},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(a,b){this.a=a
this.$ti=b},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
W:function W(){},
a5:function a5(){},
af:function af(){},
aF:function aF(){},
bq:function bq(){},
ag:function ag(){},
aD:function aD(){},
aE:function aE(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
aG:function aG(){},
by:function by(){},
aR:function aR(){},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
d_(a,b){var s=b.c
return s==null?b.c=A.aZ(a,"bh",[b.x]):s},
dz(a){var s=a.w
if(s===6||s===7)return A.dz(a.x)
return s===11||s===12},
eX(a){return a.as},
eb(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
d8(a){return A.cE(v.typeUniverse,a,!1)},
a6(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a6(a1,s,a3,a4)
if(r===s)return a2
return A.dN(a1,r,!0)
case 7:s=a2.x
r=A.a6(a1,s,a3,a4)
if(r===s)return a2
return A.dM(a1,r,!0)
case 8:q=a2.y
p=A.ak(a1,q,a3,a4)
if(p===q)return a2
return A.aZ(a1,a2.x,p)
case 9:o=a2.x
n=A.a6(a1,o,a3,a4)
m=a2.y
l=A.ak(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.d0(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ak(a1,j,a3,a4)
if(i===j)return a2
return A.dO(a1,k,i)
case 11:h=a2.x
g=A.a6(a1,h,a3,a4)
f=a2.y
e=A.h3(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dL(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ak(a1,d,a3,a4)
o=a2.x
n=A.a6(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.d1(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.ba("Attempted to substitute unexpected RTI kind "+a0))}},
ak(a,b,c,d){var s,r,q,p,o=b.length,n=A.cF(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a6(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
h4(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cF(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a6(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
h3(a,b,c,d){var s,r=b.a,q=A.ak(a,r,c,d),p=b.b,o=A.ak(a,p,c,d),n=b.c,m=A.h4(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bO()
s.a=q
s.b=o
s.c=m
return s},
L(a,b){a[v.arrayRti]=b
return a},
e6(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.hi(s)
return a.$S()}return null},
hm(a,b){var s
if(A.dz(b))if(a instanceof A.S){s=A.e6(a)
if(s!=null)return s}return A.b7(a)},
b7(a){if(a instanceof A.j)return A.R(a)
if(Array.isArray(a))return A.b2(a)
return A.d3(J.a8(a))},
b2(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
R(a){var s=a.$ti
return s!=null?s:A.d3(a)},
d3(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.fI(a,s)},
fI(a,b){var s=a instanceof A.S?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fq(v.typeUniverse,s.name)
b.$ccache=r
return r},
hi(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cE(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
hh(a){return A.a7(A.R(a))},
d6(a){var s
if(a instanceof A.W)return A.he(a.$r,a.Z())
s=a instanceof A.S?A.e6(a):null
if(s!=null)return s
if(t.R.b(a))return J.ew(a).a
if(Array.isArray(a))return A.b2(a)
return A.b7(a)},
a7(a){var s=a.r
return s==null?a.r=new A.cD(a):s},
he(a,b){var s,r,q=b,p=q.length
if(p===0)return t.d
if(0>=p)return A.n(q,0)
s=A.b0(v.typeUniverse,A.d6(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.n(q,r)
s=A.dP(v.typeUniverse,s,A.d6(q[r]))}return A.b0(v.typeUniverse,s,a)},
J(a){return A.a7(A.cE(v.typeUniverse,a,!1))},
fH(a){var s=this
s.b=A.h1(s)
return s.b(a)},
h1(a){var s,r,q,p,o
if(a===t.K)return A.fP
if(A.a9(a))return A.fT
s=a.w
if(s===6)return A.fF
if(s===1)return A.dZ
if(s===7)return A.fK
r=A.h0(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a9)){a.f="$i"+q
if(q==="i")return A.fN
if(a===t.m)return A.fM
return A.fS}}else if(s===10){p=A.hd(a.x,a.y)
o=p==null?A.dZ:p
return o==null?A.b4(o):o}return A.fD},
h0(a){if(a.w===8){if(a===t.S)return A.dX
if(a===t.i||a===t.H)return A.fO
if(a===t.N)return A.fR
if(a===t.y)return A.d4}return null},
fG(a){var s=this,r=A.fC
if(A.a9(s))r=A.fy
else if(s===t.K)r=A.b4
else if(A.an(s)){r=A.fE
if(s===t.x)r=A.fw
else if(s===t.w)r=A.d2
else if(s===t.u)r=A.ft
else if(s===t.D)r=A.dS
else if(s===t.t)r=A.fv
else if(s===t.B)r=A.C}else if(s===t.S)r=A.b3
else if(s===t.N)r=A.A
else if(s===t.y)r=A.fs
else if(s===t.H)r=A.fx
else if(s===t.i)r=A.fu
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
fD(a){var s=this
if(a==null)return A.an(s)
return A.hn(v.typeUniverse,A.hm(a,s),s)},
fF(a){if(a==null)return!0
return this.x.b(a)},
fS(a){var s,r=this
if(a==null)return A.an(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.a8(a)[s]},
fN(a){var s,r=this
if(a==null)return A.an(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.a8(a)[s]},
fM(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
dY(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
fC(a){var s=this
if(a==null){if(A.an(s))return a}else if(s.b(a))return a
throw A.u(A.dT(a,s),new Error())},
fE(a){var s=this
if(a==null||s.b(a))return a
throw A.u(A.dT(a,s),new Error())},
dT(a,b){return new A.aX("TypeError: "+A.dE(a,A.D(b,null)))},
dE(a,b){return A.bg(a)+": type '"+A.D(A.d6(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.aX("TypeError: "+A.dE(a,b))},
fK(a){var s=this
return s.x.b(a)||A.d_(v.typeUniverse,s).b(a)},
fP(a){return a!=null},
b4(a){if(a!=null)return a
throw A.u(A.G(a,"Object"),new Error())},
fT(a){return!0},
fy(a){return a},
dZ(a){return!1},
d4(a){return!0===a||!1===a},
fs(a){if(!0===a)return!0
if(!1===a)return!1
throw A.u(A.G(a,"bool"),new Error())},
ft(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.u(A.G(a,"bool?"),new Error())},
fu(a){if(typeof a=="number")return a
throw A.u(A.G(a,"double"),new Error())},
fv(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.G(a,"double?"),new Error())},
dX(a){return typeof a=="number"&&Math.floor(a)===a},
b3(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.u(A.G(a,"int"),new Error())},
fw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.u(A.G(a,"int?"),new Error())},
fO(a){return typeof a=="number"},
fx(a){if(typeof a=="number")return a
throw A.u(A.G(a,"num"),new Error())},
dS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.G(a,"num?"),new Error())},
fR(a){return typeof a=="string"},
A(a){if(typeof a=="string")return a
throw A.u(A.G(a,"String"),new Error())},
d2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.u(A.G(a,"String?"),new Error())},
d(a){if(A.dY(a))return a
throw A.u(A.G(a,"JSObject"),new Error())},
C(a){if(a==null)return a
if(A.dY(a))return a
throw A.u(A.G(a,"JSObject?"),new Error())},
e1(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.D(a[q],b)
return s},
fX(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.e1(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.D(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dU(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.L([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.t(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.n(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.D(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.D(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.D(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.D(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.D(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
D(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.D(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.D(a.x,b)+">"
if(l===8){p=A.h5(a.x)
o=a.y
return o.length>0?p+("<"+A.e1(o,b)+">"):p}if(l===10)return A.fX(a,b)
if(l===11)return A.dU(a,b,null)
if(l===12)return A.dU(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.n(b,n)
return b[n]}return"?"},
h5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fr(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
fq(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cE(a,b,!1)
else if(typeof m=="number"){s=m
r=A.b_(a,5,"#")
q=A.cF(s)
for(p=0;p<s;++p)q[p]=r
o=A.aZ(a,b,q)
n[b]=o
return o}else return m},
fp(a,b){return A.dQ(a.tR,b)},
fo(a,b){return A.dQ(a.eT,b)},
cE(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dJ(A.dH(a,null,b,!1))
r.set(b,s)
return s},
b0(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dJ(A.dH(a,b,c,!0))
q.set(c,r)
return r},
dP(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.d0(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
Y(a,b){b.a=A.fG
b.b=A.fH
return b},
b_(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.I(null,null)
s.w=b
s.as=c
r=A.Y(a,s)
a.eC.set(c,r)
return r},
dN(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.fm(a,b,r,c)
a.eC.set(r,s)
return s},
fm(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a9(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.an(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.I(null,null)
q.w=6
q.x=b
q.as=c
return A.Y(a,q)},
dM(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.fk(a,b,r,c)
a.eC.set(r,s)
return s},
fk(a,b,c,d){var s,r
if(d){s=b.w
if(A.a9(b)||b===t.K)return b
else if(s===1)return A.aZ(a,"bh",[b])
else if(b===t.P||b===t.T)return t.Y}r=new A.I(null,null)
r.w=7
r.x=b
r.as=c
return A.Y(a,r)},
fn(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=13
s.x=b
s.as=q
r=A.Y(a,s)
a.eC.set(q,r)
return r},
aY(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
fj(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aZ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.I(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.Y(a,r)
a.eC.set(p,q)
return q},
d0(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.I(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.Y(a,o)
a.eC.set(q,n)
return n},
dO(a,b,c){var s,r,q="+"+(b+"("+A.aY(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.Y(a,s)
a.eC.set(q,r)
return r},
dL(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aY(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aY(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.fj(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.I(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.Y(a,p)
a.eC.set(r,o)
return o},
d1(a,b,c,d){var s,r=b.as+("<"+A.aY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.fl(a,b,c,r,d)
a.eC.set(r,s)
return s},
fl(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cF(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a6(a,b,r,0)
m=A.ak(a,c,r,0)
return A.d1(a,n,m,c!==m)}}l=new A.I(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.Y(a,l)},
dH(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dJ(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.fc(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dI(a,r,l,k,!1)
else if(q===46)r=A.dI(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a4(a.u,a.e,k.pop()))
break
case 94:k.push(A.fn(a.u,k.pop()))
break
case 35:k.push(A.b_(a.u,5,"#"))
break
case 64:k.push(A.b_(a.u,2,"@"))
break
case 126:k.push(A.b_(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.fe(a,k)
break
case 38:A.fd(a,k)
break
case 63:p=a.u
k.push(A.dN(p,A.a4(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.dM(p,A.a4(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.fb(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dK(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.fg(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.a4(a.u,a.e,m)},
fc(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dI(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fr(s,o.x)[p]
if(n==null)A.cU('No "'+p+'" in "'+A.eX(o)+'"')
d.push(A.b0(s,o,n))}else d.push(p)
return m},
fe(a,b){var s,r=a.u,q=A.dG(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aZ(r,p,q))
else{s=A.a4(r,a.e,p)
switch(s.w){case 11:b.push(A.d1(r,s,q,a.n))
break
default:b.push(A.d0(r,s,q))
break}}},
fb(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dG(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a4(p,a.e,o)
q=new A.bO()
q.a=s
q.b=n
q.c=m
b.push(A.dL(p,r,q))
return
case-4:b.push(A.dO(p,b.pop(),s))
return
default:throw A.e(A.ba("Unexpected state under `()`: "+A.p(o)))}},
fd(a,b){var s=b.pop()
if(0===s){b.push(A.b_(a.u,1,"0&"))
return}if(1===s){b.push(A.b_(a.u,4,"1&"))
return}throw A.e(A.ba("Unexpected extended operation "+A.p(s)))},
dG(a,b){var s=b.splice(a.p)
A.dK(a.u,a.e,s)
a.p=b.pop()
return s},
a4(a,b,c){if(typeof c=="string")return A.aZ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ff(a,b,c)}else return c},
dK(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a4(a,b,c[s])},
fg(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a4(a,b,c[s])},
ff(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.ba("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.ba("Bad index "+c+" for "+b.i(0)))},
hn(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.r(a,b,null,c,null)
r.set(c,s)}return s},
r(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a9(d))return!0
s=b.w
if(s===4)return!0
if(A.a9(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.r(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.r(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.r(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.r(a,b.x,c,d,e))return!1
return A.r(a,A.d_(a,b),c,d,e)}if(s===6)return A.r(a,p,c,d,e)&&A.r(a,b.x,c,d,e)
if(q===7){if(A.r(a,b,c,d.x,e))return!0
return A.r(a,b,c,A.d_(a,d),e)}if(q===6)return A.r(a,b,c,p,e)||A.r(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.L)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.r(a,j,c,i,e)||!A.r(a,i,e,j,c))return!1}return A.dW(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.dW(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.fL(a,b,c,d,e)}if(o&&q===10)return A.fQ(a,b,c,d,e)
return!1},
dW(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.r(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.r(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.r(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.r(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.r(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
fL(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.b0(a,b,r[o])
return A.dR(a,p,null,c,d.y,e)}return A.dR(a,b.y,null,c,d.y,e)},
dR(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.r(a,b[s],d,e[s],f))return!1
return!0},
fQ(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.r(a,r[s],c,q[s],e))return!1
return!0},
an(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a9(a))if(s!==6)r=s===7&&A.an(a.x)
return r},
a9(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
dQ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cF(a){return a>0?new Array(a):v.typeUniverse.sEA},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bO:function bO(){this.c=this.b=this.a=null},
cD:function cD(a){this.a=a},
bM:function bM(){},
aX:function aX(a){this.a=a},
f5(){var s,r,q
if(self.scheduleImmediate!=null)return A.h8()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cJ(new A.ce(s),1)).observe(r,{childList:true})
return new A.cd(s,r,q)}else if(self.setImmediate!=null)return A.h9()
return A.ha()},
f6(a){self.scheduleImmediate(A.cJ(new A.cf(t.M.a(a)),0))},
f7(a){self.setImmediate(A.cJ(new A.cg(t.M.a(a)),0))},
f8(a){t.M.a(a)
A.fi(0,a)},
fi(a,b){var s=new A.cB()
s.aa(a,b)
return s},
cW(a){var s
if(t.Q.b(a)){s=a.gN()
if(s!=null)return s}return B.t},
dF(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.eY()
b.ac(new A.N(new A.M(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.a0(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.G()
b.J(o.a)
A.a3(b,p)
return}b.a^=2
A.bT(null,null,b.b,t.M.a(new A.cn(o,b)))},
a3(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.cH(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.a3(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.cH(j.a,j.b)
return}g=$.q
if(g!==h)$.q=h
else g=null
c=c.c
if((c&15)===8)new A.cr(q,d,n).$0()
else if(o){if((c&1)!==0)new A.cq(q,j).$0()}else if((c&2)!==0)new A.cp(d,q).$0()
if(g!=null)$.q=g
c=q.c
if(c instanceof A.z){p=q.a.$ti
p=p.h("bh<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.L(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.dF(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.L(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
fY(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.e(A.dj(a,"onError",u.c))},
fV(){var s,r
for(s=$.aj;s!=null;s=$.aj){$.b6=null
r=s.b
$.aj=r
if(r==null)$.b5=null
s.a.$0()}},
h2(){$.d5=!0
try{A.fV()}finally{$.b6=null
$.d5=!1
if($.aj!=null)$.dh().$1(A.e4())}},
e2(a){var s=new A.bJ(a),r=$.b5
if(r==null){$.aj=$.b5=s
if(!$.d5)$.dh().$1(A.e4())}else $.b5=r.b=s},
h_(a){var s,r,q,p=$.aj
if(p==null){A.e2(a)
$.b6=$.b5
return}s=new A.bJ(a)
r=$.b6
if(r==null){s.b=p
$.aj=$.b6=s}else{q=r.b
s.b=q
$.b6=r.b=s
if(q==null)$.b5=s}},
cH(a,b){A.h_(new A.cI(a,b))},
e_(a,b,c,d,e){var s,r=$.q
if(r===c)return d.$0()
$.q=c
s=r
try{r=d.$0()
return r}finally{$.q=s}},
e0(a,b,c,d,e,f,g){var s,r=$.q
if(r===c)return d.$1(e)
$.q=c
s=r
try{r=d.$1(e)
return r}finally{$.q=s}},
fZ(a,b,c,d,e,f,g,h,i){var s,r=$.q
if(r===c)return d.$2(e,f)
$.q=c
s=r
try{r=d.$2(e,f)
return r}finally{$.q=s}},
bT(a,b,c,d){t.M.a(d)
if(B.b!==c){d=c.al(d)
d=d}A.e2(d)},
ce:function ce(a){this.a=a},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a){this.a=a},
cg:function cg(a){this.a=a},
cB:function cB(){},
cC:function cC(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
bK:function bK(){},
aO:function aO(a,b){this.a=a
this.$ti=b},
aQ:function aQ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
z:function z(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ck:function ck(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
cn:function cn(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a,b){this.a=a
this.b=b},
ct:function ct(a){this.a=a},
cq:function cq(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
bJ:function bJ(a){this.a=a
this.b=null},
aL:function aL(){},
c8:function c8(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=b},
b1:function b1(){},
cI:function cI(a,b){this.a=a
this.b=b},
bR:function bR(){},
cz:function cz(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
eO(a,b,c){return b.h("@<0>").q(c).h("dv<1,2>").a(A.hf(a,new A.aw(b.h("@<0>").q(c).h("aw<1,2>"))))},
dw(a){var s,r
if(A.dc(a))return"{...}"
s=new A.ai("")
try{r={}
B.a.t($.E,a)
s.a+="{"
r.a=!0
a.H(0,new A.c5(r,s))
s.a+="}"}finally{if(0>=$.E.length)return A.n($.E,-1)
$.E.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
m:function m(){},
o:function o(){},
c4:function c4(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
fW(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.ac(r)
q=A.dq(String(s),null)
throw A.e(q)}q=A.cG(p)
return q},
cG(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.bP(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.cG(a[s])
return a},
du(a,b,c){return new A.ax(a,b)},
fA(a){return a.aK()},
f9(a,b){return new A.cv(a,[],A.hc())},
fa(a,b,c){var s,r=new A.ai(""),q=A.f9(r,b)
q.M(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
bP:function bP(a,b){this.a=a
this.b=b
this.c=null},
bQ:function bQ(a){this.a=a},
bd:function bd(){},
bf:function bf(){},
ax:function ax(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
c_:function c_(){},
c1:function c1(a){this.b=a},
c0:function c0(a){this.a=a},
cw:function cw(){},
cx:function cx(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c){this.c=a
this.a=b
this.b=c},
bV(a){var s=A.eV(a)
if(s!=null)return s
throw A.e(A.dq("Invalid double",a))},
eE(a,b){a=A.u(a,new Error())
if(a==null)a=A.b4(a)
a.stack=b.i(0)
throw a},
eP(a,b,c){var s,r
if(a>4294967295)A.cU(A.bC(a,0,4294967295,"length",null))
s=A.L(new Array(a),c.h("w<0>"))
s.$flags=1
r=s
return r},
eQ(a,b,c){var s,r,q=A.L([],c.h("w<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.df)(a),++r)B.a.t(q,c.a(a[r]))
q.$flags=1
return q},
dA(a,b,c){var s=J.ev(b)
if(!s.m())return a
if(c.length===0){do a+=A.p(s.gn())
while(s.m())}else{a+=A.p(s.gn())
while(s.m())a=a+c+A.p(s.gn())}return a},
eY(){return A.am(new Error())},
bg(a){if(typeof a=="number"||A.d4(a)||a==null)return J.b8(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dy(a)},
eF(a,b){A.e5(a,"error",t.K)
A.e5(b,"stackTrace",t.l)
A.eE(a,b)},
ba(a){return new A.b9(a)},
bX(a,b){return new A.M(!1,null,b,a)},
dj(a,b,c){return new A.M(!0,a,b,c)},
bC(a,b,c,d,e){return new A.aI(b,c,!0,a,d,"Invalid value")},
eW(a,b,c){if(0>a||a>c)throw A.e(A.bC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.bC(b,a,c,"end",null))
return b}return c},
dr(a,b,c,d){return new A.bi(b,!0,a,d,"Index out of range")},
f4(a){return new A.aN(a)},
dC(a){return new A.bH(a)},
eZ(a){return new A.bE(a)},
ao(a){return new A.be(a)},
dq(a,b){return new A.bY(a,b)},
eL(a,b,c){var s,r
if(A.dc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.L([],t.s)
B.a.t($.E,a)
try{A.fU(a,s)}finally{if(0>=$.E.length)return A.n($.E,-1)
$.E.pop()}r=A.dA(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ds(a,b,c){var s,r
if(A.dc(a))return b+"..."+c
s=new A.ai(b)
B.a.t($.E,a)
try{r=s
r.a=A.dA(r.a,a,", ")}finally{if(0>=$.E.length)return A.n($.E,-1)
$.E.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fU(a,b){var s,r,q,p,o,n,m,l=a.gp(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.p(l.gn())
B.a.t(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.n(b,-1)
r=b.pop()
if(0>=b.length)return A.n(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.t(b,A.p(p))
return}r=A.p(p)
if(0>=b.length)return A.n(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.n(b,-1)
k-=b.pop().length+2;--j}B.a.t(b,"...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.n(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.t(b,m)
B.a.t(b,q)
B.a.t(b,r)},
eS(a,b,c,d){var s
if(B.f===c){s=B.e.gl(a)
b=J.K(b)
return A.ca(A.O(A.O($.bW(),s),b))}if(B.f===d){s=B.e.gl(a)
b=J.K(b)
c=J.K(c)
return A.ca(A.O(A.O(A.O($.bW(),s),b),c))}s=B.e.gl(a)
b=J.K(b)
c=J.K(c)
d=J.K(d)
d=A.ca(A.O(A.O(A.O(A.O($.bW(),s),b),c),d))
return d},
eT(a){var s,r,q=$.bW()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.df)(a),++r)q=A.O(q,J.K(a[r]))
return A.ca(q)},
k:function k(){},
b9:function b9(a){this.a=a},
P:function P(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bi:function bi(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aN:function aN(a){this.a=a},
bH:function bH(a){this.a=a},
bE:function bE(a){this.a=a},
be:function be(a){this.a=a},
aK:function aK(){},
cj:function cj(a){this.a=a},
bY:function bY(a,b){this.a=a
this.b=b},
b:function b(){},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
j:function j(){},
bS:function bS(){},
ai:function ai(a){this.a=a},
ch(a,b,c,d,e){var s=A.h7(new A.ci(c),t.m)
s=s==null?null:A.dV(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.bN(a,b,s,!1,e.h("bN<0>"))},
h7(a,b){var s=$.q
if(s===B.b)return a
return s.am(a,b)},
cX:function cX(a){this.$ti=a},
aP:function aP(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bN:function bN(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ci:function ci(a){this.a=a},
de(a){var s,r,q=v.G,p=A.d(A.d(A.d(q.window).document).createElement("dialog"))
A.d(p.style).maxWidth="400px"
A.d(p.style).borderRadius="15px"
A.d(p.style).overflow="hidden"
A.d(p.style).border="1px solid #000"
A.d(p.style).boxShadow="0 4px 16px rgba(0,0,0,.2)"
p.innerHTML=a+' <center><br><button id="okBtn">Ok</button></center>'
s=A.C(p.querySelector("#okBtn"))
if(s==null)s=A.d(s)
A.d(s.style).padding="2px 15px"
A.d(s.style).fontSize="16px"
r=t.a
A.ch(s,"click",r.h("~(1)?").a(new A.cS(p)),!1,r.c)
r=new A.z($.q,t.I)
p.addEventListener("close",A.dV(new A.cT(new A.aO(r,t.O),p)))
A.C(A.d(A.d(q.window).document).body).append(p)
p.showModal()
return r},
cS:function cS(a){this.a=a},
cT:function cT(a,b){this.a=a
this.b=b},
hp(){var s,r=v.G,q=A.C(A.d(r.document).getElementById("save")),p=A.C(A.d(r.document).getElementById("calculate"))
A.hs()
A.de("<center><b>MC34063 calculator \xa9 2025 - RonLinu</b></center><br>\n        This application calculates the value of all parts required\n        to build a switching regulator based on the MC34063.\n        <br><br>\n        The following configurations are supported:<br>\n        - Step Down (buck)<br>\n        - Step Up (boost)<br>\n        - Inverter\n    ")
q.toString
r=t.a
s=r.h("~(1)?")
r=r.c
A.ch(q,"click",s.a(new A.cP()),!1,r)
p.toString
A.ch(p,"click",s.a(new A.cQ()),!1,r)},
hs(){var s,r,q,p=v.G,o=A.d2(A.d(A.d(p.window).localStorage).getItem("mc34063"))
if(o==null)return
for(s=B.k.an(o,null).ga3(),s=s.gp(s);s.m();){r=s.gn()
q=A.C(A.d(p.document).getElementById(A.A(r.gav())))
if(q==null)q=A.d(q)
q.value=A.A(r.gaG())}},
ee(){var s,r,q,p=v.G,o=A.C(A.d(p.document).getElementById("vin"))
if(o==null)o=A.d(o)
o=A.A(o.value)
s=A.C(A.d(p.document).getElementById("vout"))
if(s==null)s=A.d(s)
s=A.A(s.value)
r=A.C(A.d(p.document).getElementById("iout"))
if(r==null)r=A.d(r)
r=A.A(r.value)
q=A.C(A.d(p.document).getElementById("freq"))
if(q==null)q=A.d(q)
q=A.A(q.value)
p=A.C(A.d(p.document).getElementById("res1"))
if(p==null)p=A.d(p)
return new A.aV([q,r,A.A(p.value),o,s])},
eh(a){var s,r,q,p,o=a.a,n=o[2]
if(n!==0){s="<pre><b>"+("L   = "+B.c.D(n*1e6,0)+" uH (min)<br>")+("Ct  = "+B.c.D(o[1]*1e12,0)+" pF <br>")+("Co  = "+B.c.D(o[0]*1e6,0)+" uF (min)<br>")+("Rsc = "+B.c.D(o[6],1)+" \u03a9<br>")+("R2  = "+B.c.D(o[4],1)+" K\u03a9<br>")
n=o[5]
s=(n!==0?s+("Rb  = "+B.c.D(n,1)+" ohms<br>"):s)+"</b></pre>"
r=s}else r=""
n=v.G
q=A.C(A.d(n.document).getElementById("results"))
q.toString
q.innerHTML=r
q=A.C(A.d(n.document).getElementById("regulator-name"))
q.toString
q.innerHTML="<b>"+o[3]+"</b>"
p=A.C(A.d(n.document).getElementById("schematic"))
if(p==null)p=A.d(p)
p.src="resources/"+o[7]},
cP:function cP(){},
cQ:function cQ(){},
ht(a){throw A.u(new A.bp("Field '"+a+"' has been assigned during initialization."),new Error())},
dV(a){var s
if(typeof a=="function")throw A.e(A.bX("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fz,a)
s[$.dg()]=a
return s},
fz(a,b,c){t.Z.a(a)
if(A.b3(c)>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.cY.prototype={}
J.bj.prototype={
E(a,b){return a===b},
gl(a){return A.bA(a)},
i(a){return"Instance of '"+A.bB(a)+"'"},
gk(a){return A.a7(A.d3(this))}}
J.bl.prototype={
i(a){return String(a)},
gl(a){return a?519018:218159},
gk(a){return A.a7(t.y)},
$ih:1,
$ibU:1}
J.ar.prototype={
E(a,b){return null==b},
i(a){return"null"},
gl(a){return 0},
$ih:1}
J.au.prototype={$il:1}
J.V.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.bz.prototype={}
J.aM.prototype={}
J.U.prototype={
i(a){var s=a[$.dg()]
if(s==null)return this.a9(a)
return"JavaScript function for "+J.b8(s)},
$ia_:1}
J.at.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.av.prototype={
gl(a){return 0},
i(a){return String(a)}}
J.w.prototype={
t(a,b){A.b2(a).c.a(b)
a.$flags&1&&A.ef(a,29)
a.push(b)},
v(a,b){if(!(b<a.length))return A.n(a,b)
return a[b]},
ga5(a){return a.length!==0},
i(a){return A.ds(a,"[","]")},
gp(a){return new J.Z(a,a.length,A.b2(a).h("Z<1>"))},
gl(a){return A.bA(a)},
gj(a){return a.length},
B(a,b,c){A.b2(a).c.a(c)
a.$flags&2&&A.ef(a)
if(!(b>=0&&b<a.length))throw A.e(A.e7(a,b))
a[b]=c},
$ic:1,
$ib:1,
$ii:1}
J.bk.prototype={
aF(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bB(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bZ.prototype={}
J.Z.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.df(q)
throw A.e(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iT:1}
J.as.prototype={
D(a,b){var s,r
if(b>20)throw A.e(A.bC(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0)r=1/a<0
else r=!1
if(r)return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gl(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a1(a,b){var s
if(a>0)s=this.ak(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ak(a,b){return b>31?0:a>>>b},
gk(a){return A.a7(t.H)},
$if:1,
$iaa:1}
J.aq.prototype={
gk(a){return A.a7(t.S)},
$ih:1,
$ia:1}
J.bm.prototype={
gk(a){return A.a7(t.i)},
$ih:1}
J.ae.prototype={
F(a,b,c){return a.substring(b,A.eW(b,c,a.length))},
aE(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.n(p,0)
if(p.charCodeAt(0)===133){s=J.eM(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.n(p,r)
q=p.charCodeAt(r)===133?J.eN(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a){return a},
gl(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk(a){return A.a7(t.N)},
gj(a){return a.length},
$ih:1,
$it:1}
A.bp.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.c7.prototype={}
A.c.prototype={}
A.H.prototype={
gp(a){var s=this
return new A.a1(s,s.gj(s),A.R(s).h("a1<H.E>"))},
gC(a){return this.gj(this)===0},
a6(a,b,c){var s=A.R(this)
return new A.aC(this,s.q(c).h("1(H.E)").a(b),s.h("@<H.E>").q(c).h("aC<1,2>"))}}
A.a1.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.d9(q),o=p.gj(q)
if(r.b!==o)throw A.e(A.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.v(q,s);++r.c
return!0},
$iT:1}
A.a2.prototype={
gp(a){var s=this.a
return new A.aB(s.gp(s),this.b,A.R(this).h("aB<1,2>"))},
gj(a){var s=this.a
return s.gj(s)}}
A.ap.prototype={$ic:1}
A.aB.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iT:1}
A.aC.prototype={
gj(a){return J.cV(this.a)},
v(a,b){return this.b.$1(J.et(this.a,b))}}
A.x.prototype={}
A.aV.prototype={$r:"+freq,iout,res1,vin,vout(1,2,3,4,5)",$s:1}
A.X.prototype={$r:"+cout,ct,lmin,name,r2,rb,rsc,schematic(1,2,3,4,5,6,7,8)",$s:2}
A.aJ.prototype={}
A.cb.prototype={
u(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aH.prototype={
i(a){return"Null check operator used on a null value"}}
A.bn.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bI.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c6.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aW.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iah:1}
A.S.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.eg(r==null?"unknown":r)+"'"},
$ia_:1,
gaJ(){return this},
$C:"$1",
$R:1,
$D:null}
A.bb.prototype={$C:"$0",$R:0}
A.bc.prototype={$C:"$2",$R:2}
A.bG.prototype={}
A.bF.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.eg(s)+"'"}}
A.ad.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ad))return!1
return this.$_target===b.$_target&&this.a===b.a},
gl(a){return(A.ea(this.a)^A.bA(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bB(this.a)+"'")}}
A.bD.prototype={
i(a){return"RuntimeError: "+this.a}}
A.aw.prototype={
gj(a){return this.a},
gC(a){return this.a===0},
gA(){return new A.a0(this,this.$ti.h("a0<1>"))},
ga3(){return new A.ay(this,this.$ti.h("ay<1,2>"))},
I(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.au(b)},
au(a){var s,r,q=this.d
if(q==null)return null
s=q[J.K(a)&1073741823]
r=this.a4(s,a)
if(r<0)return null
return s[r].b},
B(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.W(s==null?m.b=m.S():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.W(r==null?m.c=m.S():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.S()
p=J.K(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.T(b,c)]
else{n=m.a4(o,b)
if(n>=0)o[n].b=c
else o.push(m.T(b,c))}}},
H(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.ao(q))
s=s.c}},
W(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.T(b,c)
else s.b=c},
T(a,b){var s=this,r=s.$ti,q=new A.c2(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
a4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.di(a[r].a,b))return r
return-1},
i(a){return A.dw(this)},
S(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$idv:1}
A.c2.prototype={}
A.a0.prototype={
gj(a){return this.a.a},
gC(a){return this.a.a===0},
gp(a){var s=this.a
return new A.aA(s,s.r,s.e,this.$ti.h("aA<1>"))}}
A.aA.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iT:1}
A.ay.prototype={
gj(a){return this.a.a},
gp(a){var s=this.a
return new A.az(s,s.r,s.e,this.$ti.h("az<1,2>"))}}
A.az.prototype={
gn(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.F(s.a,s.b,r.$ti.h("F<1,2>"))
r.c=s.c
return!0}},
$iT:1}
A.cL.prototype={
$1(a){return this.a(a)},
$S:3}
A.cM.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cN.prototype={
$1(a){return this.a(A.A(a))},
$S:8}
A.W.prototype={
i(a){return this.a2(!1)},
a2(a){var s,r,q,p,o,n=this.ah(),m=this.Z(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.n(m,q)
o=m[q]
l=a?l+A.dy(o):l+A.p(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ah(){var s,r=this.$s
while($.cy.length<=r)B.a.t($.cy,null)
s=$.cy[r]
if(s==null){s=this.ag()
B.a.B($.cy,r,s)}return s},
ag(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.L(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.a.B(k,q,r[s])}}k=A.eQ(k,!1,t.K)
k.$flags=3
return k}}
A.a5.prototype={
Z(){return this.a},
E(a,b){if(b==null)return!1
return b instanceof A.a5&&this.$s===b.$s&&A.fh(this.a,b.a)},
gl(a){return A.eS(this.$s,A.eT(this.a),B.f,B.f)}}
A.af.prototype={
gk(a){return B.z},
$ih:1}
A.aF.prototype={}
A.bq.prototype={
gk(a){return B.A},
$ih:1}
A.ag.prototype={
gj(a){return a.length},
$iB:1}
A.aD.prototype={$ic:1,$ib:1,$ii:1}
A.aE.prototype={$ic:1,$ib:1,$ii:1}
A.br.prototype={
gk(a){return B.B},
$ih:1}
A.bs.prototype={
gk(a){return B.C},
$ih:1}
A.bt.prototype={
gk(a){return B.D},
$ih:1}
A.bu.prototype={
gk(a){return B.E},
$ih:1}
A.bv.prototype={
gk(a){return B.F},
$ih:1}
A.bw.prototype={
gk(a){return B.H},
$ih:1}
A.bx.prototype={
gk(a){return B.I},
$ih:1}
A.aG.prototype={
gk(a){return B.J},
gj(a){return a.length},
$ih:1}
A.by.prototype={
gk(a){return B.K},
gj(a){return a.length},
$ih:1}
A.aR.prototype={}
A.aS.prototype={}
A.aT.prototype={}
A.aU.prototype={}
A.I.prototype={
h(a){return A.b0(v.typeUniverse,this,a)},
q(a){return A.dP(v.typeUniverse,this,a)}}
A.bO.prototype={}
A.cD.prototype={
i(a){return A.D(this.a,null)}}
A.bM.prototype={
i(a){return this.a}}
A.aX.prototype={$iP:1}
A.ce.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cd.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.cf.prototype={
$0(){this.a.$0()},
$S:5}
A.cg.prototype={
$0(){this.a.$0()},
$S:5}
A.cB.prototype={
aa(a,b){if(self.setTimeout!=null)self.setTimeout(A.cJ(new A.cC(this,b),0),a)
else throw A.e(A.f4("`setTimeout()` not found."))}}
A.cC.prototype={
$0(){this.b.$0()},
$S:0}
A.N.prototype={
i(a){return A.p(this.a)},
$ik:1,
gN(){return this.b}}
A.bK.prototype={}
A.aO.prototype={}
A.aQ.prototype={
aw(a){if((this.c&15)!==6)return!0
return this.b.b.V(t.q.a(this.d),a.a,t.y,t.K)},
ar(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.aA(q,m,a.b,o,n,t.l)
else p=l.V(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.c.b(A.ac(s))){if((r.c&1)!==0)throw A.e(A.bX("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.bX("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
aD(a,b,c){var s,r,q=this.$ti
q.q(c).h("1/(2)").a(a)
s=$.q
if(s===B.b){if(!t.C.b(b)&&!t.v.b(b))throw A.e(A.dj(b,"onError",u.c))}else{c.h("@<0/>").q(q.c).h("1(2)").a(a)
b=A.fY(b,s)}r=new A.z(s,c.h("z<0>"))
this.X(new A.aQ(r,3,a,b,q.h("@<1>").q(c).h("aQ<1,2>")))
return r},
aj(a){this.a=this.a&1|16
this.c=a},
J(a){this.a=a.a&30|this.a&1
this.c=a.c},
X(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.X(a)
return}r.J(s)}A.bT(null,null,r.b,t.M.a(new A.ck(r,a)))}},
a0(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.a0(a)
return}m.J(n)}l.a=m.L(a)
A.bT(null,null,m.b,t.M.a(new A.co(l,m)))}},
G(){var s=t.F.a(this.c)
this.c=null
return this.L(s)},
L(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
af(a){var s,r=this
r.$ti.c.a(a)
s=r.G()
r.a=8
r.c=a
A.a3(r,s)},
ae(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.G()
q.J(a)
A.a3(q,r)},
Y(a){var s=this.G()
this.aj(a)
A.a3(this,s)},
ab(a){this.$ti.h("1/").a(a)
this.ad(a)},
ad(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bT(null,null,s.b,t.M.a(new A.cm(s,a)))},
ac(a){this.a^=2
A.bT(null,null,this.b,t.M.a(new A.cl(this,a)))},
$ibh:1}
A.ck.prototype={
$0(){A.a3(this.a,this.b)},
$S:0}
A.co.prototype={
$0(){A.a3(this.b,this.a.a)},
$S:0}
A.cn.prototype={
$0(){A.dF(this.a.a,this.b,!0)},
$S:0}
A.cm.prototype={
$0(){this.a.af(this.b)},
$S:0}
A.cl.prototype={
$0(){this.a.Y(this.b)},
$S:0}
A.cr.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.az(t.W.a(q.d),t.z)}catch(p){s=A.ac(p)
r=A.am(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.cW(q)
n=k.a
n.c=new A.N(q,o)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.aD(new A.cs(l,m),new A.ct(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cs.prototype={
$1(a){this.a.ae(this.b)},
$S:4}
A.ct.prototype={
$2(a,b){A.b4(a)
t.l.a(b)
this.a.Y(new A.N(a,b))},
$S:10}
A.cq.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.V(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.ac(l)
r=A.am(l)
q=s
p=r
if(p==null)p=A.cW(q)
o=this.a
o.c=new A.N(q,p)
o.b=!0}},
$S:0}
A.cp.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.aw(s)&&p.a.e!=null){p.c=p.a.ar(s)
p.b=!1}}catch(o){r=A.ac(o)
q=A.am(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cW(p)
m=l.b
m.c=new A.N(p,n)
p=m}p.b=!0}},
$S:0}
A.bJ.prototype={}
A.aL.prototype={
gj(a){var s,r,q=this,p={},o=new A.z($.q,t.h)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.c8(p,q))
t.k.a(new A.c9(p,o))
A.ch(q.a,q.b,r,!1,s.c)
return o}}
A.c8.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.c9.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.G()
r.c.a(q)
s.a=8
s.c=q
A.a3(s,p)},
$S:0}
A.b1.prototype={$idD:1}
A.cI.prototype={
$0(){A.eF(this.a,this.b)},
$S:0}
A.bR.prototype={
aB(a){var s,r,q
t.M.a(a)
try{if(B.b===$.q){a.$0()
return}A.e_(null,null,this,a,t.o)}catch(q){s=A.ac(q)
r=A.am(q)
A.cH(A.b4(s),t.l.a(r))}},
aC(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.b===$.q){a.$1(b)
return}A.e0(null,null,this,a,b,t.o,c)}catch(q){s=A.ac(q)
r=A.am(q)
A.cH(A.b4(s),t.l.a(r))}},
al(a){return new A.cz(this,t.M.a(a))},
am(a,b){return new A.cA(this,b.h("~(0)").a(a),b)},
az(a,b){b.h("0()").a(a)
if($.q===B.b)return a.$0()
return A.e_(null,null,this,a,b)},
V(a,b,c,d){c.h("@<0>").q(d).h("1(2)").a(a)
d.a(b)
if($.q===B.b)return a.$1(b)
return A.e0(null,null,this,a,b,c,d)},
aA(a,b,c,d,e,f){d.h("@<0>").q(e).q(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.q===B.b)return a.$2(b,c)
return A.fZ(null,null,this,a,b,c,d,e,f)}}
A.cz.prototype={
$0(){return this.a.aB(this.b)},
$S:0}
A.cA.prototype={
$1(a){var s=this.c
return this.a.aC(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.m.prototype={
gp(a){return new A.a1(a,a.length,A.b7(a).h("a1<m.E>"))},
v(a,b){if(!(b<a.length))return A.n(a,b)
return a[b]},
ga5(a){return a.length!==0},
i(a){return A.ds(a,"[","]")}}
A.o.prototype={
H(a,b){var s,r,q,p=A.R(this)
p.h("~(o.K,o.V)").a(b)
for(s=this.gA(),s=s.gp(s),p=p.h("o.V");s.m();){r=s.gn()
q=this.I(0,r)
b.$2(r,q==null?p.a(q):q)}},
ga3(){return this.gA().a6(0,new A.c4(this),A.R(this).h("F<o.K,o.V>"))},
gj(a){var s=this.gA()
return s.gj(s)},
gC(a){var s=this.gA()
return s.gC(s)},
i(a){return A.dw(this)},
$ic3:1}
A.c4.prototype={
$1(a){var s=this.a,r=A.R(s)
r.h("o.K").a(a)
s=s.I(0,a)
if(s==null)s=r.h("o.V").a(s)
return new A.F(a,s,r.h("F<o.K,o.V>"))},
$S(){return A.R(this.a).h("F<o.K,o.V>(o.K)")}}
A.c5.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:6}
A.bP.prototype={
I(a,b){var s,r=this.b
if(r==null)return this.c.I(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ai(b):s}},
gj(a){return this.b==null?this.c.a:this.K().length},
gC(a){return this.gj(0)===0},
gA(){if(this.b==null){var s=this.c
return new A.a0(s,s.$ti.h("a0<1>"))}return new A.bQ(this)},
H(a,b){var s,r,q,p,o=this
t.E.a(b)
if(o.b==null)return o.c.H(0,b)
s=o.K()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.cG(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.e(A.ao(o))}},
K(){var s=t.e.a(this.c)
if(s==null)s=this.c=A.L(Object.keys(this.a),t.s)
return s},
ai(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.cG(this.a[a])
return this.b[a]=s}}
A.bQ.prototype={
gj(a){return this.a.gj(0)},
v(a,b){var s=this.a
if(s.b==null)s=s.gA().v(0,b)
else{s=s.K()
if(!(b<s.length))return A.n(s,b)
s=s[b]}return s},
gp(a){var s=this.a
if(s.b==null){s=s.gA()
s=s.gp(s)}else{s=s.K()
s=new J.Z(s,s.length,A.b2(s).h("Z<1>"))}return s}}
A.bd.prototype={}
A.bf.prototype={}
A.ax.prototype={
i(a){var s=A.bg(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bo.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.c_.prototype={
an(a,b){var s=A.fW(a,this.gao().a)
return s},
ap(a,b){var s=A.fa(a,this.gaq().b,null)
return s},
gaq(){return B.y},
gao(){return B.x}}
A.c1.prototype={}
A.c0.prototype={}
A.cw.prototype={
a8(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.F(a,r,q)
r=q+1
o=A.v(92)
s.a+=o
o=A.v(117)
s.a+=o
o=A.v(100)
s.a+=o
o=p>>>8&15
o=A.v(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.v(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.v(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.F(a,r,q)
r=q+1
o=A.v(92)
s.a+=o
switch(p){case 8:o=A.v(98)
s.a+=o
break
case 9:o=A.v(116)
s.a+=o
break
case 10:o=A.v(110)
s.a+=o
break
case 12:o=A.v(102)
s.a+=o
break
case 13:o=A.v(114)
s.a+=o
break
default:o=A.v(117)
s.a+=o
o=A.v(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.v(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.v(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.F(a,r,q)
r=q+1
o=A.v(92)
s.a+=o
o=A.v(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.F(a,r,m)},
O(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.e(new A.bo(a,null))}B.a.t(s,a)},
M(a){var s,r,q,p,o=this
if(o.a7(a))return
o.O(a)
try{s=o.b.$1(a)
if(!o.a7(s)){q=A.du(a,null,o.ga_())
throw A.e(q)}q=o.a
if(0>=q.length)return A.n(q,-1)
q.pop()}catch(p){r=A.ac(p)
q=A.du(a,r,o.ga_())
throw A.e(q)}},
a7(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.c.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.a8(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.O(a)
q.aH(a)
s=q.a
if(0>=s.length)return A.n(s,-1)
s.pop()
return!0}else if(a instanceof A.o){q.O(a)
r=q.aI(a)
s=q.a
if(0>=s.length)return A.n(s,-1)
s.pop()
return r}else return!1},
aH(a){var s,r=this.c
r.a+="["
if(J.eu(a)){if(0>=a.length)return A.n(a,0)
this.M(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.M(a[s])}}r.a+="]"},
aI(a){var s,r,q,p,o,n,m=this,l={}
if(a.gC(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.eP(s,null,t.X)
q=l.a=0
l.b=!0
a.H(0,new A.cx(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.a8(A.A(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.n(r,n)
m.M(r[n])}p.a+="}"
return!0}}
A.cx.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.B(s,r.a++,a)
B.a.B(s,r.a++,b)},
$S:6}
A.cv.prototype={
ga_(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.k.prototype={
gN(){return A.eU(this)}}
A.b9.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bg(s)
return"Assertion failed"}}
A.P.prototype={}
A.M.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gR()+q+o
if(!s.a)return n
return n+s.gP()+": "+A.bg(s.gU())},
gU(){return this.b}}
A.aI.prototype={
gU(){return A.dS(this.b)},
gR(){return"RangeError"},
gP(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.bi.prototype={
gU(){return A.b3(this.b)},
gR(){return"RangeError"},
gP(){if(A.b3(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.aN.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bH.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.bE.prototype={
i(a){return"Bad state: "+this.a}}
A.be.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bg(s)+"."}}
A.aK.prototype={
i(a){return"Stack Overflow"},
gN(){return null},
$ik:1}
A.cj.prototype={
i(a){return"Exception: "+this.a}}
A.bY.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.d.F(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.b.prototype={
a6(a,b,c){var s=A.R(this)
return A.eR(this,s.q(c).h("1(b.E)").a(b),s.h("b.E"),c)},
gj(a){var s,r=this.gp(this)
for(s=0;r.m();)++s
return s},
v(a,b){var s,r=this.gp(this)
for(s=b;r.m();){if(s===0)return r.gn();--s}throw A.e(A.dr(b,b-s,this,"index"))},
i(a){return A.eL(this,"(",")")}}
A.F.prototype={
i(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"},
gav(){return this.a},
gaG(){return this.b}}
A.y.prototype={
gl(a){return A.j.prototype.gl.call(this,0)},
i(a){return"null"}}
A.j.prototype={$ij:1,
E(a,b){return this===b},
gl(a){return A.bA(this)},
i(a){return"Instance of '"+A.bB(this)+"'"},
gk(a){return A.hh(this)},
toString(){return this.i(this)}}
A.bS.prototype={
i(a){return""},
$iah:1}
A.ai.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$if_:1}
A.cX.prototype={}
A.aP.prototype={}
A.bL.prototype={}
A.bN.prototype={}
A.ci.prototype={
$1(a){return this.a.$1(A.d(a))},
$S:1}
A.cS.prototype={
$1(a){this.a.close("ok")},
$S:1}
A.cT.prototype={
$1(a){var s,r,q,p
A.d(a)
s=this.a
r=this.b
q=s.$ti
p=q.h("1/?").a(A.A(r.returnValue))
s=s.a
if((s.a&30)!==0)A.cU(A.eZ("Future already completed"))
s.ab(q.h("1/").a(p))
r.remove()},
$S:11}
A.cP.prototype={
$1(a){var s=A.ee().a,r=t.N,q=B.k.ap(A.eO(["vin",s[3],"vout",s[4],"iout",s[1],"freq",s[0],"res1",s[2]],r,r),null)
A.d(A.d(v.G.window).localStorage).setItem("mc34063",q)
A.de("Fields have been saved!")},
$S:1}
A.cQ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
A.eh(new A.X([0,0,0,"Regulator name",0,0,0,"splash.png"]))
s=A.ee().a
r=A.bV(s[3])
q=A.bV(s[4])
p=A.bV(s[1])
q=[A.bV(s[0]),p,A.bV(s[2]),r,q]
s=q[3]
o=s<3||s>40?"- Input voltage<br>":""
r=q[4]
if(r>-3&&r<3||r<-40||r>40)o+="- Output voltage<br>"
if(Math.abs(s-r)<3)o+="- Input/Output voltage differential<br>"
p=q[1]
if(p<5||p>1000)o+="- Output current<br>"
n=q[0]
if(n<25||n>100)o+="- Frequency<br>"
q=q[2]
if(q<1||q>25)o+="- Resistor R1<br>"
if(o.length!==0){A.de("Value is out of range in "+(o.split("-").length-1>1?"these fields":"this field")+" <hr> "+o)
return}if(r<0){r=Math.abs(r)
s-=0.8
m=1/(n*1000)
n=(r+0.8)/s+1
l=m-m/n
k=2*p/1000*n
j=new A.X([p/1000*l/0.1,l*0.00004,s/k*l,"Inverter regulator",(r-1.25)/1.25*q,0,0.33/k,"inverter.png"])}else{i=r+0.8
h=s-1
p/=1000
m=1/(n*1000)
n=(r-1.25)/1.25
if(r<s){g=m-m/(i/(s-0.8-r)+1)
k=p*2
j=new A.X([k*m/0.8,g*0.00004,(h-r)/k*g,"Step-down regulator",n*q,0,0.33/k,"step_down.png"])}else{s=(i-s)/h+1
g=m-m/s
k=p*s*2
f=0.33/k
j=new A.X([p*g/0.1,g*0.00004,h/k*g,"Step-up regulator",n*q,(h-k)*f/(k/20+0.005),f,"step_up.png"])}}A.eh(j)},
$S:1};(function aliases(){var s=J.V.prototype
s.a9=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"h8","f6",2)
s(A,"h9","f7",2)
s(A,"ha","f8",2)
r(A,"e4","h2",0)
s(A,"hc","fA",3)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.cY,J.bj,A.aJ,J.Z,A.k,A.c7,A.b,A.a1,A.aB,A.x,A.W,A.cb,A.c6,A.aW,A.S,A.o,A.c2,A.aA,A.az,A.I,A.bO,A.cD,A.cB,A.N,A.bK,A.aQ,A.z,A.bJ,A.aL,A.b1,A.m,A.bd,A.bf,A.cw,A.aK,A.cj,A.bY,A.F,A.y,A.bS,A.ai,A.cX,A.bN])
q(J.bj,[J.bl,J.ar,J.au,J.at,J.av,J.as,J.ae])
q(J.au,[J.V,J.w,A.af,A.aF])
q(J.V,[J.bz,J.aM,J.U])
r(J.bk,A.aJ)
r(J.bZ,J.w)
q(J.as,[J.aq,J.bm])
q(A.k,[A.bp,A.P,A.bn,A.bI,A.bD,A.bM,A.ax,A.b9,A.M,A.aN,A.bH,A.bE,A.be])
q(A.b,[A.c,A.a2])
q(A.c,[A.H,A.a0,A.ay])
r(A.ap,A.a2)
q(A.H,[A.aC,A.bQ])
r(A.a5,A.W)
q(A.a5,[A.aV,A.X])
r(A.aH,A.P)
q(A.S,[A.bb,A.bc,A.bG,A.cL,A.cN,A.ce,A.cd,A.cs,A.c8,A.cA,A.c4,A.ci,A.cS,A.cT,A.cP,A.cQ])
q(A.bG,[A.bF,A.ad])
q(A.o,[A.aw,A.bP])
q(A.bc,[A.cM,A.ct,A.c5,A.cx])
q(A.aF,[A.bq,A.ag])
q(A.ag,[A.aR,A.aT])
r(A.aS,A.aR)
r(A.aD,A.aS)
r(A.aU,A.aT)
r(A.aE,A.aU)
q(A.aD,[A.br,A.bs])
q(A.aE,[A.bt,A.bu,A.bv,A.bw,A.bx,A.aG,A.by])
r(A.aX,A.bM)
q(A.bb,[A.cf,A.cg,A.cC,A.ck,A.co,A.cn,A.cm,A.cl,A.cr,A.cq,A.cp,A.c9,A.cI,A.cz])
r(A.aO,A.bK)
r(A.bR,A.b1)
r(A.bo,A.ax)
r(A.c_,A.bd)
q(A.bf,[A.c1,A.c0])
r(A.cv,A.cw)
q(A.M,[A.aI,A.bi])
r(A.aP,A.aL)
r(A.bL,A.aP)
s(A.aR,A.m)
s(A.aS,A.x)
s(A.aT,A.m)
s(A.aU,A.x)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",aa:"num",t:"String",bU:"bool",y:"Null",i:"List",j:"Object",c3:"Map",l:"JSObject"},mangledNames:{},types:["~()","~(l)","~(~())","@(@)","y(@)","y()","~(j?,j?)","@(@,t)","@(t)","y(~())","y(j,ah)","y(l)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"5;freq,iout,res1,vin,vout":a=>b=>b instanceof A.aV&&A.eb(a,b.a),"8;cout,ct,lmin,name,r2,rb,rsc,schematic":a=>b=>b instanceof A.X&&A.eb(a,b.a)}}
A.fp(v.typeUniverse,JSON.parse('{"bz":"V","aM":"V","U":"V","hy":"af","bl":{"bU":[],"h":[]},"ar":{"h":[]},"au":{"l":[]},"V":{"l":[]},"w":{"i":["1"],"c":["1"],"l":[],"b":["1"]},"bk":{"aJ":[]},"bZ":{"w":["1"],"i":["1"],"c":["1"],"l":[],"b":["1"]},"Z":{"T":["1"]},"as":{"f":[],"aa":[]},"aq":{"f":[],"a":[],"aa":[],"h":[]},"bm":{"f":[],"aa":[],"h":[]},"ae":{"t":[],"h":[]},"bp":{"k":[]},"c":{"b":["1"]},"H":{"c":["1"],"b":["1"]},"a1":{"T":["1"]},"a2":{"b":["2"],"b.E":"2"},"ap":{"a2":["1","2"],"c":["2"],"b":["2"],"b.E":"2"},"aB":{"T":["2"]},"aC":{"H":["2"],"c":["2"],"b":["2"],"b.E":"2","H.E":"2"},"aV":{"a5":[],"W":[]},"X":{"a5":[],"W":[]},"aH":{"P":[],"k":[]},"bn":{"k":[]},"bI":{"k":[]},"aW":{"ah":[]},"S":{"a_":[]},"bb":{"a_":[]},"bc":{"a_":[]},"bG":{"a_":[]},"bF":{"a_":[]},"ad":{"a_":[]},"bD":{"k":[]},"aw":{"o":["1","2"],"dv":["1","2"],"c3":["1","2"],"o.K":"1","o.V":"2"},"a0":{"c":["1"],"b":["1"],"b.E":"1"},"aA":{"T":["1"]},"ay":{"c":["F<1,2>"],"b":["F<1,2>"],"b.E":"F<1,2>"},"az":{"T":["F<1,2>"]},"a5":{"W":[]},"af":{"l":[],"h":[]},"aF":{"l":[]},"bq":{"l":[],"h":[]},"ag":{"B":["1"],"l":[]},"aD":{"m":["f"],"i":["f"],"B":["f"],"c":["f"],"l":[],"b":["f"],"x":["f"]},"aE":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"]},"br":{"m":["f"],"i":["f"],"B":["f"],"c":["f"],"l":[],"b":["f"],"x":["f"],"h":[],"m.E":"f"},"bs":{"m":["f"],"i":["f"],"B":["f"],"c":["f"],"l":[],"b":["f"],"x":["f"],"h":[],"m.E":"f"},"bt":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"bu":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"bv":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"bw":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"bx":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"aG":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"by":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"x":["a"],"h":[],"m.E":"a"},"bM":{"k":[]},"aX":{"P":[],"k":[]},"N":{"k":[]},"aO":{"bK":["1"]},"z":{"bh":["1"]},"b1":{"dD":[]},"bR":{"b1":[],"dD":[]},"o":{"c3":["1","2"]},"bP":{"o":["t","@"],"c3":["t","@"],"o.K":"t","o.V":"@"},"bQ":{"H":["t"],"c":["t"],"b":["t"],"b.E":"t","H.E":"t"},"ax":{"k":[]},"bo":{"k":[]},"f":{"aa":[]},"a":{"aa":[]},"i":{"c":["1"],"b":["1"]},"b9":{"k":[]},"P":{"k":[]},"M":{"k":[]},"aI":{"k":[]},"bi":{"k":[]},"aN":{"k":[]},"bH":{"k":[]},"bE":{"k":[]},"be":{"k":[]},"aK":{"k":[]},"bS":{"ah":[]},"ai":{"f_":[]},"aP":{"aL":["1"]},"bL":{"aP":["1"],"aL":["1"]},"eK":{"i":["a"],"c":["a"],"b":["a"]},"f3":{"i":["a"],"c":["a"],"b":["a"]},"f2":{"i":["a"],"c":["a"],"b":["a"]},"eI":{"i":["a"],"c":["a"],"b":["a"]},"f0":{"i":["a"],"c":["a"],"b":["a"]},"eJ":{"i":["a"],"c":["a"],"b":["a"]},"f1":{"i":["a"],"c":["a"],"b":["a"]},"eG":{"i":["f"],"c":["f"],"b":["f"]},"eH":{"i":["f"],"c":["f"],"b":["f"]}}'))
A.fo(v.typeUniverse,JSON.parse('{"c":1,"ag":1,"bd":2,"bf":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.d8
return{n:s("N"),U:s("c<@>"),Q:s("k"),Z:s("a_"),V:s("b<@>"),f:s("w<j>"),s:s("w<t>"),b:s("w<@>"),T:s("ar"),m:s("l"),g:s("U"),p:s("B<@>"),j:s("i<@>"),P:s("y"),K:s("j"),L:s("hz"),d:s("+()"),l:s("ah"),N:s("t"),R:s("h"),c:s("P"),A:s("aM"),O:s("aO<t>"),a:s("bL<l>"),I:s("z<t>"),_:s("z<@>"),h:s("z<a>"),y:s("bU"),q:s("bU(j)"),i:s("f"),z:s("@"),W:s("@()"),v:s("@(j)"),C:s("@(j,ah)"),S:s("a"),Y:s("bh<y>?"),B:s("l?"),e:s("i<@>?"),X:s("j?"),w:s("t?"),F:s("aQ<@,@>?"),u:s("bU?"),t:s("f?"),x:s("a?"),D:s("aa?"),k:s("~()?"),H:s("aa"),o:s("~"),M:s("~()"),E:s("~(t,@)")}})();(function constants(){B.u=J.bj.prototype
B.a=J.w.prototype
B.e=J.aq.prototype
B.c=J.as.prototype
B.d=J.ae.prototype
B.v=J.U.prototype
B.w=J.au.prototype
B.l=J.bz.prototype
B.h=J.aM.prototype
B.i=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.q=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.p=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.j=function(hooks) { return hooks; }

B.k=new A.c_()
B.f=new A.c7()
B.b=new A.bR()
B.t=new A.bS()
B.x=new A.c0(null)
B.y=new A.c1(null)
B.z=A.J("hv")
B.A=A.J("hw")
B.B=A.J("eG")
B.C=A.J("eH")
B.D=A.J("eI")
B.E=A.J("eJ")
B.F=A.J("eK")
B.G=A.J("j")
B.H=A.J("f0")
B.I=A.J("f1")
B.J=A.J("f2")
B.K=A.J("f3")})();(function staticFields(){$.cu=null
$.E=A.L([],t.f)
$.dx=null
$.dm=null
$.dl=null
$.e9=null
$.e3=null
$.ed=null
$.cK=null
$.cO=null
$.db=null
$.cy=A.L([],A.d8("w<i<j>?>"))
$.aj=null
$.b5=null
$.b6=null
$.d5=!1
$.q=B.b})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hx","dg",()=>A.hg("_$dart_dartClosure"))
s($,"hM","es",()=>A.L([new J.bk()],A.d8("w<aJ>")))
s($,"hA","ei",()=>A.Q(A.cc({
toString:function(){return"$receiver$"}})))
s($,"hB","ej",()=>A.Q(A.cc({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hC","ek",()=>A.Q(A.cc(null)))
s($,"hD","el",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hG","eo",()=>A.Q(A.cc(void 0)))
s($,"hH","ep",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hF","en",()=>A.Q(A.dB(null)))
s($,"hE","em",()=>A.Q(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hJ","er",()=>A.Q(A.dB(void 0)))
s($,"hI","eq",()=>A.Q(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"hK","dh",()=>A.f5())
s($,"hL","bW",()=>A.ea(B.G))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.af,SharedArrayBuffer:A.af,ArrayBufferView:A.aF,DataView:A.bq,Float32Array:A.br,Float64Array:A.bs,Int16Array:A.bt,Int32Array:A.bu,Int8Array:A.bv,Uint16Array:A.bw,Uint32Array:A.bx,Uint8ClampedArray:A.aG,CanvasPixelArray:A.aG,Uint8Array:A.by})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ag.$nativeSuperclassTag="ArrayBufferView"
A.aR.$nativeSuperclassTag="ArrayBufferView"
A.aS.$nativeSuperclassTag="ArrayBufferView"
A.aD.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"
A.aE.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.hp
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=mc34063.js.map
