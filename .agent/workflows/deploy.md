---
description: How to deploy the application to GitHub Pages
---

To deploy your changes to GitHub Pages, follow these steps:

1. **Commit your changes**: Ensure all your work is committed to your git repository.
   ```powershell
   git add .
   git commit -m "Describe your changes here"
   ```

2. **Run the deploy script**: This script will automatically build your project and push it to the `gh-pages` branch.
   // turbo
   ```powershell
   npm run deploy
   ```

3. **Verify Deployment**: Once the command completes, your site should be updated at:
   [https://akashbijkumar.github.io/relish-foods/](https://akashbijkumar.github.io/relish-foods/)

> [!NOTE]
> The `predeploy` script (`npm run build`) runs automatically when you execute `npm run deploy`, so you don't need to build manually.