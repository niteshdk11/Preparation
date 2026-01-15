# 📱 REACT NATIVE – FIRST 10 QUESTIONS (DETAILED ANSWERS)

---

## 1️⃣ What is React Native? (VERY DETAILED)

**React Native** is an **open-source mobile application framework** developed by Facebook (Meta).
It allows developers to build **native mobile apps for Android and iOS using JavaScript and React**.

### How React Native works internally:

1. You write UI using **JavaScript + JSX**
2. React Native converts JSX into **native components**
3. A **bridge** connects JavaScript code with native code
4. The app renders **real native UI**, not WebView

### Key Points:

* Single codebase for Android & iOS
* Uses **native UI components**
* Performance is close to native apps
* Uses React concepts (components, props, state)

👉 **React Native ≠ Hybrid App**
It is **truly native UI**.

---

## 2️⃣ Difference between React Native and ReactJS (DETAILED)

| Feature     | ReactJS           | React Native            |
| ----------- | ----------------- | ----------------------- |
| Platform    | Web browser       | Mobile (Android / iOS)  |
| UI Elements | HTML (`div`, `p`) | Native (`View`, `Text`) |
| Styling     | CSS               | StyleSheet              |
| Rendering   | Browser DOM       | Native UI               |
| Output      | Website           | Mobile App              |

### Example:

ReactJS:

```html
<div>Hello</div>
```

React Native:

```js
<View>
  <Text>Hello</Text>
</View>
```

👉 **ReactJS = Web**
👉 **React Native = Mobile**

---

## 3️⃣ Advantages of React Native (DETAILED)

### 1. Single Codebase

One codebase works for **both Android & iOS**, saving time and cost.

### 2. Faster Development

* Hot Reload
* Live Reload
* Quick UI changes

### 3. Native Performance

Uses **real native components**, so performance is better than hybrid apps.

### 4. Reusable Knowledge

If you know **ReactJS**, you can easily learn React Native.

### 5. Strong Community

Large ecosystem, third-party libraries, strong support.

---

## 4️⃣ What is JSX? (DETAILED WITH EXAMPLE)

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write **UI code in a HTML-like format**.

### Example:

```js
<Text>Hello World</Text>
```

Behind the scenes:

```js
React.createElement(Text, null, "Hello World")
```

### Why JSX?

* Easy to read
* UI + logic in one place
* Better developer experience

👉 JSX browser me directly run nahi hota,
React Native isse JavaScript me convert karta hai.

---

## 5️⃣ What are Components? (DETAILED)

A **component** is a **reusable piece of UI**.

### Example:

```js
function Welcome() {
  return <Text>Welcome User</Text>;
}
```

### Why components?

* Reusability
* Maintainability
* Clean code

### Types:

* Functional components (modern)
* Class components (old)

👉 React Native app = **components ka tree**

---

## 6️⃣ Props vs State (VERY DETAILED)

### Props (Properties)

* Parent component se aata hai
* Read-only
* Component ke bahar se control hota hai

```js
function User(props) {
  return <Text>{props.name}</Text>;
}
```

### State

* Component ka internal data
* Change ho sakta hai
* Change hone par UI re-render hota hai

```js
const [count, setCount] = useState(0);
```

### Simple Difference:

* **Props → external data**
* **State → internal memory**

---

## 7️⃣ Functional vs Class Components (DETAILED)

### Functional Component (Recommended)

```js
function App() {
  return <Text>Hello</Text>;
}
```

### Class Component (Old)

```js
class App extends React.Component {
  render() {
    return <Text>Hello</Text>;
  }
}
```

### Why Functional is better?

* Less code
* Hooks support
* Easier to understand
* Better performance

👉 Modern React Native **functional components** use karta hai.

---

## 8️⃣ What is Virtual DOM? (DETAILED)

Virtual DOM ek **in-memory copy** hoti hai real UI ka.

### How it works:

1. State change hota hai
2. New Virtual DOM banta hai
3. Old & new Virtual DOM compare hote hain
4. Sirf changed part update hota hai

👉 Result:

* Faster UI updates
* Better performance

---

## 9️⃣ What is View and Text component? (DETAILED)

### View

* Container component
* Layout & styling ke liye

### Text

* Text render karne ke liye
* Text sirf `Text` ke andar hi likhna allowed hai

```js
<View>
  <Text>Hello React Native</Text>
</View>
```

👉 HTML ka `div` React Native me **View** hota hai.

---

## 🔟 Flexbox in React Native (DETAILED)

React Native layout ke liye **Flexbox** use karta hai.

### Default behavior:

* `flexDirection: column`
* `justifyContent` → vertical alignment
* `alignItems` → horizontal alignment

### Example:

```js
<View style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <Text>Centered Text</Text>
</View>
```

👉 Responsive layout ke liye **Flexbox must-know** hai.

---
PERFECT BRO 👍
Same level maintain karte hain.
👉 **NEXT 10 QUESTIONS (11–20)**
👉 **VERY DETAILED + PROPER EXPLANATION + CODE**
👉 **Student / Intern interview ready**

---

# 📱 REACT NATIVE – NEXT 10 QUESTIONS (11 → 20)

---

## 1️⃣1️⃣ StyleSheet vs Inline Styles (DETAILED)

### Inline Styles

Styles directly component ke andar likhte hain.

```js
<Text style={{ color: 'red', fontSize: 18 }}>Hello</Text>
```

### StyleSheet (Recommended)

```js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 18,
  },
});
```

Use:

```js
<Text style={styles.text}>Hello</Text>
```

### Why StyleSheet is better?

* Cleaner code
* Reusable styles
* Better performance (styles optimized internally)

👉 **Interview answer:**
StyleSheet is preferred because it improves readability, reusability, and performance.

---

## 1️⃣2️⃣ ScrollView vs FlatList (VERY DETAILED)

### ScrollView

* Small data ke liye
* Saara content ek saath render hota hai

```js
<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScrollView>
```

### FlatList

* Large data ke liye
* Lazy loading (sirf visible items render)

```js
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id}
/>
```

### Difference Summary:

| ScrollView        | FlatList              |
| ----------------- | --------------------- |
| Small list        | Large list            |
| Renders all items | Renders only visible  |
| Memory heavy      | Performance optimized |

👉 **Large list = FlatList (always)**

---

## 1️⃣3️⃣ What is SafeAreaView? (DETAILED)

SafeAreaView UI ko **notch, status bar, rounded corners** se overlap hone se bachata hai.

```js
import { SafeAreaView } from 'react-native';

<SafeAreaView style={{ flex: 1 }}>
  <Text>Hello</Text>
</SafeAreaView>
```

### Why important?

* iPhone notch
* Android status bar
* Better UX

👉 Interview me bolo:
SafeAreaView ensures content stays within safe screen boundaries.

---

## 1️⃣4️⃣ Handling Different Screen Sizes (DETAILED)

React Native me multiple devices hote hain, isliye responsive design important hai.

### Methods:

1. Flexbox
2. Percentage-based width/height
3. Dimensions API

```js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
```

Use case:

```js
<View style={{ width: width * 0.8 }} />
```

👉 **Avoid fixed pixels**, flexible layouts use karo.

---

## 1️⃣5️⃣ What is React Navigation? (DETAILED)

React Navigation ek **library** hai jo React Native apps me **screen-to-screen navigation** handle karti hai.

### Features:

* Stack navigation
* Tab navigation
* Drawer navigation
* Passing data between screens

👉 Without React Navigation, multi-screen apps possible nahi.

---

## 1️⃣6️⃣ Types of Navigation (DETAILED)

### 1. Stack Navigation

Screens ek stack jaise behave karti hain.

```js
createNativeStackNavigator();
```

Example:

* Login → Home → Profile

---

### 2. Tab Navigation

Bottom ya top tabs.

```js
createBottomTabNavigator();
```

Example:

* Home | Search | Profile

---

### 3. Drawer Navigation

Side menu navigation.

```js
createDrawerNavigator();
```

Example:

* Hamburger menu

👉 Real apps me **combination** use hota hai.

---

## 1️⃣7️⃣ Passing Data Between Screens (DETAILED)

### Sending Data:

```js
navigation.navigate('Profile', {
  userId: 5,
  name: 'Nitesh',
});
```

### Receiving Data:

```js
const { userId, name } = route.params;
```

👉 Used for:

* User profile
* Product details
* Edit forms

---

## 1️⃣8️⃣ What is useNavigation Hook? (DETAILED)

`useNavigation` hook navigation object provide karta hai **without passing props**.

```js
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();
```

Use case:

```js
navigation.navigate('Home');
```

👉 Useful jab component screen ke direct child na ho.

---

## 1️⃣9️⃣ What are Hooks? (DETAILED)

Hooks special **functions** hote hain jo:

* State
* Lifecycle
* Context

ko **functional components** me use karne dete hain.

Examples:

* useState
* useEffect
* useContext

👉 Hooks ke pehle ye sab sirf class components me possible tha.

---

## 2️⃣0️⃣ useState & useEffect (VERY DETAILED)

### useState

Component ke data ko manage karta hai.

```js
const [count, setCount] = useState(0);
```

* `count` → current state
* `setCount` → state update function

---

### useEffect

Side effects handle karta hai:

* API calls
* subscriptions
* timers

```js
useEffect(() => {
  console.log('Component Mounted');

  return () => {
    console.log('Component Unmounted');
  };
}, []);
```

👉 `[]` means: sirf component mount pe run hoga.

---

## ✅ QUICK CONFIDENCE CHECK

Agar tum:

* Navigation samjha sakte ho
* FlatList vs ScrollView clear hai
* Hooks ka purpose bol pa rahe ho

AA GAYA BRO 👍
Same level, same depth.
👉 **NEXT 10 QUESTIONS (21–30)**
👉 **VERY DETAILED + CODE + INTERVIEW-READY EXPLANATION**

---

# 📱 REACT NATIVE – NEXT 10 QUESTIONS (21 → 30)

---

## 2️⃣1️⃣ What is useContext? (VERY DETAILED)

`useContext` hook ka use **global data share** karne ke liye hota hai **without prop drilling**.

### Problem (Prop Drilling)

Data ko parent → child → grandchild pass karna padta hai.

### Solution: Context API

### Step 1: Create Context

```js
import { createContext } from 'react';

export const UserContext = createContext();
```

### Step 2: Provide Context

```js
<UserContext.Provider value={{ name: 'Nitesh' }}>
  <App />
</UserContext.Provider>
```

### Step 3: Consume using useContext

```js
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Profile = () => {
  const user = useContext(UserContext);
  return <Text>{user.name}</Text>;
};
```

👉 **Interview line:**
useContext helps share global state without passing props manually.

---

## 2️⃣2️⃣ Redux vs Context API (DETAILED)

| Redux              | Context API          |
| ------------------ | -------------------- |
| Large applications | Small to medium apps |
| Centralized store  | Simple global state  |
| Middleware support | No middleware        |
| Better scalability | Limited scalability  |

👉 **Context** = simple state sharing
👉 **Redux** = complex state management

---

## 2️⃣3️⃣ What is Redux Toolkit? (DETAILED)

Redux Toolkit Redux ka **modern & recommended way** hai.

### Why Redux Toolkit?

* Less boilerplate
* Built-in best practices
* Easy to write reducers

### Example:

```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
```

👉 Redux Toolkit internally **Immer** use karta hai.

---

## 2️⃣4️⃣ How to Call APIs in React Native? (DETAILED)

APIs usually `useEffect` ke andar call hoti hain.

```js
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const response = await fetch('https://api.example.com/users');
  const data = await response.json();
  console.log(data);
};
```

### Flow:

1. Component mounts
2. API call
3. Data state me store
4. UI update

---

## 2️⃣5️⃣ fetch vs axios (DETAILED)

| fetch                  | axios                 |
| ---------------------- | --------------------- |
| Built-in               | External library      |
| Manual JSON parsing    | Auto JSON parsing     |
| No auto error handling | Better error handling |
| Simple                 | Feature-rich          |

### Axios Example:

```js
import axios from 'axios';

const res = await axios.get(url);
console.log(res.data);
```

👉 Real projects me **axios preferred** hota hai.

---

## 2️⃣6️⃣ async/await (DETAILED)

`async/await` Promises ko handle karne ka **clean & readable** way hai.

```js
const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};
```

👉 Avoids `.then().catch()` chaining.

---

## 2️⃣7️⃣ Handling Loading and Errors (VERY IMPORTANT)

### Example:

```js
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

if (loading) return <Text>Loading...</Text>;
if (error) return <Text>Error occurred</Text>;
```

### Why important?

* Better UX
* Prevents blank screens
* Professional apps always handle states

---

## 2️⃣8️⃣ What is AsyncStorage? (DETAILED)

AsyncStorage ek **local storage** hai React Native me.

### Use cases:

* Auth token
* User preferences
* Small data

```js
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('token', 'abc123');
const token = await AsyncStorage.getItem('token');
```

👉 **Not for large data or sensitive data**.

---

## 2️⃣9️⃣ Performance Optimization Techniques (DETAILED)

### Common techniques:

* Use FlatList
* Avoid unnecessary re-renders
* Memoization
* Proper key usage

👉 Performance matters especially in mobile apps.

---

## 3️⃣0️⃣ useMemo & useCallback (VERY DETAILED)

### useMemo

Expensive calculation ko cache karta hai.

```js
const total = useMemo(() => calculateTotal(data), [data]);
```

### useCallback

Function reference ko memoize karta hai.

```js
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);
```

👉 Prevents unnecessary re-renders.

---

## ✅ INTERVIEW CONFIDENCE CHECK

Agar tum:

* Context vs Redux explain kar sakte ho
* API handling + loading/error bol pa rahe ho
* useMemo/useCallback ka reason bata pa rahe ho

AA GAYA BRO 💪
👉 **REMAINING QUESTIONS (31 → 41)**
👉 **SAME DETAILED LEVEL**
👉 **CLEAR + CODE + INTERVIEW-READY EXPLANATION**

Ye **final set** hai. Iske baad tum **React Native intern ke liye solid ho**.

---

# 📱 REACT NATIVE – QUESTIONS 31 → 41 (DETAILED)

---

## 3️⃣1️⃣ What is React.memo? (DETAILED)

`React.memo` ek **Higher Order Component** hai jo **unnecessary re-renders** ko rokta hai.

### Problem:

Parent re-render hota hai → child bhi re-render ho jata hai (even if props same)

### Solution:

`React.memo`

```js
const MyComponent = ({ name }) => {
  return <Text>{name}</Text>;
};

export default React.memo(MyComponent);
```

### How it works:

* Props compare karta hai
* Agar props same → re-render skip

👉 **Performance optimization ke liye use hota hai**

---

## 3️⃣2️⃣ FlatList Optimization (DETAILED)

FlatList already optimized hota hai, but aur better bana sakte ho.

### Important props:

* `keyExtractor`
* `initialNumToRender`
* `removeClippedSubviews`

```js
<FlatList
  data={data}
  keyExtractor={(item) => item.id.toString()}
  initialNumToRender={10}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

👉 Large list me **ScrollView kabhi use mat karna**.

---

## 🐞 DEBUGGING & DEPLOYMENT

---

## 3️⃣3️⃣ Debugging Tools in React Native (DETAILED)

### Common tools:

1. **Console.log** – basic debugging
2. **React DevTools** – component tree inspect
3. **Flipper** – network, logs, layout
4. **Chrome Debugger** – JS debugging

👉 Interview line:

> I use console logs and React DevTools to debug UI and state issues.

---

## 3️⃣4️⃣ What is Metro Bundler? (DETAILED)

**Metro** React Native ka **JavaScript bundler** hai.

### Responsibilities:

* JS files bundle karna
* Assets (images, fonts) handle karna
* Fast refresh enable karna

👉 App start hoti hai → Metro JS code bundle karta hai → app run hoti hai.

---

## 3️⃣5️⃣ APK vs AAB (DETAILED)

| APK             | AAB                  |
| --------------- | -------------------- |
| Android Package | Android App Bundle   |
| Direct install  | Play Store optimized |
| Bigger size     | Smaller downloads    |

👉 **Play Store AAB prefer karta hai**

---

## 3️⃣6️⃣ Generating Release Build (DETAILED)

### Android release build steps:

```bash
cd android
./gradlew assembleRelease
```

Output:

```
android/app/build/outputs/apk/release
```

👉 Release build optimized hota hai (no debug code).

---

## 3️⃣7️⃣ What is Expo? (DETAILED)

**Expo** React Native ko **easy banata hai**.

### Advantages:

* No Android/iOS setup
* Fast development
* Built-in APIs (camera, sensors)

### Limitation:

* Limited native control (managed workflow)

👉 Beginners ke liye **best starting point**.

---

# 🧠 SCENARIO-BASED QUESTIONS

---

## 3️⃣8️⃣ Authentication Flow Implementation (DETAILED)

### Typical flow:

1. User login
2. Backend se token
3. Token store (AsyncStorage)
4. Protected screens allow

```js
await AsyncStorage.setItem('token', token);
```

👉 Token exist → user logged in.

---

## 3️⃣9️⃣ Offline Data Handling (DETAILED)

### Approach:

* Local storage (AsyncStorage / SQLite)
* Internet check
* Sync when online

Example:

```js
if (!isOnline) {
  saveDataLocally();
}
```

👉 Improves user experience in poor network.

---

## 4️⃣0️⃣ Form Validation Approach (DETAILED)

### Simple validation:

* Empty check
* Email format
* Password length

```js
if (!email.includes('@')) {
  setError('Invalid email');
}
```

### Libraries:

* Formik
* Yup

👉 Prevents wrong data submission.

---

## 4️⃣1️⃣ Handling Memory Leaks (VERY IMPORTANT)

### Memory leak tab hota hai jab:

* Component unmount ho jaye
* But async task still running ho

### Solution: Cleanup in `useEffect`

```js
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Running');
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

👉 **Cleanup function memory leaks prevent karta hai**.

---

## ✅ FINAL BRO VERDICT 💯

Agar tum:

* **Concept + reason + example** bol pa rahe ho
* Code ka flow explain kar sakte ho
* “I am learning” confidently bol sakte ho

🔥 **React Native intern ke liye tum READY ho**.

---
