# 📜 Governance Specification v0.1

**Styling Constitution Engine (SCE)**

---

## 1️⃣ Governance Layer Overview

### Tujuan

Governance layer bertanggung jawab untuk:

1. **Validasi** - Memastikan kontrak valid
2. **Enforcement** - Menegakkan aturan konstitusi
3. **Error Reporting** - Memberikan pesan error yang jelas
4. **Type Safety** - Menjamin keamanan tipe

---

## 2️⃣ Validation Rules

### Contract Validation

#### Validasi Format

```text
<property>-<token>
```

**Aturan**:
- ✅ Property prefix valid
- ✅ Token ada di constitution
- ✅ Case sensitivity diperhatikan
- ✅ Tidak ada spasi berlebih

#### Validasi Token

**Cek**:
1. Token ada di constitution?
2. Token punya tipe data yang benar?
3. Token tidak deprecated?

**Error jika**:
```json
{
  "error": "TOKEN_NOT_FOUND",
  "contract": "bg-unknown",
  "availableTokens": ["bg-primary", "bg-secondary", "bg-surface"]
}
```

#### Validasi Nilai

**Cek**:
1. Nilai tidak kosong?
2. Nilai sesuai tipe data?
3. Nilai tidak mengandung ekspresi JS?

**Error jika**:
```json
{
  "error": "INVALID_VALUE",
  "contract": "bg-primary",
  "value": null,
  "reason": "Value cannot be null"
}
```

---

## 3️⃣ Enforcement Rules

### Forbidden Patterns

#### ❌ Inline Values

```html
<!-- Tidak boleh -->
<div class="bg-[#123456]">
<div class="p-[13px]">
<div class="text-[1.5rem]">
```

**Alasan**:
- Melanggar prinsip deterministik
- Tidak bisa divalidasi tanpa konteks visual
- Sulit untuk AI baca

#### ❌ Unit Liar

```html
<!-- Tidak boleh -->
<div class="p-[13px]">
<div class="m-[2.5vh]">
<div class="w-[50%]">
```

**Alasan**:
- Tidak ada di constitution
- Tidak konsisten antar browser
- Sulit untuk maintenance

#### ❌ JavaScript Expressions

```html
<!-- Tidak boleh -->
<div class="bg-[var(--color)]">
<div class="p-[calc(1rem + 2px)]">
```

**Alasan**:
- Melanggar prinsip runtime-free
- Tidak bisa divalidasi di build time
- Potensi security risk

### Allowed Patterns

#### ✅ Named Tokens

```html
<!-- Boleh -->
<div class="bg-primary">
<div class="text-surface">
<div class="px-md">
```

#### ✅ CSS Variables

```html
<!-- Boleh -->
<div class="bg-[var(--color-primary)]">
<div class="text-[var(--text-surface)]">
```

**Catatan**:
- Hanya untuk CSS variables yang sudah didefinisi
- Tidak boleh untuk ekspresi dinamis

---

## 4️⃣ Error Reporting

### Error Format

Semua error harus mengikuti format ini:

```json
{
  "error": "<ERROR_CODE>",
  "message": "<Human-readable message>",
  "contract": "<Invalid contract>",
  "details": {
    "reason": "<Why it's invalid>",
    "suggestion": "<How to fix>"
  }
}
```

### Error Codes

| Error Code | Deskripsi |
| ----------- | --------- |
| `INVALID_FORMAT` | Format kontrak tidak valid |
| `TOKEN_NOT_FOUND` | Token tidak ditemukan di constitution |
| `INVALID_VALUE` | Nilai tidak valid |
| `FORBIDDEN_PATTERN` | Pola yang dilarang digunakan |
| `CASE_MISMATCH` | Case sensitivity error |
| `DUPLICATE_CONTRACT` | Kontrak duplikat |

### Error Messages

**Bahasa**: Indonesia (untuk konsistensi)

**Contoh**:
```json
{
  "error": "TOKEN_NOT_FOUND",
  "message": "Token 'bg-unknown' tidak ditemukan di constitution",
  "contract": "bg-unknown",
  "details": {
    "reason": "Token harus merujuk ke nilai yang ada di constitution",
    "suggestion": "Gunakan salah satu dari: bg-primary, bg-secondary, bg-surface"
  }
}
```

---

## 5️⃣ Type Safety

### TypeScript Integration

#### Type Definitions

```typescript
interface ConstitutionContract {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  space: {
    sm: string;
    md: string;
    lg: string;
  };
}

interface StyleContract {
  className: string;
}
```

#### Type Inference

```typescript
// Otomatis infer tipe dari constitution
type ColorToken = keyof ConstitutionContract['color'];
// Hasil: 'primary' | 'secondary' | 'tertiary'

// Validasi di compile time
const validToken: ColorToken = 'primary'; // ✅ Valid
const invalidToken: ColorToken = 'unknown'; // ❌ Error di compile time
```

---

## 6️⃣ Governance Enforcement

### Build-Time Validation

```typescript
// Validasi saat build
function validateContracts(contracts: string[]): ValidationResult {
  const errors: Error[] = [];
  
  for (const contract of contracts) {
    if (!isValidContract(contract)) {
      errors.push({
        error: "INVALID_CONTRACT",
        contract,
        reason: "Contract tidak valid"
      });
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}
```

### Runtime Validation

```typescript
// Validasi saat runtime (opsional)
function validateRuntime(element: HTMLElement): boolean {
  const classes = element.className.split(' ');
  
  for (const cls of classes) {
    if (!isValidContract(cls)) {
      console.error(`Invalid contract: ${cls}`);
      return false;
    }
  }
  
  return true;
}
```

---

## 7️⃣ Governance Best Practices

### Untuk Developers

1. **Gunakan named tokens**
   - Lebih mudah dibaca
   - Lebih mudah di-maintain
   - Lebih mudah untuk AI

2. **Validasi di build time**
   - Tangkap error lebih awal
   - Mencegah error di production
   - Lebih cepat feedback loop

3. **Ikuti aturan naming**
   - Case-sensitive
   - Konsisten format
   - Hindari konflik

### Untuk Reviewers

1. **Cek compliance**
   - Pastikan semua kontrak valid
   - Pastikan tidak ada pola terlarang
   - Pastikan type safety

2. **Review error messages**
   - Pastikan jelas dan membantu
   - Gunakan bahasa Indonesia
   - Berikan saran perbaikan

3. **Test edge cases**
   - Test dengan input invalid
   - Test dengan kontrak duplikat
   - Test dengan case salah

---

## 8️⃣ Governance Metrics

### Success Metrics

- ✅ **Validasi Rate**: % kontrak yang valid
- ✅ **Error Rate**: % kontrak yang invalid
- ✅ **Fix Rate**: % error yang diperbaiki

### Quality Metrics

- ✅ **Type Coverage**: % kontrak yang punya tipe
- ✅ **Documentation Coverage**: % kontrak yang didokumentasi
- ✅ **Test Coverage**: % governance yang ditest

---

## 🔒 Non-Goals v0.1

* Runtime enforcement (opsional untuk v0.2)
* Plugin system (v0.2+)
* Dynamic token resolution (v0.2+)
* Custom validators (v0.2+)

➡️ Semua itu **roadmap masa depan**

---

## ✅ Checklist

Sebelum menggunakan governance:

- [x] Validasi format jelas
- [x] Error codes terdefinisi
- [x] Error messages membantu
- [x] Type safety terimplementasi
- [x] Build-time validation siap
- [x] Runtime validation opsional
- [x] Metrics terdefinisi

---

**Versi**: v0.1
**Status**: Production Ready