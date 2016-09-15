## Tenori-Online

### Background

The Tenori-on is a musical device composed of a 16 x 16 grid, each row of which represents a particular sound, and each column of which represents the timing of a beat. A user may toggle any of the note switches, and the device will play the notes from left to right in a steady, repeated rhythm. A dial allows the user to change the speed of the playback.

This project is a Javascript-based version of the Tenori-on as outlined below.

### Functionality & MVP  

With Tenori-Online, users will be able to:

- [ ] Start and pause playback
- [ ] Toggle note switches on or off, or clear the board of notes
- [ ] Play a demo song to demonstrate the board's capabilities
- [ ] Use a slider to control the speed of playback

In addition, this project will include:

- [ ] An Instructions modal describing the how to operate the Tenori-Online
- [ ] A production Readme

### Wireframes

This app will consist of a single page with a 16 x 16 switch grid, a slider to control the speed of playback, controls to start and stop playback or clear the board, and links to my Github, LinkedIn, and the instructions.

![wireframes](wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Javascript and jQuery for structure and logic
- React and Redux for DOM manipulation and frontend components
- Webpack to bundle scripts into one file
- `Sound.js` for notes, or `note.js` with simple HTML5 oscillator

There will be several scripts in this project:

`switchboard.js`: this script will hold the `Switchboard` class and keep track of playback speed.

`switch.js`: this script will hold the `Switch` class that can be toggled on or off and has a play function that produces the appropriate sound.

`note.js`: this script will use for the basic note creation until I incorporate `Sound.js`

The following components will also be needed:

`tenori-online`: the master component that will render into the DOM.

`switchboard.jsx`: this component will render the containing grid.

`switch.jsx`: this component will render one switch, toggling between lit, unlit, and played color schemes.


### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Outline all Javascript classes and components. Setup component structure. Goals for the day:

- Get a green bundle with `webpack`
- Research `Sound.js` to see if that will give me better notes than the `note.js` HTML5 oscillator

**Day 2**: Build the frontend components. Render a `Switchboard` to the screen, with 16 x 16 `Switch`es. Build in functionality to toggle switches on and off by clicking. Style in a presentable way. Goals for the day:

- Complete the `switchboard.jsx` component
- Complete the `switch.jsx` component
- Render Switchboard and Switches to screen
- Make each switch clickable, toggling the color

**Day 3**: Build out the backend. Write the `Switchboard` class logic, and the `Switch` class logic. At least implement the `note.js` file for notes. Ideally, use `Sound.js` to create different sounds. Develop the playback logic. Implement a simple demo song to demonstrate playback. Goals for the day:

- Complete the `switchboard.js` and `switch.js` classes
- Produce notes from switches toggled on
- Establish playback at a set speed
- Develop simple demo song

**Day 4**: Develop the controls for the user to set playback. Style these controls with a comfortable user interface. Goals for the day:

- Install controls for playback start and stop and clearing the switchboard.
- Install a slider to control playback speed smoothly.
- Style these elements and polish the entire app appearance.

### Bonus features

If I have time, I would like to develop the following features.

- [ ] The user may, in addition to just clicking on a switch, drag their selection to toggle many switches.
- [ ] The switchboard has interesting visual effects during playback.
- [ ] The user can select between different sets of sounds, whether that is higher or lower keys or different sounds entirely.
