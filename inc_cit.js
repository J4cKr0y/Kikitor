function K_sit()
{
Texte = new Array(15);
Texte[0]="Ludo - A fred debed, déhé!!!";
Texte[1]="Kiky le magnifique - Booouuuuu!!!!!!";
Texte[2]="Voltaire. - Courtes lettres et longues amitiés, tel est ma devise.";
Texte[3]="O. Wilde. - La meilleure façon de résister à la tentation, c'est d'y céder.";
Texte[4]="De Kerzauson. - Je préfère avoir ce que j'ai dans la braguette que ce que tu as dans la tête : c'est plus gros."; 
Texte[5]="Stendhal. - Je suis athée, Dieu merci !";
Texte[6]="Tristan Bernard - Il vaut mieux être plusieurs sur une bonne affaire que seul sur une mauvaise.";
Texte[7]="Boris Vian - La douleur est une chose que l'on n'a le droit d'infliger qu'à soi-même. ";
Texte[8]="Balasko - J'ai fait un régime pendant 2 semaines... vous savez combien j'ai perdu ? 2 semaines !";
Texte[9]="Feydeau - Pourquoi contredire une femme? Il est tellement plus simple d'attendre qu'elle change d'avis…";
Texte[10]="E.T. - Maison !";
Texte[11]="St Exupéry. - On ne voit bien qu'avec le cœur ; l'essentiel est invisible pour les yeux.";
Texte[12]="William Shakespeare - Etre ou ne pas être, telle est la question.";
Texte[13]="Sigmund Freud - Maman !";
Texte[14]="Bill Gates (célèbre humoriste) - Windows est le système le plus stable du monde";
index = Math.floor(Math.random() * Texte.length);
document.write(Texte[index]);
}
K_sit();