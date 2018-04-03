#!/bin/bash
ffmpeg -f s16le -ac 1 -i input_pipe -acodec libvorbis -ab 128k -f rtp rtp:127.0.0.1:3000
