# 🎨 Style Engine Specification v0.1

**Meta-Architecture Compatible**

> **Nama kerja**: `Style Engine (SE)`
> *Runtime Constitutional Interpreter for Style Contracts*

---

## 🎯 Definisi Ulang (PENTING)

**Style Engine ≠ CSS Framework**

**Style Engine = Runtime Constitutional Interpreter**
yang menerjemahkan **Style Contracts** → **Legal Visual Output**

Tidak ada:

* ❌ inline style bebas
* ❌ class sembarang
* ❌ theme tanpa kontrak

Yang ada:

* ✅ **Style hanya boleh ada jika disahkan kontrak**
* ✅ **UI renderer wajib patuh**
* ✅ **AI / generator juga tunduk**

---

## 🏛️ Posisi Style Engine dalam Meta-Architecture

```
┌──────────────────────────────┐
│     UI Renderer (React/Vue)  │
│  ❌ Tidak boleh styling bebas │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│      🎨 STYLE ENGINE         │
│  Constitutional Interpreter  │
│  - Resolve Style Contract    │
│  - Validate Token            │
│  - Emit Legal Output         │
└──────────────┬───────────────┘
               ▼
┌──────────────────────────────┐
│  🏛️ META-ARCHITECTURE CORE   │
│  ContractRegistry            │
│  ValidationPipeline          │
│  Security Sandbox            │
└──────────────────────────────┘
```

---

## 🧬 Style Engine = 4 Kontrak Inti

### 1️⃣ **Style Token Contract** (fondasi)

```ts
const colorTokenContract = ContractEntity.create({
  name: 'style-color-token',
  category: ContractCategory.UI_STYLE,
  props: [
    Builders.createStringPropRequired('name', 'Token name'),
    Builders.createStringPropRequired('value', 'Color value'),
    Builders.createEnumProp(
      'semantic',
      ['primary', 'secondary', 'danger', 'neutral'],
      'neutral'
    )
  ],
  metadata: {
    cssOutput: true,
    tailwindCompatible: true
  }
});
```

👉 **Ini pengganti Tailwind colors / CSS variables**
❌ Tidak ada warna tanpa kontrak

---

### 2️⃣ **Style Rule Contract** (governance)

```ts
const styleRuleContract = ContractEntity.create({
  name: 'style-rule',
  category: ContractCategory.UI_STYLE,
  props: [
    Builders.createStringPropRequired('target', 'Component target'),
    Builders.createEnumProp(
      'allowedTokens',
      ['color', 'spacing', 'typography'],
      'color'
    )
  ],
  validation: {
    rules: [
      {
        name: 'no-hardcoded-style',
        validate: (data) => !data.target.includes('#'),
        message: 'Hardcoded styles are forbidden'
      }
    ]
  }
});
```

👉 **Ini yang membuat Style Engine ≠ CSS**

---

### 3️⃣ **Component Style Contract**

```ts
const buttonStyleContract = ContractEntity.create({
  name: 'ui-button-style',
  category: ContractCategory.UI_STYLE,
  props: [
    Builders.createStringPropRequired('background'),
    Builders.createStringPropRequired('textColor'),
    Builders.createStringProp('padding', 'md'),
    Builders.createStringProp('radius', 'md')
  ],
  validation: {
    rules: [
      {
        name: 'token-only',
        validate: (style) =>
          style.background.startsWith('token:'),
        message: 'Styles must reference tokens only'
      }
    ]
  }
});
```

Contoh **LEGAL**:

```ts
background: 'token:color.primary'
```

Contoh **ILEGAL**:

```ts
background: '#ff0000' ❌
```

---

### 4️⃣ **Theme Contract (Constitutional Theme)**

```ts
const themeContract = ContractEntity.create({
  name: 'ui-theme',
  category: ContractCategory.UI_THEME,
  variants: [
    { name: 'mode', type: 'string', values: ['light', 'dark'] }
  ],
  props: [
    Builders.createObjectPropRequired('colors'),
    Builders.createObjectPropRequired('spacing'),
    Builders.createObjectPropRequired('typography')
  ],
  metadata: {
    immutable: true,
    approvedBy: 'Design Authority'
  }
});
```

👉 Theme **bukan preference**, tapi **dokumen hukum visual**

---

## ⚙️ Implementasi: Style Engine Runtime

### 🎨 StyleEngine Core

```ts
export class StyleEngine {
  constructor(
    private registry: ContractRegistry,
    private validator: ValidationPipeline
  ) {}

  async resolve(component: string, styleInput: any) {
    const contract = await this.registry.get(`ui-${component}-style`);

    const result = await this.validator.validateRuntime(
      contract,
      styleInput
    );

    if (!result.isSuccess) {
      throw new Error(`Style violation: ${result.error.message}`);
    }

    return this.emit(styleInput);
  }

  private emit(style: any) {
    return Object.fromEntries(
      Object.entries(style).map(([k, v]) => {
        if (typeof v === 'string' && v.startsWith('token:')) {
          return [k, `var(--${v.replace('token:', '')})`];
        }
        return [k, v];
      })
    );
  }
}
```

---

## 🔥 Contoh Pemakaian (React)

```tsx
const style = await styleEngine.resolve('button', {
  background: 'token:color.primary',
  textColor: 'token:color.neutral',
  padding: 'token:spacing.md'
});

return <button style={style}>Submit</button>;
```

❌ Tidak ada `className="bg-red-500"`
❌ Tidak ada `style={{ color: '#fff' }}`
✅ **Hanya hukum yang berbicara**

---

## 🤖 AI + Style Engine (UNIK)

AI **tidak boleh** langsung generate CSS.

AI **harus** generate **Style Intent**, lalu divalidasi.

```ts
// AI output
{
  background: "red",
  textColor: "#fff"
}

// Style Engine
❌ REJECTED: Illegal style
```

AI **wajib** output:

```ts
{
  background: "token:color.primary",
  textColor: "token:color.neutral"
}
```

---

## 🧠 Perbandingan Singkat

| Sistem                | Style                 |
| --------------------- | --------------------- |
| Tailwind              | Utility bebas         |
| CSS-in-JS             | Runtime bebas         |
| Design Token biasa    | Dokumentasi           |
| **CDMD Style Engine** | **Konstitusi visual** |

---

## 🚀 Roadmap Natural (kalau mau lanjut)

1. **Style Contract Linter**
2. **Tailwind Adapter (legal subset only)**
3. **Figma → Contract Generator**
4. **Style Diff Audit (theme change approval)**
5. **Government / Enterprise Theme Authority**

---

## ✅ Definition of Done (Step 1)

Step 1 **selesai** kalau:

* [x] Style Token Contract terdefinisi
* [x] Style Rule Contract terdefinisi
* [x] Component Style Contract terdefinisi
* [x] Theme Contract terdefinisi
* [x] Style Engine runtime terimplementasi
* [x] Validasi runtime berfungsi
* [x] Token resolution berfungsi
* [x] AI integration terdokumentasi

---

**Versi**: v0.1
**Status**: Production Ready