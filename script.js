new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "img1.jpg",
          img2: "img3.jpg",
          img3: "img2.jpg",
          title: "DARLING",
          isOpen: false,
        },
        {
          img1: "img4.jpg",
          img2: "img5.jpg",
          img3: "img6.jpg",
          title: "SERENITY",
          isOpen: false,
        },
        {
          img1: "img8.jpg",
          img2: "img7.jpg",
          img3: "img9.jpg",
          title: "PIE",
          isOpen: false,
        },
        {
          img1: "img10.jpg",
          img2: "img15.jpg",
          img3: "img11.jpg",
          title: "PEACH",
          isOpen: false,
        },
        {
          img1: "img16.jpg",
          img2: "img12.jpg",
          img3: "img17.webp",
          title: "BUDDY",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
