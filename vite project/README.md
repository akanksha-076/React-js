# Note

1. Frist letter of the component must be capital
2. Diffing algo and reconciliation
3. only one comopnent(function) allowed to be default export
4. Wrap named export components in { }

```
const Demo=()=>{
    return "hello world"
}
export {Demo}
```
5. LIFE CYCLE METHOD
- Class components uses life cycle method to perform multiple task.
- Lfe cycle method has no unnecessary boilerplate code so the application is getting complex and hard to manage
>Lifecycle methods : mounting ,updating ,unmounting
- so thats why we shofted to functional component. 
6. WE cannot re-render normal variable in JSX.
7. inside onclick or any event just write the function name,no parenthesis

