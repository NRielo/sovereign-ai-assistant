# Guide de démarrage rapide - Sovereign AI Assistant

## ✅ Étape 1 : Clé API Gemini créée avec succès !

Votre clé API Gemini a été créée et copiée dans votre presse-papiers.

**Informations de la clé :**
- **Nom** : Aider CLI - Sovereign AI Assistant
- **Projet** : Sovereign AI Assistant  
- **Date de création** : 11 novembre 2025
- **Niveau** : Gratuit (sans frais)
- **Clé API** : Dans votre presse-papiers

### 📝 Sauvegarder la clé API immédiatement

**IMPORTANT** : La clé API est dans votre presse-papiers. Sauvegardez-la maintenant !

```bash
# Option 1 : Créer un fichier de configuration Aider
mkdir -p ~/.config/aider
echo "GEMINI_API_KEY=VOTRE_CLE_API" > ~/.config/aider/.env

# Option 2 : Ajouter à votre .bashrc
echo 'export GEMINI_API_KEY="VOTRE_CLE_API"' >> ~/.bashrc
source ~/.bashrc

# Option 3 : Ajouter à votre .zshrc (si vous utilisez zsh)
echo 'export GEMINI_API_KEY="VOTRE_CLE_API"' >> ~/.zshrc
source ~/.zshrc
```

**Remplacez `VOTRE_CLE_API`** par la clé copiée !

## 📦 Étape 2 : Installation d'Aider CLI

### Option A : Installation avec pip (Recommandé)

```bash
# Vérifier Python 3.8+
python3 --version

# Installer pip si nécessaire
sudo apt update
sudo apt install python3-pip python3-venv

# Créer un environnement virtuel (recommandé)
mkdir -p ~/aider-env
cd ~/aider-env
python3 -m venv venv
source venv/bin/activate

# Installer Aider
pip install aider-chat

# Vérifier l'installation
aider --version
```

### Option B : Installation avec pipx (Isolation totale)

```bash
# Installer pipx
sudo apt install pipx
pipx ensurepath

# Redémarrer le shell ou exécuter
source ~/.bashrc

# Installer Aider
pipx install aider-chat

# Vérifier l'installation
aider --version
```

## 🚀 Étape 3 : Premier test avec Gemini

```bash
# Tester avec Gemini 2.0 Flash (plus rapide)
aider --model gemini/gemini-2.0-flash-exp

# Ou avec Gemini 1.5 Pro (plus puissant)
aider --model gemini/gemini-1.5-pro-latest
```

Si vous voyez le prompt Aider, c'est gagné ! 🎉

## 💻 Étape 4 : Utiliser Aider sur ce projet

```bash
# Cloner le projet (si pas déjà fait)
git clone https://github.com/NRielo/sovereign-ai-assistant.git
cd sovereign-ai-assistant

# Lancer Aider dans le projet
aider --model gemini/gemini-2.0-flash-exp

# Dans Aider, ajouter des fichiers au contexte :
> /add src/main.tsx
> /add src/App.tsx
> /add package.json

# Poser une question :
> "Explique-moi l'architecture de ce projet"

# Demander une modification :
> "Ajoute un système de routing avec React Router"
```

## 🛠️ Commandes Aider essentielles

| Commande | Description |
|----------|-------------|
| `/add fichier.ts` | Ajouter un fichier au contexte |
| `/drop fichier.ts` | Retirer un fichier du contexte |
| `/ls` | Lister les fichiers dans le contexte |
| `/clear` | Effacer l'historique |
| `/help` | Afficher l'aide |
| `/exit` ou `/quit` | Quitter Aider |
| `/model` | Changer de modèle |
| `/undo` | Annuler les derniers changements |

## 🤖 Modèles Gemini disponibles (GRATUITS)

| Modèle | Vitesse | Qualité | Usage recommandé |
|--------|---------|---------|------------------|
| `gemini/gemini-2.0-flash-exp` | ⚡⚡⚡ | ⭐⭐⭐ | Développement quotidien |
| `gemini/gemini-1.5-pro-latest` | ⚡⚡ | ⭐⭐⭐⭐⭐ | Tâches complexes |
| `gemini/gemini-1.5-flash-latest` | ⚡⚡⚡ | ⭐⭐⭐⭐ | Équilibre |

## 📊 Limites de l'API Gemini gratuite

- **15 requêtes par minute**
- **1500 requêtes par jour**  
- **1 million de tokens par jour**

Si vous atteignez une limite, attendez quelques minutes.

## 🔧 Résolution de problèmes

### Erreur "API key not found"
```bash
# Vérifier la variable d'environnement
echo $GEMINI_API_KEY

# Si vide, redéfinir
export GEMINI_API_KEY="votre_cle_api"
```

### Erreur "aider: command not found"
```bash
# Si installé avec pip dans venv
source ~/aider-env/venv/bin/activate

# Si installé avec pipx
pipx ensurepath
source ~/.bashrc
```

### Erreur de connexion réseau
```bash
# Vérifier la connexion Internet
ping google.com

# Vérifier les proxies (si applicable)
echo $HTTP_PROXY
echo $HTTPS_PROXY
```

## 📚 Ressources supplémentaires

- 📖 [Documentation Aider](https://aider.chat/docs/)
- 🤖 [Documentation Gemini API](https://ai.google.dev/gemini-api/docs)
- 💬 [Dépôt GitHub du projet](https://github.com/NRielo/sovereign-ai-assistant)
- 🎥 [Tutoriels Aider](https://aider.chat/docs/tutorials.html)

## 🎉 Vous êtes prêt !

Vous avez maintenant :
- ✅ Une clé API Gemini gratuite et fonctionnelle
- ✅ Aider CLI installé sur votre système
- ✅ Tout configuré pour développer avec l'IA

### Commande de démarrage rapide :

```bash
cd ~/sovereign-ai-assistant
aider --model gemini/gemini-2.0-flash-exp
```

**Bon développement avec Aider et Gemini ! 🚀**

---

*Dernière mise à jour : 11 novembre 2025*
