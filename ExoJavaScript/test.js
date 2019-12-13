// Test  sur la Notion de class
class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    info(){
        return ` nom :${this.name}\n Email: ${this.email}`
    }

}
class admin extends user{
    constructor(name, email){
        super(name,email)
        this.status = 'admin'
    }
    info(){
      return `${super.info()}\n état:${this.status}`
    }
}
class myError{
  
    SetName(params) {
        if(params===undefined){
           throw new Error('la fonction getError doit prendre un parmetre')
        }
        return `name:${params}`
    }
    ErrorName( name){
        try {
            console.log(this.SetName(name))
            
        } catch (error) {
            let div = document.createElement('div');
            div.textContent=`${name}: ${error.message}`
            document.body.appendChild(div)
        }
    }
   
 
}
 const utlisateur = new user('diallo','diallo@hotmail.com')
 const Administrateur = new admin('SuperUSer','Admin@hotmail.com')
 console.log(utlisateur.info());
 console.log(Administrateur.info());

