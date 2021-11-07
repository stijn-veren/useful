# Terminal

## Useful

- iTerm2: https://iterm2.com
- SF Mono Powerline font: https://github.com/Twixes/SF-Mono-Powerline
- zsh-syntax-highlighting: https://github.com/zsh-users/zsh-syntax-highlighting
- zsh-autosuggestions: https://github.com/zsh-users/zsh-autosuggestions
- Oh My Zsh: https://ohmyz.sh
- 

## Open Sublime Text 3 from Terminal in macOS

### Step 1:
First of all, test this command:

```
open /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl
```

If that worked, you’re good to go step 2:

### Step 2:

Then run this command:

```
sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```

### Step 3:

Checking in terminal by

```
subl .
```

or

```
sublime ~/Desktop
```
