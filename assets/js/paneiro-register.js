!function(a,b,c,d,e,f){var g=new e.Modal({contentDiv:".loading"}),h=function(a){for(var b=a.target.value,c="",d=0,e=b.length;e>d&&14>d;++d)3===d||7===d?c+=".":11===d&&(c+="-"),isNaN(b.charAt(d))||(c+=b.charAt(d));a.target.value=c},i=function(a){var b=a.target.value,c="",d=0;b.length>=5&&(b=b.substr(5));for(var e=0,f=b.length;f>e&&10>e;++e)10===f?5===d&&(c+="-",++d):4===d&&(c+="-",++d),isNaN(b.charAt(e))||(c+=b.charAt(e),++d);""!==c?a.target.value="(92) "+c:a.target.value=""},j=function(a){for(var b="",c=a.charAt(0),d=!0,e=0,f=a.length;f>e;++e)isNaN(a.charAt(e))||(b+=a.charAt(e),d&&(d=d&&c===a.charAt(e)));if(a=b,d)return!1;var g,h;if(g=0,"00000000000"==a)return!1;for(e=1;9>=e;e++)g+=parseInt(a.substring(e-1,e))*(11-e);if(h=10*g%11,(10==h||11==h)&&(h=0),h!=parseInt(a.substring(9,10)))return!1;for(g=0,e=1;10>=e;e++)g+=parseInt(a.substring(e-1,e))*(12-e);return h=10*g%11,(10==h||11==h)&&(h=0),h!=parseInt(a.substring(10,11))?!1:!0},k=b.getElementById("input-cpf");k.oninput=h,k.onchange=h,k.onpaste=h,k.onkeyup=h;var l=b.getElementById("input-phone");l.oninput=i,l.onchange=i,l.onpaste=i,l.onkeyup=i,b.getElementById("register-form").onsubmit=function(){var c=j(k.value),h=15===l.value.length||14===l.value.length,i=d('<ul class="error-list"></ul>');if(c?d("#input-cpf").removeClass("invalid-input"):(d("#input-cpf").addClass("invalid-input"),d("<li>Cpf Inválido.</li>").appendTo(i)),h?d("#input-phone").removeClass("invalid-input"):(d("#input-phone").addClass("invalid-input"),d("<li>Telefone Inválido.</li>").appendTo(i)),c&&h){var m={};m.name=b.getElementById("input-name").value,m.cpf=b.getElementById("input-cpf").value,m.email=b.getElementById("input-email").value,m.phone=b.getElementById("input-phone").value,m.addr=b.getElementById("input-addr").value,g.show(),e.ajax({url:f.api.url+"/users",type:"POST",data:m,success:function(b){g.dismiss();var c=new e.Modal({title:"Solicitação registrada com sucesso",msg:"Sua solicitação de acesso foi registrada com sucesso. Em breve entraremos em contato.",closeCallback:function(){a.location.href="/"}});c.show()},error:function(a){g.dismiss();var b="CONFLICT"===a.status?"O email ou cpf fornecidos já estão cadastrados":"Aconteceu um erro ao registrar a sua solicitação. Por favor tente novamente em alguns instantes.",c=new e.Modal({title:"Erro ao registrar solicitação de acesso",msg:b});c.show()}})}else{var n=d("#error-messages");n.html(""),n.append(i),n.css("display","")}return!1};var m={};a.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,b,c){m[b]=c}),m.email&&(b.getElementById("input-email").value=m.email),b.getElementById("input-name").focus()}(window,document,void 0,$,jambo,paneiro.config);