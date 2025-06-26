function Products() {
  const pro = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest...",
      category: "men",
      image:
        "https://st2.depositphotos.com/1000848/8340/i/950/depositphotos_83408454-stock-photo-kid-yellow-tshirt-on-white.jpg",
      rating: { rate: 3.9, count: 120 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS753onR4cY142aVPIqHWrDHYuTG_PxlvKMumawqSQL2lBR4hO1K65wbnqKF_g0xGWCPw&usqp=CAU",
        "https://zpacks.com/cdn/shop/files/Zpacks-TrailCoolMerinoWoolT-Shirt-01.jpg?v=1686743695",
        "https://zpacks.com/cdn/shop/files/Zpacks-TrailCoolMerinoWoolT-Shirt-02_1200x1200.jpg?v=1686743695",
        "https://st2.depositphotos.com/39040180/43269/i/450/depositphotos_432699142-stock-photo-blank-shirt-color-black-template.jpg"
      ],
      tag: "trending",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit Hat",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve...",
      category: "men",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsniklQKTyKwHJQE8O0SbI02cxU1jaUdnDEQ&s",
      rating: { rate: 4.1, count: 259 },
      secondimage: [
        "https://thumbs.dreamstime.com/b/beige-men-s-hat-white-isolated-background-men-hat-s-s-style-men%C3%A2%E2%82%AC%E2%84%A2s-white-background-vintage-fashion-popular-beige-men-132568319.jpg",
        "https://i5.walmartimages.com/asr/ff3bc37e-6cd9-4267-94a1-d89696f3295d_1.277376513eba6f062922ee423d430aa6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        "https://i5.walmartimages.com/seo/Sun-Hats-For-Men-Men-Hats-Hiking-Hat-Sunhat-Beach-Hats-Jazz-Hat-Men-s-Breathable-Linen-Top-Hat-Hat-Curly_cff18788-ad57-4d5b-a2a3-195464d456bc.b64efa20184b77f8574451e80c5661f4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwuBPpSGxhDNZ6iVOmh3Wnc64j2KUUzmVujSmA4_WLfBTDIUhRpOhXjDPIiHPdbvqq4vE&usqp=CAU"
      ],
      tag: "best sale",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jackets for Spring/Autumn/Winter...",
      category: "men",
      image:
        "https://thumbs.dreamstime.com/b/realistic-jacket-leather-pink-white-background-vector-illustration-realistic-jacket-leather-pink-white-background-vector-227918739.jpg",
      rating: { rate: 4.7, count: 500 },
      secondimage: [
        "https://static.vecteezy.com/system/resources/previews/015/082/465/non_2x/realistic-black-jacket-leather-for-men-on-white-background-vector.jpg",
        "https://static.vecteezy.com/system/resources/previews/015/082/467/non_2x/realistic-red-jacket-leather-for-men-on-white-background-vector.jpg",
        "https://img.freepik.com/premium-vector/realistic-grey-jacket-leather-white-background-vector-illustration_33869-2337.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/015/082/472/small_2x/realistic-blue-jacket-leather-for-men-on-white-background-vector.jpg"
      ],
      tag: "best sale",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "The color could be slightly different...",
      category: "men",
      image: "https://m.media-amazon.com/images/I/71zbnwsnnUL._UY1000_.jpg",
      rating: { rate: 2.1, count: 430 },
      secondimage: [
        "https://m.media-amazon.com/images/I/61uZo5LnTTL._UY1000_.jpg",
        "https://m.media-amazon.com/images/I/41sBGfuLuXL._UY350_.jpg",
        "https://m.media-amazon.com/images/I/51jEo4l2yPL._AC_UY350_.jpg",
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9ce7078e-194f-4e35-9c32-b53494d36c36.__CR348,0,1391,1565_PT0_SX200_V1___.jpg"
      ],
      tag: "random",
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga...",
      price: 695,
      description: "From our Legends Collection, the Naga...",
      category: "jewelery",
      image: "https://m.media-amazon.com/images/I/31gmitu1udL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
      rating: { rate: 4.6, count: 400 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxFATZrr6Q3d7yp4m53nXWPmcIg8fguI2DEyIZgJ_xUXfFc_Q5DIepNEJSGkAwUVkUKI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczwwtP1k-GBHQqFT02CwvE6f4YofkoIzYxdKX1LH0NoUF5rOU9tDErPyymfeNw4owI3w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrUnDpl_ENSyyKglqM1u60B5MrknAYZgF8QnND2XdsHMt73sMAsvqP2m06tGejAvGfwxs&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrGlw-lcncZ5V5_2VotLtJK-fPoNqtYjxlXn_ZsCAg0tShEbXCim0OvBZD8-4HJrVrPoQ&usqp=CAU"
      ],
      tag: "trending",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Satisfaction Guaranteed...",
      category: "jewelery",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_F68U6iOBUoZeTfdGthJ5k569rzgZCTnWA&s",
      rating: { rate: 3.9, count: 70 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvI_IfioGKUNXg0FAFaYHyFmQ_RSmGEQU2SPtwpE_93pkDLGO2OCpYVUv7KqQAvjFgPE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5l76p1OobbOUOyj8gb5A5S5Ikb6Tlso7FpIQeu_Fo3G29LIYyfBydMedZXNs5ZJl0NY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYh32pw8FKqAcAcpcVZK8fX9Tgf6XVLemfH7HsjTEZMDffdUtwTZIPux3XQMBLzoILW18&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzOPXAzbH3GXMzP9cDAoceYO1FJsdYo0_-Sd0MQuMrEQnmmim8Qzb5jeNTQOZMPFO88EM&usqp=CAU"
      ],
      tag: "new",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement...",
      category: "jewelery",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/373881784/JI/VR/FI/201863206/white-gold-princess-cut-diamond-ring-500x500.jpeg",
      rating: { rate: 3, count: 400 },
      secondimage: [
        "https://5.imimg.com/data5/SELLER/Default/2024/1/373881808/FI/YW/IT/201863206/white-gold-princess-cut-diamond-ring-500x500.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRr51af6omiwmZ3g7l2Lrr9iEphglKqX6KKyUddzaBVKkTFlCrIDXyM-h8FKXXCI837To&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLw61-NsODqilRmxOtL_eu5i47jbZ0KjY2k9vLedQCL6N6lDNBzQiSdVvEGLpGy06xwQ&usqp=CAU",
        "https://www.annoushka.com/media/catalog/product/cache/78ddc8a4388f2f37da34ec21e092b89f/0/3/031085_1.jpg"
      ],
      tag: "trenning",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated",
      price: 10.99,
      description: "Rose Gold Plated Double Flared...",
      category: "jewelery",
      image: "https://m.media-amazon.com/images/I/51Gj7ucZRkL.jpg",
      rating: { rate: 1.9, count: 100 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlSv-rvS_AdgBQ3UGwEVRB-eykaaAiHzQgG6_RwwVctPyL7W0fW48Qd0_401etZUWwzo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6SxaFfi1BD9oOTHhpzf5rFlzyTJyDtfwYAueR-2RycxSh_WgrivA-fisF1NOTAHIEWs&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjO60uH2-BbXI030xfufMASubyVbM3f9ElxEEBFh99adVEFArTDKlH1x49D-zixNbBik&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibFu-UCSJSE9i66gD1OPItYGa2xS9hvrmq1FpmkliwRrw4ChmTuQPyN4rlpE-fq2yMss&usqp=CAU"
      ],
      tag: "new",
    },
    {
      id: 9,
      title: "Rog Monitor",
      price: 64,
      description: "USB 3.0 and USB 2.0 Compatibility...",
      category: "electronics",
      image: "https://i5.walmartimages.com/asr/8ea78fd5-27ef-4514-886e-b3aeeb61f341.344b01283bcacee6515eeb570033866e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      rating: { rate: 3.3, count: 203 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgskC7t_co21muDSNbEqlpcT6Rhea05Ykkp3v55Mj7r-5efRM_rPeWNyz5V5suJMYEE6c&usqp=CAU",
        "https://m.media-amazon.com/images/I/91jpo5oarTL._UF1000,1000_QL80_.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2021/6/WD/AK/BJ/55002018/asus-gaming-monitor-500x500.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGwORH3uZDFac4BkMoMDx5rRUdSSSohQNqnRt69iMzzm08H8kq-VCCujrnZT90TB4M60&usqp=CAU"
      ],
      tag: "trending",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD",
      price: 109,
      description: "Easy upgrade for faster boot up...",
      category: "electronics",
      image: "https://png.pngtree.com/background/20231129/original/pngtree-1tb-ssd-drive-multimedia-flash-portable-photo-picture-image_6632581.jpg",
      rating: { rate: 2.9, count: 470 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_BJoXT49vHgFesmaPJLx2czsUAzFL5bkdqkD_FTUEDBtFw7_-q567IIyDtVwuH2Wnp8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkpCxNyC5L3Q8o5mnj1qm0b2ByKhlQ246XqCwFQHs8kY_PKTPyoVM7qWrhpdnxm3bEqk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzloX7ri4cZxwmYD6hFT7FnH0MyppEWw_BpihRTUue6G84O5wldAyUjxne-HBKXGi1q3Q&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrM-p2rcDsmZd8gkQhYYSI7IvBV-FB-4gh3UWsPjMQ0vfQhBAStlrUUe-TaCAf5fDORVs&usqp=CAU"
      ],
      tag: "new",
    },
    {
      id: 11,
      title: "Headphone",
      price: 109,
      description: "3D NAND flash are applied to deliver...",
      category: "electronics",
      image: "https://media.istockphoto.com/id/516075586/vector/vector-black-headphones.jpg?s=612x612&w=0&k=20&c=uoB_B57tC7Rd_PvJupIlNU5eL6ZM2Z8U2vhH8tDhwY0=",
      rating: { rate: 4.8, count: 319 },
      secondimage: [
        "https://s.alicdn.com/@sc04/kf/Hdd2911f5d7c943c9b945a1bf4788c6a5w.jpg_720x720q50.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-2Gwkdquw3LNWPN0z0hFLitumo6I7sVCIxt5YOeiqMIKBXaPO4NoGYl2nBTDnSp-4HVo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34AgwdLDZCuc7ueWdO39jWXQChY5k8b9F2y1zqwBBiUfpAWzL9-qnX0T8Cclup1RYj-Y&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVnBeo5VL_-mrPis5bvsr_MC5tjU_s9Hxki-f2GfkgRPlIoTTteU-901EiC1DtUx06EU&usqp=CAU"
      ],
      tag: "best sale",
    },
    {
      id: 12,
      title: "Gaming Mouse",
      price: 114,
      description: "Expand your PS4 gaming experience...",
      category: "electronics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSmN--sZY2b9_8HJTMBuH9x8qfI7-yyT3cxlLMpcG4JSOqdYt35_L9vXlKwdiTK5c6Vc&usqp=CAU",
      rating: { rate: 4.8, count: 400 },
      secondimage: [
        "https://havitsmart.com/cdn/shop/files/havit-gaming-mouse-ms961-rgb-programmablehavit-business-529706_700x700.jpg?v=1749802330",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dMLxxIJ9WSczK6-t_xynHaqUKw-Z4KlipVr32ipADNGVE7chlLeT6H5kcpdJS9xPOHI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGAQTVdJOHSE02X7lED3v2IBpwLfI4Gj7Mcx4SkdGF2Fdq8LhPtFRgQsH-nHSnyGDo_M&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLoum8s6jrRrjN4aLRyBcQNip7tahyBW_U9m35Y6T_RVui-7d4m0OOaphT2_K6QsvPAmE&usqp=CAU"
      ],
      tag: "best sale",
    },
    {
      id: 13,
      title: "Gaming Chair",
      price: 599,
      description: "21. 5 inches Full HD (1920 x 1080)...",
      category: "electronics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT747woFzkDvz920NZOLEMMLNmOThwGVxXynQ&s",
      rating: { rate: 2.9, count: 250 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMnkj3HS3xThx3-I0Qw7ZgrBYc_zykhyDjDEvtuwTB1XPX4iRwj3xOoW--gJgyxRqTf4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLScXc5rMTSPZBjKvQlJ_UKiwgvBR90k8P_G4P_0R_jj7ta56HE2BluLXj2zqUG5buM3M&usqp=CAU",
        "https://m.media-amazon.com/images/I/5105qftq2OL._UF350,350_QL50_.jpg",
        "https://m.media-amazon.com/images/I/51y-5gPZR8L.jpg"
      ],
      tag: "new",
    },
    {
      id: 14,
      title: "LED Cable",
      price: 999.99,
      description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED...",
      category: "electronics",
      image: "https://uk-cdn.nanoleaf.me/assets/img/products/shop/lightstrips/multicolor-hd/5m/1-multicolor-lightstrip-shop-float-mobile@1x.jpg",
      rating: { rate: 2.2, count: 140 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSHLfcvk6yh2HJnmEI_kaJA35_AX29dy8xDBH4IZdWqdtquXqRqQTZB6URVMLAAgA_Ng&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m8BMxaZOFgfLpepIvZGxYct4MppJLTglJsU_kxX0zpFvtoul6byeJmuXl3RAeFdcBUY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZN49gJEJxxfexcfwfWQmAPhnvqfQjyTnZvxfOiO_xZ8o8gvuTHCwddZKdqxxpPwVgKZo&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbcE3HxP37WwuWAWJbqdP1-2LmXqG96UReb6TKfd21txg35jbEs1rsaHtXtmDCj8GxpQ&usqp=CAU"
      ],
      tag: "random",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
      price: 56.99,
      description: "Note: The Jacket is US standard size...",
      category: "women",
      image: "https://m.media-amazon.com/images/I/512Tqxfj3IL._SX425_.jpg",
      rating: { rate: 2.6, count: 235 },
      secondimage: [
        "https://www.magcomsen.com/cdn/shop/products/Women_s-Winter-Coats-3IN1-Snow-Ski-Jacket-Water-Resistant-Windproof-Fleece-Winter-Jacket-Parka_14.jpg?v=1738915875&width=1500",
        "https://cdn.shopify.com/s/files/1/1022/9437/files/sula-jacket-black-2.jpg?v=1717121267",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLHKfSz5ZrDXMiLNoOYIdq-_8sTULlGC5LZrVbOSUxJgf9XthOHiqhw1oQactOhDkPu4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CV6O0Hx6KmAcZTjuDzbO6DzTOhYH-lHHAh9wbVIfw0aFDlXjtadu9f1AJIhsKJoLx-A&usqp=CAU"
      ],
      tag: "new",
    },
    {
      id: 16,
      title: "Lock and Love Women's Faux Leather Jacket",
      price: 29.95,
      description: "100% POLYURETHANE(shell)...",
      category: "women",
      image: "https://m.media-amazon.com/images/I/71+KfpJiuBS._AC_UY1000_.jpg",
      rating: { rate: 2.9, count: 340 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0qrKKnsqw6tNBV1Onezki85T2UF3nGtrC5OEdoKD5AoxKhT5sPLKgaSCXzpmAxcaPGc&usqp=CAU",
        "https://m.media-amazon.com/images/I/515x-Dm94kL.jpg",
        "https://m.media-amazon.com/images/I/61BI5W7sruL._AC_UY1000_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81RQ0utinNL._AC_UL600_SR600,600_.jpg"
      ],
      tag: "best sale",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker",
      price: 39.99,
      description: "Lightweight perfect for trip or casual wear...",
      category: "women",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Aioxcnadm2xVg_iDlZS751-b90WRwdv3eg&s",
      rating: { rate: 3.8, count: 679 },
      secondimage: [
        "https://treqawear.com/wp-content/uploads/2024/07/TREQA-K2-Womens-Jacket_Shell_Front_White_-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwTKjbUQ0Kh-MF_zp58bodfytSLAifAe25Pt6-R9QmJCrwVPDzpxooOlhov63zFe1WzA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_l_Yt8cbzsf93DUQ6mk9QqwBmM8iiOKFVPjkrROHX-U-a_XsJXdcAv4w_8bVWqxswdZ0&usqp=CAU",
        "https://www.anacondastores.com/medias/BP90101619-peach-echo.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3wzMzIxN3xpbWFnZS9qcGVnfGltYWdlcy9oMjkvaGYzLzE1MzA2Nzk4NzU5OTY2L0JQOTAxMDE2MTktcGVhY2gtZWNoby5qcGdfU1BPVFdGX3Byb2R1Y3RIZXJvfDU5YTY0YmRlODRjOWI2OTdiZmIzYmMyNTNlYTg1NzgyMjE0MzEyNzdmOTJhNTYxMzAxMWJkZmI1YmEyMjRhMTQ"
      ],
      tag: "trending",
    },
    {
      id: 18,
      title: "MBJ Women's Short Sleeve Boat Neck",
      price: 9.85,
      description: "95% RAYON 5% SPANDEX...",
      category: "women",
      image: "https://i5.walmartimages.com/asr/7876b6cb-14e3-4232-812d-b771f6cdd283.45a04acd5294bbef7b7c26f1da4b8e12.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      rating: { rate: 4.7, count: 130 },
      secondimage: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzoFVwC_U0clFGSZ5IpXD2OH4wM-jHeFJ9WVn0Umy186u_fGrAmsoYYosNPCEr-p49qIU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVSlSwQmhc-KSTB4Ky3hOya00URQAek3fqLqXQi3TZhbmRSCNkRwBlWiIE-dHUwvjXKk&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfwFckKdD5ZTlK6dlutXgfnEQZuhxlqIXu9WWGEG12pzoWEB1hJx8I_adM7b4PtO1u1M&usqp=CAU",
        "https://i5.walmartimages.com/seo/Made-by-Johnny-Women-s-Boat-Neck-Short-Sleeve-Dolman-Drape-Top-XL-BLACK_0ad63e5c-dccd-4e54-ab74-6be4353f8208.d37a5efb33a0af22839ee5b784d780d2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      ],
      tag: "best sale",
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description: "100% Polyester, Machine wash...",
      category: "women",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTextfZU8eOiXZbLBzOjwusIXzA7UI6l7CUvjgGI1Nr_FkLgncxUgWUiVIJIQ-sDhGD0CQ&usqp=CAU",
      rating: { rate: 4.5, count: 146 },
      secondimage: [
        "https://opusprintpromotions.ie/wp-content/uploads/2021/01/3801795-5.jpg",
        "https://m.media-amazon.com/images/I/41TRbNU9xTL._AC_QL92_SH45_UL240_SR240,220_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zm6xw15bGkABoALNergSx8somL2ADu4KpY4lkGVu2W4dpDaaVv1QgSUjXAyDymzJL-s&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQNfKv0ZGqi0TRxmOc9VTBO5KnIAE5kXCqyvl5EKIl-BHWJy4u6BbRBwbv7arR-Jm9vQ&usqp=CAU"
      ],
      tag: "trending",
    },
    {
      id: 20,
      title: "DANVOUY Women's T Shirt Casual Cotton",
      price: 12.99,
      description: "95% Cotton, 5% Spandex...",
      category: "women",
      image: "https://m.media-amazon.com/images/I/61XlUVwAllL._AC_SL1010_.jpg",
      rating: { rate: 3.6, count: 145 },
      secondimage: [
        "https://m.media-amazon.com/images/I/61A0tku7XxL._AC_SL1005_.jpg",
        "https://m.media-amazon.com/images/I/618CxMsF5EL._AC_SL1005_.jpg",
        "https://m.media-amazon.com/images/I/61UTa4RJMIL._AC_SL1010_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPLmNP00N9AZLNj6cWLnFY2bW9mKMXFoVFA&s"
      ],
      tag: "new",
    },
  ];

  return pro;
}

export default Products;
