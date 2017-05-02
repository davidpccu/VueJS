# VueJS

## What's  VueJS?
+ VueJS類似於view 是一個數據驅動的web 界面函式庫。與其他重量級框架不同的是，Vue採用自底向上增量開發的設計。
+ 在 API 與設計兩方面上 Vue.js 都比 Angular 簡單得多，因此你可以快速地掌握它的全部特性並投入開發。
### 優勢
+ 輕量 ( 24kb min+gzip )
+ 簡潔單純 ( HTML + JSON ，再加一個 new Vue )
+ 組件化單純 ( vue 檔案可直接將 js 跟 css 組成一個組件)
+ 有中文文件 ( 開發者中國人 Evan You )
### 劣勢
+ 發展快速，目前已經發佈 v2.0 rc
+ 發展時間短，資源還沒有很豐富
+ 實際應用的案例少



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


## 其他參考函示庫(圖表)
+ [Charts.js](http://www.chartjs.org/ "Charts.js")
+ [Morris.js](http://morrisjs.github.io/morris.js/index.html "Morris.js")

