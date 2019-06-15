<template>
    <div class="fenye">
        <h2>总共{{totalPage}}</h2>
        <h2>这是第{{pageNow}}页</h2>
        <div class="list">      
            <a @click="getData(pageNow -1 <= 0 ? 1:pageNow-1)" class="back"><<</a>
            <ul v-if="pageNow">    
                <template v-if="totalPage <= 3">
                    <li v-for="i in totalPage">
                        <a :class="{current: i === pageNow }" @click="getData(i)">{{ i }}</a>
                    </li>
                </template>
                <template v-else="v-else">
                    <template v-if="totalPage - pageNow < 3">
                        <li>……</li>
                        <li v-for="i in 3">
                            <a :class="{current: totalPage - 3 + i === pageNow }" @click="getData(totalPage - 3 + i)">{{ totalPage - 3 + i }}</a>
                        </li>
                    </template>
                    <template v-else="v-else">
                            <template v-if="pageNow === 1 ||　pageNow === 2">
                                <li v-for="i in 3"><a :class="{current: i === pageNow }" @click="getData(i)">{{ i }}</a>
                                </li>
                            </template>
                            <template v-else="v-else">
                                <li>……</li>
                                <li v-for="i in 3"><a :class="{current: pageNow - 2 + i === pageNow }" @click="getData(pageNo - 2 + i)">{{ pageNo - 2 + i }}</a>
                                </li>
                            </template>
                            <li>……</li>
                            <li v-for="i in 2"><a :class="{current: totalPage - 2 + i === pageNow }" @click="getData(totalPage - 2 + i)">{{ totalPage - 2 + i }}</a></li>
                        </template>
                </template>
            </ul>
            <a @click="getData(pageNow +1 >= totalPage ? totalPage:pageNow+1)" class="next">>></a>
        </div> 
	</div>
</template>

<script>
export default {
    data(){
        return{
            pageNow:1, // 当前页  current_page
            pageSize:10,//每页多少条  total_comment
            total:'',//总共多少条  total_comment
            totalPage:''//总共多少页total_page
        }
    },
    created(){
        this.getInit()
    },
    methods:{
        getInit(){
            const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
            this.$http.get(API_PROXY+"http://www.handsomekai.top/api/v1.0/boards/1").then(response=>{
                var dataMidle = response.body
                var data = dataMidle.data
                this.pageNow = data.current_page
                this.pageSize = data.total_comment
                this.total = data.total_comment
                this.totalPage = data.total_page
                // console.log(this.pageNow,this.pageSize,this.total)
            })
        },
        getData(page){
            const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
            this.$http.get(API_PROXY+"http://www.handsomekai.top/api/v1.0/boards/"+page).then(response=>{
                var dataMidle = response.body
                var data = dataMidle.data
                this.pageNow = data.current_page
                this.pageSize = data.total_comment
                this.total = data.total_comment
                this.totalPage = data.total_page
            })
        }
    }
}
</script>

<style scoped>
.fenye{
    width:100%;
    height: 50px;
    text-align: center;
    position: relative;
}
.fenye h2{
    margin-bottom: 20px;
}
.fenye .list{
    display: flex;
    justify-content:space-between;
}
.list .back{
    /* padding-bottom: 20px; */
    float: left;
    cursor: pointer;
}
.list .next{
    float: right;
    cursor: pointer;
}
.list ul{
    list-style: none;
    margin: 0;
}
.fenye ul li{
    float: left;
    border:1px solid black;
    width:30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
}
a.current{
    color: red;
}
</style>











