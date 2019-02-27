---
title:  "Working with Git"
search: true
categories: 
  - DevOps
  - Git
last_modified_at: 2019-02-29T08:05:34-05:00
header:
  teaser: /assets/images/blog/working-with-git/working-with-git.jpeg
---

![Working with Git](/assets/images/blog/working-with-git/working-with-git.jpeg)

# Git

As we have learned what git and version control is, from my [previous blog](https://www.sashwat.in/devops/git/introduction-to-git/). Now, we will learn git commands, a developer will use at his early stages. To know the version of the git installed inside the computer, goto terminal and type:-

```bash
$ git --version
```

![git --version](/assets/images/blog/working-with-git/git-version.png)

Now, for using git, you need a service that uses git as version control. The service will act as your central / remote / online repository for your git repositories. You can use any service like github, gitlab, bitbucket and many more. I am using github for my projects. Goto any service and create an account in them. Goto the service and create a repository for learning git.

Now, we will configure the git installed in the computer 

```bash
$ mkdir test-repo # to create a test repo folder
$ cd test-repo # got inside the folder
$ git init # to initialise the folder as a git repository
```

![git init](/assets/images/blog/working-with-git/git-init.png)

After creating a local repo, we will to link the repository to a service that git like github, gitlab etc.
We will create a repository in Gitlab.

![gitlab](/assets/images/blog/working-with-git/gitlab-example.png)

Now, link the local repository created to the remote repository created o gitlab or any other server. You can do that by running the following command.

```bash
$ git remote add name url
```
![adding repo](/assets/images/blog/working-with-git/git-add-repo.png)

If you see the above image the command executed is `git remote add origin https://gitlab.com/Sashuu6/test-repo.git`, origin attribute defines the original path of repository from where it is taken. The URL after origin is taken as the repository's source URL. After this step, we need to set the upstream. That is, you have to set the branch to which you are going to upload the code.

```bash
$ git push --set-upstream origin branch-name
```

![adding repo](/assets/images/blog/working-with-git/git-upstream.png)

Now, if you dont want to do all these steps. That is, creating local repository using `git init`, add remote link using `git remote add <name> <url>` and setup upstream using `git push --set-upstream origin master`. You can just create the repository on github or gitlab and just clone the repository.

You can clone a git repository using:-
1. URL
2. SSH

![adding repo](/assets/images/blog/working-with-git/git-clone-techniques.png)

If you want to clone a git repository using URL, you can do that using the following.

```bash
$ git clone repo-url
```

![cloning repo using URL](/assets/images/blog/working-with-git/git-clone-using-url.png)

If you clone using URL, everytime you try to push code into the github / gitlab (or any remote repository), the console will ask for username and password. If you dont want that, you can use ssh.

For using SSH, you need to do setup you system. You need to generate keys for communication. You can do that using the following command.

```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
After executing the above command, you will be prompted just press enter. You might be asked for password, if you are using a public computer, then you should keep it or else no need. You need to copy the key generated to github or gitlab. Enter the following command to view the key.

```bash
$ cat id_rsa.pub
```

The generated ID will be displayed on the console. To validate if it is correct or not, it will start from `ssh-rsa`. Copy the key and goto github settings (if using github) and goto 'SSH and GPG Keys' and click 'new SSH Key' and give a title (Your PC hostname) and paste the copied key to the next field and save. Now, we can clone using SSH.

```bash
$ ssh clone ssh-url
```

![cloning repo using SSH](/assets/images/blog/working-with-git/git-clone-using-ssh.png)

We have successfully created a git repository. We will now configure the git engine installed in our system. The configuration involves telling who we are. That is, username and user email. We can do that as follows.

```bash
$ git config --global user.name "yourname" # to set your name
$ git config --global user.email "youremail" # to set your email
```
![git init](/assets/images/blog/working-with-git/git-config.png)

If you want to enable colour highlighting for your git console, just run the following commands.

```bash
$ git config --global color.ui true
$ git config --global color.status auto
$ git config --global color.branch auto
```
![git init](/assets/images/blog/working-with-git/git-ui-color.png)

When, we have to write huge commit message, we need a text editor linked to it. For doing that, we use the following command.

```bash
$ git config --global core.editor editor-name
```

![git init](/assets/images/blog/working-with-git/git-core-editor.png)

Here, if you see, I have given all config commands an tag `--global`, using this tag applies the configuration to your system and will be automatically implemented to all the git repositories you create inside your computer. If you are using git on your college computer, then from your git repository, run these configuration commands without using `--global` tag.

Now, we have added new configurations to the git repository. To view the configuration, use the following command.

```bash
$ git config --list
```

