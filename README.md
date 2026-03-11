# 🚦 Traffic Light Simulator

## 📖 About

This project was built using **JavaScript, HTML and CSS** to practice **programming logic and DOM manipulation**.

The application simulates a **traffic light** that can be controlled manually through buttons or automatically through a toggle mode.

During the development of this project, concepts such as **loops, state control, DOM selection, and event handling** were practiced.

The goal is to strengthen **core JavaScript fundamentals** and apply these concepts in future projects such as **image slideshows or interactive UI components**.

---

## 🧠 Concepts Practiced

This project focuses on fundamental JavaScript concepts:

* DOM element selection using `getElementById`
* Event handling using `addEventListener`
* Function organization
* Application state control
* Conditional logic (`if / else`)
* Timers with `setInterval` and `clearInterval`
* Toggle behavior implementation
* Separation of responsibilities in functions

---

## ⚙️ Features

### Manual Mode

The user can manually control the traffic light using buttons:

* 🔴 Red
* 🟡 Yellow
* 🟢 Green

Each button updates the traffic light image.

---

### Automatic Mode

The **Auto button** activates a toggle mode that cycles the traffic light automatically.

Sequence:

```
Red → Yellow → Green → Red ...
```

The images change every **1 second** using `setInterval`.

Pressing the button again stops the automatic mode and turns the traffic light off.

---

## 🧩 Project Structure

```
traffic-light-project
│
├── index.html
├── style.css
├── script.js
│
└── img
    ├── red.png
    ├── yellow.png
    ├── green.png
    └── turnOff.png
```

---

## 🖥️ Core Logic

The project works with a **simple state system**:

### Application State

```javascript
let buttonOn = false;
let interval;
let image = 0;
```

* `buttonOn` → controls whether automatic mode is active
* `interval` → stores the `setInterval` reference
* `image` → controls which traffic light image should appear

---

### Toggle System

The automatic mode works like a **toggle switch**:

```javascript
buttonOn = !buttonOn;
```

If the mode is turned on:

```
runImages()
```

If the mode is turned off:

```
clearInterval()
trafficLightTurnOff()
```

---

## 🎯 Learning Goals

This project was created to practice:

* Building small interactive systems with JavaScript
* Understanding how **state changes control UI behavior**
* Creating **reusable functions**
* Managing **timers and events**
* Organizing code in logical sections

---

## 🚀 Possible Improvements

Future improvements could include:

* Refactoring the automatic logic using arrays
* Creating a **configurable timing system**
* Implementing **keyboard controls**
* Adding **CSS animations**
* Converting the project into a **reusable slideshow component**

---

## 📚 Technologies

* HTML
* CSS
* JavaScript (Vanilla JS)

