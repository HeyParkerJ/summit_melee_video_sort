# This repo

This was built exclusively to sort the .slp files from Smash Summit 12 by tag and character. The files in question were distribued here:

https://www.reddit.com/r/SSBM/comments/riplzq/we_recorded_nearly_every_game_played_at_smash/

And the filenames look like this:
"YUM Fox vs Sheik (DL) 12.9.20218.16.12 PM.slp"

Since this code was whipped together quickly - it will only work for filenames formatted very similarly to the example above. Read the caveats for more info on... the caveats.

# Usage

1. You need to have node installed
2. Download the original distribution of .slp files
3. Move the unzipped folder of .slp files into a folder called "Summit" in the same folder as this code.
4. In a console, run the following commands:

```sh
npm install
node index.js
```

Your console should report progress and eventually finish, with the files sorted appropriately.

# Caveats

- This will likely not work on Windows. A mac or linux box should be able to run this script.

- The size of your folder will double. I chose to sort every game into two folders, one for each Tag+Character combo that was involved in the match. That means that "SFAT Fox vs DHIR Puff" will be placed into both the SFAT Fox and DHIR Puff folders. Trim away whatever you don't need, and if you know of a better sort method, write an issue on this repo. I might not fix it, but I'm certainly interested.

- Any player that didn't have a tag during the match will be sorted into the name of their character.
