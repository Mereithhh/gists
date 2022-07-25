---
title: react useContext
---

创建 `ThemeContext.js`

```js
export const ThemeContext = React.createContext({
  theme: "auto",
  setTheme: (newTheme: string) => {},
});
```

在外层中:

```jsx
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("auto");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
```

在内层：

```jsx
const { theme, setTheme } = useContext(ThemeContext);
```
