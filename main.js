(() => {
  const sceneInfo = [
    {
      // 0
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      obj: {
        container: document.querySelector("#scroll-section-0"),
      },
    },
    {
      // 1
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
      obj: {
        container: document.querySelector("#scroll-section-1"),
      },
    },
    {
      // 2
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      obj: {
        container: document.querySelector("#scroll-section-2"),
      },
    },
    {
      // 3
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      obj: {
        container: document.querySelector("#scroll-section-3"),
      },
    },
  ];

  function setLayout() {
    for (let i = 0; i < sceneInfo.length; i++) {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[
        i
      ].obj.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }

  window.addEventListener("resize", setLayout);

  setLayout();
})();
