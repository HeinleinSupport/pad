/**
 * Copyright 2009 RedHog, Egil Möller <egil.moller@piratpartiet.se>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import("faststatic");
import("dispatch.{Dispatcher,PrefixMatcher,forward}");

import("etherpad.utils.*");
import("etherpad.collab.server_utils");
import("etherpad.globals.*");
import("etherpad.log");
import("etherpad.pad.padusers");
import("etherpad.pro.pro_utils");
import("etherpad.pro.pro_pad_db");
import("etherpad.helpers");
import("etherpad.pro.pro_accounts.getSessionProAccount");
import("sqlbase.sqlbase");
import("sqlbase.sqlcommon");
import("sqlbase.sqlobj");
import("etherpad.pad.padutils");
import("etherpad.pad.model");
import("etherpad.collab.server_utils");
import("etherpad.collab.collab_server.buildHistoricalAuthorDataMapForPadHistory");
import("etherpad.collab.ace.easysync2.{Changeset,AttribPool}");

import("plugins.fullTextSave.hooks");

function onRequest() {
  if (request.params['pad'] == undefined) {
    throw new Error("No pad specified");
  }
  var padId = padutils.makeValidLocalPadId(request.params['pad'])

  padutils.accessPadLocal(padId, function(pad) {
    hooks.padModelWriteToDB({padId: padId, pad: pad});

    response.setContentType("text/html");
    response.write("Done");
  });
  return true;
}
