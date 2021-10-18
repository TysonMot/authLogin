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
               navigation.navigate('About', {
                   itemId : res.user.uid
               })
           }else {
               console.log('please verify your email address')
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
            console.log(err)
        })
    }
    
    resetPassword(){
        firebase.addCollection('').subscribe().then(res => {
            
        })
    }
    
    users  = [
        { id: 1, name : 'Tyssadsdaon', surname: 'Motlhabeng', img: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7404e54b10ff3d8992cc12c30771037dbf85254784b72267cd1914c_640.jpg', dsc : 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.'},
        { id: 2, name : 'Leah', surname: 'Motlhabeng',img: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7404e54b10ff3d8992cc12c30771037dbf85254784b72267cd1914c_640.jpg',dsc : 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.'},
        { id: 3, name : 'Maria', surname: 'Motlhabeng',img: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7404e54b10ff3d8992cc12c30771037dbf85254784b72267cd1914c_640.jpg', dsc : 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.'},
        { id: 4, name : 'Lethabo', surname: 'Motlhabeng',img: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7404e54b10ff3d8992cc12c30771037dbf85254784b72267cd1914c_640.jpg', dsc : 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.'},
        { id: 5, name : 'Matome', surname: 'Motlhabeng',img: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7404e54b10ff3d8992cc12c30771037dbf85254784b72267cd1914c_640.jpg', dsc : 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.'},
        { id: 6, name : 'Maropene', surname: 'Motlhabeng',img: 'https://randomwordgenerator.com/img/picture-generator/5fe3d7404e54b10ff3d8992cc12c30771037dbf85254784b72267cd1914c_640.jpg', dsc : 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood.'},
    ]

}

export default new Users()

//npm add @react-native-firebase/app
//npm add @react-native-firebase/database