import("etherpad.log");
import("plugins.fullTextSave.hooks");
import("sqlbase.sqlobj");
import("sqlbase.sqlcommon");

function fullTextSaveInit() {
 this.hooks = ['padModelWriteToDB'];
 this.description = 'Saves a full text copy of the latest version of a pad for external search tools (e.g. lucene)';
 this.padModelWriteToDB = hooks.padModelWriteToDB;

 this.install = install;
 this.uninstall = uninstall;
}

function install() {
 log.info("Installing fullTextSave");

 sqlobj.createTable('PAD_FULLTEXT', {
   PAD_ID: 'varchar(128) character set utf8 collate utf8_bin not null references PAD_META(ID)',
   TEXT: 'text collate utf8_bin not null'
  });

}

function uninstall() {
 log.info("Uninstalling fullTextSave");
}

