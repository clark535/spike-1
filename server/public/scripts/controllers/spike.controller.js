spikeApp.controller('SpikeController', function ($http) {
    console.log('SpikeController started.');
    var vm = this;
    vm.searchResults = [];
    vm.keyword = '';
    
    // Start by implementing these functions in
    // this controller. Once everything is working,
    // try moving randomSearch and keywordSearch
    // into a service.

    // Search for random giphy images
    vm.spikeSearch = function() {
        // YOUR CODE HERE
    }

    vm.keywordSearch = function(keyword) {
        var keyword = 'friday';
        $http({
            method: 'GET',
            url: '/maps',
            params: {
                q: keyword
            }
        }).then(function (response) {
            console.log('response', response.data.data);
            vm.searchResults = response.data.data;
        });
    }
    vm.keywordSearch();

});