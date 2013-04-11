$ ->
  volumeEl = $('.volume')
  level = $('.volume-level')
  handle = $('.volume-handle')

  @pagePos = 0

  volumeEl.mousedown (e) =>
    return unless e.which == 1
    @dragging = true
    pagePos = e.pageX - volumeEl.offset().left
    pagePos = Math.min(volumeEl.outerWidth(), pagePos)
    pagePos = Math.max(0, pagePos)
    if @pagePos != pagePos
      @pagePos = pagePos
      handle.animate left: pagePos, 200
      level.animate width: pagePos, 200
    false