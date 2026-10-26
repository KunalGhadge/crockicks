# GitHub Authentication & Repository Credentials

## Remote Details
- **Repo URL**: https://github.com/KunalGhadge/crockicks.git
- **Stored Local Credentials**: Kept in `.credentials/github_token.txt` and `.env` (git-ignored for security)
- **Origin Configuration**: The local git remote `origin` is preconfigured with the PAT for direct push/pull.
- **Default Branch**: main

## Instructions for Agents
- Whenever pushing to GitHub, use `git push origin main`.
- If you need to reconfigure or check the token, read `.credentials/github_token.txt`.
- Do NOT commit raw tokens into git-tracked files so GitHub Push Protection is never triggered.
