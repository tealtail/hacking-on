$ ->
  volumeEl = $('.volume-track')
  level = $('.volume-level')
  handle = $('.volume-handle')

  @pagePos = 0

  mouseDrag = (pageX, animate=false) ->
    pagePos = pageX - volumeEl.offset().left
    pagePos = Math.min(volumeEl.outerWidth(), pagePos)
    pagePos = Math.max(0, pagePos)

    ratio = pagePos / volumeEl.outerWidth()

    if @pagePos != pagePos
      @pagePos = pagePos

      if animate
        handle.animate left: pagePos, 200
        level.animate width: pagePos, 200
      else
        handle.css left: pagePos
        level.css width: pagePos

  volumeEl.mousedown (e) =>
    return unless e.which == 1
    mouseDrag(e.pageX, animate=true)
    @dragging = true

    false

  handle.mousedown (e) =>
    return unless e.which == 1
    @dragging = true
    handle.addClass "dragging"
    mouseDrag(e.pageX)
    false

  $("body")
    .mousemove (e) =>
      if @dragging
        mouseDrag(e.pageX)
        $("body").css cursor: "pointer"

    .mouseup (e) =>
      if @dragging
        # Finished dragging
        @dragging = false
        handle.removeClass "dragging"

        # Revert the cursor
        $("body").css cursor: "auto"
