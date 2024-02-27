function K_web1()
{
document.write('<p>Webmaster :<br /> <b>Jacky,<br /> alias kikitor,<br /> alias kiky270281,<br /> alias Kiky.le.magnifique.<br /></b></p>');
document.write('<p>E-mail : <br /><a href="mailto:kiky270281@@gmail.com"><i>kiky</i>270281<br />AT gmail.com</a> <br /> <br /></p>');
document.write('<p><input class="bouton" onclick="javascript:AddFavo()" type="button" value="Ajouter aux favoris" /></p>');
}

function K_web2()
{
var adressexhtml = "http://validator.w3.org/check?uri=" + document.location;
document.write('<p><a href="');
document.write(adressexhtml);
document.write('"><img style="border:0;width:88px;height:31px" src="http://perso.orange.fr/kikitor/valid-xhtml10.png" alt="Valid XHTML!" /></a><br />');
document.write('<a href="http://jigsaw.w3.org/css-validator/validator?uri=http://perso.wanadoo.fr/kikitor/index.css">');
document.write('<img style="border:0;width:88px;height:31px" src="http://perso.orange.fr/kikitor/vcss.png" alt="Valid CSS!" /></a><br />');
}

K_web1();
K_web2();