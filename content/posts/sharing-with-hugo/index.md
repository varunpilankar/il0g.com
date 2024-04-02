+++
title = 'Sharing With Hugo'
date = "2024-04-03T03:15:08+05:30"
+++

# Start sharing with Hugo, Git and Cloudflare

## Introduction

Thank you opening my link to read through, weather you call this a post, blog, static website or hugo. the main purpose of writing this down and sharing openly online is in focus to unlearn and learn new things. And i thought improving my writing habits would be a great skill to sharpen this year as a goal. So this where i am embarrassing myself publicly online to get some feedback on how to improve this place and continue my journey as a habit to share online as much i could. Let me highlight the key points which you might come across over the course of time on this website whether i share a movie, book, music or tech review. all will be share from my personal experience and voice which will not be taken as a biased or personally as i will be sharing it as saw as possible without any editorial filter. So please don't be offended by any of it.

## Dumping Knowledge for yourself
Over the course of last 7 years of my entrepreneurial journey i have learn a key lesson. Before that i would like to set some bases to it so the read is much enjoyable rather then being too vague.

Through out childhood to job has been a journey to absorb knowledge. Weather it was playing in the kidder garden, doing literature homework as a essay, or writing your science/piratical journal with a intense deadline. We never focus on keeping the information organised for ourselves. Until now in the digital age where we are surrounded my infinite amount of information at our finger tip by just Googling every small thing. 

This habit itself has made us lazy enough not to remember some of the phone numbers we use to know few years back.

A research page says, we spend 70% of our energy, time and resource to search for the same information we know, had or its not handy anymore. I am saying this coz i personally have gone through the chaos and the nightmare. I started searching for productivity tricks, hacks or what ever you call it. Organising tools. Workflow management. But one day i heard a term called Second Brain. Spoiler Alert - its a Personal Knowledge Management Framework, if implement and practiced write will work like a personal lifes' google search to get any information you must have dump into it.

## Realising sharing is Caring 

While i just mentioned about Second Brain as framework and a life style to live by. This itself is a key highlight to change how you foresee your life going forward. Its a game changer for many, and for me too. While i am trying to share this with my reader itself gives me a bless like feel as i realise by sharing knowledge to dont quench it but multiple and amplify it. And I would like to share as much as i could going forward. This place - il0g would be the best way to connect to many and not just few who can constantly revisit to interlink common topics and much more through emails or comments. To keep it simple, I consider it would be best to have a static website which is connected to my vault and that would make things much easier to share my notes on this place. While not getting involved into the rabbit hole of Website CMS or framework like Wordpress, Express, Vue, etc. I considered picking Hugo which is a elegant piece to have Static Site Generator. If you ever consider to go this route as a starter consider this a guide post for Hugo SSG.

## Getting Started with SSG

### Note
#### Be Aware
This is not a easy task to get started. You need to be technically aware as considering myself who is actively involved into tech world still faced a lot of problem to set it up. I will try to keep it simple as possible.

### Prerequisite
1. MacOS - Any Mac Device (MacBook, Mac Mini, iMac)
2. Xcode
3. Homebrew
4. Git CLI
5. Go Lang
6. Hugo
7. GitHub
8. Cloud Flare
9. Domain (Optional)

#### MacOS - Any Mac Device (MacBook, Mac Mini, iMac)
this guide focus on MacOS as my setup experiecene has been around using my MacBook Pro (A1708 - Intel Based). If you are a Windows user i will try to link some guide for it, but wont be covering it over here.

To get started it is firstly recommended to be on latest MacOS. While i am documenting this article i'm using MacOS Ventura 13.6.6 which might vary depending on the device you use. But as far as you are not using too old of the device and software you should be fine.

Considering you haven't installed Xcode and Homebrew while also assuming you are not a technical and tech savvy person as you are still reading this step. you might feel a bit uncomfortable going forward and dont want to yourself or your device land up in comma. these are just developer tools for which using command line or terminal is quite common thing. So warm up your fingers and follow the instructions below.

1.  Open the Terminal or iTerm application on your Mac. Use Spotlight to have a quick access to launch it.
2. **Install Xcode Command Line Tools** 
	1. Run the following command to install Xcode Command Line Tolls on your Mac device.
	2. ` xcode-select --install `
	3. **Note** - This might take quite sometime, so its recommended to grab your favourite beverage or a coffee until this is over 
3. Once done, its time to install Homebrew using step 1 of this guide i.e. Terminal or iTerm
4. Copy and Paste the following command to install Homebrew.
5. ` /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" `
6. Hit return and let installation complete.

Congratulation you have successfully installed both Xcode Command Line Tools (from Apple) and HomeBrew onto your MacOS.

Again open your Terminal or iTerm and Copy-Paste the following command to install git 

` brew install git `

Then you can install Go Lang using homebrew by using this command

` brew install golang `

Once the installation is complete, you can check the Go Lang Version by typing in

` go version `

If you have reach until here with no problem or errors. You have won half of your battle through.


#### Install Hugo (SSG Framework)

Using Homebrew your can now easily install Hugo by using terminal package manager

` brew install hugo `


> Note 
> To move further you will be needing a GitHub or Git Bucket Account. I will be covering instruction about GitHub as thats what I have used for my SSG setup

I wont cover the basic about sign up process for GitHub as its quite easy. But at the same time i wont abandone you in the middle of the rode so consider referring to this link(GITHUB SIGN UP PROCESS).
