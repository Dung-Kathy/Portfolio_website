# Cahier des charges — Site personnel / Portfolio

## Objectif

Créer un site personnel moderne, élégant et responsive pour une étudiante en informatique.

Le site doit présenter :
- mon profil ;
- mes projets ;
- mes compétences techniques ;
- mon parcours ;
- mes informations de contact.

Le style doit être inspiré de l’univers Apple : minimaliste, premium, fluide, avec de belles transitions, de grands espaces blancs, des animations douces, des sections très lisibles et un rendu professionnel.

⚠️ Important : ne pas copier exactement le site Apple, ne pas utiliser leurs images, logos, textes ou assets. Il faut seulement s’inspirer de l’esthétique générale : sobriété, fluidité, typographie propre, effets de scroll, cartes élégantes et animations discrètes.

---

## Profil du site

Le site est pour :

**Nom :** Dung Vo  
**Profil :** Étudiante en informatique en France  
**Objectif :** Portfolio personnel pour présenter mes projets, compétences et expériences  
**Langues du site :** Français principalement, possibilité d’ajouter une version anglaise plus tard  

Le ton doit être :
- professionnel ;
- moderne ;
- doux ;
- confiant ;
- accessible ;
- adapté à une étudiante en informatique.

---

## Stack technique souhaitée

Créer le site avec :

- HTML
- CSS
- JavaScript vanilla

Pas besoin de framework au début.

Le code doit être clair, bien structuré et commenté si nécessaire.

Structure attendue :

```txt
portfolio-dung/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Design général

Le design doit être inspiré des sites Apple :

### Style visuel

- Interface très propre et minimaliste.
- Beaucoup d’espace entre les sections.
- Typographie moderne, grande et lisible.
- Couleurs sobres :
  - blanc cassé ;
  - noir profond ;
  - gris clair ;
  - gris foncé ;
  - accents pastel doux, par exemple rose pâle, violet doux ou bleu clair.
- Design premium, pas trop chargé.
- Coins arrondis sur les cartes.
- Ombres très légères.
- Effet glassmorphism léger possible, mais sans exagération.

### Ambiance

Le site doit donner une impression de :
- sérieux ;
- créativité ;
- douceur ;
- compétence ;
- modernité ;
- confiance.

---

## Effets et animations inspirés d’Apple

Ajouter des effets modernes et fluides :

### 1. Hero section immersive

La première section doit prendre presque toute la hauteur de l’écran.

Elle doit contenir :
- mon nom ;
- une phrase d’introduction ;
- un bouton pour voir mes projets ;
- un bouton pour me contacter.

Exemple de texte :

> Bonjour, je suis Dung.  
> Étudiante en informatique, je crée des projets web simples, utiles et élégants.

Effets souhaités :
- apparition progressive du texte au chargement ;
- légère animation de montée ;
- fond avec dégradé très doux ;
- élément décoratif abstrait en arrière-plan, par exemple une sphère floue ou un halo lumineux.

---

### 2. Effet de scroll reveal

Quand l’utilisateur descend la page, les sections doivent apparaître progressivement.

Effets :
- fade-in ;
- slide-up léger ;
- transition fluide.

Utiliser JavaScript avec `IntersectionObserver`.

---

### 3. Cartes de projets modernes

Créer une section projets avec plusieurs cartes.

Chaque carte doit contenir :
- titre du projet ;
- description courte ;
- technologies utilisées ;
- bouton “Voir le projet” ou “Code GitHub”.

Exemples de projets à mettre en placeholder :

#### Projet 1 — Générateur d’emploi du temps
Application Python permettant de générer automatiquement un emploi du temps universitaire à partir de données Excel.

Technologies :
- Python
- OpenPyXL
- Excel
- Automatisation

#### Projet 2 — Portfolio personnel
Site web responsive pour présenter mon profil, mes compétences et mes projets.

Technologies :
- HTML
- CSS
- JavaScript

#### Projet 3 — Application de gestion de tâches
Petite application web pour ajouter, supprimer et organiser des tâches.

Technologies :
- JavaScript
- LocalStorage
- CSS

#### Projet 4 — Projet algorithmique
Implémentation et comparaison de plusieurs algorithmes de tri.

Technologies :
- Python
- Algorithmique
- Structures de données

Effets souhaités sur les cartes :
- hover doux ;
- légère élévation ;
- bordure lumineuse discrète ;
- transition fluide ;
- design premium.

---

### 4. Section compétences

Créer une section claire avec mes compétences.

Catégories :

#### Langages
- Python
- Java
- C
- JavaScript
- HTML
- CSS
- SQL

#### Web
- HTML/CSS
- JavaScript
- Responsive Design
- Accessibilité
- UI/UX de base

#### Outils
- Git
- GitHub
- VS Code
- Excel
- Linux

#### Concepts informatiques
- Algorithmique
- Structures de données
- Programmation orientée objet
- Bases de données
- Automatisation

Affichage souhaité :
- badges modernes ;
- cartes par catégorie ;
- animation légère au hover.

---

### 5. Section À propos

Créer une section “À propos” avec un texte élégant.

Texte proposé :

> Je suis Dung Vo, étudiante en informatique en France.  
> J’aime créer des projets utiles, apprendre de nouvelles technologies et transformer des idées en interfaces simples et agréables à utiliser.  
> Mon objectif est de progresser en développement web, en algorithmique et en conception de logiciels, tout en construisant un portfolio qui reflète ma personnalité : curieuse, sérieuse et créative.

Cette section peut être divisée en deux colonnes :
- une colonne avec le texte ;
- une colonne avec des cartes de valeurs ou qualités.

Exemples de qualités :
- Curiosité
- Créativité
- Rigueur
- Esprit d’équipe
- Apprentissage continu

---

### 6. Section parcours

Ajouter une section “Parcours”.

Exemple :

#### Étudiante en informatique
Formation en informatique en France, avec des cours en programmation, algorithmique, structures de données, bases de données et développement web.

#### Projets personnels
Développement de projets web et Python pour renforcer mes compétences techniques et créer un portfolio professionnel.

Design :
- timeline verticale élégante ;
- animations au scroll ;
- style minimaliste.

---

### 7. Section contact

Créer une section contact simple et jolie.

Elle doit contenir :
- une phrase invitant à me contacter ;
- un bouton email ;
- un lien GitHub ;
- un lien LinkedIn ;
- éventuellement un formulaire simple visuel, sans backend.

Texte proposé :

> Tu veux discuter d’un projet, d’une opportunité ou simplement échanger ?  
> N’hésite pas à me contacter.

Liens placeholders :

```txt
Email : ton.email@example.com
GitHub : https://github.com/ton-profil
LinkedIn : https://linkedin.com/in/ton-profil
```

---

## Navbar

Créer une navbar fixe en haut.

Liens :
- Accueil
- À propos
- Projets
- Compétences
- Parcours
- Contact

Effets :
- fond transparent au début ;
- fond légèrement flou après scroll ;
- effet blur type glassmorphism ;
- animation douce ;
- menu responsive sur mobile.

---

## Responsive design

Le site doit être parfaitement responsive :

- desktop ;
- tablette ;
- mobile.

Sur mobile :
- navbar transformée en menu burger ;
- sections en une colonne ;
- textes adaptés ;
- cartes empilées ;
- boutons faciles à cliquer.

---

## Accessibilité

Respecter les bonnes pratiques :

- bons contrastes ;
- textes lisibles ;
- boutons accessibles ;
- balises HTML sémantiques ;
- attributs `aria` si nécessaire ;
- navigation clavier correcte ;
- ne pas mettre trop d’animations agressives.

Ajouter aussi une gestion de `prefers-reduced-motion` pour réduire les animations si l’utilisateur le demande.

---

## Mode sombre

Ajouter un mode sombre avec bouton toggle.

Le mode sombre doit être élégant :
- fond noir ou gris très foncé ;
- texte blanc cassé ;
- cartes gris foncé ;
- accents doux ;
- transitions fluides entre mode clair et sombre.

Le choix du mode doit être sauvegardé avec `localStorage`.

---

## Détails techniques demandés

### JavaScript

Utiliser JavaScript pour :
- menu burger ;
- animation au scroll avec `IntersectionObserver` ;
- changement de thème clair/sombre ;
- effet navbar au scroll ;
- éventuellement un effet de parallaxe léger dans la hero section.

### CSS

Utiliser :
- variables CSS ;
- media queries ;
- animations CSS ;
- transitions ;
- layout avec Flexbox et Grid.

Exemple de variables CSS :

```css
:root {
  --bg: #f5f5f7;
  --text: #1d1d1f;
  --muted: #6e6e73;
  --card: rgba(255, 255, 255, 0.75);
  --border: rgba(0, 0, 0, 0.08);
  --accent: #b8a7ff;
  --radius: 24px;
}
```

---

## Sections obligatoires dans `index.html`

Le site doit contenir ces sections avec des `id` :

```html
<section id="home"></section>
<section id="about"></section>
<section id="projects"></section>
<section id="skills"></section>
<section id="journey"></section>
<section id="contact"></section>
```

---

## Résultat attendu

Je veux que Codex génère :

1. `index.html`
2. `style.css`
3. `script.js`
4. `README.md`

Le site doit pouvoir être lancé simplement en ouvrant `index.html` dans un navigateur.

Le README doit expliquer :
- comment ouvrir le site ;
- la structure du projet ;
- comment modifier les textes ;
- comment remplacer les liens GitHub, LinkedIn et email.

---

## Prompt final pour Codex

À partir de ce cahier des charges, crée un site personnel complet, moderne, responsive et professionnel pour Dung Vo, étudiante en informatique.

Le site doit être inspiré de l’esthétique Apple :
- design minimaliste ;
- animations fluides ;
- grandes sections propres ;
- cartes élégantes ;
- effets de scroll doux ;
- typographie moderne ;
- mode sombre ;
- navbar avec blur ;
- expérience premium.

Ne copie pas Apple directement. Inspire-toi seulement de l’ambiance visuelle.

Génère les fichiers complets :
- `index.html`
- `style.css`
- `script.js`
- `README.md`

Le code doit être propre, organisé, commenté quand c’est utile, responsive et facile à modifier.
