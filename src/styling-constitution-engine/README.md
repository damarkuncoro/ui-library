# 🧩 Styling Constitution Engine (SCE)

**Meta-Architecture Compatible**

> **Nama kerja**: `Styling Constitution Engine (SCE)`
> *A deterministic, contract-driven styling engine.*

---

## 1️⃣ Tujuan Utama (Non-Negotiable)

Styling Engine ini **harus**:

1. **Deterministic**
   Input sama → output CSS **selalu sama**

2. **Contract-Driven**
   Tidak ada styling tanpa kontrak

3. **Constitutional**
   Semua nilai berasal dari konstitusi (token)

4. **Runtime-Free**
   Tidak ada JS di browser

5. **AI-Readable**
   Bisa dipahami tanpa visual context

---

## 2️⃣ Boundary of Responsibility

❌ **Bukan tugas engine**

* Layout logic (grid/flex decision)
* Component behavior
* Animation timeline kompleks

✅ **Tugas engine**

* Validasi kontrak styling
* Resolusi token
* Generate CSS sah

---

## 3️⃣ Core Layers (Wajib Ada)

```
┌────────────────────────────┐
│ Philosophy Layer           │  ← prinsip
├────────────────────────────┤
│ Constitution Layer         │  ← token
├────────────────────────────┤
│ Contract Layer             │  ← public API
├────────────────────────────┤
│ Governance Layer           │  ← validator
├────────────────────────────┤
│ Compilation Engine         │  ← compiler
├────────────────────────────┤
│ Output Layer               │  ← CSS
└────────────────────────────┘
```

---

## 4️⃣ Constitution Layer (Design Constitution)

### Format v0.1 (CSS-Native)

```css
@constitution {
  color.primary = #e11d48;
  color.surface = #0f172a;
  space.sm = 0.75rem;
  space.md = 1rem;
  radius.md = 0.5rem;
}
```

### Aturan

* ❌ Tidak boleh inline value
* ❌ Tidak boleh unit liar
* ✅ Token bersifat global & immutable

---

## 5️⃣ Contract Layer (Styling API)

### Bentuk Kontrak

```text
<property>-<token>
```

Contoh:

* `bg-primary`
* `text-surface`
* `px-md`
* `rounded-md`

---

### Mapping Kontrak → Properti CSS

| Contract    | CSS                |
| ----------- | ------------------ |
| `bg-*`      | `background-color` |
| `text-*`    | `color`            |
| `px-*`      | `padding-inline`   |
| `py-*`      | `padding-block`    |
| `rounded-*` | `border-radius`    |

---

## 6️⃣ Governance Rules (Enforcement)

### Valid Contract

```html
<div class="bg-primary px-md py-sm rounded-md">
```

### Invalid Contract

```html
<div class="bg-[#123456] p-[13px]">
```

### Error Output (Spec)

```json
{
  "error": "INVALID_CONTRACT",
  "class": "p-[13px]",
  "reason": "Inline values are forbidden by constitution"
}
```

---

## 7️⃣ Compilation Engine (Logical Flow)

```
INPUT (HTML / JSON)
        ↓
Parse class list
        ↓
Validate contract
        ↓
Resolve token
        ↓
Generate atomic CSS
```

---

## 8️⃣ Output CSS Spec

### Output harus:

* Atomic
* Stateless
* Predictable

```css
.bg-primary {
  background-color: var(--color-primary);
}

.px-md {
  padding-inline: var(--space-md);
}
```

---

## 9️⃣ AI-Readable Contract Format (Optional tapi Wajib 😄)

```json
{
  "node": "button",
  "style": [
    "bg-primary",
    "text-surface",
    "px-md",
    "py-sm",
    "rounded-md"
  ]
}
```

➡️ Ini **bukan styling**, ini **deklarasi hukum UI**.

---

## 🔒 Non-Goals v0.1

* Responsive variants
* Dark mode
* Animation
* Plugin system

➡️ Semua itu **v0.2+**

---

## ✅ Definition of Done (Step 1)

Step 1 **selesai** kalau:

* [x] Constitution format jelas
* [x] Contract naming konsisten
* [x] Governance rules tertulis
* [x] Compilation flow pasti
* [x] Output CSS deterministic

---

## 📚 Dokumentasi Lengkap

Lihat dokumentasi lengkap di:

* [Constitution Spec](./CONSTITUTION_SPEC.md)
* [Contract Spec](./CONTRACT_SPEC.md)
* [Governance Spec](./GOVERNANCE_SPEC.md)
* [Compilation Engine](./COMPILATION_ENGINE.md)
* [Output Spec](./OUTPUT_SPEC.md)