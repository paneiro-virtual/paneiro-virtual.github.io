!function(a,b,c){for(var d=function(){var c=b.getElementById("home-modal-txt").value;if(c.length<9)return b.getElementById("error-msg").style.display="",void e.focus();b.getElementById("loading-msg").style.display="",setTimeout(function(){a.location.assign("/nao-disponivel?cep="+c)},1e3)},e=b.getElementById("home-modal-txt"),f=function(){b.getElementById("home-modal-background-layer").style.display="",b.getElementById("error-msg").style.display="none",b.getElementById("error-msg").style.display="none",e.focus()},g=function(){b.getElementById("home-modal-background-layer").style.display="none",e.value=""},h=function(a){b.getElementById("error-msg").style.display="none";var c=a.which||a.keyCode;27===c&&g();for(var d=a.target.value,e="",f=0,h=d.length;h>f&&9>f;++f)5===f&&(e+="-"),isNaN(d.charAt(f))||(e+=d.charAt(f));a.target.value=e},i=b.querySelectorAll("#call-to-action-1, #call-to-action-2"),j=0,k=i.length;k>j;++j)i[j].onclick=f;b.getElementById("home-modal-background-layer").onclick=g,b.getElementById("home-modal-close").onclick=g,b.getElementById("home-modal").onclick=function(a){e.focus(),a.stopPropagation()},e.oninput=h,e.onchange=h,e.onpaste=h,e.onkeyup=h,b.getElementById("check-cep-btn").onclick=function(a){d(),a.stopPropagation()}}(window,document,void 0);