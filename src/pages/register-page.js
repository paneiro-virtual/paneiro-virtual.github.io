'use strict';

(function (window, document, undefined, paneiro, jambo) {
  Polymer({
    is: 'register-page',

    properties: {
      route: Object,
      email: String
    },

    onRegistrationFormPreSubmit: function onRegistrationFormPreSubmit(e) {
      e.preventDefault();

      var toast = this.$.toast;
      var modal = paneiro.modals.message;
      var that = this;

      toast.open();
      paneiro.api.user.register(this.$.registrationForm.serialize()).then(function (response) {
        toast.close();

        modal.message = 'Sua solicitação de acesso foi registrada com sucesso. Em breve entraremos em contato.';
        modal.title = 'Solicitação registrada com sucesso';

        modal.open();
        var modalClosed = function modalClosed() {
          modal.removeEventListener('iron-overlay-closed', modalClosed);
          that.set('route.path', '/');
        };
        modal.addEventListener('iron-overlay-closed', modalClosed);
      }).catch(function (response) {
        toast.close();

        modal.title = 'Erro';
        modal.message = response.status === 'CONFLICT' ? 'O email ou cpf fornecidos já estão cadastrados.' : 'Aconteceu um erro ao registrar a sua solicitação. Por favor tente novamente em alguns instantes.';

        modal.open();
      });
    },

    onSendFormButtonTap: function onSendFormButtonTap() {
      if (!this.$.registrationForm.validate()) {
        return;
      }

      this.$.registrationForm.submit();
    }
  });
})(window, document, undefined, paneiro, jambo);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdGVyLXBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVMsTUFBVCxFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxPQUF0QyxFQUErQyxLQUEvQyxFQUFzRDtBQUNqRCxVQUFRO0FBQ04sUUFBSSxlQURFOztBQUdOLGdCQUFZO0FBQ1YsYUFBTyxNQURHO0FBRVYsYUFBTztBQUZHLEtBSE47O0FBUU4saUNBQTZCLHFDQUFTLENBQVQsRUFBWTtBQUN2QyxRQUFFLGNBQUY7O0FBRUEsVUFBSSxRQUFRLEtBQUssQ0FBTCxDQUFPLEtBQW5CO0FBQ0EsVUFBSSxRQUFRLFFBQVEsTUFBUixDQUFlLE9BQTNCO0FBQ0EsVUFBSSxPQUFPLElBQVg7O0FBRUEsWUFBTSxJQUFOO0FBQ0EsY0FBUSxHQUFSLENBQVksSUFBWixDQUFpQixRQUFqQixDQUEwQixLQUFLLENBQUwsQ0FBTyxnQkFBUCxDQUF3QixTQUF4QixFQUExQixFQUErRCxJQUEvRCxDQUFvRSxVQUFTLFFBQVQsRUFBbUI7QUFDckYsY0FBTSxLQUFOOztBQUVBLGNBQU0sT0FBTixHQUFnQix1RkFBaEI7QUFDQSxjQUFNLEtBQU4sR0FBYyxvQ0FBZDs7QUFFQSxjQUFNLElBQU47QUFDQSxZQUFJLGNBQWMsU0FBZCxXQUFjLEdBQVc7QUFDM0IsZ0JBQU0sbUJBQU4sQ0FBMEIscUJBQTFCLEVBQWlELFdBQWpEO0FBQ0EsZUFBSyxHQUFMLENBQVMsWUFBVCxFQUF1QixHQUF2QjtBQUNELFNBSEQ7QUFJQSxjQUFNLGdCQUFOLENBQXVCLHFCQUF2QixFQUE4QyxXQUE5QztBQUNELE9BWkQsRUFZRyxLQVpILENBWVMsVUFBUyxRQUFULEVBQW1CO0FBQzFCLGNBQU0sS0FBTjs7QUFFQSxjQUFNLEtBQU4sR0FBYyxNQUFkO0FBQ0EsY0FBTSxPQUFOLEdBQWlCLFNBQVMsTUFBVCxLQUFvQixVQUFyQixHQUNkLGlEQURjLEdBRWQsa0dBRkY7O0FBSUEsY0FBTSxJQUFOO0FBQ0QsT0FyQkQ7QUFzQkQsS0F0Q0s7O0FBd0NOLHlCQUFxQiwrQkFBVztBQUM5QixVQUFJLENBQUMsS0FBSyxDQUFMLENBQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBTCxFQUF5QztBQUN2QztBQUNEOztBQUVELFdBQUssQ0FBTCxDQUFPLGdCQUFQLENBQXdCLE1BQXhCO0FBQ0Q7QUE5Q0ssR0FBUjtBQWdERCxDQWpETCxFQWlETyxNQWpEUCxFQWlEZSxRQWpEZixFQWlEeUIsU0FqRHpCLEVBaURvQyxPQWpEcEMsRUFpRDZDLEtBakQ3QyIsImZpbGUiOiJwYWdlcy9yZWdpc3Rlci1wYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCwgcGFuZWlybywgamFtYm8pIHtcbiAgICAgIFBvbHltZXIoe1xuICAgICAgICBpczogJ3JlZ2lzdGVyLXBhZ2UnLFxuXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgICAgIGVtYWlsOiBTdHJpbmdcbiAgICAgICAgfSxcblxuICAgICAgICBvblJlZ2lzdHJhdGlvbkZvcm1QcmVTdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB2YXIgdG9hc3QgPSB0aGlzLiQudG9hc3Q7XG4gICAgICAgICAgdmFyIG1vZGFsID0gcGFuZWlyby5tb2RhbHMubWVzc2FnZTtcbiAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgICAgICB0b2FzdC5vcGVuKCk7XG4gICAgICAgICAgcGFuZWlyby5hcGkudXNlci5yZWdpc3Rlcih0aGlzLiQucmVnaXN0cmF0aW9uRm9ybS5zZXJpYWxpemUoKSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgdG9hc3QuY2xvc2UoKTtcblxuICAgICAgICAgICAgbW9kYWwubWVzc2FnZSA9ICdTdWEgc29saWNpdGHDp8OjbyBkZSBhY2Vzc28gZm9pIHJlZ2lzdHJhZGEgY29tIHN1Y2Vzc28uIEVtIGJyZXZlIGVudHJhcmVtb3MgZW0gY29udGF0by4nOyAgXG4gICAgICAgICAgICBtb2RhbC50aXRsZSA9ICdTb2xpY2l0YcOnw6NvIHJlZ2lzdHJhZGEgY29tIHN1Y2Vzc28nO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICB2YXIgbW9kYWxDbG9zZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgbW9kYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXJvbi1vdmVybGF5LWNsb3NlZCcsIG1vZGFsQ2xvc2VkKTtcbiAgICAgICAgICAgICAgdGhhdC5zZXQoJ3JvdXRlLnBhdGgnLCAnLycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24tb3ZlcmxheS1jbG9zZWQnLCBtb2RhbENsb3NlZCk7XG4gICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRvYXN0LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIG1vZGFsLnRpdGxlID0gJ0Vycm8nO1xuICAgICAgICAgICAgbW9kYWwubWVzc2FnZSA9IChyZXNwb25zZS5zdGF0dXMgPT09ICdDT05GTElDVCcpID9cbiAgICAgICAgICAgICAgJ08gZW1haWwgb3UgY3BmIGZvcm5lY2lkb3MgasOhIGVzdMOjbyBjYWRhc3RyYWRvcy4nIDpcbiAgICAgICAgICAgICAgJ0Fjb250ZWNldSB1bSBlcnJvIGFvIHJlZ2lzdHJhciBhIHN1YSBzb2xpY2l0YcOnw6NvLiBQb3IgZmF2b3IgdGVudGUgbm92YW1lbnRlIGVtIGFsZ3VucyBpbnN0YW50ZXMuJzsgICAgICAgICAgICBcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpOyAgICAgICAgICAgIFxuICAgICAgICAgIH0pOyAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICBvblNlbmRGb3JtQnV0dG9uVGFwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuJC5yZWdpc3RyYXRpb25Gb3JtLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IFxuXG4gICAgICAgICAgdGhpcy4kLnJlZ2lzdHJhdGlvbkZvcm0uc3VibWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCwgcGFuZWlybywgamFtYm8pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
