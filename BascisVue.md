# VueJS

## What's  VueJS?
+ VueJS類似於view 是一個數據驅動的web 界面函式庫。與其他重量級框架不同的是，Vue採用自底向上增量開發的設計。
+ 在 API 與設計兩方面上 Vue.js 都比 Angular 簡單得多，因此你可以快速地掌握它的全部特性並投入開發。
### 優勢
+ 輕量 ( 24kb min+gzip )
+ 簡潔單純 ( HTML + JSON ，再加一個 new Vue )
+ 組件化單純 ( vue 檔案可直接將 js 跟 css 組成一個組件)
+ 有中文文件 (唯一的遺憾是簡體)
### 劣勢
+ 發展快速，目前已經發佈 v2.0 rc
+ 發展時間短，資源還沒有很豐富
+ 實際應用的案例少

[jquery-to-vuejs](https://yami.io/jquery-to-vuejs/ "jquery-to-vuejs")

#### Hello World

- [ ] Syntax:
```  
<div id="app">
    {{ message }}
</div>

<script>
    new Vue({
        el:'#app',
        data:{
            message:'Hello World!'
        }
    });
</script>

// or

<script>
//將參數設定另外寫，也就是當你參數預設值非常複雜時，為了發便維護
    var data = {
        message:'Hello World!'
    }
    new Vue({
        el:'#app',
        data:data
    });
</script>
 
```

#### Real-Time (v-model)

- [ ] Syntax:
```  
<div id="app">
    <h1>{{ message }}</h1>
    <input type="text" v-model="message">
    
    <div>{{ $data | json }}</div> 
</div>

<script>
    var data = {
        message:'Hello World!'
    }
    new Vue({
        el:'#app',
        data:data
    });
</script>
``` 
+ 我們將{{message}} 加上h1標籤，然後在下方新增一個文字的input輸入表單，接著v-model名稱是message，所以這個input就會自動帶入與{{message}} 相同的參數內容，而你只要變更inupt裡面的文字，頁面上的{{message}}參數也會立刻馬上一起更新
+ $data，也就是下面var data的內容，而|在這邊是filter的意思，也就是篩選。顯示json格式組出來的data參數值

#### if else (v-show)
- [ ] Syntax:
```  
<div id="app">
    <h1 class="error">{{ score }}分</h1>
    <div v-show="score">
        <p v-if="score >= 6">Vue.js so easy</p>
        <p v-else>still learning Vue.js</p>
    </div>
    <p>你覺得vue.js簡單嗎？請輸入1~10分</p>
    <input type="text" v-model="score">
</div>

<script>
    new Vue({
        el:'#app',
        data:{
            score:'0'
        }
    });
</script>
``` 
+ v-show ：這是Vue.js特有的寫法，基本上就是等於v-if，所以屬性質就是所謂的運算條件了。
+ v-if ：同v-show。
+ v-else ： 這是當v-show或v-if條件不成立時需要選擇的答案
+ score預設值是0，會根據目前輸入的分數去做判斷，判斷內容就是大於等於6分以上就會顯示。

#### v-on:click
- [ ] Syntax:
```  
<div id="app">
    <p>目前以點擊：{{count}}次</p>
    <input type="submit" value="立即送出" v-on:click="clickme">
</div>

<script>
    new Vue({
        el:'#app',
        data:{
            count:0
        },
        methods:{
            clickme: function(){
                 this.count += 1;
            }
        }
    });
</script>
```
+ v-on:click屬性，會呼叫下方methods裡面clickme的function內容
```
<div id="app">
    <button v-on:click="handleIt('uh')">I say uh</button>
    <button v-on:click="handleIt('ah')">you say ah</button>
</div>

<script>
    new Vue({
        el:'#app',

        methods:{
            handleIt: function(msg){
                alert(msg)
            }
        }
    });
</script>
```
### v-on:submit

+ 與v-on:click很像，一個是click一個是submit的差別而已。

- [ ] Syntax:
```  
<div id="app">
    <form action="submit.html" v-on:submit.prevent="handleIt">
        <button type="submit">立即送出</button>
    </form>
</div>

<script>
    new Vue({
        el:'#app',

        methods:{
            handleIt: function(){
                alert("here I am!");
            }
        }
    });
</script>
```
+ .prevent - 在submit前動作
+ .stop
+ .self
+ .captur
+ .keyup

### for loop

+ 99乘法表
- [ ] Syntax:
```  
<div id="app">
    <div v-for="i in 9">
      <h3>{{ i }}</h3>
      <div v-for="j in 9">{{ i }} x {{ j }}={{ i*j }}</div>
    </div>
</div>

<script>
    new Vue({
        el:'#app'
    });
</script>
```


## 其他參考函示庫(圖表)
+ [Charts.js](http://www.chartjs.org/ "Charts.js")
+ [Morris.js](http://morrisjs.github.io/morris.js/index.html "Morris.js")

