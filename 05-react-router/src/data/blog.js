const blogs = [
  {
    id: 1,
    title: "JavaScript基础入门",
    content:
      "JavaScript是一种在网页中广泛使用的脚本语言，它可以让网页具有交互性。本文将介绍JavaScript的基本语法、变量、数据类型等内容，帮助你快速入门。",
    author: "张三",
    image:
      "https://public-cdn-oss.mosoteach.cn/avatar/2023/BD/6a6510afdd8b00301d72d69630c5a3a4.jpg?v=1680759033&x-oss-process=style/s300x300",
    views: 1200,
    likes: 300,
    tags: ["JavaScript", "前端", "编程"],
  },
  {
    id: 2,
    title: "Python数据可视化",
    content:
      "Python的matplotlib和seaborn库提供了强大的数据可视化功能。本文将通过实例介绍如何使用这些库绘制柱状图、折线图、散点图等常见图表。",
    author: "李四",
    image:
      "https://public-cdn-oss.mosoteach.cn/avatar/2025/2D/583ec4a827bacbe84c7af89d6f6f2b6e.jpg?v=1740056347&x-oss-process=style/s300x300",
    views: 800,
    likes: 200,
    tags: ["Python", "数据可视化", "数据分析"],
  },
  {
    id: 3,
    title: "React框架入门与实践",
    content:
      "React是一个用于构建用户界面的JavaScript库。本文将介绍React的基本概念，如组件、状态、生命周期等，并通过一个简单的项目展示如何使用React开发前端应用。",
    author: "王五",
    image:
      "https://public-cdn-oss.mosoteach.cn/avatar/2023/17/ba5ebfd5624f901afddb5e424c3442d4.jpg?v=1693574265&x-oss-process=style/s300x300",
    views: 1500,
    likes: 400,
    tags: ["React", "前端", "组件化"],
  },
  {
    id: 4,
    title: "CSS布局技巧",
    content:
      "CSS是网页设计中不可或缺的一部分，掌握CSS布局技巧可以让你的网页更加美观和实用。本文将介绍Flexbox、Grid等现代CSS布局方式，并提供一些实用的布局案例。",
    author: "赵六",
    image:
      "https://public-cdn-oss.mosoteach.cn/avatar/2024/F6/70469f236f0457f266dfe6efeb42e892.jpg?v=1727076395&x-oss-process=style/s300x300",
    views: 1000,
    likes: 150,
    tags: ["CSS", "布局", "前端"],
  },
  {
    id: 5,
    title: "Node.js服务器搭建",
    content:
      "Node.js是一个基于Chrome V8引擎的JavaScript运行环境，可以用来搭建高性能的服务器。本文将介绍如何使用Node.js搭建一个简单的HTTP服务器，并实现基本的路由功能。",
    author: "孙七",
    image:
      "https://public-cdn-oss.mosoteach.cn/avatar/2023/2C/d8dad4a8dc191bdbfeb54ac05d79011a.jpg?v=1693560269&x-oss-process=style/s300x300",
    views: 900,
    likes: 250,
    tags: ["Node.js", "服务器", "后端"],
  },
  {
    id: 6,
    title: "Vue.js实战项目",
    content:
      "Vue.js是一个渐进式JavaScript框架，易于上手且功能强大。本文将通过一个完整的项目案例，介绍Vue.js的项目结构、路由、状态管理等核心概念。",
    author: "周八",
    image: "https://example.com/image6.jpg",
    views: 1300,
    likes: 350,
    tags: ["Vue.js", "前端", "项目实践"],
  },
  {
    id: 7,
    title: "SQL数据库基础",
    content:
      "SQL是用于管理关系型数据库的标准语言。本文将介绍SQL的基本语法，包括数据查询、插入、更新和删除操作，并通过实例帮助你掌握数据库操作技巧。",
    author: "吴九",
    image: "https://example.com/image7.jpg",
    views: 1100,
    likes: 300,
    tags: ["SQL", "数据库", "后端"],
  },
  {
    id: 8,
    title: "Django框架入门",
    content:
      "Django是一个开源的Python Web框架，具有快速开发、安全可靠的特点。本文将介绍Django的基本架构、模型、视图和模板等核心概念，并通过一个简单的博客项目进行实践。",
    author: "郑十",
    image: "https://example.com/image8.jpg",
    views: 1400,
    likes: 450,
    tags: ["Django", "Python", "Web开发"],
  },
  {
    id: 9,
    title: "前端性能优化技巧",
    content:
      "前端性能优化是提升用户体验的关键。本文将介绍如何通过代码优化、资源压缩、缓存策略等手段，提高网页的加载速度和响应性能。",
    author: "钱伯",
    image: "https://example.com/image9.jpg",
    views: 1600,
    likes: 500,
    tags: ["前端", "性能优化", "用户体验"],
  },
  {
    id: 10,
    title: "人工智能入门",
    content:
      "人工智能是当今科技领域的热门话题，涵盖了机器学习、深度学习等多个子领域。本文将介绍人工智能的基本概念、发展历程以及一些常见的应用场景。",
    author: "孔仲",
    image: "https://example.com/image10.jpg",
    views: 1800,
    likes: 600,
    tags: ["人工智能", "机器学习", "深度学习"],
  },
];

export default blogs;
