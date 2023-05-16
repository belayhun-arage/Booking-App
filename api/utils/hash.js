import bcrypt from "bcryptjs"
const saltRounds = bcrypt.genSaltSync(10);

export const hashPassword=(password)=>{
    return bcrypt.hashSync(password,saltRounds)
}

export const isCorrectPassword=async(userPassword,enteredPassword)=>{
    return await bcrypt.compare(enteredPassword,userPassword)
}
