// 假資料：網站各功能區塊內容
export const siteData = {
  home: {
    title: "SnowShow",
    description: "專業滑雪教學、課程報名、雪場介紹與裝備資訊平台。",
  },
  about: {
    team: [
      { name: "王教練", desc: "10年日本滑雪教學經驗，專精初學者指導。" },
      { name: "李教練", desc: "熱愛滑雪，擅長團體課程與兒童教學。" },
    ],
  },
  course: {
    intro: "多元滑雪課程，適合各年齡層與程度。",
    price: [
      { type: "一對一教學", price: "NT$8,000/天" },
      { type: "團體課程", price: "NT$3,500/人/天" },
    ],
    signupUrl: "https://tinybot.cc/snowtravel/",
  },
  skiArea: {
    yuzawa: {
      name: "越後湯澤",
      desc: "日本著名滑雪勝地，交通便利，雪質優良。",
    },
  },
  faq: [
    { q: "需要自備裝備嗎？", a: "可現場租借，亦可自備。" },
    { q: "課程語言？", a: "中文、日文、英文皆可。" },
  ],
  blog: [
    {
      title: "越後湯澤雪具租借懶人包",
      date: "2025-06-30",
      summary: "第一次上課要租裝備？不知道去哪租也不知道怎麼注意？這篇幫你整理好！",
    },
    {
      title: "滑雪新手入門技巧",
      date: "2025-07-01",
      summary: "新手滑雪必看，安全又快速上手的技巧分享。",
    },
  ],
  contact: {
    email: "info@snowshow.com.tw",
    line: "https://lin.ee/yS6PNtm",
  },
};
