const CUSTOMER_SITES = {
    liangzi: {
       api: 'https://cj.lzcaiji.com/api.php/provide/vod',
       name: '量子资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
