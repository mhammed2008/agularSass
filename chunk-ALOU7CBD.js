import{G as p,a as r,b as o}from"./chunk-SGXDFR5D.js";var i=class t{_http=o(p);constructor(){}getAllRecpies(){return this._http.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")}getRecpie(e){return this._http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e}`)}static \u0275fac=function(a){return new(a||t)};static \u0275prov=r({token:t,factory:t.\u0275fac,providedIn:"root"})};export{i as a};
