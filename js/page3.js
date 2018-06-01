var table = [
    "min/1.jpg", "相遇（丰都）", "2017年4月4日", 6, 1,
    "min/2.jpg", "相遇（丰都）", "2017年4月4日", 7, 1,
    "min/3.jpg", "相遇（丰都）", "2017年4月4日", 8, 1,
    "min/4.jpg", "相遇（丰都）", "2017年4月4日", 13, 1,
    "min/5.jpg", "相遇（丰都）", "2017年4月4日", 14, 1,
    "min/6.jpg", "相遇（丰都）", "2017年4月4日", 15, 1,
    "07.jpg", "光环（大剧院）", "", 4, 2,
    "08.jpg", "可爱（大剧院）", "", 5, 2,
    "09.jpg", "萝莉（宜家）", "", 6, 2,
    "10.jpg", "活泼（小南海站）", "", 7, 2,
    "11.jpg", "深沉（菜园坝火车站）", "", 8, 2,
    "12.jpg", "美丽（中央公园）", "", 9, 2,
    "13.jpg", "小狗（宜家）", "", 12, 2,
    "14.jpg", "银杏漂落（重医）", "", 13, 2,
    "15.jpg", "银杏漂落（重医）", "", 14, 2,
    "16.jpg", "烟花（楼顶）", "", 15, 2,
    "17.jpg", "仙女（大剧院）", "", 16, 2,
    "001.jpg", "在一起（大学城）", "2017年4月29日", 17, 2,
    "002.jpg", "在一起（大学城）", "2017年4月29日", 3, 3,
    "003.jpg", "在一起（大学城）", "2017年4月29日", 4, 3,
    "004.jpg", "在一起（大学城）", "2017年4月29日", 4, 3,
    "005.jpg", "在一起（大学城）", "2017年4月29日", 5, 3,
    "006.jpg", "青城山", "2017年5月28日", 6, 3,
    "007.jpg", "都江堰", "2017年5月29日", 7, 3,
    "008.jpg", "青城山", "2017年5月28日", 8, 3,
    "009.jpg", "青城山", "2017年5月28日", 9, 3,
    "010.jpg", "青城山", "2017年5月28日", 10, 3,
    "011.jpg", "青城山", "2017年5月28日", 11, 3,
    "012.jpg", "小酒馆", "2017年5月13日", 12, 3,
    "013.jpg", "小酒馆", "2017年5月13日", 13, 3,
    "014.jpg", "新桥医院", "2017年5月21日", 14, 3,
    "015.jpg", "新桥医院", "2017年5月21日", 15, 3,
    "016.jpg", "新桥医院", "2017年5月21日", 16, 3,
    "017.jpg", "奥体", "2017年5月20日", 17, 3,
    "018.jpg", "奥体", "2017年5月20日", 18, 3,

    "019.jpg", "照母山", "2017年7月30日", 2, 4,
    "020.jpg", "照母山", "2017年7月30日", 3, 4,
    "021.jpg", "照母山", "2017年7月30日", 4, 4,
    "022.jpg", "照母山", "2017年7月30日", 5, 4,
    "023.jpg", "照母山", "2017年7月30日", 6, 4,
    "024.jpg", "都江堰", "2017年7月30日", 7, 4,
    "025.jpg", "绿皮车旅行", "2017年8月5日", 8, 4,
    "026.jpg", "绿皮车旅行", "2017年8月5日", 9, 4,
    "027.jpg", "绿皮车旅行", "2017年8月5日", 10, 4,
    "028.jpg", "绿皮车旅行", "2017年8月5日", 11, 4,
    "029.jpg", "绿皮车旅行", "2017年8月5日", 12, 4,
    "030.jpg", "绿皮车旅行", "2017年8月5日", 13, 4,
    "031.jpg", "绿皮车旅行", "2017年8月5日", 14, 4,
    "032.jpg", "绿皮车旅行", "2017年8月5日", 15, 4,
    "033.jpg", "绿皮车旅行", "2017年8月5日", 16, 4,
    "034.jpg", "照母山", "2017年7月30日", 17, 4,
    "035.jpg", "小酒管（龙湖）", "2017年8月28日", 18, 4,
    "036.jpg", "生日", "2017年8月25日", 19, 4,

    "037.jpg", "黑与白", "", 2, 5,
    "038.jpg", "鹅岭公园", "2017年9月16日", 3, 5,
    "039.jpg", "雪梅家", "2017年9月30日", 4, 5,
    "040.jpg", "绿皮车", "", 5, 5,
    "041.jpg", "雪梅家", "2017年9月30日", 6, 5,
    "042.jpg", "雪梅家", "2017年9月30日", 7, 5,
    "043.jpg", "雪梅家", "2017年9月30日", 8, 5,
    "044.jpg", "两路口", "2017年10月14日", 9, 5,
    "045.jpg", "大剧院", "2017年10月29日", 10, 5,
    "046.jpg", "大剧院", "2017年10月29日", 11, 5,
    "047.jpg", "大剧院", "2017年10月29日", 12, 5,
    "048.jpg", "大剧院", "2017年10月29日", 13, 5,
    "049.jpg", "大剧院", "2017年10月29日", 14, 5,
    "050.jpg", "大剧院", "2017年10月29日", 15, 5,
    "051.jpg", "大剧院", "2017年10月29日", 16, 5,
    "052.jpg", "大剧院", "2017年10月29日", 17, 5,
    "053.jpg", "大剧院", "2017年10月29日", 18, 5,
    "054.jpg", "大剧院", "2017年10月29日", 19, 5,

    "055.jpg", "大剧院", "2017年10月29日", 2, 6,
    "056.jpg", "两路口", "2017年10月14日", 3, 6,
    "057.jpg", "两路口", "2017年10月14日", 4, 6,
    "058.jpg", "瓷器口", "2017年10月28日", 5, 6,
    "059.jpg", "瓷器口", "2017年10月28日", 6, 6,
    "060.jpg", "面膜", "2017年6月25日", 7, 6,
    "061.jpg", "大剧院", "2017年10月29日", 8, 6,
    "062.jpg", "下浩老街", "2017年11月17日", 9, 6,
    "063.jpg", "下浩老街", "2017年11月17日", 10, 6,
    "064.jpg", "下浩老街", "2017年11月17日", 11, 6,
    "065.jpg", "下浩老街", "2017年11月17日", 12, 6,
    "066.jpg", "大剧院", "", 13, 6,
    "067.jpg", "下浩老街", "2017年11月17日", 14, 6,
    "068.jpg", "下浩老街", "2017年11月17日", 15, 6,
    "069.jpg", "龙湖", "2017年11月19日", 16, 6,
    "070.jpg", "龙湖", "2017年11月17日", 17, 6,
    "071.jpg", "龙湖", "2017年11月17日", 18, 6,
    "072.jpg", "龙湖", "2017年11月17日", 19, 6,
    
    "073.jpg", "龙湖", "2017年11月17日", 3, 7,
    "074.jpg", "龙湖", "2017年11月17日", 4, 7,
    "075.jpg", "渝中区", "", 5, 7,
    "076.jpg", "宜家", "2017年12月11日", 6, 7,
    "077.jpg", "宜家", "2017年12月11日", 7, 7,
    "078.jpg", "宜家", "2017年12月11日", 8, 7,
    "079.jpg", "宜家", "2017年12月11日", 9, 7,
    "080.jpg", "mimosa", "2018年1月14日", 10, 7,
    "081.jpg", "mimosa", "2018年1月14日", 11, 7,
    "082.jpg", "花", "2017年12月17日", 12, 7,
    "083.jpg", "银杏飘落", "2017年12月16日", 13, 7,
    "084.jpg", "银杏飘落", "2017年12月16日", 14, 7,
    "085.jpg", "银杏飘落", "2017年12月16日", 15, 7,
    "086.jpg", "银杏飘落", "2017年12月16日", 16, 7,
    "088.jpg", "龙湖时代天街", "2018年1月14日", 17, 7,
    "089.jpg", "龙湖时代天街", "2018年1月14日", 18, 7,

    "091.jpg", "五里店", "2018年1月21日", 4, 8,
    "092.jpg", "五里店", "2018年1月21日", 5, 8,
    "093.jpg", "北滨路", "2018年1月21日", 6, 8,
    "094.jpg", "北滨路", "2018年1月21日", 7, 8,
    "095.jpg", "北滨路", "2018年1月21日", 8, 8,
    "096.jpg", "北滨路", "2018年1月21日", 9, 8,
    "097.jpg", "北滨路", "2018年1月21日", 10, 8,
    "098.jpg", "北滨路", "2018年1月21日", 11, 8,
    "099.jpg", "北滨路", "2018年1月21日", 12, 8,
    "100.jpg", "北滨路", "2018年1月21日", 13, 8,
    "101.jpg", "北滨路", "2018年1月21日", 14, 8,
    "102.jpg", "北滨路", "2018年1月21日", 15, 8,
    "103.jpg", "北滨路", "2018年1月21日", 16, 8,
    "104.jpg", "北滨路", "2018年1月21日", 17, 8,

    "105.jpg", "北滨路", "2018年1月21日", 5, 9,
    "106.jpg", "北滨路", "2018年1月21日", 6, 9,
    "107.jpg", "龙湖时代天街", "2018年1月29日", 7, 9,
    "108.jpg", "龙湖时代天街", "2018年1月29日", 8, 9,
    "109.jpg", "龙湖时代天街", "2018年1月29日", 9, 9,
    "110.jpg", "西永", "2018年2月20日", 10, 9,
    "111.jpg", "西永", "2018年2月20日", 11, 9,
    "112.jpg", "西永", "2018年2月20日", 12, 9,
    "113.jpg", "西永", "2018年2月20日", 13, 9,
    "114.jpg", "西永", "2018年2月20日", 14, 9,
    "115.jpg", "西永", "2018年2月20日", 15, 9,
    "116.jpg", "西永", "2018年2月20日", 16, 9,

    "117.jpg", "西永", "2018年2月20日", 6, 10,
    "118.jpg", "西永", "2018年2月20日", 7, 10,
    "119.jpg", "西永", "2018年2月20日", 8, 10,
    "120.jpg", "烤鸽子", "2018年2月21日", 9, 10,
    "121.jpg", "烤鸽子", "2018年2月21日", 10, 10,
    "122.jpg", "烟火", "2018年2月20日", 11, 10,
    "123.jpg", "烟花", "2018年2月13日", 12, 10,
    "124.jpg", "伐木累","2018年2月13日", 13, 10,
    "125.jpg", "星星", "2018年2月13日", 14, 10,
    "126.jpg", "重庆", "2018年2月13日", 15, 10,

    "127.jpg", "重庆", "2018年2月22日", 7, 11,
    "128.jpg", "重庆", "2018年2月22日", 8, 11,
    "129.jpg", "重庆", "2018年2月22日", 9, 11,
    "130.jpg", "星星", "2018年2月13日", 10, 11,
    "131.jpg", "腊肉", "2018年2月13日", 11, 11,
    "132.jpg", "烟花", "2018年3月2日", 12, 11,
    "133.jpg", "烟花", "2018年2月22日", 13, 11,
    "134.jpg", "渝中区夜景", "2018年3月2日", 14, 11,

    "135.jpg", "鹅公岩大桥", "2018年3月25日", 8, 12,
    "136.jpg", "寿司", "2018年3月30日", 9, 12,
    "137.jpg", "信", "2018年4月4日", 10, 12,
    "138.jpg", "逛街", "2018年4月5日", 11, 12,
    "139.jpg", "逛街", "2018年4月5日", 12, 12,
    "140.jpg", "逛街", "2018年4月5日", 13, 12,

    "141.jpg", "中央公园", "2018年4月6日", 9, 13,
    "142.jpg", "中央公园", "2018年4月6日", 10, 13,
    "143.jpg", "中央公园", "2018年4月6日", 11, 13,
    "144.jpg", "中央公园", "2018年4月6日", 12, 13,
    
    "145.jpg", "中央公园", "2018年4月6日", 10, 14,
    "end.jpg", "end", "102.9055", 11, 14,
];

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // table

    for ( var i = 0; i < table.length; i += 5 ) {

        var element = document.createElement( 'div' );
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

        var number = document.createElement( 'div' );
        number.className = 'number';
        number.textContent = (i/5) + 1;
        element.appendChild( number );

        if(table[ i ].search("jpg") > -1){
            var img = document.createElement( 'img' );
            img.className = 'symbolImg';
            img.src = "../img/min.jpg";
            img.setAttribute('data-original', "../img/" +  table[ i ]);
            element.appendChild( img );
        }else{
            // var symbol = document.createElement( 'div' );
            // symbol.className = 'symbol';
            // symbol.textContent = table[ i ];
            // element.appendChild( symbol );

            var img = document.createElement( 'img' );
            img.className = 'symbolImg';
            img.src = "../img/min.jpg";
            element.appendChild( img );
        }
       

        var details = document.createElement( 'div' );
        details.className = 'details';
        details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
        element.appendChild( details );

        var object = new THREE.CSS3DObject( element );
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add( object );

        objects.push( object );

        //

        var object = new THREE.Object3D();
        object.position.x = ( table[ i + 3 ] * 140 ) - 1480;
        object.position.y = - ( table[ i + 4 ] * 140 ) + 990;

        targets.table.push( object );

    }

    // sphere

    var vector = new THREE.Vector3();
    var spherical = new THREE.Spherical();

    for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var phi = Math.acos( -1 + ( 2 * i ) / l );
        var theta = Math.sqrt( l * Math.PI ) * phi;

        var object = new THREE.Object3D();

        spherical.set( 800, phi, theta );

        object.position.setFromSpherical( spherical );

        vector.copy( object.position ).multiplyScalar( 2 );

        object.lookAt( vector );

        targets.sphere.push( object );

    }

    // helix

    var vector = new THREE.Vector3();
    var cylindrical = new THREE.Cylindrical();

    for ( var i = 0, l = objects.length; i < l; i ++ ) {

        var theta = i * 0.175 + Math.PI;
        var y = - ( i * 8 ) + 450;

        var object = new THREE.Object3D();

        cylindrical.set( 900, theta, y );

        object.position.setFromCylindrical( cylindrical );

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt( vector );

        targets.helix.push( object );

    }

    // grid

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = new THREE.Object3D();

        object.position.x = ( ( i % 5 ) * 400 ) - 800;
        object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
        object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

        targets.grid.push( object );

    }

    //

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );

    //

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );

    var button = document.getElementById( 'table' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.table, 2000 );

    }, false );

    var button = document.getElementById( 'sphere' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.sphere, 2000 );

    }, false );

    var button = document.getElementById( 'helix' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.helix, 2000 );

    }, false );

    var button = document.getElementById( 'grid' );
    button.addEventListener( 'click', function ( event ) {

        transform( targets.grid, 2000 );

    }, false );

    transform( targets.table, 2000 );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}

function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 2 )
        .onUpdate( render )
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    controls.update();

}

function render() {

    renderer.render( scene, camera );

}


setTimeout(function(){
    $('#container img').lazyload({
        placeholder : "../img/min.jpg", //用图片提前占位
            // placeholder,值为某一图片路径.此图片用来占据将要加载的图片的位置,待图片加载时,占位图则会隐藏
        effect: "fadeIn", // 载入使用何种效果
            // effect(特效),值有show(直接显示),fadeIn(淡入),slideDown(下拉)等,常用fadeIn
        threshold: 200, // 提前开始加载
            // threshold,值为数字,代表页面高度.如设置为200,表示滚动条在离目标位置还有200的高度时就开始加载图片,可以做到不让用户察觉
        container: $("#container"),  // 对某容器中的图片实现效果
            // container,值为某容器.lazyload默认在拉动浏览器滚动条时生效,这个参数可以让你在拉动某DIV的滚动条时依次加载其中的图片
        failurelimit : 10 // 图片排序混乱时
            // failurelimit,值为数字.lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况,failurelimit意在加载N张可见区域外的图片,以避免出现这个问题.
    });
},3000)