#!/bin/sh
apt install -y docker.io npm
docker pull mongo
docker volume create pDb_volume
docker run -it --restart=always -p 127.0.0.1:27017:27017 -v pDb_volume:/data/db --name pDb -d mongo
docker cp ~/push-panel/dump pDb:dump
docker exec pDb mongorestore --gzip
cd ~/push-panel
npm install node
timedatectl set-timezone Asia/Kolkata
# create a service file that executes node ~/push-panel/index.js on startup
cat > /etc/systemd/system/push_panel.service <<EOF
[Unit]
Description=push panel - running the push panel 
Documentation=https://example.com
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/push-panel
ExecStart=npm start
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF
systemctl enable push_panel.service
systemctl start push_panel.service
