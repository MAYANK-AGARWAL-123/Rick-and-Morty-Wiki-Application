# Rick and Morty Character Encyclopedia

This is a web-based encyclopedia of characters from the Rick and Morty universe. It uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character data and provides a responsive UI with both a character gallery and detailed character views.

## 🚀 Features
- Paginated character gallery (6 per page)
- Character details with full info
- Dark/Light mode toggle
- Live updating footer clock
- Random character button

## 🛠 Setup Instructions
1. Clone the repository or download the files.
2. Make sure the directory structure looks like this:
   ```
   project/
   ├── index.html
   ├── character.html
   ├── styles.css
   ├── main.js
   │   detail.js
   │   clock.js
   └── README.md
   ```
3. Open `index.html` in a web browser to get started.

## 📸 Screenshots
### Main Gallery Page
![Gallery Screenshot](./Screenshot%202025-04-13%20183356.png)

### Character Detail Page
![Detail Screenshot](./Screenshot%202025-04-13%20183434.png)

## 🧠 Challenges Faced
- **Pagination Logic**: The API returns 20 results by default, but we wanted 6 per page. Solved by slicing the results.
- **Live Clock**: Needed to be shared across pages. Solved by modularizing into `clock.js` and reusing.
- **Dark Mode Styling**: Handled with a body class toggle and scoped CSS.
- **Episode Display**: Original plan was to fetch episode names. To simplify, initially displayed count, can enhance later.

---
Feel free to contribute or expand this project with new features!
