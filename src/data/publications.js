const PUBLICATIONS = [
  {
    title: "Creative Robot Tool Use with Large Language Models",
    authors:
      "Mengdi Xu*, Peide Huang*, Wenhao Yu*, Shiqi Liu, Xilun Zhang, Yaru Niu, Tingnan Zhang, Fei Xia, Jie Tan, Ding Zhao",
    journals: [
      "CoRL 2023 Workshop on Language and Robot Learning: Language as Grounding",
    ],
    projectPhoto: "/imgs/robotool.gif",
    links: [
      { name: "Homepage", href: "https://creative-robotool.github.io/" },
      { name: "Paper", href: "https://arxiv.org/pdf/2310.13065.pdf" },
      {
        name: "MLD Blog",
        href: "https://blog.ml.cmu.edu/2023/12/08/creative-robot-tool-use-with-large-language-models/",
      },
      {
        name: "TechXplore",
        href: "https://techxplore.com/news/2023-11-robots-tools-creatively-leveraging-large.html",
      },
    ],
  },
  {
    title:
      "Automated Cardiovascular Record Retrieval by Multimodal Learning between Electrocardiogram and Clinical Report",
    authors:
      "Jielin Qiu*, Jiacheng Zhu*, Shiqi Liu, William Han, Jingqi Zhang, Chaojing Duan, Michael Rosenberg, Emerson Liu, Douglas Weber, Ding Zhao",
    journals: ["Proceedings of Machine Learning for Health (PMLR), 2023"],
    projectPhoto: "/imgs/ecgEncoding.png",
    links: [
      {
        name: "Code",
        href: "https://github.com/Jason-Qiu/ECG_image_encoding",
      },
      { name: "Paper", href: "https://arxiv.org/abs/2304.06286" },
    ],
  },
  {
    title: "Contnual Vision-based Reinforcement Learning with Group Symmetries",
    authors:
      "Shiqi Liu*, Mengdi Xu*, Peide Huang, Xilun Zhang, Yongkang Liu, Kentaro Oguchi, Ding Zhao",
    journals: ["Conference on Robot Learning (CoRL), 2023 (oral, 6.6%)"],
    projectPhoto: "/imgs/covers.gif",
    links: [
      { name: "Homepage", href: "https://sites.google.com/view/rl-covers/" },
      { name: "Paper", href: "https://arxiv.org/pdf/2210.12301.pdf" },
    ],
  },
  {
    title:
      "What Went Wrong? Closing the Sim-to-Real Gap via Differentiable Causal Discovery",
    authors:
      "Peide Huang, Xilun Zhang*, Ziang Cao*, Shiqi Liu*, Mengdi Xu, Wenhao Ding, Jonathan Francis, Bingqing Chen, Ding Zhao",
    journals: ["Conference on Robot Learning (CoRL), 2023"],
    projectPhoto: "/imgs/compass.gif",
    links: [
      {
        name: "Homepage",
        href: "https://sites.google.com/view/sim2real-compass",
      },
      { name: "Paper", href: "https://arxiv.org/pdf/2306.15864.pdf" },
    ],
  },
  {
    title:
      "SeasonDepth: Cross-Season Monocular Depth Prediction Dataset and Benchmark under Multiple Environments",
    authors:
      "Hanjiang Hu*, Baoquan Yang*, Zhijian Qiao*, Shiqi Liu, Jiacheng Zhu, Zuxin Liu, Wenhao Ding, Ding Zhao, Hesheng Wang",
    journals: [
      "International Conference on Intelligent Robots and Systems (IROS), 2023",
      "ICML 2022 Safe Learning for Autonomous Driving Workshop",
    ],
    projectPhoto: "/imgs/seasonDepth.png",
    links: [
      {
        name: "Homepage",
        href: "https://seasondepth.github.io/",
      },
      { name: "Paper", href: "https://arxiv.org/abs/2011.04408" },
      { name: "Toolkit", href: "https://github.com/SeasonDepth/SeasonDepth" },
    ],
  },
];

const template = {
  title: "",
  authors: "",
  journals: [""],
  projectPhoto: "/imgs/",
  links: [
    {
      name: "Homepage",
      href: "",
    },
    { name: "Paper", href: "" },
  ],
};

export default PUBLICATIONS;
