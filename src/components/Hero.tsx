@tailwind base;
@tailwind components;
@tailwind utilities;

/* Definition of the design system. All colors, gradients, fonts, etc should be defined here.
All colors MUST be HSL.
*/

@layer base {
  :root {
    --background: 224 27% 9%;
    --foreground: 210 40% 98%;

    --card: 224 22% 12%;
    --card-foreground: 210 40% 98%;

    --popover: 224 22% 12%;
    --popover-foreground: 210 40% 98%;

    --primary: 167 72% 52%;
    --primary-foreground: 222 47% 11%;

    --secondary: 283 78% 68%;
    --secondary-foreground: 210 40% 98%;

    --muted: 220 16% 16%;
    --muted-foreground: 215 20% 72%;

    --accent: 197 94% 61%;
    --accent-foreground: 222 47% 11%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;

    --border: 220 17% 20%;
    --input: 220 17% 18%;
    --ring: 167 72% 52%;

    --radius: 1rem;
    --terminal-green: 167 72% 52%;
    --terminal-cyan: 189 94% 62%;
    --terminal-purple: 283 78% 68%;
    --terminal-orange: 31 100% 60%;

    --glow-green: 167 72% 52%;
    --glow-cyan: 189 94% 62%;
    --glow-purple: 283 78% 68%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background-image:
      radial-gradient(circle at 20% 20%, rgba(89, 222, 216, 0.12), transparent 30%),
      radial-gradient(circle at 80% 0%, rgba(171, 103, 255, 0.12), transparent 26%),
      linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: auto, auto, 34px 34px, 34px 34px;
    background-attachment: fixed;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(7, 10, 18, 0.08), rgba(7, 10, 18, 0.6));
  }
}

@layer utilities {
  .glow-text-green {
    text-shadow: 0 0 8px hsl(var(--glow-green) / 0.5), 0 0 16px hsl(var(--glow-green) / 0.3);
  }

  .glow-text-cyan {
    text-shadow: 0 0 8px hsl(var(--glow-cyan) / 0.5), 0 0 16px hsl(var(--glow-cyan) / 0.3);
  }

  .glow-text-purple {
    text-shadow: 0 0 8px hsl(var(--glow-purple) / 0.5), 0 0 16px hsl(var(--glow-purple) / 0.3);
  }

  .glow-border-green {
    box-shadow: 0 0 15px hsl(var(--glow-green) / 0.2), inset 0 0 15px hsl(var(--glow-green) / 0.05);
  }

  .glow-border-cyan {
    box-shadow: 0 0 15px hsl(var(--glow-cyan) / 0.2), inset 0 0 15px hsl(var(--glow-cyan) / 0.05);
  }

  .terminal-line::before {
    content: '>';
    @apply mr-2 text-primary opacity-70;
  }

  .hover-glow {
    transition: all 0.3s ease;
  }

  .hover-glow:hover {
    box-shadow: 0 0 20px hsl(var(--glow-green) / 0.18), inset 0 0 20px hsl(var(--glow-green) / 0.04);
  }

  .glass-panel {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.18);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.28);
    backdrop-filter: blur(14px);
  }

  .project-thumb {
    border: 1px solid rgba(148, 163, 184, 0.18);
    background: rgba(15, 23, 42, 0.75);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  }
}
