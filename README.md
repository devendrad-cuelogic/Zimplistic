# Zimplistic
Zimplistic

A simple demo for socket.io for realtime app

## Setup / Usage 

```
$ cd Zimplistic
$ npm install
$ node index.js
```

And point your browser to links mentioned in Description section, in different tabs.

## Description
The app has three modules , namely :
- Rotimatic (`http://localhost:3000/rotimatic`)
- Dashboard (`http://localhost:3000/dashboard`) 
- MobileApp (`http://localhost:3000/mobile`) 

## Features
- Rotimatic : Emulating the rotimatic device here, logging the command received
- Dashboard : Emulating QA Console ( view only for now ) , which will log the communication between mobile app and the device
- MobileApp : Simple interface to command the rotimatic device. ( Native android implementation is at [https://github.com/devendrad-cuelogic/Zimplistic-android](https://github.com/devendrad-cuelogic/Zimplistic-android)

## Usage
- Go to `http://localhost:3000/rotimatic` and `http://localhost:3000/dashboard`
- Either from `http://localhost:3000/mobile` or using android mobile app send one of the available commands described in Available Commands section 
- See it reflect on dashboard and rotimatic machine modules


## Available Commands to send to machine 
- `ON DEVICE`
- `OFF DEVICE`
- `COOK <num_of_rotis>`
