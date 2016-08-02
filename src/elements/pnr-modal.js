'use strict';

Polymer({
  is: 'pnr-modal',

  properties: {
    title: String,
    message: String
  },

  open: function open() {
    this.$.myDialog.open();
  },

  close: function close() {
    this.$.myDialog.close();
  },

  ironOverlayClosed: function ironOverlayClosed(e) {
    this.fire('iron-overlay-closed', e);
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Buci1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFFBQVE7QUFDRixNQUFJLFdBREY7O0FBR0YsY0FBWTtBQUNWLFdBQU8sTUFERztBQUVWLGFBQVM7QUFGQyxHQUhWOztBQVFGLFFBQU0sZ0JBQVc7QUFDZixTQUFLLENBQUwsQ0FBTyxRQUFQLENBQWdCLElBQWhCO0FBQ0QsR0FWQzs7QUFZRixTQUFPLGlCQUFXO0FBQ2hCLFNBQUssQ0FBTCxDQUFPLFFBQVAsQ0FBZ0IsS0FBaEI7QUFDRCxHQWRDOztBQWdCRixxQkFBbUIsMkJBQVMsQ0FBVCxFQUFZO0FBQzdCLFNBQUssSUFBTCxDQUFVLHFCQUFWLEVBQWlDLENBQWpDO0FBQ0Q7QUFsQkMsQ0FBUiIsImZpbGUiOiJlbGVtZW50cy9wbnItbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJQb2x5bWVyKHtcbiAgICAgIGlzOiAncG5yLW1vZGFsJyxcblxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiQubXlEaWFsb2cub3BlbigpO1xuICAgICAgfSxcblxuICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLiQubXlEaWFsb2cuY2xvc2UoKTtcbiAgICAgIH0sXG5cbiAgICAgIGlyb25PdmVybGF5Q2xvc2VkOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1vdmVybGF5LWNsb3NlZCcsIGUpO1xuICAgICAgfVxuICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
