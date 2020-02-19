$(function(){
    // 先思考整个流程 再将步骤模块化

    // get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btn = $('#btn'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    /* calc button click event */
    $btn.click(function(){ // 有误差 需要优化*
        // get value
        let w = Number($width.val()),
            h = Number($height.val());
            p = 0,
            a = 0;

        // calculate
        p = 2 * (w + h);
        a = w * h;
        // console.log(p, a); // 0.6000000000000001 0.020000000000000004

        // float
        // 结果有问题 所以将结果处理即可解决浮点值运算舍入误差问题
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        }
        p = roundFractional(p, 2);
        a = roundFractional(a, 2);
        // console.log(p,a); // 0.6 0.02

        // output
        $perimeter.val(p);
        $area.val(a);
    })

    // 传输代码时压缩代码 减少带宽 提高速度（自动化构建优化的案例）
})