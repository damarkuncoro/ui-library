# 🔁 Mapping Tailwind v4 → Meta Architecture

> **Premis**
> Tailwind v4 bukan lagi "framework CSS", tapi **styling engine berbasis kontrak**.
> Meta Architecture = **governance layer** yang mengatur bagaimana sistem boleh dibangun.

➡️ Jadi Tailwind v4 **bisa diposisikan sebagai Constitutional Styling Layer**.

---

## 🏛️ Layer Mapping (High-Level)

| Meta Architecture Layer | Peran                 | Padanan di Tailwind v4                   |
| ----------------------- | --------------------- | ---------------------------------------- |
| **Philosophy Layer**    | Nilai & prinsip       | Utility-first, CSS-first, zero-runtime   |
| **Constitution Layer**  | Aturan absolut        | `@theme`, `@layer`, design tokens        |
| **Contract Layer**      | Kesepakatan sistem    | Utility class sebagai *styling contract* |
| **Governance Engine**   | Enforcement           | Oxide Engine (Rust)                      |
| **Execution Layer**     | Implementasi UI       | HTML + utility classes                   |
| **Audit / Evolution**   | Konsistensi & evolusi | Backward-compatible utilities            |

---

## 🧠 1. Philosophy Layer → Tailwind Principles

**Meta Architecture**
* Deterministic
* Declarative
* Immutable contract

**Tailwind v4**
* Class = **deklarasi niat**
* CSS bukan hasil, tapi **aturan**
* Tidak ada magic runtime

```html
<button class="px-4 py-2 bg-primary text-white">
```

➡️ Ini bukan "styling", tapi **pernyataan konstitusional**:
> "Button primary harus terlihat seperti ini."

---

## 🧾 2. Constitution Layer → `@theme` & Tokens

**Meta Architecture**
> Konstitusi = aturan yang *tidak boleh dilanggar*

**Tailwind v4**

```css
@theme {
  --color-primary: #e11d48;
  --radius-md: 0.5rem;
  --space-sm: 0.75rem;
}
```

📌 Ini setara dengan:
* Design Constitution
* Single source of truth
* Immutable by default

➡️ Utility **tidak boleh menciptakan nilai baru**, hanya **mengonsumsi token**.

---

## 🤝 3. Contract Layer → Utility Classes

| Utility      | Kontrak yang Diwakili |
| ------------ | --------------------- |
| `bg-primary` | Warna dari konstitusi |
| `p-sm`       | Spacing sah           |
| `rounded-md` | Radius yang disetujui |
| `text-muted` | Semantic text role    |

➡️ **Class ≠ CSS**
Class = **interface kontrak**

```html
<div class="card p-md bg-surface rounded-lg">
```

---

## ⚖️ 4. Governance Engine → Oxide (Rust)

**Meta Architecture**
> Governance = yang menolak pelanggaran

**Tailwind v4**
* Engine Rust
* Tidak generate class di luar kontrak
* Deterministic output

➡️ Tidak ada:
* Inline random value
* Spacing liar
* Color ad-hoc

```html
<!-- ❌ Anti-konstitusi -->
<div class="p-[13px] bg-[#123456]">
```

➡️ Dalam meta-architecture: **INVALID CONTRACT**

---

## 🏗️ 5. Execution Layer → HTML sebagai Manifest

HTML sekarang **bukan markup**, tapi:
> **Manifest deklaratif dari kontrak UI**

```html
<article class="surface p-lg space-y-md">
  <h1 class="text-title">Judul</h1>
  <p class="text-body">Konten</p>
</article>
```

➡️ Bisa dibaca oleh:
* Browser
* AI
* Linter
* Governance engine

---

## 🔍 6. Audit Layer → Evolusi & Konsistensi

**Tailwind v4**
* Backward compatible
* Token bisa di-evolve
* Utility tetap stabil

**Meta Architecture**
* Sistem boleh tumbuh
* Konstitusi tidak boleh rusak

```css
@theme {
  --color-primary: oklch(0.62 0.25 25);
}
```

➡️ Semua UI ikut berubah **tanpa rewrite class**

---

## 🤖 7. AI Compatibility

Karena:
* Class = kontrak
* Token = konstitusi
* CSS = deklaratif

➡️ AI bisa:
* Generate UI tanpa melanggar aturan
* Refactor UI tanpa konteks visual
* Audit konsistensi design system

```json
{
  "component": "Button",
  "contract": ["bg-primary", "text-on-primary", "px-md", "py-sm"]
}
```

---

## 🧩 Ringkasan Mapping Inti

```
Meta Architecture     →     Tailwind v4
------------------------------------------------
Philosophy            → Utility-first doctrine
Constitution          → @theme tokens
Contract              → Utility classes
Governance Engine     → Oxide (Rust)
Execution             → HTML class manifest
Audit & Evolution     → Token mutation, stable API
```
