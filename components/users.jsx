import firebase from './firebase'
//import firestore from '@react-native-firebase/firestore';
//import auth from '@react-native-firebase/auth';

const db = firebase.ref('/users')
const _db = firebase.ref('/users')

class Users {
    
    getData() {
        return db
    }
    
    createData(userInfo) {
        return db.push(userInfo);
    }
    
    getDataById(ref){
        return firebase.ref(`/users/${ref}`)
    }
    updateData(key, value) {
        console.log(value)
        return db.child(key).update(value);
    }
    
    deleteTodo(key) {
        return db.child(key).remove();
    }
    
    login(email, password,navigation) {
       firebase.app.auth().signInWithEmailAndPassword(email,password).then(res => {
           if(res.user.emailVerified){
               console.log('email verified')
               navigation.navigate('About')
               localStorage.setItem('userid', res.user.uid)
           }else {
               console.log('please verify your email address')
               res.user.sendEmailVerification().then(res => {
                   console.log('we send you an email again, please verify your email')
               }).catch(err => {
                   console.log(err.message)
               })
           }
       })
    }
    
    signUp(email, password, name ){
        return firebase.app.auth().createUserWithEmailAndPassword(email, password).then(res => {
            res.user.sendEmailVerification().then( action => {
                console.log('Verification email sent')
                firebase.ref(`/user`).child(res.user.uid).set({
                    name : name,
                    email: email,
                    uid: res.user.uid
                })
            }).catch( err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    resetPassword(email){
        firebase.app.auth().sendPasswordResetEmail(email).then(res => {
            console.log('password reset')
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    getLoggedData(id){
        return firebase.ref(`/user/${id}`)
    }

    logOut(navigation){
        firebase.app.auth().signOut().then( () => {
            console.log('logged out')
            localStorage.removeItem('userid')
            navigation.goBack()
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    
    GoogleLogin(){
        firebase.app.auth().fetchSignInMethodsForEmail()
    }
    
    updateBIO(ref, info) {
        firebase.ref('/user').child(ref).update({
            dsc : info
        }).then(() => {
            console.log('bio created')
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    
}

export default new Users()

//npm add @react-native-firebase/app
//npm add @react-native-firebase/database