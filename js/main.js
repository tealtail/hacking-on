(function() {
  $(function() {
    var handle, level, volumeEl,
      _this = this;

    volumeEl = $('.volume');
    level = $('.volume-level');
    handle = $('.volume-handle');
    this.pagePos = 0;
    return volumeEl.mousedown(function(e) {
      var pagePos, ratio;

      if (e.which !== 1) {
        return;
      }
      _this.dragging = true;
      pagePos = e.pageX - volumeEl.offset().left;
      pagePos = Math.min(volumeEl.outerWidth(), pagePos);
      pagePos = Math.max(0, pagePos);
      console.log(pagePos);
      if (_this.pagePos !== pagePos) {
        _this.pagePos = pagePos;
        ratio = pagePos / volumeEl.outerWidth();
        console.log(ratio);
        handle.css({
          left: pagePos
        });
        level.css({
          width: pagePos
        });
      }
      return false;
    });
  });

}).call(this);
