<template>
    <div class="login">
        <!-- 使用elementui组件  el-card 卡片 -->
        <el-card class="login-card">
            <div class="title">
            <img src="../../assets/img/logo_index.png" alt="">
        </div>
            <!-- 表单 el-form -->
            <el-form style="margin-top:20px">
                <!-- 每一个表单域都是由一个form-itme 组件构成 -->
                <el-form-item>
                    <!-- 表单域中可以放置各类表单控件 如iput -->
                    <el-input placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <!-- 验证码 -->
                    <el-input style="width:60%" placeholder="验证码"></el-input>
                    <!-- 发送验证码 -->
                    <el-button style="float:right">发送验证码</el-button>
                </el-form-item>
                <el-form-item>
                    <!-- 同意选项 -->
                    <el-checkbox>
                        我已阅读并同意用户协议和隐私条款
                    </el-checkbox>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button type="primary" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
.login{
    background-image: url('../../assets/img/19.jpg');
    // background-image: url('../../assets/img/43.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
        width: 440px;
        height: 350px;
        // text-align: center;
        .title{
            text-align: center;
        }
        img{
            height: 45px;
        }
    }
}
</style>
