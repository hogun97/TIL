# Generating a new SSH key

1. Open Terminal

2. Paste the following line to create a new ssh key with the given email address as the label

```
ssh-keygen -t rsa -b 4096 -C "email_address@gmail.com"
```

3. Press enter to accept default configuration except for the passphrase - choose a passphrase and confirm by typing it again.

# Adding your SSH key to the ssh-agent

1. Paste the following line to start the ssh-agent in the background

```
eval "$(ssh-agent -s)"
```

2. Modify your ~/.ssh/config file by adding the following lines (only in Mac OSX)

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

3. Add your SSH private key to the ssh-agent by pasting the following line

```
ssh-add -k ~/.ssh/id_rsa
```

Source: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
