// DOLOR

const dolor = document.getElementById("dolor");

const urls = [
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.6435-9/67813335_10216746546869041_1318921921877770240_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=65bHjfF58LUAX8KV_TO&_nc_ht=scontent.fman2-2.fna&oh=00_AT_ceE9umSW-MgFc9ph8mjyKashktCfel8COsrOJcV32aQ&oe=631B7F76",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t39.30808-6/241454056_10222503908199476_1792704962938242393_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bMMIjHsgWvwAX8jy0jz&_nc_ht=scontent.fman2-1.fna&oh=00_AT8iCwnjzyS8VBCQ3Pr4ZX8494I876XgAth_lkTcrJmTNA&oe=62FD4C5A",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/60894_1477774979362_2207850_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=ja53DU7C0zoAX-Xuy3r&_nc_ht=scontent.fman2-1.fna&oh=00_AT-hLWk1sWVyCnigsRPzulawCrTrG-sTHblQMcib7TCMVg&oe=631E6F10",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t39.30808-6/270883259_10221408712181365_3833647636755476494_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=QNoEajhk7JkAX9PUX5Z&_nc_ht=scontent.fman2-2.fna&oh=00_AT-G2W1ckanuTneggKWJHJl0aSRD4JZU09Vu_3JFL-ac0w&oe=62FBD5FC",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/18698478_10211000924552074_3847260224758108516_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=efj0faLH4XwAX9tZTsf&_nc_oc=AQkmzy6waOZWFYsKR3nBAz-1Aebp8J2wmwd_OCdb_BTgBMIcrvjwt6FBqEmeQ9_USEI&_nc_ht=scontent.fman2-1.fna&oh=00_AT8F9dIpSnKMj3-pD8sedCrdkYAKtolE8QH1qXT4QPDe0Q&oe=631D4C96",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t31.18172-8/13411960_10208000960994860_5811698976708145831_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=t5L9pmKMnmwAX-vtt0U&_nc_ht=scontent.fman2-1.fna&oh=00_AT9wB7wYwbDJDa-U3dfY7p5A5-_L3h4I676_rmfDtEFtMA&oe=631C07D3",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/12143265_10206392582186395_2967777527668674032_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OQ0g-UoE0XUAX_94fRy&_nc_ht=scontent.fman2-2.fna&oh=00_AT_jA0lEPoVC4kbHvc7it4PGJaPuQ_0yvUtkJfZvz5cF5w&oe=631D9700",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t31.18172-8/891672_10200305998387628_1920370221_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=wjQ0kiwQ0NkAX_IuhsR&_nc_ht=scontent.fman2-1.fna&oh=00_AT8QVLsDVKCHrV6-z8Otx-jRMuz8HgIG8Ap_AGlk73d-iQ&oe=631C23C3",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/1174854_10151870076884793_1538330408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1l5-iAEDB38AX8mEO-1&_nc_ht=scontent.fman2-1.fna&oh=00_AT-gHzAnONUF7QVKgtRuUl6rCGlYGEJXx05DmCh1dVSxwA&oe=631BD01C",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/71766_1526401434993_4651758_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=aSFDMQIt52IAX_wDf00&_nc_ht=scontent.fman2-2.fna&oh=00_AT9LWEkmJp4PAM08blQPQmKxgADODKwkgssvefp5o1YC1A&oe=631E283C",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.6435-9/72835861_10217210282862151_7153894409518448640_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Wb-p_LMCI6QAX-gR4aY&_nc_ht=scontent.fman2-2.fna&oh=00_AT_zBfjDKJ-6X2daWlzrCI7398Yqh89BpAbJptEGLHAcqw&oe=631E0984",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.6435-9/67671560_10216746545068996_3416788140579356672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wpUAFIfTDtYAX-x-vVe&_nc_ht=scontent.fman2-2.fna&oh=00_AT-vXQNhmfSXvKttorFdGlQO_0kF2s4zq-opqh_3KFbnkA&oe=631D3917",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t31.18172-8/13412180_495675387289270_815075823292748646_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=eJfwWlx_97YAX9CMHae&_nc_ht=scontent.fman2-2.fna&oh=00_AT9ic8joL0x4n8xK3kmbl5iAs7WezGfp2YzAvES0SMwiWw&oe=631DF89C",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/10373683_10152623969324793_8500285716453657321_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=d_9wQhOrwjUAX_Ajk1c&_nc_ht=scontent.fman2-1.fna&oh=00_AT8jw7-gYwAT3OBD6BP1fvxYWlAiZXJGWLuAPkejyyWk0g&oe=631BEB55",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/10422425_545901182183344_2393239604567274949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=19026a&_nc_ohc=vtzmh_FxVlMAX8upOKf&_nc_ht=scontent.fman2-2.fna&oh=00_AT961G9xe66eAS97qO0_mlHuwNx7SrmWG1znKPKfBW2izg&oe=631DCC7E",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/10350423_10202933740277509_6651585293757507736_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=w-_HGNi0i_MAX8NA_BK&_nc_ht=scontent.fman2-2.fna&oh=00_AT9YDNu9TqQKHIKy-MqOxwBOA6U8xwnfpbuZK5X4Xqfrzg&oe=631EE355",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/1376472_10151907870059793_1857054010_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1oyKfsUegjgAX_ytJ9C&_nc_ht=scontent.fman2-1.fna&oh=00_AT8uVHOWKzVBNvWvW-mgWLf0JXVo_eFqvvorhmNEJd40cw&oe=631D7610",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/9253_10151907868269793_522353327_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=spRiOwzDfyEAX9qm1mk&_nc_ht=scontent.fman2-1.fna&oh=00_AT-v-uhvnuhGGUTpWqp6FooQSBl1dj1AZWMpDluT6NfMgg&oe=631DB2DE",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/1017496_10151756487429793_1790986313_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=7ZOq3wux2e4AX_kFHHa&_nc_oc=AQmINadoa6hJe1iq2Ytkvl_pZ6b5F5iech0Et447JshPEFHRlMh651EEzgNOrY0kEXM&_nc_ht=scontent.fman2-2.fna&oh=00_AT-uYWDPCKSGFtuSGifCr1-EOJwEkeG6xjlva9q0dvsH6g&oe=631B79ED",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t31.18172-8/11705807_10205883109249890_1594106259055940932_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=hFZ1N_3pdv8AX88kXPf&_nc_ht=scontent.fman2-1.fna&oh=00_AT_Bx4QnKFjdQAGFmThiUM2FXa3sbDR6xu50S7866Uc35A&oe=631C6F1E",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/1375037_10151907867279793_514304782_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=h8wV_uZxqwcAX-Hvf4F&_nc_ht=scontent.fman2-1.fna&oh=00_AT-w5YOmRAeslW2eBWx1n2d1fnqUtOa3obSFX-wWSTBB_A&oe=631CCD3D",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/1000881_10151756485039793_1268041508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=BIU0iBwalPoAX8_nreR&tn=Q148AEdhLE0_9uzV&_nc_ht=scontent.fman2-1.fna&oh=00_AT9Z-MR9xXQHLVobQKPZlXyJIgSDU6h8k3TySSYDhWfDng&oe=631D0C94",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t31.18172-8/458445_3548701471251_1107357277_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=gSrSaVVUuvcAX9ILb1_&tn=Q148AEdhLE0_9uzV&_nc_ht=scontent.fman2-2.fna&oh=00_AT8EvzRqgBPzumbVSd4xaWx5ouFGqCOoBJjqskRG2h_mog&oe=631E372C",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t31.18172-8/28164758_1823551391030237_9112043644511836301_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=Vjdxvuq6nUoAX9jDkaZ&_nc_ht=scontent.fman2-2.fna&oh=00_AT_bFemMJqnyC4EDZ60JOiS4aMCZsLVuxMTHQDH4CyFEFA&oe=631C652B",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/1229824_10151870076569793_1213924873_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=zmw11C1oDI0AX95xq00&tn=Q148AEdhLE0_9uzV&_nc_ht=scontent.fman2-2.fna&oh=00_AT_nvOEMyMh91XuEVGCiY9hD9RVeL2yelt6J40xqb1_UQw&oe=631CE234",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.18169-9/1175654_10151841406434793_638982370_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=DGD53niotyAAX9e31Bg&_nc_ht=scontent.fman2-1.fna&oh=00_AT_eVuyeED4ht7Rsgk0uY-WjVKTEHh9i_c6uQPc_5ir-OA&oe=631D30A5",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.6435-9/67883333_10216746546309027_2261628528514564096_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SnLz58PgfwwAX-OlS0O&_nc_ht=scontent.fman2-2.fna&oh=00_AT_WaycSW4WPbIKqJC_3FfL8G7Jzh7uegByMeGOY8wtNgw&oe=631BAE58",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t31.18172-8/10431292_10202140265668038_7050692026005671012_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=TgE81ov-kzkAX9_NNct&_nc_ht=scontent.fman2-2.fna&oh=00_AT95cHG-SQZ1SpG0_B1wY6Vqhrj0fzZ-DmDh5cYYmu_G-A&oe=631CD64C",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t31.18172-8/10551420_10202670648143146_8877009362281119593_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7_7ts5U8BuYAX8yBdGB&tn=Q148AEdhLE0_9uzV&_nc_ht=scontent.fman2-2.fna&oh=00_AT_Zs7f9G68b77HBLQAgSfp91QIiLbZiOiv8-6F5ln7BPA&oe=631C6131",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t31.18172-8/10446323_10202574504139606_8742788174441676309_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=R7aCml7um2wAX9bw4ft&_nc_ht=scontent.fman2-1.fna&oh=00_AT9SB3HYUlMKNn1VhBuQrMKWIrO0CNiIDPFx07GgLlO4Zg&oe=631BB932",
  "https://scontent.fman2-2.fna.fbcdn.net/v/t1.18169-9/423751_2692157538940_1009065717_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=2c4854&_nc_ohc=t89PXnR7nV8AX_2TkAc&_nc_ht=scontent.fman2-2.fna&oh=00_AT-3ysX9LR7P4Zq9Bo2FeDR1pVLmtS6QQdkXVHY74w06aQ&oe=631E0EAC",
  "https://scontent.fman2-1.fna.fbcdn.net/v/t1.6435-9/73546207_10216198066718485_6446086174254563328_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=3b-lONk4omgAX8RSj9G&_nc_ht=scontent.fman2-1.fna&oh=00_AT-HUpKQeUvZuQOsK44vPykYmv5lqrxLCFDno2G4LipuuA&oe=631D885D",
];

dolor.style.backgroundRepeat = "no-repeat";
dolor.style.backgroundPosition = "center";
dolor.style.backgroundSize = "contain";

const handleDolor = () => {
  let random = Math.round(Math.random() * (urls.length - 1));

  let urlrandom = urls[random];

  dolor.style.backgroundImage = "url(" + urlrandom + ")";
};

const handleGangrena = (e) => {
  const title = document.querySelector(".title-dolor");
  title.classList.add("opacity");
  dolor.setAttribute("onClick", "");
  var gangrena = new Audio("public/gangrena.mp3");
  gangrena.play();
  setInterval(handleDolor, 450);
};
