# omniParser V2

::: tip 简介

* OmniParser基于深度学习技术，通过识别和理解用户界面中的元素，自动生成结构化数据
* 配合 pyautogui 可以实现自动化操作
* 开源地址 [OmniParser](https://github.com/microsoft/OmniParser)
:::

## 安装

```bash
git clone https://github.com/microsoft/OmniParser.git

cd OmniParser

uv init --python 3.12
uv run  # 会根据.python-version中的python版本生成 .venv文件，即python虚拟环境

# 将旧依赖方式同步到pyproject.toml中
uv add -r requirements.txt

# 下载权重包
# download the model checkpoints to local directory OmniParser/weights/
rm -rf weights/icon_detect weights/icon_caption weights/icon_caption_florence 
huggingface-cli download microsoft/OmniParser-v2.0 --local-dir weights
mv weights/icon_caption weights/icon_caption_florence

# 运行demo
uv run gradio_demo.py
```

## 运行

![截图](https://article.biliimg.com/bfs/new_dyn/171e3884eaa8cf2d1f2fe796ea20622f102411794.png@.webp)

![截图2](https://article.biliimg.com/bfs/new_dyn/fcbd8dff3da57da296dc4c665dd2d9c2102411794.png@.webp)
