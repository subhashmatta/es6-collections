(function(h){function k(a){this.has(a)&&(this._keys.splice(b,1),this._values.splice(b,1));return-1<b}function m(a){return this.has(a)?this._values[b]:void 0}function n(a,c){if(this.objectOnly&&c!==Object(c))throw new TypeError("not a non-null object");if(c!=c||0===c)for(b=a.length;b--&&!v(a[b],c););else b=a.indexOf(c);return-1<b}function p(a){return n.call(this,this._values,a)}function q(a){return n.call(this,this._keys,a)}function r(a,c){this.has(a)?this._values[b]=c:this._values[this._keys.push(a)-
1]=c}function l(){this._values.length=0}function s(){return this._values.slice()}function w(){return this._keys.slice()}function t(){return this._values.length}function x(a,c){var b=this,d=b._values.slice();b._keys.slice().forEach(function(e,f){a.call(c,e,d[f],b)})}function y(a,b){var d=this;d._values.slice().forEach(function(e){a.call(b,e,e,d)})}function u(a){!this.has(a)&&!!this._values.push(a)}if("undefined"==typeof d){var d=function(){if(!this||this.constructor!==d)return new d;this._keys=[];
this._values=[];this.objectOnly=!0};d.prototype={constructor:d,"delete":k,clear:l,get:m,has:q,set:r};h.WeakMap=d}if("undefined"==typeof e){var e=function(){if(!this||this.constructor!==e)return new e;this._keys=[];this._values=[]};e.prototype={constructor:e,"delete":k,has:q,get:m,set:r,size:t,keys:w,values:s,forEach:x,clear:l};h.Map=e}if("undefined"==typeof f){var f=function(){if(!this||this.constructor!==f)return new f;this._keys=[];this._values=[]};f.prototype={constructor:f,has:p,add:u,"delete":k,
clear:l,size:t,values:s,forEach:y};h.Set=f}if("undefined"==typeof g){var g=function(){if(!this||this.constructor!==g)return new g;this._keys=[];this._values=[];this.objectOnly=!0};g.prototype={constructor:g,"delete":k,add:u,clear:l,has:p};h.WeakSet=g}var b,v=Object.is})("undefined"==typeof exports?window:global);
