'use strict';

(function (window, document, undefined, paneiro, jambo) {
  var defaultPageMetaData = {
    title: 'Paneiro Virtual - O seu supermercado online em Manaus.',
    description: 'Nunca mais perca tempo em filas de supermercado. Tempo é dinheiro, compre no Paneiro!',
    keywords: 'paneirovirtual,paneiro,virtual,supermercado,manaus,online,economia,delivery',

    'twitter:card': 'summary',
    'twitter:site': '@paneirovirtual',
    'twitter:title': 'Paneiro Virtual - O seu supermercado online em Manaus.',
    'twitter:description': 'Nunca mais perca tempo em filas de supermercado. Tempo é dinheiro, compre no Paneiro!'
  };

  var pathPageMap = {
    'loja': {
      page: 'store-main',
      pageMetadata: {
        title: 'Loja',
        description: 'Loja',
        keywords: 'loja,paneiro,virtual'
      }
    },

    'landing': {
      page: 'landing',
      pageMetadata: defaultPageMetaData
    },

    'cadastro': {
      page: 'register',
      pageMetadata: {
        title: 'Paneiro Virtual - Aguarde'
      }
    },

    'sobre': {
      page: 'about',
      pageMetadata: {
        title: 'Paneiro Virtual - Sobre Nós'
      }
    },

    'fale-conosco': {
      page: 'contact',
      pageMetadata: {
        title: 'Paneiro Virtual - Fale Conosco',
        description: 'Deseja entrar em contato com a equipe do Paneiro Virtual? Envie sua mensagem que nós retornamos o mais rápido possível.'
      }
    }
  };

  Polymer({
    is: 'paneiro-web-app',

    properties: {
      page: {
        route: Object,
        routeData: Object,
        subRoute: Object,
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },

      categories: {
        type: Object,
        value: paneiro.config.categories
      }
    },

    created: function created() {
      Polymer.AppMetadata.requestAvailability();
    },

    ready: function ready() {
      paneiro.sharedElements = {
        loadingProgress: this.$.loadingPaperProgress
      };

      paneiro.modals = {
        message: this.$.messageModal
      };
    },

    observers: ['_routePageChanged(routeData.page)'],

    _routePageChanged: function _routePageChanged(page) {
      this.page = page || 'landing';
    },

    _pageChanged: function _pageChanged(page) {
      window.scrollTo(0, 0);
      if (pathPageMap[page] !== undefined) {
        this.fire('app-metadata', pathPageMap[page].pageMetadata);
        this.importHref(this.resolveUrl('../pages/' + pathPageMap[page].page + '-page.html'), null, null, true);
      }
    }
  });
})(window, document, undefined, paneiro, jambo);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVpcm8td2ViLWFwcC9wYW5laXJvLXdlYi1hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxPQUF0QyxFQUErQyxLQUEvQyxFQUFzRDtBQUNqRCxNQUFJLHNCQUFzQjtBQUN4QixXQUFPLHdEQURpQjtBQUV4QixpQkFBYSx1RkFGVztBQUd4QixjQUFVLDZFQUhjOztBQUt4QixvQkFBZ0IsU0FMUTtBQU14QixvQkFBZ0IsaUJBTlE7QUFPeEIscUJBQWlCLHdEQVBPO0FBUXhCLDJCQUF1QjtBQVJDLEdBQTFCOztBQVdBLE1BQUksY0FBYztBQUNoQixZQUFRO0FBQ04sWUFBTSxZQURBO0FBRU4sb0JBQWM7QUFDWixlQUFPLE1BREs7QUFFWixxQkFBYSxNQUZEO0FBR1osa0JBQVU7QUFIRTtBQUZSLEtBRFE7O0FBVWhCLGVBQVc7QUFDVCxZQUFNLFNBREc7QUFFVCxvQkFBYztBQUZMLEtBVks7O0FBZWhCLGdCQUFZO0FBQ1YsWUFBTSxVQURJO0FBRVYsb0JBQWM7QUFDWixlQUFPO0FBREs7QUFGSixLQWZJOztBQXNCaEIsYUFBUztBQUNQLFlBQU0sT0FEQztBQUVQLG9CQUFjO0FBQ1osZUFBTztBQURLO0FBRlAsS0F0Qk87O0FBNkJoQixvQkFBZ0I7QUFDZCxZQUFNLFNBRFE7QUFFZCxvQkFBYztBQUNaLGVBQU8sZ0NBREs7QUFFWixxQkFBYTtBQUZEO0FBRkE7QUE3QkEsR0FBbEI7O0FBc0NBLFVBQVE7QUFDTixRQUFJLGlCQURFOztBQUdOLGdCQUFZO0FBQ1YsWUFBTTtBQUNKLGVBQU8sTUFESDtBQUVKLG1CQUFXLE1BRlA7QUFHSixrQkFBVSxNQUhOO0FBSUosY0FBTSxNQUpGO0FBS0osNEJBQW9CLElBTGhCO0FBTUosa0JBQVU7QUFOTixPQURJOztBQVVWLGtCQUFZO0FBQ1YsY0FBTSxNQURJO0FBRVYsZUFBTyxRQUFRLE1BQVIsQ0FBZTtBQUZaO0FBVkYsS0FITjs7QUFtQk4sYUFBUyxtQkFBVztBQUNsQixjQUFRLFdBQVIsQ0FBb0IsbUJBQXBCO0FBQ0QsS0FyQks7O0FBdUJOLFdBQU8saUJBQVc7QUFDaEIsY0FBUSxjQUFSLEdBQXlCO0FBQ3ZCLHlCQUFpQixLQUFLLENBQUwsQ0FBTztBQURELE9BQXpCOztBQUlBLGNBQVEsTUFBUixHQUFpQjtBQUNmLGlCQUFTLEtBQUssQ0FBTCxDQUFPO0FBREQsT0FBakI7QUFHRCxLQS9CSzs7QUFpQ04sZUFBVyxDQUNULG1DQURTLENBakNMOztBQXFDTix1QkFBbUIsMkJBQVMsSUFBVCxFQUFlO0FBQ2hDLFdBQUssSUFBTCxHQUFZLFFBQVEsU0FBcEI7QUFDRCxLQXZDSzs7QUF5Q04sa0JBQWMsc0JBQVMsSUFBVCxFQUFlO0FBQzNCLGFBQU8sUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBLFVBQUksWUFBWSxJQUFaLE1BQXNCLFNBQTFCLEVBQXFDO0FBQ25DLGFBQUssSUFBTCxDQUFVLGNBQVYsRUFBMEIsWUFBWSxJQUFaLEVBQWtCLFlBQTVDO0FBQ0EsYUFBSyxVQUFMLENBQWdCLEtBQUssVUFBTCxDQUFnQixjQUFjLFlBQVksSUFBWixFQUFrQixJQUFoQyxHQUF1QyxZQUF2RCxDQUFoQixFQUFzRixJQUF0RixFQUE0RixJQUE1RixFQUFrRyxJQUFsRztBQUNEO0FBQ0Y7QUEvQ0ssR0FBUjtBQWlERCxDQW5HTCxFQW1HTyxNQW5HUCxFQW1HZSxRQW5HZixFQW1HeUIsU0FuR3pCLEVBbUdvQyxPQW5HcEMsRUFtRzZDLEtBbkc3QyIsImZpbGUiOiJwYW5laXJvLXdlYi1hcHAvcGFuZWlyby13ZWItYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCwgcGFuZWlybywgamFtYm8pIHtcbiAgICAgIHZhciBkZWZhdWx0UGFnZU1ldGFEYXRhID0ge1xuICAgICAgICB0aXRsZTogJ1BhbmVpcm8gVmlydHVhbCAtIE8gc2V1IHN1cGVybWVyY2FkbyBvbmxpbmUgZW0gTWFuYXVzLicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTnVuY2EgbWFpcyBwZXJjYSB0ZW1wbyBlbSBmaWxhcyBkZSBzdXBlcm1lcmNhZG8uIFRlbXBvIMOpIGRpbmhlaXJvLCBjb21wcmUgbm8gUGFuZWlybyEnLFxuICAgICAgICBrZXl3b3JkczogJ3BhbmVpcm92aXJ0dWFsLHBhbmVpcm8sdmlydHVhbCxzdXBlcm1lcmNhZG8sbWFuYXVzLG9ubGluZSxlY29ub21pYSxkZWxpdmVyeScsXG5cbiAgICAgICAgJ3R3aXR0ZXI6Y2FyZCc6ICdzdW1tYXJ5JyxcbiAgICAgICAgJ3R3aXR0ZXI6c2l0ZSc6ICdAcGFuZWlyb3ZpcnR1YWwnLFxuICAgICAgICAndHdpdHRlcjp0aXRsZSc6ICdQYW5laXJvIFZpcnR1YWwgLSBPIHNldSBzdXBlcm1lcmNhZG8gb25saW5lIGVtIE1hbmF1cy4nLFxuICAgICAgICAndHdpdHRlcjpkZXNjcmlwdGlvbic6ICdOdW5jYSBtYWlzIHBlcmNhIHRlbXBvIGVtIGZpbGFzIGRlIHN1cGVybWVyY2Fkby4gVGVtcG8gw6kgZGluaGVpcm8sIGNvbXByZSBubyBQYW5laXJvISdcbiAgICAgIH07ICAgICAgICAgICAgICBcblxuICAgICAgdmFyIHBhdGhQYWdlTWFwID0ge1xuICAgICAgICAnbG9qYSc6IHtcbiAgICAgICAgICBwYWdlOiAnc3RvcmUtbWFpbicsXG4gICAgICAgICAgcGFnZU1ldGFkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0xvamEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb2phJyxcbiAgICAgICAgICAgIGtleXdvcmRzOiAnbG9qYSxwYW5laXJvLHZpcnR1YWwnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICdsYW5kaW5nJzoge1xuICAgICAgICAgIHBhZ2U6ICdsYW5kaW5nJyxcbiAgICAgICAgICBwYWdlTWV0YWRhdGE6IGRlZmF1bHRQYWdlTWV0YURhdGFcbiAgICAgICAgfSxcblxuICAgICAgICAnY2FkYXN0cm8nOiB7XG4gICAgICAgICAgcGFnZTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgICBwYWdlTWV0YWRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUGFuZWlybyBWaXJ0dWFsIC0gQWd1YXJkZSdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJ3NvYnJlJzoge1xuICAgICAgICAgIHBhZ2U6ICdhYm91dCcsXG4gICAgICAgICAgcGFnZU1ldGFkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1BhbmVpcm8gVmlydHVhbCAtIFNvYnJlIE7Ds3MnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgICdmYWxlLWNvbm9zY28nOiB7XG4gICAgICAgICAgcGFnZTogJ2NvbnRhY3QnLFxuICAgICAgICAgIHBhZ2VNZXRhZGF0YToge1xuICAgICAgICAgICAgdGl0bGU6ICdQYW5laXJvIFZpcnR1YWwgLSBGYWxlIENvbm9zY28nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNlamEgZW50cmFyIGVtIGNvbnRhdG8gY29tIGEgZXF1aXBlIGRvIFBhbmVpcm8gVmlydHVhbD8gRW52aWUgc3VhIG1lbnNhZ2VtIHF1ZSBuw7NzIHJldG9ybmFtb3MgbyBtYWlzIHLDoXBpZG8gcG9zc8OtdmVsLidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFBvbHltZXIoe1xuICAgICAgICBpczogJ3BhbmVpcm8td2ViLWFwcCcsXG5cbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICAgICAgICByb3V0ZURhdGE6IE9iamVjdCxcbiAgICAgICAgICAgIHN1YlJvdXRlOiBPYmplY3QsXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ19wYWdlQ2hhbmdlZCdcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgY2F0ZWdvcmllczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgdmFsdWU6IHBhbmVpcm8uY29uZmlnLmNhdGVnb3JpZXNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgUG9seW1lci5BcHBNZXRhZGF0YS5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7ICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGFuZWlyby5zaGFyZWRFbGVtZW50cyA9IHtcbiAgICAgICAgICAgIGxvYWRpbmdQcm9ncmVzczogdGhpcy4kLmxvYWRpbmdQYXBlclByb2dyZXNzXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHBhbmVpcm8ubW9kYWxzID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy4kLm1lc3NhZ2VNb2RhbCBcbiAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICB9LFxuXG4gICAgICAgIG9ic2VydmVyczogW1xuICAgICAgICAgICdfcm91dGVQYWdlQ2hhbmdlZChyb3V0ZURhdGEucGFnZSknXG4gICAgICAgIF0sXG5cbiAgICAgICAgX3JvdXRlUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uKHBhZ2UpIHsgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5wYWdlID0gcGFnZSB8fCAnbGFuZGluZyc7XG4gICAgICAgIH0sICAgICAgXG5cbiAgICAgICAgX3BhZ2VDaGFuZ2VkOiBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApOyAgICAgICAgICAgICAgXG4gICAgICAgICAgaWYgKHBhdGhQYWdlTWFwW3BhZ2VdICE9PSB1bmRlZmluZWQpIHsgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmZpcmUoJ2FwcC1tZXRhZGF0YScsIHBhdGhQYWdlTWFwW3BhZ2VdLnBhZ2VNZXRhZGF0YSk7IFxuICAgICAgICAgICAgdGhpcy5pbXBvcnRIcmVmKHRoaXMucmVzb2x2ZVVybCgnLi4vcGFnZXMvJyArIHBhdGhQYWdlTWFwW3BhZ2VdLnBhZ2UgKyAnLXBhZ2UuaHRtbCcpLCBudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkLCBwYW5laXJvLCBqYW1ibyk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
