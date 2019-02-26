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

# Introduction

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

We have successfully created a git repository. We will now configure the git engine installed in our system. The configuration involves telling who we are. That is, username and user email. We can do that as follows.

```
$ git config --global user.name "yourname" # to set your name
$ git config --global user.email "youremail" # to set your email
```
![git init](/assets/images/blog/working-with-git/git-config.png)