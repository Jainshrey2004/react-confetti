# React Confetti Demo

A simple Next.js application demonstrating the `react-confetti` package with a celebration form.

## Description

This project showcases the react-confetti npm package through an interactive form. When users submit the form, colorful confetti falls across the screen for 5 seconds, creating a celebratory effect.

## Features

- Clean, minimal form interface with Name, Email, and Message fields
- Confetti animation triggered on form submission
- 600 confetti pieces 
- Auto-stop after 5 seconds

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shreyj03/react-confetti.git
cd react-confetti
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How It Works

The app uses React's `useState` hook to manage confetti visibility:

1. User fills out the form (Name, Email, Message)
2. On submit, `showConfetti` state is set to `true`
3. Confetti component renders with custom properties:
   - `numberOfPieces={600}` - Dense confetti effect
   - `recycle={false}` - One time fall to avoid loop
   - `gravity={0.3}` - Faster falling speed
4. After 5 seconds, `setTimeout` sets `showConfetti` to `false`
5. Confetti stops

## Acknowledgments

- [react-confetti](https://github.com/alampros/react-confetti) by alampros
- CS 391 Web Development 
