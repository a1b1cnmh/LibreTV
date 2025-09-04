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
        detail: 'http://caiji.dyttzyapi.com',
        detail: 'http://caiji.dyttzyapi.com', 
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
        detail: 'http://ffzy5.tv',
        detail: 'http://ffzy5.tv', 
    },
    xmm: {
         api: 'http://zy.xmm.hk',
        api: 'http://zy.xmm.hk/api.php/provide/vod',
         name: '小猫咪资源',
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
        api: 'https://wolongzyw.com',
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
