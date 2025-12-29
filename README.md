# TaskSphere - Advanced Todo App

A modern, beautiful task management application built with React and Vite, featuring a stunning glassmorphism UI design.

![TaskSphere](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38bdf8.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff.svg)

## ✨ Features

- **📝 Task Management** - Create, edit, and delete tasks effortlessly
- **✅ Task Completion** - Mark tasks as complete with beautiful animated checkboxes
- **📊 Progress Tracking** - Real-time progress bar showing completion percentage
- **📈 Task Statistics** - View total, active, and completed task counts at a glance
- **🎨 Glassmorphism UI** - Modern glass-effect design with smooth animations
- **🌈 Gradient Accents** - Beautiful color gradients throughout the interface
- **💫 Smooth Animations** - Slide-in and fade-in effects for enhanced UX
- **🎯 Empty State** - Friendly message when no tasks exist
- **🎉 Celebration** - Special message on completing all tasks

## 🚀 Tech Stack

- **React 19.1.1** - Latest React features and hooks
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **RemixIcon** - Additional icon set for enhanced visuals

## 🎨 Design Highlights

- **Glassmorphism Effect** - Frosted glass aesthetic with backdrop blur
- **Custom Checkboxes** - Animated checkboxes with gradient fills
- **Interactive Elements** - Hover effects and scale animations
- **Color-Coded Actions** - Blue for edit, red for delete, green for completion
- **Responsive Layout** - Optimized for various screen sizes

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd advanced-todo

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Header.jsx          # App header with branding and progress
│   ├── TaskDetails.jsx     # Task statistics cards
│   ├── TaskInput.jsx       # Input form for adding tasks
│   └── Tasks.jsx           # Individual task item component
├── assets/                 # Static assets
├── App.jsx                 # Main app component
├── index.css              # Custom styles and animations
└── main.jsx               # App entry point
```

## 🎯 Key Components

### Header

- Displays app branding with gradient title
- Shows active task count
- Animated progress bar with percentage
- Completion celebration message

### TaskDetails

- Three stat cards: Total, Active, Completed
- Color-coded icons with hover effects
- Real-time updates

### TaskInput

- Input field with sparkle icon
- Focus animations
- Add button with hover effects

### Tasks

- Checkbox for completion
- Edit and delete buttons
- Smooth animations
- Strike-through for completed tasks

## 🎨 Custom Styling

The app uses custom CSS utilities defined in `index.css`:

- `.glass` - Main glassmorphism container
- `.glass-card` - Inner glass elements
- `.glass-btn` - Glass-styled buttons
- `.animate-slide-in` - Slide-in animation
- `.animate-fade-in` - Fade-in animation
- Custom checkbox and progress bar styling

## 🌟 Future Enhancements

- [ ] Local storage persistence
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Dark/Light theme toggle
- [ ] Task search and filter
- [ ] Drag and drop reordering
- [ ] Export tasks to file


## 👨‍💻 Author

Built with ❤️ using React and modern web technologies

---

**Productivity Reimagined** 🚀
