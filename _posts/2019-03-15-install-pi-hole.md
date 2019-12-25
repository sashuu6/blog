---
title: "Install Pi Hole"
search: true
categories:
  - Linux
  - Networking
  - Pi Hole
  - Raspberry Pi
last_modified_at: 2019-12-20 08:05:34
header:
  teaser: /assets/images/blog/install-pi-hole.png
---

![Install Pi Hole](/assets/images/blog/install-pi-hole.png)

## Introduction

At this stage of every movement in virtual space being tracked for advertisement and malware. There is a need for an Ad blocker that blocks ads and trackers.

## What is Pi Hole?

Pi hole is a DNS sinkhole that protects the devices from unwanted content. A DNS sinkhole outputs false results for a domain name.

## Why Pi hole Raspberry Pi

Using a dedicated hardware is always best rather than deploying on VMs. As raspberry pi is a cheap alternative for deploying Pi hole as a dedicated hardware. Use Ethernet for connection rather than WiFi because It is dedicated and more reliable. So use Raspberry Pis with Ethernet RJ45. Try to avoid Raspberry Pi Zero for deploying Pi hole.

## Instructions to install Pi Hole

1. Get raspbian lite image onto your microSD card.
   1. Download Raspbian Lite from [here](https://www.raspberrypi.org/downloads/raspbian/).
   2. Download Ecther from [here](https://www.balena.io/etcher/) and install it.
   3. Burn the operating system into the SD card.
2. After buring the sdcard, connect the card to the Pi and connect the ethernet to the pi and connect the power cable.
3. When the Pi boots up, get the IP address of the pi.
4. ssh to the pi.<br> `$ ssh pi@ip-address`
5. The password of pi is raspberry.
6. Install pi hole using the following command.<br> `$ curl -sSL https://install.pi-hole.net | bash`
7. Follow the steps to complete the installation.
8. Set the IP address of the pi as DNS in router configuration.

To access the Pi hole settings, type the following on the browser.

http://ip-address/admin

You can do the following in pi hole console:-

1. Query logs
2. Graph analysis
3. Whitelist URLs
4. Blacklist URLs
5. Disable pi hole
