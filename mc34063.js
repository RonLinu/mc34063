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
if(a[b]!==s){A.hg(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a0(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.d_(b)
return new s(c,this)}:function(){if(s===null)s=A.d_(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.d_(a).prototype
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
d5(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d2(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.d3==null){A.h5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.dr("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.cn
if(o==null)o=$.cn=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.h9(a)
if(p!=null)return p
if(typeof a=="function")return B.u
s=Object.getPrototypeOf(a)
if(s==null)return B.k
if(s===Object.prototype)return B.k
if(typeof q=="function"){o=$.cn
if(o==null)o=$.cn=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.e,enumerable:false,writable:true,configurable:true})
return B.e}return B.e},
di(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ez(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.di(r))break;++b}return b},
eA(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.r(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.di(q))break}return b},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.am.prototype
return J.bg.prototype}if(typeof a=="string")return J.a9.prototype
if(a==null)return J.an.prototype
if(typeof a=="boolean")return J.bf.prototype
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
if(typeof a=="symbol")return J.ar.prototype
if(typeof a=="bigint")return J.ap.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
d1(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
if(typeof a=="symbol")return J.ar.prototype
if(typeof a=="bigint")return J.ap.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
dX(a){if(a==null)return a
if(Array.isArray(a))return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.R.prototype
if(typeof a=="symbol")return J.ar.prototype
if(typeof a=="bigint")return J.ap.prototype
return a}if(a instanceof A.j)return a
return J.d2(a)},
ef(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).G(a,b)},
eg(a,b){return J.dX(a).v(a,b)},
bQ(a){return J.a3(a).gq(a)},
eh(a){return J.d1(a).ga3(a)},
ei(a){return J.dX(a).gn(a)},
cO(a){return J.d1(a).gj(a)},
ej(a){return J.a3(a).gk(a)},
b2(a){return J.a3(a).i(a)},
bd:function bd(){},
bf:function bf(){},
an:function an(){},
aq:function aq(){},
S:function S(){},
bt:function bt(){},
aI:function aI(){},
R:function R(){},
ap:function ap(){},
ar:function ar(){},
y:function y(a){this.$ti=a},
be:function be(){},
bU:function bU(a){this.$ti=a},
U:function U(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(){},
am:function am(){},
bg:function bg(){},
a9:function a9(){}},A={cR:function cR(){},
dU(a,b,c){return a},
d4(a){var s,r
for(s=$.E.length,r=0;r<s;++r)if(a===$.E[r])return!0
return!1},
eD(a,b,c,d){if(t.U.b(a))return new A.al(a,b,c.h("@<0>").p(d).h("al<1,2>"))
return new A.Y(a,b,c.h("@<0>").p(d).h("Y<1,2>"))},
bj:function bj(a){this.a=a},
c:function c(){},
H:function H(){},
X:function X(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Y:function Y(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(a,b,c){this.a=a
this.b=b
this.$ti=c},
ax:function ax(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ay:function ay(a,b,c){this.a=a
this.b=b
this.$ti=c},
w:function w(){},
e2(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
hz(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.b2(a)
return s},
bu(a){var s,r=$.dm
if(r==null)r=$.dm=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eF(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.d.aA(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
bv(a){var s,r,q,p
if(a instanceof A.j)return A.D(A.b1(a),null)
s=J.a3(a)
if(s===B.t||s===B.v||t.A.b(a)){r=B.f(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.D(A.b1(a),null)},
eG(a){var s,r,q
if(typeof a=="number"||A.cY(a))return J.b2(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.P)return a.i(0)
s=$.ee()
for(r=0;r<1;++r){q=s[r].aB(a)
if(q!=null)return q}return"Instance of '"+A.bv(a)+"'"},
v(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.j.a0(s,10)|55296)>>>0,s&1023|56320)}throw A.e(A.bw(a,0,1114111,null,null))},
eE(a){var s=a.$thrownJsError
if(s==null)return null
return A.ai(s)},
r(a,b){if(a==null)J.cO(a)
throw A.e(A.dW(a,b))},
dW(a,b){var s,r="index"
if(!A.dL(b))return new A.K(!0,b,r,null)
s=A.aY(J.cO(a))
if(b<0||b>=s)return A.dg(b,s,a,r)
return new A.aE(null,null,!0,b,r,"Value not in range")},
e(a){return A.u(a,new Error())},
u(a,b){var s
if(a==null)a=new A.M()
b.dartException=a
s=A.hh
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
hh(){return J.b2(this.dartException)},
cN(a,b){throw A.u(a,b==null?new Error():b)},
e1(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.cN(A.fm(a,b,c),s)},
fm(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.aJ("'"+s+"': Cannot "+o+" "+l+k+n)},
hf(a){throw A.e(A.ak(a))},
N(a){var s,r,q,p,o,n
a=A.hd(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a0([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.c4(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
c5(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
dq(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
cS(a,b){var s=b==null,r=s?null:b.method
return new A.bh(a,r,s?null:b.receiver)},
a7(a){if(a==null)return new A.c1(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a6(a,a.dartException)
return A.fT(a)},
a6(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fT(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.j.a0(r,16)&8191)===10)switch(q){case 438:return A.a6(a,A.cS(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.a6(a,new A.aD())}}if(a instanceof TypeError){p=$.e4()
o=$.e5()
n=$.e6()
m=$.e7()
l=$.ea()
k=$.eb()
j=$.e9()
$.e8()
i=$.ed()
h=$.ec()
g=p.u(s)
if(g!=null)return A.a6(a,A.cS(A.A(s),g))
else{g=o.u(s)
if(g!=null){g.method="call"
return A.a6(a,A.cS(A.A(s),g))}else if(n.u(s)!=null||m.u(s)!=null||l.u(s)!=null||k.u(s)!=null||j.u(s)!=null||m.u(s)!=null||i.u(s)!=null||h.u(s)!=null){A.A(s)
return A.a6(a,new A.aD())}}return A.a6(a,new A.bC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.aG()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a6(a,new A.K(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.aG()
return a},
ai(a){var s
if(a==null)return new A.aR(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.aR(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
hc(a){if(a==null)return J.bQ(a)
if(typeof a=="object")return A.bu(a)
return J.bQ(a)},
h0(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.I(0,a[s],a[r])}return b},
fu(a,b,c,d,e,f){t.Z.a(a)
switch(A.aY(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.cc("Unsupported number of arguments for wrapped closure"))},
cC(a,b){var s=a.$identity
if(!!s)return s
s=A.fY(a,b)
a.$identity=s
return s},
fY(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fu)},
eq(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.bz().constructor.prototype):Object.create(new A.a8(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.de(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.em(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.de(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
em(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ek)}throw A.e("Error in functionType of tearoff")},
en(a,b,c,d){var s=A.dd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
de(a,b,c,d){if(c)return A.ep(a,b,d)
return A.en(b.length,d,a,b)},
eo(a,b,c,d){var s=A.dd,r=A.el
switch(b?-1:a){case 0:throw A.e(new A.bx("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
ep(a,b,c){var s,r
if($.db==null)$.db=A.da("interceptor")
if($.dc==null)$.dc=A.da("receiver")
s=b.length
r=A.eo(s,c,a,b)
return r},
d_(a){return A.eq(a)},
ek(a,b){return A.cx(v.typeUniverse,A.b1(a.a),b)},
dd(a){return a.a},
el(a){return a.b},
da(a){var s,r,q,p=new A.a8("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.e(A.bR("Field name "+a+" not found.",null))},
h1(a){return v.getIsolateTag(a)},
h9(a){var s,r,q,p,o,n=A.A($.dY.$1(a)),m=$.cD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cH[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.cW($.dS.$2(a,n))
if(q!=null){m=$.cD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.cH[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.cK(s)
$.cD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.cH[n]=s
return s}if(p==="-"){o=A.cK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.dZ(a,s)
if(p==="*")throw A.e(A.dr(n))
if(v.leafTags[n]===true){o=A.cK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.dZ(a,s)},
dZ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.d5(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
cK(a){return J.d5(a,!1,null,!!a.$iB)},
hb(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.cK(s)
else return J.d5(s,c,null,null)},
h5(){if(!0===$.d3)return
$.d3=!0
A.h6()},
h6(){var s,r,q,p,o,n,m,l
$.cD=Object.create(null)
$.cH=Object.create(null)
A.h4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.e_.$1(o)
if(n!=null){m=A.hb(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
h4(){var s,r,q,p,o,n,m=B.l()
m=A.ah(B.m,A.ah(B.n,A.ah(B.h,A.ah(B.h,A.ah(B.o,A.ah(B.p,A.ah(B.q(B.f),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.dY=new A.cE(p)
$.dS=new A.cF(o)
$.e_=new A.cG(n)},
ah(a,b){return a(b)||b},
h_(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
hd(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
aF:function aF(){},
c4:function c4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aD:function aD(){},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
c1:function c1(a){this.a=a},
aR:function aR(a){this.a=a
this.b=null},
P:function P(){},
b5:function b5(){},
b6:function b6(){},
bA:function bA(){},
bz:function bz(){},
a8:function a8(a,b){this.a=a
this.b=b},
bx:function bx(a){this.a=a},
as:function as(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bY:function bY(a,b){this.a=a
this.b=b
this.c=null},
W:function W(a,b){this.a=a
this.$ti=b},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(a,b){this.a=a
this.$ti=b},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cE:function cE(a){this.a=a},
cF:function cF(a){this.a=a},
cG:function cG(a){this.a=a},
aa:function aa(){},
aB:function aB(){},
bk:function bk(){},
ab:function ab(){},
az:function az(){},
aA:function aA(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
aC:function aC(){},
bs:function bs(){},
aN:function aN(){},
aO:function aO(){},
aP:function aP(){},
aQ:function aQ(){},
cT(a,b){var s=b.c
return s==null?b.c=A.aU(a,"bb",[b.x]):s},
dn(a){var s=a.w
if(s===6||s===7)return A.dn(a.x)
return s===11||s===12},
eI(a){return a.as},
d0(a){return A.cw(v.typeUniverse,a,!1)},
a1(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a1(a1,s,a3,a4)
if(r===s)return a2
return A.dC(a1,r,!0)
case 7:s=a2.x
r=A.a1(a1,s,a3,a4)
if(r===s)return a2
return A.dB(a1,r,!0)
case 8:q=a2.y
p=A.ag(a1,q,a3,a4)
if(p===q)return a2
return A.aU(a1,a2.x,p)
case 9:o=a2.x
n=A.a1(a1,o,a3,a4)
m=a2.y
l=A.ag(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.cU(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ag(a1,j,a3,a4)
if(i===j)return a2
return A.dD(a1,k,i)
case 11:h=a2.x
g=A.a1(a1,h,a3,a4)
f=a2.y
e=A.fQ(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.dA(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ag(a1,d,a3,a4)
o=a2.x
n=A.a1(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.cV(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.e(A.b4("Attempted to substitute unexpected RTI kind "+a0))}},
ag(a,b,c,d){var s,r,q,p,o=b.length,n=A.cy(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a1(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
fR(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.cy(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a1(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
fQ(a,b,c,d){var s,r=b.a,q=A.ag(a,r,c,d),p=b.b,o=A.ag(a,p,c,d),n=b.c,m=A.fR(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.bI()
s.a=q
s.b=o
s.c=m
return s},
a0(a,b){a[v.arrayRti]=b
return a},
dV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.h3(s)
return a.$S()}return null},
h7(a,b){var s
if(A.dn(b))if(a instanceof A.P){s=A.dV(a)
if(s!=null)return s}return A.b1(a)},
b1(a){if(a instanceof A.j)return A.O(a)
if(Array.isArray(a))return A.aX(a)
return A.cX(J.a3(a))},
aX(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
O(a){var s=a.$ti
return s!=null?s:A.cX(a)},
cX(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.ft(a,s)},
ft(a,b){var s=a instanceof A.P?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.fb(v.typeUniverse,s.name)
b.$ccache=r
return r},
h3(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cw(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
h2(a){return A.a2(A.O(a))},
fP(a){var s=a instanceof A.P?A.dV(a):null
if(s!=null)return s
if(t.R.b(a))return J.ej(a).a
if(Array.isArray(a))return A.aX(a)
return A.b1(a)},
a2(a){var s=a.r
return s==null?a.r=new A.cv(a):s},
J(a){return A.a2(A.cw(v.typeUniverse,a,!1))},
fs(a){var s=this
s.b=A.fN(s)
return s.b(a)},
fN(a){var s,r,q,p,o
if(a===t.K)return A.fA
if(A.a4(a))return A.fE
s=a.w
if(s===6)return A.fq
if(s===1)return A.dN
if(s===7)return A.fv
r=A.fM(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.a4)){a.f="$i"+q
if(q==="i")return A.fy
if(a===t.m)return A.fx
return A.fD}}else if(s===10){p=A.h_(a.x,a.y)
o=p==null?A.dN:p
return o==null?A.aZ(o):o}return A.fo},
fM(a){if(a.w===8){if(a===t.S)return A.dL
if(a===t.i||a===t.H)return A.fz
if(a===t.N)return A.fC
if(a===t.y)return A.cY}return null},
fr(a){var s=this,r=A.fn
if(A.a4(s))r=A.fj
else if(s===t.K)r=A.aZ
else if(A.aj(s)){r=A.fp
if(s===t.x)r=A.fh
else if(s===t.w)r=A.cW
else if(s===t.u)r=A.fe
else if(s===t.D)r=A.dG
else if(s===t.t)r=A.fg
else if(s===t.B)r=A.C}else if(s===t.S)r=A.aY
else if(s===t.N)r=A.A
else if(s===t.y)r=A.fd
else if(s===t.H)r=A.fi
else if(s===t.i)r=A.ff
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
fo(a){var s=this
if(a==null)return A.aj(s)
return A.h8(v.typeUniverse,A.h7(a,s),s)},
fq(a){if(a==null)return!0
return this.x.b(a)},
fD(a){var s,r=this
if(a==null)return A.aj(r)
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.a3(a)[s]},
fy(a){var s,r=this
if(a==null)return A.aj(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.j)return!!a[s]
return!!J.a3(a)[s]},
fx(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
dM(a){if(typeof a=="object"){if(a instanceof A.j)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
fn(a){var s=this
if(a==null){if(A.aj(s))return a}else if(s.b(a))return a
throw A.u(A.dH(a,s),new Error())},
fp(a){var s=this
if(a==null||s.b(a))return a
throw A.u(A.dH(a,s),new Error())},
dH(a,b){return new A.aS("TypeError: "+A.dt(a,A.D(b,null)))},
dt(a,b){return A.ba(a)+": type '"+A.D(A.fP(a),null)+"' is not a subtype of type '"+b+"'"},
G(a,b){return new A.aS("TypeError: "+A.dt(a,b))},
fv(a){var s=this
return s.x.b(a)||A.cT(v.typeUniverse,s).b(a)},
fA(a){return a!=null},
aZ(a){if(a!=null)return a
throw A.u(A.G(a,"Object"),new Error())},
fE(a){return!0},
fj(a){return a},
dN(a){return!1},
cY(a){return!0===a||!1===a},
fd(a){if(!0===a)return!0
if(!1===a)return!1
throw A.u(A.G(a,"bool"),new Error())},
fe(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.u(A.G(a,"bool?"),new Error())},
ff(a){if(typeof a=="number")return a
throw A.u(A.G(a,"double"),new Error())},
fg(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.G(a,"double?"),new Error())},
dL(a){return typeof a=="number"&&Math.floor(a)===a},
aY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.u(A.G(a,"int"),new Error())},
fh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.u(A.G(a,"int?"),new Error())},
fz(a){return typeof a=="number"},
fi(a){if(typeof a=="number")return a
throw A.u(A.G(a,"num"),new Error())},
dG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.u(A.G(a,"num?"),new Error())},
fC(a){return typeof a=="string"},
A(a){if(typeof a=="string")return a
throw A.u(A.G(a,"String"),new Error())},
cW(a){if(typeof a=="string")return a
if(a==null)return a
throw A.u(A.G(a,"String?"),new Error())},
d(a){if(A.dM(a))return a
throw A.u(A.G(a,"JSObject"),new Error())},
C(a){if(a==null)return a
if(A.dM(a))return a
throw A.u(A.G(a,"JSObject?"),new Error())},
dQ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.D(a[q],b)
return s},
fI(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.dQ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.D(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
dI(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a0([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.a.t(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.r(a4,l)
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
if(l===8){p=A.fS(a.x)
o=a.y
return o.length>0?p+("<"+A.dQ(o,b)+">"):p}if(l===10)return A.fI(a,b)
if(l===11)return A.dI(a,b,null)
if(l===12)return A.dI(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.r(b,n)
return b[n]}return"?"},
fS(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fc(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
fb(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cw(a,b,!1)
else if(typeof m=="number"){s=m
r=A.aV(a,5,"#")
q=A.cy(s)
for(p=0;p<s;++p)q[p]=r
o=A.aU(a,b,q)
n[b]=o
return o}else return m},
f9(a,b){return A.dE(a.tR,b)},
f8(a,b){return A.dE(a.eT,b)},
cw(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.dy(A.dw(a,null,b,!1))
r.set(b,s)
return s},
cx(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.dy(A.dw(a,b,c,!0))
q.set(c,r)
return r},
fa(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.cU(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
T(a,b){b.a=A.fr
b.b=A.fs
return b},
aV(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.I(null,null)
s.w=b
s.as=c
r=A.T(a,s)
a.eC.set(c,r)
return r},
dC(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.f6(a,b,r,c)
a.eC.set(r,s)
return s},
f6(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.a4(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.aj(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.I(null,null)
q.w=6
q.x=b
q.as=c
return A.T(a,q)},
dB(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.f4(a,b,r,c)
a.eC.set(r,s)
return s},
f4(a,b,c,d){var s,r
if(d){s=b.w
if(A.a4(b)||b===t.K)return b
else if(s===1)return A.aU(a,"bb",[b])
else if(b===t.P||b===t.T)return t.Y}r=new A.I(null,null)
r.w=7
r.x=b
r.as=c
return A.T(a,r)},
f7(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=13
s.x=b
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
aT(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
f3(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
aU(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.aT(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.I(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.T(a,r)
a.eC.set(p,q)
return q},
cU(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.aT(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.I(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.T(a,o)
a.eC.set(q,n)
return n},
dD(a,b,c){var s,r,q="+"+(b+"("+A.aT(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
dA(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.aT(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.aT(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.f3(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.I(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.T(a,p)
a.eC.set(r,o)
return o},
cV(a,b,c,d){var s,r=b.as+("<"+A.aT(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.f5(a,b,c,r,d)
a.eC.set(r,s)
return s},
f5(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.cy(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a1(a,b,r,0)
m=A.ag(a,c,r,0)
return A.cV(a,n,m,c!==m)}}l=new A.I(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.T(a,l)},
dw(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dy(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.eY(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.dx(a,r,l,k,!1)
else if(q===46)r=A.dx(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a_(a.u,a.e,k.pop()))
break
case 94:k.push(A.f7(a.u,k.pop()))
break
case 35:k.push(A.aV(a.u,5,"#"))
break
case 64:k.push(A.aV(a.u,2,"@"))
break
case 126:k.push(A.aV(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.f_(a,k)
break
case 38:A.eZ(a,k)
break
case 63:p=a.u
k.push(A.dC(p,A.a_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.dB(p,A.a_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.eX(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.dz(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.f1(a.u,a.e,o)
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
return A.a_(a.u,a.e,m)},
eY(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
dx(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.fc(s,o.x)[p]
if(n==null)A.cN('No "'+p+'" in "'+A.eI(o)+'"')
d.push(A.cx(s,o,n))}else d.push(p)
return m},
f_(a,b){var s,r=a.u,q=A.dv(a,b),p=b.pop()
if(typeof p=="string")b.push(A.aU(r,p,q))
else{s=A.a_(r,a.e,p)
switch(s.w){case 11:b.push(A.cV(r,s,q,a.n))
break
default:b.push(A.cU(r,s,q))
break}}},
eX(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.dv(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a_(p,a.e,o)
q=new A.bI()
q.a=s
q.b=n
q.c=m
b.push(A.dA(p,r,q))
return
case-4:b.push(A.dD(p,b.pop(),s))
return
default:throw A.e(A.b4("Unexpected state under `()`: "+A.o(o)))}},
eZ(a,b){var s=b.pop()
if(0===s){b.push(A.aV(a.u,1,"0&"))
return}if(1===s){b.push(A.aV(a.u,4,"1&"))
return}throw A.e(A.b4("Unexpected extended operation "+A.o(s)))},
dv(a,b){var s=b.splice(a.p)
A.dz(a.u,a.e,s)
a.p=b.pop()
return s},
a_(a,b,c){if(typeof c=="string")return A.aU(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.f0(a,b,c)}else return c},
dz(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a_(a,b,c[s])},
f1(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a_(a,b,c[s])},
f0(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.e(A.b4("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.e(A.b4("Bad index "+c+" for "+b.i(0)))},
h8(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.q(a,b,null,c,null)
r.set(c,s)}return s},
q(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.a4(d))return!0
s=b.w
if(s===4)return!0
if(A.a4(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.q(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.q(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.q(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.q(a,b.x,c,d,e))return!1
return A.q(a,A.cT(a,b),c,d,e)}if(s===6)return A.q(a,p,c,d,e)&&A.q(a,b.x,c,d,e)
if(q===7){if(A.q(a,b,c,d.x,e))return!0
return A.q(a,b,c,A.cT(a,d),e)}if(q===6)return A.q(a,b,c,p,e)||A.q(a,b,c,d.x,e)
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
if(!A.q(a,j,c,i,e)||!A.q(a,i,e,j,c))return!1}return A.dK(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.dK(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.fw(a,b,c,d,e)}if(o&&q===10)return A.fB(a,b,c,d,e)
return!1},
dK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.q(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.q(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
fw(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.cx(a,b,r[o])
return A.dF(a,p,null,c,d.y,e)}return A.dF(a,b.y,null,c,d.y,e)},
dF(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.q(a,b[s],d,e[s],f))return!1
return!0},
fB(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.q(a,r[s],c,q[s],e))return!1
return!0},
aj(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.a4(a))if(s!==6)r=s===7&&A.aj(a.x)
return r},
a4(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
dE(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
cy(a){return a>0?new Array(a):v.typeUniverse.sEA},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
bI:function bI(){this.c=this.b=this.a=null},
cv:function cv(a){this.a=a},
bG:function bG(){},
aS:function aS(a){this.a=a},
eR(){var s,r,q
if(self.scheduleImmediate!=null)return A.fV()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cC(new A.c7(s),1)).observe(r,{childList:true})
return new A.c6(s,r,q)}else if(self.setImmediate!=null)return A.fW()
return A.fX()},
eS(a){self.scheduleImmediate(A.cC(new A.c8(t.M.a(a)),0))},
eT(a){self.setImmediate(A.cC(new A.c9(t.M.a(a)),0))},
eU(a){t.M.a(a)
A.f2(0,a)},
f2(a,b){var s=new A.ct()
s.a8(a,b)
return s},
cP(a){var s
if(t.Q.b(a)){s=a.gN()
if(s!=null)return s}return B.r},
du(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.eJ()
b.aa(new A.L(new A.K(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.a_(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.E()
b.J(o.a)
A.Z(b,p)
return}b.a^=2
A.bN(null,null,b.b,t.M.a(new A.cg(o,b)))},
Z(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.cA(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.Z(d.a,c)
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
A.cA(j.a,j.b)
return}g=$.p
if(g!==h)$.p=h
else g=null
c=c.c
if((c&15)===8)new A.ck(q,d,n).$0()
else if(o){if((c&1)!==0)new A.cj(q,j).$0()}else if((c&2)!==0)new A.ci(d,q).$0()
if(g!=null)$.p=g
c=q.c
if(c instanceof A.z){p=q.a.$ti
p=p.h("bb<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.L(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.du(c,f,!0)
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
fJ(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.e(A.d9(a,"onError",u.c))},
fG(){var s,r
for(s=$.af;s!=null;s=$.af){$.b0=null
r=s.b
$.af=r
if(r==null)$.b_=null
s.a.$0()}},
fO(){$.cZ=!0
try{A.fG()}finally{$.b0=null
$.cZ=!1
if($.af!=null)$.d8().$1(A.dT())}},
dR(a){var s=new A.bD(a),r=$.b_
if(r==null){$.af=$.b_=s
if(!$.cZ)$.d8().$1(A.dT())}else $.b_=r.b=s},
fL(a){var s,r,q,p=$.af
if(p==null){A.dR(a)
$.b0=$.b_
return}s=new A.bD(a)
r=$.b0
if(r==null){s.b=p
$.af=$.b0=s}else{q=r.b
s.b=q
$.b0=r.b=s
if(q==null)$.b_=s}},
cA(a,b){A.fL(new A.cB(a,b))},
dO(a,b,c,d,e){var s,r=$.p
if(r===c)return d.$0()
$.p=c
s=r
try{r=d.$0()
return r}finally{$.p=s}},
dP(a,b,c,d,e,f,g){var s,r=$.p
if(r===c)return d.$1(e)
$.p=c
s=r
try{r=d.$1(e)
return r}finally{$.p=s}},
fK(a,b,c,d,e,f,g,h,i){var s,r=$.p
if(r===c)return d.$2(e,f)
$.p=c
s=r
try{r=d.$2(e,f)
return r}finally{$.p=s}},
bN(a,b,c,d){t.M.a(d)
if(B.c!==c){d=c.ah(d)
d=d}A.dR(d)},
c7:function c7(a){this.a=a},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(a){this.a=a},
c9:function c9(a){this.a=a},
ct:function ct(){},
cu:function cu(a,b){this.a=a
this.b=b},
L:function L(a,b){this.a=a
this.b=b},
bE:function bE(){},
aK:function aK(a,b){this.a=a
this.$ti=b},
aM:function aM(a,b,c,d,e){var _=this
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
cd:function cd(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a,b){this.a=a
this.b=b},
cm:function cm(a){this.a=a},
cj:function cj(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
bD:function bD(a){this.a=a
this.b=null},
aH:function aH(){},
c2:function c2(a,b){this.a=a
this.b=b},
c3:function c3(a,b){this.a=a
this.b=b},
aW:function aW(){},
cB:function cB(a,b){this.a=a
this.b=b},
bL:function bL(){},
cr:function cr(a,b){this.a=a
this.b=b},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
eB(a,b,c){return b.h("@<0>").p(c).h("dk<1,2>").a(A.h0(a,new A.as(b.h("@<0>").p(c).h("as<1,2>"))))},
dl(a){var s,r
if(A.d4(a))return"{...}"
s=new A.ae("")
try{r={}
B.a.t($.E,a)
s.a+="{"
r.a=!0
a.F(0,new A.c0(r,s))
s.a+="}"}finally{if(0>=$.E.length)return A.r($.E,-1)
$.E.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
m:function m(){},
n:function n(){},
c_:function c_(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
fH(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a7(r)
q=A.df(String(s),null)
throw A.e(q)}q=A.cz(p)
return q},
cz(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.bJ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.cz(a[s])
return a},
dj(a,b,c){return new A.at(a,b)},
fl(a){return a.aG()},
eV(a,b){return new A.co(a,[],A.fZ())},
eW(a,b,c){var s,r=new A.ae(""),q=A.eV(r,b)
q.M(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
bJ:function bJ(a,b){this.a=a
this.b=b
this.c=null},
bK:function bK(a){this.a=a},
b7:function b7(){},
b9:function b9(){},
at:function at(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
bV:function bV(){},
bX:function bX(a){this.b=a},
bW:function bW(a){this.a=a},
cp:function cp(){},
cq:function cq(a,b){this.a=a
this.b=b},
co:function co(a,b,c){this.c=a
this.a=b
this.b=c},
bP(a){var s=A.eF(a)
if(s!=null)return s
throw A.e(A.df("Invalid double",a))},
er(a,b){a=A.u(a,new Error())
if(a==null)a=A.aZ(a)
a.stack=b.i(0)
throw a},
eC(a,b,c){var s,r
if(a>4294967295)A.cN(A.bw(a,0,4294967295,"length",null))
s=A.a0(new Array(a),c.h("y<0>"))
s.$flags=1
r=s
return r},
dp(a,b,c){var s=J.ei(b)
if(!s.l())return a
if(c.length===0){do a+=A.o(s.gm())
while(s.l())}else{a+=A.o(s.gm())
while(s.l())a=a+c+A.o(s.gm())}return a},
eJ(){return A.ai(new Error())},
ba(a){if(typeof a=="number"||A.cY(a)||a==null)return J.b2(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eG(a)},
es(a,b){A.dU(a,"error",t.K)
A.dU(b,"stackTrace",t.l)
A.er(a,b)},
b4(a){return new A.b3(a)},
bR(a,b){return new A.K(!1,null,b,a)},
d9(a,b,c){return new A.K(!0,a,b,c)},
bw(a,b,c,d,e){return new A.aE(b,c,!0,a,d,"Invalid value")},
eH(a,b,c){if(0>a||a>c)throw A.e(A.bw(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.bw(b,a,c,"end",null))
return b}return c},
dg(a,b,c,d){return new A.bc(b,!0,a,d,"Index out of range")},
eQ(a){return new A.aJ(a)},
dr(a){return new A.bB(a)},
eK(a){return new A.by(a)},
ak(a){return new A.b8(a)},
df(a,b){return new A.bT(a,b)},
ey(a,b,c){var s,r
if(A.d4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a0([],t.s)
B.a.t($.E,a)
try{A.fF(a,s)}finally{if(0>=$.E.length)return A.r($.E,-1)
$.E.pop()}r=A.dp(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
dh(a,b,c){var s,r
if(A.d4(a))return b+"..."+c
s=new A.ae(b)
B.a.t($.E,a)
try{r=s
r.a=A.dp(r.a,a,", ")}finally{if(0>=$.E.length)return A.r($.E,-1)
$.E.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fF(a,b){var s,r,q,p,o,n,m,l=a.gn(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.o(l.gm())
B.a.t(b,s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
if(0>=b.length)return A.r(b,-1)
r=b.pop()
if(0>=b.length)return A.r(b,-1)
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){B.a.t(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.r(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.r(b,-1)
k-=b.pop().length+2;--j}B.a.t(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.r(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.t(b,m)
B.a.t(b,q)
B.a.t(b,r)},
k:function k(){},
b3:function b3(a){this.a=a},
M:function M(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aE:function aE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bc:function bc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aJ:function aJ(a){this.a=a},
bB:function bB(a){this.a=a},
by:function by(a){this.a=a},
b8:function b8(a){this.a=a},
aG:function aG(){},
cc:function cc(a){this.a=a},
bT:function bT(a,b){this.a=a
this.b=b},
b:function b(){},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
j:function j(){},
bM:function bM(){},
ae:function ae(a){this.a=a},
ca(a,b,c,d,e){var s=A.fU(new A.cb(c),t.m)
s=s==null?null:A.dJ(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.bH(a,b,s,!1,e.h("bH<0>"))},
fU(a,b){var s=$.p
if(s===B.c)return a
return s.ai(a,b)},
cQ:function cQ(a){this.$ti=a},
aL:function aL(){},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bH:function bH(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cb:function cb(a){this.a=a},
d6(a){var s,r,q=v.G,p=A.d(A.d(A.d(q.window).document).createElement("dialog"))
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
A.ca(s,"click",r.h("~(1)?").a(new A.cL(p)),!1,r.c)
r=new A.z($.p,t.I)
p.addEventListener("close",A.dJ(new A.cM(new A.aK(r,t.O),p)))
A.C(A.d(A.d(q.window).document).body).append(p)
p.showModal()
return r},
cL:function cL(a){this.a=a},
cM:function cM(a,b){this.a=a
this.b=b},
ha(){var s,r=v.G,q=A.C(A.d(r.document).getElementById("save")),p=A.C(A.d(r.document).getElementById("calculate"))
A.he()
A.d6("<center><b>MC34063 calculator \xa9 2025 - RonLinu</b></center><br>\n        This application calculates the value of all parts required\n        to build a switching regulator based on the MC34063.\n        <br><br>\n        The following configurations are supported:<br>\n        - Step Down (buck)<br>\n        - Step Up (boost)<br>\n        - Inverter\n    ")
q.toString
r=t.a
s=r.h("~(1)?")
r=r.c
A.ca(q,"click",s.a(new A.cI()),!1,r)
p.toString
A.ca(p,"click",s.a(new A.cJ()),!1,r)},
he(){var s,r,q,p=v.G,o=A.cW(A.d(A.d(p.window).localStorage).getItem("mc34063"))
if(o==null)return
for(s=B.i.aj(o,null).ga1(),s=s.gn(s);s.l();){r=s.gm()
q=A.C(A.d(p.document).getElementById(A.A(r.gap())))
if(q==null)q=A.d(q)
q.value=A.A(r.gaC())}},
e0(){var s,r,q,p,o,n=v.G,m=A.C(A.d(n.document).getElementById("vin"))
if(m==null)m=A.d(m)
s=A.A(m.value)
m=A.C(A.d(n.document).getElementById("vout"))
if(m==null)m=A.d(m)
r=A.A(m.value)
m=A.C(A.d(n.document).getElementById("iout"))
if(m==null)m=A.d(m)
q=A.A(m.value)
m=A.C(A.d(n.document).getElementById("freq"))
if(m==null)m=A.d(m)
p=A.A(m.value)
n=A.C(A.d(n.document).getElementById("res1"))
if(n==null)n=A.d(n)
o=A.A(n.value)
n=new A.bS()
n.a=A.bP(s)
n.b=A.bP(r)
n.c=A.bP(q)
n.d=A.bP(p)
n.e=A.bP(o)
return n},
e3(a){var s,r,q,p,o=a.a
if(o!==0){s="<pre><b>"+("L   = "+B.b.C(o*1e6,0)+" uH (min)<br>")+("Ct  = "+B.b.C(a.b*1e12,0)+" pF <br>")+("Co  = "+B.b.C(a.c*1e6,0)+" uF (min)<br>")+("Rsc = "+B.b.C(a.d,1)+" \u03a9<br>")+("R2  = "+B.b.C(a.e,1)+" K\u03a9<br>")
o=a.f
s=(o!==0?s+("Rb  = "+B.b.C(o,1)+" ohms<br>"):s)+"</b></pre>"
r=s}else r=""
o=v.G
q=A.C(A.d(o.document).getElementById("results"))
q.toString
q.innerHTML=r
q=A.C(A.d(o.document).getElementById("regulator-name"))
q.toString
q.innerHTML="<b>"+a.r+"</b>"
p=A.C(A.d(o.document).getElementById("schematic"))
if(p==null)p=A.d(p)
p.src="resources/"+a.w},
bS:function bS(){var _=this
_.e=_.d=_.c=_.b=_.a=0},
ac:function ac(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r="Regulator name"
_.w="splash.png"},
cI:function cI(){},
cJ:function cJ(){},
hg(a){throw A.u(new A.bj("Field '"+a+"' has been assigned during initialization."),new Error())},
dJ(a){var s
if(typeof a=="function")throw A.e(A.bR("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.fk,a)
s[$.d7()]=a
return s},
fk(a,b,c){t.Z.a(a)
if(A.aY(c)>=1)return a.$1(b)
return a.$0()}},B={}
var w=[A,J,B]
var $={}
A.cR.prototype={}
J.bd.prototype={
G(a,b){return a===b},
gq(a){return A.bu(a)},
i(a){return"Instance of '"+A.bv(a)+"'"},
gk(a){return A.a2(A.cX(this))}}
J.bf.prototype={
i(a){return String(a)},
gq(a){return a?519018:218159},
gk(a){return A.a2(t.y)},
$ih:1,
$ibO:1}
J.an.prototype={
G(a,b){return null==b},
i(a){return"null"},
gq(a){return 0},
$ih:1}
J.aq.prototype={$il:1}
J.S.prototype={
gq(a){return 0},
i(a){return String(a)}}
J.bt.prototype={}
J.aI.prototype={}
J.R.prototype={
i(a){var s=a[$.d7()]
if(s==null)return this.a7(a)
return"JavaScript function for "+J.b2(s)},
$iV:1}
J.ap.prototype={
gq(a){return 0},
i(a){return String(a)}}
J.ar.prototype={
gq(a){return 0},
i(a){return String(a)}}
J.y.prototype={
t(a,b){A.aX(a).c.a(b)
a.$flags&1&&A.e1(a,29)
a.push(b)},
v(a,b){if(!(b<a.length))return A.r(a,b)
return a[b]},
ga3(a){return a.length!==0},
i(a){return A.dh(a,"[","]")},
gn(a){return new J.U(a,a.length,A.aX(a).h("U<1>"))},
gq(a){return A.bu(a)},
gj(a){return a.length},
I(a,b,c){var s
A.aX(a).c.a(c)
a.$flags&2&&A.e1(a)
s=a.length
if(b>=s)throw A.e(A.dW(a,b))
a[b]=c},
$ic:1,
$ib:1,
$ii:1}
J.be.prototype={
aB(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bv(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.bU.prototype={}
J.U.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.hf(q)
throw A.e(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iQ:1}
J.ao.prototype={
C(a,b){var s,r
if(b>20)throw A.e(A.bw(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0)r=1/a<0
else r=!1
if(r)return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a0(a,b){var s
if(a>0)s=this.ag(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ag(a,b){return b>31?0:a>>>b},
gk(a){return A.a2(t.H)},
$if:1,
$ia5:1}
J.am.prototype={
gk(a){return A.a2(t.S)},
$ih:1,
$ia:1}
J.bg.prototype={
gk(a){return A.a2(t.i)},
$ih:1}
J.a9.prototype={
D(a,b,c){return a.substring(b,A.eH(b,c,a.length))},
aA(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.r(p,0)
if(p.charCodeAt(0)===133){s=J.ez(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.r(p,r)
q=p.charCodeAt(r)===133?J.eA(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
i(a){return a},
gq(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk(a){return A.a2(t.N)},
gj(a){return a.length},
$ih:1,
$it:1}
A.bj.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.c.prototype={}
A.H.prototype={
gn(a){var s=this
return new A.X(s,s.gj(s),A.O(s).h("X<H.E>"))},
gB(a){return this.gj(this)===0},
a4(a,b,c){var s=A.O(this)
return new A.ay(this,s.p(c).h("1(H.E)").a(b),s.h("@<H.E>").p(c).h("ay<1,2>"))}}
A.X.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.d1(q),o=p.gj(q)
if(r.b!==o)throw A.e(A.ak(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.v(q,s);++r.c
return!0},
$iQ:1}
A.Y.prototype={
gn(a){var s=this.a
return new A.ax(s.gn(s),this.b,A.O(this).h("ax<1,2>"))},
gj(a){var s=this.a
return s.gj(s)}}
A.al.prototype={$ic:1}
A.ax.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iQ:1}
A.ay.prototype={
gj(a){return J.cO(this.a)},
v(a,b){return this.b.$1(J.eg(this.a,b))}}
A.w.prototype={}
A.aF.prototype={}
A.c4.prototype={
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
A.aD.prototype={
i(a){return"Null check operator used on a null value"}}
A.bh.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bC.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.c1.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aR.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iad:1}
A.P.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.e2(r==null?"unknown":r)+"'"},
$iV:1,
gaF(){return this},
$C:"$1",
$R:1,
$D:null}
A.b5.prototype={$C:"$0",$R:0}
A.b6.prototype={$C:"$2",$R:2}
A.bA.prototype={}
A.bz.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.e2(s)+"'"}}
A.a8.prototype={
G(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a8))return!1
return this.$_target===b.$_target&&this.a===b.a},
gq(a){return(A.hc(this.a)^A.bu(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bv(this.a)+"'")}}
A.bx.prototype={
i(a){return"RuntimeError: "+this.a}}
A.as.prototype={
gj(a){return this.a},
gB(a){return this.a===0},
gA(){return new A.W(this,this.$ti.h("W<1>"))},
ga1(){return new A.au(this,this.$ti.h("au<1,2>"))},
H(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ao(b)},
ao(a){var s,r,q=this.d
if(q==null)return null
s=q[J.bQ(a)&1073741823]
r=this.a2(s,a)
if(r<0)return null
return s[r].b},
I(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"){s=m.b
m.W(s==null?m.b=m.S():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.W(r==null?m.c=m.S():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.S()
p=J.bQ(b)&1073741823
o=q[p]
if(o==null)q[p]=[m.T(b,c)]
else{n=m.a2(o,b)
if(n>=0)o[n].b=c
else o.push(m.T(b,c))}}},
F(a,b){var s,r,q=this
q.$ti.h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.ak(q))
s=s.c}},
W(a,b,c){var s,r=this.$ti
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.T(b,c)
else s.b=c},
T(a,b){var s=this,r=s.$ti,q=new A.bY(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
a2(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ef(a[r].a,b))return r
return-1},
i(a){return A.dl(this)},
S(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$idk:1}
A.bY.prototype={}
A.W.prototype={
gj(a){return this.a.a},
gB(a){return this.a.a===0},
gn(a){var s=this.a
return new A.aw(s,s.r,s.e,this.$ti.h("aw<1>"))}}
A.aw.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.ak(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iQ:1}
A.au.prototype={
gj(a){return this.a.a},
gn(a){var s=this.a
return new A.av(s,s.r,s.e,this.$ti.h("av<1,2>"))}}
A.av.prototype={
gm(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.ak(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.F(s.a,s.b,r.$ti.h("F<1,2>"))
r.c=s.c
return!0}},
$iQ:1}
A.cE.prototype={
$1(a){return this.a(a)},
$S:3}
A.cF.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cG.prototype={
$1(a){return this.a(A.A(a))},
$S:8}
A.aa.prototype={
gk(a){return B.y},
$ih:1}
A.aB.prototype={}
A.bk.prototype={
gk(a){return B.z},
$ih:1}
A.ab.prototype={
gj(a){return a.length},
$iB:1}
A.az.prototype={$ic:1,$ib:1,$ii:1}
A.aA.prototype={$ic:1,$ib:1,$ii:1}
A.bl.prototype={
gk(a){return B.A},
$ih:1}
A.bm.prototype={
gk(a){return B.B},
$ih:1}
A.bn.prototype={
gk(a){return B.C},
$ih:1}
A.bo.prototype={
gk(a){return B.D},
$ih:1}
A.bp.prototype={
gk(a){return B.E},
$ih:1}
A.bq.prototype={
gk(a){return B.F},
$ih:1}
A.br.prototype={
gk(a){return B.G},
$ih:1}
A.aC.prototype={
gk(a){return B.H},
gj(a){return a.length},
$ih:1}
A.bs.prototype={
gk(a){return B.I},
gj(a){return a.length},
$ih:1}
A.aN.prototype={}
A.aO.prototype={}
A.aP.prototype={}
A.aQ.prototype={}
A.I.prototype={
h(a){return A.cx(v.typeUniverse,this,a)},
p(a){return A.fa(v.typeUniverse,this,a)}}
A.bI.prototype={}
A.cv.prototype={
i(a){return A.D(this.a,null)}}
A.bG.prototype={
i(a){return this.a}}
A.aS.prototype={$iM:1}
A.c7.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.c6.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:9}
A.c8.prototype={
$0(){this.a.$0()},
$S:5}
A.c9.prototype={
$0(){this.a.$0()},
$S:5}
A.ct.prototype={
a8(a,b){if(self.setTimeout!=null)self.setTimeout(A.cC(new A.cu(this,b),0),a)
else throw A.e(A.eQ("`setTimeout()` not found."))}}
A.cu.prototype={
$0(){this.b.$0()},
$S:0}
A.L.prototype={
i(a){return A.o(this.a)},
$ik:1,
gN(){return this.b}}
A.bE.prototype={}
A.aK.prototype={}
A.aM.prototype={
aq(a){if((this.c&15)!==6)return!0
return this.b.b.V(t.q.a(this.d),a.a,t.y,t.K)},
an(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.au(q,m,a.b,o,n,t.l)
else p=l.V(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.c.b(A.a7(s))){if((r.c&1)!==0)throw A.e(A.bR("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.bR("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.z.prototype={
az(a,b,c){var s,r,q=this.$ti
q.p(c).h("1/(2)").a(a)
s=$.p
if(s===B.c){if(!t.C.b(b)&&!t.v.b(b))throw A.e(A.d9(b,"onError",u.c))}else{c.h("@<0/>").p(q.c).h("1(2)").a(a)
b=A.fJ(b,s)}r=new A.z(s,c.h("z<0>"))
this.X(new A.aM(r,3,a,b,q.h("@<1>").p(c).h("aM<1,2>")))
return r},
af(a){this.a=this.a&1|16
this.c=a},
J(a){this.a=a.a&30|this.a&1
this.c=a.c},
X(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.X(a)
return}r.J(s)}A.bN(null,null,r.b,t.M.a(new A.cd(r,a)))}},
a_(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.a_(a)
return}m.J(n)}l.a=m.L(a)
A.bN(null,null,m.b,t.M.a(new A.ch(l,m)))}},
E(){var s=t.F.a(this.c)
this.c=null
return this.L(s)},
L(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ad(a){var s,r=this
r.$ti.c.a(a)
s=r.E()
r.a=8
r.c=a
A.Z(r,s)},
ac(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.E()
q.J(a)
A.Z(q,r)},
Y(a){var s=this.E()
this.af(a)
A.Z(this,s)},
a9(a){this.$ti.h("1/").a(a)
this.ab(a)},
ab(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bN(null,null,s.b,t.M.a(new A.cf(s,a)))},
aa(a){this.a^=2
A.bN(null,null,this.b,t.M.a(new A.ce(this,a)))},
$ibb:1}
A.cd.prototype={
$0(){A.Z(this.a,this.b)},
$S:0}
A.ch.prototype={
$0(){A.Z(this.b,this.a.a)},
$S:0}
A.cg.prototype={
$0(){A.du(this.a.a,this.b,!0)},
$S:0}
A.cf.prototype={
$0(){this.a.ad(this.b)},
$S:0}
A.ce.prototype={
$0(){this.a.Y(this.b)},
$S:0}
A.ck.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.ar(t.W.a(q.d),t.z)}catch(p){s=A.a7(p)
r=A.ai(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.cP(q)
n=k.a
n.c=new A.L(q,o)
q=n}q.b=!0
return}if(j instanceof A.z&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.z){m=k.b.a
l=new A.z(m.b,m.$ti)
j.az(new A.cl(l,m),new A.cm(l),t.o)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.cl.prototype={
$1(a){this.a.ac(this.b)},
$S:4}
A.cm.prototype={
$2(a,b){A.aZ(a)
t.l.a(b)
this.a.Y(new A.L(a,b))},
$S:10}
A.cj.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.V(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.a7(l)
r=A.ai(l)
q=s
p=r
if(p==null)p=A.cP(q)
o=this.a
o.c=new A.L(q,p)
o.b=!0}},
$S:0}
A.ci.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.aq(s)&&p.a.e!=null){p.c=p.a.an(s)
p.b=!1}}catch(o){r=A.a7(o)
q=A.ai(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cP(p)
m=l.b
m.c=new A.L(p,n)
p=m}p.b=!0}},
$S:0}
A.bD.prototype={}
A.aH.prototype={
gj(a){var s,r,q=this,p={},o=new A.z($.p,t.h)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.c2(p,q))
t.e.a(new A.c3(p,o))
A.ca(q.a,q.b,r,!1,s.c)
return o}}
A.c2.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.c3.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.E()
r.c.a(q)
s.a=8
s.c=q
A.Z(s,p)},
$S:0}
A.aW.prototype={$ids:1}
A.cB.prototype={
$0(){A.es(this.a,this.b)},
$S:0}
A.bL.prototype={
av(a){var s,r,q
t.M.a(a)
try{if(B.c===$.p){a.$0()
return}A.dO(null,null,this,a,t.o)}catch(q){s=A.a7(q)
r=A.ai(q)
A.cA(A.aZ(s),t.l.a(r))}},
aw(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.c===$.p){a.$1(b)
return}A.dP(null,null,this,a,b,t.o,c)}catch(q){s=A.a7(q)
r=A.ai(q)
A.cA(A.aZ(s),t.l.a(r))}},
ah(a){return new A.cr(this,t.M.a(a))},
ai(a,b){return new A.cs(this,b.h("~(0)").a(a),b)},
ar(a,b){b.h("0()").a(a)
if($.p===B.c)return a.$0()
return A.dO(null,null,this,a,b)},
V(a,b,c,d){c.h("@<0>").p(d).h("1(2)").a(a)
d.a(b)
if($.p===B.c)return a.$1(b)
return A.dP(null,null,this,a,b,c,d)},
au(a,b,c,d,e,f){d.h("@<0>").p(e).p(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.p===B.c)return a.$2(b,c)
return A.fK(null,null,this,a,b,c,d,e,f)}}
A.cr.prototype={
$0(){return this.a.av(this.b)},
$S:0}
A.cs.prototype={
$1(a){var s=this.c
return this.a.aw(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.m.prototype={
gn(a){return new A.X(a,a.length,A.b1(a).h("X<m.E>"))},
v(a,b){if(!(b<a.length))return A.r(a,b)
return a[b]},
ga3(a){return a.length!==0},
i(a){return A.dh(a,"[","]")}}
A.n.prototype={
F(a,b){var s,r,q,p=A.O(this)
p.h("~(n.K,n.V)").a(b)
for(s=this.gA(),s=s.gn(s),p=p.h("n.V");s.l();){r=s.gm()
q=this.H(0,r)
b.$2(r,q==null?p.a(q):q)}},
ga1(){return this.gA().a4(0,new A.c_(this),A.O(this).h("F<n.K,n.V>"))},
gj(a){var s=this.gA()
return s.gj(s)},
gB(a){var s=this.gA()
return s.gB(s)},
i(a){return A.dl(this)},
$ibZ:1}
A.c_.prototype={
$1(a){var s=this.a,r=A.O(s)
r.h("n.K").a(a)
s=s.H(0,a)
if(s==null)s=r.h("n.V").a(s)
return new A.F(a,s,r.h("F<n.K,n.V>"))},
$S(){return A.O(this.a).h("F<n.K,n.V>(n.K)")}}
A.c0.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.o(a)
r.a=(r.a+=s)+": "
s=A.o(b)
r.a+=s},
$S:6}
A.bJ.prototype={
H(a,b){var s,r=this.b
if(r==null)return this.c.H(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ae(b):s}},
gj(a){return this.b==null?this.c.a:this.K().length},
gB(a){return this.gj(0)===0},
gA(){if(this.b==null){var s=this.c
return new A.W(s,s.$ti.h("W<1>"))}return new A.bK(this)},
F(a,b){var s,r,q,p,o=this
t.E.a(b)
if(o.b==null)return o.c.F(0,b)
s=o.K()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.cz(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.e(A.ak(o))}},
K(){var s=t.d.a(this.c)
if(s==null)s=this.c=A.a0(Object.keys(this.a),t.s)
return s},
ae(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.cz(this.a[a])
return this.b[a]=s}}
A.bK.prototype={
gj(a){return this.a.gj(0)},
v(a,b){var s=this.a
if(s.b==null)s=s.gA().v(0,b)
else{s=s.K()
if(!(b<s.length))return A.r(s,b)
s=s[b]}return s},
gn(a){var s=this.a
if(s.b==null){s=s.gA()
s=s.gn(s)}else{s=s.K()
s=new J.U(s,s.length,A.aX(s).h("U<1>"))}return s}}
A.b7.prototype={}
A.b9.prototype={}
A.at.prototype={
i(a){var s=A.ba(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.bi.prototype={
i(a){return"Cyclic error in JSON stringify"}}
A.bV.prototype={
aj(a,b){var s=A.fH(a,this.gak().a)
return s},
al(a,b){var s=A.eW(a,this.gam().b,null)
return s},
gam(){return B.x},
gak(){return B.w}}
A.bX.prototype={}
A.bW.prototype={}
A.cp.prototype={
a6(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.d.D(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.d.D(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.d.D(a,r,q)
r=q+1
o=A.v(92)
s.a+=o
o=A.v(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.d.D(a,r,m)},
O(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.e(new A.bi(a,null))}B.a.t(s,a)},
M(a){var s,r,q,p,o=this
if(o.a5(a))return
o.O(a)
try{s=o.b.$1(a)
if(!o.a5(s)){q=A.dj(a,null,o.gZ())
throw A.e(q)}q=o.a
if(0>=q.length)return A.r(q,-1)
q.pop()}catch(p){r=A.a7(p)
q=A.dj(a,r,o.gZ())
throw A.e(q)}},
a5(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.b.i(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.a6(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.O(a)
q.aD(a)
s=q.a
if(0>=s.length)return A.r(s,-1)
s.pop()
return!0}else if(a instanceof A.n){q.O(a)
r=q.aE(a)
s=q.a
if(0>=s.length)return A.r(s,-1)
s.pop()
return r}else return!1},
aD(a){var s,r=this.c
r.a+="["
if(J.eh(a)){if(0>=a.length)return A.r(a,0)
this.M(a[0])
for(s=1;s<a.length;++s){r.a+=","
this.M(a[s])}}r.a+="]"},
aE(a){var s,r,q,p,o,n,m=this,l={}
if(a.gB(a)){m.c.a+="{}"
return!0}s=a.gj(a)*2
r=A.eC(s,null,t.X)
q=l.a=0
l.b=!0
a.F(0,new A.cq(l,r))
if(!l.b)return!1
p=m.c
p.a+="{"
for(o='"';q<s;q+=2,o=',"'){p.a+=o
m.a6(A.A(r[q]))
p.a+='":'
n=q+1
if(!(n<s))return A.r(r,n)
m.M(r[n])}p.a+="}"
return!0}}
A.cq.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.a.I(s,r.a++,a)
B.a.I(s,r.a++,b)},
$S:6}
A.co.prototype={
gZ(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.k.prototype={
gN(){return A.eE(this)}}
A.b3.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ba(s)
return"Assertion failed"}}
A.M.prototype={}
A.K.prototype={
gR(){return"Invalid argument"+(!this.a?"(s)":"")},
gP(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gR()+q+o
if(!s.a)return n
return n+s.gP()+": "+A.ba(s.gU())},
gU(){return this.b}}
A.aE.prototype={
gU(){return A.dG(this.b)},
gR(){return"RangeError"},
gP(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.bc.prototype={
gU(){return A.aY(this.b)},
gR(){return"RangeError"},
gP(){if(A.aY(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.aJ.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.bB.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.by.prototype={
i(a){return"Bad state: "+this.a}}
A.b8.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ba(s)+"."}}
A.aG.prototype={
i(a){return"Stack Overflow"},
gN(){return null},
$ik:1}
A.cc.prototype={
i(a){return"Exception: "+this.a}}
A.bT.prototype={
i(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=B.d.D(q,0,75)+"..."
return r+"\n"+q}else return r}}
A.b.prototype={
a4(a,b,c){var s=A.O(this)
return A.eD(this,s.p(c).h("1(b.E)").a(b),s.h("b.E"),c)},
gj(a){var s,r=this.gn(this)
for(s=0;r.l();)++s
return s},
v(a,b){var s,r=this.gn(this)
for(s=b;r.l();){if(s===0)return r.gm();--s}throw A.e(A.dg(b,b-s,this,"index"))},
i(a){return A.ey(this,"(",")")}}
A.F.prototype={
i(a){return"MapEntry("+A.o(this.a)+": "+A.o(this.b)+")"},
gap(){return this.a},
gaC(){return this.b}}
A.x.prototype={
gq(a){return A.j.prototype.gq.call(this,0)},
i(a){return"null"}}
A.j.prototype={$ij:1,
G(a,b){return this===b},
gq(a){return A.bu(this)},
i(a){return"Instance of '"+A.bv(this)+"'"},
gk(a){return A.h2(this)},
toString(){return this.i(this)}}
A.bM.prototype={
i(a){return""},
$iad:1}
A.ae.prototype={
gj(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ieL:1}
A.cQ.prototype={}
A.aL.prototype={}
A.bF.prototype={}
A.bH.prototype={}
A.cb.prototype={
$1(a){return this.a.$1(A.d(a))},
$S:1}
A.cL.prototype={
$1(a){this.a.close("ok")},
$S:1}
A.cM.prototype={
$1(a){var s,r,q,p
A.d(a)
s=this.a
r=this.b
q=s.$ti
p=q.h("1/?").a(A.A(r.returnValue))
s=s.a
if((s.a&30)!==0)A.cN(A.eK("Future already completed"))
s.a9(q.h("1/").a(p))
r.remove()},
$S:11}
A.bS.prototype={}
A.ac.prototype={}
A.cI.prototype={
$1(a){var s=A.e0(),r=t.N,q=B.i.al(A.eB(["vin",B.b.i(s.a),"vout",B.b.i(s.b),"iout",B.b.i(s.c),"freq",B.b.i(s.d),"res1",B.b.i(s.e)],r,r),null)
A.d(A.d(v.G.window).localStorage).setItem("mc34063",q)
A.d6("Fields have been saved!")},
$S:1}
A.cJ.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
A.e3(new A.ac())
s=A.e0()
r=s.a
q=r<3||r>40?"- Input voltage<br>":""
p=s.b
if(p>-3&&p<3||p<-40||p>40)q+="- Output voltage<br>"
if(Math.abs(r-p)<3)q+="- Input/Output voltage differential<br>"
o=s.c
if(o<5||o>1000)q+="- Output current<br>"
n=s.d
if(n<25||n>100)q+="- Frequency<br>"
m=s.e
if(m<1||m>25)q+="- Resistor R1<br>"
if(q.length!==0){A.d6("Value is out of range in "+(q.split("-").length-1>1?"these fields":"this field")+" <hr> "+q)
return}if(p<0){p=Math.abs(p)
r-=0.8
l=1/(n*1000)
n=(p+0.8)/r+1
k=l-l/n
j=2*o/1000*n
i=new A.ac()
i.a=r/j*k
i.b=k*0.00004
i.c=o/1000*k/0.1
i.d=0.33/j
i.e=(p-1.25)/1.25*m
i.r="Inverter regulator"
i.w="inverter.png"}else{h=p+0.8
g=r-1
o/=1000
l=1/(n*1000)
n=p-1.25
if(p<r){f=l-l/(h/(r-0.8-p)+1)
j=o*2
i=new A.ac()
i.a=(g-p)/j*f
i.b=f*0.00004
i.c=j*l/0.8
i.d=0.33/j
i.e=n/1.25*m
i.r="Step-down regulator"
i.w="step_down.png"}else{r=(h-r)/g+1
f=l-l/r
j=o*r*2
e=0.33/j
i=new A.ac()
i.a=g/j*f
i.b=f*0.00004
i.c=o*f/0.1
i.d=e
i.e=n/1.25*m
i.f=(g-j)*e/(j/20+0.005)
i.r="Step-up regulator"
i.w="step_up.png"}}A.e3(i)},
$S:1};(function aliases(){var s=J.S.prototype
s.a7=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0
s(A,"fV","eS",2)
s(A,"fW","eT",2)
s(A,"fX","eU",2)
r(A,"dT","fO",0)
s(A,"fZ","fl",3)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.j,null)
q(A.j,[A.cR,J.bd,A.aF,J.U,A.k,A.b,A.X,A.ax,A.w,A.c4,A.c1,A.aR,A.P,A.n,A.bY,A.aw,A.av,A.I,A.bI,A.cv,A.ct,A.L,A.bE,A.aM,A.z,A.bD,A.aH,A.aW,A.m,A.b7,A.b9,A.cp,A.aG,A.cc,A.bT,A.F,A.x,A.bM,A.ae,A.cQ,A.bH,A.bS,A.ac])
q(J.bd,[J.bf,J.an,J.aq,J.ap,J.ar,J.ao,J.a9])
q(J.aq,[J.S,J.y,A.aa,A.aB])
q(J.S,[J.bt,J.aI,J.R])
r(J.be,A.aF)
r(J.bU,J.y)
q(J.ao,[J.am,J.bg])
q(A.k,[A.bj,A.M,A.bh,A.bC,A.bx,A.bG,A.at,A.b3,A.K,A.aJ,A.bB,A.by,A.b8])
q(A.b,[A.c,A.Y])
q(A.c,[A.H,A.W,A.au])
r(A.al,A.Y)
q(A.H,[A.ay,A.bK])
r(A.aD,A.M)
q(A.P,[A.b5,A.b6,A.bA,A.cE,A.cG,A.c7,A.c6,A.cl,A.c2,A.cs,A.c_,A.cb,A.cL,A.cM,A.cI,A.cJ])
q(A.bA,[A.bz,A.a8])
q(A.n,[A.as,A.bJ])
q(A.b6,[A.cF,A.cm,A.c0,A.cq])
q(A.aB,[A.bk,A.ab])
q(A.ab,[A.aN,A.aP])
r(A.aO,A.aN)
r(A.az,A.aO)
r(A.aQ,A.aP)
r(A.aA,A.aQ)
q(A.az,[A.bl,A.bm])
q(A.aA,[A.bn,A.bo,A.bp,A.bq,A.br,A.aC,A.bs])
r(A.aS,A.bG)
q(A.b5,[A.c8,A.c9,A.cu,A.cd,A.ch,A.cg,A.cf,A.ce,A.ck,A.cj,A.ci,A.c3,A.cB,A.cr])
r(A.aK,A.bE)
r(A.bL,A.aW)
r(A.bi,A.at)
r(A.bV,A.b7)
q(A.b9,[A.bX,A.bW])
r(A.co,A.cp)
q(A.K,[A.aE,A.bc])
r(A.aL,A.aH)
r(A.bF,A.aL)
s(A.aN,A.m)
s(A.aO,A.w)
s(A.aP,A.m)
s(A.aQ,A.w)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",f:"double",a5:"num",t:"String",bO:"bool",x:"Null",i:"List",j:"Object",bZ:"Map",l:"JSObject"},mangledNames:{},types:["~()","~(l)","~(~())","@(@)","x(@)","x()","~(j?,j?)","@(@,t)","@(t)","x(~())","x(j,ad)","x(l)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.f9(v.typeUniverse,JSON.parse('{"bt":"S","aI":"S","R":"S","hl":"aa","bf":{"bO":[],"h":[]},"an":{"h":[]},"aq":{"l":[]},"S":{"l":[]},"y":{"i":["1"],"c":["1"],"l":[],"b":["1"]},"be":{"aF":[]},"bU":{"y":["1"],"i":["1"],"c":["1"],"l":[],"b":["1"]},"U":{"Q":["1"]},"ao":{"f":[],"a5":[]},"am":{"f":[],"a":[],"a5":[],"h":[]},"bg":{"f":[],"a5":[],"h":[]},"a9":{"t":[],"h":[]},"bj":{"k":[]},"c":{"b":["1"]},"H":{"c":["1"],"b":["1"]},"X":{"Q":["1"]},"Y":{"b":["2"],"b.E":"2"},"al":{"Y":["1","2"],"c":["2"],"b":["2"],"b.E":"2"},"ax":{"Q":["2"]},"ay":{"H":["2"],"c":["2"],"b":["2"],"b.E":"2","H.E":"2"},"aD":{"M":[],"k":[]},"bh":{"k":[]},"bC":{"k":[]},"aR":{"ad":[]},"P":{"V":[]},"b5":{"V":[]},"b6":{"V":[]},"bA":{"V":[]},"bz":{"V":[]},"a8":{"V":[]},"bx":{"k":[]},"as":{"n":["1","2"],"dk":["1","2"],"bZ":["1","2"],"n.K":"1","n.V":"2"},"W":{"c":["1"],"b":["1"],"b.E":"1"},"aw":{"Q":["1"]},"au":{"c":["F<1,2>"],"b":["F<1,2>"],"b.E":"F<1,2>"},"av":{"Q":["F<1,2>"]},"aa":{"l":[],"h":[]},"aB":{"l":[]},"bk":{"l":[],"h":[]},"ab":{"B":["1"],"l":[]},"az":{"m":["f"],"i":["f"],"B":["f"],"c":["f"],"l":[],"b":["f"],"w":["f"]},"aA":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"]},"bl":{"m":["f"],"i":["f"],"B":["f"],"c":["f"],"l":[],"b":["f"],"w":["f"],"h":[],"m.E":"f"},"bm":{"m":["f"],"i":["f"],"B":["f"],"c":["f"],"l":[],"b":["f"],"w":["f"],"h":[],"m.E":"f"},"bn":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"bo":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"bp":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"bq":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"br":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"aC":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"bs":{"m":["a"],"i":["a"],"B":["a"],"c":["a"],"l":[],"b":["a"],"w":["a"],"h":[],"m.E":"a"},"bG":{"k":[]},"aS":{"M":[],"k":[]},"L":{"k":[]},"aK":{"bE":["1"]},"z":{"bb":["1"]},"aW":{"ds":[]},"bL":{"aW":[],"ds":[]},"n":{"bZ":["1","2"]},"bJ":{"n":["t","@"],"bZ":["t","@"],"n.K":"t","n.V":"@"},"bK":{"H":["t"],"c":["t"],"b":["t"],"b.E":"t","H.E":"t"},"at":{"k":[]},"bi":{"k":[]},"f":{"a5":[]},"a":{"a5":[]},"b3":{"k":[]},"M":{"k":[]},"K":{"k":[]},"aE":{"k":[]},"bc":{"k":[]},"aJ":{"k":[]},"bB":{"k":[]},"by":{"k":[]},"b8":{"k":[]},"aG":{"k":[]},"bM":{"ad":[]},"ae":{"eL":[]},"aL":{"aH":["1"]},"bF":{"aL":["1"],"aH":["1"]},"ex":{"i":["a"],"c":["a"],"b":["a"]},"eP":{"i":["a"],"c":["a"],"b":["a"]},"eO":{"i":["a"],"c":["a"],"b":["a"]},"ev":{"i":["a"],"c":["a"],"b":["a"]},"eM":{"i":["a"],"c":["a"],"b":["a"]},"ew":{"i":["a"],"c":["a"],"b":["a"]},"eN":{"i":["a"],"c":["a"],"b":["a"]},"et":{"i":["f"],"c":["f"],"b":["f"]},"eu":{"i":["f"],"c":["f"],"b":["f"]}}'))
A.f8(v.typeUniverse,JSON.parse('{"c":1,"ab":1,"b7":2,"b9":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.d0
return{n:s("L"),U:s("c<@>"),Q:s("k"),Z:s("V"),V:s("b<@>"),s:s("y<t>"),b:s("y<@>"),T:s("an"),m:s("l"),g:s("R"),p:s("B<@>"),j:s("i<@>"),P:s("x"),K:s("j"),L:s("hm"),l:s("ad"),N:s("t"),R:s("h"),c:s("M"),A:s("aI"),O:s("aK<t>"),a:s("bF<l>"),I:s("z<t>"),_:s("z<@>"),h:s("z<a>"),y:s("bO"),q:s("bO(j)"),i:s("f"),z:s("@"),W:s("@()"),v:s("@(j)"),C:s("@(j,ad)"),S:s("a"),Y:s("bb<x>?"),B:s("l?"),d:s("i<@>?"),X:s("j?"),w:s("t?"),F:s("aM<@,@>?"),u:s("bO?"),t:s("f?"),x:s("a?"),D:s("a5?"),e:s("~()?"),H:s("a5"),o:s("~"),M:s("~()"),E:s("~(t,@)")}})();(function constants(){B.t=J.bd.prototype
B.a=J.y.prototype
B.j=J.am.prototype
B.b=J.ao.prototype
B.d=J.a9.prototype
B.u=J.R.prototype
B.v=J.aq.prototype
B.k=J.bt.prototype
B.e=J.aI.prototype
B.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.l=function() {
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
B.q=function(getTagFallback) {
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
B.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.p=function(hooks) {
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
B.o=function(hooks) {
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
B.n=function(hooks) {
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
B.h=function(hooks) { return hooks; }

B.i=new A.bV()
B.c=new A.bL()
B.r=new A.bM()
B.w=new A.bW(null)
B.x=new A.bX(null)
B.y=A.J("hi")
B.z=A.J("hj")
B.A=A.J("et")
B.B=A.J("eu")
B.C=A.J("ev")
B.D=A.J("ew")
B.E=A.J("ex")
B.F=A.J("eM")
B.G=A.J("eN")
B.H=A.J("eO")
B.I=A.J("eP")})();(function staticFields(){$.cn=null
$.E=A.a0([],A.d0("y<j>"))
$.dm=null
$.dc=null
$.db=null
$.dY=null
$.dS=null
$.e_=null
$.cD=null
$.cH=null
$.d3=null
$.af=null
$.b_=null
$.b0=null
$.cZ=!1
$.p=B.c})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"hk","d7",()=>A.h1("_$dart_dartClosure"))
s($,"hy","ee",()=>A.a0([new J.be()],A.d0("y<aF>")))
s($,"hn","e4",()=>A.N(A.c5({
toString:function(){return"$receiver$"}})))
s($,"ho","e5",()=>A.N(A.c5({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"hp","e6",()=>A.N(A.c5(null)))
s($,"hq","e7",()=>A.N(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ht","ea",()=>A.N(A.c5(void 0)))
s($,"hu","eb",()=>A.N(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"hs","e9",()=>A.N(A.dq(null)))
s($,"hr","e8",()=>A.N(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"hw","ed",()=>A.N(A.dq(void 0)))
s($,"hv","ec",()=>A.N(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"hx","d8",()=>A.eR())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aa,SharedArrayBuffer:A.aa,ArrayBufferView:A.aB,DataView:A.bk,Float32Array:A.bl,Float64Array:A.bm,Int16Array:A.bn,Int32Array:A.bo,Int8Array:A.bp,Uint16Array:A.bq,Uint32Array:A.br,Uint8ClampedArray:A.aC,CanvasPixelArray:A.aC,Uint8Array:A.bs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ab.$nativeSuperclassTag="ArrayBufferView"
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.aO.$nativeSuperclassTag="ArrayBufferView"
A.az.$nativeSuperclassTag="ArrayBufferView"
A.aP.$nativeSuperclassTag="ArrayBufferView"
A.aQ.$nativeSuperclassTag="ArrayBufferView"
A.aA.$nativeSuperclassTag="ArrayBufferView"})()
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
var s=A.ha
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=mc34063.js.map
