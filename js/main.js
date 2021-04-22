const { reactive, ref, computed, toRefs } = Vue;

const App = {
  setup() {

    // 輪播功能
    const images = reactive([
      {src: './images/banner/1.jpg'},
      {src: './images/banner/2.jpg'},
      {src: './images/banner/3.jpg'},
      {src: './images/banner/4.jpg'},
      {src: './images/banner/5.jpg'},
      {src: './images/banner/6.jpg'},
      {src: './images/banner/7.jpg'},
      {src: './images/banner/8.jpg'},
      {src: './images/banner/9.jpg'},
      {src: './images/banner/10.jpg'},
    ])
    let bannerNow = ref(0);
    const bannerAdd = () => {
      bannerNow.value >= images.length - 1 ? bannerNow.value = 0 : bannerNow.value++
    };
    const bannerMinus = () => {
      bannerNow.value <= 0 ? bannerNow.value = images.length -1 : bannerNow.value--
    };
    const bannerSetInterval = () => {
      setInterval(() => {
        bannerNow.value >= images.length - 1 ? bannerNow.value = 0 : bannerNow.value++
      }, 2000); 
    };
    const bannerChange = (index) => {
      bannerNow.value = index;
    }

    // 倒數功能
    let countDown = ref(86400)
    let time = ref("")
    const countDownText = (() => {
      countDown.value -= 1
      let hour = parseInt(countDown.value / 3600);
      let minute = parseInt((countDown.value % 3600) / 60);
      let second = parseInt((countDown.value % 3600) % 60);
      time.value = `倒數 : ${hour}:${minute}:${second}`
    })
    const countDownInterval = () => {
      setInterval(() => {
        countDownText()
      }, 1000)
    }
    // 商品清單
    const goodList = reactive([
      {
        name: "Burton Men's Cartel X EST - White / Black / Multi Snowboard Bindings 20/21",
        src: "./images/goods/bindings/1.jpg",
        type: "Binding",
        brand: "Burton"
      },
      {
        name: "Burton Women's Step On® - Black Re:Flex Snowboard Bindings 20/21",
        src: "./images/goods/bindings/2.jpg",
        type: "Binding",
        brand: "Burton"
      },
      {
        name: "Burton Men's Genesis EST - Black / Chalk Snowboard Bindings 20/21",
        src: "./images/goods/bindings/3.jpg",
        type: "Binding",
        brand: "Burton"
      },
      {
        name: "Ride CL-4 - hushed violets Women's Bindings 20/21",
        src: "./images/goods/bindings/4.jpg",
        type: "Binding",
        brand: "Ride"
      },
      {
        name: "Burton Men's Ruler Step On® - Gray / Teal Snowboard Boots 20/21",
        src: "./images/goods/boots/1.jpg",
        type: "Boots",
        brand: "Burton"
      },
      {
        name: "K2 Sapera - party Women's Snowboard Boots 20/21",
        src: "./images/goods/boots/2.jpg",
        type: "Boots",
        brand: "K2"
      },
      {
        name: "Nidecker ONYX - black Women's Snowboard Boots 20/21",
        src: "./images/goods/boots/3.jpg",
        type: "Boots",
        brand: "Nidecker"
      },
      {
        name: "Nidecker TRITON - dark teal Men's Snowboard Boots 20/21",
        src: "./images/goods/boots/4.jpg",
        type: "Boots",
        brand: "Nidecker"
      },
      {
        name: "Phenix Women's Norway Team Jacket A 滑雪外套 - 白色",
        src: "./images/goods/jackets/1.jpg",
        type: "Jackets",
        brand: "Phenix"
      },
      {
        name: "BPhenix Women's Norway Team Jacket A 滑雪外套 - 海軍藍",
        src: "./images/goods/jackets/2.jpg",
        type: "Jackets",
        brand: "Phenix"
      },
      {
        name: "Phenix Women's Diamond Down Jacket 彈性羽絨滑雪外套 - 白色",
        src: "./images/goods/jackets/3.jpg",
        type: "Jackets",
        brand: "Phenix"
      },
      {
        name: "Burton Men's GORE-TEX Doppler Jacket 滑雪外套 - Kowall Marble",
        src: "./images/goods/jackets/4.jpg",
        type: "Jackets",
        brand: "Burton"
      },
      {
        name: "Phenix Women's Opal Pants 滑雪褲 - 黑色",
        src: "./images/goods/pants/1.jpg",
        type: "Pants",
        brand: "Phenix"
      },
      {
        name: "Phenix Women's Opal Pants 滑雪褲 - 白色",
        src: "./images/goods/pants/2.jpg",
        type: "Pants",
        brand: "Phenix"
      },
      {
        name: "Burton Men's [ak] GORE‑TEX Cyclic Pant 滑雪褲 - Sparrow",
        src: "./images/goods/pants/3.jpg",
        type: "Pants",
        brand: "Burton"
      },
      {
        name: "Burton Men's [ak] GORE‑TEX Cyclic Pant 滑雪褲 - Forest Night",
        src: "./images/goods/pants/4.jpg",
        type: "Pants",
        brand: "Burton"
      },
      {
        name: "Bataleon Thunder Men's Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/1.jpg",
        type: "Snowboard",
        brand: "Bataleon"
      },
      {
        name: "Bataleon She W Women's Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/2.jpg",
        type: "Snowboard",
        brand: "Bataleon"
      },
      {
        name: "Bataleon Global Warmer Men's Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/3.jpg",
        type: "Snowboard",
        brand: "Bataleon"
      },
      {
        name: "Allian VIVIAN Women's Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/4.jpg",
        type: "Snowboard",
        brand: "Allian"
      },
      {
        name: "Nidecker THE MOSQUITO Men's Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/5.jpg",
        type: "Snowboard",
        brand: "Nidecker"
      },
      {
        name: "Burton Men's Custom Flying V Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/6.jpg",
        type: "Snowboard",
        brand: "Burton"
      },
      {
        name: "Burton Women's Day Trader Flat Top Snowboard 20/21 滑雪板",
        src: "./images/goods/snowboards/6.jpg",
        type: "Snowboard",
        brand: "Burton"
      }
    ])
    // 篩選
    let itemDetail = ref('')
    let itemType = ref('')
    const filterItem = (item, type) => {
      itemDetail.value = item
      itemType.value = type
    }
    let filterData = computed(() => {
      if(itemDetail.value && itemType.value){
        return goodList.filter(good => good[itemType.value] === itemDetail.value)
      } else if(filterText.value){
        return goodList.filter(good => good.name.includes(filterText.value))
      } else {
        return goodList
      }
    })
    const clearText = () => {
      filterText.value = ''
    }

    let filterText =ref('')

    // 開窗
    const popupGoods = reactive({
      toggle: false,
      src: null,
      name: null
    })
    const openPopup = (item) => {
      popupGoods.toggle = true
      popupGoods.src = item.src
      popupGoods.name = item.name
    }
    const closePopup = () => {
      popupGoods.toggle = false;
      popupGoods.src = null
      popupGoods.name = null
    }


    // 回到頂端
    const scrollToTop = () => {
      scrollTo(0, 0);
    }
    
    const goodsType = computed(() => {
      let type = goodList.map(item => item.type)
      return [...new Set(type)]
    })
    const goodsBrand = computed(() => {
      let brand = goodList.map(item => item.brand)
      return [...new Set(brand)]
    })
    // 開啟計時器
    bannerSetInterval()
    countDownInterval()
    return { images, bannerNow, bannerAdd, bannerMinus, bannerChange, time, scrollToTop, goodList, goodsType, goodsBrand, filterItem, filterData, filterText, clearText, openPopup, closePopup, popupGoods };
  }
}

Vue.createApp(App).mount("#app");