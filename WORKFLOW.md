# Flux de Treball i Normativa del Repositori

Aquest document descriu els estàndards de col·laboració del nostre equip.

## 🛡️ 1. Política de Branques (Branching Strategy)
* **`main` (Producció):** Aquesta branca conté la versió estable que està publicada a Internet.
    * **Està protegida:** No es permet fer `push` directament a `main`.
    * **Requereix aprovació:** Tot canvi ha d'arribar via Pull Request i ha de passar els tests automàtics (CI).
* **Branques de funcionalitat (`feature/*`):** Es creen per desenvolupar noves millores (ex: `feature/nova-galeria`).
* **Branques de correcció (`fix/*`):** Es creen per arreglar errors (ex: `fix/error-css-mobil`).

## 🔁 2. Cicle de Desenvolupament (SDLC)
1.  Sincronitzar `main` localment (`git pull`).
2.  Crear una branca nova (`git checkout -b feature/el-meu-canvi`).
3.  Programar i fer commits descriptius.
4.  Pujar la branca (`git push`).
5.  Obrir un **Pull Request (PR)** a GitHub contra `main`.
6.  Esperar la validació de la **Integració Contínua (CI)**.
7.  Un cop aprovat, fusionar (Merge) el PR.

## 🤖 3. Automatització (GitHub Actions)
* **Integració Contínua (CI):** S'executa a cada PR. Utilitza `stylelint` i `htmlhint` per assegurar la qualitat del codi.
* **Desplegament Continu (CD):** S'executa automàticament quan es fusiona un PR a `main`. Publica la web a GitHub Pages.
