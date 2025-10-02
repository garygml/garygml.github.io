(function() {
    angular.module('app', ['ngAnimate'])

        .controller('galleryController', function($scope) {
        $scope.photos = [
            {src: './img/gallery/1.jpg', desc: 'Image01'},
            {src: './img/gallery/2.jpg', desc: 'Image02'},
            {src: './img/gallery/3.jpg', desc: 'Image03'},
            {src: './img/gallery/4.jpg', desc: 'Image04'},
            {src: './img/gallery/5.jpg', desc: 'Image05'},
            {src: './img/gallery/6.jpg', desc: 'Image06'},
            {src: './img/gallery/7.jpg', desc: 'Image07'},
            {src: './img/gallery/8.jpg', desc: 'Image08'},
            {src: './img/gallery/9.jpg', desc: 'Image09'},
            {src: './img/gallery/10.jpg', desc: 'Image10'},
            {src: './img/gallery/11.jpg', desc: 'Image11'},
            {src: './img/gallery/12.jpg', desc: 'Image12'},
            {src: './img/gallery/13.jpg', desc: 'Image13'},
            {src: './img/gallery/14.jpg', desc: 'Image14'},
            {src: './img/gallery/15.jpg', desc: 'Image15'},
            {src: './img/gallery/16.jpg', desc: 'Image16'},
            {src: './img/gallery/17.jpg', desc: 'Image17'},
            {src: './img/gallery/18.jpg', desc: 'Image18'},
            {src: './img/gallery/19.jpg', desc: 'Image19'},
            {src: './img/gallery/20.jpg', desc: 'Image20'},
            {src: './img/gallery/21.jpg', desc: 'Image21'}











        ];


        $scope._Index = 0;

        $scope.isActive = function(index){
            return $scope._Index === index;

        };

        $scope.showPhoto = function(index){
            $scope._Index = index;
        }

        });

})();


