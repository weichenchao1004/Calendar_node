/**
 * Created by chenchaowei on 3/30/15.
 */
/**
 * Created by chenchaowei on 3/20/15.
 */
/**
 * Created by chenchaowei on 3/19/15.
 */
angular.module('myapp.services', []).factory('Calendar', function ($http) {
    var appts = [];
    return{
        save : function(data,id) {
            console.log('I got this data: ', data);
            return $http.post('/'+ id, data).success(function (data) {

            });


        },
        getDay:function(id){
            return $http.get('/' + id);
        }

    }


});