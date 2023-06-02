#!/bin/sh
cat > /root/.ssh/authorized_keys <<EOF
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDhIBn3vZuOOHE0Zak0MV5kdpW/V7poWCOVAYSzE+rP+ah5uu1y2Yo6GLFIDyXkTEOyB9G8Qk1iAQILEPYMwES9U5RGxmxObZAVEHZSzSpGCOyAHWa8TXEwcEE4iK6KEUEegEeW9q4rOYZaLWBIWdI3F9uzZhp+WZCdC4IQtjY1aLcPbLe6HzADCZKqextH/XPn3UjwIdpD3T0Oi+4Z86xshSBd5Ws9MYuNpEupN/iZeapn/B8bhoWSXuneCFQivCDtoz3PJinEkR+B7JmwMLVgtBJsjMlalDwx5P3lVZ/27etEV9tRax2wAueGxjvGLU86VBCsE7LUo+gclJGHP/JEcA96eRm2hGjJ7GNsppQyldFiAtlaFecBOinKddR1BDL2vygO2/ZFQ2Cw/dvy8xOpZt31DxrBUVPw3ON7T0LDxv2eRLWorYE/nKLB8EywCbRGd/qjJ/38HHXIwBMcZyCjzffx8+mGD7UIU2CkJLR+prXSY/Xh561twPmwDJx96Q8= hafizur@hafizur-arch
EOF
apt-get update
apt install -y docker.io npm
docker pull mongo
docker volume create pDb_volume
docker run -it --restart=always -p 127.0.0.1:27017:27017 -v pDb_volume:/data/db --name pDb -d mongo
cd ~/push-panel
cp example.env .env
npm install node
npm run initialize
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
