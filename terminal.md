# Terminal

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
