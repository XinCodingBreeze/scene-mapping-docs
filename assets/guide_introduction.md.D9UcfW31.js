import{_ as s,o as n,c as e,a2 as t}from"./chunks/framework.DXLFHVMF.js";const h=JSON.parse('{"title":"项目介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/introduction.md","filePath":"guide/introduction.md","lastUpdated":1787024544000}'),p={name:"guide/introduction.md"};function i(l,a,d,r,o,c){return n(),e("div",null,[...a[0]||(a[0]=[t(`<h1 id="项目介绍" tabindex="-1">项目介绍 <a class="header-anchor" href="#项目介绍" aria-label="Permalink to &quot;项目介绍&quot;">​</a></h1><blockquote><p>在线文档：<a href="https://xincodingbreeze.github.io/scene-mapping-docs/" target="_blank" rel="noreferrer">https://xincodingbreeze.github.io/scene-mapping-docs/</a></p></blockquote><p>Scene Mapping GIS 是面向 Vue 3 项目的 2D/3D GIS 组件库。2D 模块建立在 Leaflet 与 Leaflet Draw 之上，3D 模块建立在 Cesium 之上；两者都提供声明式 Vue 组件，并保留原生 Map 或 Viewer 作为高级能力出口。</p><h2 id="能力范围" tabindex="-1">能力范围 <a class="header-anchor" href="#能力范围" aria-label="Permalink to &quot;能力范围&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类别</th><th>能力</th></tr></thead><tbody><tr><td>底图</td><td>天地图影像与中文注记、OpenStreetMap、自定义 XYZ</td></tr><tr><td>点位</td><td>Marker 展示、拖拽、动态图标、命令式定位</td></tr><tr><td>区域</td><td>多边形绘制、选择、编辑、删除、洞、岛、净面积</td></tr><tr><td>轨迹</td><td>轨迹线、起终点、移动点位循环动画</td></tr><tr><td>图层</td><td>额外天地图或自定义瓦片图层</td></tr><tr><td>定位</td><td>setView、panTo、fitBounds、业务搜索结果定位</td></tr><tr><td>3D 场景</td><td>Cesium Viewer、影像图层、Entity、Marker、动态围墙、3D Tiles</td></tr><tr><td>3D 控制</td><td>相机飞行、屏幕拾取、实体批量管理</td></tr><tr><td>场景切换</td><td>使用 SceneMap 在 2D 与 3D 容器之间切换</td></tr></tbody></table><h2 id="技术架构" tabindex="-1">技术架构 <a class="header-anchor" href="#技术架构" aria-label="Permalink to &quot;技术架构&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>业务页面</span></span>
<span class="line"><span>├─ TMap（地图容器与底图）</span></span>
<span class="line"><span>│  ├─ TMapMarker</span></span>
<span class="line"><span>│  ├─ TMapPolygonEditor</span></span>
<span class="line"><span>│  └─ TMapTileLayer</span></span>
<span class="line"><span>└─ TrailMap（轨迹场景封装）</span></span>
<span class="line"><span>   └─ TMap + Leaflet 轨迹覆盖物</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CesiumMap（3D Viewer 容器）</span></span>
<span class="line"><span>├─ CesiumImagery</span></span>
<span class="line"><span>├─ CesiumEntity / CesiumDropMarker</span></span>
<span class="line"><span>├─ CesiumDynamicWall</span></span>
<span class="line"><span>└─ Cesium3DTileset</span></span></code></pre></div><p><code>TMap</code> 通过 Vue <code>provide/inject</code> 向子组件提供同一个 Leaflet Map。覆盖物组件负责自己的创建、响应式更新和卸载，不请求任何业务 API。区域搜索、权限、保存策略和弹窗内容均由业务项目维护。</p><h2 id="设计边界" tabindex="-1">设计边界 <a class="header-anchor" href="#设计边界" aria-label="Permalink to &quot;设计边界&quot;">​</a></h2><ul><li>组件库只处理通用地图交互，不内置行政区划搜索接口。</li><li>天地图 Key 和其他密钥必须由业务侧注入。</li><li><code>properties</code> 用于保存业务字段，组件编辑坐标时会保留这些字段。</li><li>未覆盖的 Leaflet 高级能力可通过 <code>TMap.getMap()</code> 获取原生实例实现。</li><li>未覆盖的 Cesium 高级能力可通过 <code>CesiumMap.getViewer()</code> 获取 Viewer 实现。</li></ul><h2 id="源码目录" tabindex="-1">源码目录 <a class="header-anchor" href="#源码目录" aria-label="Permalink to &quot;源码目录&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/2d/</span></span>
<span class="line"><span>├─ components/       # 地图与覆盖物组件</span></span>
<span class="line"><span>├─ composables/      # 地图上下文 provide/inject</span></span>
<span class="line"><span>├─ types/            # 公共 TypeScript 类型</span></span>
<span class="line"><span>├─ utils/            # 坐标转换工具</span></span>
<span class="line"><span>└─ index.ts           # 2D 独立导出入口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>src/3d/</span></span>
<span class="line"><span>├─ components/       # Viewer、影像、实体与场景图元</span></span>
<span class="line"><span>├─ composables/      # 相机、屏幕事件、实体管理</span></span>
<span class="line"><span>├─ types/            # 3D 坐标与组件类型</span></span>
<span class="line"><span>├─ utils/            # 坐标转换、相机和拾取工具</span></span>
<span class="line"><span>└─ index.ts           # 3D 独立导出入口</span></span></code></pre></div>`,12)])])}const m=s(p,[["render",i]]);export{h as __pageData,m as default};
