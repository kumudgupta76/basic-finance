// Persist checklist ticks per page in localStorage; static sites have no server state.
document$.subscribe(function () {
  const boxes = document.querySelectorAll(
    ".md-content .task-list-item input[type=checkbox]"
  );
  if (!boxes.length) {
    return;
  }

  const key = "checklist:" + window.location.pathname;

  let saved = [];
  try {
    saved = JSON.parse(window.localStorage.getItem(key)) || [];
  } catch (e) {
    saved = [];
  }

  const save = function () {
    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(Array.prototype.map.call(boxes, (b) => b.checked))
      );
    } catch (e) {
      /* storage unavailable or full — ticking still works for this session */
    }
  };

  boxes.forEach(function (box, i) {
    box.checked = saved[i] === true;
    box.addEventListener("change", save);
  });
});
