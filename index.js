const App=require('./App');
let PORT=process.env.PORT|| 5050;
App.listen(PORT,function(){
    console.log('App Run Success')
})