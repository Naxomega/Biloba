> [!WARNING]
> Biloba n'est en AUCUN CAS affilié, ni maintenu de quelconque manière que ca soit par la Ville de Besançon, Grand Besançon Métropole, ou Keolis Besançon Mobilités (Ginko)
# Biloba
Il aurait pu aussi s'appeler Ginko'Clock, mais j'ai choisi Biloba (ginko biloba est le nom complet de la plante eponyme)\
Futur site internet qui permettera d'avoir les horaires en temps réel des bus Ginko via une interface légère.\
(En gros, Optymo'Clock mais pour Besançon)
## Ce qui change par rapport à Optymo'Clock
Contrairement à Optymo qui met en service des pages web dédiées aux horaires, ce n'est pas le cas pour Ginko.\
Donc Biloba utilisera [l'API officielle de Ginko](https://api.ginko.voyage/#prez) pour recevoir les horaires. (oui j'ai appris le JavaScript uniquement pour ce projet... sinon ca va vous ?)
## Avancement du développement
J'ai donc ajouté une page "universelle" qui permet de visualiser n'importe quel arrêt, ligne et destination via des arguments en adresse [comme ici pour l'arrêt Temis de la ligne L3](https://naxomega.github.io/Biloba/horaires.html?arret=8%20Septembre&ligne=L3&destination=Pôle%20Temis&destinationalt=Campus%20%20Crous%20Université)

La clé d'API est toujours temporaire, mais j'ai envoyé une demande à Keolis Besançon pour avoir accès à une clé définitive.
## Roadmap
- Terminer les TRAM et LIANES (voir en dessous)
- Terminer les lignes urbaines (voir en dessous)
- Améliorer l'ésthetique du site (via des librairies JS comme React ou Vue) (en cours, pour l'instant en CSS pur)
- Système de localisation (page "Autour de moi" qui liste les arrêts à proximité)
- Système de stockage persistant (pour des arrêts favoris notamment)
- Interface plus adapté aux appareils mobile (Avec une navbar comme la plupart des applis mobile d'aujourd'hui)
- Système d'information de chaque bus comme l'appli/site officiel (cependant, les données d'affluences sont pas systématiques dans l'API (elles renvoient -2) et sont des "informations complémentaires" mises en place au cas par cas (d'après ce que j'ai compris), en espérant y avoir accès :) )
- Infos trafic pour chaque ligne
## Lignes Disponibles
- Ligne T1
- Ligne T2
- Ligne L3
- Ligne L4 (Prochainement)
- Ligne L5 (Prochainement)
- Ligne L6 (Prochainement)
- Ligne 7 (Prochainement)
- Ligne 8 (Prochainement)
- Ligne 9 (Prochainement)
- Ligne 10 (Prochainement)
- Ligne 11 (Prochainement)
- Ligne 12 (Prochainement)
- Lignes Complémentaires (Eventuellement)
- Lignes Périurbaines (Eventuellement)
- Lignes Scolaires (Pas dans ma roadmap)
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