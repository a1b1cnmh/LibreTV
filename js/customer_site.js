const CUSTOMER_SITES = {
    ruyi: {
        api: 'https://www.ryzy3.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy3.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://pz.168188.dpdns.org/?url=https://cj.rycjapi.com/api.php/provide/vod',
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        api: 'https://www.ryzy1.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy1.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy2.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy2.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy4.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy4.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy5.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy5.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy6.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy6.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy7.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy7.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy8.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy8.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzy9.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzy9.tv/api.php/provide/vod/from/rym3u8',
        api: 'https://www.ryzyw.com/api.php/provide/vod/from/rym3u8',
        api: 'https://ryzyw.com/api.php/provide/vod/from/rym3u8',
        name: '如意资源',
    },
    liangzi: {
       api: 'https://cj.lzcaiji.com/api.php/provide/vod',
       api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy.net/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy.net/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy1.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy1.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy2.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy2.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy3.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy3.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy4.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy4.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy5.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy5.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy6.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy6.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy7.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy7.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzizy8.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzizy8.com/api.php/provide/vod/from/lzm3u8',
       api: 'https://www.lzzy.tv/api.php/provide/vod/from/lzm3u8',
       api: 'https://lzzy.tv/api.php/provide/vod/from/lzm3u8',
       name: '量子资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
