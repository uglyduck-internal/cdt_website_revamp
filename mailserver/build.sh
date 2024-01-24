#!/bin/bash
docker build -t mailserver:latest .
cd /root/dingcheng/
docker compose down 
docker compose up -d
