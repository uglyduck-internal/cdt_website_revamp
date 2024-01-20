FROM python:3.8-slim-buster
RUN pip install --no-cache-dir Flask

# 设置工作目录
WORKDIR /app

# 将当前目录的内容复制到工作目录中
COPY . /app

EXPOSE 5000
CMD ["python", "app.py"]
