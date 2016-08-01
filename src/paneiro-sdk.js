(function(window, document, undefined, jambo) {
  'use strict';

  var PaneiroConfig = {
    api: {
      url: 'http://api.paneirovirtual.com/v1',
      limit: 40
    },

    categories: [
      {
        id: 1,
        name: 'Petshop',
        path: 'petshop'
      },
      {
        id: 2,
        name: 'Limpeza',
        path: 'limpeza'
      },
      {
        id: 3,
        name: 'Mercearia',
        path: 'mercearia'
      },
      {
        id: 4,
        name: 'Bebidas',
        path: 'bebidas'
      },
      {
        id: 5,
        name: 'Frios e Laticínios',
        path: 'frios-e-laticinios'
      },
      {
        id: 6,
        name: 'Higiene e Beleza',
        path: 'higiene-e-beleza'
      },
      {
        id: 7,
        name: 'Utilidades Domésticas',
        path: 'utilidades-domesticas'
      },      
      {
        id: 9,
        name: 'Padaria',
        path: 'padaria'
      },
      {
        id: 10,
        name: 'Congelados',
        path: 'congelados'
      },
      {
        id: 11,
        name: 'Hortifruti',
        path: 'hortifruti'
      }      
    ],

    shippingPrice: 990
  };

  var PaneiroApi = {
    cart: {
      addProduct: function(product) {
        var reqObj = {
          items: [
            {
              productId: product.id,
              qty: product.qty
            }
          ]
        };

        return jambo.ajax({
          url: PaneiroConfig.api.url + '/cart',
          method: 'POST',
          data: { 
            data: JSON.stringify(reqObj),
            userToken: paneiro.userToken 
          }
        });
      },

      removeProduct: function(product) {
        var reqObj = {items: [{productId: product.id}]};
        if (product.qty) {
          reqObj.items[0].qty = product.qty;
        }

        return jambo.ajax({
          url: PaneiroConfig.api.url + '/cart',
          method: 'DELETE',
          data: { 
            data: JSON.stringify(reqObj),
            userToken: paneiro.userToken 
          }
        });
      },

      get: function() {
        return jambo.ajax({
          url: PaneiroConfig.api.url + '/cart',
          method: 'GET',
          data: {             
            userToken: paneiro.userToken 
          }
        }); 
      }
    },

    product: {
      search: function(options) {
        var paramData = {};

        if (options.query) {
          paramData.q = options.query;
        }        

        if (options.limit) {
          paramData.limit = options.limit;
        } else {
          paramData.limit = PaneiroConfig.api.limit
        }

        if (options.page) {
          paramData.page = options.page;
        }

        return new Promise((resolve, reject) => {
          jambo.ajax({
            url: PaneiroConfig.api.url + '/search/products',
            method: 'GET',
            data: paramData
          }).then(response => 
            resolve({
              data: response.data,
              paging: response.paging
            })
          ).catch(response => {
            if (response.status === 'ZERO_RESULTS') {
              resolve({
                data: []
              });
            } else {
              reject(response);
            }
          });
        });        
      },

      get: function(options) {
        var paramData = {};
        if (options.category) {
          paramData.category = options.category;
        }

        if (options.limit) {
          paramData.limit = options.limit;
        } else {
          paramData.limit = PaneiroConfig.api.limit
        }

        if (options.page) {
          paramData.page = options.page;
        }

        return jambo.ajax({
          url: PaneiroConfig.api.url + '/products',
          method: 'GET',
          data: paramData
        }); 
      }
    },

    user: {
      getData: function(options) {
        return new Promise((resolve, reject) => {
          jambo.ajax({
            url: PaneiroConfig.api.url + '/auth',          
            data: {userToken: options.userToken}          
          }).then(function(response) {
            resolve(response.data);
          }).catch(function(response) {
            if (response.status === 'ZERO_RESULTS') {
              resolve();
            }

            reject(response);
          });
        });        
      },

      register: function (userData) {
        return jambo.ajax({
          url: PaneiroConfig.api.url + '/users',
          method: 'POST',
          data: { data: JSON.stringify(userData) }
        });
      }
    },

    purchase: {
      checkout: function(options) {        
        return jambo.ajax({
          url: PaneiroConfig.api.url + '/purchases',
          method: 'POST',
          data: { 
            data: JSON.stringify(options),
            userToken: paneiro.userToken 
          }
        });
      }
    }
  };

  var PaneiroCommons = {
    currencyFormat: function (val) {
      var intPart = Math.floor(val / 100);
      var decimal = val % 100;

      var cents = (decimal > 9) ?
        decimal + '' :
        '0' + decimal;

      return 'R$ ' + intPart + ',' + cents;
    }
  };

  window.paneiro = window.paneiro || {};

  window.paneiro.api = PaneiroApi;
  window.paneiro.config = PaneiroConfig;
  window.paneiro.commons = PaneiroCommons;

  window.paneiro.userToken = jambo.getCookie('userToken');
})(window, document, undefined, jambo);
