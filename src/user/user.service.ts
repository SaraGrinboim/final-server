import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, UserDocument } from 'src/scheamas/user.scheame';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,@InjectConnection() private connection: Connection){}
   
    async signup(userName:string, password:string) {
      const newUser = new this.UserModel({userName, password});
       const result=  await  newUser.save();
     console.log(result);
  }

  async getAll() {
    const Users = await this.UserModel.find();
    return Users;}
    // getUser(): string {
  //   return 'Sarale & Tamar && ST';
  // }
  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const createdUser = new this.UserModel(createUserDto);
  //   return createdUser.save();
  // }

  // async findAll(): Promise<User[]> {
  //   debugger
  //   try{
  //     console.log('findAll2')
  //     return this.UserModel.find();
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  }



