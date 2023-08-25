# User stories

## Keso

**Courte description d'une fonctionnalité ciblée d'un point de vu d'un utilisateur final de l'application.**

## Format 

- 🇫🇷 `EN TANT QUE [role], JE SOUHAITE [action], (AFIN DE [but])`
- 🇬🇧 `AS [role], I WANT [action] SO THAT [goal]`

## Objectifs

- **clarifier les attentes** du client d'un point de vu de l'utilisateur final
- de parfait **scénarii de tests** pour le développeur et le commanditaire pour vérifier que l'implémentation est raccord avec les attentes initiales.

## Démarche


#### 1ere étape : définir nos `ROLES` :

- **visiteurs** : utilisateur non loggé sur le site. 
  - les étudiants n'ont pas besoin de se logger

- **administrateurs** : utilisateur loggé avec des droits d'administration
  - Nicole aura un compte administrateur. Ce sera d'ailleurs la seule personne avec un compte administrateur

=> Implication directe : n'importe quel utilisateur internet qui se connecte à notre app voit la liste des élèves de l'école => bof en terme de RGPD, mais ok dans un cadre pédadogique S04 Oclock ;-) 

=> Pendant la clarification du besoin (à l'aide des user stories), on définit que les étudiants n'ont pas besoin d'avoir un compte. 

#### Exemples

- En tant que visiteurs, je veux accéder à une page d'accueil, afin de voir d'un coup d'oeil les fonctionnalités l'application.
- En tant que visiteurs, je veux accéder à la page des promotions, afin de connaitre les promos de l'école
- En tant que visiteurs, je veux accéder à la page d'une promotion, afin d'avoir des détails sur la promotion
- En tant que visiteurs, je veux accéder à la page des élèves d'une promotion, afin de voir les élèves qui composent la promotion.

- En tant qu'administrateur, je veux accéder à une page d'ajout d'une promotion
- En tant qu'administrateur, je veux pouvoir ajouter une nouvelle promotion.

- En tant qu'administrateur, je veux pouvoir modifier le profil d'un étudiant, pour changer son nom ou sa promotion.


#### "Correction" (pas de réponse parfaite, ça dépend du projet)

| En tant que | Je souhaite | Afin de |
| -- | -- | -- |
| Visiteur | Accéder à une page d'accueil | Afin d'accèder à la page des promotions ou accéder à l'espace administrateur |
| Visiteur | Accéder à une page des promotions | Afin de lister toutes les promotions |
| Visiteur | Accéder à la page d'une promotion | Afin de connaitre les infos d'une promotion et accéder à la liste des étudiants de la promo | 
| Visiteur | Accéder à la page des étudiants | Afin de connaitre les étudiants de la promo | 
| Visiteur | Accéder à un profil étudiant | Afin de connaitre les infos de l'étudiant |
| Visiteur | Se connecter | Pour accéder à la page admin | 
| -- | -- | -- |
| Administrateur | Créer une promotion | 
| Administrateur | Créer un étudiant | 
| Administrateur | Supprimer une promotion | 
| Administrateur | Supprimer un étudiant | 
| Administrateur | Modifier les informations d'un étudiant | 
| Administrateur | Modifier les informations d'une promotion | 
| Administrateur | Accéder à une page d'administration | Pour recenser les promotions modifiables | 
| Administration | Renouveler le mot de passe | Pallier à un oubli | 
| -- | -- | -- |
| All | Rediriger vers une page 404 | Si l'utilisateur entre une URL qui n'existe pas |


#### Debrief Slippers (brouillon)

- `en tant qu'étudiant, je souhaite lire la description faite de moi afin de vérifier que tout est correct`
- `En tant qu'élève, je souhaite rester en contact avec mes collègues de promo, pour s'entraider pendant les cours`
- `EN TANT QUE [admin], JE SOUHAITE [supprimer des membres]`
- `En tant qu'utilisateur, je souhaite éditer mon profil pour modifier mes informations`
- ❌ `En tant que client, je souhaite une plateforme de communication entre les élèves, dans le but de nous aider a communiquer`
- ❌ `En tant que [Nicole], je souhaite [Que vous développiez un site] afin de [Permettre aux étudiants et aux formateurs de voir les détails des étudiants]`
