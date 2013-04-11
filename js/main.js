(function() {
  $(function() {
    var handle, level, mouseDrag, volumeEl,
      _this = this;

    volumeEl = $('.volume-track');
    level = $('.volume-level');
    handle = $('.volume-handle');
    this.pagePos = 0;
    mouseDrag = function(pageX, animate) {
      var pagePos, ratio;

      if (animate == null) {
        animate = false;
      }
      pagePos = pageX - volumeEl.offset().left;
      pagePos = Math.min(volumeEl.outerWidth(), pagePos);
      pagePos = Math.max(0, pagePos);
      ratio = pagePos / volumeEl.outerWidth();
      if (this.pagePos !== pagePos) {
        this.pagePos = pagePos;
        if (animate) {
          handle.animate({
            left: pagePos
          }, 200);
          return level.animate({
            width: pagePos
          }, 200);
        } else {
          handle.css({
            left: pagePos
          });
          return level.css({
            width: pagePos
          });
        }
      }
    };
    volumeEl.mousedown(function(e) {
      var animate;

      if (e.which !== 1) {
        return;
      }
      mouseDrag(e.pageX, animate = true);
      _this.dragging = true;
      return false;
    });
    handle.mousedown(function(e) {
      if (e.which !== 1) {
        return;
      }
      _this.dragging = true;
      handle.addClass("dragging");
      mouseDrag(e.pageX);
      return false;
    });
    return $("body").mousemove(function(e) {
      if (_this.dragging) {
        mouseDrag(e.pageX);
        return $("body").css({
          cursor: "pointer"
        });
      }
    }).mouseup(function(e) {
      if (_this.dragging) {
        _this.dragging = false;
        handle.removeClass("dragging");
        return $("body").css({
          cursor: "auto"
        });
      }
    });
  });

}).call(this);
