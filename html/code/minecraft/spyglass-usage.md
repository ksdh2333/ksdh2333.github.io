Spyglass 插件相关使用说明
========================

[Spyglass (Datapack Helper Plus)](https://github.com/SPYGlassMC/SPYGlass)是一个强大的 Minecraft 开发工具, 提供语法高亮, 智能提示等功能

<https://spyglassmc.com/> 这里有 *Spyglass* 的官方文档, 提供了完整的使用说明

[查看此文档的网页版本](https://ksdh.dpdns.org/html/code/minecraft/spyglass-usage.html)

---

目录
----
- [Spyglass 插件](#Spyglass插件)
    - [安装 Spyglass](#安装Spyglass)
    - [配置 Spyglass](#配置Spyglass)
        - [VSCode 插件设置](#VSCode插件设置)
        - [配置文件](#配置文件)
            - [env 配置](#env-配置)
            - [format 配置](#format-配置)
            - [lint 配置](#lint-配置)
            - [snippet 配置](#snippet-配置)
            - [配置文件示例](#配置文件示例)
- [Mcdoc 的使用](#mcdoc的使用)
    - [基本语法](#mcdoc基本语法)
        - [注释](#mcdoc注释)
            - [普通注释](#mcdoc普通注释)
            - [Doc注释](#mcdocdoc注释)
        - [类型化数字](#mcdoc类型化数字)
        - [数字范围](#mcdoc数字范围)
        - [字符串语法](#mcdoc字符串语法)
        - [路径](#mcdoc路径)
        - [标识符](#mcdoc标识符)
        - [结构体定义](#mcdoc结构体定义)
        - [类型映射](#mcdoc类型映射)
        - [字段的类型](#mcdoc字段的类型)
            - [any 类型](#mcdoc类型any)
            - [boolean 类型](#mcdoc类型boolean)
            - [string 类型](#mcdoc类型string)
            - [数值类型](#mcdoc数值类型)
            - [字面量类型](#mcdoc字面量类型)
            - [原始数组类型](#mcdoc原始数组类型)
            - [列表类型](#mcdoc列表类型)
            - [元组类型](#mcdoc元组类型)
            - [枚举类型](#mcdoc枚举类型)
            - [分派器类型](#mcdoc分派器类型)
            - [联合类型](#mcdoc联合类型)
            - [类型索引](#mcdoc类型索引)
        - [类型别名语句](#mcdoc类型别名语句)
            - [绑定类型参数](#mcdoc绑定类型参数)
        - [使用语句](#mcdoc使用语句)
        - [注入](#mcdoc注入)
            - [枚举注入](#mcdoc枚举注入)
            - [结构体注入](#mcdoc结构体注入)
        - [属性](#mcdoc属性)
            - [canonical](#mcdoc属性canonical)
            - [color](#mcdoc属性color)
            - [command](#mcdoc属性command)
            - [deprecated](#mcdoc属性deprecated)
            - [dispatcher_key](#mcdoc属性dispatcher_key)
            - [divisible_by](#mcdoc属性divisible_by)
            - [entity](#mcdoc属性entity)
            - [game_rule](#mcdoc属性game_rule)
            - [id](#mcdoc属性id)
            - [match_regex](#mcdoc属性match_regex)
            - [nbt](#mcdoc属性nbt)
            - [nbt_path](#mcdoc属性nbt_path)
            - [objective](#mcdoc属性objective)
            - [regex_pattern](#mcdoc属性regex_pattern)
            - [score_holder](#mcdoc属性score_holder)
            - [since](#mcdoc属性since)
            - [tag](#mcdoc属性tag)
            - [team](#mcdoc属性team)
            - [text_component](#mcdoc属性text_component)
            - [until](#mcdoc属性until)

---

Spyglass 插件 {#Spyglass插件}
-------------

### 安装 Spyglass {#安装Spyglass}

在 *VS Code* **插件页面**搜索 `Datapack Helper Plus by Spyglass` 进行安装
### 配置 Spyglass {#配置Spyglass}

#### VS Code 插件设置 {#VSCode插件设置}

*VS Code* 插件设置中可以调整: 

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

[Spyglass 官方配置文件说明](https://spyglassmc.com/user/config.html)

在**工作区根目录**(指用 *VS Code* 打开文件夹时的文件夹下) 创建文件名为下列文件名其中一种的文本文件: 

- `spyglass.json`
- `.spyglassrc`
- `.spyglassrc.json`

配置文件使用 JSON 格式, 未指定的配置项将不启用或使用默认设置
配置主要包含以下几个部分: 

##### env 配置 {#env-配置}
`env` 对象用于配置 *Spyglass* 的**运行环境**, 包括: 

- `gameVersion`: 指定 **Minecraft 版本**
- `dataSource`: **数据源**, 通常为 `GitHub`
- `dependencies`: **依赖项列表**, 原版包含 
    ```
    [
        "@vanilla-mcdoc",
        "@vanilla-datapack",
        "@vanilla-resourcepack"
    ]
    ```
    可以添加其他**资源包**和**数据包**, 例如 `"file:///D:/minecraft/map/assets/resourcepacks/"`
- `feature`: 控制各种**功能**的启用状态
    - `codeActions`: 是否启用**代码操作**建议功能
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
        - `path`: 自定义命令树**路径** 
        <!-- TODO (命令树写法见: [命令树](#命令树)) -->
        - `replace`: 是否**替换**原版命令树
- `useFilePolling`: 是否使用文件**轮询**监测文件变化, 默认为 `false`, 启用以解决使用插件时无法重命名文件夹的问题, 但可能导致检查速度减慢
- `permissionLevel`: **权限**等级, 范围为 1-4, 数据包权限通常为2, 即可以使用除了玩家管理和服务器管理命令以外的命令


##### format 配置 {#format-配置}
`format` 对象控制代码格式化选项, 包括:

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
- `nbtByteSuffix`: NBT **Byte** 类型后缀, 默认为 `b`
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
- `nbtDoubleSuffix`: NBT **双精度浮点数**后缀, 默认为 `d`
- `nbtFloatSuffix`: NBT **浮点数**后缀, 默认为 `f`
- `nbtListBracketSpacing`: NBT 列表**大括号内**间距设置
  - `inside`: **大括号内侧**的空格数
- `nbtListCommaSpacing`: NBT 列表**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `nbtListTrailingComma`: NBT 列表**末尾**是否保留逗号
- `nbtLongSuffix`: NBT **长整型**后缀, 默认为 `L`
- `nbtShortSuffix`: NBT **整型**后缀, 默认为 `s`
- `selectorBracketSpacing`: 选择器**大括号内**间距设置
  - `inside`: **大括号内侧**的空格数
- `selectorCommaSpacing`: 选择器**逗号**间距设置
  - `before`: **逗号前**的空格数
  - `after`: **逗号后**的空格数
- `selectorEqualSpacing`: 选择器**等号**间距设置
  - `before`: **等号前**的空格数
  - `after`: **等号后**的空格数
- `selectorTrailingComma`: 选择器**末尾**是否保留逗号
- `timeOmitTickUnit`: 是否省略**时间单位** `t`

##### lint 配置 {#lint-配置}
`lint` 对象用于配置代码检查规则, 包括: 

- `blockStateSortKeys`: **方块状态键**排序规则, 可设置为`null`、`alphabetically`或`convention`
- `nbtCompoundSortKeys`: NBT **复合标签键**排序规则, 可设置为`null`、`alphabetically`或`convention`
- `selectorSortKeys`: **选择器参数**排序规则, 可设置为`null`、`alphabetically`或`convention`
- `commandStringQuote`: 命令中**字符串引号**使用规则, 可设置为`null`、`always_double`或`always_single`
- `nbtKeyQuote`: NBT **键名引号**使用规则, 可设置为`null`、`always_double`或`always_single`
- `nbtPathQuote`: NBT **路径引号**使用规则, 可设置为`null`、`always_double`或`always_single`
- `nbtStringQuote`: NBT **字符串引号**使用规则, 可设置为`null`、`always_double`或`always_single`
- `selectorKeyQuote`: **选择器键名**引号使用规则, 可设置为`null`、`always_double`或`always_single`
- `idOmitDefaultNamespace`: 是否**省略默认命名空间**("minecraft:"), 可设置为`null`、`true`或`false`
- `nameOfNbtKey`: NBT **键名命名**规范检查规则
- `nameOfObjective`: **记分项命名**规范检查规则
- `nameOfScoreHolder`: **记分员持有者命名**规范检查规则
- `nameOfTag`: **标签命名**规范检查规则
- `nameOfTeam`: **队伍命名**规范检查规则
- `nbtArrayLengthCheck`: 是否检查 NBT **数组长度**
- `nbtBoolean`: NBT **布尔值**检查规则
- `nbtListLengthCheck`: 是否检查 NBT **列表长度**
- `nbtTypeCheck`: NBT 类型检查**严格程度**, 可设置为`strictly`、`loosely`或`null`, 默认为`loosely`
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
    这段配置表示: 如果未声明的符号为 *方块, 实体, 物品* 且命名空间为 `minecraft` 报告为 *警告* ; 如果未声明的符号为 *进度, bossbar, 记分项, 队伍* 报告为 *警告* ; 否则声明为 *方块*

##### snippet 配置 {#snippet-配置}

>此功能可能尚未开发完成, 实际尝试也没有成功触发补全, 见 [Spyglass #1392](https://github.com/SpyglassMC/Spyglass/issues/1392)

`snippet`对象定义**代码片段**, 用户可以通过快捷方式快速插入常用代码

*Snippet*(代码片段)是一种可以快速插入预定义代码模板的功能
在 *Spyglass* 中, 你可以自定义代码片段, 通过特定的触发词快速插入常用的命令或代码结构

每个*snippet*由一个键值对组成:
- 键(key)是*snippet*的名称, 也是调用该*snippet*时使用的标识符
- 值(value)是实际的代码模板, 可以包含占位符

*snippet*模板支持使用**占位符**来创建可编辑区域, 占位符格式:
- `${1:placeholder}` : 第一个占位符, 带有默认值 `placeholder`
- `${2:text}` : 第二个占位符, 带有默认值 `text`
- `$0` : 最终光标位置

示例:

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

Mcdoc 的使用 {#mcdoc的使用}
------------

*Mcdoc* 是一种用于**描述** *Minecraft* 数据包中**数据结构**的文档格式, 主要用于为 *Minecraft* 的 *storage*, *entity*, *block* 等数据提供类型**定义**和**自动补全支持**

在工作区内的任何 `.mcdoc` 文件都可以被 *Spyglass* 识别并解析, 但还是建议把项目的 `.mcdoc` 文件放在 `mcdoc` 文件夹内, 文件夹与数据包的 `data` 文件夹同级, 此时 `mcdoc` 文件夹所在的目录会被视为根目录

官方文档中的 *Mcdoc* 用法见: [Mcdoc](https://spyglassmc.com/user/mcdoc/)

### 基本语法 {#mcdoc基本语法}

*Spyglass* 官方文档中的 [语法介绍](https://spyglassmc.com/user/mcdoc/specification.html)

官方文档的汉化版本见: [Mcdoc格式 - 雪狐小窝](https://alumopper.top/mcdoc%E6%A0%BC%E5%BC%8F/)

原版 *Minecraft* 数据的 *Mcdco* 文档见: [vanilla-mcdoc](https://github.com/SpyglassMC/vanilla-mcdoc/)

#### 注释 {#mcdoc注释}

##### 普通注释 {#mcdoc普通注释}

Mcdoc 使用 `//` 来表示**普通注释**
`//` 与后面的内容间应有一个空格

```mcdoc
// 这是一个文档注释
```

可以使用 2 个或者 4 个及以上的 `/` 表示此行后续的内容为注释
但 3 个 `/` 的`///`保留用作*Doc注释*

##### Doc注释 {#mcdocdoc注释}

使用 `///` 表示**Doc 注释**, 此类注释会作为在自动补全和悬停交互时**字段的描述**

```mcdoc
/// 字段的描述
```

#### 类型化数字 {#mcdoc类型化数字}

**类型化数字**类似 *Minecraft SNBT* 的数字写法, 在数字后有表示数值类型的后缀

- 无后缀整数: Int
- 无后缀浮点数: Double
- `b` 后缀: Byte
- `s` 后缀: Short
- `l` 后缀: Long
- `f` 后缀: Float
- `d` 后缀: Double

#### 数字范围 {#mcdoc数字范围}

使用与 *Minecraft* 相同的数字**范围**表示方法, 即使用 `..` 来表示, 额外可以使用 `<` 表示**排他性结束**

```mcdoc
// 等于 0
0

// 不大于 0
..0

// 不小于 0
0..

// 不小于 0 且不大于 10
0..10

// 大于 0.5 且小于 10
0.5<..<10

// 大于 0.5 且不大于 10
0.5<..10
```

#### 字符串语法 {#mcdoc字符串语法}

**字符串**必须用双引号包围, 部分字符需要**转义**:

- `\b`: 退格符
- `\f`: 换页符
- `\n`: 换行符
- `\r`: 回车符
- `\t`: 制表符
- `\\`: 反斜杠
- `\"`: 双引号

#### 路径 {#mcdoc路径}

**路径**用于在项目中**定位***类型定义*, 使用 `::` 用作路径分隔符
路径中的文件**不包括**`.mcdoc`扩展名

- 绝对路径: 从根目录开始解析
    ```mcdoc
    ::foo::bar
    ```
    `/foo.mcdoc`文件中`bar`的定义

- 相对路径: 从当前文件的绝对路径开始解析
    使用 super 关键字向上移动一级
    ```mcdoc
    super::super::foo::bar
    ```
    定位到文件上一级的上一级文件夹中的`foo.mcdoc`文件中`bar`的定义

#### 标识符 {#mcdoc标识符}

**标识符**区分大小写, 可以包含任何 *Unicode* 字母、数字和下划线, 但**不能**以**数字**开头

#### 结构体定义 {#mcdoc结构体定义}
使用 `struct` 关键字来**定义结构体**: 

```mcdoc
struct MyStructure {
    field_name: field_type
}
```

其中 `MyStructure` 为**结构体**的*标识符*, `field_name` 为**字段**的*标识符*, `field_type` 为**字段**的*类型*

结构体可以**嵌套**匿名结构体

```mcdoc
struct OuterStruct {
    inner_struct: struct {
        field: int
    }
}
```

可以在 **键和 `:` 之间**添加 `?` 来表示**可选字段**

```mcdoc
struct OuterStruct {
    field?: int
}
```

**扩展操作符**`...`后跟结构体类型, 可以用于**重用另一个结构体**的字段

```mcdoc
struct InnerStruct {
    count: int
}

struct OuterStruct {
    ...InnerStruct
    field: int
}
```

#### 类型映射 {#mcdoc类型映射}

使用 `dispatch` 关键字将 *Minecraft* 中的实际存储**映射**到定义的结构体: 

```mcdoc
dispatch minecraft:storage["storage_name"] to StructName
```

这条 `dipatch` 语句说明 *storage* `storage_name` 应具有 `StructName` 类型

也可以直接在映射时定义结构体
```
dispatch minecraft:storage["storage_name"] to struct StructName {
    field_name: field_type
}
```

#### 字段的类型 {#mcdoc字段的类型}

在 *Mcdoc* 中, 字段可以有多种不同的**类型**, 每种类型都有其特定的用途和语法规则
以下是完整的字段类型说明:

##### any 类型 {#mcdoc类型any}

`any` 类型是 *Mcdoc* 类型系统中的**顶级类型**, 任何其他类型(包括 `any` 本身)都可以赋值给 `any` 类型, 但 `any` 类型不能赋值给除 `any` 之外的其他类型

```mcdoc
value: any
```

##### boolean 类型 {#mcdoc类型boolean}

`boolean` 类型表示期望一个**布尔值**(`false` 或 `true`)

```mcdoc
is_active: boolean
```

##### string 类型 {#mcdoc类型string}

`string` 类型表示期望一个**字符串**值, 可以使用可选的**范围**来定义字符串的长度范围

```mcdoc
name: string
description: string @1..100
```

##### 数值类型 {#mcdoc数值类型}

*Mcdoc* 支持多种**数值**类型, 包括:
- `byte`: 字节类型
- `short`: 短整型
- `int`: 整型
- `long`: 长整型
- `float`: 浮点型
- `double`: 双精度浮点型

这些类型可以配合**范围**使用, 定义数值的**有效区间**

```mcdoc
health: int
damage: float @ 0.0..10.0
count: byte @ 1..64
```

##### 字面量类型 {#mcdoc字面量类型}

**字面量类型**包括 *字面量布尔类型*、*字面量字符串类型* 和 *字面量数值类型* , 数据必须**完全匹配**这些字面量值才是有效的

```mcdoc
// 字面量布尔类型
is_enabled: true

// 字面量字符串类型
type: "player"

// 字面量数值类型
version: 1
distance: 1.2f
```

##### 原始数组类型 {#mcdoc原始数组类型}

**原始数组类型**表示数据必须是某种数值类型的**集合**, 第一个可选范围定义**值**的范围, 第二个可选范围定义集合**大小**的范围

```mcdoc
// 字节集合
bytes: byte[]

// 仅包含0或1的字节集合
limited_values: byte#0..1[]

// 包含4个整数的集合
fixed_ints: int[] # 4

// 包含至少3个非负长整数的集合
non_negative_longs: long#0..[] # 3..
```

##### 列表类型 {#mcdoc列表类型}

**列表**类型表示数据必须是另一种类型的**集合**, 可选范围定义集合**大小的范围**

```mcdoc
// 字符串集合
tags: [string]

// 字符串集合的集合
nested_lists: [[string]]

// 结构体Foo的集合
objects: [struct Foo {}]
```

##### 元组类型 {#mcdoc元组类型}

**元组**类型表示数据必须是按**指定顺序**排列的某些**其他类型**的**集合**, 使用`[` `]`和`,`分隔不同类型

```mcdoc
// 一个字节的元组
[byte,]

// 一个字符串后跟一个布尔值的元组
[string, boolean]
```

为了区分只包含一个元素的元组类型与列表类型, 需要在类型后面添加一个`,`, 或者可以使用大小为`1`的列表类型来替代包含一个元素的元组, 例如`[byte] @ 1`

元组类型通常对NBT结构没有用, 因为NBT没有混合类型的集合

##### 枚举类型 {#mcdoc枚举类型}

**枚举**类型用于定义一组命名的**常量值**, *Mcdoc*支持基于**不同基础类型**的枚举, 最常见的是字符串枚举

```mcdoc
// 字符串枚举
enum(string) DamageScaling {
    Never = "never",
    Always = "always",
    LivingNonPlayer = "when_caused_by_living_non_player",
}

enum(string) NarrationPriority {
    Chat = "chat",
    System = "system",
}

// 结构体中直接使用枚举名称
struct Foo {
    damage_scaling: NarrationPriority
}
```

##### 分派器类型 {#mcdoc分派器类型}

**分派器**类型用于根据不同条件**动态**确定具体类型, 常用于根据某个字段的值来决定整个对象的结构

```mcdoc
struct Foo {
    id: string,

    // 静态分派到cow实体类型
    cow_data: minecraft:entity[cow],

    // 动态根据id值分派实体类型
    dynamic_entity_data: minecraft:entity[[id]],

    // 嵌套分派
    command: minecraft:block[command_block][Command],

    // 多级分派
    dynamic_memories: minecraft:entity[[id]][Brain][memories]
}
```

##### 联合类型 {#mcdoc联合类型}

**联合**类型表示值可以是几种类型中的**任意一种**, 使用管道符`|`分隔不同的类型选项

```mcdoc
id: string | int
```

##### 类型索引 {#mcdoc类型索引}

**类型索引**允许从复杂类型结构中**提取特定部分**, 类似于从对象中获取指定属性

```mcdoc
// 基本用法: 从实体类型中获取特定实体的信息
// 获取猪的相关数据结构
minecraft:entity[pig]
```

可以同时获取多个类型的索引:

```mcdoc
// 同时获取末影龙和凋零的类型信息
minecraft:entity[ender_dragon, wither]
```

类型索引分为两种形式:

- **静态索引**: 在编写代码时已经确定的固定索引
- **动态索引**: 根据运行时的值来确定的索引

```mcdoc
struct MobData {
    id: string,  // 存储实体ID, 比如 "pig" 或 "cow"
    // 静态索引: 总是指向猪的数据
    static_pig_data: minecraft:entity[pig],

    // 动态索引: 根据id字段的值来决定指向哪种实体
    dynamic_mob_data: minecraft:entity[[id]],
}
```

*Mcdoc*提供了几个特殊关键字来处理特殊情况:

- `%fallback`: 当没有匹配项时使用的默认值
- `%none`: 表示没有值的情况
- `%unknown`: 处理未知的输入

```mcdoc
// 使用 %fallback 处理未明确指定的实体类型
type AnyEntity = minecraft:entity[%fallback]

// 结合动态索引和 %none 处理可选字段
struct RandomIntGenerator {
    type?: ("uniform" | "binomial" | "constant"),
    // 当 type 有值时使用对应的生成器, 当 type 为空时使用 %none 对应的默认结构
    ...minecraft:random_int_generator[[type]]
}
dispatch minecraft:random_int_generator[uniform, %none] to struct {
    min?: int,
    max?: int
}
```

还有一些高级关键字:

- `%key`: 引用当前键的值
- `%parent`: 访问上级结构的信息

```mcdoc
// 使用 %key 来动态确定类型
struct DebugStick {
    DebugProperty: struct {
        // 根据键名来确定应该使用哪种方块状态类型
        [#[id=block] string]: mcdoc:block_state_name[[%key]]
    }
}

// 使用 %parent 来关联相关信息
struct Item {
    id: #[id=item] string,  // 物品ID
    tag: struct ItemTag {
        // 根据物品ID来确定适用的方块状态
        BlockStateTag: mcdoc:block_item_states[[%parent.id]]
    }
}
```

#### 类型别名语句 {#mcdoc类型别名语句}

使用 `type` 关键字创建**类型别名**以引**用另**一个类型, 提高代码的可读性和可重用性

```mcdoc
// 定义Integer类型为byte、short、int或long的联合类型
type Integer = (byte | short | int | long)

// 定义Float类型为float或double的联合类型
type Float = (float | double)

// 定义Number类型为Integer或Float的联合类型
type Number = (Integer | Float)
```

如果要创建具有大致**相同结构**但在某些小方面有所不同的不同类型定义, 可以创建一个带有类型参数的**模板**类型别名
类型别名语句的右侧可以引用这些类型参数, 当类型别名在其他地方实例化时, 这些参数将被实际类型替换

```mcdoc
// 定义带类型参数T的NumericRange模板
type NumericRange<T> = (
    // 单个T类型的值
    T |
    // 包含两个T类型值的元组(表示范围的最小值和最大值)
    [T, T] |
    // 包含min和max字段的结构体
    struct {
        min: T, 
        max: T
    }
)

// 实例化NumericRange为float类型
type FloatRange = NumericRange<float>

// 实例化NumericRange为int类型
type IntegerRange = NumericRange<int>

// 实例化NumericRange为非负int类型
type NaturalRange = NumericRange<int @ 0..>
```

- 类型参数 `T` 在尖括号中**声明**
- 类型参数 `T` 现在可以在右侧**引用**
- 当在其他地方引用 `NumericRange` 类型别名时, 必须为类型参数提供实际类型
    ```mcdoc
    struct Foo {
        range: NumericRange<float>
    }
    ```

##### 绑定类型参数 {#mcdoc绑定类型参数}

所有路径引用通过路径中描述的规则解析, 类型参数引用也不例外
当在类型别名语句中声明类型参数时, 它会被暂时绑定到当前模块, 直到语句结束
因此, 就像其他类型定义一样, 类型参数在模块范围内应该是唯一的

```mcdoc
// 文件 '/example.mcdoc'
// 定义一个名为T的结构体
struct T {}

// 尝试声明类型参数T, 但与上面的结构体T冲突
type List<T> = [T] 
//        ^
//        WARNING: Duplicated declaration for "::example::T"
```

`T` 的声明被警告并忽略, 右侧的 `T` 实际上引用的是上面定义的结构体 `T`

```mcdoc
// 在此语句范围内声明类型参数 T
type List<T> = [T] 

// 这是另一个独立的类型别名, 其 T 参数不会与上面的冲突
type Struct<T> = struct {
    value: T
}   
```

这是可以的, 虽然 `T` 也在 `List` 类型别名语句中声明, 但该声明的效果仅在该语句结束前有效

#### 使用语句 {#mcdoc使用语句}

**使用语句**用于引入其他文件中定义的类型, 并可以给它起一个别名
使用语句使你能够在当前文件中方便地**引用其他模块**中定义的类型, 而无需每次都使用完整的路径, 通常在 *.mcdoc* 文件的最开头使用

```mcdoc
// 直接使用SomeType
use ::foo::bar::SomeType

// 将AnotherType引入重命名为AT
use ::foo::bar::AnotherType as AT

// 将Config重命名为AppConfig
use ::utils::common::Config as AppConfig
```

#### 注入 {#mcdoc注入}

**注入**语句用于向**已存在**的类型定义中**添加额外的**字段或枚举值, 而无需修改原始定义, 可以用于扩展原版或其他库定义的类型, 注入的字段或值会被**合并**到原始类型定义中

##### 枚举注入 {#mcdoc枚举注入}

枚举注入允许你向现有的**枚举**类型添加新的枚举值:

```mcdoc
inject enum(string) ::existing::enum::Path {
    NEW_VALUE = "new_value_name",
    ANOTHER_VALUE = "another_value"
}
```

##### 结构体注入 {#mcdoc结构体注入}

结构体注入允许你向现有的**结构体**类型添加新的字段:

```mcdoc
inject struct ::existing::struct::Path {
    new_field: string,
    another_field: int
}
```

#### 属性 {#mcdoc属性}

*Mcdoc* 支持使用属性来为类型和字段添加元数据信息
属性使用 `#[attribute_name]` 语法, 可以应用于类型、字段或其他语言结构

> 此部分所有示例选项解释均为根据属性选项的命名猜测, 可能与实际语法不同, 极为不确定的解释标有 "(?)"

##### canonical {#mcdoc属性canonical}

特殊属性, 标记联合类型中的**规范成员**, 表示优先使用此类型
如果联合类型有*规范成员*, 读取该联合类型时将始终期望*规范成员*

```mcdoc
type RGB = (
	#[canonical] int |
	[float] @ 3 |
)
```

##### color {#mcdoc属性color}

表示**颜色**
此属性有一个必需的字符串选项, 指定**颜色格式**

```mcdoc
// 十进制 RGB
#[color="dec_rgb"] [float] @ 3

// 组合 RGB
#[color="composite_rgb"] int

// 十六进制 RGB
#[color="hex_rgb"] string
```

##### command {#mcdoc属性command}

指定字符串包含**命令**
此属性有多个选项

```mcdoc
#[command(slash="allowed")] string

#[command(slash="allowed", empty="allowed", max_length=32500)] string

#[command(macro="implicit")] string
```
- slash: 指定命令是否允许使用斜杠前缀
    - `chat`: 命令在聊天框中输入, 可以使用`/`前缀(?)
    - `required`: 命令必须使用`/`前缀
    - `allowed`: 允许使用`/`前缀
- empty: 允许命令为空
    - `allowed`: 命令可以为空
- max_length: 指定命令的最大长度, 以字符为单位
- macro: 命令是否使用宏
    - `implicit`: 命令可以包含宏占位符

##### deprecated {#mcdoc属性deprecated}

标记字段为**已弃用**, 编辑器在使用时可能会对字段添加删除线
参数为指定弃用版本的字符串

```mcdoc
#[deprecated="1.16"]
value?: Text,
```

##### dispatcher_key {#mcdoc属性dispatcher_key}

指定字符串应匹配**给定分派器的键**

```mcdoc
#[dispatcher_key="mcdoc:custom_data"] string
```

##### divisible_by {#mcdoc属性divisible_by}

指定数值必须能被**给定数字整除**

```mcdoc
#[divisible_by=16] int
```

##### entity {#mcdoc属性entity}

表示**选择器、玩家名或UUID**
指定分数持有者请使用 `score_holder` 属性
此属性有两个选项:

- `amount`: 允许单个或多个实体
    - `multiple`: 允许多个实体
    - `single`: 仅允许单个实体
- `type`: 实体类型是否为玩家
    - `entities`: 类型不一定为玩家
    - `players`: 类型为玩家

```mcdoc
#[entity(amount="single",type="entities")] string
```

##### game_rule {#mcdoc属性game_rule}

指定字符串应包含**游戏规则名称**
此属性有一个选项:

- `type`: 游戏规则接受值的类型
    - `boolean`: 游戏规则接受布尔值
    - `int`: 游戏规则接受整数值

```mcdoc
#[game_rule(type="int")] string
```

##### id {#mcdoc属性id}

指定字符串应包含资源位置
有一个必需选项 `registry`, 可以写成简写形式或带更多选项:

- `registry`: 任何注册表或包类别, 如`item`、`block`、`loot_table`等
- `tags`: 注册项是否允许使用标签
    - `allowed`: 允许使用标签
    - `implicit`: 默认使用标签(?)
    - `required`: 必须使用标签(?)

```mcdoc
#[id="item"] string

#[id(registry="item",tags="allowed")] string
```

##### match_regex {#mcdoc属性match_regex}

指定字符串需要**匹配**给定的**正则表达式**模式
此属性仅**匹配**正则表达式而不是字符串**包含**正则表达式, **包含**正则表达式使用 `regex_pattern` 属性

```mcdoc
#[match_regex="^[a-z_]+$"] string
```

##### nbt {#mcdoc属性nbt}

包含 **SNBT** 的字符串
有一个选项, 指定字符串化 SNBT 需要匹配的类型

```mcdoc
#[nbt=ItemStack] string
```

##### nbt_path {#mcdoc属性nbt_path}

包含 **NBT 路径**的字符串

```mcdoc
#[nbt_path] string
```

##### objective {#mcdoc属性objective}

包含**记分项名称**的字符串

```mcdoc
#[objective] string
```

##### regex_pattern {#mcdoc属性regex_pattern}

**包含正则表达式模式**的字符串
不要与 `match_regex` 混淆

```mcdoc
#[regex_pattern] string
```

##### score_holder {#mcdoc属性score_holder}

允许使用`*`**通配符、实体选择器和玩家名**
不要与 `entity` 混淆

```mcdoc
#[score_holder] string
```

##### since {#mcdoc属性since}

使字段或联合成员仅从**给定版本开始可用**
只允许正式版本(不包括快照)
从给定版本不可用参见 [until](#mcdoc属性until)

```mcdoc
struct Example1 {
   #[since="1.19"]
   entity: string,
}

type Example2 = (
   string |
   #[since="1.20.5"] int |
)
```

无效语法:
```mcdoc
struct Example {
   entity: #[since="1.19"] string,
}
```

##### tag {#mcdoc属性tag}

包含命令**标签名称**的字符串(通过 `/tag` 获得或在 `Tags` 实体字段中)

```mcdoc
#[tag] string
```

##### team {#mcdoc属性team}

包含**队伍名称**的字符串

```mcdoc
#[team] string
```

##### text_component {#mcdoc属性text_component}

包含表示**文本组件**的字符串化 JSON 的字符串
注意在1.21.5及更高版本文本组件更改后, 应使用 `::java::util::text::Text` 类型而不是字符串化 JSON

```mcdoc
#[text_component] string
```

##### until {#mcdoc属性until}

使字段或联合成员**从给定版本开始不可用**
只允许正式版本(不包括快照)
注意给定版本不包含在该字段或成员被接受的版本范围内
从给定版本开始可用参见 [since](#mcdoc属性since)

```mcdoc
struct Example1 {
   #[until="1.19"]
   entity: string,
}

type Example2 = (
   string |
   #[until="1.20.5"] int |
)
```

无效语法:
```mcdoc
struct Example {
   entity: #[until="1.19"] string,
}
```
