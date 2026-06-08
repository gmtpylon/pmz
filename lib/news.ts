import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type NewsFrontmatter = {
  date: string;
  tag: string;
  title: string;
  lead: string;
  img?: string;
  minutes?: string | number;
};

export type NewsArticle = NewsFrontmatter & {
  slug: string;
  locale: string;
  html: string;
};

export type NewsSummary = NewsFrontmatter & {
  slug: string;
  locale: string;
};

const ROOT = path.join(process.cwd(), "content", "news");

function readDir(locale: string): string[] {
  const dir = path.join(ROOT, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

function readArticle(locale: string, slug: string): NewsArticle | null {
  const file =
    [".md", ".mdx"]
      .map((ext) => path.join(ROOT, locale, `${slug}${ext}`))
      .find((p) => fs.existsSync(p)) ?? null;
  if (!file) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as NewsFrontmatter;
  const html = marked.parse(content, { async: false }) as string;
  return { ...fm, slug, locale, html };
}

export function getAllNews(locale: string): NewsSummary[] {
  const slugs = readDir(locale);
  const items = slugs
    .map((slug) => readArticle(locale, slug))
    .filter((x): x is NewsArticle => x !== null)
    .map(({ html: _html, ...rest }) => rest);
  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getNews(locale: string, slug: string): NewsArticle | null {
  return readArticle(locale, slug);
}

export function getAllNewsSlugs(): string[] {
  // Slugs are identical across locales (one slug per article)
  return readDir("ru");
}

export function formatNewsDate(date: string, locale: string): string {
  try {
    return new Date(date).toLocaleDateString(locale === "ru" ? "ru-RU" : "en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return date;
  }
}
