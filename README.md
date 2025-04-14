# 🌿 Visual Binary Search Tree - Frontend

This is the **Angular frontend** for the Visual Binary Search Tree project, built for the DSA Winter 2025 Final Sprint.

The app lets users:
- Enter numbers to construct a Binary Search Tree (BST)
- Choose between a regular or balanced BST
- View the tree visually and as formatted JSON
- Navigate to see previously submitted trees

---

## 🛠 Technologies Used

- Angular 16+
- TypeScript
- HTML & SCSS
- Angular Forms & Router

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/visual-binary-search-tree-frontend.git
cd visual-binary-search-tree-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Dev Server
```bash
ng serve
```

Navigate to: `http://localhost:4200`

> ⚠️ Make sure the backend is running on `http://localhost:8081`

---

## 🌳 Features

### ✅ BST Creator Page
- Input a comma-separated list of numbers
- Toggle to choose a **balanced** or **regular** tree
- Displays the tree as both:
  - A visual component (`TreeVisualComponent`)
  - Pretty-printed JSON

### ✅ Show Previous Trees
- Navigate to the `/previous-trees` page
- Displays a list of all previously submitted trees
- Each entry includes:
  - Submission time
  - Original input
  - Tree structure (formatted JSON)
  - Return button to go back to the main screen

---

## 🧠 Project Structure (Simplified)
```
src/
├── app/
│   ├── components/
│   │   ├── input-numbers/           # Input & submit form
│   │   ├── tree-visual/            # Visual rendering of BST
│   │   ├── previous-trees/         # Past tree submissions
│   │   └── tree-node/              # Recursive tree node view
│   ├── services/
│   │   └── bst.service.ts          # Shared state & API helper
│   └── app.routes.ts               # Routes config
```

---

## 🖼 Sample Usage
- Input: `7, 4, 10, 2, 5`
- Toggle: ✔️ Balanced Tree
- Visual output renders balanced structure
- Previous trees saved and displayed with timestamps

---

## 🙌 Author
**Angie** — Software Development Student @ Keyin College

---

## 📄 License
MIT — feel free to use, adapt, and learn!

