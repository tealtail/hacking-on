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
    console.log(pagePos)
    if @pagePos != pagePos
      @pagePos = pagePos
      ratio = pagePos / volumeEl.outerWidth()
      console.log(ratio)
      handle.css left: pagePos
      level.css width: pagePos
    false