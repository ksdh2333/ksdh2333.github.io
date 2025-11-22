Spyglass 插件相关使用说明
========================

[Spyglass (Datapack Helper Plus) ](https://github.com/SPYGlassMC/SPYGlass)是一个强大的 Minecraft 开发工具, 提供语法高亮, 智能提示等功能。

<https://spyglassmc.com/> 这里有 *Spyglass* 的官方文档, 提供了完整的使用说明。

---

目录
----
- [Spyglass 插件](#Spyglass插件)
    - [安装 Spyglass](#安装Spyglass)
    - [配置 Spyglass](#配置Spyglass)
        - [VSCode 插件设置](#VSCode插件设置)
        - [配置文件](#配置文件)
            - [配置文件示例](#配置文件示例)

---

Spyglass 插件 {#Spyglass插件}
-------------

### 安装 Spyglass {#安装Spyglass}

在 *VS Code* **插件页面**搜索 `Datapack Helper Plus by Spyglass` 进行安装
### 配置 Spyglass {#配置Spyglass}

#### VS Code 插件设置 {#VSCode插件设置}

*VS Cdoe* 插件设置中可以调整: 

- **游戏版本**`spyglassmc.env.gameVersion`: 
所使用的 Minecraft 的版本。若设为自动, 则根据 `pack.mcmeta` 来推断版本。其他版本可通过配置文件指定。
    - `Auto` : 自动检测 `pack.mcmeta` 文件设置
    - `Latest release` : 最新正式版
    - `Latest snapshot` : 最新快照版
- **追踪语法服务器**`spyglassmc.trace.server`
追踪 *VS Code* 与 *Spyglass* 语法服务器之间的通信情况。
    - `off`: 关闭追踪
    - `message`: 仅追踪消息
    - `verbose`: 追踪所有信息

#### 配置文件 {#配置文件}

[Spyglass 官方配置文件说明](https://spyglassmc.com/user/config.html)。

在**工作区根目录**(指用 *VS Ccode* 打开文件夹时的文件夹下) 创建文件名为下列文件名其中一种的文本文件: 

- `spyglass.json`
- `.spyglassrc`
- `.spyglassrc.json`

配置文件使用 JSON 格式, 未指定的配置项将不启用或使用默认设置。
配置主要包含以下几个部分: 

##### env 配置
`env` 对象用于配置 *Spyglass* 的**运行环境**, 包括: 

- `gameVersion`: 指定 **Minecraft 版本**
- `dataSource`: **数据源**, 通常为 `GitHub`
- `dependencies`: **依赖项列表**, 原版包含 
    ```
    [
        "@vanilla-datapack",
        "@vanilla-resourcepack",
        "@vanilla-mcdoc"
    ]
    ```
    可以添加其他**资源包**和**数据包**, 例如 `"file:///D:/minecraft/map/assets/resourcepacks/"`
- `feature`: 控制各种**功能**的启用状态
    - `codeActions`: 是否启用代码操作建议功能, 即提示、修复、重构等。
    - `colors`: 是否启用**颜色**高亮显示
    - `completions`: 是否启用自动**补全**功能
    - `documentHighlighting`: 是否启用**文件高亮**显示
    - `documentLinks`: 是否启用**文件链接**识别
    - `foldingRanges`: 是否启用代码**折叠**功能
    - `formatting`: 是否启用代码**格式化**功能, 使用快捷键 `Shift + Alt + F` 进行格式化
    - `hover`: 是否启用光标**悬停**信息显示
    - `inlayHint`: **内联提示**设置
        - `enabledNodes`: 启用内联提示的**节点类型**列表
    - `semanticColoring`: 是否启用**语义着色**
    - `selectionRanges`: 是否启用**选择范围**功能, 选择范围时按 `Shift + Alt + →` 扩大选择范围, 按 `Shift + Alt + ←` 缩小选择范围
    - `signatures`: 是否启用命令**签名提示**, 显示命令参数和返回值类型
- `plugins`: **插件**列表, 用于扩展 *Spyglass* 功能
- `mcmetaSummaryOverrides`: mcmeta 摘要覆盖设置, 可用于自定义数据包元数据
    > **需要补充**: 
    > 具体功能待补充, 已知此配置可用于**自定义命令树**, 用来添加原版命令以外的命令, 参见 [Spyglass #873](https://github.com/SpyglassMC/Spyglass/issues/873) 和 [Spyglass #1899](https://github.com/SpyglassMC/Spyglass/issues/1899)
    - `commands`: 自定义**命令树**
        - `path`: 自定义命令树**路径** (命令树写法见: [命令树](#命令树))
        - `replace`: 是否**替换**原版命令树
- `useFilePolling`: 是否使用文件**轮询**监测文件变化, 默认为 `false`, 启用以解决使用插件时无法重命名文件夹的问题, 但可能导致检查速度减慢。
- `permissionLevel`: **权限**等级, 范围为 1-4, 数据包权限通常为2, 即可以使用除了玩家管理和服务器管理命令以外的命令


##### format 配置
`format` 对象控制代码格式化选项, 包括：

- `blockStateBracketSpacing`: 方块状态**大括号内**间距设置
  - `inside`: **大括号内侧**的空格数
- `blockStateCommaSpacing`: 方块状态**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `blockStateEqualSpacing`: 方块状态**等号**间距设置
  - `before`: **等号前**的空格数
  - `after`: **等号后**的空格数
- `blockStateTrailingComma`: 方块状态**末尾**是否保留逗号
- `eol`: 行尾**结束符**
- `nbtArrayBracketSpacing`: NBT 数组**大括号内**间距设置
  - `inside`: **大括号内**侧的空格数
- `nbtArrayCommaSpacing`: NBT 数组**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `nbtArraySemicolonSpacing`: NBT 数组**分号**间距设置
  - `after`: **分号后**的空格数
- `nbtArrayTrailingComma`: NBT 数组**末尾**是否保留逗号
- `nbtByteSuffix`: NBT **Byte** 类型后缀, 默认为 "b"
- `nbtCompoundBracketSpacing`: NBT 复合标签**大括号内**间距设置
  - `inside`: **大括号内侧**的空格数
- `nbtCompoundColonSpacing`: NBT 复合标签**冒号**间距设置
  - `before`: **冒号前**的空格数
  - `after`: **冒号后**的空格数
- `nbtCompoundCommaSpacing`: NBT 复合标签**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `nbtCompoundTrailingComma`: NBT 复合标签**末尾**是否保留逗号
- `nbtDoubleOmitSuffix`: 是否省略 NBT 双精度浮点数**后缀**
- `nbtDoubleSuffix`: NBT **双精度浮点数**后缀, 默认为 "d"
- `nbtFloatSuffix`: NBT **浮点数**后缀, 默认为 "f"
- `nbtListBracketSpacing`: NBT 列表**大括号内**间距设置
  - `inside`: **大括号内侧**的空格数
- `nbtListCommaSpacing`: NBT 列表**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `nbtListTrailingComma`: NBT 列表**末尾**是否保留逗号
- `nbtLongSuffix`: NBT **长整型**后缀, 默认为 "L"
- `nbtShortSuffix`: NBT **整型**后缀, 默认为 "s"
- `selectorBracketSpacing`: 选择器**大括号内**间距设置
  - `inside`: **大括号内侧**的空格数
- `selectorCommaSpacing`: 选择器**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `selectorEqualSpacing`: 选择器**等号**间距设置
  - `before`: **等号前**的空格数
  - `after`: **等号后**的空格数
- `selectorTrailingComma`: 选择器**末尾**是否保留逗号
- `timeOmitTickUnit`: 是否省略**时间单位** "t"

##### lint 配置
`lint` 对象用于配置代码检查规则, 包括: 

- `blockStateSortKeys`: **方块状态键**排序规则, 可设置为null、"alphabetically"或"convention"
- `nbtCompoundSortKeys`: NBT **复合标签键**排序规则, 可设置为null、"alphabetically"或"convention"
- `selectorSortKeys`: **选择器参数**排序规则, 可设置为null、"alphabetically"或"convention"
- `commandStringQuote`: 命令中**字符串引号**使用规则, 可设置为null、"always_double"或"always_single"
- `nbtKeyQuote`: NBT **键名引号**使用规则, 可设置为null、"always_double"或"always_single"
- `nbtPathQuote`: NBT **路径引号**使用规则, 可设置为null、"always_double"或"always_single"
- `nbtStringQuote`: NBT **字符串引号**使用规则, 可设置为null、"always_double"或"always_single"
- `selectorKeyQuote`: **选择器键名**引号使用规则, 可设置为null、"always_double"或"always_single"
- `idOmitDefaultNamespace`: 是否**省略默认命名空间**("minecraft:"), 可设置为null、true或false
- `nameOfNbtKey`: NBT **键名命名**规范检查规则
- `nameOfObjective`: **记分项命名**规范检查规则
- `nameOfScoreHolder`: **记分员持有者命名**规范检查规则
- `nameOfTag`: **标签命名**规范检查规则
- `nameOfTeam`: **队伍命名**规范检查规则
- `nbtArrayLengthCheck`: 是否检查 NBT **数组长度**
- `nbtBoolean`: NBT **布尔值**检查规则
- `nbtListLengthCheck`: 是否检查 NBT **列表长度**
- `nbtTypeCheck`: NBT 类型检查**严格程度**, 可设置为"strictly"、"loosely"或null, 默认为"loosely"
- `undeclaredSymbol`: 未声明符号处理规则, 可以配置如何**处理未声明的符号**, 如自动声明为方块、物品等
    `"declare": "block"` 表示**声明**为 *方块* , `"block"` 可以替换为 `file` (文件) 或 `"public"` (公共声明, 不作为特殊符号) 
    `"report": "warning"` 表示**报告**为 *警告* , `"warning"` 可以替换为 `"error"` (错误) , `"information"` (信息) , `"hint"` (提示) 或 `"inherit"` (继承默认)

    除了直接使用 `"declare"` 或 `"report"` , 还可以使用 **if** 判断: 
    ```json
    {
        "if": [
            {"category": ["block", "entity_type", "item"], "namespace": "minecraft"}, 
            {"category": ["advancement", "bossbar", "objective", "team"]}
        ], 
        "then": {"report": "warning"}
    }, 
    {
        "then": {"declare": "block"},
    }
    ```
	<!-- 上次转换至此 -->
    这段配置表示: 如果未声明的符号为 *方块, 实体, 物品* 且命名空间为 `minecraft` 报告为 *警告* ; 如果未声明的符号为 *进度, bossbar, 记分项, 队伍* 报告为 *警告* ; 否则声明为 *方块*

##### snippet 配置

>此功能可能尚未开发完成, 实际尝试也没有成功触发补全, 见 [Spyglass #1392](https://github.com/SpyglassMC/Spyglass/issues/1392)

`snippet`对象定义**代码片段**, 用户可以通过快捷方式快速插入常用代码。

*Snippet*（代码片段）是一种可以快速插入预定义代码模板的功能。在 *Spyglass* 中，你可以自定义代码片段，通过特定的触发词快速插入常用的命令或代码结构

每个*snippet*由一个键值对组成：
- 键（key）是*snippet*的名称，也是调用该*snippet*时使用的标识符
- 值（value）是实际的代码模板，可以包含占位符

*snippet*模板支持使用**占位符**来创建可编辑区域，占位符格式：
- `${1:placeholder}` : 第一个占位符，带有默认值 `placeholder`
- `${2:text}` : 第二个占位符，带有默认值 `text`
- `$0` : 最终光标位置

示例：

```json
"snippet": {
    "executeIfScoreSet": "execute if score ${1:score_holder} ${2:objective} = ${1:score_holder} ${2:objective} $0",
    "summonAec": "summon minecraft:area_effect_cloud ~ ~ ~ {Age: -2147483648, Duration: -1, WaitTime: -2147483648, Tags: [\"${1:tag}\"]}"
}
```

##### 配置文件示例: {#配置文件示例}
```json
{
	"env": {
		"dataSource": "GitHub",
		"dependencies": [
			"@vanilla-mcdoc"
			"@vanilla-datapack",
			"@vanilla-resourcepack",
		],
		"feature": {
			"codeActions": true,
			"colors": true,
			"completions": true,
			"documentHighlighting": true,
			"documentLinks": true,
			"foldingRanges": true,
			"formatting": true,
			"hover": true,
			"inlayHint": {
				"enabledNodes": [
					"mcfunction:command_child/unknown"
				]
			},
			"semanticColoring": true,
			"selectionRanges": true,
			"signatures": true
		},
		"gameVersion": "Auto",
		"language": "Default",
		"permissionLevel": 2,
		"plugins": [],
		"mcmetaSummaryOverrides": {},
		"useFilePolling": false
	},
	"format": {
		"blockStateBracketSpacing": {
            "inside": 0
        },
		"blockStateCommaSpacing": {
            "before": 0,
            "after": 1
        },
		"blockStateEqualSpacing": {
            "before": 0,
            "after": 0
        },
		"blockStateTrailingComma": false,
		"eol": "auto",
		"nbtArrayBracketSpacing": {
            "inside": 0
        },
		"nbtArrayCommaSpacing": {
            "before": 0,
            "after": 1
        },
		"nbtArraySemicolonSpacing": {
            "after": 1
        },
		"nbtArrayTrailingComma": false,
		"nbtByteSuffix": "b",
		"nbtCompoundBracketSpacing": {
            "inside": 0
        },
		"nbtCompoundColonSpacing": {
            "before": 0,
            "after": 1
        },
		"nbtCompoundCommaSpacing": {
            "before": 0,
            "after": 1
        },
		"nbtCompoundTrailingComma": false,
		"nbtDoubleOmitSuffix": false,
		"nbtDoubleSuffix": "d",
		"nbtFloatSuffix": "f",
		"nbtListBracketSpacing": {
            "inside": 0
        },
		"nbtListCommaSpacing": {
            "before": 0,
            "after": 1
        },
		"nbtListTrailingComma": false,
		"nbtLongSuffix": "L",
		"nbtShortSuffix": "s",
		"selectorBracketSpacing": {
            "inside": 0
        },
		"selectorCommaSpacing": {
            "before": 0,
            "after": 1
        },
		"selectorEqualSpacing": {
            "before": 0,
            "after": 0
        },
		"selectorTrailingComma": false,
		"timeOmitTickUnit": false
	},
	"lint": {
		"blockStateSortKeys": null,
		"nbtCompoundSortKeys": null,
		"selectorSortKeys": null,

		"commandStringQuote": null,
		"nbtKeyQuote": null,
		"nbtPathQuote": null,
		"nbtStringQuote": null,
		"selectorKeyQuote": null,

		"idOmitDefaultNamespace": null,

		"nameOfNbtKey": null,
		"nameOfObjective": null,
		"nameOfScoreHolder": null,
		"nameOfTag": null,
		"nameOfTeam": null,

		"nbtArrayLengthCheck": true,
		"nbtBoolean": null,
		"nbtListLengthCheck": null,
		"nbtTypeCheck": "loosely",

		"undeclaredSymbol": [
			{
				"then": {
					"declare": "block"
				}
			}
		]
	},
	"snippet": {
		"executeIfScoreSet": "execute if score ${1:score_holder} ${2:objective} = ${1:score_holder} ${2:objective} $0",
		"summonAec": "summon minecraft:area_effect_cloud ~ ~ ~ {Age: -2147483648, Duration: -1, WaitTime: -2147483648, Tags: [\"${1:tag}\"]}"
	}
}
```