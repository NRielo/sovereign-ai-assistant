# SovereignAI Assistant

## 🚀 Configuration Optimale : Aider + Gemini API (GRATUIT)

Ce projet utilise une configuration ultra-économique pour le développement assisté par IA :
- **Coût : 0€/mois**
- **Efficacité : 50x plus économe en tokens**
- **Rapidité : 5-10x plus rapide**

---

## 📦 Installation

### 1. Installer Aider

```bash
# Installation via pip
pip install aider-chat

# Ou avec pipx (recommandé)
pipx install aider-chat
```

### 2. Obtenir une clé API Gemini (GRATUIT)

1. Aller sur [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Cliquer sur "Create API Key"
3. Copier votre clé API

**Limites gratuites généreuses :**
- Gemini 2.0 Flash : 1 million tokens/minute, 200 requêtes/jour
- Gemini 2.5 Flash : 250,000 tokens/minute, 250 requêtes/jour
- **Aucune carte bancaire requise !**

### 3. Configurer la clé API

```bash
# Linux/Mac
export GEMINI_API_KEY="votre_clé_api_ici"

# Ajouter à ~/.bashrc ou ~/.zshrc pour persistance
echo 'export GEMINI_API_KEY="votre_clé_api_ici"' >> ~/.bashrc
```

---

## 🎯 Utilisation

### Démarrer Aider avec Gemini

```bash
# Dans le dossier du projet
aider --model gemini/gemini-2.0-flash-exp

# Ou avec Gemini 2.5 Flash
aider --model gemini/gemini-2.5-flash
```

### Commandes Aider essentielles

```bash
# Ajouter des fichiers au contexte
/add src/App.tsx
/add src/**/*.py

# Lister les fichiers en contexte
/ls

# Supprimer un fichier du contexte
/drop src/App.tsx

# Voir l'historique
/undo

# Quitter
/exit
```

### Exemples de prompts

```
"Ajoute un bouton de connexion dans App.tsx avec gestion d'erreur"

"Crée des tests unitaires pour la fonction authenticate()"

"Refactorise le code dans utils.py pour améliorer la lisibilité"

"Corrige le bug dans le fichier server.py ligne 45"
```

---

## ⚡ Workflow Recommandé

### 1. Planification (GitHub Issues)

Créez des issues bien structurées :
- Description claire du problème
- Critères d'acceptation
- Fichiers concernés

### 2. Développement (Aider + Gemini)

```bash
# Démarrer une session
aider --model gemini/gemini-2.0-flash-exp

# Aider lit votre codebase, modifie les fichiers
# et commit automatiquement les changements
```

### 3. Révision et Tests

```bash
# Voir les changements
git diff

# Lancer les tests
npm test  # ou pytest, etc.

# Push si tout est OK
git push
```

---

## 💡 Avantages de cette Configuration

| Aspect | Aider + Gemini | Cursor Pro |
|--------|----------------|------------|
| **Coût** | 0€/mois | 40€/mois |
| **Tokens/requête** | ~90,000 | ~5,000,000 |
| **Vitesse** | 3-4 min | 30 min |
| **Git-aware** | ✅ Auto-commit | ❌ Manuel |
| **Open-source** | ✅ | ❌ |

---

## 📊 Stratégies d'Économie de Tokens

1. **Contexte ciblé** : N'ajoutez que les fichiers nécessaires
2. **Commits incrémentiaux** : Petites modifications = moins de tokens
3. **Cache de contexte** : Gemini réutilise le contexte ($0.31/M tokens)
4. **Batch operations** : Regroupez les tâches similaires

---

## 🔧 Configuration Avancée

### Fichier .aider.conf.yml (optionnel)

```yaml
model: gemini/gemini-2.0-flash-exp
auto-commits: true
dirty-commits: true
attribute-commits: true
git-commit-message-style: conventional
```

### Intégration CI/CD

GitHub Actions fournit 2000 minutes gratuites/mois :

```yaml
# .github/workflows/test.yml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
```

---

## 🎓 Bonnes Pratiques

### Tâches adaptées à Aider + IA
✅ Correction de bugs
✅ Ajout de tests unitaires
✅ Refactoring simple
✅ Mise à jour de documentation
✅ Modifications UI/UX

### Tâches à éviter
❌ Logique business complexe
❌ Sécurité critique (auth, crypto)
❌ Refactoring architectural majeur
❌ Tâches nécessitant connaissance métier approfondie

### Révision du code
**Toujours réviser le code généré par l'IA** avant de push en production !

---

## 🆚 Comparaison avec Alternatives

### Cursor IDE
- 💰 $40/mois
- 🚀 Interface visuelle confortable
- ⚠️ Consomme 50x plus de tokens
- ✨ Meilleur pour : autocomplétion rapide, UI/UX

### GitHub Copilot
- 💰 $10-39/mois
- 🚀 Autocomplétion excellente
- ⚠️ Contexte limité au fichier ouvert
- ✨ Meilleur pour : suggestions inline

### Aider + Gemini (cette config)
- 💰 **0€/mois**
- 🚀 Modifications multi-fichiers intelligentes
- ✅ 6+ millions tokens/jour gratuits
- ✨ Meilleur pour : refactoring, génération de code structuré

---

## 🔗 Ressources

- [Documentation Aider](https://aider.chat/)
- [Gemini API Docs](https://ai.google.dev/)
- [GitHub Actions](https://docs.github.com/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📈 Résultats Attendus

Avec cette configuration :
- ✅ **Développement 5-10x plus rapide**
- ✅ **0€ de coût IA**
- ✅ **Traçabilité Git complète**
- ✅ **6+ millions tokens/jour disponibles**
- ✅ **Open-source et transparent**

---

## 📄 Licence

MIT
