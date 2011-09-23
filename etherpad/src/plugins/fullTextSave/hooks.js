import("etherpad.log");
import("dispatch.{Dispatcher,PrefixMatcher,forward}");
import("sqlbase.sqlobj");
import("etherpad.collab.server_utils");
import("etherpad.utils");
import("etherpad.pad.padutils");
import("fastJSON");
import("plugins.fullTextSave.controllers.fullTextSave");

function handlePath() {
  return [[PrefixMatcher('/ep/fullTextSave/update'), forward(fullTextSave)]];
}

function padModelWriteToDB(args) {
  var old = sqlobj.selectSingle("PAD_FULLTEXT", { PAD_ID: args.padId });
  if (old !== null) {
    sqlobj.update("PAD_FULLTEXT", {PAD_ID: args.padId }, {TEXT: args.pad.text()});
  } else {
    sqlobj.insert("PAD_FULLTEXT", {PAD_ID: args.padId, TEXT: args.pad.text()});
  }
}
