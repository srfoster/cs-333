# CS-333: Data Structures and Algorithms Textbook

An interactive textbook for CS-333 built using the `@srfoster/textbook-lib` framework.

## Overview

This textbook covers fundamental data structures and algorithms including:
- Algorithm analysis and Big-O notation
- Basic data structures (arrays, linked lists, stacks, queues)
- Trees and graphs
- Sorting and searching algorithms
- Advanced data structures

## Development

### Prerequisites
- Node.js 18+ 
- npm

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
cs-333-textbook/
├── public/
│   └── textbook/           # Textbook content (Markdown & YAML)
│       ├── index.md        # Main textbook page
│       └── content/        # Chapter content
│           └── chapter-01/ # Chapter 1 materials
│               ├── concept-map.yml
│               └── big-o-definition.yml
├── src/
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   ├── compiled/           # Auto-generated (git-ignored)
│   └── services/
│       └── questionLoader.js # CS-333 specific question loader
└── scripts/
    └── compile-content.js  # Build-time content compiler
```

## Content Management

### Adding Content

1. **Markdown Pages**: Add `.md` files to `public/textbook/`
2. **Exam Questions**: Add `.yml` files following the question format
3. **Concept Maps**: Define chapter structure in `concept-map.yml` files

### Question Format

```yaml
id: "unique-id"
type: "short-answer"
chapter: 1
question: "Your question here?"
answer: "Main answer"
answer_kindergarten: "Simple explanation"
answer_3rd_grade: "Elementary explanation"
answer_7th_grade: "Middle school explanation"
answer_high_school: "High school explanation"
answer_undergraduate: "College-level explanation"
topics:
  - "Topic 1"
  - "Topic 2"
vocab_answer:
  - word: "term"
    definition: "definition"
```

## Deployment

This project is configured for GitHub Pages deployment:

1. Build: `npm run build`
2. Deploy the `dist/` folder to the `gh-pages` branch
3. Configure GitHub Pages to serve from the `gh-pages` branch

The base path is set to `/cs-333-textbook/` for GitHub Pages.

## Library Usage

This project uses `@srfoster/textbook-lib` which provides:
- React components (TextbookPage, ExamDashboard, ExamInterface, etc.)
- Content services (compiledContentService, resourceCache)
- Styling and utilities

The library is linked locally during development via `file:../cis-110-ai-redo/textbook-lib`.

## License

Educational use only.
# cs-333
