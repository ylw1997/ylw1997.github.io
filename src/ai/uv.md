# UV Python虚拟环境管理工具

::: tip 虚拟环境

* 虚拟环境的主要作用是隔离项目依赖包，避免不同项目之间依赖包版本冲突。
* 使用uv 工具来创建虚拟环境。
* uv: 一个非常快速的Python包和项目管理器，用Rust编写。
* 开源链接[uv](https://github.com/astral-sh/uv)
:::

## 安装

``` bash
# On macOS and Linux.
curl -LsSf https://astral.sh/uv/install.sh | sh

# On Windows.
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# 已经安装了pip
pip install uv
```

## 通过uv安装python

``` bash
# 安装最新版本
uv python install

# 安装指定版本
uv python install 3.11.4

# 查看所有版本
uv python list

# 删除指定版本
uv python remove 3.11.4

# 删除所有版本
uv python remove all

```

## 创建项目

``` bash
uv init myproject

# PS C:\Users\ylw12\Desktop> uv init myproject
# Initialized project `myproject` at `C:\Users\ylw12\Desktop\myproject`
# PS C:\Users\ylw12\Desktop> cd .\myproject\
# PS C:\Users\ylw12\Desktop\myproject> ls


#     目录: C:\Users\ylw12\Desktop\myproject


# Mode                 LastWriteTime         Length Name
# ----                 -------------         ------ ----
# -a----         2025/2/26     11:41            109 .gitignore
# -a----         2025/2/26     11:41              5 .python-version
# -a----         2025/2/26     11:41             87 main.py
# -a----         2025/2/26     11:41            155 pyproject.toml
# -a----         2025/2/26     11:41              0 README.md

# 运行
uv run main.py
# 运行时会自动创建虚拟环境

```

## 环境管理

``` bash
# 创建虚拟环境
uv venv myvenv
# 指定 Python 版本
uv venv --python 3.11
# 激活环境（Windows）
.venv\Scripts\activate
```

## 包管理

``` bash
# 添加依赖（会更新 pyproject.toml）
uv add flask
uv add --dev pytest

# 删除依赖（会更新 pyproject.toml）
uv remove flask
uv remove --dev pytest

# 安装依赖（不更新配置文件）
uv pip install flask
uv pip uninstall flask

# 从项目配置安装
uv pip install -r requirements.txt
```

## 依赖同步

``` bash
# 同步项目依赖
uv sync
# 更新依赖
uv sync --upgrade
# 更新特定包
uv sync --upgrade-package flask
```

## 最佳实践

> 项目初始化

``` bash
# 1. 创建项目目录
mkdir my-project && cd my-project
# 2. 创建虚拟环境
uv venv --python 3.11
# 3. 激活环境
.venv\Scripts\activate
# 4. 添加依赖
uv add flask fastapi
uv add --dev pytest black
# 5. 同步依赖
uv sync
```

> 克隆项目后

``` bash
cd ./你的项目文件
uv init  # 会生成pyproject.tom、uv.lock、.python-version文件
uv run  # 会根据.python-version中的python版本生成 .venv文件，即python虚拟环境

# 将旧依赖方式同步到pyproject.toml中
uv add -r requirements.txt
```

## 对比pip

| 功能           | UV 命令                | pip 命令                          |
| -------------- | ---------------------- | --------------------------------- |
| 安装包         | uv add flask           | pip install flask                 |
| 安装开发依赖   | uv add --dev pytest    | pip install pytest                |
| 从文件安装     | uv sync                | pip install -r requirements.txt   |
| 更新包         | uv sync --upgrade      | pip install --upgrade             |
