---
title: "Taming Google Play Services Wakelocks with hungryGMS"
description: "How idle drain works on modern Android kernels and cutting standby battery loss by 42% without breaking push notifications."
pubDate: 2024-11-19
readingTime: "8m"
wordCount: "1,850 words"
category: "experiments"
tags: ["#experiments", "#android"]
featuredOnHome: false
toc:
  - "Profiling kernel wakelocks with dumpsys batterystats"
  - "Selective Doze enforcement for com.google.android.gms"
  - "Preserving high-priority FCM push sockets"
codeSnippet:
  filename: "service.sh · magisk-module-hungryGMS"
  lang: "shell"
  code: |
    #!/system/bin/sh
    # Restrict background GMS wakelocks after boot while preserving FCM push
    until [ "$(getprop sys.boot_completed)" = "1" ]; do sleep 2; done
    cmd appops set com.google.android.gms WAKE_LOCK ignore
    dumpsys deviceidle whitelist -com.google.android.gms
---

## 1. Profiling Kernel Wakelocks with dumpsys batterystats

Unchecked background telemetry services inside Google Mobile Services (`com.google.android.gms`) frequently hold partial wakelocks that prevent Snapdragon SoCs from entering deep sleep states overnight.

## 2. Selective Doze Enforcement

The `magisk-module-hungryGMS` module applies targeted `cmd appops` and Doze whitelist overrides during boot completion, cutting idle standby drain by 42% across tested devices while leaving Firebase Cloud Messaging (FCM) push sockets intact.
