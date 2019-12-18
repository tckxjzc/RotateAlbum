let browserSync=require('browser-sync').create();

browserSync.init({
    server:{
        baseDir: './',//config.dist,
        // routes: {
        //     "/api": ""
        // },
    },
    // proxy: {
    //     target: 'http://172.105.113.219:8200',
    //     middleware: function (req, res, next) {
    //         req.url=req.url.replace('/api','');
    //         console.log(req.url);
    //         next();
    //     }
    // }
});