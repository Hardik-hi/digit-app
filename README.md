# Digit

![D I G I T](https://user-images.githubusercontent.com/55993168/151996213-7aa9bbcc-f9c8-4e20-9d76-285798eb751b.png)

Digit is a simple desktop application for digital wellbeing. It helps users follow the [20-20-20 rule](https://www.healthline.com/health/eye-health/20-20-20-rule). A simple countdown timer runs starts when the app is booted and notifies every 20 minutes with options to pause and reset the timer through OS notifications.


* [Installation](#installation)  
* [Screenshots](#screenshots)  
* [Troubleshooting](#troubleshoot)<br>
      - [Windows](#windows)<br>
      - [MacOS](#macos)
* [Reporting issues](#issues)
* [Future](#future)
* [A small note](#notes)


## Installation 📥<a name="installation"/>

Check the [releases](https://github.com/Hardik-hi/digit-app/releases/tag/v1.0.0) for the latest release for your OS:

1. **Windows 10** : digit-1.0.0.Setup.exe 
2. **MacOS**      : digit-darwin-x64-1.0.0.zip
3. **Linux**      : digit_1.0.0_amd64.deb , digit-1.0.0-1.x86_64.rpm

*Note: The application is unsigned and unnotarized so please watch this repo for updates.*

For local publishing: `` npm install `` , `` npm run publish ``

## Screenshots 🖼<a name="screenshots"/>

<table align="center">
  <tr>
    <td> <img alt="Windows: Running timer" style="display:inline" src="https://user-images.githubusercontent.com/55993168/152150250-ebc7bc3e-dab4-494c-8699-24b03cf9d3e0.PNG"> <br><i>  Running timer (Windows)</i>
    <td> <img width="300" alt="ss3" src="https://user-images.githubusercontent.com/55993168/152151779-cddf916f-3c40-4c86-aff3-a5061cf4d7fb.PNG"> <br> <i>Display after 20 minutes (Windows)</i>
  </tr>
</table>


## Troubleshooting/FAQs 🐛<a name="troubleshoot"/>

### Windows <a name="windows"/>

1.  **SmartScreen warning** : The app might show SmartScreen warning because Digit is not signed for Windows and hence is not recognised by the smart screen filter. The app, however, is safe to use and you may run it by clicking on `` More Info > Run anyway ``.

2.  **Desktop shortcut icon is not of Digit** : If the desktop shortcut icon  looks something like this- <img height="20" src="https://user-images.githubusercontent.com/55993168/152157398-f017f248-7012-4b82-a09f-3ac6f17f449f.png">(icon of Electron - the framework used to develop this app), try restarting your device to refresh the icon cache. If it does not work, try running `` ie4uinit -show `` in command prompt.

3.  **Green-color window on running .exe file** : This is shown by the [Squirrel installer](https://github.com/Squirrel/Squirrel.Windows) and will only be displayed for the first time. This essentially installs the application and the app may be accessed under the Start Menu or from the desktop shortcut.

    <img src="https://user-images.githubusercontent.com/55993168/152162816-3357a3ab-5489-4e88-a223-5663b98d5107.png" height="100"><br>



### MacOS <a name="macos"/>

1. **Gatekeeper warning** : Since app is not notarized, Gatekeeper will issue a warning. Refer [this](https://eclecticlight.co/2020/11/19/getting-unnotarized-apps-out-of-quarantine) to troubleshoot.

*For other issues, see below*

## Issues ⚠ <a name="issues"/>

DevTools is enabled because app is in testing phase for MacOS and Linux. If you find any issue press `` Ctrl+Shift+I `` / `` Cmd+Shift+I `` and use it to create a new issue in [Issues section](https://github.com/Hardik-hi/digit-app/issues).

## Future 🎇 <a name="future"/>

1. Dark mode
2. Docking option
3. Random messages in notifs

## A small note ✍ <a name="notes"/>

I heard of the 20-20-20 rule and had been planning to make something to help me minimise my screentime for the past few months. I recently started with Angular and so thought of integrating it with electron and make a desktop app. I do agree that using default timer apps is an easy way to take breaks, and that there are many apps that do this explicitly. I couldn't sign the app because the ceritifcation is a cumbersome and costly process (at least for me).The app was mainly developed for personal learning; if it adds some value to your life, do post your feedback [here](https://github.com/Hardik-hi/digit-app/issues/1) :)


*Finally, a big thanks to my friends for testing it out and for all the people working in Open Source.*

**Contributions are welcome ❤**

