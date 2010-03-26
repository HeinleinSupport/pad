import("etherpad.log");
import("plugins.twitterStyleTags.hooks");
import("plugins.twitterStyleTags.static.js.main");
import("sqlbase.sqlobj");
import("sqlbase.sqlcommon");

function init() {
 this.hooks = ['handlePath', 'aceGetFilterStack', 'aceCreateDomLine', 'padModelWriteToDB'];
 this.client = new main.init();
 this.description = 'Twitter-style tags';
 this.handlePath = hooks.handlePath;
 this.aceGetFilterStack = main.aceGetFilterStack;
 this.aceCreateDomLine = main.aceCreateDomLine;
 this.padModelWriteToDB = hooks.padModelWriteToDB;

 this.install = install;
 this.uninstall = uninstall;
}

function install() {
 log.info("Installing Twitter-style tags");

 sqlobj.createTable('TAG', {
   ID: 'int not null '+sqlcommon.autoIncrementClause()+' primary key',
   NAME: 'varchar(128) character set utf8 collate utf8_bin not null',
  });

 sqlobj.createTable('PAD_TAG', {
   PAD_ID: 'varchar(128) character set utf8 collate utf8_bin not null references PAD_META(ID)',
   TAG_ID: 'int default NULL references TAG(ID)',
  });

 sqlobj.createTable('PAD_TAG_CACHE', {
   PAD_ID: 'varchar(128) character set utf8 collate utf8_bin unique not null references PAD_META(ID)',
   TAGS: 'varchar(1024) collate utf8_bin not null',
  });

}

function uninstall() {
 log.info("Uninstalling Twitter-style tags");
}

