---
title: "Teaching Object-Oriented Python & Computer Networks: 8 Years of Classroom Lessons"
description: "What writing a Python 3 book for Packt and teaching 1,200+ undergrads taught me about mental models in systems engineering."
pubDate: 2024-09-04
readingTime: "6m"
wordCount: "1,390 words"
category: "tech"
tags: ["#tech", "#python"]
featuredOnHome: false
toc:
  - "Why beginners struggle with object boundaries"
  - "From Packt curriculum to live socket programming labs"
codeSnippet:
  filename: "packet_frame.py"
  lang: "python"
  code: |
    from dataclasses import dataclass

    @dataclass(frozen=True)
    class EthernetFrame:
        dst_mac: str
        src_mac: str
        ethertype: int
        payload: bytes
---

## 1. Why Beginners Struggle with Object Boundaries

After teaching over 1,200 undergraduate CS and IT students and authoring *Getting Started with Object-Oriented Programming in Python 3* for Packt, I've found that teaching inheritance before composition almost always leads to brittle code.

## 2. From Packt Curriculum to Live Socket Programming Labs

When students build a multi-client TCP chat server or inspect raw Ethernet frames in Wireshark using small, composable Python classes, OOP stops being textbook ceremony and becomes a practical tool for modeling state.
