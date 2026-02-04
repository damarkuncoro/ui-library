# 📜 Constitution Specification v0.1

**Styling Constitution Engine (SCE)**

---

## 1️⃣ Format Definition

### Syntax

```css
@constitution {
  <property> = <value>;
  <property> = <value>;
  ...
}
```

### Aturan

1. **Global Scope**
   - Semua token bersifat global
   - Tidak boleh nested scope
   - Tidak boleh override

2. **Immutable**
   - Token tidak boleh diubah setelah definisi
   - Hanya boleh diperbarui melalui versi baru

3. **Type-Safe**
   - Setiap token harus punya tipe data jelas
   - Tidak boleh tipe `any`

---

## 2️⃣ Property Categories

### Color Properties

```css
@constitution {
  /* Primary Colors */
  color.primary = #e11d48;
  color.secondary = #6b7280;
  color.tertiary = #64748b;
  
  /* Semantic Colors */
  color.success = #10b981;
  color.warning = #f59e0b;
  color.danger = #ef4444;
  color.info = #3b82f6;
  
  /* Neutral Colors */
  color.surface = #0f172a;
  color.background = #18181b;
  color.border = #1e293b;
  color.text = #f8fafc;
  color.text-muted = #94a3b8;
}
```

### Spacing Properties

```css
@constitution {
  /* Base Spacing */
  space.0 = 0;
  space.1 = 0.25rem;
  space.2 = 0.5rem;
  space.3 = 0.75rem;
  space.4 = 1rem;
  space.5 = 1.25rem;
  space.6 = 1.5rem;
  space.8 = 2rem;
  space.10 = 2.5rem;
  space.12 = 3rem;
  space.16 = 4rem;
  space.20 = 5rem;
  space.24 = 6rem;
  
  /* Padding */
  padding.xs = 0.5rem;
  padding.sm = 0.75rem;
  padding.md = 1rem;
  padding.lg = 1.5rem;
  padding.xl = 2rem;
  padding.2xl = 2.5rem;
  
  /* Margin */
  margin.xs = 0.5rem;
  margin.sm = 0.75rem;
  margin.md = 1rem;
  margin.lg = 1.5rem;
  margin.xl = 2rem;
  margin.2xl = 2.5rem;
}
```

### Typography Properties

```css
@constitution {
  /* Font Sizes */
  text.xs = 0.75rem;
  text.sm = 0.875rem;
  text.base = 1rem;
  text.lg = 1.125rem;
  text.xl = 1.25rem;
  text.2xl = 1.5rem;
  text.3xl = 1.875rem;
  text.4xl = 2.25rem;
  
  /* Font Weights */
  font.light = 300;
  font.normal = 400;
  font.medium = 500;
  font.semibold = 600;
  font.bold = 700;
  font.extrabold = 800;
}
```

### Border Properties

```css
@constitution {
  /* Border Radius */
  radius.none = 0;
  radius.sm = 0.125rem;
  radius.md = 0.375rem;
  radius.lg = 0.5rem;
  radius.xl = 0.75rem;
  radius.full = 9999px;
  
  /* Border Width */
  border.thin = 1px;
  border.normal = 2px;
  border.thick = 3px;
}
```

### Shadow Properties

```css
@constitution {
  /* Shadows */
  shadow.sm = 0 1px 2px 0 rgb(0 0 0 / 0.05);
  shadow.md = 0 4px 6px -1px rgb(0 0 0 / 0.1);
  shadow.lg = 0 10px 15px -3px rgb(0 0 0 / 0.1);
  shadow.xl = 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

---

## 3️⃣ Value Types

### Color Values

```css
/* Hex Color */
color.primary = #e11d48;

/* RGB Color */
color.primary = rgb(225, 29, 72);

/* RGBA Color */
color.primary = rgba(225, 29, 72, 1);

/* HSL Color */
color.primary = hsl(221, 83%, 53%);
```

### Spacing Values

```css
/* Rem Units */
space.md = 1rem;

/* Pixel Units */
space.md = 16px;

/* Em Units */
space.md = 1em;

/* Zero */
space.0 = 0;
```

### Typography Values

```css
/* Rem Units */
text.base = 1rem;

/* Pixel Units */
text.base = 16px;

/* Em Units */
text.base = 1em;
```

---

## 4️⃣ Naming Conventions

### Property Naming

```
<category>.<name>
```

Contoh:
- `color.primary`
- `space.md`
- `radius.lg`

### Value Naming

```
<scale>.<size>
```

Contoh:
- `space.0`, `space.1`, `space.2`
- `text.xs`, `text.sm`, `text.md`
- `radius.sm`, `radius.md`, `radius.lg`

---

## 5️⃣ Versioning

### Format

```
v<major>.<minor>.<patch>
```

### Rules

- **Major**: Perubahan breaking ke constitution format
- **Minor**: Penambahan properti baru
- **Patch**: Perbaikan nilai token

### Contoh

- `v0.1.0` → `v0.2.0` (tambah properti baru)
- `v0.2.0` → `v0.2.1` (perbaiki nilai)
- `v0.2.0` → `v1.0.0` (breaking change)

---

## 6️⃣ Validation Rules

### Required Properties

Setiap constitution **harus** punya:

- [x] Minimal satu color property
- [x] Minimal satu spacing property
- [x] Minimal satu typography property

### Forbidden Patterns

❌ **Tidak boleh**:

- Inline values (kecuali 0)
- Unit liar (kecuali rem, px, em)
- Dynamic values
- JavaScript expressions

✅ **Boleh**:

- Named tokens
- CSS variables
- Predefined values

---

## 7️⃣ Migration Guide

### Dari v0.0 ke v0.1

**Breaking Changes**:

Tidak ada breaking changes.

**New Features**:

- Tambahkan kategori properti baru
- Dukungan untuk unit tambahan

**Migration Steps**:

1. Update format ke `@constitution { ... }`
2. Ganti inline values dengan named tokens
3. Validasi semua properti

---

## 8️⃣ Examples

### Minimal Constitution

```css
@constitution {
  color.primary = #e11d48;
  color.surface = #0f172a;
  space.md = 1rem;
  radius.md = 0.5rem;
}
```

### Complete Constitution

```css
@constitution {
  /* Colors */
  color.primary = #e11d48;
  color.secondary = #6b7280;
  color.tertiary = #64748b;
  color.success = #10b981;
  color.warning = #f59e0b;
  color.danger = #ef4444;
  color.info = #3b82f6;
  color.surface = #0f172a;
  color.background = #18181b;
  color.border = #1e293b;
  color.text = #f8fafc;
  color.text-muted = #94a3b8;
  
  /* Spacing */
  space.0 = 0;
  space.1 = 0.25rem;
  space.2 = 0.5rem;
  space.3 = 0.75rem;
  space.4 = 1rem;
  space.5 = 1.25rem;
  space.6 = 1.5rem;
  space.8 = 2rem;
  space.10 = 2.5rem;
  space.12 = 3rem;
  space.16 = 4rem;
  space.20 = 5rem;
  space.24 = 6rem;
  padding.xs = 0.5rem;
  padding.sm = 0.75rem;
  padding.md = 1rem;
  padding.lg = 1.5rem;
  padding.xl = 2rem;
  padding.2xl = 2.5rem;
  margin.xs = 0.5rem;
  margin.sm = 0.75rem;
  margin.md = 1rem;
  margin.lg = 1.5rem;
  margin.xl = 2rem;
  margin.2xl = 2.5rem;
  
  /* Typography */
  text.xs = 0.75rem;
  text.sm = 0.875rem;
  text.base = 1rem;
  text.lg = 1.125rem;
  text.xl = 1.25rem;
  text.2xl = 1.5rem;
  text.3xl = 1.875rem;
  text.4xl = 2.25rem;
  font.light = 300;
  font.normal = 400;
  font.medium = 500;
  font.semibold = 600;
  font.bold = 700;
  font.extrabold = 800;
  
  /* Borders */
  radius.none = 0;
  radius.sm = 0.125rem;
  radius.md = 0.375rem;
  radius.lg = 0.5rem;
  radius.xl = 0.75rem;
  radius.full = 9999px;
  border.thin = 1px;
  border.normal = 2px;
  border.thick = 3px;
  
  /* Shadows */
  shadow.sm = 0 1px 2px 0 rgb(0 0 0 / 0.05);
  shadow.md = 0 4px 6px -1px rgb(0 0 0 / 0.1);
  shadow.lg = 0 10px 15px -3px rgb(0 0 0 / 0.1);
  shadow.xl = 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

---

## ✅ Checklist

Sebelum menggunakan constitution:

- [x] Format valid (`@constitution { ... }`)
- [x] Semua properti punya tipe jelas
- [x] Tidak ada inline values (kecuali 0)
- [x] Semua unit valid (rem, px, em)
- [x] Naming konsisten
- [x] Minimal satu properti per kategori
- [x] Version tercatat

---

**Versi**: v0.1
**Status**: Production Ready