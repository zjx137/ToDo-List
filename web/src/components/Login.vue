<template>
  <div class="login">
    <div class="login-box">
      <h1 style="text-align:start;">To-Do</h1>
      <div class="form-box">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
          ]"
          placeholder="Username"
          ><a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" /></a-input>
        </a-form-item>
        <a-form-item>
          <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your password!' }] },
          ]"
          type="password"
          placeholder="Password"
          ><a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" /></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" style="width:300px;">
            Log in
          </a-button>
        </a-form-item>
      </a-form>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: this.$form.createForm(this, { name: 'login' }),
    }
  },
  methods: {
    handleSubmit(){
        this.form.validateFields((err, values) => {
        if (!err) {
          //console.log('Received values of form: ', values);
          //ajax
          axios.request({
            baseURL:'http://127.0.0.1:7070/',
            url:'/api/users/login',
            method:'post',
            data: values,
          }).then(res=>{
            //console.log(res.data)
            if(res.data.status===200){
              sessionStorage.setItem("userId",res.data.data.userId)
              this.$router.push({name:'index'})
            }
            else{
              this.$message.error('密码错误');
            }
          })
          //router
          //this.$router.push({name:'index'})
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: relative;
  top: 50%;
  transform: translateY(-75%);
}
.login-box {
  padding: 30px;
  width: 350px;
  display: block;
  margin: 0 auto;
  background: #f6f6f6;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0,0,0,0.07);
}
.form-box {
  display: block;
  width: 300px;
  height: auto;
  margin: auto;
}
</style>
