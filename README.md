# Where in the world?

![Where in the world? homepage](https://cedriccharlesia.com/img/where-in-the-world.jpg)

Je suis tombé sur ce challenge [REST countries API](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) proposé par frontend mentor.

Aimant beaucoup la géographie, je me suis lancé le défi.

## Problème rencontré : la gestion de la base de données

Au départ, je souhaitais utiliser l'API de *restcountries.eu* mais entre le moment où j'ai trouvé le challenge et le moment où j'ai démarré le projet, l'API a été supprimée !

En foullant sur le net, j'ai trouvé des fichiers ``JSON`` avec des infos concernant les pays du monde.
J'ai donc copié ces données en ne gardant que ce qui m'intéressait, et en y ajoutant des données comme les plats nationauxs des pays.

## Les outils et technologies utilisés :

* NodeJS avec le framework Express
* Le moteur de template [EJS](https://ejs.co/) pour l'affichage des vues HTML
* Le module npm [dayJS](https://day.js.org/) pour l'affiche des fuseaux horaires en temps réel
* Un fichier JSON pour la base de donées
