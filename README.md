# Movie Collection Web Application

## Project Setup Instruction

1. **Repository Setup (Repository Owner):**
- Create the project directory
```bash
mkdir movie-collection
cd movie-collection
```
- Initialize a Git repository
```bash
git init
```
- Create the project structure:
```bash
mkdir css js assets images
mkdir js/data
touch index.html
touch css/styles.css
touch js/app.js js/data/movies.json
```
- Create a Github repository and push the initial structure:
```bash
git add .
git commit -m "Initial project structure"
git branch -M main
git remode add origin [repository-url]
git psuh -u origin main
```
2. **Clone the Repository (Collaborator):**
```bash
git clone[repository-url]
cd movie movie-collection
```
- Create a development branch
```bash
git checkout -b development
```

## Available CLI command

### **Project Setup**
- `mkdir movie-collection` - Create the project directory.
- `cd movie-collection` - Navigate into the project folder.
- `mkdir css js assets images js/data` - Create the directory structure.
- `touch index.html css/style.css js/app.js js/data/movies.json` - Create required files.

### **Git Repository Setup**
- `git init` - Initialize a Git repository.
- `git remote add origin [repository-url]` - Connect to the remote repository.
- `git add .` - Stage changes for commit.
- `git commit -m "Initial project structure"` - Commit the initial setup.
- `git push -u origin main` - Push the initial project structure to GitHub.

### **Git Workflow**
- `git checkout -b feature/[feature-name]` - Create and switch to a new branch.
- `git add .` - Stage changes for commit.
- `git commit -m "Descriptive message"` - Commit staged changes.
- `git push origin [branch-name]` - Push changes to the remote repository.
- `git pull origin [branch-name]` - Pull updates from the remote branch.
- `git fetch origin` - Fetch all remote branches.


## Git Workflow Steps

1. **Repository Setup:**
   Follow the steps under **Project Setup Instructions** to create the directory, initialize Git, and push the initial structure to GitHub.

2. **Clone the Repository:**
   ```bash
   git clone [repository-url]
   cd movie-collection
   ```

3. **Create Feature Branches:**
   ```bash
   git checkout -b feature/[feature-name]
   ```

4. **Implement Feature:**
   Make changes, then stage and commit:
   ```bash
   git add .
   git commit -m "Added feature/[feature-name]"
   ```

5. **Push Changes:**
   ```bash
   git push origin feature/[feature-name]
   ```

6. **Submit Pull Request:**
   - Go to GitHub and create a pull request.
   - Request a review from collaborator.

7. **Merge to Development Branch:**
   Merge the pull request to the `development` branch.


## Feature List and Implementation Details

### **Feature 1: HTML Structure**
- **Description:** Create a grid-based structure to display movie cards.
- **Implementation:**
  - Designed HTML for movie cards.
  - Added classes for movie poster, title, release year, genre, and description.

### **Feature 2: CSS Styling**
- **Description:** Style the movie cards and layout for responsiveness.
- **Implementation:**
  - Used CSS Grid for the layout.
  - Styled movie cards with hover effects.

### **Feature 3: Movie Data Rendering**
- **Description:** Dynamically render movie cards.
- **Implementation:**
  - Loaded movie data using JavaScript.
  - Created DOM elements for each movie and displayed them on the page.

### **Feature 4: Genre Filtering**
- **Description:** Allow users to filter movies by genre.
- **Implementation:**
  - Added a dropdown menu to select genres.
  - Implemented filtering logic using JavaScript.


## Team Member Contributions

### **Student 1:**
- Created the project setup and directory structure.
- Implemented the HTML structure and basic CSS.
- Set up movie data structure
- Contributed to the README documentation.

### **Student 2:**
- Styled the application using advanced CSS techniques.
- Developed the JavaScript functionality for movie rendering.
- Implemented genre filtering logic.
- Contributed to the README documentation.


## Lessons Learned from Collaboration

1. **Communication:** Regular communication was helpful to divide tasks efficiently.
2. **Git Workflow:** Learned the importance of feature branches and how to use pull requests effectively.
3. **Code Reviews:** Peer code reviews improved the quality and maintainability of the code.
4. **Problem-Solving:** Gained experience in resolving merge problem collaboratively.
5. **Time Management:** Proper planning and task allocation helped complete the project within the deadline.