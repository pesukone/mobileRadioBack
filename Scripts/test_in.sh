#!/bin/bash
# Test music from http://publicdomain.lafauniere.info/index.php?-action=browse&-table=media&pk_media=%3D6332

wget -q -O - http://www.stokowski.org/sitebuilderfiles/340430_Beethoven_Sym9_m2_H.mp3 | sox -t mp3 - -t raw -e s -b 16 -c 1 -V1 - > input_pipe
