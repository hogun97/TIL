# Customizing Bash Prompt

( Note: bash prompts are personal features unique to individual developers - there is no "correct" customization )

1. Open bashrc

```
vi ~/.bashrc
```

2. Start by creating a section for prompt

```
# PROMPT ----------------------------------------------------------------------
```

3. Add a color section above the prompt section

```
# colors ----------------------------------------------------------------------
GREEN='\e[0;32m\]'
B_MAGENTA='\e[1;35m\]'
YELLOW='\e[0;33m\]'
COLOR_END='\[\033[0m\]'
```
The color scheme here has four colors - Green, BMagenta, Yellow, and Color End.

More color options can be found (https://misc.flogisoft.com/bash/tip_colors_and_formatting)

4. Add timestamp (PROMPT section)

```
TIMESTAMP='\D{%F %a %T}'
```

5. Add current git branch (PROMPT section)

```
GIT_BRANCH=''
if [ $(which vcprompt 2> /dev/null) ]; then
  GIT_BRANCH="\$(vcprompt -f '[%b %r]')"
```

6. Put them altogether in a single prompt (PROMPT section)
  - Note that n\ towards the end forces new line after bash prompt.

```
fi
PS1="${YELLOW}${TIMESTAMP} ${GREEN}\u ${B_MAGENTA}\h ${YELLOW}\w ${COLOR_END} ${GIT_BRANCH}\n\$ "
#if [ $(which vcprompt 2> /dev/null) ]; then
  #PS1="${PS1}\$(vcprompt -f '[%b %r]')"
#fi
#PS1="${PS1}\n\$ "
export PS1
```

###  Optional: Google search

Add the following function to the bottom.
After saving, you will be able to use the Google search engine by typing the keyword after google.

```
function google() {
    open /Applications/Google\ Chrome.app/ "http://www.google.com/search?q= $1";
}
```

    






