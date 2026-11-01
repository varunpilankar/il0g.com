---
title: "Bypassing Android's Audio Mixer for Bit-Perfect USB DAC Output"
description: "Kernel and HAL-level notes from building the BitPerfect-DAC Magisk module to eliminate 48kHz resampling on Snapdragon devices."
pubDate: 2025-01-29
readingTime: "5m"
wordCount: "1,180 words"
category: "experiments"
tags: ["#experiments", "#android", "#audio", "#c"]
featuredOnHome: true
toc:
  - "How Android AudioFlinger resamples everything to 48kHz"
  - "Reconfiguring audio_policy_configuration.xml systemlessly"
  - "Verifying native 96kHz/24-bit FLAC output over USB-C"
codeSnippet:
  filename: "system/vendor/etc/audio_policy_configuration.xml"
  lang: "xml"
  code: |
    <!-- Direct PCM passthrough profile for USB DAC endpoints -->
    <mixPort name="usb_surround_sound" role="source" flags="AUDIO_OUTPUT_FLAG_DIRECT">
      <profile name="" format="AUDIO_FORMAT_PCM_24_BIT_PACKED"
               samplingRates="44100,48000,88200,96000,176400,192000"
               channelMasks="AUDIO_CHANNEL_OUT_STEREO"/>
    </mixPort>
---

## 1. How Android AudioFlinger Resamples Everything to 48kHz

By default, Android's `AudioFlinger` mixer routes standard audio streams through a fixed 48kHz mixer pipeline so system notification sounds can be mixed seamlessly with media playback. For audiophiles playing 44.1kHz or 96kHz/24-bit FLAC files over an external USB-C DAC, that forced SRC pass introduces measurable intermodulation artifacts.

## 2. Reconfiguring audio_policy_configuration.xml Systemlessly

In `BitPerfect-DAC`, we mount a systemless overlay via Magisk that exposes direct PCM profiles on the USB HAL output port without modifying the read-only `/vendor` partition.

## 3. Verifying Native 96kHz/24-bit FLAC Output Over USB-C

Inspecting `dumpsys media.audio_flinger` confirms the `DIRECT` output flag is active and the hardware sample rate locks directly to the source FLAC container.
