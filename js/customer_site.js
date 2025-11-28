const CUSTOMER_SITES = {
    
    dbzy: {
          api: 'https://caiji.dbzy.tv/api.php/provide/vod/at/json/',
          api: 'https://caiji.dbzy5.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.dbzy5.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://dbzy5.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.dbzy3.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://dbzy3.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.dbzy1.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://dbzy1.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.dbzy.tv/api.php/provide/vod/from/dbm3u8',
          api: 'https://dbzy.tv/api.php/provide/vod/from/dbm3u8',
          api: 'https://doubanzy.net/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.doubanzy.net/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.doubanzy.cc/api.php/provide/vod/from/dbm3u8',
          api: 'https://doubanzy.cc/api.php/provide/vod/from/dbm3u8',
          api: 'https://www.doubanziyuan.net/api.php/provide/vod/from/dbm3u8',
          api: 'https://doubanziyuan.net/provide/vod/from/dbm3u8',
          api: 'https://www.doubanziyuan.com/api.php/provide/vod/from/dbm3u8',
          api: 'https://doubanziyuan.com/provide/vod/from/dbm3u8',  
        name: '豆瓣资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
