class Label {
    #Name;
  
    get Name(){
        return this.#Name;
    }
  
    set Name(Name){
        this.#Name = Name;
    }
    
    constructor(Name){ 
        this.#Name = Name
    }
}
export{Contact}