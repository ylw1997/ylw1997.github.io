# zsh

:::tip

* zsh 是一款强大的 shell 工具，可以替代 bash

* zsh 的配置文件是 `~/.zshrc`
:::

## 安装

```bash

# mac
brew install zsh

# ubuntu
sudo apt install zsh

# centos
sudo yum install zsh

```

## 配置

> 设置 zsh 为默认 shell

```bash
chsh -s /bin/zsh
```

> 安装 oh-my-zsh

```bash

# curl
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# wget
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

```

## 插件

```bash

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# zsh-autosuggestions

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

```

> 配置插件

```bash

vim ~/.zshrc

# 编辑 ~/.zshrc
plugins=(git zsh-syntax-highlighting zsh-autosuggestions autojump )

```

## 默认bash

```bash

# 查看当前默认shell
echo $SHELL

# 查看所有shell
cat /etc/shells

# 切换默认shell

chsh -s /bin/zsh

```

## 安装autojump

:::tip autojump

* 如果 Linux CentOS安装zsh插件提示/usr/bin/env: python: No such file or directory。

* 需要安装python

```bash
ls -l /usr/bin | grep python
# 设置系统默认 python 版本为 python3
alternatives --set python /usr/bin/python3 

```

:::

```bash

git clone https://gitee.com/null_454_5218/autojump.git

cd autojump

./install.py

```

> 安装完成后，需要在.zshrc中添加以下内容

```bash

[[ -s /root/.autojump/etc/profile.d/autojump.sh ]] && source /root/.autojump/etc/profile.d/autojump.sh
autoload -U compinit && compinit -u

```

## 安装 figlet-cli

```bash
 npm install -g figlet-cli
```

> 配置zshrc
  
```bash

# figlet

figlet "Hi , YangLiwei"

```

## 安装 zsh-nvm

```bash

# 安装 zsh-nvm
git clone https://github.com/lukechilds/zsh-nvm $ZSH/custom/plugins/zsh-nvm

# 配置zshrc
plugins=(git zsh-syntax-highlighting zsh-autosuggestions autojump zsh-nvm)

# 延迟启动
export NVM_LAZY_LOAD=true

```

## zshrc示例

```bash

export ZSH="$HOME/.oh-my-zsh"


ZSH_THEME="robbyrussell"

plugins=(git zsh-syntax-highlighting zsh-autosuggestions autojump zsh-nvm)

# 延迟启动
export NVM_LAZY_LOAD=true

source $ZSH/oh-my-zsh.sh


 [[ -s /root/.autojump/etc/profile.d/autojump.sh ]] && source /root/.autojump/etc/profile.d/autojump.sh

        autoload -U compinit && compinit -u

figlet "Hi , YangLiwei"

```
