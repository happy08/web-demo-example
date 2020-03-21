## row  flex布局
字段  类型  默认值  说明
gutter: number	         8	      间隙像素大小（px）
wrap: string		               flex的flex-wrap属性
direction: string		            flex的flex-direction属性
justify: string		            flex的justify-content属性
align: string		               flex的align-items属性
## col
span:Number                      宽度 24份 也可1/2，1/3            
order:Number                     排序


## button
字段  类型  默认值  说明
type: String    "primary"     类型 可选primary warn danger
text: String         ""       文字
disabled: Boolean    false    禁止
lg: Boolean          false    大
sm: Boolean          false    小
xs: Boolean          false    极小
round: Boolean       false    圆角 
plain: Boolean       false    边框模式
inline: Boolean      false    行内 
link: String,Object  ""       链接      
gradients: Array     []       渐变 如["#1111","#999"] 

## toast 轻提示
字段  类型  默认值  说明
msg: String        ""       消息       
id: String                  标识符，相同者共用一个实例  
duration: Number   2000     显示时长（毫秒）,为0时不关闭（loading类型默认为0)  
bgColor: String    "rgba(46, 46, 46, 0.7)"  背景颜色（透明度）    
icon: String       ""       图标，图片路径 *图片必须放public下
cover: Boolean     loading类型true/其他false   透明遮罩，loading类型默认打开    

字段  参数   说明
@onClose()    关闭时触发的事件    

## popup  上下左右中 弹框
字段  类型  默认值  说明
v-model: Boolean    false   显示
position: String  "center"  位置 center top left bottom right
width: String    "100%"     宽度
height: String   "40%"      高度
closeIcon: Boolean true     显示关闭按钮
closeIconPosition: String "top-right"  关闭按钮位置 top-left top-right bottom-left bottom-right
round: Boolean   false     圆角

## dialog 确认框
字段  类型  默认值  说明
v-model: Boolean    false    显示
id: String        ""         标识
title: String     ""         标题
content: String   ""         内容
noConfirm: Boolean  false    无确认按钮
noCancel: Boolean false      无取消按钮
cancelTxt: String "取消"      取消按钮文字
confirmTxt: String  "确定"    确认按钮文字
confirmDisabled: Boolean false 确认按钮禁用

字段  参数   说明
@onConfirm()     确认回调
@onCancel()      取消回调
@onClose()       关闭回调

## overlay 遮罩层
字段  类型  默认值  说明
show: Boolean false  显示 

## icon
字段  类型  默认值  说明
type: String  “”         类型 可选值见 https: //www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1641833  或者 图片路径 *图片必须放public
size: String  “”         大小 如：20
color: String '#666666'  颜色   

## loading
字段  类型  默认值  说明
text: String   "14px"    文字
size: Number   "25px"    大小 宽高

## Radio  可单独或配合RadioGroup使用
字段  类型  默认值  说明
v-model: 任意       当前选中项的标识符，与label值一致时呈选中状态
label: 任意         标识符，与v-model值一致时呈选中状态
disabled: Boolean false 禁用

## RadioGroup
字段  类型  默认值  说明
v-model: 任意            选中项的标识符，与label值一致时呈选中状态 
disabled: Boolean false 禁用 

## checkboxgroup 
字段  类型  默认值  说明
v-model: Array       []     选中项
checkBoxData: Array  []     传入选项数组 如[{id: 11,value: '选项A',label: '选项A'}]
vertical: Boolean    false  横向排列
disabled: Boolean    false  禁用

字段  参数   说明
@onChange(values,label,event) 值变化时触发 已选中项（values），选中项值（label），event

内置方法名  参数  说明 
toggleAll(state) 切换选中状态  使用this.$refs.checkboxGroup.toggleAll(state) state可选true false 或者空

### switch
字段  类型  默认值  说明
v-model: Boolean  false   开关选中状态
disabled: boolean false   禁用状态
size: String   "26px"     大小 

字段  参数   说明
@onBeforChange(status)     修改前
@onChange(status)          修改后

## totop
字段  类型  默认值  说明
style 任意改样式

## field  表单
v-modle: String    ""        值
type: String       "text"    类型
required: Boolean  false     必填左侧红星号
label: String      ""        标题
labelIcon: String  ""        标题icon
labelWidth: String ""        标题宽度
disabled: Boolean  false     input只读
clearIcon: Boolean true      清空按钮
eyeIcon: Boolean   true      type=password 时可见切换

## popup-picker
show: Boolean      false     是否显示    使用:show.sync="show"
cancelText: String    "取消"  取消文字
confirmText: String   "确认"  确认文字
data:Array            []      初始数据
value:Array           []      选中到选项
columns:Number        0       指定联动模式下的列数，当不指定时表示非联动
displayColumns: Number 0  指定显示多少列，隐藏多余的
columnWidth: Array       每一列宽度，只需除最后一列宽度，最后一列自动宽度， 如对于3列选择：[1/2, 1/5]
popupTitle: String     ""     中间标题

字段  参数   说明
@onChange(value)      选择值变化时触发 value选中值

## picker 
字段  类型  默认值  说明
data: Array      []       数据
v-model: Array  []       选中的值
columns: Number  0        指定联动模式下的列数，当不指定时表示非联动
displayColumns: Number 0  指定显示多少列，隐藏多余的
itemClass: String "scroller-item"
columnWidth: Array       每一列宽度，只需除最后一列宽度，最后一列自动宽度， 如对于3列选择：[1/2, 1/5]

字段  参数   说明
@onChange(value)      选择值变化时触发 value选中值

内置方法名 说明
getNameValues(value)    根据value获取字面值 this.$refs.picker.getNameValues([1,2]) 

data数据格式示例：
--非联动
[['小米', 'iPhone'], ['小米1', 'iPhone2']]
[[{name: '2019届5班',value: '1'}, {name: '2019届4班',value: '2'}]]  
--联动
[{
    name: '中国',
    value: 'china',
    parent: '0' // 为一级时可以不写 parent，但是此时允许为数字 0、空字符串或者字符串 '0'
 }, {
    name: '美国',
    value: 'USA',
    parent: '0'
 }, {
    name: '广东',
    value: 'china001',
    parent: 'china'
 }, {
    name: '广西',
    value: 'china002',
    parent: 'china'
 }
]

## cell
字段  类型  默认值  说明
title:String    ""      左侧主slot
titleIcon:String ""     左侧主icon
subTitle:String ""      左侧副slot
desc:String     ""      右侧slot
link:String     ""      链接 不为空时右侧显示箭头

## image
字段  类型  默认值  说明
src: String    ""      图片路径
round: Boolean   false 圆形
width: String    100%  宽度
height: String   100%  高度
fit: String     "cover"  填充模式 可选 contain保留最长边 cover填满 fill拉伸 none原尺寸 scale-down不放大或保留最长边

## badge
字段  类型  默认值  说明
text: [String, Number] “”  文字
color: String          “”  颜色
plain: Boolean         “”  边框模式  


## checker 


## tab
字段  类型  默认值  说明
# tab
lineHeight: [Number, String]  2
activeColor: String      ""       选中文字颜色
barActiveColor: String   ""       bar选中颜色
defaultColor: String     ""       默认文字颜色
disabledColor: String    ""       禁止文字颜色
customBarWidth: String   "100%"   bar宽度 如 30px      
preventDefault: Boolean           是否禁止自动切换 tab-item
scrollThreshold: Number  4        多少个内不滚动
barPosition: String   "bottom"    bar位置 只能是bottom top

方法名  说明
onIndexChange           tab-item 切换时触发
onBeforeIndexChange       点击 tab-item 并且 属性 preventDefault 为 true 时触发
# tab-item
字段  类型  默认值  说明
disabled: Boolean      false      禁止
activeClass: String    ""         当前项选中时的class

方法名  说明
onItemClick              当前 tabItem 被点击时触发

## popup-datetime


## NumberKeyboard


## rate评分


## search


## stepper 步进器


## uploader 上传


## pullRefresh 下拉刷新



## swiper 轮播
字段  类型  默认值  说明
direction: String        vertical   滑动方向 
paginationVisible: Boolean false    是否分页显示 
paginationClickable: Boolean false  分页是否可以点击 
loop: Boolean             false     是否循环
speed: Number             500       过度动画执行时间
canDragging: Boolean                是否无缝切换
autoPlay: Number 0                  自动轮播，轮播默认是循环模式，直接写轮播间隔时间 
initPage: Number 1                  设置初始时候显示的页
lazyLoad: Boolean         false     是否懒加载图片
lazyLoadUrl: String                 懒加载的默认展示图片
swiperData: Array                   异步数据渲染slide时，必须绑定对应数组

方法名  说明
next 去下一页 
prev 去上一页 
setPage  设置当前显示第几页 number

回调 字段 说明 参数 
slideChangeStart      页面开始切换时候   pageSize,el
slideChangeEnd        页面结束切换时候   pageSize,el
slideRevertStart      拖动页面没改变回到原先位置开始时候   pageSize,el
slideRevertEnd        拖动页面没有改变回到原先位置结束时候   pageSize,el
slideMove             拖动过程中   offset,el


## skeleton  骨架屏





