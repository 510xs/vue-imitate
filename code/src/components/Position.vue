<template>
    <div class="detail">
        <div class="detail_title">
            <span @click="changeIsshow([true,null])"><van-icon name="arrow-left" /></span>
            <span>职位详情</span>
            <span @click="changeIsshow([true,null])"><van-icon name="wap-home" /></span> 
        </div>
        <div class="position_name">
            <p class="position_name_left">{{detail?detail.positionName:''}}</p>
            <p class="position_name_right">未收藏</p>
        </div>
        <div class="require">
            <div class="require_item">
                <span class="item_left"><van-icon name="gold-coin-o" class="item_icon" size='20px' />{{detail?detail.wages:null}}</span>
                <span class="item_center"><van-icon name="location-o" class="item_icon" size='20px' />{{detail?detail.companyAdress:null}}</span>
                <span class="item_right"><van-icon name="underway-o" class="item_icon" size='20px' />{{detail?((detail.fullTime==1) ? '全职':'兼职'):null}}</span>
                <span class="item_left"><van-icon name="birthday-cake-o" class="item_icon" size='20px' />{{workExper(detail)}}</span>
                <span class="item_center"><van-icon name="points" class="item_icon" size='20px' />{{education(detail)}}</span>
            </div>
            <div class="item_temptation">职位诱惑：{{detail?detail.temptation:null}}</div>
        </div>
        <!-- 公司 -->
        <div class="company">
            <div class="desc">
                <img class="logo" :src="detail?detail.companyImg:null" alt="" />
                <div class="copany_info">
                    <div>
                        <p class="companyName">{{detail?detail.companyName:null}}</p>
                        <p class="companyAbout">{{nature(detail)}}</p>
                    </div>
                    <div class="company_certification"><van-icon name="passed" v-if="((detail?detail.certification:null) ==2) ? true : false" size='30px' /></div>
                </div>
            </div>
        </div>
        <!-- 职位描述 -->
        <div class="positiondesc">
            <header class="header">职位描述</header>
            <div class="duty">
                <div class="duty_txt" v-for="i in (detail?detail.describe.split('(*)'):null)" :key="i">{{i}}</div>
            </div>
        </div>
        <div class="positiondesc">
            <header class="header">面试评价(0)</header>
            <div class="evaluate">
                暂无面试评价
            </div>
        </div>

        <!-- 投递简历 -->
        <div class="resume">
            <div>投递简历</div>
        </div>
    </div>
</template>

<script>
// import { mapMutations } from 'vuex';

import { Icon } from 'vant';
import { mapMutations } from 'vuex';

export default {
    name:'Position',
    props:{
        detail:Object?Object:null,
    },
    data(){
        return ({})
    },
    methods:{
        // console.log(setPositionDetail,"详情")
        ...mapMutations({   //显示职位列表
            changeIsshow:'CHANGE_ISSHOW'
        }),
        workExper(obj){  //工作经验
            if(!obj){
                return null;
            }

            switch(obj.workExper){
                case 0:
                    return '不限';
                    break;
                case 1:
                    return '应届毕业生';
                    break;
                case 2:
                    return '一年以下';
                    break;
                case 3:
                    return '1-3年';
                    break;
                case 4:
                    return '3-5年';
                    break;
                case 5:
                    return '5-10年';
                    break;
                case 6:
                    return '10年以上';
                    break;
            }
        },
        education(obj){  //学历
             if(!obj){
                return null;
            }

            switch(obj.education){
                case 0:
                    return '学历不限';
                    break;
                case 1:
                    return '大专';
                    break;
                case 2:
                    return '大专及以上';
                    break;
                case 3:
                    return '本科';
                    break;
                case 4:
                    return '本科及以上';
                    break;
                case 5:
                    return '硕士';
                    break;
                case 6:
                    return '博士';
                    break;
            }
        },
        nature(obj){   //公司性质
            if(!obj){
                return null;
            }

            let companyFinance = null;
            let companyNum = null;
            switch(obj.companyFinance){
                case 0:
                    companyFinance = '未融资';
                    break;
                case 1:
                    companyFinance = '天使轮'
                    break;
                case 2:
                    companyFinance = 'A轮'
                    break;
                case 3:
                    companyFinance = 'B轮'
                    break;
                case 4:
                    companyFinance = 'C轮'
                    break;
                case 5:
                    companyFinance = 'D轮以上'
                    break;
                case 6:
                    companyFinance = '上市公司'
                    break;
                case 7:
                    companyFinance = '不需要融资'
                    break;
            }

            switch(obj.companyNum){
                case 0:
                    companyNum = '不详';
                    break;
                case 1:
                    companyNum = '15人以下'
                    break;
                case 2:
                    companyNum = '15-50人'
                    break;
                case 3:
                    companyNum = '50-150人'
                    break;
                case 4:
                    companyNum = '150-500人'
                    break;
                case 5:
                    companyNum = '500-2000人'
                    break;
                case 6:
                    companyNum = '2000人以上'
                    break;
            }

            return `${obj.companyType} / ${companyFinance} / ${companyNum}`;
        },
        duty(obj){ //工作职责
            if(!obj){
                return null;
            }

            let arr = obj.describe.split('(*)');
            console.log(arr);
            
        }
    },
    components:{
        [Icon.name] : Icon,
    }
}
</script>

<style scoped lang="less">
    .detail_title{
        line-height: 45px;
        background-color: #00b38a;
        color: #fff;
        font-size: 1.2rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            margin: 0 15px;
        }
    }
    .position_name{
        display: flex;
        justify-content: space-between;
        line-height: 49px;
        border-bottom: 1px solid #e8e8e8;
        p{
            margin: 0 15px;
        }
        .position_name_left{
          font-size: 1.1rem;
          font-weight: 600;  
        }
    }

    .require{
        border-bottom: 1px solid #e8e8e8;
        min-height: 10px;
        padding: 15px;
        .require_item{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            span{
                width: 33.33%;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                color: #333;
                font-size: 0.9rem;
                .item_icon{
                    color: #00b38a;
                    margin-right: 7px;
                }
            }
            .item_left{
                text-align: left;
            }
            .item_center{
                text-align: center;
                display: flex;
                justify-content: center;
            }
            .item_right{
                text-align: right;
                display: flex;
                justify-content: flex-end;
            }
        }
        .item_temptation{
            text-align: left;
            color: #888;
            word-break: break-all;
            font-size: 0.85rem;
        }
    }

    // 简历投递
    .resume{
        width: 100%;
        height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        left:0;
        bottom: 0;
        z-index: 100;
        background-color: #fff;
        div{
            width:100%;
            line-height: 44px;
            text-align: center;
            background-color: #00b38a;
            color: #fff;
            margin: 0 15px;
            border-radius: 3px;
            font-size: 1.1rem;
        }
    }

    .company{
        border-bottom: 1px solid #e8e8e8;
        min-height: 10px;
        padding: 20px 15px;
        .desc{
            width: 100%;
            display: flex;
            .logo{
                width:60px;
                height:60px;
            }
            .copany_info{
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex: 1;
                align-items: center;
                margin-left: 10px;
                text-align: left
            }
        }
    }
    .companyName{
        color: #00b38a;
        font-size: 1.3rem;
        margin-bottom: 7px;
    }
    .companyAbout{
        color: #888;
        font-size: 0.85rem;
    }
    .company_certification{
        color: #00b38a;           
    }
    //职位描述
    .positiondesc{
        min-height: 10px;
        .header{
            line-height: 36px;
            padding-left: 15px;
            color: #00b38a;
            font-size: 1.1rem;
            background-color: #d2f9f0;
            text-align: left;
        }
        .duty{
            word-break: break-all;
            padding: 15px;
            color: #555;
            font-size: 1.2rem;
            line-height: 22px;
            .duty_txt{
                word-break: break-all;
                color: #555;
                font-size: 0.9rem;
                line-height: 25px;
                text-align: left;
            }
        }
    }
    .evaluate{
        padding: 15px;
        margin-bottom: 100px;
        font-size: 0.8rem;
        text-align: left;
    }
</style>


