import { v4 as uuidv4 } from 'uuid';

let users=[];
export const getUsers =(req,res)=>{
    
    res.send(users)
};

export const createUser =(req,res)=>{
    
    const user = req.body;
    users.push({ ...user, id : uuidv4() });

    res.send(users)
}

export const getUsere =(req,res)=>{
    
    const { id } = req.params;

    const founduser = users.find((user)=>user.id == id)
    res.send(founduser)
}

export const deleteUser = (req,res)=>{
    
    const { id } = req.params;

    users= users.filter((user)=>user.id !== id)
    res.send(users)
}

export const updateUser = (req,res)=>{
    
    const { id } = req.params;
    const {firstname,lastname,Age} = req.body;
    const user = users.find((user)=>user.id === id)

    if (user.firstname) {
        user.firstname=firstname;
    }
    if (user.lastname) {
        user.lastname=lastname;
    }
    if (user.Age) {
        user.Age=Age;
    }


    res.send("Done ")
}