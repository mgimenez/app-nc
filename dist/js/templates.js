var templates=function(){function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}var pug_match_html=/["&<>]/;return{listEvents:function(locals){var pug_interp,pug_debug_filename,pug_debug_line,pug_html="";try{var locals_for_with=locals||{};(function(events,zone){pug_debug_line=1,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html+="<h2>",pug_debug_line=1,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html=pug_html+pug_escape(null==(pug_interp=zone)?"":pug_interp)+"</h2>",pug_debug_line=2,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html+="<ul>",pug_debug_line=3,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",function(){var $$obj=events;if("number"==typeof $$obj.length)for(var pug_index0=0,$$l=$$obj.length;pug_index0<$$l;pug_index0++){var event=$$obj[pug_index0];pug_debug_line=4,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html+="<li>",pug_debug_line=5,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html=pug_html+"<a"+pug_attr("href",event.url,!0,!1)+">",pug_debug_line=5,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html=pug_html+pug_escape(null==(pug_interp=event.title)?"":pug_interp)+"</a></li>"}else{var $$l=0;for(var pug_index0 in $$obj){$$l++;var event=$$obj[pug_index0];pug_debug_line=4,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html+="<li>",pug_debug_line=5,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html=pug_html+"<a"+pug_attr("href",event.url,!0,!1)+">",pug_debug_line=5,pug_debug_filename="/Users/matiasgi/workspace/test/app-nc/src/pug/templates/listEvents.tpug",pug_html=pug_html+pug_escape(null==(pug_interp=event.title)?"":pug_interp)+"</a></li>"}}}.call(this),pug_html+="</ul>"}).call(this,"events"in locals_for_with?locals_for_with.events:"undefined"!=typeof events?events:void 0,"zone"in locals_for_with?locals_for_with.zone:"undefined"!=typeof zone?zone:void 0)}catch(err){pug_rethrow(err,pug_debug_filename,pug_debug_line)}return pug_html}}}();