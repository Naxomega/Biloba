> [!WARNING]
> Biloba n'est en AUCUN CAS affilié, ni maintenu de quelconque manière que ca soit par la Ville de Besançon, Grand Besançon Métropole, ou Keolis Besançon Mobilités (Ginko)
# Biloba
Il aurait pu aussi s'appeler Ginko'Clock, mais j'ai choisi Biloba (*Ginko Biloba* est le nom complet de la plante eponyme)\
Site internet qui permet d'avoir les horaires en temps réel des trams/bus Ginko via une interface légère.\
(En gros, Optymo'Clock mais pour Besançon)
## Fonctionnalités
- Interface simple et élegante
- Utilisable sur des appareils peu puissants
- Visualise chaque arrêt (des lignes implémentées) avec toutes les lignes qui y passent
- Voir les arrêts proches de vous
## Roadmap
- [x] Terminer les TRAM et LIANES (voir en dessous)
- [x] Terminer les lignes urbaines (voir en dessous)
- [ ] Améliorer l'ésthetique du site (via des librairies JS comme React ou Vue) (en cours, pour l'instant en CSS pur)
- [x] Système de localisation (page "Autour de moi" qui liste les arrêts à proximité)
- [ ] Système de stockage persistant (pour des arrêts favoris notamment)
- [x] Interface plus adapté aux appareils mobile (Avec une navbar comme la plupart des applis mobile d'aujourd'hui)
- [ ] Système d'information de chaque bus comme l'appli/site officiel
- [ ] Documentation complète sur l'implémentation de l'API et la logique derrière
- [x] Infos trafic pour chaque ligne
- [ ] Retirer un maximum de choses codées en dur (voir en dessous)
## Lignes Disponibles
- Ligne T1
- Ligne T2
- Ligne L3
- Ligne L4
- Ligne L5
- Ligne L6
- Ligne 7
- Ligne 8
- Ligne 9
- Ligne 10
- Ligne 11
- Ligne 12
- Lignes Complémentaires (Eventuellement)
- Lignes Périurbaines (Eventuellement)
- Lignes Scolaires (Eventuellement)
## Implémentation des fonctionnalités
Quelque chose codé "en dur", c'est qu'il est implémenté de manière fixe dans le code (par exemple un bouton T1 en html sur la page "Lignes"). Et le but c'est d'éliminer au maximum les fonctionnalités codées en dur (donc demander à l'API les lignes, et alors créer un bouton T1 avec les infos de l'API), car si Keolis changent les lignes ou autre infos, le site sera immédiatement obsolète, et de plus, ca réduit la charge de travail en termes de maintenance et d'amélioration (par exemple, si je veut modifier le design de la page des horaires, j'ai qu'un seul fichier à modifier au lieu des multiples autrefois)

Voici une checklist ce de qui est en dur ou non (coché = pas en dur)
- [ ] Onglet "Lignes"
- [ ] Page de sélection des directions
- [x] Page de sélection des arrêts
- [x] Page des horaires

- [ ] Style et couleurs

Vous noterez que c'est un peu comme une arborescence. Et mon objectif c'est de remonter dans cet arbre pour éliminer progressivement les implémentation en dur.

Ma priorité est la page de selection des arrêts car une fois fait, l'implémentation (en dur, je sais mais c'est en attendant) d'autres lignes sera bien plus simple car j'aurais juste a faire la page de sélection de direction et y mettre un lien dans la page lignes. Alors que sans il faut que je remplisse manuellement chaque arrêt à la main. Mais je m'attaquerais aux autres pages quand le reste sera terminé.
# Mentions Légales
Ginko, Les mobilités de Grand Besançon Métropole est une marque déposée par Grand Besançon Métropole, touts droits réservés
## Licence

Ce projet est sous licence **GNU Affero General Public License v3.0 (AGPLv3)**.
Comme dit dans le fichier [LICENSE](LICENCE.MD), ce projet vous est distribué sans la moindre garantie.

### Résumé rapide :

| 🟢 Vos permissions | 🟡 Vos devoirs | 🔴 Vos interdictions |
| --- | --- | --- |
| **Utiliser** le projet gratuitement (perso ou commercial) | **Conserver** le nom de l'auteur (Naxoméga) et la mention de licence | **Fermer le code** source en le rendant propriétaire |
| **Modifier** et adapter le code source | **Ouvrir le code** de vos modifications sous licence AGPLv3 | **Relever la responsabilité** de l'auteur en cas de bug |
| **Redistribuer** ou **héberger** l'application en ligne | **Rendre le code accessible** aux utilisateurs du site/service (lien web) |  |

> _Ce résumé est fourni à titre indicatif. En cas de doute juridique, seul le texte du fichier [LICENSE](LICENSE.MD) fait foi._