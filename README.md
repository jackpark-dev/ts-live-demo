# Getting Started

```
yarn create react-app ts-live-demo
```

* edit file extension to .tsx
  - App, index

```bash
cd ts-live-demo
yarn add typescript @types/react @types/react-dom -D
tsc --init
```

* edit tsconfig.json
```json
  "jsx": "react-jsx",
```

# ts-node env

```
npm install -g typescript
npm install @types/node -g
npx ts-node ${filename}.ts
```
