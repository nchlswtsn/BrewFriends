'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('articles.list', {
        url: '',
        templateUrl: 'modules/articles/views/list-articles.client.view.html'
      })
      .state('articles.create', {
        url: '/create',
        templateUrl: 'modules/articles/views/create-article.client.view.html'
      })
      .state('articles.market', {
        url: '/market',
        templateUrl: 'modules/articles/views/market-article.client.view.html'
      })
      .state('articles.trade', {
        url: '/trade',
        templateUrl: 'modules/articles/views/trade-article.client.view.html'
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/views/view-article.client.view.html'
      })
      .state('articles.market-view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/views/market-view-article.client.view.html'
      })
      .state('articles.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/views/edit-article.client.view.html'
      });
  }
]);
