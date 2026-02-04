# 📜 Contract Specification v0.1

**Styling Constitution Engine (SCE)**

---

## 1️⃣ Contract Definition

### Bentuk Kontrak

```text
<property>-<token>
```

### Aturan

1. **Property Prefix**
   - Harus diawali dengan tipe properti
   - Menggunakan tanda hubung `-`

2. **Token Reference**
   - Harus merujuk ke token yang ada di constitution
   - Tidak boleh merujuk ke token yang tidak ada

3. **Case Sensitivity**
   - Semua kontrak **case-sensitive**
   - `bg-primary` ≠ `bg-Primary`

---

## 2️⃣ Property Categories

### Background Properties

```text
bg-<color>
bg-<gradient>
```

Contoh:
- `bg-primary`
- `bg-surface`
- `bg-gradient-primary`

### Text Properties

```text
text-<color>
text-<variant>
```

Contoh:
- `text-primary`
- `text-surface`
- `text-muted`

### Padding Properties

```text
p-<size>
px-<size>
py-<size>
```

Contoh:
- `p-md`
- `px-lg`
- `py-sm`

### Margin Properties

```text
m-<size>
mx-<size>
my-<size>
```

Contoh:
- `m-md`
- `mx-lg`
- `my-sm`

### Border Properties

```text
border-<color>
border-<width>
rounded-<size>
```

Contoh:
- `border-primary`
- `border-thin`
- `rounded-md`

### Shadow Properties

```text
shadow-<size>
```

Contoh:
- `shadow-sm`
- `shadow-md`
- `shadow-lg`

### Typography Properties

```text
text-<size>
font-<weight>
```

Contoh:
- `text-base`
- `text-lg`
- `font-medium`

---

## 3️⃣ Contract Validation

### Valid Contract

✅ **Boleh digunakan**:

```html
<div class="bg-primary text-surface px-md py-sm rounded-md">
```

### Invalid Contract

❌ **Tidak boleh digunakan**:

```html
<!-- Inline values -->
<div class="bg-[#123456]">

<!-- Unit liar -->
<div class="p-[13px]">

<!-- Token tidak ada -->
<div class="bg-unknown">

<!-- Case salah -->
<div class="bg-Primary">
```

---

## 4️⃣ Contract Resolution

### Proses

```
1. Parse class string
2. Split by whitespace
3. Validasi setiap kontrak
4. Resolve token dari constitution
5. Generate CSS
```

### Error Handling

**Token Tidak Ditemukan**:

```json
{
  "error": "TOKEN_NOT_FOUND",
  "contract": "bg-unknown",
  "availableTokens": ["bg-primary", "bg-secondary", "bg-surface"]
}
```

**Invalid Format**:

```json
{
  "error": "INVALID_CONTRACT_FORMAT",
  "contract": "bg-[#123456]",
  "reason": "Inline values are forbidden"
}
```

---

## 5️⃣ Contract Composition

### Multiple Contracts

```html
<div class="bg-primary text-surface px-md py-sm rounded-md shadow-md">
```

### Contract Order

**Tidak ada urutan spesifik** - Semua kontrak diproses secara paralel.

### Contract Conflicts

**Tidak boleh konflik**:

```html
<!-- ❌ Konflik -->
<div class="bg-primary bg-secondary">

<!-- ✅ Valid -->
<div class="bg-primary">
```

---

## 6️⃣ Contract Inheritance

### Base Contracts

```text
<base-contract>
```

### Extended Contracts

```text
<base-contract>-<variant>
```

Contoh:
- `bg-primary` (base)
- `bg-primary-hover` (extended)

---

## 7️⃣ Contract Aliases

### Definisi

```text
<alias> = <contract>
```

Contoh:
```text
primary = bg-primary
secondary = bg-secondary
```

### Penggunaan

```html
<div class="primary text-surface">
```

---

## 8️⃣ Contract Groups

### Definisi

```text
@group <group-name> {
  <contract-1>;
  <contract-2>;
  <contract-3>;
}
```

Contoh:
```text
@group button {
  bg-primary;
  text-surface;
  px-md;
  py-sm;
  rounded-md;
}
```

### Penggunaan

```html
<div class="button">
```

---

## 9️⃣ Contract Modifiers

### State Modifiers

```text
<contract>:<state>
```

Contoh:
- `bg-primary:hover`
- `bg-primary:active`
- `bg-primary:focus`

### Responsive Modifiers

```text
<contract>:<breakpoint>
```

Contoh:
- `px-md:sm`
- `px-md:md`
- `px-md:lg`

---

## 🔒 Non-Goals v0.1

* Dynamic values
* JavaScript expressions
* Runtime token resolution
* Plugin system

➡️ Semua itu **v0.2+**

---

## ✅ Checklist

Sebelum menggunakan kontrak:

- [x] Format valid (`<property>-<token>`)
- [x] Token ada di constitution
- [x] Case sensitivity diperhatikan
- [x] Tidak ada konflik
- [x] Modifiers valid (jika digunakan)

---

**Versi**: v0.1
**Status**: Production Ready