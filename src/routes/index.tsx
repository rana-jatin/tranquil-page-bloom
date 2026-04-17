import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wind, Sparkles, BookOpen, Heart, ArrowRight, Bell, Moon,
  Compass, Home, User, Search, Bookmark, ChevronRight, Sun,
} from "lucide-react";

import heroImg from "@/assets/hero-dawn.jpg";
import cardMindful from "@/assets/card-mindful.jpg";
import cardJournal from "@/assets/card-journal.jpg";
import cardNutrition from "@/assets/card-nutrition.jpg";
import cardForest from "@/assets/card-forest.jpg";
import cardRest from "@/assets/card-rest.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const moods = [
  { key: "anxious", label: "Anxious", emoji: "🌧" },
  { key: "sad", label: "Sad", emoji: "🌫" },
  { key: "neutral", label: "Calm", emoji: "🌤" },
  { key: "happy", label: "Bright", emoji: "☀️" },
  { key: "excited", label: "Glowing", emoji: "✨" },
];

const quickActions = [
  { icon: Wind, label: "Breathe", duration: "3 min", progress: 4, kind: "Breathwork" },
  { icon: Sparkles, label: "Meditate", duration: "10 min", progress: 5, kind: "Stillness" },
  { icon: BookOpen, label: "Journal", duration: "5 min", progress: 3, kind: "Reflect" },
  { icon: Heart, label: "Gratitude", duration: "3 min", progress: 2, kind: "Practice" },
];

const pastMoods = [
  { emoji: "🙂", text: "Settled after a long walk" },
  { emoji: "😌", text: "Peaceful — family dinner" },
  { emoji: "😊", text: "Lighter after journaling" },
  { emoji: "🤩", text: "Energised by good news" },
];

const freshContent = [
  { tag: "Article", title: "Three grounding rituals for busy mornings", time: "4 min read", img: cardForest },
  { tag: "Audio", title: "Reset your nervous system in two minutes", time: "2 min listen", img: cardMindful },
  { tag: "Video", title: "A calming bedtime routine for deep rest", time: "6 min watch", img: cardRest },
];

const toolkit = [
  { tag: "Mindfulness", title: "Tranquil moments", desc: "Find your inner quiet through curated mindfulness tracks.", cta: "Start listening", img: cardMindful, accent: "sage" as const },
  { tag: "CBT Program", title: "Stress, gently rewired", desc: "An evidence-based CBT companion to soften everyday stress.", cta: "Explore", img: cardForest, accent: "clay" as const },
  { tag: "Nutrition", title: "Nourish, naturally", desc: "Personalised guidance for a body that supports your mind.", cta: "Diet counselling", img: cardNutrition, accent: "sage" as const },
  { tag: "Expert Support", title: "A counsellor, when you need one", desc: "Free, unlimited conversations with caring professionals.", cta: "Book a session", img: cardRest, accent: "clay" as const },
];

const week = [
  { d: "M", emoji: "🙂" },
  { d: "T", emoji: "😌" },
  { d: "W", emoji: "😟" },
  { d: "T", emoji: "🙂" },
  { d: "F", emoji: null },
  { d: "S", emoji: null },
  { d: "S", emoji: null },
];

function Index() {
  const [mood, setMood] = useState("neutral");

  return (
    <main className="min-h-screen pb-32">
      {/* Top nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sun className="h-4 w-4" strokeWidth={1.6} />
          </div>
          <span className="font-display text-xl tracking-tight text-ink">Sereno</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-ink-soft transition hover:text-ink" aria-label="Theme">
            <Moon className="h-4 w-4" strokeWidth={1.6} />
          </button>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-card text-ink-soft transition hover:text-ink" aria-label="Notifications">
            <Bell className="h-4 w-4" strokeWidth={1.6} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
          </button>
          <div className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground">J</div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="mt-8 overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-soft)]">
          <div className="relative h-[360px] sm:h-[420px]">
            <img
              src={heroImg}
              alt="Soft sunrise over distant hills"
              width={1920}
              height={1024}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
            <div className="absolute inset-0 flex flex-col justify-end px-8 pb-12 sm:px-14 sm:pb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">Good evening</p>
              <h1 className="mt-2 font-display text-5xl font-light text-ink sm:text-6xl">
                Welcome back, <em className="font-normal italic text-primary">Jatin</em>
              </h1>
              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm text-ink-soft backdrop-blur">
                <span className="text-base">🌱</span>
                <span>6-day streak — gently growing</span>
              </div>
            </div>
          </div>

          {/* Daily affirmation */}
          <div className="border-t border-border/60 px-8 py-7 sm:px-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Daily affirmation</p>
            <p className="mt-3 font-display text-2xl font-light leading-relaxed text-ink text-balance sm:text-3xl">
              “तमेव शरणं गच्छ सर्वभावेन भारत — Take refuge with all your heart.”
            </p>
            <p className="mt-2 text-sm text-ink-soft">Bhagavad Gita · Chapter 18, Verse 62</p>
          </div>
        </section>

        {/* Mood */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft">Check in</p>
              <h2 className="mt-1 font-display text-3xl font-light text-ink">How are you, really?</h2>
            </div>
            <span className="hidden text-sm text-ink-soft sm:block">A small pause makes a big difference.</span>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-3 rounded-3xl bg-card p-3 shadow-[var(--shadow-soft)]">
            {moods.map((m) => {
              const active = mood === m.key;
              return (
                <button
                  key={m.key}
                  onClick={() => setMood(m.key)}
                  className={[
                    "group flex flex-col items-center gap-2 rounded-2xl px-3 py-5 transition-all",
                    active
                      ? "bg-primary text-primary-foreground shadow-[var(--shadow-warm)]"
                      : "hover:bg-muted",
                  ].join(" ")}
                >
                  <span className="text-3xl transition-transform group-hover:scale-110">{m.emoji}</span>
                  <span className={`text-xs font-medium ${active ? "text-primary-foreground" : "text-ink-soft"}`}>
                    {m.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-12">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-light text-ink">A small ritual for now</h2>
            <a href="#" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
              View all <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {quickActions.map((a) => (
              <button
                key={a.label}
                className="group relative overflow-hidden rounded-2xl bg-card p-5 text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-soft text-primary">
                    <a.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-ink-soft">{a.kind}</span>
                </div>
                <div className="mt-6">
                  <h3 className="font-display text-xl font-normal text-ink">{a.label}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{a.duration}</p>
                </div>
                <div className="mt-5">
                  <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(a.progress / 7) * 100}%` }} />
                  </div>
                  <p className="mt-2 text-[11px] text-ink-soft">{a.progress} of 7 this week</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Past moods */}
        <section className="mt-12">
          <h2 className="font-display text-2xl font-light text-ink">Recent reflections</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {pastMoods.map((p, i) => (
              <button
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm text-ink transition hover:border-primary/40 hover:bg-sage-soft/40"
              >
                <span>{p.emoji}</span>
                <span>{p.text}</span>
                <ChevronRight className="h-3.5 w-3.5 text-ink-soft" />
              </button>
            ))}
          </div>
        </section>

        {/* Fresh content */}
        <section className="mt-14">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">What's fresh</p>
              <h2 className="mt-1 font-display text-3xl font-light text-ink">Slow reads & soft sounds</h2>
            </div>
            <span className="text-sm text-ink-soft">1 / 5</span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {freshContent.map((c) => (
              <article
                key={c.title}
                className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-ink backdrop-blur">{c.tag}</span>
                  <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-ink backdrop-blur transition hover:bg-card" aria-label="Save">
                    <Bookmark className="h-4 w-4" strokeWidth={1.6} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-normal leading-snug text-ink text-balance">{c.title}</h3>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-ink-soft">{c.time}</span>
                    <span className="inline-flex items-center gap-1 text-primary">
                      Open <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Toolkit */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-light text-ink">Your wellness toolkit</h2>
          <p className="mt-1 text-ink-soft">Gentle tools, ready when you are.</p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {toolkit.map((t) => (
              <article
                key={t.title}
                className="group relative overflow-hidden rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-warm)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="max-w-[60%]">
                    <span className={`text-[11px] font-medium uppercase tracking-[0.22em] ${t.accent === "sage" ? "text-primary" : "text-accent"}`}>
                      {t.tag}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-normal text-ink">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.desc}</p>
                    <button
                      className={[
                        "mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition",
                        t.accent === "sage"
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-accent text-accent-foreground hover:bg-accent/90",
                      ].join(" ")}
                    >
                      {t.cta} <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl sm:h-36 sm:w-36">
                    <img src={t.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Week mood */}
        <section className="mt-14 rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)] sm:p-10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft">This week</p>
              <h2 className="mt-1 font-display text-2xl font-light text-ink">A gentle glance at your rhythm</h2>
            </div>
            <span className="rounded-full bg-sage-soft px-3 py-1 text-xs font-medium text-primary">57% logged</span>
          </div>

          <div className="mt-8 grid grid-cols-7 gap-3">
            {week.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <span className="text-xs font-medium text-ink-soft">{d.d}</span>
                <div
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-full text-xl transition",
                    d.emoji ? "bg-sand" : "border border-dashed border-border bg-transparent",
                  ].join(" ")}
                >
                  {d.emoji ?? <span className="h-1 w-1 rounded-full bg-border" />}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "57%" }} />
          </div>

          <blockquote className="mt-8 border-l-2 border-accent pl-5">
            <p className="font-display text-lg font-light italic leading-relaxed text-ink text-balance">
              “Your time is limited, so don't waste it living someone else's life.”
            </p>
            <footer className="mt-2 text-sm text-ink-soft">— Steve Jobs</footer>
          </blockquote>
        </section>

        {/* Search */}
        <section className="mt-10">
          <div className="flex items-center gap-3 rounded-full bg-card px-5 py-4 shadow-[var(--shadow-soft)]">
            <Search className="h-4 w-4 text-ink-soft" strokeWidth={1.6} />
            <input
              placeholder="Search practices, articles, sounds…"
              className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-soft focus:outline-none"
            />
            <kbd className="rounded-md border border-border bg-muted px-2 py-1 text-[10px] text-ink-soft">⌘K</kbd>
          </div>
        </section>
      </div>

      {/* Bottom nav */}
      <nav className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border/60 bg-card/90 p-1.5 shadow-[var(--shadow-warm)] backdrop-blur">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: Compass, label: "Discover", active: false },
          { icon: User, label: "Profile", active: false },
        ].map((n) => (
          <button
            key={n.label}
            className={[
              "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition",
              n.active ? "bg-primary text-primary-foreground" : "text-ink-soft hover:text-ink",
            ].join(" ")}
          >
            <n.icon className="h-4 w-4" strokeWidth={1.6} />
            {n.label}
          </button>
        ))}
      </nav>

      {/* Floating chat */}
      <button className="fixed bottom-8 right-6 z-40 flex items-center gap-3 rounded-full bg-ink py-2 pl-5 pr-2 text-sm font-medium text-background shadow-[var(--shadow-warm)] transition hover:scale-[1.02]">
        Chat with Sereno
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Sparkles className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </button>
    </main>
  );
}
