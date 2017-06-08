var myApp = angular.module('myApp', []);
myApp.controller('myAppNgFun', function ($scope) {
    $scope.dataParams = 0;
    $scope.errImg = '/images/thumb/noThumbImg.png';
    $scope.pfName = mainGridHtml.items[$scope.dataParams].tit;
    $scope.pfListTit = mainGridHtml.items;
    $scope.pfCurrt = {
        name: '',
        info: '',
    };
    $scope.pfListSepc = function ($mode) {
        var $mode = $mode.split(',');
        if ($mode) {
            if ($mode.indexOf('js') != -1) {
                txt = '자체개발JS';
            } else if ($mode.indexOf('IE') != -1 || $mode.indexOf('ie') != -1) {
                txt = $mode;
                $mode = 'ie';
            } else {
                switch ($mode) {
                case 'res':
                    txt = '반응형';
                    break;
                case 'cms':
                    txt = 'CMS';
                    break;
                case 'hyb':
                    txt = '하이브리드앱';
                    break;
                case 'tmc':
                    txt = '접근성';
                    break;
                }
            }
        }
        return $mode;
    };
    $scope.aaaaa = function (a) {
        var conf = a;
        var nullMsg = '등록되지않았습니다';
        var nullImg = '/images/thumb/noThumbImg.png';
        $scope.pfCurrt = {
            thumb: conf.thumb ? conf.thumb : nullImg,
            tit: conf.tit ? conf.tit : nullMsg,
            info: conf.info ? conf.info : nullMsg,
            subj: conf.subj ? conf.subj : nullMsg,
            clt: conf.clt ? conf.clt : nullMsg,
            subImgs: conf.subImgs ,
        };
        console.log($scope.pfCurrt.thumb)
    };
});

