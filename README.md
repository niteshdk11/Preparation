
---

# ASSIGNMENT 3

## Q1. Explain the purpose of StyleSheet in React Native.

### Answer:

1. **StyleSheet** in React Native is used to define and manage styles for components such as `View`, `Text`, `Button`, `Image`, etc.

2. It provides a clean and organized way to specify properties like:
   - `color`
   - `fontSize`
   - `margin`
   - `padding`
   - `width` and `height`
   - `backgroundColor`
   - `flexDirection`

3. Styles are created using the **`StyleSheet.create()`** method.

4. It helps to **separate styling from the component's main code**, making the application easier to read and maintain.

5. The same style can be **reused across multiple components**, reducing duplicate code.

### Example:

```javascript
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold'
  }
});

<Text style={styles.title}>Hello React Native</Text>;
```

### In short:

**StyleSheet helps create consistent, reusable, organized, and maintainable UI designs in React Native.**

---

# Q2. Differentiate between `justifyContent` and `alignItems` in React Native Flexbox.

### Answer:

Both `justifyContent` and `alignItems` are **Flexbox properties** used to control the alignment and positioning of child components inside a parent component.

| Point | `justifyContent` | `alignItems` |
|---|---|---|
| **Purpose** | Aligns child elements along the **main axis**. | Aligns child elements along the **cross axis**. |
| **Default direction** | With default `flexDirection: column`, controls vertical alignment. | With default `flexDirection: column`, controls horizontal alignment. |
| **Common values** | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | `flex-start`, `center`, `flex-end`, `stretch`, `baseline` |
| **Used for** | Controls spacing/position along the main direction. | Controls position perpendicular to the main direction. |
| **Example** | `justifyContent: 'center'` | `alignItems: 'center'` |

### Diagram:

```text
              Cross Axis
            (Horizontal →)

        ┌─────────────────────┐
        │         ●           │
        │         ●           │
        │         ●           │
        │         ↑           │
        │     Main Axis       │
        │     (Vertical)      │
        └─────────────────────┘

     justifyContent → Main / vertical axis
     alignItems     → Cross / horizontal axis
```

### Example:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Explanation:

- `justifyContent: 'center'` → centers the child **vertically** with the default column direction.
- `alignItems: 'center'` → centers the child **horizontally**.

### In short:

**`justifyContent` = Main Axis**  
**`alignItems` = Cross Axis**

---

# Q3. Differentiate between Platform and Dimensions APIs in React Native.

### Answer:

Both **Platform** and **Dimensions** are built-in React Native APIs, but they are used for different purposes.

| Point | Platform API | Dimensions API |
|---|---|---|
| **Purpose** | Detects the platform/operating system. | Gets screen or window dimensions. |
| **Main use** | Creates platform-specific Android/iOS code. | Creates responsive layouts. |
| **Provides** | OS, Version and platform-specific values. | Width, height, scale and fontScale. |
| **Common property/method** | `Platform.OS`, `Platform.Version` | `Dimensions.get('window')` |
| **Example** | `Platform.OS === 'android'` | `Dimensions.get('window').width` |
| **Application** | Different UI/functionality on Android and iOS. | UI that adapts to different screen sizes. |

### Platform API Example:

```javascript
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  console.log('Running on Android');
} else {
  console.log('Running on iOS');
}
```

### Dimensions API Example:

```javascript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

console.log(width);
console.log(height);
```

### Diagram:

```text
                 React Native APIs
                       │
          ┌────────────┴────────────┐
          │                         │
      Platform API             Dimensions API
          │                         │
          ↓                         ↓
   Detect Operating System     Get Screen Size
          │                         │
     ┌────┴────┐              ┌────┴────┐
     │         │              │         │
  Android     iOS           Width     Height
```

---

# Q4. Explain platform-specific styling in React Native. Write a program that applies different styles to a component when the application runs on Android and iOS using the Platform API.

### Answer:

**Platform-specific styling** means applying different styles or UI properties depending on whether the React Native application is running on **Android or iOS**.

### Important Points:

1. React Native provides the **`Platform` API** to identify the operating system.

2. `Platform.OS` returns:
   - `'android'` for Android
   - `'ios'` for iOS

3. Different colors, fonts, sizes, margins, etc. can be applied based on the platform.

4. It provides a better platform-specific user experience.

5. It helps handle UI differences between Android and iOS.

### Program:

```javascript
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to React Native
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    color: Platform.OS === 'android'
      ? 'green'
      : 'blue',

    fontWeight: Platform.OS === 'android'
      ? 'bold'
      : 'normal',
  },
});

export default App;
```

### Explanation:

1. `Platform` is imported from React Native.
2. `Platform.OS` checks the operating system.
3. On **Android**, the text is green and bold.
4. On **iOS**, the text is blue and normal.
5. Thus, the same component gets different styles on Android and iOS.

### Diagram:

```text
                 React Native Application
                          │
                          ↓
                    Platform.OS
                          │
                ┌─────────┴─────────┐
                ↓                   ↓
             Android                iOS
                │                   │
                ↓                   ↓
          Green + Bold         Blue + Normal
                │                   │
                └─────────┬─────────┘
                          ↓
                   Styled Component
```

---

# Q5. Explain the Dimensions API in React Native.

### Answer:

1. **Dimensions API** is a built-in React Native API used to get the **size and dimensions of the device screen or application window**.

2. It is mainly used to create **responsive user interfaces**.

3. It can provide:
   - Width
   - Height
   - Scale
   - Font scale

4. The commonly used method is:

```javascript
Dimensions.get('window')
```

### Example:

```javascript
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

console.log('Width:', width);
console.log('Height:', height);
```

5. The width and height contain the current window dimensions.

6. It can be used to calculate component sizes dynamically.

### Example:

```javascript
const boxWidth =
  Dimensions.get('window').width * 0.8;
```

### Diagram:

```text
              Dimensions API
                    │
                    ↓
          Dimensions.get('window')
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       Width                Height
          │                   │
          └─────────┬─────────┘
                    ↓
            Responsive UI
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
      Small Screen        Large Screen
          │                   │
          └───────→ UI adjusts
```

### In short:

**Dimensions API → Gets device/window dimensions → Helps create responsive layouts.**

---

# Q6. Explain `Animated.timing()` and `Animated.spring()` in React Native with respect to their behavior, configuration, and suitable use cases.

### Answer:

The **Animated API** in React Native is used to create smooth animations.

| Point | `Animated.timing()` | `Animated.spring()` |
|---|---|---|
| **Behavior** | Changes a value gradually over a fixed period. | Creates spring-like, natural movement. |
| **Animation style** | Smooth and predictable. | Bouncy and physics-based. |
| **Main configuration** | `duration`, `easing`, `toValue` | `friction`, `tension`, `toValue` |
| **Time control** | Exact duration can be specified. | Duration depends on spring behavior. |
| **Movement** | Controlled movement toward target. | Can overshoot and settle naturally. |
| **Use cases** | Fade, slide, rotate, move. | Buttons, pop-ups, cards, natural interactions. |

### `Animated.timing()` Example:

```javascript
Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: true,
}).start();
```

### Suitable Uses:

- Fade-in/fade-out
- Screen transitions
- Sliding
- Rotation
- Scaling

### `Animated.spring()` Example:

```javascript
Animated.spring(scaleAnim, {
  toValue: 1,
  friction: 5,
  tension: 40,
  useNativeDriver: true,
}).start();
```

### Suitable Uses:

- Button press animation
- Pop-up effects
- Bouncing cards
- Interactive UI elements

### Diagram:

```text
Animated API
     │
     ├───────────────┐
     ↓               ↓
Animated.timing()  Animated.spring()
     │               │
     ↓               ↓
Fixed duration     Physics-based
     │               │
     ↓               ↓
Smooth & controlled Natural & bouncy
     │               │
     ↓               ↓
Fade / Slide       Button / Popup
```

### In short:

- **`Animated.timing()` → Fixed time + controlled animation**
- **`Animated.spring()` → Physics-based + natural/bouncy animation**

---

# Q7. Explain the basic concepts of the React Native Animated API.

### Answer:

The **Animated API** in React Native is used to create smooth and interactive animations.

### Basic Concepts:

1. **Animated.Value**
   - Represents a value that changes during an animation.

```javascript
const fadeAnim = new Animated.Value(0);
```

2. **Animated Components**
   - React Native provides:
     - `Animated.View`
     - `Animated.Text`
     - `Animated.Image`

3. **Animation Methods**
   - `Animated.timing()`
   - `Animated.spring()`
   - `Animated.decay()`

4. **`toValue`**
   - Specifies the final value.

```javascript
toValue: 1
```

5. **`start()`**
   - Starts the animation.

6. **Interpolation**
   - Converts one animated range into another.
   - Useful for rotation, scaling and color effects.

7. **`useNativeDriver`**
   - Allows supported animations to run using the native driver for better performance.

8. **`Animated.event()`**
   - Connects events such as scrolling or gestures to animated values.

### Example:

```javascript
const fadeAnim = new Animated.Value(0);

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: true,
}).start();
```

### Diagram:

```text
             Animated API
                  │
        ┌─────────┴─────────┐
        ↓                   ↓
   Animated.Value      Animated Components
        │                (View, Text, Image)
        ↓
 Animation Methods
 ┌──────┼────────┐
 ↓      ↓        ↓
Timing Spring  Decay
        │
        ↓
     start()
        │
        ↓
 Smooth Animation
```

### In short:

**Animated API = Animated Values + Animated Components + Animation Methods + Interpolation + Events**

---

# Q8. Write a program of a React Native application that implements an animated button interaction. The button should scale down when pressed.

### Answer:

The following program uses **Animated.Value**, **Animated.spring()**, and **Pressable**.

```javascript
import React, { useRef } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';

const App = () => {
  const scale =
    useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.button,
          { transform: [{ scale }] },
        ]}
      >
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.pressable}
        >
          <Text style={styles.buttonText}>
            Press Me
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
  },

  pressable: {
    padding: 15,
    paddingHorizontal: 40,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
```

### Explanation:

1. `Animated.Value(1)` represents the normal button scale.
2. `handlePressIn()` changes scale from `1` to `0.8`.
3. Therefore, the button becomes smaller.
4. `handlePressOut()` changes the scale back to `1`.
5. `transform: [{ scale }]` applies the animated value.
6. `Animated.spring()` creates a smooth spring-like effect.
7. `useNativeDriver: true` improves animation performance for supported properties.

### Diagram:

```text
          Button in Normal State
                 Scale = 1
                    │
               User Presses
                    ↓
          ┌─────────────────┐
          │  Scale = 0.8    │
          │  Button shrinks │
          └─────────────────┘
                    │
               User Releases
                    ↓
          ┌─────────────────┐
          │  Scale = 1      │
          │ Button returns   │
          └─────────────────┘
```

---

# Q9. Discuss the major responsive design principles for mobile applications.

### Answer:

**Responsive design** means designing an application so that its UI adapts properly to different screen sizes, orientations and devices.

### Major Principles:

1. **Flexible Layout**
   - Use flexible layouts instead of fixed sizes.
   - Flexbox is commonly used.

2. **Relative Dimensions**
   - Use percentages, Flexbox and dynamic calculations.

3. **Different Screen Sizes**
   - Application should work on small, medium and large screens.

4. **Orientation Support**
   - UI should work in portrait and landscape modes.

5. **Readable Text**
   - Text should remain readable and should not overlap or get cut off.

6. **Touch-Friendly Controls**
   - Buttons should have sufficient touch area.

7. **Responsive Images**
   - Images should scale properly without distortion.

8. **Consistent Spacing**
   - Maintain suitable margins and padding.

9. **Platform Considerations**
   - Android and iOS have different UI conventions.

10. **Testing**
   - Test the application on different screen sizes and orientations.

### Diagram:

```text
              Responsive Design
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
   Flexible       Screen       Orientation
    Layout         Sizes          Support
        │            │            │
        └────────────┼────────────┘
                     ↓
              Adaptable UI
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
   Readable      Touch-Friendly  Images
     Text          Controls      Scale
```

### In short:

**Responsive Design = Flexible Layout + Adaptable Sizes + Readable Content + Touch-Friendly Controls + Orientation Support + Multi-Device Compatibility**

---

# Q10. Differentiate between fixed-size and responsive layouts in React Native. Explain the advantages and limitations of each approach with suitable examples.

### Answer:

| Point | Fixed-Size Layout | Responsive Layout |
|---|---|---|
| **Meaning** | Uses constant values for width, height, margins, etc. | Adjusts UI according to screen size and available space. |
| **Size** | Mostly constant. | Changes dynamically. |
| **Adaptability** | Less adaptable. | Highly adaptable. |
| **Techniques** | Fixed `width` and `height`. | Flexbox, percentages, Dimensions and dynamic calculations. |
| **Device compatibility** | Best when screen sizes are similar. | Works across different screen sizes. |
| **Complexity** | Simple. | Requires more planning. |

## Fixed-Size Layout

A fixed-size layout uses constant dimensions.

### Example:

```javascript
const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
  },
});
```

### Advantages:

1. Easy to implement.
2. Predictable dimensions.
3. Useful when a component requires a specific size.

### Limitations:

1. May not look good on different screen sizes.
2. Can cause overflow.
3. May leave unused space.
4. May not adapt to orientation changes.

---

## Responsive Layout

A responsive layout adjusts according to available screen space.

### Example:

```javascript
const styles = StyleSheet.create({
  box: {
    width: '80%',
    height: 100,
    backgroundColor: 'green',
  },
});
```

### Flexbox Example:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Advantages:

1. Works on different screen sizes.
2. Supports different orientations.
3. Makes better use of available space.
4. Improves user experience.

### Limitations:

1. Slightly more complex.
2. May require dynamic calculations.
3. Requires more testing.

### Diagram:

```text
             React Native Layouts
                     │
            ┌────────┴────────┐
            ↓                 ↓
       Fixed-Size          Responsive
         Layout              Layout
            │                 │
            ↓                 ↓
     Constant Size       Dynamic Size
            │                 │
            ↓                 ↓
     width: 200px       width: '80%'
     height: 100px         flex: 1
            │                 │
            ↓                 ↓
   Less Adaptable        Highly Adaptable
```

### In short:

**Fixed-size → Simple and predictable, but less adaptable.**

**Responsive → Flexible and device-friendly, but slightly more complex.**

---

# ASSIGNMENT 4

---

# Q11. Write a program to fetch data from a public API and display the received data.

### Answer:

The **Fetch API** can be used to retrieve data from a public API. The received data can then be displayed using React Native components.

### Program:

```javascript
import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Posts
      </Text>

      <FlatList
        data={data}

        keyExtractor={item =>
          item.id.toString()
        }

        renderItem={({ item }) => (
          <View style={styles.item}>

            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text>
              {item.body}
            </Text>

          </View>
        )}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
```

### Explanation:

1. `useState()` stores the received data.
2. `useEffect()` executes the API request when the component loads.
3. `fetch()` sends the request.
4. `response.json()` converts the response to JSON/JavaScript data.
5. `setData()` stores the result.
6. `FlatList` displays the data.
7. `renderItem` defines how each item is displayed.
8. `catch()` handles errors.

### Diagram:

```text
       React Native App
              │
              ↓
          fetch() API
              │
              ↓
     Public API Server
              │
              ↓
        JSON Response
              │
              ↓
       response.json()
              │
              ↓
          setData()
              │
              ↓
          FlatList
              │
              ↓
        Display Data
```

---

# Q12. Explain the structure of JSON data and describe how JSON responses from an API can be accessed and processed in React Native.

### Answer:

**JSON (JavaScript Object Notation)** is a lightweight data format commonly used to exchange data between an application and an API server.

### Example JSON:

```json
{
  "id": 101,
  "name": "Rahul",
  "email": "rahul@example.com",
  "skills": [
    "React Native",
    "JavaScript"
  ],
  "address": {
    "city": "Kolhapur",
    "country": "India"
  }
}
```

### Components of JSON:

| Component | Description | Example |
|---|---|---|
| **Object** | Collection of key-value pairs inside `{ }`. | `{ "name": "Rahul" }` |
| **Key** | Name used to identify a value. | `"name"` |
| **Value** | Data associated with a key. | `"Rahul"` |
| **Array** | Collection of values inside `[ ]`. | `["React", "JavaScript"]` |
| **Nested Object** | Object inside another object. | `"address": { "city": "Kolhapur" }` |

### Accessing JSON Response:

```javascript
fetch('https://example.com/api/users')
  .then(response => response.json())
  .then(data => {

    console.log(data);
    console.log(data.name);

  })
  .catch(error => {
    console.log(error);
  });
```

### Accessing Individual Values:

```javascript
data.name
data.email
data.address.city
```

### Processing Arrays:

```javascript
data.map(item => {
  console.log(item.name);
});
```

### Complete Example:

```javascript
const getData = async () => {

  try {

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    const data = await response.json();

    console.log(data);

    data.forEach(user => {
      console.log(user.name);
      console.log(user.email);
    });

  } catch (error) {

    console.log('Error:', error);

  }

};
```

### Diagram:

```text
       React Native Application
                 │
                 ↓
            fetch() API
                 │
                 ↓
            API Server
                 │
                 ↓
            JSON Response
                 │
                 ↓
        response.json()
                 │
                 ↓
        JavaScript Object
                 │
          ┌──────┴──────┐
          ↓             ↓
       Access         Process
     data.name       map()/FlatList
          │             │
          └──────┬──────┘
                 ↓
          Display Data
```

### In short:

**API → JSON Response → `response.json()` → JavaScript Object → Access/Process → Display**

---

# Q13. Differentiate between FlatList and SectionList in React Native.

### Answer:

Both **FlatList** and **SectionList** are used to display large lists efficiently.

| Point | FlatList | SectionList |
|---|---|---|
| **Purpose** | Displays a single flat list. | Displays multiple sections. |
| **Data structure** | Simple array. | Array of sections. |
| **Sections** | No built-in section headers. | Supports section headers. |
| **Organization** | All items belong to one list. | Items are grouped into categories. |
| **Main props** | `data`, `renderItem`, `keyExtractor` | `sections`, `renderItem`, `renderSectionHeader` |
| **Example** | List of users/products. | Contacts grouped by city/category. |
| **Complexity** | Simpler. | Slightly more complex. |

## FlatList Example:

```javascript
const data = [
  { id: '1', name: 'Rahul' },
  { id: '2', name: 'Amit' },
  { id: '3', name: 'Sneha' },
];

<FlatList
  data={data}
  renderItem={({ item }) => (
    <Text>{item.name}</Text>
  )}
  keyExtractor={item => item.id}
/>
```

### Output:

```text
Rahul
Amit
Sneha
```

---

## SectionList Example:

```javascript
const sections = [
  {
    title: 'Students',
    data: ['Rahul', 'Amit'],
  },

  {
    title: 'Teachers',
    data: ['Priya', 'Raj'],
  },
];

<SectionList
  sections={sections}

  renderItem={({ item }) => (
    <Text>{item}</Text>
  )}

  renderSectionHeader={({ section }) => (
    <Text>{section.title}</Text>
  )}
/>
```

### Output:

```text
Students
  Rahul
  Amit

Teachers
  Priya
  Raj
```

### Diagram:

```text
              List Components
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       FlatList           SectionList
          │                   │
          ↓                   ↓
    Single List          Multiple Sections
          │                   │
     ┌────┼────┐         ┌────┴────┐
     ↓    ↓    ↓         ↓         ↓
   Item  Item  Item    Section   Section
                         │          │
                       Items      Items
```

### In short:

**FlatList → Single list**

**SectionList → Grouped lists with sections and headers**

---

# Q14. Write a program on React Native application that fetches JSON data from an API and displays the results using FlatList.

### Answer:

The following program fetches JSON data from a public API and displays it using `FlatList`.

### Program:

```javascript
import React, {
  useEffect,
  useState
} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch(
      'https://jsonplaceholder.typicode.com/users'
    )

      .then(response =>
        response.json()
      )

      .then(data => {
        setUsers(data);
      })

      .catch(error => {
        console.log('Error:', error);
      });

  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        User List
      </Text>

      <FlatList

        data={users}

        keyExtractor={item =>
          item.id.toString()
        }

        renderItem={({ item }) => (

          <View style={styles.item}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text>
              {item.email}
            </Text>

            <Text>
              {item.phone}
            </Text>

          </View>

        )}

      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default App;
```

### Explanation:

1. `useState()` stores the users.
2. `useEffect()` runs the API request.
3. `fetch()` requests data from the API.
4. `response.json()` converts the response.
5. `setUsers()` stores the data.
6. `FlatList` displays the users.
7. `keyExtractor` provides a unique key.
8. `catch()` handles errors.

### Diagram:

```text
       React Native Application
                 │
                 ↓
             fetch()
                 │
                 ↓
          Public API Server
                 │
                 ↓
             JSON Data
                 │
                 ↓
          response.json()
                 │
                 ↓
            setUsers()
                 │
                 ↓
             FlatList
                 │
                 ↓
          Display User List
```

---

# Q15. Explain AsyncStorage and its role in local data persistence in React Native.

### Answer:

**AsyncStorage** is an asynchronous persistent **key-value storage system** used to store small amounts of data locally on the device.

### Important Points:

1. It saves data locally.
2. Data remains available after the app is closed or restarted.
3. It stores data in key-value pairs.
4. Its operations are asynchronous.
5. It is suitable for small amounts of local data.

### Common Methods:

| Method | Purpose |
|---|---|
| `setItem()` | Stores data. |
| `getItem()` | Retrieves data. |
| `removeItem()` | Removes data. |
| `clear()` | Removes all stored data. |

### Storing Data:

```javascript
import AsyncStorage from
'@react-native-async-storage/async-storage';

await AsyncStorage.setItem(
  'username',
  'Rahul'
);
```

### Retrieving Data:

```javascript
const username =
  await AsyncStorage.getItem(
    'username'
  );

console.log(username);
```

### Storing Objects:

AsyncStorage stores strings, so objects should be converted to JSON.

```javascript
const user = {
  name: 'Rahul',
  age: 20
};

await AsyncStorage.setItem(
  'user',
  JSON.stringify(user)
);
```

### Retrieving Object:

```javascript
const data =
  await AsyncStorage.getItem('user');

const user =
  JSON.parse(data);
```

### Uses:

- User preferences
- Application settings
- Recently viewed items
- Onboarding status
- Simple local data

### Limitation:

AsyncStorage is **not suitable for large databases or highly sensitive information**.

### Diagram:

```text
          React Native App
                 │
                 ↓
           AsyncStorage
                 │
        ┌────────┴────────┐
        ↓                 ↓
     setItem()         getItem()
        │                 │
        ↓                 ↓
    Store Data       Retrieve Data
        │                 │
        └────────┬────────┘
                 ↓
        Local Device Storage
                 │
                 ↓
       Data persists across
       app sessions
```

### In short:

**AsyncStorage = Local key-value storage + Asynchronous operations + Data persistence**

---

# Q16. Differentiate between AsyncStorage and Context API.

### Answer:

AsyncStorage and Context API serve different purposes.

| Point | AsyncStorage | Context API |
|---|---|---|
| **Purpose** | Stores data persistently. | Shares data between components. |
| **Storage** | Device local storage. | React context/state. |
| **Persistence** | Survives app restart. | Normally resets after app restart unless persisted separately. |
| **Data type** | Key-value data, generally strings. | Objects, arrays, functions, state, etc. |
| **Access** | `setItem()`, `getItem()` | `Provider`, `useContext()` |
| **Operation** | Asynchronous. | Generally synchronous during rendering. |
| **Use** | Preferences, settings and local data. | Theme, user state, language, authentication. |

### AsyncStorage Example:

```javascript
import AsyncStorage from
'@react-native-async-storage/async-storage';

await AsyncStorage.setItem(
  'username',
  'Rahul'
);

const name =
  await AsyncStorage.getItem(
    'username'
  );
```

### Context API Example:

```javascript
const UserContext =
  createContext();

<UserContext.Provider value="Rahul">
  <Home />
</UserContext.Provider>
```

Inside `Home`:

```javascript
const username =
  useContext(UserContext);
```

### Diagram:

```text
             Data Management
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
     AsyncStorage          Context API
          │                   │
          ↓                   ↓
   Local Persistence      Data Sharing
          │                   │
          ↓                   ↓
   Device Storage        React Components
          │                   │
          ↓                   ↓
  Survives App Restart   Usually Session-based
```

### In short:

**AsyncStorage = Store data**

**Context API = Share data**

---

# Q17. Explain the Context API in React Native.

### Answer:

The **Context API** is a React feature used to share data between multiple components without passing props manually through every level of the component tree.

### Purpose:

1. Provides shared/global data.
2. Avoids prop drilling.
3. Makes common data easily accessible.
4. Useful for:
   - User information
   - Theme
   - Language
   - Authentication
   - Application preferences

### Main Components:

| Component | Purpose |
|---|---|
| `createContext()` | Creates a context. |
| `Provider` | Provides data to child components. |
| `useContext()` | Accesses the context data. |

### Steps:

1. Create a context.
2. Provide data using Provider.
3. Access data using `useContext()`.

### Complete Example:

```javascript
import React, {
  createContext,
  useContext
} from 'react';

import {
  View,
  Text
} from 'react-native';

const UserContext =
  createContext();

const Home = () => {

  const username =
    useContext(UserContext);

  return (
    <View>
      <Text>
        Welcome, {username}
      </Text>
    </View>
  );
};

const App = () => {

  return (
    <UserContext.Provider
      value="Rahul"
    >
      <Home />
    </UserContext.Provider>
  );
};

export default App;
```

### Advantages:

1. Reduces prop drilling.
2. Shares common data easily.
3. Makes code cleaner.
4. Improves maintainability.
5. Useful for small and medium applications.

### Diagram:

```text
                 App
                  │
          UserContext.Provider
                  │
           value = "Rahul"
                  │
                  ↓
                Home
                  │
                  ↓
             useContext()
                  │
                  ↓
          "Welcome, Rahul"
```

### In short:

**Context API = Create Context → Provide Data → Consume Data**

---

# Q18. Differentiate between local component state and Context API.

### Answer:

Local component state manages data belonging to one component, while Context API shares common data among multiple components.

| Point | Local Component State | Context API |
|---|---|---|
| **Purpose** | Manages component-specific data. | Shares data among components. |
| **Scope** | Limited to the component and its children through props. | Available within the Provider. |
| **Data sharing** | Usually passed through props. | Accessed using `useContext()`. |
| **Prop drilling** | May cause prop drilling. | Helps avoid prop drilling. |
| **Creation** | `useState()` | `createContext()` |
| **Access** | State variable and setter. | `useContext()` |
| **Suitable for** | Forms, counters, toggles, UI state. | Theme, user information, authentication, language. |

### Local State Example:

```javascript
const [
  count,
  setCount
] = useState(0);

<Button
  title="Increase"
  onPress={() =>
    setCount(count + 1)
  }
/>
```

### Context API Example:

```javascript
const UserContext =
  createContext();

<UserContext.Provider
  value="Rahul"
>
  <Home />
</UserContext.Provider>
```

```javascript
const user =
  useContext(UserContext);
```

### Diagram:

```text
             State Management
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
   Local Component        Context API
        State                 │
          │                   ↓
          ↓             Shared Data
    One Component             │
          │             ┌─────┴─────┐
          ↓             ↓           ↓
     useState()      Component A  Component B
```

### In short:

**Local State = Manage component-specific data**

**Context API = Share common data**

---

# Q19. Explain the different network request states in a React Native application.

### Answer:

When a React Native application communicates with an API, the network request generally passes through different states.

| State | Meaning | UI Response |
|---|---|---|
| **Initial / Idle** | No request has started. | Show normal screen/message. |
| **Loading** | Request sent and waiting for response. | Show loading spinner. |
| **Success** | Data received successfully. | Display data. |
| **Error** | Request failed. | Show error/retry option. |
| **Empty** | Request succeeded but no data returned. | Show "No data available". |

### 1. Initial / Idle

No network request has started.

```text
Status: Idle
Message: "Press button to load data"
```

### 2. Loading

Request is being processed.

```javascript
<ActivityIndicator />
```

### 3. Success

The API successfully returns data.

```text
Status: Success
Data: User list displayed
```

### 4. Error

Possible causes:

- No internet
- Server unavailable
- Incorrect URL
- Timeout

```text
Error: Unable to fetch data.
[Retry]
```

### 5. Empty

The API succeeds but returns no records.

```text
No data available.
```

### Example:

```javascript
const [
  loading,
  setLoading
] = useState(false);

const [
  data,
  setData
] = useState([]);

const [
  error,
  setError
] = useState(null);

const fetchData = async () => {

  setLoading(true);
  setError(null);

  try {

    const response =
      await fetch(
        'https://example.com/api'
      );

    const result =
      await response.json();

    setData(result);

  } catch (e) {

    setError(
      'Failed to fetch data'
    );

  } finally {

    setLoading(false);

  }
};
```

### Diagram:

```text
              Network Request
                    │
                    ↓
                  Idle
                    │
                Request Sent
                    ↓
                 Loading
                /       \
               /         \
              ↓           ↓
          Success        Error
              │           │
              ↓           ↓
        Check Data     Show Error
           /    \
          ↓      ↓
        Data   Empty
          ↓      ↓
       Display  No Data
```

### In short:

**Idle → Loading → Success / Error → Empty if no data**

---

# Q20. Explain network errors, empty responses, loading status, and successful responses with suitable example.

### Answer:

A React Native application should properly handle four important API/network states:

---

## 1. Loading Status

The request has been sent and the application is waiting for the response.

### Example:

```javascript
<ActivityIndicator size="large" />
```

### Output:

```text
Loading...
   ⟳
```

---

## 2. Successful Response

The API request completes successfully and returns data.

### Example:

```javascript
const response =
  await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );

const data =
  await response.json();

console.log(data);
```

### Output:

```text
Rahul
Amit
Sneha
```

---

## 3. Empty Response

The request succeeds, but no records are returned.

### Example:

```javascript
if (data.length === 0) {
  console.log(
    'No data available'
  );
}
```

### Output:

```text
No data available
```

---

## 4. Network Error

A network error occurs when the application cannot successfully communicate with the server.

### Possible Reasons:

- No internet connection
- Server unavailable
- Incorrect API URL
- Request timeout

### Example:

```javascript
try {

  const response =
    await fetch(
      'https://example.com/api/users'
    );

  const data =
    await response.json();

} catch (error) {

  console.log(
    'Network Error:',
    error
  );

}
```

### Complete Example:

```javascript
const fetchData = async () => {

  setLoading(true);
  setError(null);

  try {

    const response =
      await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

    const data =
      await response.json();

    if (data.length === 0) {

      setMessage(
        'No data available'
      );

    } else {

      setData(data);

    }

  } catch (error) {

    setError(
      'Network error. Please try again.'
    );

  } finally {

    setLoading(false);

  }
};
```

### Summary Table:

| State | Meaning | Action |
|---|---|---|
| **Loading** | Waiting for API response. | Show loading indicator. |
| **Success** | Data received successfully. | Display data. |
| **Empty** | Request succeeded but no data. | Show "No data available". |
| **Error** | Request failed. | Show error/retry option. |

### Diagram:

```text
             API Request
                  │
                  ↓
              Loading
                  │
          ┌───────┴────────┐
          ↓                ↓
       Success            Error
          │                │
          ↓                ↓
    Check Response    Network Error
       /       \
      ↓         ↓
    Data      Empty
      ↓         ↓
  Display    "No Data"
```

---

# Q21. Differentiate between HTTP status codes 2xx, 4xx, and 5xx in the context of API requests.

### Answer:

**HTTP status codes** are three-digit codes returned by a server to indicate the result of an API request.

| Point | 2xx – Success | 4xx – Client Error | 5xx – Server Error |
|---|---|---|---|
| **Meaning** | Request processed successfully. | Problem with client's request. | Server failed to process a valid request. |
| **Main cause** | Request and server processing succeed. | Incorrect URL, invalid data, authentication, permission, etc. | Server-side failure or server overload. |
| **Responsibility** | No error generally. | Client/application usually needs to correct the request. | Server/API usually needs to fix the problem. |
| **Common codes** | `200`, `201`, `204` | `400`, `401`, `403`, `404` | `500`, `502`, `503`, `504` |
| **Example** | API successfully returns user data. | Requested resource does not exist. | API server has an internal failure. |

---

## 1. 2xx – Successful Responses

2xx status codes indicate that the API request was successfully processed.

### Common Codes:

- **200 OK** → Request completed successfully.
- **201 Created** → New resource was successfully created.
- **204 No Content** → Request succeeded but there is no response body.

### Example:

```text
GET /users/1

Response:
200 OK

{
  "id": 1,
  "name": "Rahul"
}
```

---

## 2. 4xx – Client Errors

4xx status codes indicate that there is a problem with the request sent by the client.

### Common Codes:

- **400 Bad Request** → Invalid request.
- **401 Unauthorized** → Authentication required or invalid.
- **403 Forbidden** → Client does not have permission.
- **404 Not Found** → Requested resource does not exist.

### Example:

```text
GET /users/9999

Response:
404 Not Found
```

---

## 3. 5xx – Server Errors

5xx status codes indicate that the server encountered a problem while processing the request.

### Common Codes:

- **500 Internal Server Error**
- **502 Bad Gateway**
- **503 Service Unavailable**
- **504 Gateway Timeout**

### Example:

```text
GET /users

Response:
500 Internal Server Error
```

### Diagram:

```text
             HTTP Status Codes
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
       2xx         4xx         5xx
        │           │           │
        ↓           ↓           ↓
     Success     Client       Server
                 Error         Error
        │           │           │
      200 OK      404         500
      201         Not Found   Internal
      Created                 Error
```

### In short:

**2xx → Success ✅**

**4xx → Client-side error ❌**

**5xx → Server-side error ⚠️**

These codes help a React Native application understand the result of an API request and handle it appropriately.
