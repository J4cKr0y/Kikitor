function K_sit()
{
Texte = new Array(15);
Texte[0]="Ludo - A fred debed, d�h�!!!";
Texte[1]="Kiky le magnifique - Booouuuuu!!!!!!";
Texte[2]="Voltaire. - Courtes lettres et longues amiti�s, tel est ma devise.";
Texte[3]="O. Wilde. - La meilleure fa�on de r�sister � la tentation, c'est d'y c�der.";
Texte[4]="De Kerzauson. - Je pr�f�re avoir ce que j'ai dans la braguette que ce que tu as dans la t�te : c'est plus gros."; 
Texte[5]="Stendhal. - Je suis ath�e, Dieu merci !";
Texte[6]="Tristan Bernard - Il vaut mieux �tre plusieurs sur une bonne affaire que seul sur une mauvaise.";
Texte[7]="Boris Vian - La douleur est une chose que l'on n'a le droit d'infliger qu'� soi-m�me. ";
Texte[8]="Balasko - J'ai fait un r�gime pendant 2 semaines... vous savez combien j'ai perdu ? 2 semaines !";
Texte[9]="Feydeau - Pourquoi contredire une femme? Il est tellement plus simple d'attendre qu'elle change d'avis�";
Texte[10]="E.T. - Maison !";
Texte[11]="St Exup�ry. - On ne voit bien qu'avec le c�ur ; l'essentiel est invisible pour les yeux.";
Texte[12]="William Shakespeare - Etre ou ne pas �tre, telle est la question.";
Texte[13]="Sigmund Freud - Maman !";
Texte[14]="Bill Gates (c�l�bre humoriste) - Windows est le syst�me le plus stable du monde";
index = Math.floor(Math.random() * Texte.length);
document.write(Texte[index]);
}
K_sit();