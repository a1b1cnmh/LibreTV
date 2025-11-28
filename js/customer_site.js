const CUSTOMER_SITES = {
    
    dbzy: {
          
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
