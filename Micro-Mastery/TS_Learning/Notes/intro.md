### Introduction to TypeScript

TypeScript, created by **Microsoft** and led by **Anders Hejlsberg**, extends JavaScript by adding static types, making it easier to catch bugs during development. It enhances maintainability and scalability, especially in large codebases.

#### Why Use TypeScript?
1. **Type Safety**: Prevents type-related errors.
2. **Enhanced Tooling**: Autocompletion and error checking in IDEs.
3. **Better Debugging**: Catches errors before runtime.
4. **Scalability**: Ideal for managing larger projects.
5. **Advanced Features**: Supports interfaces, generics, and modules.

---

### Installation and Setup

1. **Install TypeScript** globally using npm:
    ```bash
    npm install -g typescript
    ```

2. **Initialize a TypeScript Project**:
    To create a `tsconfig.json` file, which acts like the configuration file for TypeScript (similar to Tailwind's config):
    ```bash
    tsc --init
    ```
    - This file helps manage compiler options, such as target JavaScript version, source maps, and more.

3. **Compiling TypeScript Files**:
   Compile a specific TypeScript file:
    ```bash
    tsc filename.ts
    ```

4. **Watch Mode for Auto-Compilation**:
   Enable `--watch` mode to automatically recompile TypeScript files on save:
    ```bash
    tsc --watch
    ```

   This is useful for continuous development, as any change in a `.ts` file triggers a recompile.
