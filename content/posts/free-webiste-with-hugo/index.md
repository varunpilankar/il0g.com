+++
title = 'Free Webiste With Hugo'
date = 2024-04-05T17:34:50+05:30
+++

# Start sharing with Hugo, Git and Cloudflare

## Introduction

Thank you opening my link to read through, weather you call this a post, blog, static website or hugo. the main purpose of writing this down and sharing openly online is in focus to unlearn and learn new things. And i thought improving my writing habits would be a great skill to sharpen this year as a goal. So this where i am embarrassing myself publicly online to get some feedback on how to improve this place and continue my journey as a habit to share online as much i could. Let me highlight the key points which you might come across over the course of time on this website whether i share a movie, book, music or tech review. all will be share from my personal experience and voice which will not be taken as a biased or personally as i will be sharing it as saw as possible without any editorial filter. So please don't be offended by any of it.

## Dumping Knowledge for yourself
Over the course of last 7 years of my entrepreneurial journey i have learn a key lesson. Before that i would like to set some bases to it so the read is much enjoyable rather then being too vague.

Through out childhood to job has been a journey to absorb knowledge. Weather it was playing in the kidder garden, doing literature homework as a essay, or writing your science/piratical journal with a intense deadline. We never focus on keeping the information organised for ourselves. Until now in the digital age where we are surrounded my infinite amount of information at our finger tip by just Googling every small thing. 

This habit itself has made us lazy enough not to remember some of the phone numbers we use to know few years back.

A research page says, we spend 70% of our energy, time and resource to search for the same information we know, had or its not handy anymore. I am saying this coz i personally have gone through the chaos and the nightmare. I started searching for productivity tricks, hacks or what ever you call it. Organising tools. Workflow management. But one day i heard a term called Second Brain. Spoiler Alert - its a Personal Knowledge Management Framework, if implement and practiced write will work like a personal lifes' google search to get any information you must have dump into it.

## Realising sharing is caring 

While i just mentioned about Second Brain as framework and a life style to live by. This itself is a key highlight to change how you foresee your life going forward. Its a game changer for many, and for me too. While i am trying to share this with my reader itself gives me a bless like feel as i realise by sharing knowledge to dont quench it but multiple and amplify it. And I would like to share as much as i could going forward. This place - il0g would be the best way to connect to many and not just few who can constantly revisit to interlink common topics and much more through emails or comments. To keep it simple, I consider it would be best to have a static website which is connected to my vault and that would make things much easier to share my notes on this place. While not getting involved into the rabbit hole of Website CMS or framework like Wordpress, Express, Vue, etc. I considered picking Hugo which is a elegant piece to have Static Site Generator. If you ever consider to go this route as a starter consider this a guide post for Hugo SSG.

## Getting Started with SSG

> Note to be aware
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
	- Run the following command to install Xcode Command Line Tolls on your Mac device.
```bash
xcode-select --install
```
>**Note**
This might take quite sometime, so its recommended to grab your favourite beverage or a coffee until this is over.

3. Once done, its time to install Homebrew using step 1 of this guide i.e. Terminal or iTerm
4. Copy and Paste the following command to install Homebrew.
```bash 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
```
5. Hit return and let installation complete.

Congratulation you have successfully installed both Xcode Command Line Tools (from Apple) and HomeBrew onto your MacOS.

Again open your Terminal or iTerm and Copy-Paste the following command to install git 

```bash
brew install git
```

Then you can install Go Lang using homebrew by using this command
```bash
brew install golang
```

Once the installation is complete, you can check the Go Lang Version by typing in
```bash
go version
```

If you have reach until here with no problem or errors. You have won half of your battle through.


#### Install Hugo (SSG Framework)

Using Homebrew your can now easily install Hugo by using terminal package manager

```bash 
brew install hugo 
```


> Note 
> To move further you will be needing a GitHub or Git Bucket Account. I will be covering instruction about GitHub as thats what I have used for my SSG setup

I wont cover the basic about sign up process for GitHub as its quite easy. But at the same time i wont abandone you in the middle of the rode so consider referring to this link(GITHUB SIGN UP PROCESS).

Once hugo is installed successfully. We can move on to setting up project folder for our website files to reside in. 

#### Setting up Project Folder with GitHub

To get started on Hugo Site, create a project folder

1.  Create a project folder, for example "hugo-webiste". You can create this in any directory path which might look something like this
	1. /Users/ABC/Documents/Project/GitHub/hugo-site
	2. this can be done using terminal as well which I highly recommend.
2. For this, open the Terminal or iTerm application on your Mac. Use Spotlight to have a quick access to launch it.
3. Type the following commands in the terminal and press enter
```bash
cd /Users/ABC/Documents/Project/GitHub/
mkdir hugo-website
```

#### Here are the steps to create a new Hugo site:

1. First, navigate to the directory where you want to create your new site, then run:
```bash
hugo new site demo-website
```
Replace `demo-website` with the name of your site.

2. This will create a new directory with the name of your site, and inside this directory, you should see a `config.toml` or `hugo.toml` file.

3. Open the `config.toml` file and set the `theme` parameter to `"console"` (or whatever the name of the theme's directory is).

If you've already created a Hugo site but can't find the `config.toml` file, it's possible that your site is using a different configuration format. Hugo also supports `config.yaml` and `config.json` files. If you see one of these files instead, you can either convert it to TOML format, or continue using the current format and adjust the instructions accordingly.

#### How to use Git Command (CheatSheet)

Sure, here's a beginner-level Git command cheat sheet specifically for working with Hugo Static Site Generator (SSG):

```markdown
**Git Cheat Sheet for Hugo SSG**

1. **Initialize a Git repository**
   Use the command `git init` to initialize a new Git repository in your Hugo project directory.

2. **Clone a Hugo Git repository**
   Use `git clone <repository_url>` to clone a Hugo repository from a remote server to your local machine.

3. **Check the status of your Hugo repository**
   `git status` will show you the status of your Hugo repository, including any changes that have been staged, unstaged, or uncommitted.

4. **Add changes to the staging area**
   Use `git add <file>` to add a specific file to the staging area, or `git add .` to add all changes in the current directory.

5. **Commit changes**
   `git commit -m "<commit_message>"` will commit your staged changes to the repository with a descriptive message.

6. **Push changes to a remote repository**
   `git push origin master` will push your committed changes to the master branch of your remote repository.

7. **Pull changes from a remote repository**
   `git pull origin master` will fetch changes from the master branch of a remote repository and merge them into your current branch.

8. **Create a new Hugo post**
   Use `hugo new posts/<your-post>.md` to create a new post in your Hugo site.

9. **Start the Hugo server**
   Use `hugo server -D` to start the Hugo server and preview your site.

Remember, this is a basic cheat sheet and there are many more commands and features in both Git and Hugo. This should help you get started with managing your Hugo site using Git.
```
#### Hugo Theme 

Go to `https://themes.gohugo.io/`
ickany theme you lik, and download its theme contain.
Unzip and put the theme folder inside the project folder. For example: `/Users/ABC/Documents/Project/GitHub/hugo-site/themes/your-theme-folder`
Now its time  to test if everything is working well. To do so , at the  main project folder  i.e. `hugo-site` open it in rterminal and run the follwoing command.

`hugo server`

This  willl help you run the we page on local  sever to see if everyhtin is running well  before we push it to GitHub and  move on to Cloud Flare.


I hope this helps! Let me know if you have any other questions. 😊


