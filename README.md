# evrowe.com

it's my new website lol

## Assorted Notes About Working With This Project in Glitch

### Pulling the private repo and working locally is extremely viable.

Doing this smoothly requires the following steps:

- In the Glitch terminal, changing the git settings to accept pushes with this command: `git config receive.denyCurrentBranch updateInstead`
- Ordinarily, manually running `refresh` in the Glitch terminal is required for pushed updates to be processed; this can be automated with a `post-receive` git hook:
  - `printf '#!/bin/sh\nrefresh' > .git/hooks/post-receive && chmod +x .git/hooks/post-receive`
  - This command creates the `post-receive` hook in Glitch's copy of the repo with the 'refresh' command as the sole instruction
  - It also sets the execute permission on the hook to ensure it can actually run

### Glitch, 11ty, and Node Version Limitations/Quirks

This site is run on 11ty, a popular static site generation tool. It's great!

Glitch currently (as of this writing, 2022-10-10) does not support versions of Node higher than 16. `11ty@3` requires a newer version of Node, as such the site is currently frozen on `11ty@2`.

Upgrading Node versions on a Glitch project is as simple as updating the major version in the `"engines"` entry of your project's `package.json`. This change does not take effect until your Glitch project goes to sleep and is woken back up, which can be most quickly achieved by navigating away from the project/closing the window entirely and coming back an arbitrary amount of time later. 15 minutes seemed to suffice when I did this most recently.

When you upgrade Node versions, you will need to use the Glitch terminal to nuke the project's 