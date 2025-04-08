export default function Header() {
    return (
      <header className="flex items-center justify-between px-6 py-4 border-b border-surface bg-background">
        <div className="text-2xl font-bold text-primary">Fireboost</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-glow">Blog</a>
          <a href="#" className="hover:text-glow">Reviews</a>
          <a href="#" className="hover:text-glow">Tutorials</a>
          <a href="#" className="hover:text-glow">Our Games</a>
          <a href="#" className="hover:text-glow">My Account</a>
        </nav>
        <div className="text-sm">🌐</div>
      </header>
    );
  }