---
title: systemd-resolve占用53端口
---

```bash
systemctl stop systemd-resolve
echo "DNS=8.8.8.8">>/etc/systemd/resolved.conf
echo "DNSStubListener=no">>/etc/systemd/resolved.conf
systemctl restart systemd-resolved
echo "nameserver 8.8.8.8">>/etc/resolv.conf
```
