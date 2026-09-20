import type { Metadata } from "next";
import GitCommandSearch from "./GitCommandSearch";

export const metadata: Metadata = {
  title: "Git Commands Cheat Sheet",
  description:
    "Comprehensive Git commands for repositories, branches, commits, merging, rebasing, remotes, stash, tags, history and DevOps workflows.",
};

type Command = {
  command: string;
  description: string;
};

type CommandSection = {
  title: string;
  commands: Command[];
};

const commandSections: CommandSection[] = [
  {
    title: "Git Setup and Configuration",
    commands: [
      {
        command: "git --version",
        description: "Display the installed Git version.",
      },
      {
        command: "git config --global user.name \"Your Name\"",
        description: "Set the global Git username used for commits.",
      },
      {
        command: "git config --global user.email \"you@example.com\"",
        description: "Set the global email address used for commits.",
      },
      {
        command: "git config --global --list",
        description: "Display global Git configuration settings.",
      },
      {
        command: "git config --list",
        description: "Display Git configuration settings currently in effect.",
      },
      {
        command: "git config --global init.defaultBranch main",
        description: "Set main as the default branch name for newly initialized repositories.",
      },
    ],
  },
  {
    title: "Repository Initialization",
    commands: [
      {
        command: "git init",
        description: "Initialize a new Git repository in the current directory.",
      },
      {
        command: "git status",
        description: "Show the current repository state and changed files.",
      },
      {
        command: "git status --short",
        description: "Display a compact summary of repository changes.",
      },
      {
        command: "git add .",
        description: "Stage all changes in the current repository.",
      },
      {
        command: "git add <file>",
        description: "Stage a specific file.",
      },
      {
        command: "git commit -m \"message\"",
        description: "Create a commit containing the staged changes.",
      },
    ],
  },
  {
    title: "Clone and Remote Repositories",
    commands: [
      {
        command: "git clone https://github.com/user/repo.git",
        description: "Clone a remote Git repository to the local machine.",
      },
      {
        command: "git remote -v",
        description: "Display configured remote repository URLs.",
      },
      {
        command: "git remote add origin <URL>",
        description: "Add a remote repository named origin.",
      },
      {
        command: "git remote get-url origin",
        description: "Display the URL configured for the origin remote.",
      },
      {
        command: "git fetch origin",
        description: "Download objects and references from the origin without changing the current branch.",
      },
      {
        command: "git fetch --all",
        description: "Fetch updates from all configured remotes.",
      },
    ],
  },
  {
    title: "Status and Inspection",
    commands: [
      {
        command: "git status",
        description: "Show staged, unstaged and untracked changes.",
      },
      {
        command: "git status --short",
        description: "Show a compact two-column status of changed files.",
      },
      {
        command: "git diff",
        description: "Show unstaged changes in tracked files.",
      },
      {
        command: "git diff --cached",
        description: "Show changes currently staged for the next commit.",
      },
      {
        command: "git show",
        description: "Display details about a commit.",
      },
      {
        command: "git show <commit>",
        description: "Display a specific commit and its changes.",
      },
      {
        command: "git branch",
        description: "List local branches.",
      },
      {
        command: "git branch -a",
        description: "List local and remote-tracking branches.",
      },
    ],
  },
  {
    title: "Add and Commit",
    commands: [
      {
        command: "git add <file>",
        description: "Stage one specific file.",
      },
      {
        command: "git add .",
        description: "Stage changes under the current directory.",
      },
      {
        command: "git add -A",
        description: "Stage all additions, modifications and deletions in the repository.",
      },
      {
        command: "git commit -m \"Add feature\"",
        description: "Create a commit with a message.",
      },
      {
        command: "git commit --amend",
        description: "Modify the most recent commit.",
      },
      {
        command: "git commit --amend --no-edit",
        description: "Update the latest commit without changing its commit message.",
      },
    ],
  },
  {
    title: "Branches",
    commands: [
      {
        command: "git branch",
        description: "List local branches.",
      },
      {
        command: "git branch feature/login",
        description: "Create a new branch without switching to it.",
      },
      {
        command: "git switch feature/login",
        description: "Switch to an existing branch.",
      },
      {
        command: "git switch -c feature/login",
        description: "Create and switch to a new branch.",
      },
      {
        command: "git checkout feature/login",
        description: "Switch to an existing branch using the older checkout command.",
      },
      {
        command: "git branch -d feature/login",
        description: "Delete a local branch after it has been merged.",
      },
      {
        command: "git branch -D feature/login",
        description: "Force-delete a local branch. Use carefully.",
      },
      {
        command: "git branch -m new-name",
        description: "Rename the current branch.",
      },
    ],
  },
  {
    title: "Merge and Rebase",
    commands: [
      {
        command: "git merge feature/login",
        description: "Merge a branch into the current branch.",
      },
      {
        command: "git merge --no-ff feature/login",
        description: "Create a merge commit even when a fast-forward merge is possible.",
      },
      {
        command: "git rebase main",
        description: "Replay the current branch commits on top of main.",
      },
      {
        command: "git rebase -i HEAD~3",
        description: "Interactively edit, reorder, squash or drop recent commits.",
      },
      {
        command: "git rebase --continue",
        description: "Continue a rebase after resolving conflicts.",
      },
      {
        command: "git rebase --abort",
        description: "Cancel an in-progress rebase and return to the previous state.",
      },
      {
        command: "git merge --abort",
        description: "Cancel an in-progress merge when supported by the current repository state.",
      },
    ],
  },
  {
    title: "Push and Pull",
    commands: [
      {
        command: "git push origin main",
        description: "Push the local main branch to the origin remote.",
      },
      {
        command: "git push",
        description: "Push the current branch to its configured upstream branch.",
      },
      {
        command: "git push -u origin feature/login",
        description: "Push a new branch and configure its upstream remote branch.",
      },
      {
        command: "git pull",
        description: "Fetch and integrate changes from the configured upstream branch.",
      },
      {
        command: "git pull --rebase",
        description: "Fetch and rebase local commits on top of the upstream branch.",
      },
      {
        command: "git push origin --delete feature/login",
        description: "Delete a branch from the remote repository.",
      },
    ],
  },
  {
    title: "Stash",
    commands: [
      {
        command: "git stash",
        description: "Temporarily save uncommitted changes and clean the working tree.",
      },
      {
        command: "git stash push -m \"work in progress\"",
        description: "Create a named stash containing current changes.",
      },
      {
        command: "git stash list",
        description: "List saved stashes.",
      },
      {
        command: "git stash pop",
        description: "Apply the latest stash and remove it from the stash list.",
      },
      {
        command: "git stash apply",
        description: "Apply the latest stash without removing it.",
      },
      {
        command: "git stash drop",
        description: "Delete a stash entry.",
      },
      {
        command: "git stash clear",
        description: "Delete all stashes. Use carefully.",
      },
    ],
  },
  {
    title: "History and Logs",
    commands: [
      {
        command: "git log",
        description: "Display commit history.",
      },
      {
        command: "git log --oneline",
        description: "Display a compact one-line commit history.",
      },
      {
        command: "git log --oneline --decorate --graph",
        description: "Display a compact graphical branch and commit history.",
      },
      {
        command: "git log --oneline -10",
        description: "Show the ten most recent commits in compact format.",
      },
      {
        command: "git log --author=\"Name\"",
        description: "Filter commit history by author.",
      },
      {
        command: "git log --since=\"1 week ago\"",
        description: "Show commits created within a specified time period.",
      },
      {
        command: "git reflog",
        description: "Show updates to local branch references, useful for recovering previous states.",
      },
    ],
  },
  {
    title: "Undo Changes",
    commands: [
      {
        command: "git restore <file>",
        description: "Discard unstaged changes in a tracked file.",
      },
      {
        command: "git restore --staged <file>",
        description: "Remove a file from the staging area without deleting its working-tree changes.",
      },
      {
        command: "git reset HEAD <file>",
        description: "Unstage a file using the reset command.",
      },
      {
        command: "git revert <commit>",
        description: "Create a new commit that reverses the changes introduced by another commit.",
      },
      {
        command: "git reset --soft HEAD~1",
        description: "Move HEAD back one commit while keeping changes staged.",
      },
      {
        command: "git reset --mixed HEAD~1",
        description: "Move HEAD back one commit while keeping changes in the working tree but unstaged.",
      },
      {
        command: "git reset --hard HEAD~1",
        description: "Move HEAD back one commit and discard working-tree changes. Use with extreme care.",
      },
    ],
  },
  {
    title: "Tags and Releases",
    commands: [
      {
        command: "git tag",
        description: "List local Git tags.",
      },
      {
        command: "git tag v1.0.0",
        description: "Create a lightweight tag for the current commit.",
      },
      {
        command: "git tag -a v1.0.0 -m \"Release 1.0.0\"",
        description: "Create an annotated release tag.",
      },
      {
        command: "git show v1.0.0",
        description: "Display information about a tag.",
      },
      {
        command: "git push origin v1.0.0",
        description: "Push a specific tag to the remote repository.",
      },
      {
        command: "git push origin --tags",
        description: "Push all local tags to the remote repository.",
      },
    ],
  },
  {
    title: "Diff and Comparison",
    commands: [
      {
        command: "git diff",
        description: "Show unstaged changes.",
      },
      {
        command: "git diff --cached",
        description: "Show staged changes.",
      },
      {
        command: "git diff main..feature",
        description: "Compare changes between two branches.",
      },
      {
        command: "git diff HEAD~1 HEAD",
        description: "Compare the latest commit with its parent.",
      },
      {
        command: "git diff --stat",
        description: "Show a summary of changed files and line counts.",
      },
      {
        command: "git diff --name-only",
        description: "List files changed between revisions.",
      },
    ],
  },
  {
    title: "Cherry-pick",
    commands: [
      {
        command: "git cherry-pick <commit>",
        description: "Apply the changes introduced by a specific commit to the current branch.",
      },
      {
        command: "git cherry-pick --no-commit <commit>",
        description: "Apply a commit's changes without automatically creating a commit.",
      },
      {
        command: "git cherry-pick --continue",
        description: "Continue a cherry-pick after resolving conflicts.",
      },
      {
        command: "git cherry-pick --abort",
        description: "Cancel an in-progress cherry-pick operation.",
      },
    ],
  },
  {
    title: "Remote Tracking and Branch Management",
    commands: [
      {
        command: "git branch -r",
        description: "List remote-tracking branches.",
      },
      {
        command: "git branch -vv",
        description: "Show local branches together with upstream tracking information.",
      },
      {
        command: "git fetch origin",
        description: "Download the latest remote references without modifying the working branch.",
      },
      {
        command: "git remote show origin",
        description: "Display detailed information about a remote repository.",
      },
      {
        command: "git push -u origin main",
        description: "Push main and establish its upstream branch.",
      },
    ],
  },
  {
    title: "Git Troubleshooting",
    commands: [
      {
        command: "git status",
        description: "Start troubleshooting by checking the repository state.",
      },
      {
        command: "git log --oneline --decorate --graph -10",
        description: "Inspect recent commits and branch relationships.",
      },
      {
        command: "git reflog",
        description: "Find previous HEAD and branch states when commits appear to be missing.",
      },
      {
        command: "git remote -v",
        description: "Verify the configured remote URLs.",
      },
      {
        command: "git branch -vv",
        description: "Check branch tracking and upstream configuration.",
      },
      {
        command: "git fetch --all --prune",
        description: "Fetch remote updates and remove stale remote-tracking references.",
      },
      {
        command: "git fsck --lost-found",
        description: "Inspect unreachable Git objects when investigating repository recovery.",
      },
    ],
  },
  {
    title: "DevOps Git Workflow",
    commands: [
      {
        command: "git status --short",
        description: "Check exactly what changed before staging files.",
      },
      {
        command: "git add <file>",
        description: "Stage only the intended file or files.",
      },
      {
        command: "git commit -m \"Describe change\"",
        description: "Create a focused commit describing the change.",
      },
      {
        command: "git pull --rebase origin main",
        description: "Update the local branch while keeping local commits on top of the remote branch.",
      },
      {
        command: "git push origin main",
        description: "Push the tested local changes to the main branch.",
      },
      {
        command: "git log --oneline --decorate --graph -10",
        description: "Verify recent repository history after pushing changes.",
      },
    ],
  },
];

export default function GitCommands() {
  const totalCommands = commandSections.reduce(
    (total, section) => total + section.commands.length,
    0,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <a
          href="/"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to DevOpsCommands
        </a>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Git
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Git Commands Cheat Sheet
          </h1>

          <p className="mt-4 max-w-3xl text-slate-400">
            Practical Git commands for source control, branching, commits,
            collaboration, DevOps workflows and troubleshooting.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {commandSections.length} categories
            </span>

            <span className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
              {totalCommands}+ commands
            </span>
          </div>
        </header>

        <GitCommandSearch sections={commandSections} />

        <section className="mt-12 rounded-xl border border-cyan-900 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">Recommended DevOps Git Workflow</h2>

          <pre className="mt-4 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-300">
{`# Check repository state
git status --short

# Review changes
git diff

# Stage the intended files
git add <file>

# Review staged changes
git diff --cached

# Commit
git commit -m "Describe the change"

# Update from remote
git pull --rebase origin main

# Push
git push origin main

# Verify history
git log --oneline --decorate --graph -10`}
          </pre>
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">DevOpsCommands Tip</h2>

          <p className="mt-3 leading-7 text-slate-400">
            Prefer small, focused commits that describe one logical change.
            Before pushing, review the status and staged diff so unrelated
            files are not accidentally included.
          </p>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Be especially careful with commands such as reset --hard, branch -D,
          push --force and destructive repository operations.
        </footer>
      </div>
    </main>
  );
}