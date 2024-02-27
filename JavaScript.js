//
texte='      Kiky el magnifico, los corones del torro! ;-D      ';
  lgtexte=texte.length-1;
  postexte=0;
function msgdefil() {
    if (postexte == texte.length) {
      postexte=0;
    }
    if (postexte<=lgtexte) {
      afftexte = texte.substring((texte.length-(lgtexte-postexte)),texte.length) + texte.substring(0,postexte);
      postexte++;
    }
    window.status = afftexte;
    vitessedefil = setTimeout("msgdefil()", 150);
  }


function WriteMailTo(empseudo,emname,emdomain,emext) {
    var hauteur = 112;
    var largeur = 150;
    var top=(screen.height-hauteur)/2;
    var left=(screen.width-largeur)/2;
    if (empseudo == "") {
      empseudo = emname + "@" + emdomain + "." + emext;
    }
    fenetremail = window.open("","email","top="+top+", left="+left+", width="+largeur+", height="+hauteur+", directories=no, menubar=no, status=no, resizable=no, location=no");
    fenetreNote = fenetremail;
    if (fenetreNote != null) {
      docmail = fenetremail.document;
      textemail = '<HTML><HEAD><TITLE>' + 'e-mail' + '</TITLE>';
      textemail += '<meta http-equiv="Content-Type" content="text/html; charset="iso-8859-1"></HEAD>';
      textemail += '<BODY bgcolor="#000099" leftmargin="5" topmargin="5" style="overflow: hidden;"><FIELDSET><CENTER><BR>';
      textemail += 'Ecrire à <B>' + empseudo + '</B> :<BR><BR>';
      textemail += '<a' + ' h' + 're' + 'f=' + 'ma' + 'il' + 'to' + ':' + emname + '@' + emdomain + '.' + emext + '>' + emname + '@' + emdomain + '.' + emext + '</a>';
      textemail += '<BR><BR></CENTER></FIELDSET></BODY></HTML>';
      docmail.write(textemail);
      docmail.close();
    }
  }

function AddFavo() {
	if ((navigator.appName.indexOf("Microsoft",0)>=0) && (parseInt(navigator.appVersion)>=4)) {
	  window.external.AddFavorite("http://perso.wanadoo.fr/kikitor","Kiky le magnifique" );
	}
    else {
	  alert("Cette fonctionnalité n'est proposée que par Internet Explorer 4+ / Si vous avez Mozilla : suffit de faire clique droit -> Ajouter aux marque-pages ;)");
	}
  }

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;    
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() 
{
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) 
  {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")) 
    return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) 
{
  if (days) 
  {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
history.go(0);
}

function readCookie(name) 
{
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) 
  {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function scol()
{
var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

function scou()
{
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}


function flashtest()
{
 if (getActiveStyleSheet() == 'Force bleue!') 
  {
document.write('<!--[if IE]><object id="Kiky.swf" classid="clsid:D27CDB6EAE6D11cf96B8444553540000" width="600" height="60"><![endif]-->');
document.write('<object id="Kiky.swf" type="application/x-shockwave-flash" data="Kiky.swf" width="600" height="60"><param name="movie" value="Kiky.swf" /></object><br /><br />');
  }
}
// -->