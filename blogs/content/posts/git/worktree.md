---
author: "Sadat Sayem"
title: "Git Worktrees"
date: "2019-03-11"
description: "A powerful feature for managing multiple working directories"
tags: ["Git", "Productivity"]
categories: ["Git"]
series: ["Git"]
aliases: ["git worktrees"]
cover:
  image: images/worktree.png
  caption: "Git Worktrees: A Powerful Feature for Managing Multiple Working Directories"
ShowToc: true
TocOpen: true
---

# Git Worktrees: A Powerful Feature for Managing Multiple Working Directories

Git worktrees are one of the most underutilized yet powerful features in Git. They allow us to maintain multiple working directories from a single Git repository, each with its own branch checked out. In this blog post, we’ll explore what worktrees are, their benefits, and how to effectively use them in your development workflow.

## What is a Git Worktree?

A Git worktree is an additional working directory linked to our main repository. Think of it as a way to check out multiple branches simultaneously, each in its own directory, while sharing the same Git history and objects.

The main repository (where we run `git worktree add`) is called the "main working tree," and any additional working directories we create are called "linked working trees."

## When to Use Git Worktree

* **Simultaneous Feature Development**: Work on multiple features at once without needing to switch branches.
* **Testing or Reviewing Pull Requests**: Test or review a pull request while keeping our current work intact.
* **Bug Fixes**: Easily switch between the main branch and bug fix branches without losing progress.
* **Experimentation**: Create a separate worktree for experiments, keeping our main branch clean.
* **Managing Legacy Branches**: Maintain older versions of our software alongside active development.
* **Easy Comparisons**: Compare different branches side by side in separate directories.
* **Reducing Clone Overhead**: Avoid multiple clones of a repository; use worktrees to save space.
* **Avoiding Merge Conflicts**: Prevent merge conflicts by isolating work on different branches.

## Git Worktree Concepts

Git worktree comes with several options; for this blog, we will focus on `git worktree` with branch only, as it’s the most common use case. The below commands we will be discussing in this post.

* Worktree Add
* Worktree List
* Worktree Remove

### Git Worktree Add

To create a new worktree, use the following command:

```bash
git worktree add <path> <branch>
```

Let’s assume we have a repository named `worktree-demo` in the `projects` folder and we are on a branch named `feature`:

```
projects/
├── worktree-demo/
│   ├── .git
│   ├── index.html
│   ├── main.js
```

Now we will create a new worktree from the `worktree-demo` repository:

```bash
git worktree add ../hotfix main
```

This creates a new directory named `hotfix` with the `main` branch checked out.

After creating a new worktree, the new project structure will look like this:

```
projects/
├── worktree-demo/
│   ├── .git
│   ├── index.html
│   ├── main.js
├── hotfix/
│   ├── .git
│   ├── index.html
│   ├── main.js
```

### Git Worktree List

To see all our current worktrees:

```bash
git worktree list
```

Output:

```
/Users/john/Workspace/worktree-demo  a7f2163   [feature]
/Users/john/Workspace/hotfix         a7f2163   [main]
```

### Git Worktree Remove

When we’re done with a worktree, we can remove it:

```bash
git worktree remove <path>
```

For example:

```bash
# if you are in hotfix directory (linked worktree)
git worktree remove .

# if you are in worktree-demo directory (main worktree)
git worktree remove ../hotfix
```

After deleting the linked worktree:

```
projects/
├── worktree-demo/
│   ├── .git
│   ├── index.html
│   ├── main.js
```

Give Git worktrees a try in your next project, and experience the benefits of this often-overlooked feature!

---
