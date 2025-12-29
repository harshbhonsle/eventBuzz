
import mongoose , {Schema , Document} from "mongoose";

export interface IUser extends Document {
    email:string;
    password:string;
    role: "admin" | "student";
}

const UserSchema : Schema<IUser> = new Schema({
    email :{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String , enum:["admin", "student"], default: "student"}
})

UserSchema.index({ email: 1 });

export default mongoose.model<IUser>("User",UserSchema);