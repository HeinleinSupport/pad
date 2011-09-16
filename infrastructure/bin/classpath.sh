#!/bin/bash

#  Copyright 2009 Google Inc.
#  
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#  
#       http://www.apache.org/licenses/LICENSE-2.0
#  
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS-IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

CP="./"

if [[ $(uname -s) == CYGWIN* ]]; then
    for f in `readlink -f "lib/*.jar"`; do
        CP="${CP}\;"`cygpath -wp "${f}"`
    done
else
    for f in `ls lib/*.jar`; do
        CP="${CP}:${f}"
    done
fi
echo $CP
