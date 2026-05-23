"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Sparkles, Loader2 } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What kind of role is he looking for next?",
  "Walk me through his work on IRAS.",
  "Why hire him over another full-stack engineer?",
  "How does he think about Java vs .NET?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, streaming]);

  async function send(text: string) {
    if (!text.trim() || streaming) return;
    setError(null);

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`Server returned ${res.status}`);
      }

      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          const last = copy[copy.length - 1];
          if (last && last.role === "assistant") {
            copy[copy.length - 1] = {
              role: "assistant",
              content: last.content + chunk,
            };
          }
          return copy;
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setStreaming(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="relative isolate flex min-h-[100svh] flex-col">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div
        className="aurora-blob animate-float-slow -z-10"
        style={{
          top: "-15%",
          left: "20%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, oklch(0.55 0.22 290 / 0.4), transparent 70%)",
        }}
      />

      {/* Top bar */}
      <header className="border-b border-foreground/10 bg-background/60 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-violet-300" />
            Ask Lum&apos;s resume
          </div>
          <div className="w-12" />
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
          {messages.length === 0 ? (
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ask anything about{" "}
                  <span className="text-gradient">Lum Soon Keong</span>.
                </h1>
                <p className="text-foreground/60">
                  Powered by Claude Opus 4.7. Answers grounded in the resume on
                  this site. No hallucinated experience.
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-medium uppercase tracking-widest text-foreground/40">
                  Try one of these
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="group rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-left text-sm text-foreground/80 transition hover:border-foreground/20 hover:bg-foreground/[0.06]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-md bg-foreground px-4 py-3 text-sm text-background"
                        : "max-w-[85%] rounded-2xl rounded-bl-md border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm text-foreground/90 backdrop-blur"
                    }
                  >
                    {m.content || (
                      <Loader2 className="h-4 w-4 animate-spin text-foreground/40" />
                    )}
                  </div>
                </div>
              ))}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 border-t border-foreground/10 bg-background/80 backdrop-blur">
        <form
          onSubmit={onSubmit}
          className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-4 sm:px-6"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={streaming}
            placeholder="Ask about his experience, fit, comp, anything..."
            className="flex-1 rounded-full border border-foreground/10 bg-foreground/5 px-5 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-foreground/30 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={streaming || !input.trim()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send"
          >
            {streaming ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
