Got you bro 👍
Main **same answers** ko **clean, proper, interview-ready Markdown format** me likh raha hoon — **simple language, professional tone**, easy to revise.

---

# 📱 React Native Interview Questions with Detailed Answers

---

## ❓ What is React Native?

**Answer:**
React Native is an **open-source framework developed by Facebook (Meta)** that allows developers to build **mobile applications using JavaScript and React**.
It enables the creation of **cross-platform apps (Android & iOS)** using a **single codebase**, while still delivering **near-native performance** by using real native components.

---

## ❓ Difference between React Native and ReactJS

**Answer:**

* **ReactJS** is used for building **web applications** and runs in the **browser DOM** using HTML and CSS.
* **React Native** is used for building **mobile applications** and uses **native components** like `View` and `Text` instead of HTML elements.

👉 In short:
**ReactJS → Web**
**React Native → Mobile**

---

## ❓ What is JSX?

**Answer:**
JSX stands for **JavaScript XML**.
It allows developers to write UI code that looks similar to **HTML inside JavaScript**.

JSX makes the code:

* More readable
* Easier to understand
* Easier to maintain

Although JSX looks like HTML, it is converted into JavaScript before execution.

---

## ❓ What are Props and State?

**Answer:**

* **Props (Properties)** are **read-only inputs** passed from a **parent component to a child component**. They cannot be modified by the child.
* **State** is a **mutable object** managed within a component. It is used to store **dynamic data** that can change over time and cause the UI to re-render.

👉 Props = external data
👉 State = internal component data

---

## ❓ What are Components?

**Answer:**
Components are the **reusable building blocks** of a React Native application.
Each component represents a **part of the user interface**.

There are two types of components:

* **Functional components** (modern & preferred)
* **Class-based components** (older approach)

Using components helps in:

* Code reusability
* Better structure
* Easier maintenance

---

## ❓ What is Flexbox in React Native?

**Answer:**
Flexbox is a **layout system** used to design **responsive user interfaces**.
React Native uses Flexbox by default for arranging UI elements.

Common Flexbox properties:

* `flexDirection`
* `justifyContent`
* `alignItems`
* `flex`

Flexbox helps in creating layouts that work well on **different screen sizes**.

---

## ❓ What is useState Hook?

**Answer:**
`useState` is a **React Hook** that allows **functional components** to manage state.

It returns:

1. A state variable
2. A function to update that state

Whenever the state changes, the component **re-renders automatically**.

---

## ❓ What is useEffect Hook?

**Answer:**
`useEffect` is used to perform **side effects** in a component, such as:

* API calls
* Subscriptions
* Timers
* Event listeners

It runs **after the component renders** and can also clean up resources when the component unmounts.

---

## ❓ What is FlatList?

**Answer:**
`FlatList` is an **optimized component** used for rendering **large lists of data efficiently**.

Key features:

* Lazy loading (renders only visible items)
* Better memory usage
* Improved performance compared to `ScrollView`

It is preferred when dealing with **large or dynamic lists**.

---

## ❓ What is AsyncStorage?

**Answer:**
AsyncStorage is a **persistent, key-value storage system** used to store data **locally on the device**.

Common use cases:

* Storing authentication tokens
* Saving user preferences
* Caching small data

It works asynchronously and persists data even after the app is closed.

---

## ❓ What is Redux?

**Answer:**
Redux is a **state management library** used to manage **global application state** in a **predictable and centralized way**.

It is mainly used in:

* Large applications
* Apps with complex state logic
* Apps where many components share data

Redux helps maintain consistency and makes debugging easier.

---

## ❓ What is Expo?

**Answer:**
Expo is a **framework and platform** that simplifies React Native development by providing:

* Pre-configured tools
* Built-in APIs (camera, sensors, media, etc.)
* Easier setup without native configuration

Expo is especially useful for **beginners** and rapid development.

---

