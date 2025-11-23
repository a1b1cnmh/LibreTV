const CUSTOMER_SITES = {
    ruyi: {
         api: 'https://cj.rycjapi.com',
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
     dyttzy: {
        api: 'http://caiji.dyttzyapi.com',
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
    },
     bfzy: {
        api: 'https://bfzyapi.com',
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
     ffzy: {
        api: 'http://ffzy5.tv',
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
    },
   jisu: {
        api: 'https://jszyapi.com',
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    zy360: {
        api: 'https://360zy.com',
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
     wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
     maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod/from/mtm3u8',
        name: '茅台资源',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod/from/hhm3u8/at/json',
        name: '豪华资源',
    },
     haohua: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子资源',
    },
     hongniu: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod/from/hnm3u8',
        name: '红牛资源',
    },
      dbzy: {
        api: 'https://caiji.dbzy5.com/api.php/provide/vod/from/dbm3u8',
        name: '豆瓣资源',
    },
    gaoqing: {
        api: 'https://api.yzzy-api.com/inc/api_mac10.php',
        name: '高清资源',
    },
     jinying: {
        api: 'https://jyzyapi.com/provide/vod/from/jinyingm3u8/at/json',
        name: '金鹰资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
