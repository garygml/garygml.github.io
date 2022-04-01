(function() {
    angular.module('app', ['ngAnimate'])

        .controller('galleryController', function($scope) {
        $scope.photos = [
            {src: './assets/img/gallery/1.jpg', thumb: "./assets/img/gallery/1_tn.jpg", desc: 'Image01'},
            {src: './assets/img/gallery/2.jpg', thumb: "./assets/img/gallery/2_tn.jpg", desc: 'Image02'},
            {src: './assets/img/gallery/3.jpg', thumb: "./assets/img/gallery/3_tn.jpg", desc: 'Image03'},
            {src: './assets/img/gallery/4.jpg', thumb: "./assets/img/gallery/4_tn.jpg", desc: 'Image04'},
            {src: './assets/img/gallery/5.jpg', thumb: "./assets/img/gallery/5_tn.jpg", desc: 'Image05'},
            {src: './assets/img/gallery/7.jpg', thumb: "./assets/img/gallery/7_tn.jpg", desc: 'Image07'},
            {src: './assets/img/gallery/8.jpg', thumb: "./assets/img/gallery/8_tn.jpg", desc: 'Image08'},
            {src: './assets/img/gallery/9.jpg', thumb: "./assets/img/gallery/9_tn.jpg", desc: 'Image09'},
            {src: './assets/img/gallery/10.jpg', thumb: "./assets/img/gallery/10_tn.jpg", desc: 'Image10'},
            {src: './assets/img/gallery/11.jpg', thumb: "./assets/img/gallery/11_tn.jpg", desc: 'Image11'},
            {src: './assets/img/gallery/12.jpg', thumb: "./assets/img/gallery/12_tn.jpg", desc: 'Image12'},
            {src: './assets/img/gallery/15.jpg', thumb: "./assets/img/gallery/15_tn.jpg", desc: 'Image15'},
            {src: './assets/img/gallery/18.jpg', thumb: "./assets/img/gallery/18_tn.jpg", desc: 'Image18'},
            {src: './assets/img/gallery/20.jpg', thumb: "./assets/img/gallery/20_tn.jpg", desc: 'Image20'},
            {src: './assets/img/gallery/21.jpg', thumb: "./assets/img/gallery/21_tn.jpg", desc: 'Image21'},
            {src: './assets/img/gallery/22.jpg', thumb: "./assets/img/gallery/22_tn.jpg", desc: 'Image22'},

            {src: './assets/img/gallery/23.jpg', thumb: "./assets/img/gallery/23_tn.jpg", desc: 'Image23'},
            {src: './assets/img/gallery/24.jpg', thumb: "./assets/img/gallery/24_tn.jpg", desc: 'Image24'},
            {src: './assets/img/gallery/25.jpg', thumb: "./assets/img/gallery/25_tn.jpg", desc: 'Image25'},
            {src: './assets/img/gallery/28.jpg', thumb: "./assets/img/gallery/28_tn.jpg", desc: 'Image28'},
            {src: './assets/img/gallery/29.jpg', thumb: "./assets/img/gallery/29_tn.jpg", desc: 'Image29'},
            {src: './assets/img/gallery/30.jpg', thumb: "./assets/img/gallery/30_tn.jpg", desc: 'Image30'},
            {src: './assets/img/gallery/31.jpg', thumb: "./assets/img/gallery/31_tn.jpg", desc: 'Image31'},
            {src: './assets/img/gallery/34.jpg', thumb: "./assets/img/gallery/34_tn.jpg", desc: 'Image34'},
            {src: './assets/img/gallery/35.jpg', thumb: "./assets/img/gallery/35_tn.jpg", desc: 'Image35'},
            {src: './assets/img/gallery/36.jpg', thumb: "./assets/img/gallery/36_tn.jpg", desc: 'Image36'},

            {src: './assets/img/gallery/39.jpg', thumb: "./assets/img/gallery/39_tn.jpg", desc: 'Image39'},
            {src: './assets/img/gallery/40.jpg', thumb: "./assets/img/gallery/40_tn.jpg", desc: 'Image40'},
            {src: './assets/img/gallery/41.gif', thumb: "./assets/img/gallery/41_tn.jpg", desc: 'Image41'}










        ];


        $scope._Index = 0;

        $scope.isActive = function(index){
            return $scope._Index === index;

        };

        $scope.showPhoto = function(index){
            $scope._Index = index;
        }

        $scope.nextPhoto = function() {
            if ($scope._Index < $scope.photos.length -1 ) {
                 $scope._Index = $scope._Index + 1;
            }
            else {
                $scope._Index = 0;
            }
        }

        $scope.previousPhoto = function() {
            if ($scope._Index == 0 ) {
                 $scope._Index = $scope.photos.length -1;
            }
            else {
                $scope._Index = $scope._Index -1;
            }
        }

        });

})();


